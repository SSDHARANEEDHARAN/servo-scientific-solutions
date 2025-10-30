import jsPDF from 'jspdf';
import { productDatabase, productCategories } from '@/data';

export const generateProductCatalog = async (): Promise<void> => {
  console.log('Generating product catalog...');
  
  try {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 20;

    // Cover page
    pdf.setFontSize(32);
    pdf.setTextColor(0, 51, 102);
    pdf.text('Servo Scientific', pageWidth / 2, yPosition + 30, { align: 'center' });
    
    yPosition += 45;
    pdf.setFontSize(18);
    pdf.setTextColor(100, 100, 100);
    pdf.text('Product Catalog', pageWidth / 2, yPosition, { align: 'center' });
    
    yPosition += 10;
    pdf.setFontSize(12);
    pdf.text('Complete Product Range with Technical Specifications', pageWidth / 2, yPosition, { align: 'center' });
    
    // Add new page for content
    pdf.addPage();
    yPosition = 20;

    // Iterate through each category
    for (const [categoryName, productList] of Object.entries(productCategories)) {
      // Category header
      pdf.setFontSize(20);
      pdf.setTextColor(0, 51, 102);
      pdf.text(categoryName, 20, yPosition);
      
      yPosition += 5;
      pdf.setDrawColor(0, 51, 102);
      pdf.line(20, yPosition, pageWidth - 20, yPosition);
      yPosition += 10;

      // Iterate through products in category
      for (const productName of productList) {
        const product = productDatabase[productName];
        
        if (!product) continue;

        // Check if we need a new page
        if (yPosition > pageHeight - 80) {
          pdf.addPage();
          yPosition = 20;
        }

        // Product name
        pdf.setFontSize(14);
        pdf.setTextColor(0, 0, 0);
        pdf.setFont('helvetica', 'bold');
        pdf.text(product.name, 20, yPosition);
        yPosition += 8;

        // Description
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(60, 60, 60);
        const descLines = pdf.splitTextToSize(product.description, pageWidth - 40);
        const maxDescLines = 3;
        const displayedDesc = descLines.slice(0, maxDescLines);
        pdf.text(displayedDesc, 20, yPosition);
        yPosition += displayedDesc.length * 5 + 5;

        // Key features (show first 3)
        pdf.setFontSize(9);
        pdf.setTextColor(0, 0, 0);
        const maxFeatures = 3;
        product.features.slice(0, maxFeatures).forEach((feature) => {
          if (yPosition > pageHeight - 20) {
            pdf.addPage();
            yPosition = 20;
          }
          pdf.text(`• ${feature}`, 25, yPosition);
          yPosition += 5;
        });

        // Specifications summary
        yPosition += 5;
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Key Specifications:', 20, yPosition);
        yPosition += 6;

        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        const specEntries = Object.entries(product.specifications).slice(0, 4);
        
        specEntries.forEach(([key, value]) => {
          if (yPosition > pageHeight - 20) {
            pdf.addPage();
            yPosition = 20;
          }
          
          pdf.setTextColor(80, 80, 80);
          pdf.text(`${key}:`, 25, yPosition);
          pdf.setTextColor(0, 0, 0);
          const valueLines = pdf.splitTextToSize(String(value), 100);
          pdf.text(String(valueLines[0]), 85, yPosition);
          yPosition += 5;
        });

        // Separator line
        yPosition += 5;
        pdf.setDrawColor(200, 200, 200);
        pdf.line(20, yPosition, pageWidth - 20, yPosition);
        yPosition += 10;
      }

      // Extra space between categories
      yPosition += 10;
    }

    // Footer on all pages
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

    // Save the PDF
    pdf.save('Servo_Scientific_Product_Catalog.pdf');
    console.log('Catalog PDF generated successfully');
    
  } catch (error) {
    console.error('Error generating catalog:', error);
    throw error;
  }
};
