import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Filter, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ListingsPage() {
  // Sample property data
  const properties = [
    {
      id: 1,
      title: "Modern Mansion in Beverly Hills",
      price: "$8,500,000",
      location: "Beverly Hills, CA",
      beds: 6,
      baths: 8,
      sqft: 7200,
      image: "https://i.imgur.com/bpEMflX.png?height=400&width=600&text=Property 1",
    },
    {
      id: 2,
      title: "Oceanfront Villa in Malibu",
      price: "$12,900,000",
      location: "Malibu, CA",
      beds: 5,
      baths: 7,
      sqft: 6500,
      image: "https://i.imgur.com/BjTlNhs.jpeg?height=400&width=600&text=Property 2",
    },
    {
      id: 3,
      title: "Contemporary Home in Hollywood Hills",
      price: "$5,750,000",
      location: "Hollywood Hills, CA",
      beds: 4,
      baths: 5,
      sqft: 4800,
      image: "https://i.imgur.com/o4P3OIi.png?height=400&width=600&text=Property 3",
    },
    {
      id: 4,
      title: "Luxury Penthouse in Downtown",
      price: "$4,200,000",
      location: "Downtown LA, CA",
      beds: 3,
      baths: 4,
      sqft: 3600,
      image: "https://i.imgur.com/qa1g0YX.png?height=400&width=600&text=Property 4",
    },
    {
      id: 5,
      title: "Spanish Villa in Santa Monica",
      price: "$7,800,000",
      location: "Santa Monica, CA",
      beds: 5,
      baths: 6,
      sqft: 5200,
      image: "https://i.imgur.com/vKGK9cy.png?height=400&width=600&text=Property 5",
    },
    {
      id: 6,
      title: "Modern Farmhouse in Bel Air",
      price: "$9,400,000",
      location: "Bel Air, CA",
      beds: 7,
      baths: 9,
      sqft: 8100,
      image: "https://i.imgur.com/YosmyJ8.png?height=400&width=600&text=Property 6",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold text-navy dark:text-white">
              <span className="text-gold">Real</span>Estate<span className="text-gold">Pro</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/listings" className="text-sm font-medium text-gold">
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
        <section className="bg-muted py-8 md:py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <Link href="/" className="inline-flex items-center text-foreground hover:text-gold mb-2">
                  <ArrowLeft size={16} className="mr-1" /> Back to Home
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Browse Listings</h1>
              </div>
              <div className="w-full md:w-auto">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-gold text-foreground flex items-center gap-2"
                >
                  <Filter size={16} /> Filter Properties
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
              <div className="bg-background p-6 rounded-lg border border-border h-fit">
                <h2 className="font-bold text-foreground text-lg mb-4">Filter Properties</h2>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Search</label>
                    <Input placeholder="Search properties..." className="border-border" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Price Range</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Select defaultValue="min">
                        <SelectTrigger>
                          <SelectValue placeholder="Min Price" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="min">Min Price</SelectItem>
                          <SelectItem value="1000000">$1,000,000</SelectItem>
                          <SelectItem value="3000000">$3,000,000</SelectItem>
                          <SelectItem value="5000000">$5,000,000</SelectItem>
                          <SelectItem value="10000000">$10,000,000</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select defaultValue="max">
                        <SelectTrigger>
                          <SelectValue placeholder="Max Price" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="max">Max Price</SelectItem>
                          <SelectItem value="5000000">$5,000,000</SelectItem>
                          <SelectItem value="10000000">$10,000,000</SelectItem>
                          <SelectItem value="15000000">$15,000,000</SelectItem>
                          <SelectItem value="20000000">$20,000,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Property Type</label>
                    <Select defaultValue="any">
                      <SelectTrigger>
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Type</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Bedrooms</label>
                    <Select defaultValue="any">
                      <SelectTrigger>
                        <SelectValue placeholder="Bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Bathrooms</label>
                    <Select defaultValue="any">
                      <SelectTrigger>
                        <SelectValue placeholder="Bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-gold hover:bg-gold/90 text-white">Apply Filters</Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-muted-foreground">Showing {properties.length} properties</p>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {properties.map((property) => (
                    <div
                      key={property.id}
                      className="group bg-background rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-1 text-gold font-bold text-lg mb-1">{property.price}</div>
                        <h3 className="text-foreground font-bold mb-1 line-clamp-1">{property.title}</h3>
                        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                          <MapPin size={14} />
                          <span>{property.location}</span>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground mb-4">
                          <span>{property.beds} beds</span>
                          <span>{property.baths} baths</span>
                          <span>{property.sqft.toLocaleString()} sq ft</span>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-gold text-foreground hover:bg-gold hover:text-white"
                        >
                          <Link href={`/listings/${property.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
                <p className="text-white/80 mb-6">
                  Let our expert agents help you find your dream property. We have access to exclusive listings not
                  available on the market.
                </p>
                <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white">
                  <Link href="/consultation">Schedule a Consultation</Link>
                </Button>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                <Image
                  src="https://i.imgur.com/yba9d8C.png?height=400&width=600&text=Contact Us"
                  alt="Contact Us"
                  fill
                  className="object-cover"
                />
              </div>
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
