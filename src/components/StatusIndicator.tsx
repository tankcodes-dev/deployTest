interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'checking';
}

const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div
          className={`w-3 h-3 rounded-full ${
            status === 'online'
              ? 'bg-success pulse-glow'
              : status === 'checking'
              ? 'bg-accent animate-pulse'
              : 'bg-destructive'
          }`}
        />
        {status === 'online' && (
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-success animate-ping opacity-75" />
        )}
      </div>
      <span className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
        {status === 'online' ? 'Connected' : status === 'checking' ? 'Checking...' : 'Offline'}
      </span>
    </div>
  );
};

export default StatusIndicator;
