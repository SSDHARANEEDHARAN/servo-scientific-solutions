import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ArrowLeft, Cookie, Settings, Shield, BarChart, Target } from 'lucide-react';

interface CookiePolicyProps {
  onBackToHome: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBackToHome }) => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const handleCookieToggle = (type: string) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  const saveSettings = () => {
    // Save cookie preferences to localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings));
    alert('Cookie preferences saved successfully!');
  };

  const cookieTypes = [
    {
      id: 'essential',
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: ['Session management', 'Security tokens', 'Load balancing', 'Basic functionality'],
      required: true
    },
    {
      id: 'analytics',
      icon: <BarChart className="h-6 w-6 text-blue-500" />,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics', 'Error tracking'],
      required: false
    },
    {
      id: 'marketing',
      icon: <Target className="h-6 w-6 text-green-500" />,
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track campaign effectiveness.',
      examples: ['Ad personalization', 'Conversion tracking', 'Remarketing', 'Social media integration'],
      required: false
    },
    {
      id: 'preferences',
      icon: <Settings className="h-6 w-6 text-purple-500" />,
      title: 'Preference Cookies',
      description: 'These cookies remember your preferences and settings to enhance your experience.',
      examples: ['Language settings', 'Theme preferences', 'Font size', 'Layout customization'],
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            onClick={onBackToHome}
            className="mb-6 border-white text-white hover:bg-white hover:text-professional-blue"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Learn about how we use cookies to improve your browsing experience and manage your cookie preferences.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Last Updated */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Cookie className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Last updated: January 2024</span>
            </div>
          </CardContent>
        </Card>

        {/* What Are Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Cookie className="h-6 w-6 text-primary" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better browsing experience by remembering your preferences 
              and analyzing how you use our site.
            </p>
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">How Cookies Work:</h4>
              <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                <li>Your browser receives a cookie when you visit our website</li>
                <li>The cookie is stored locally on your device</li>
                <li>When you revisit our site, your browser sends the cookie back to us</li>
                <li>We use this information to enhance your experience</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Cookie Settings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Settings className="h-6 w-6 text-primary" />
              Manage Your Cookie Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              You can control which cookies are set on your device. Please note that disabling certain 
              cookies may affect your browsing experience.
            </p>
            
            <div className="space-y-6">
              {cookieTypes.map((cookie) => (
                <Card key={cookie.id} className="border border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {cookie.icon}
                        <div>
                          <CardTitle className="text-lg">{cookie.title}</CardTitle>
                          {cookie.required && (
                            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded mt-1 inline-block">
                              Always Active
                            </span>
                          )}
                        </div>
                      </div>
                      {!cookie.required && (
                        <Switch
                          checked={cookieSettings[cookie.id as keyof typeof cookieSettings]}
                          onCheckedChange={() => handleCookieToggle(cookie.id)}
                        />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{cookie.description}</p>
                    <div>
                      <h5 className="font-medium text-sm mb-2">Examples of {cookie.title}:</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {cookie.examples.map((example, index) => (
                          <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <Button onClick={saveSettings} className="flex-1">
                Save Preferences
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setCookieSettings({ essential: true, analytics: false, marketing: false, preferences: false })}
              >
                Reject All Optional
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Third-Party Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Some cookies on our website are set by third-party services we use to enhance functionality:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold">Analytics Services</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Google Analytics</li>
                  <li>• Hotjar (user behavior)</li>
                  <li>• Microsoft Clarity</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Social Media & Marketing</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Facebook Pixel</li>
                  <li>• LinkedIn Insight Tag</li>
                  <li>• YouTube (embedded videos)</li>
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              These services have their own cookie policies. You can learn more about their practices 
              by visiting their respective privacy policies.
            </p>
          </CardContent>
        </Card>

        {/* Browser Settings */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Browser Cookie Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              You can also manage cookies directly through your browser settings:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Desktop Browsers</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Chrome</span>
                    <span className="text-muted-foreground">Settings → Privacy → Cookies</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Firefox</span>
                    <span className="text-muted-foreground">Preferences → Privacy</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Safari</span>
                    <span className="text-muted-foreground">Preferences → Privacy</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Edge</span>
                    <span className="text-muted-foreground">Settings → Privacy</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Mobile Browsers</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>iOS Safari</span>
                    <span className="text-muted-foreground">Settings → Safari → Privacy</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Android Chrome</span>
                    <span className="text-muted-foreground">Menu → Settings → Privacy</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted rounded">
                    <span>Firefox Mobile</span>
                    <span className="text-muted-foreground">Menu → Settings → Privacy</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Questions About Cookies?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> privacy@servoscientific.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Industrial Avenue, Salem, Tamil Nadu 636001, India</p>
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <strong>Note:</strong> This cookie policy is part of our Privacy Policy. 
                For more information about how we handle your personal data, please review our complete Privacy Policy.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookiePolicy;