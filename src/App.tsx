import { HeroSection } from './components/vault/HeroSection'
import { ProblemAgitator } from './components/vault/ProblemAgitator'
import { SolutionBento } from './components/vault/SolutionBento'
import { SocialProofMarquee } from './components/vault/SocialProofMarquee'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <HeroSection />
      <ProblemAgitator />
      <SolutionBento />
      <SocialProofMarquee />
    </div>
  )
}
