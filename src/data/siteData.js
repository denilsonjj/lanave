import {
  BookOpen,
  Camera,
  ForkKnife,
  MapPin,
  MessageCircle,
  Pizza,
  Sparkles,
  Store,
  Wine,
} from 'lucide-react'

export const business = {
  name: 'La Nave Restaurante e Pizzaria',
  shortName: 'La Nave',
  tagline: 'O melhor de Igarassu está aqui',
  description: 'Restaurante, pizzaria, delivery e rodízio toda sexta.',
  hours: '11h às 23h',
  location: 'Igarassu - PE',
  address: 'PE-035 - Centro, Igarassu - PE, 53610-595',
  mapQuery: 'La Nave Restaurante e Pizzaria, PE-035 - Centro, Igarassu - PE, 53610-595',
  orderLink: 'https://pedido.anota.ai/loja/lanavepizzariadelivery',
  whatsapp:
    'https://api.whatsapp.com/send/?phone=5581994201507&text=Gostaria+de+fazer+um+pedido%21&type=phone_number&app_absent=0',
  instagram: 'https://www.instagram.com/lanaverestauranteepizzaria/',
}

export const mapDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  business.mapQuery,
)}`

export const images = {
  logo: '/images/logolanave.jpg',
  hero: '/images/pizza.jpg',
  heroTable: '/images/pizza.jpg',
  pizza: '/images/pizza.jpg',
  esfihas: '/images/esfiha-kitkat.jpg',
  buffet:
    'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85',
  plate:
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',
}

export const videos = {
  cartola: '/videos/pizza-cartola-lanave.mp4',
}

export const highlights = [
  {
    title: 'Pizzas',
    text: 'Massa bem servida, sabores clássicos e opções especiais para dividir.',
    image: images.pizza,
    icon: Pizza,
  },
  {
    title: 'Esfihas',
    text: 'Salgadas, doces e sempre práticas para pedir no delivery.',
    image: images.esfihas,
    icon: Sparkles,
  },
  {
    title: 'Self-service',
    text: 'Variedade no almoço para quem quer comer bem no dia a dia.',
    image: images.buffet,
    icon: ForkKnife,
  },
  {
    title: 'À la carte',
    text: 'Pratos completos para reunir família e amigos à mesa.',
    image: images.plate,
    icon: Store,
  },
]

export const menuCategories = [
  { label: 'Pizzas', icon: Pizza },
  { label: 'Esfihas', icon: Sparkles },
  { label: 'Self-service', icon: ForkKnife },
  { label: 'À la carte', icon: Store },
  { label: 'Drinks', icon: Wine },
]

export const bioLinks = [
  { label: 'Fazer pedido', icon: ForkKnife, href: business.orderLink, featured: true },
  { label: 'WhatsApp', icon: MessageCircle, href: business.whatsapp },
  { label: 'Ver cardápio', icon: BookOpen, href: business.orderLink },
  { label: 'Rodízio de sexta', icon: Pizza, href: business.whatsapp },
  { label: 'Localização', icon: MapPin, href: mapDirectionsLink },
  { label: 'Instagram', icon: Camera, href: business.instagram },
]
