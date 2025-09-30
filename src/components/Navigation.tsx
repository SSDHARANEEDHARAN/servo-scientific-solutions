import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Sun, Moon, Phone, Download, Home, HelpCircle, LogOut, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { productCategories, productDatabase } from '@/data';
import { supabase } from '@/integrations/supabase/client';
import type { User as SupabaseUser } from '@supabase/supabase-js';

interface NavigationProps {
  onInquiryClick: () => void;
  onProductSelect?: (product: any) => void;
  onAboutClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onInquiryClick, onProductSelect, onAboutClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleProductClick = (productName: string) => {
    const product = productDatabase[productName as keyof typeof productDatabase];
    if (product && onProductSelect) {
      onProductSelect(product);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const requireAuth = (action: () => void) => {
    if (!user) {
      setShowAuthModal(true);
      setAuthMode('signin');
      toast({
        title: "Sign in required",
        description: "Please sign in to access this feature.",
        variant: "destructive",
      });
      return;
    }
    action();
  };

  const handleDownloadClick = () => {
    requireAuth(() => {
      toast({
        title: "Feature Coming Soon",
        description: "Download feature will be available soon!",
      });
    });
  };

  const handleInquiryClick = () => {
    requireAuth(() => {
      onInquiryClick();
    });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: authData.email,
        password: authData.password,
      });
      
      if (error) throw error;
      
      toast({
        title: "Signed in successfully!",
        description: "Welcome back to Servo Scientific.",
      });
      setShowAuthModal(false);
      setAuthData({ email: '', password: '', confirmPassword: '' });
    } catch (error: any) {
      toast({
        title: "Sign in failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (authData.password !== authData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords are the same.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email: authData.email,
        password: authData.password,
        options: {
          emailRedirectTo: window.location.origin
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Account created successfully!",
        description: "You can now sign in with your credentials.",
      });
      setAuthMode('signin');
      setAuthData({ email: authData.email, password: '', confirmPassword: '' });
    } catch (error: any) {
      toast({
        title: "Sign up failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
      
      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Google sign in failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Signed out successfully",
        description: "Thank you for visiting Servo Scientific.",
      });
    } catch (error: any) {
      toast({
        title: "Sign out failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleSupportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      requireAuth(() => {});
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-form-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        }),
      });

      if (response.ok) {
        toast({
          title: "Support Request Submitted",
          description: "We'll get back to you soon!",
        });
        setIsSupportOpen(false);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to submit support request');
      }
    } catch (error) {
      toast({
        title: "Error submitting request",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="bg-gray-50 dark:bg-professional-blue-dark border-b border-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with Popup Menu */}
            <div className="flex flex-col items-start relative">
              <div className="text-2xl font-bold text-primary">
                Servo Scientific Suppliers
              </div>
              <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md px-3 py-1 shadow-elegant z-50">
                <div className="flex items-center space-x-2 text-sm whitespace-nowrap">
                  <button 
                    onClick={onAboutClick}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    About
                  </button>
                  <span className="text-muted-foreground">|</span>
                  <button 
                    onClick={handleInquiryClick}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Inquiries
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-foreground hover:text-primary transition-colors font-medium">
                  Home
                </button>
            
                {/* Products Mega Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors font-medium group">
                    Products
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-[800px] p-6 bg-card border-border"
                    onMouseLeave={() => {
                      // Auto-close on mouse leave
                      const trigger = document.querySelector('[data-radix-dropdown-trigger]') as HTMLElement;
                      if (trigger) trigger.click();
                    }}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(productCategories).map(([categoryName, products]) => (
                        <div key={categoryName} className="space-y-3">
                          <h3 className="font-semibold text-sm text-primary uppercase tracking-wide">
                            {categoryName}
                          </h3>
                          <div className="space-y-2">
                            {products.map((productName) => (
                              <button
                                key={productName}
                                onClick={() => handleProductClick(productName)}
                                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                              >
                                {productName}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                  Contact
                </a>
              </nav>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="h-9 w-9 text-foreground hover:text-primary hover:bg-accent"
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
                
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{user.email?.split('@')[0]}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={handleSignOut}>
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button 
                    variant="professional" 
                    onClick={() => setShowAuthModal(true)}
                    className="text-primary-foreground bg-primary hover:bg-primary/90"
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-card text-card-foreground">
                  <div className="flex flex-col space-y-6 mt-6">
                    {/* Mobile Company Menu */}
                    <div className="space-y-3 pb-4 border-b border-border">
                      <div className="font-semibold text-primary text-lg">Servo Scientific Suppliers</div>
                      <button 
                        onClick={onAboutClick}
                        className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                      >
                        About Us
                      </button>
                      <button 
                        onClick={handleInquiryClick}
                        className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                      >
                        Inquiries
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="font-semibold text-primary">Products</div>
                      {Object.entries(productCategories).map(([categoryName, products]) => (
                        <div key={categoryName} className="ml-4 space-y-2">
                          <div className="font-medium text-foreground text-sm">{categoryName}</div>
                          {products.map((productName) => (
                            <button
                              key={productName}
                              onClick={() => handleProductClick(productName)}
                              className="block text-sm text-muted-foreground hover:text-foreground transition-colors ml-4"
                            >
                              {productName}
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                    
                    <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                      Contact
                    </a>
                    
                    <div className="flex items-center space-x-4 pt-4 border-t border-border">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDarkMode}
                        className="text-foreground hover:text-primary hover:bg-accent"
                      >
                        {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                      </Button>
                      
                      {user ? (
                        <Button 
                          variant="professional" 
                          onClick={handleSignOut}
                          className="text-primary-foreground bg-primary hover:bg-primary/90"
                        >
                          Sign Out
                        </Button>
                      ) : (
                        <Button 
                          variant="professional" 
                          onClick={() => setShowAuthModal(true)}
                          className="text-primary-foreground bg-primary hover:bg-primary/90"
                        >
                          Sign In
                        </Button>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Authentication Modal */}
      <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
        <DialogContent className="sm:max-w-md bg-card text-card-foreground">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              {authMode === 'signin' ? 'Sign In' : 'Sign Up'}
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            <form onSubmit={authMode === 'signin' ? handleSignIn : handleSignUp} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={authData.email}
                  onChange={(e) => setAuthData({...authData, email: e.target.value})}
                  required 
                  className="bg-background text-foreground border-border"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={authData.password}
                  onChange={(e) => setAuthData({...authData, password: e.target.value})}
                  required 
                  className="bg-background text-foreground border-border"
                />
              </div>
              {authMode === 'signup' && (
                <div>
                  <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password"
                    value={authData.confirmPassword}
                    onChange={(e) => setAuthData({...authData, confirmPassword: e.target.value})}
                    required 
                    className="bg-background text-foreground border-border"
                  />
                </div>
              )}
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {authMode === 'signin' ? 'Sign In' : 'Sign Up'}
              </Button>
            </form>
            
            <div className="mt-4">
              <Button 
                onClick={handleGoogleSignIn}
                variant="outline" 
                className="w-full"
              >
                Continue with Google
              </Button>
            </div>
            
            <div className="mt-4 text-center">
              <button 
                onClick={() => {
                  setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
                  setAuthData({ email: '', password: '', confirmPassword: '' });
                }}
                className="text-primary hover:underline text-sm"
              >
                {authMode === 'signin' ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Quick Access Panel */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 group">
        <div className="bg-primary text-primary-foreground p-3 rounded-r-lg shadow-professional transition-all duration-300 group-hover:w-56 w-14 overflow-hidden">
          <div className="flex flex-col space-y-6">
            {/* Home */}
            <button 
              onClick={handleHomeClick}
              className="flex items-center space-x-3 hover:bg-primary-foreground/10 rounded p-2 transition-colors"
            >
              <Home className="h-5 w-5 flex-shrink-0" />
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                Home
              </span>
            </button>

            {/* Download */}
            <button 
              onClick={handleDownloadClick}
              className="flex items-center space-x-3 hover:bg-primary-foreground/10 rounded p-2 transition-colors"
            >
              <Download className="h-5 w-5 flex-shrink-0" />
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                Downloads
              </span>
            </button>

            {/* Support */}
            <Dialog open={isSupportOpen} onOpenChange={setIsSupportOpen}>
              <DialogTrigger asChild>
                <button className="flex items-center space-x-3 hover:bg-primary-foreground/10 rounded p-2 transition-colors">
                  <HelpCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                    Support
                  </span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card text-card-foreground">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Support Request</h3>
                  <form onSubmit={handleSupportSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        required 
                        className="bg-background text-foreground border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        className="bg-background text-foreground border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={4}
                        className="bg-background text-foreground border-border"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Submit Request
                    </Button>
                  </form>
                </div>
              </DialogContent>
            </Dialog>

            {/* LinkedIn */}
            <button 
              onClick={handleLinkedInClick}
              className="flex items-center space-x-3 hover:bg-primary-foreground/10 rounded p-2 transition-colors"
            >
              <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                LinkedIn
              </span>
            </button>

            {/* Call Back */}
            <button 
              onClick={handleCallClick}
              className="flex items-center space-x-3 hover:bg-primary-foreground/10 rounded p-2 transition-colors"
            >
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                Call Back
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;