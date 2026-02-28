import { motion } from "framer-motion"
import { Component, LayoutTemplate, Palette } from "lucide-react"

export function SolutionBento() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  }

  const cardVariants = {
    hover: { scale: 1.02, transition: { duration: 0.2, ease: "easeInOut" as const } },
  }

  return (
    <section className="w-full py-20 md:py-32 bg-background border-t-2 border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col space-y-12">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              The Solution
            </h2>
            <p className="max-w-[800px] text-lg text-muted-foreground">
              A meticulously engineered vault of pre-built React components, strictly conforming to an unbreakable design system.
            </p>
          </div>

          {/* Bento Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Large Featured Card (Spans 2 columns on lg) */}
            <motion.div
              className="lg:col-span-2 flex flex-col justify-between p-8 md:p-12 border-2 border-border rounded-xl bg-background shadow-[4px_4px_0px_var(--color-foreground)] relative overflow-hidden group cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="z-10 flex flex-col space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit border border-primary/20">
                  <Component className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  The Component Vault
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Stop reinventing the wheel. Access a curated library of battle-tested, highly animated UI blocks that snap together perfectly.
                </p>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div
              className="flex flex-col justify-between p-6 md:p-8 border-2 border-border rounded-xl bg-background shadow-[4px_4px_0px_var(--color-foreground)] cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex flex-col space-y-4">
                <div className="p-3 bg-foreground/5 rounded-lg w-fit border border-border/50">
                  <Palette className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Semantic Tokens
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Powered entirely by HSL variables. Swap the theme instantly without touching a single component class.
                </p>
              </div>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div
              className="flex flex-col justify-between p-6 md:p-8 border-2 border-border rounded-xl bg-background shadow-[4px_4px_0px_var(--color-foreground)] lg:col-start-3 lg:row-start-1 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex flex-col space-y-4">
                <div className="p-3 bg-foreground/5 rounded-lg w-fit border border-border/50">
                  <LayoutTemplate className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  JSON-to-UI
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Feed the engine a strict JSON blueprint, and it automatically renders a fully functional, animated layout.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
