import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Bath, BedDouble, Calendar, Check, MapPin, Ruler, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a database
const getPropertyById = (id: string) => {
  const properties = [
    {
      id: "1",
      title: "Modern Mansion in Beverly Hills",
      price: "$8,500,000",
      location: "Beverly Hills, CA",
      address: "123 Luxury Lane, Beverly Hills, CA 90210",
      beds: 6,
      baths: 8,
      sqft: 7200,
      yearBuilt: 2018,
      lotSize: "0.75 acres",
      description:
        "This stunning modern mansion offers the perfect blend of luxury and comfort. Nestled in the prestigious Beverly Hills neighborhood, this architectural masterpiece features soaring ceilings, walls of glass, and an open floor plan that creates a seamless indoor-outdoor living experience. The gourmet kitchen is equipped with top-of-the-line appliances and custom cabinetry. The primary suite is a true retreat with a spa-like bathroom and expansive walk-in closet. Outside, you'll find a resort-style pool, outdoor kitchen, and meticulously landscaped grounds. Additional amenities include a home theater, wine cellar, gym, and smart home technology throughout.",
      features: [
        "Gourmet kitchen with high-end appliances",
        "Home theater with premium sound system",
        "Resort-style pool and spa",
        "Smart home technology",
        "Wine cellar",
        "Home gym",
        "3-car garage",
        "Outdoor kitchen and dining area",
        "Floor-to-ceiling windows",
        "Custom lighting throughout",
        "Security system with cameras",
        "Heated floors in bathrooms",
      ],
      images: [
        "https://i.imgur.com/bpEMflX.png?height=600&width=800&text=Property 1 - Main",
        "https://i.imgur.com/LegQH1t.png?height=600&width=800&text=Property 1 - Living Room",
        "https://i.imgur.com/kgosIL6.png?height=600&width=800&text=Property 1 - Kitchen",
        "https://i.imgur.com/E3skvBR.png?height=600&width=800&text=Property 1 - Master Bedroom",
        "https://i.imgur.com/bpEMflX.png?height=600&width=800&text=Property 1 - Pool",
      ],
      agent: {
        name: "Michael Anderson",
        phone: "(310) 555-1234",
        email: "michael@realestatepro.com",
        image: "https://i.imgur.com/8RY3UWM.png?height=400&width=400&text=Agent 1",
      },
    },
    {
      id: "2",
      title: "Oceanfront Villa in Malibu",
      price: "$12,900,000",
      location: "Malibu, CA",
      address: "456 Ocean View Drive, Malibu, CA 90265",
      beds: 5,
      baths: 7,
      sqft: 6500,
      yearBuilt: 2015,
      lotSize: "0.5 acres",
      description:
        "Experience the ultimate in coastal luxury with this breathtaking oceanfront villa in Malibu. Perched on a bluff with panoramic views of the Pacific Ocean, this architectural gem offers an unparalleled living experience. The open floor plan features walls of glass that showcase the stunning ocean views from nearly every room. The gourmet kitchen is a chef's dream with custom cabinetry and top-tier appliances. The primary suite is a true sanctuary with a private terrace, spa-like bathroom, and walk-in closet. Additional features include a wine cellar, home theater, infinity pool, and direct beach access. This rare offering represents the pinnacle of Southern California coastal living.",
      features: [
        "Panoramic ocean views",
        "Direct beach access",
        "Infinity pool overlooking the ocean",
        "Gourmet kitchen with custom cabinetry",
        "Home theater",
        "Wine cellar",
        "Multiple oceanfront terraces",
        "Smart home technology",
        "Elevator",
        "Outdoor kitchen and dining area",
        "Fire pit with ocean views",
        "Spa/hot tub",
      ],
      images: [
        "https://i.imgur.com/BjTlNhs.jpeg?height=600&width=800&text=Property 2 - Main",
        "https://i.imgur.com/hcBuVnc.png?height=600&width=800&text=Property 2 - Ocean View",
        "https://i.imgur.com/fY7iVOv.png?height=600&width=800&text=Property 2 - Kitchen",
        "https://i.imgur.com/WxWQU5i.png?height=600&width=800&text=Property 2 - Master Bedroom",
        "https://i.imgur.com/sJhoXAa.png?height=600&width=800&text=Property 2 - Pool",
      ],
      agent: {
        name: "Jennifer Lopez",
        phone: "(310) 555-5678",
        email: "jennifer@realestatepro.com",
        image: "https://i.imgur.com/6eHRtmv.png?height=400&width=400&text=Agent 2",
      },
    },
  ]

  return properties.find((property) => property.id === id)
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id)

  if (!property) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/listings">Back to Listings</Link>
        </Button>
      </div>
    )
  }

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
        <div className="container py-8">
          <Link href="/listings" className="inline-flex items-center text-foreground hover:text-gold mb-4">
            <ArrowLeft size={16} className="mr-1" /> Back to Listings
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            <div>
              {/* Property Images */}
              <div className="mb-8">
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={property.images[0] || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {property.images.slice(1, 5).map((image, index) => (
                    <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${property.title} - Image ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-gold font-bold text-2xl mb-2">{property.price}</div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{property.title}</h1>
                <div className="flex items-center gap-1 text-muted-foreground mb-6">
                  <MapPin size={16} />
                  <span>{property.address}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="flex justify-center mb-2">
                      <BedDouble className="h-6 w-6 text-gold" />
                    </div>
                    <div className="font-bold text-foreground">{property.beds}</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="flex justify-center mb-2">
                      <Bath className="h-6 w-6 text-gold" />
                    </div>
                    <div className="font-bold text-foreground">{property.baths}</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="flex justify-center mb-2">
                      <Ruler className="h-6 w-6 text-gold" />
                    </div>
                    <div className="font-bold text-foreground">{property.sqft.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Square Feet</div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="flex justify-center mb-2">
                      <Calendar className="h-6 w-6 text-gold" />
                    </div>
                    <div className="font-bold text-foreground">{property.yearBuilt}</div>
                    <div className="text-sm text-muted-foreground">Year Built</div>
                  </div>
                </div>
              </div>

              {/* Tabs for Description and Features */}
              <Tabs defaultValue="description" className="mb-8">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-6">
                  <p className="text-foreground leading-relaxed">{property.description}</p>
                </TabsContent>
                <TabsContent value="features" className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Location Map Placeholder */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-4">Location</h2>
                <div className="relative h-[300px] bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Map view of {property.address}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Agent */}
              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-xl font-bold text-foreground mb-4">Contact Agent</h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{property.agent.name}</h3>
                    <p className="text-muted-foreground text-sm">{property.agent.phone}</p>
                    <p className="text-muted-foreground text-sm">{property.agent.email}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-gold hover:bg-gold/90 text-white">Schedule a Viewing</Button>
                  <Button variant="outline" className="w-full border-gold text-foreground hover:text-gold">
                    Request Info
                  </Button>
                </div>
              </div>

              {/* Mortgage Calculator Placeholder */}
              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-xl font-bold text-foreground mb-4">Mortgage Calculator</h2>
                <p className="text-muted-foreground mb-4">Estimate your monthly payments for this property.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Home Price</label>
                    <input
                      type="text"
                      value={property.price}
                      readOnly
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Down Payment (20%)</label>
                    <input
                      type="text"
                      value={`$${(Number.parseInt(property.price.replace(/\D/g, "")) * 0.2).toLocaleString()}`}
                      readOnly
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Loan Term</label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                      <option>30 years</option>
                      <option>15 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Interest Rate</label>
                    <input
                      type="text"
                      defaultValue="5.5%"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                    />
                  </div>
                  <Button className="w-full bg-gold hover:bg-gold/90 text-white">Calculate</Button>
                </div>
              </div>

              {/* Share Property */}
              <div className="bg-muted p-6 rounded-lg">
                <h2 className="text-xl font-bold text-foreground mb-4">Share This Property</h2>
                <Button variant="outline" className="w-full border-gold text-foreground hover:text-gold flex gap-2">
                  <Share2 size={16} />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* Similar Properties */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group bg-background rounded-lg overflow-hidden border border-border transition-all hover:shadow-lg"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`https://i.imgur.com/T2wCk9i.png?height=400&width=600&text=Similar Property ${i}`}
                      alt={`Similar Property ${i}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-gold font-bold text-lg mb-1">$4,500,000</div>
                    <h3 className="text-foreground font-bold mb-1 line-clamp-1">Luxury Villa in Beverly Hills</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                      <MapPin size={14} />
                      <span>Beverly Hills, CA</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span>5 beds</span>
                      <span>6 baths</span>
                      <span>4,200 sq ft</span>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-gold text-foreground hover:bg-gold hover:text-white"
                    >
                      <Link href="#">View Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
