import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import Backing from '../sections/Backing'
import TokenShowcase from '../sections/TokenShowcase'
import SwapSection from '../sections/SwapSection'
import Emeralds from '../sections/Emeralds'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Backing />
        <TokenShowcase />
        <SwapSection />
        <Emeralds />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
