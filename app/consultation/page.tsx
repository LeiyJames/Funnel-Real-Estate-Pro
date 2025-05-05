import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ConsultationPage() {
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
            <Link href="/consultation" className="text-sm font-medium text-gold">
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
        <section className="bg-muted py-8 md:py-12">
          <div className="container">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-foreground hover:text-gold mb-2">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Let's Talk About Your Next Home</h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Schedule a free consultation with our agents to discuss your real estate needs and find your dream
                property.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-background p-8 rounded-lg border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Schedule a Consultation</h2>

                {/* Calendly inline widget */}
                <div
                  className="calendly-inline-widget min-h-[650px]"
                  data-url="https://calendly.com/d/ysc-gkp-xct"
                ></div>
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                ></script>
              </div>

              <div className="space-y-8">
                <div className="bg-background p-8 rounded-lg border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left font-medium">
                        What happens during the consultation?
                      </AccordionTrigger>
                      <AccordionContent>
                        During your free consultation, our expert agents will discuss your real estate needs,
                        preferences, and budget. We'll provide market insights and develop a personalized plan to help
                        you find your dream property or sell your current one.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left font-medium">
                        How long does the consultation take?
                      </AccordionTrigger>
                      <AccordionContent>
                        Our initial consultations typically last 30-45 minutes, depending on your needs and questions.
                        We want to ensure we have enough time to understand your requirements and provide valuable
                        insights.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left font-medium">
                        Is there any obligation after the consultation?
                      </AccordionTrigger>
                      <AccordionContent>
                        There is absolutely no obligation after the free consultation. Our goal is to provide you with
                        valuable information and establish a relationship based on trust. You decide if and when you'd
                        like to proceed further.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left font-medium">What areas do you serve?</AccordionTrigger>
                      <AccordionContent>
                        RealEstatePro specializes in high-end residential properties throughout Southern California,
                        including Beverly Hills, Malibu, Hollywood Hills, Bel Air, Santa Monica, and other premium
                        neighborhoods in the Los Angeles area.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left font-medium">
                        How do I prepare for the consultation?
                      </AccordionTrigger>
                      <AccordionContent>
                        To make the most of your consultation, consider your budget, preferred locations, must-have
                        features, and timeline. If you're selling, gather information about your property and any
                        improvements you've made. The more information you provide, the better we can assist you.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="bg-navy text-white p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Contact Us Directly</h2>
                  <p className="text-white/80 mb-6">
                    Prefer to reach out directly? Our team is available to assist you.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-gold/20 p-2 rounded-full">
                        <Phone size={20} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Phone</p>
                        <p className="font-medium">(800) 555-1234</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="bg-gold/20 p-2 rounded-full">
                        <Mail size={20} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-white/60">Email</p>
                        <p className="font-medium">info@realestatepro.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-medium mb-2">Office Hours</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-white/60">Monday - Friday</p>
                        <p>9:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <p className="text-white/60">Saturday</p>
                        <p>10:00 AM - 4:00 PM</p>
                      </div>
                      <div>
                        <p className="text-white/60">Sunday</p>
                        <p>By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Expert Agents</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our team of experienced real estate professionals is dedicated to helping you find your dream property.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Michael Anderson",
                  title: "Senior Real Estate Agent",
                  image: "https://i.imgur.com/gb4kR4l.png?height=400&width=400&text=Agent 1",
                  bio: "With over 15 years of experience in luxury real estate, Michael specializes in high-end properties in Beverly Hills and Bel Air.",
                },
                {
                  name: "Jennifer Lopez",
                  title: "Luxury Property Specialist",
                  image: "https://i.imgur.com/LKGa3sT.png?height=400&width=400&text=Agent 2",
                  bio: "Jennifer has a keen eye for architectural details and helps clients find unique properties that match their lifestyle and preferences.",
                },
                {
                  name: "David Chen",
                  title: "Investment Property Expert",
                  image: "https://i.imgur.com/OdnsaMB.png?height=400&width=400&text=Agent 3",
                  bio: "David's background in finance gives him unique insights into the investment potential of luxury properties across Southern California.",
                },
              ].map((agent, i) => (
                <div key={i} className="bg-muted rounded-lg overflow-hidden border border-border">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{agent.name}</h3>
                    <p className="text-gold text-sm font-medium mb-3">{agent.title}</p>
                    <p className="text-muted-foreground mb-4">{agent.bio}</p>
                    <Button
                      variant="outline"
                      className="w-full border-gold text-foreground hover:bg-gold hover:text-white"
                    >
                      Schedule with {agent.name.split(" ")[0]}
                    </Button>
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
