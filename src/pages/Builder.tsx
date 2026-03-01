import React from 'react';
import { Canvas } from '../components/Canvas';
import { mockSiteData } from '../lib/api';

const Builder: React.FC = () => {
  return (
    <div className="h-screen flex w-full overflow-hidden">
      {/* Left column (Sidebar) */}
      <div className="w-80 border-r border-border bg-muted/20 p-6 flex flex-col gap-4">
        <textarea
          className="w-full h-32 p-2 border border-border rounded bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Describe your site..."
        ></textarea>
        <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium">
          Generate
        </button>
      </div>

      {/* Right column (Preview) */}
      <div className="flex-1 overflow-y-auto bg-background">
        <Canvas data={mockSiteData} />
      </div>
    </div>
  );
};

export default Builder;