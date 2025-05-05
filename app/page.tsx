import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-navy dark:text-white">
              <span className="text-gold">Real</span>Estate<span className="text-gold">Pro</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/listings" className="text-sm font-medium text-foreground hover:text-gold transition-colors">
              Listings
            </Link>
            <Link
              href="/consultation"
              className="text-sm font-medium text-foreground hover:text-gold transition-colors"
            >
              Consultation
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-gold transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              className="hidden md:flex border-gold text-foreground hover:text-gold hover:bg-transparent"
            >
              Sign In
            </Button>
            <Button className="bg-gold hover:bg-gold/90 text-white">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://i.imgur.com/jTxUJgA.jpeg?height=700&width=1920"
              alt="Luxury Home"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
              Find Your Dream Home With RealEstatePro
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Exclusive listings. Local experts. Personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white">
                <Link href="/listings">Browse Listings</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/consultation">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`https://i.imgur.com/T2wCk9i.png/a/QCNXD1V?height=400&width=600&text=Property ${i}`}
                      alt={`Property ${i}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-gold px-3 py-1 rounded-full text-white text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Luxury Villa in Beverly Hills</h3>
                    <p className="text-gold font-bold text-lg mb-2">$4,500,000</p>
                    <p className="text-muted-foreground mb-4">5 beds • 6 baths • 4,200 sq ft</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-gold text-foreground hover:bg-gold hover:text-white"
                    >
                      <Link href={`/listings/${i}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild className="bg-gold hover:bg-gold/90 text-white">
                <Link href="/listings" className="flex items-center gap-2">
                  View All Properties <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">Why Choose RealEstatePro?</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We provide exceptional service and expertise to help you find your perfect home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Exclusive Listings",
                  description: "Access to premium properties not available on the open market.",
                },
                {
                  title: "Expert Agents",
                  description: "Our team of experienced agents know the local market inside and out.",
                },
                {
                  title: "Personalized Service",
                  description: "Tailored approach to meet your specific needs and preferences.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-background p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                    <Check className="text-gold" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
                <p className="text-white/80 mb-6">Schedule a free consultation with one of our expert agents today.</p>
                <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white">
                  <Link href="/consultation">Book a Consultation</Link>
                </Button>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://i.imgur.com/YRCBviH.png?height=400&width=600&text=Consultation"
                  alt="Consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Kyla Villamor",
                  role: "Homeowner",
                  quote:
                    "RealEstatePro made finding our dream home so easy. Their expertise and personalized approach exceeded our expectations.",
                },
                {
                  name: "Michael Chen",
                  role: "Property Investor",
                  quote:
                    "I've worked with many real estate companies, but RealEstatePro stands out for their professionalism and market knowledge.",
                },
                {
                  name: "Bob Oy",
                  role: "First-time Buyer",
                  quote:
                    "As a first-time buyer, I was nervous about the process. The team at RealEstatePro guided me every step of the way.",
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-muted p-8 rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#D4AF37"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted-foreground/20 flex items-center justify-center text-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted">
          <div className="container">
            <h2 className="text-xl font-medium text-foreground text-center mb-8">Trusted By</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {["Zillow", "Realtor.com", "Forbes"].map((logo, i) => (
                <div key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                  <div className="h-8 flex items-center justify-center">
                    <span className="text-lg font-bold text-muted-foreground">{logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-navy text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-gold">Real</span>Estate<span className="text-gold">Pro</span>
              </h3>
              <p className="text-white/70 mb-4">Luxury real estate services tailored to your needs.</p>
              <div className="flex gap-4">
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/70 hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/listings" className="text-white/70 hover:text-gold transition-colors">
                    Listings
                  </Link>
                </li>
                <li>
                  <Link href="/consultation" className="text-white/70 hover:text-gold transition-colors">
                    Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-gold transition-colors">
                    Buying
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-gold transition-colors">
                    Selling
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-gold transition-colors">
                    Investing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-gold transition-colors">
                    Market Analysis
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <address className="not-italic text-white/70">
                <p>123 Luxury Lane</p>
                <p>Beverly Hills, CA 90210</p>
                <p className="mt-2">info@realestatepro.com</p>
                <p>(800) 555-1234</p>
              </address>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} RealEstatePro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
