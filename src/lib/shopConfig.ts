export const SHOP_CONFIG = {
  name: 'आशीर्वाद हार्डवेयर एंड पेंट हाउस',
  subtitle: 'Aashirwad Hardware & Paint House',
  phone: '9669348842',
  displayPhone: '+91 96693 48842',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919669348842',
  email: 'raisatyam78@gmail.com',
  tagline: 'आपके घर की सजावट का विश्वसनीय साथी',
} as const;

export interface WhatsAppOrderDetails {
  brand: string;
  name: string;
  code: string;
  hex: string;
  packSize: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
}

/**
 * Builds the official WhatsApp click-to-chat URL with a pre-filled professional order enquiry.
 * Formats the exact message specified for paint product ordering.
 */
export function generateWhatsAppOrderUrl(details: WhatsAppOrderDetails): string {
  const formattedUnitPrice = details.unitPrice.toLocaleString('en-IN');
  const formattedTotalAmount = details.totalAmount.toLocaleString('en-IN');

  const message = [
    'Hello! I want to place an order for the following paint product.',
    '',
    'Product Details:',
    '',
    `- Brand: ${details.brand}`,
    `- Product Name: ${details.name}`,
    `- Colour Code: ${details.code}`,
    `- Hex Code: ${details.hex}`,
    `- Container Size: ${details.packSize}`,
    `- Quantity: ${details.quantity}`,
    `- Price per Container: ₹${formattedUnitPrice}`,
    `- Total Amount: ₹${formattedTotalAmount}`,
    '',
    'Please confirm the availability and delivery details.',
    '',
    'Thank you!',
  ].join('\n');

  return `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
