import type { TestimonialProps } from "../../lib/types"

export function SocialProofMarquee({
  sectionTitle,
  testimonials,
}: TestimonialProps) {
  const marqueeItems = [...testimonials, ...testimonials]

  return (
    <section className="w-full py-24 md:py-32 bg-background border-t-2 border-border overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto mb-12 flex flex-col items-center justify-center text-center space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {sectionTitle}
        </h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-r from-background to-transparent pointer-events-none" />

        {/* Marquee Container */}
        <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused] px-4">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="p-6 border-2 border-border rounded-xl bg-background shadow-[4px_4px_0px_var(--color-foreground)] min-w-[320px] max-w-[400px] flex flex-col space-y-4"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">{item.handle}</p>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  )
}