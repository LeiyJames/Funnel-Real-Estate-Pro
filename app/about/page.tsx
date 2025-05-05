import Link from "next/link"
import Image from "next/image"
import { Award, Building, CheckCircle, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-gold">
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
        <section className="relative h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://i.imgur.com/jTxUJgA.jpeg?height=400&width=1920&text=About RealEstatePro"
              alt="About RealEstatePro"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About RealEstatePro</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Luxury real estate services with a personal touch
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2005, RealEstatePro began with a simple mission: to provide exceptional service in the
                  luxury real estate market. What started as a small team of passionate real estate professionals has
                  grown into one of Southern California's most respected luxury real estate agencies.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our founder, Michael Anderson, recognized a gap in the market for truly personalized, high-end real
                  estate services. He assembled a team of experts who shared his vision and commitment to excellence,
                  and together they built a company that puts clients' needs first.
                </p>
                <p className="text-muted-foreground">
                  Today, RealEstatePro is known for our unparalleled market knowledge, exclusive listings, and
                  white-glove service. We continue to set the standard for luxury real estate in Beverly Hills, Malibu,
                  and beyond.
                </p>
              </div>
              <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://i.imgur.com/dir8xEL.png?height=400&width=600&text=Our Story"
                  alt="RealEstatePro Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              At RealEstatePro, we're committed to helping our clients find their dream properties while providing an
              exceptional, stress-free experience from start to finish.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="h-10 w-10 text-gold" />,
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, from property selection to client communication.",
                },
                {
                  icon: <Users className="h-10 w-10 text-gold" />,
                  title: "Client-Focused",
                  description:
                    "Our clients' needs and preferences are at the center of our approach. We listen, understand, and deliver.",
                },
                {
                  icon: <Building className="h-10 w-10 text-gold" />,
                  title: "Market Expertise",
                  description:
                    "Our deep knowledge of the luxury real estate market allows us to find the perfect properties for our clients.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-background p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow text-center"
                >
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Leadership Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Michael Anderson",
                  title: "Founder & CEO",
                  image: "https://i.imgur.com/gb4kR4l.png?height=400&width=400&text=Michael",
                  bio: "With over 20 years of experience in luxury real estate, Michael founded RealEstatePro with a vision to transform the industry.",
                },
                {
                  name: "Jennifer Lopez",
                  title: "Chief Operating Officer",
                  image: "https://i.imgur.com/LKGa3sT.png?height=400&width=400&text=Jennifer",
                  bio: "Jennifer oversees all operations, ensuring that our clients receive the highest level of service at every touchpoint.",
                },
                {
                  name: "David Chen",
                  title: "Head of Acquisitions",
                  image: "https://i.imgur.com/OdnsaMB.png?height=400&width=400&text=David",
                  bio: "David's expertise in property valuation and market trends helps our clients make informed investment decisions.",
                },
                {
                  name: "Sarah Johnson",
                  title: "Marketing Director",
                  image: "https://i.imgur.com/T1RqqJ4.png?height=400&width=400&text=Sarah",
                  bio: "Sarah leads our marketing efforts, showcasing our exclusive properties to qualified buyers worldwide.",
                },
              ].map((person, i) => (
                <div key={i} className="bg-muted rounded-lg overflow-hidden border border-border">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{person.name}</h3>
                    <p className="text-gold text-sm font-medium mb-3">{person.title}</p>
                    <p className="text-muted-foreground">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                We're proud of our track record of success in the luxury real estate market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "$2B+", label: "in Property Sales" },
                { number: "500+", label: "Luxury Properties Sold" },
                { number: "98%", label: "Client Satisfaction Rate" },
                { number: "15+", label: "Years of Excellence" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-4">
                    <Award className="h-8 w-8 text-gold" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">Our Partners</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We collaborate with the best in the industry to provide comprehensive services to our clients.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Luxury Homes International",
                "Global Real Estate Network",
                "Elite Property Finance",
                "Premium Home Staging",
              ].map((partner, i) => (
                <div
                  key={i}
                  className="bg-muted p-6 rounded-lg border border-border flex items-center justify-center h-32"
                >
                  <span className="text-lg font-bold text-foreground text-center">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Work With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're looking to buy, sell, or invest in luxury real estate, our team is here to help you achieve
              your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white">
                <Link href="/consultation">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-gold text-foreground hover:text-gold">
                <Link href="/contact">Contact Us</Link>
              </Button>
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
