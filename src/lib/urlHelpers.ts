/**
 * Utility functions for URL handling
 */

/**
 * Convert a name to a URL-friendly slug
 * Example: "Hot Air Oven" -> "hot-air-oven"
 */
export const nameToSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

/**
 * Convert a slug back to a readable name
 * Example: "hot-air-oven" -> "Hot Air Oven"
 */
export const slugToName = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Find the category name for a given product name
 */
export const findCategoryForProduct = (productName: string, productCategories: Record<string, string[]>): string | null => {
  for (const [category, products] of Object.entries(productCategories)) {
    if (products.includes(productName)) {
      return category;
    }
  }
  return null;
};

/**
 * Generate product URL from category and product name
 * Example: ("Heating Instruments", "Hot Air Oven") -> "/heating-instruments/hot-air-oven"
 */
export const generateProductUrl = (categoryName: string, productName: string): string => {
  return `/${nameToSlug(categoryName)}/${nameToSlug(productName)}`;
};
