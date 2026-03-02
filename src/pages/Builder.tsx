import React, { useState } from 'react';
import { Loader2, LayoutTemplate } from 'lucide-react';
import { Canvas } from '../components/Canvas';
import { generateSiteData } from '../lib/api';
import type { SiteData } from '../lib/types';

const Builder: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [siteData, setSiteData] = useState<SiteData | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const result = await generateSiteData(prompt);
      setSiteData(result);
    } catch (error) {
      console.error("Failed to generate site data:", error);
      // In a real app, we'd show a toast or error message here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex w-full overflow-hidden">
      {/* Left column (Sidebar) */}
      <div className="w-80 border-r border-border bg-muted/20 p-6 flex flex-col gap-4">
        <textarea
          className="w-full h-32 p-2 border border-border rounded bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Describe your site..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={isLoading}
        ></textarea>
        <button
          onClick={handleGenerate}
          disabled={isLoading || !prompt.trim()}
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Generate'
          )}
        </button>
      </div>

      {/* Right column (Preview) */}
      <div className="flex-1 overflow-y-auto bg-background flex flex-col relative">
        {!siteData && !isLoading && (
          <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-4 p-8 text-center">
            <LayoutTemplate className="w-16 h-16 opacity-20" />
            <div className="space-y-1">
              <h3 className="text-xl font-medium text-foreground">No Site Generated</h3>
              <p>Describe your business in the sidebar to generate a site layout.</p>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="flex-1 flex flex-col items-center justify-center gap-6 p-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse"></div>
              <Loader2 className="w-12 h-12 text-primary animate-spin relative" />
            </div>
            <div className="space-y-2 text-center animate-pulse">
              <h3 className="text-xl font-medium text-foreground">Building your components...</h3>
              <p className="text-muted-foreground">Synthesizing semantic tokens and assembling layout.</p>
            </div>
          </div>
        )}

        {siteData && !isLoading && (
          <Canvas data={siteData} />
        )}
      </div>
    </div>
  );
};

export default Builder;