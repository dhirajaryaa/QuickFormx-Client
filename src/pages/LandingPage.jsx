import { useState, useEffect } from "react"
import { Lock, Palette, BarChart, Plug, Menu, X, ChevronLeft, ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import hero from "@/assets/hero.png";
import {Link} from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">🧩</span>
            <span>QuickFormX</span>
          </div>

          <MobileNav />

          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
              FAQ
            </a>
            
          </nav>

          <div className="hidden md:flex gap-4">
            <Link to={"/login"}>
            <Button variant="outline" size="sm">
              Log in
            </Button>
            </Link>
            <Link to={"/register"}>
            <Button size="sm">Register</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col gap-4 text-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 flex items-center justify-center flex-col">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-6xl xl:text-10xl/none ">
                  Build Forms That Work Like Magic
                </h1>
                <p className="max-w-3xl text-center text-muted-foreground md:text-xl text-sm">
                  Drag, drop, deploy. Create powerful forms in minutes — no code required.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 w-full grid-cols-1 sm:w-sm mx-auto ">
                <Link to={"/login"}>
                <Button size="lg" >
                  🚀 Get Started for Free
                </Button>
                </Link>
                <a href="https://docs.quickformx.in" target="_blank">
                <Button variant="outline" size="lg" >
                  📚 View Docs
                </Button>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full  rounded-lg overflow-hidden shadow-xl">
                <img
                  src={hero}
                  alt="QuickFormX Builder Interface"

                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Carousel */}
        <section id="features" className="px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-muted/50 mx-auto">
          <div className="container mx-auto">
            <div className="flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Powerful Features</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Everything you need to create beautiful, functional forms that convert
              </p>
            </div>

            <FeaturesCarousel />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center ">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Choose the plan that's right for you
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              {/* Free Plan */}
              <Card className="flex flex-col p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                    $0
                    <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="mb-8 space-y-4 flex-1">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Up to 3 forms</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>100 submissions/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Email notifications</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </Card>

              {/* Premium Plan - Highlighted */}
              <Card className="flex flex-col p-6 border-primary bg-primary/5 shadow-lg relative">
                <Badge className="absolute top-0 right-0 m-4">Popular</Badge>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold">Premium</h3>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                    $12
                    <span className="ml-1 text-xl font-medium text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="mb-8 space-y-4 flex-1">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited forms</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited submissions</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full">Get Premium</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial/Social Proof with Carousel */}
        <section className="px-4 md:px-6 py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container mx-auto">

        
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Join thousands of satisfied users who have transformed their form creation process
            </p>
          </div>

          <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto">

       
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="mx-auto max-w-3xl mt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is QuickFormX free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, QuickFormX offers a free tier that includes basic form creation and up to 100 submissions per
                  month. For more advanced features and higher submission limits, we offer affordable premium plans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Can I embed forms in my website?</AccordionTrigger>
                <AccordionContent>
                  QuickFormX forms can be easily embedded in any website using our embed code. Simply copy and paste the
                  code into your HTML, or use our integrations for popular platforms like WordPress, Webflow, and
                  Shopify.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do I need to know coding?</AccordionTrigger>
                <AccordionContent>
                  Not at all! QuickFormX is designed to be completely no-code. Our intuitive drag-and-drop builder makes
                  it easy for anyone to create professional forms without writing a single line of code. However, for
                  developers who want more control, we do offer API access and custom CSS options.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How can I collect responses?</AccordionTrigger>
                <AccordionContent>
                  Form responses are automatically collected in your QuickFormX dashboard. You can view them online,
                  export them as CSV or Excel files, or set up integrations to automatically send responses to your CRM,
                  email marketing tool, or other business systems.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-6 py-12 md:py-24 lg:py-32 border-t">
          <div className="max-w-3xl text-center container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to build better forms?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Join thousands of users who are creating beautiful, functional forms in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/login"}>
                <Button size="lg" >
                  🚀 Get Started for Free
                </Button>
                </Link>
            </div>
          </div>

        </section>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container flex items-center flex-col sm:flex-row gap-3 justify-between px-4 md:px-6 py-5 md:py-8 mx-auto">
          
          
            <div className="flex items-center gap-2 font-bold text-xl">
              <span className="text-primary">🧩</span>
              <span>QuickFormX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} QuickFormX. All rights reserved.
            </p>
         
        </div>
      </footer>
    </div>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="size-7" /> : <Menu className="size-7" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 animate-in fade-in slide-in-from-top-10 transition-all duration-300 ease-out">
          <div className="flex flex-col bg-background  p-6 text-center rounded-b-xl shadow-xl">
            <a
              href="#features"
              className="text-lg hover:bg-accent p-2 px-4 rounded-xl font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-lg font-medium hover:bg-accent rounded-xl p-2 px-4 transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-lg font-medium hover:bg-accent rounded-xl p-2 px-4 transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-lg font-medium hover:bg-accent rounded-xl p-2 px-4 transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Log in
              </Button>
              <Button onClick={() => setIsOpen(false)}>Sign up</Button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

function FeaturesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const features = [
    {
      icon: <Lock className="h-8 w-8 lg:h-12 lg:w-12" />,
      emoji: "🔒",
      title: "Secure Submissions",
      description: "Your form data is encrypted and safely stored.",
    },
    {
      icon: <Palette className="h-8 w-8 lg:h-12 lg:w-12" />,
      emoji: "🎨",
      title: "No-Code Builder",
      description: "Just drag and drop – customize every field visually.",
    },
    {
      icon: <BarChart className="h-8 w-8 lg:h-12 lg:w-12" />,
      emoji: "📊",
      title: "Real-time Analytics",
      description: "Track submissions and form performance in real time.",
    },
    {
      icon: <Plug className="h-8 w-8 lg:h-12 lg:w-12" />,
      emoji: "🔌",
      title: "API-Ready",
      description: "Easily connect your forms to any backend.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentSlide])

  return (
    <div className="relative mt-12">
      {/* Mobile Carousel (1 item at a time) */}
      <div className="block md:hidden">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 lg:h-24 lg:w-24 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">
                      {feature.emoji} {feature.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Grid (all items) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 lg:h-24 lg:w-24 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">
                {feature.emoji} {feature.title}
              </h3>
              <p className="text-muted-foreground mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        <Button variant="outline" size="icon" onClick={prevSlide}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextSlide}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Indicators */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {features.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonials = [
    {
      name: "John Doe",
      role: "Product Manager",
      img: "/placeholder.svg?height=40&width=40&text=JD",
      quote:
        "QuickFormX has completely transformed how we collect data. The drag-and-drop interface is intuitive, and the analytics help us optimize our conversion rates.",
    },
    {
      name: "Jane Smith",
      role: "Web Developer",
      img: "/placeholder.svg?height=40&width=40&text=JS",
      quote:
        "As a developer, I appreciate how easy it is to integrate QuickFormX with our existing systems. The API is well-documented and the security features give us peace of mind.",
    },
    {
      name: "Alex Johnson",
      role: "Marketing Director",
      img: "/placeholder.svg?height=40&width=40&text=AJ",
      quote:
        "We've seen a 40% increase in form completions since switching to QuickFormX. The analytics dashboard gives us insights we never had before.",
    },
    {
      name: "Sarah Williams",
      role: "UX Designer",
      img: "/placeholder.svg?height=40&width=40&text=SW",
      quote:
        "The customization options are incredible. I can make forms that perfectly match our brand identity without writing a single line of CSS.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, 6000)
    return () => clearTimeout(timer)
  }, [currentSlide])

  return (
    <div className="relative mt-12">
      <div className="mx-auto max-w-4xl">
        {/* Mobile and Desktop Carousel */}
        <div className="relative overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                      <img
                        src={testimonial.img || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-lg italic">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" size="icon" onClick={prevSlide}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
