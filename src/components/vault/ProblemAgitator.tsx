import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import type { ProblemProps } from "../../lib/types"

export function ProblemAgitator({
  statement,
  painPoints,
}: ProblemProps) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const statementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  }

  return (
    <section className="w-full py-20 md:py-32 bg-background border-t-2 border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side: Problem Statement */}
          <motion.div variants={statementVariants} className="sticky top-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              {statement}
            </h2>
          </motion.div>

          {/* Right Side: Pain Points Grid */}
          <div className="grid grid-cols-1 gap-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex items-start space-x-6 p-6 md:p-8 bg-background border-2 border-border rounded-xl shadow-[4px_4px_0px_var(--color-foreground)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--color-foreground)]"
              >
                <div className="flex-shrink-0 mt-1">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Pain Point {index + 1}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
