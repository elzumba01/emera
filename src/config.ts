// Configuración global del proyecto EMERA by Frakxel

// ⚠️ Cambia este número por el WhatsApp real del proyecto (código de país + número, sin "+")
export const WHATSAPP_NUMBER = '573001112233'
export const WHATSAPP_MESSAGE =
  'Hola, quiero más información sobre EMERA by Frakxel y el token EMRA.'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`

export const TOKEN = {
  name: 'EMERA',
  symbol: 'EMRA',
  standard: 'ERC-20',
  priceUsdt: 1,
  by: 'Frakxel',
}
