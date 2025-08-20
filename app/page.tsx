"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Wifi, Car, Dumbbell, Users, Waves, Building2 } from "lucide-react"

export default function WelcomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    { icon: Waves, label: "Swimming Pool" },
    { icon: Wifi, label: "High-Speed WiFi" },
    { icon: Car, label: "Parking Available" },
    { icon: Dumbbell, label: "Fitness Center" },
    { icon: Users, label: "24/7 Concierge" },
  ]

  const locations = [
    { name: "East Legon", icon: Building2 },
    { name: "Airport", icon: Building2 },
    { name: "Osu", icon: Building2 },
    { name: "Labone", icon: Building2 },
    { name: "Cantoments", icon: Building2 },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full animate-pulse"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "5s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-secondary/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-accent/15 rounded-full animate-pulse"
          style={{ animationDelay: "3s", animationDuration: "4.5s" }}
        />

        <div
          className="absolute top-1/3 left-1/2 w-16 h-16 border-2 border-primary/20 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-accent/20 animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
      </div>

      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mk-coming-soon-sample-6uPGBBg6Onf79P3iGKtM2DMfwyfP1S.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-background/70" />

        <div
          className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* <div className="mb-8 animate-fade-in-up">
            <img
              src="#"
              alt="MK Luxury Living Logo"
              className="w-32 h-32 mx-auto mb-4"
            />
          </div> */}

          <Badge
            variant="secondary"
            className="mb-6 mt-15 animate-fade-in-up bg-emerald-500/20 text-emerald-600 border-emerald-500/30 animate-pulse shadow-lg shadow-emerald-500/50"
            style={{
              animation: "pulse 2s infinite, glow 2s ease-in-out infinite alternate",
            }}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Launching September 2025
          </Badge>

          <h1 className="font-serif font-black text-5xl md:text-7xl mb-6 text-foreground animate-fade-in-up animation-delay-200">
            MK Luxury Living
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 font-medium">
            Experience premium apartment living redefined. Where luxury meets comfort in the heart of the city.
          </p>

          <div className="flex items-center justify-center mt-8 text-foreground/70 animate-fade-in-up animation-delay-800">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="font-medium">Prime Locations Across Accra</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground"> Locations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Strategically located in Accra's most desirable neighborhoods
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <location.icon className="w-10 h-10 mx-auto mb-3 text-accent" />
                  <h3 className="font-semibold text-lg text-foreground">{location.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10 bg-background/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground">Luxury Amenities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every detail crafted for your comfort and convenience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold text-lg text-foreground">{feature.label}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">Ready to Experience Luxury?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our exclusive waitlist and be the first to know when we launch in September.
          </p>

          <form
            action="https://formspree.io/f/xjkoqbez"
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 bg-primary-foreground/95 text-primary border-primary-foreground/20 placeholder:text-primary/60"
            />
            <Button
              type="submit"
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
            >
              Join Waitlist
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary/30 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-serif font-bold text-2xl mb-4 text-foreground">MK Luxury Living</h3>
          <p className="text-muted-foreground mb-6">Premium apartment rentals • Launching September 2025</p>
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors font-medium">
              Contact
            </a>
            <a href="#" className="hover:text-foreground transition-colors font-medium">
              About
            </a>
            <a href="#" className="hover:text-foreground transition-colors font-medium">
              Amenities
            </a>
            <a href="#" className="hover:text-foreground transition-colors font-medium">
              Location
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
