import jsPDF from 'jspdf';

interface Product {
  name: string;
  category: string;
  images: string[];
  specifications: {
    [key: string]: string;
  };
  features: string[];
  description: string;
}

export const generateProductDatasheet = async (product: Product): Promise<void> => {
  console.log('generateProductDatasheet called with:', product);
  try {
    console.log('Creating jsPDF instance');
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 20;
    console.log('PDF instance created, starting generation');

    // Add company header
    pdf.setFontSize(24);
    pdf.setTextColor(0, 51, 102);
    pdf.text('Servo Scientific', pageWidth / 2, yPosition, { align: 'center' });
    
    yPosition += 10;
    pdf.setFontSize(12);
    pdf.setTextColor(100, 100, 100);
    pdf.text('Technical Datasheet', pageWidth / 2, yPosition, { align: 'center' });
    
    // Add line separator
    yPosition += 5;
    pdf.setDrawColor(0, 51, 102);
    pdf.line(20, yPosition, pageWidth - 20, yPosition);
    
    // Product Name
    yPosition += 15;
    pdf.setFontSize(20);
    pdf.setTextColor(0, 0, 0);
    pdf.text(product.name, 20, yPosition);
    
    // Category
    yPosition += 8;
    pdf.setFontSize(12);
    pdf.setTextColor(100, 100, 100);
    pdf.text(`Category: ${product.category}`, 20, yPosition);
    
    // Add product image
    yPosition += 10;
    if (product.images && product.images.length > 0) {
      try {
        // Create a placeholder for image (since we're using placeholder.svg)
        pdf.setFillColor(240, 240, 240);
        pdf.rect(20, yPosition, 80, 80, 'F');
        pdf.setTextColor(150, 150, 150);
        pdf.setFontSize(10);
        pdf.text('Product Image', 60, yPosition + 40, { align: 'center' });
        yPosition += 85;
      } catch (error) {
        console.error('Error adding image:', error);
        yPosition += 10;
      }
    }
    
    // Description section
    pdf.setFontSize(14);
    pdf.setTextColor(0, 51, 102);
    pdf.text('Product Description', 20, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    const descriptionLines = pdf.splitTextToSize(product.description, pageWidth - 40);
    pdf.text(descriptionLines, 20, yPosition);
    yPosition += descriptionLines.length * 6 + 10;
    
    // Check if we need a new page
    if (yPosition > pageHeight - 60) {
      pdf.addPage();
      yPosition = 20;
    }
    
    // Features section
    pdf.setFontSize(14);
    pdf.setTextColor(0, 51, 102);
    pdf.text('Key Features', 20, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    product.features.forEach((feature, index) => {
      if (yPosition > pageHeight - 20) {
        pdf.addPage();
        yPosition = 20;
      }
      pdf.text(`• ${feature}`, 25, yPosition);
      yPosition += 6;
    });
    
    yPosition += 10;
    
    // Check if we need a new page
    if (yPosition > pageHeight - 60) {
      pdf.addPage();
      yPosition = 20;
    }
    
    // Technical Specifications section
    pdf.setFontSize(14);
    pdf.setTextColor(0, 51, 102);
    pdf.text('Technical Specifications', 20, yPosition);
    yPosition += 8;
    
    pdf.setFontSize(10);
    pdf.setTextColor(0, 0, 0);
    
    Object.entries(product.specifications).forEach(([key, value]) => {
      if (yPosition > pageHeight - 20) {
        pdf.addPage();
        yPosition = 20;
      }
      
      // Draw specification row with background
      pdf.setFillColor(245, 245, 245);
      pdf.rect(20, yPosition - 4, pageWidth - 40, 8, 'F');
      
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${key}:`, 25, yPosition);
      
      pdf.setFont('helvetica', 'normal');
      const valueText = pdf.splitTextToSize(value, 100);
      pdf.text(valueText, 100, yPosition);
      
      yPosition += 8;
    });
    
    // Footer
    const totalPages = pdf.internal.pages.length - 1;
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(150, 150, 150);
      pdf.text(
        `Servo Scientific | www.servoscientific.com | Page ${i} of ${totalPages}`,
        pageWidth / 2,
        pageHeight - 10,
        { align: 'center' }
      );
    }
    
    // Generate filename
    const filename = `${product.name.replace(/\s+/g, '_')}_Datasheet.pdf`;
    console.log('Saving PDF with filename:', filename);
    
    // Save the PDF
    pdf.save(filename);
    console.log('PDF saved successfully');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};
