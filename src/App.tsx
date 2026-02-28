import { HeroSection } from './components/vault/HeroSection'
import { ProblemAgitator } from './components/vault/ProblemAgitator'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ProblemAgitator />
    </div>
  )
}
