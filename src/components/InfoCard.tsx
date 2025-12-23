import { ReactNode } from 'react';

interface InfoCardProps {
  label: string;
  value: string | ReactNode;
  icon?: ReactNode;
}

const InfoCard = ({ label, value, icon }: InfoCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors duration-300">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="font-mono text-sm text-foreground break-all">
            {value}
          </p>
        </div>
        {icon && (
          <div className="text-muted-foreground">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
