import * as React from "react";
import { cn } from "@/lib/utils";

interface StepperProps {
  steps: {
    title: string;
    description: string;
  }[];
  currentStep?: number;
  className?: string;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ steps, currentStep = 0, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col space-y-6", className)}
        {...props}
      >
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Step number indicator */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full border-2 font-semibold text-lg transition-colors",
                  index <= currentStep
                    ? "border-moss bg-moss text-moss-foreground"
                    : "border-border bg-background text-muted-foreground"
                )}
              >
                {index + 1}
              </div>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "mt-2 h-8 w-0.5 transition-colors",
                    index < currentStep
                      ? "bg-moss"
                      : "bg-border"
                  )}
                />
              )}
            </div>
            
            {/* Step content */}
            <div className="flex-1 pb-8">
              <h3
                className={cn(
                  "text-lg font-semibold transition-colors",
                  index <= currentStep
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "mt-1 text-sm transition-colors",
                  index <= currentStep
                    ? "text-muted-foreground"
                    : "text-muted-foreground/70"
                )}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Stepper.displayName = "Stepper";

export { Stepper };
