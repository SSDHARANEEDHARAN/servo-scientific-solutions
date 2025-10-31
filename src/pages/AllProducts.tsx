import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { productDatabase, productCategories } from '@/data';
import ProductDetail from '@/components/ProductDetail';
import SEOHead from '@/components/SEOHead';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquiryForm from '@/components/InquiryForm';

interface AllProductsProps {
  onBackToHome: () => void;
  onInquiryClick: () => void;
}

const AllProducts: React.FC<AllProductsProps> = ({ onBackToHome, onInquiryClick }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Set initial category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleInquiryClick = () => {
    setIsInquiryOpen(true);
  };

  const categories = ['All', ...Object.keys(productCategories)];
  
  const filteredProducts = Object.entries(productDatabase).filter(([key, product]) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedProduct) {
    const product = productDatabase[selectedProduct];
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="outline"
            onClick={() => setSelectedProduct(null)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Products
          </Button>
          <ProductDetail
            isOpen={true}
            onClose={() => setSelectedProduct(null)}
            onInquiry={handleInquiryClick}
            product={product}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="All Products | Scientific & Laboratory Equipment | Servo Scientific Suppliers"
        description="Browse our complete range of high-quality scientific and laboratory equipment including heating instruments, industrial furnaces, environmental chambers, and microbiology instruments."
        keywords="scientific equipment, laboratory instruments, heating equipment, industrial furnace, environmental chamber, microbiology instruments, thermocouple"
        canonical="https://servoscientific.com/products"
      />
      
      <Navigation
        onInquiryClick={handleInquiryClick}
        onProductSelect={() => {}}
        onAboutClick={() => navigate('/about')}
        onContactClick={() => navigate('/contact')}
      />

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Explore our complete range of scientific and industrial equipment designed for precision and reliability.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card rounded-lg p-6 mb-8 shadow-soft">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(([key, product]) => (
            <Card key={key} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={`${product.name} by Servo Scientific Suppliers – High-quality ${product.category} equipment`}
                  title={`${product.name} - Professional ${product.category}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                  {product.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {product.description}
                </p>
                
                {/* Key Specifications */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground">Key Specifications:</h4>
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="text-foreground font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedProduct(key)}
                    className="flex-1"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleInquiryClick}
                    className="flex-1"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer
        onInquiryClick={handleInquiryClick}
        onCategorySelect={() => {}}
        onAboutClick={() => navigate('/about')}
        onAllProductsClick={() => navigate('/products')}
        onServicesClick={() => navigate('/services')}
        onQualityClick={() => navigate('/quality')}
        onContactClick={() => navigate('/contact')}
      />
      
      <InquiryForm
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
};

export default AllProducts;