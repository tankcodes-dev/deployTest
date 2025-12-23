interface TerminalLineProps {
  prefix?: string;
  command: string;
  output?: string;
  showCursor?: boolean;
}

const TerminalLine = ({ prefix = '$', command, output, showCursor = false }: TerminalLineProps) => {
  return (
    <div className="font-mono text-sm space-y-1">
      <div className="flex items-center gap-2">
        <span className="text-primary">{prefix}</span>
        <span className={`text-foreground ${showCursor ? 'cursor-blink' : ''}`}>
          {command}
        </span>
      </div>
      {output && (
        <div className="pl-4 text-muted-foreground">
          {output}
        </div>
      )}
    </div>
  );
};

export default TerminalLine;
