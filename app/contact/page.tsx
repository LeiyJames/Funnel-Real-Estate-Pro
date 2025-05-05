import Link from "next/link"
import Image from "next/image"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  // Sample office locations
  const offices = [
    {
      name: "Beverly Hills Headquarters",
      address: "123 Luxury Lane, Beverly Hills, CA 90210",
      phone: "(800) 555-1234",
      email: "beverlyhills@realestatepro.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: By appointment only",
      image: "https://i.imgur.com/VggmuyH.png?height=300&width=400&text=Beverly Hills Office",
    },
    {
      name: "Malibu Office",
      address: "456 Ocean View Drive, Malibu, CA 90265",
      phone: "(800) 555-5678",
      email: "malibu@realestatepro.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: By appointment only",
      image: "https://i.imgur.com/kN29jI9.png?height=300&width=400&text=Malibu Office",
    },
    {
      name: "Santa Monica Office",
      address: "789 Coastal Highway, Santa Monica, CA 90401",
      phone: "(800) 555-9012",
      email: "santamonica@realestatepro.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      image: "https://i.imgur.com/ZO8r2Ff.png?height=300&width=400&text=Santa Monica Office",
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
            <Link href="/contact" className="text-sm font-medium text-gold">
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
        <section className="relative h-[300px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://i.imgur.com/nPGSQAM.png?height=300&width=1920&text=Contact Us"
              alt="Contact Us"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              We're here to answer your questions and help you find your dream property
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about a property or our services? Fill out the form below and one of our experts will
                  get back to you as soon as possible.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-foreground mb-1">
                        First Name*
                      </label>
                      <Input id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-foreground mb-1">
                        Last Name*
                      </label>
                      <Input id="last-name" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                      Email Address*
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                      Subject*
                    </label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message*
                    </label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" required />
                  </div>

                  <div className="pt-2">
                    <Button className="w-full md:w-auto bg-gold hover:bg-gold/90 text-white">Send Message</Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      By submitting this form, you agree to our{" "}
                      <Link href="#" className="text-foreground underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  You can also reach out to us directly using the contact information below.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Phone</h3>
                      <p className="text-muted-foreground">(800) 555-1234</p>
                      <p className="text-muted-foreground">(800) 555-5678 (Sales)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Email</h3>
                      <p className="text-muted-foreground">info@realestatepro.com</p>
                      <p className="text-muted-foreground">sales@realestatepro.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Main Office</h3>
                      <p className="text-muted-foreground">123 Luxury Lane</p>
                      <p className="text-muted-foreground">Beverly Hills, CA 90210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600&text=Map"
                    alt="Office Location Map"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Offices</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, i) => (
                <div key={i} className="bg-background rounded-lg overflow-hidden border border-border">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={office.image || "/placeholder.svg"} alt={office.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{office.name}</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="mt-1 text-gold shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone size={16} className="mt-1 text-gold shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Mail size={16} className="mt-1 text-gold shrink-0" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock size={16} className="mt-1 text-gold shrink-0" />
                        <div>
                          {office.hours.split("\n").map((line, index) => (
                            <div key={index}>{line}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-gold text-foreground hover:bg-gold hover:text-white"
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground text-center mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Find answers to common questions about our services and processes.
            </p>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-medium">
                    How do I schedule a property viewing?
                  </AccordionTrigger>
                  <AccordionContent>
                    You can schedule a property viewing by contacting us directly through our contact form, calling our
                    office, or using the "Schedule a Viewing" button on any property listing page. One of our agents
                    will get back to you promptly to arrange a convenient time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-medium">What areas do you serve?</AccordionTrigger>
                  <AccordionContent>
                    RealEstatePro specializes in luxury properties throughout Southern California, with a focus on
                    Beverly Hills, Malibu, Hollywood Hills, Bel Air, Santa Monica, and other premium neighborhoods in
                    the Los Angeles area.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-medium">
                    How can I list my property with RealEstatePro?
                  </AccordionTrigger>
                  <AccordionContent>
                    To list your property with us, please contact our office to schedule a consultation with one of our
                    listing specialists. They will evaluate your property, discuss our marketing strategy, and guide you
                    through the entire selling process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-medium">
                    What makes RealEstatePro different from other agencies?
                  </AccordionTrigger>
                  <AccordionContent>
                    RealEstatePro stands out for our exclusive listings, personalized service, and deep market
                    knowledge. Our agents are experts in luxury real estate and provide white-glove service throughout
                    the entire buying or selling process. We also offer access to off-market properties and a global
                    network of qualified buyers.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-medium">
                    Do you work with international clients?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we regularly work with international clients looking to buy or sell property in Southern
                    California. Our team can accommodate different time zones and languages, and we're experienced in
                    handling the unique aspects of international real estate transactions.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 bg-navy text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Follow us on social media for the latest property listings, market updates, and real estate tips.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="bg-white/10 hover:bg-gold/20 p-4 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-gold/20 p-4 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-gold/20 p-4 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-gold/20 p-4 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
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
