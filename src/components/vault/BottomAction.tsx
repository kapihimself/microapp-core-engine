import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { CTAProps } from '../../lib/types'

export function BottomAction({
  headline,
  subheadline,
  buttonText,
}: CTAProps) {
  return (
    <section className="relative w-full py-32 md:py-48 bg-muted/30 border-t-2 border-border overflow-hidden flex items-center justify-center">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0,transparent_100%)] opacity-5 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[800px] flex flex-col items-center space-y-6"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground uppercase">
            {headline}
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] leading-relaxed">
            {subheadline}
          </p>

          <div className="pt-8">
            <button className="group relative inline-flex items-center justify-center px-8 py-6 text-lg md:text-xl font-bold text-primary-foreground bg-primary border-2 border-foreground rounded-xl shadow-[8px_8px_0px_var(--color-foreground)] hover:shadow-[4px_4px_0px_var(--color-foreground)] hover:translate-y-[4px] hover:translate-x-[4px] transition-all duration-200 animate-pulse-subtle">
              <span className="mr-3">{buttonText}</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
