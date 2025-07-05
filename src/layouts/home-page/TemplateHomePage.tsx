import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const templates = [
  {
    id: 1,
    name: "Urban Jam",
    image: "/placeholder.svg?height=200&width=300",
    category: "Band",
  },
  {
    id: 2,
    name: "Horizon",
    image: "/placeholder.svg?height=200&width=300",
    category: "Festival",
  },
  {
    id: 3,
    name: "Hot Jam",
    image: "/placeholder.svg?height=200&width=300",
    category: "Artist",
  },
  {
    id: 4,
    name: "Hermes Ad",
    image: "/placeholder.svg?height=200&width=300",
    category: "Label",
  },
  {
    id: 5,
    name: "Minimal",
    image: "/placeholder.svg?height=200&width=300",
    category: "Clean",
  },
  {
    id: 6,
    name: "Lickworm",
    image: "/placeholder.svg?height=200&width=300",
    category: "DJ",
  },
  {
    id: 7,
    name: "Festival",
    image: "/placeholder.svg?height=200&width=300",
    category: "Event",
  },
  {
    id: 8,
    name: "Record Studio",
    image: "/placeholder.svg?height=200&width=300",
    category: "Studio",
  },
  {
    id: 9,
    name: "Unlimited Live Event",
    image: "/placeholder.svg?height=200&width=300",
    category: "Live",
  },
  {
    id: 10,
    name: "Artist Studio",
    image: "/placeholder.svg?height=200&width=300",
    category: "Creative",
  },
  {
    id: 11,
    name: "Group Hermes",
    image: "/placeholder.svg?height=200&width=300",
    category: "Band",
  },
  {
    id: 12,
    name: "Discography Hermes",
    image: "/placeholder.svg?height=200&width=300",
    category: "Album",
  },
  {
    id: 13,
    name: "Violeta Hermes",
    image: "/placeholder.svg?height=200&width=300",
    category: "Artist",
  },
  {
    id: 14,
    name: "Blog Hermes",
    image: "/placeholder.svg?height=200&width=300",
    category: "Blog",
  },
  {
    id: 15,
    name: "Artist Hermes",
    image: "/placeholder.svg?height=200&width=300",
    category: "Portfolio",
  },
]

export default function TemplatesHomePageSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        y: 100,
        opacity: 0,
      })

      // Create timeline for title animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      })

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }).to(
        subtitleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      )

      // Animate grid items
      gsap.fromTo(
        ".template-card",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -10,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    })
  }

  return (
    <section ref={sectionRef} className="py-20 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-400 mb-2"
            style={{ fontFamily: "cursive" }}
          >
            15 Templates
          </h2>
          <p ref={subtitleRef} className="text-sm md:text-base font-bold text-orange-500 uppercase tracking-[0.3em]">
            Homepages
          </p>
        </div>

        {/* Templates Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={template.id}
              className="template-card group cursor-pointer"
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 group-hover:shadow-xl">
                {/* Template Preview */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative overflow-hidden">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-full object-cover opacity-80"
                  />

                  {/* Overlay with template info */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                      <p className="text-sm opacity-80">{template.category}</p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="absolute top-4 left-8 w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="absolute top-4 left-12 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                {/* Template Name */}
                <div className="p-4 text-center">
                  <h3 className="text-sm font-medium text-gray-600">{template.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
