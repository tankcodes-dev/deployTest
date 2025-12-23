import { useEffect, useState } from 'react';
import { Server, Clock, Globe, CheckCircle, Terminal } from 'lucide-react';
import StatusIndicator from '@/components/StatusIndicator';
import InfoCard from '@/components/InfoCard';
import TerminalLine from '@/components/TerminalLine';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [status, setStatus] = useState<'checking' | 'online'>('checking');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate connection check
    const statusTimer = setTimeout(() => {
      setStatus('online');
    }, 1500);

    return () => {
      clearInterval(timer);
      clearTimeout(statusTimer);
    };
  }, []);

  const instanceInfo = {
    hostname: window.location.hostname || 'localhost',
    port: window.location.port || '80',
    protocol: window.location.protocol.replace(':', ''),
    userAgent: navigator.userAgent.split(' ').slice(0, 3).join(' '),
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-glow)' }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <header className="text-center mb-16 fade-in">
          <div className="inline-flex items-center justify-center mb-6">
            <StatusIndicator status={status} />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold mb-4">
            <span className="text-foreground">Deploy</span>
            <span className="text-primary text-glow">Test</span>
          </h1>
          
          <p className="text-muted-foreground text-lg max-w-md mx-auto font-mono">
            Instance verification successful
          </p>
        </header>

        {/* Main content */}
        <main className="max-w-3xl mx-auto space-y-8">
          {/* Terminal simulation */}
          <section 
            className="bg-card border border-border rounded-lg p-6 slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="font-mono text-sm text-muted-foreground">terminal</span>
            </div>
            
            <div className="space-y-3">
              <TerminalLine 
                command="curl -I http://localhost" 
                output="HTTP/1.1 200 OK"
              />
              <TerminalLine 
                command="echo $STATUS" 
                output={status === 'online' ? '✓ All systems operational' : 'Checking...'}
              />
              <TerminalLine 
                prefix=">" 
                command="" 
                showCursor 
              />
            </div>
          </section>

          {/* Instance info grid */}
          <section 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <InfoCard 
              label="Hostname"
              value={instanceInfo.hostname}
              icon={<Server className="w-4 h-4" />}
            />
            <InfoCard 
              label="Protocol"
              value={instanceInfo.protocol.toUpperCase()}
              icon={<Globe className="w-4 h-4" />}
            />
            <InfoCard 
              label="Current Time (UTC)"
              value={currentTime.toISOString()}
              icon={<Clock className="w-4 h-4" />}
            />
            <InfoCard 
              label="Status"
              value={
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-primary">Healthy</span>
                </span>
              }
            />
          </section>

          {/* Footer */}
          <footer 
            className="text-center pt-8 border-t border-border slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <p className="font-mono text-xs text-muted-foreground">
              Deployment test page • {new Date().getFullYear()}
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
