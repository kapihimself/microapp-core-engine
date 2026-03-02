import { motion } from "framer-motion"
import type { HeroProps } from "../../lib/types"

export function HeroSection({
  headline,
  subheadline,
  ctaText,
}: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  }

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-background text-foreground py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          className="flex flex-col items-start space-y-6 lg:pr-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
            variants={itemVariants}
          >
            {headline}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-[600px]"
            variants={itemVariants}
          >
            {subheadline}
          </motion.p>

          <motion.div variants={itemVariants}>
            <button
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-lg rounded-full border-2 border-border shadow-[4px_4px_0px_var(--color-foreground)] hover:translate-y-1 hover:shadow-[0px_0px_0px_var(--color-foreground)] transition-all animate-pulse-subtle"
            >
              {ctaText}
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Placeholder */}
        <motion.div
          className="w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-background border-2 border-border rounded-2xl shadow-[8px_8px_0px_var(--color-foreground)] relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
        >
          {/* Subtle noise/pattern overlay placeholder */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-foreground to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-primary/20 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="absolute w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
