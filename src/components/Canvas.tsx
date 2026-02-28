import type { SiteData } from "../lib/types"
import { HeroSection } from "./vault/HeroSection"
import { ProblemAgitator } from "./vault/ProblemAgitator"
import { SolutionBento } from "./vault/SolutionBento"
import { SocialProofMarquee } from "./vault/SocialProofMarquee"
import { BottomAction } from "./vault/BottomAction"

export function Canvas({ data }: { data: SiteData }) {
  return (
    <>
      <HeroSection {...data.hero} />
      <ProblemAgitator {...data.problem} />
      <SolutionBento {...data.solution} />
      <SocialProofMarquee {...data.testimonial} />
      <BottomAction {...data.cta} />
    </>
  )
}
