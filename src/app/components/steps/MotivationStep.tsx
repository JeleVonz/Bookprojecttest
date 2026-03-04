import { useState } from "react";
import svgPaths from "../../../imports/svg-zqdjdoxexk";
import { QuestionLayout } from "./QuestionLayout";

interface MotivationStepProps {
  onNext: () => void;
  onBack: () => void;
  onAnswer?: (motivation: string | null) => void;
}

const motivations = [
  {
    id: "relax",
    label: "To relax",
    iconViewBox: "0 0 23.9998 24",
    iconPath: "p33c61600" as keyof typeof svgPaths,
    inset: "12.5%",
  },
  {
    id: "escape",
    label: "To escape",
    iconViewBox: "0 0 23.999 24",
    iconPath: "pfdf1b80" as keyof typeof svgPaths,
    inset: "12.5%",
  },
  {
    id: "learn",
    label: "To learn",
    iconViewBox: "0 0 20.56 24.4",
    iconPath: "p37763c80" as keyof typeof svgPaths,
    inset: "12.5% 17% 11.25% 18.75%",
  },
  {
    id: "inspire",
    label: "To be inspired",
    iconViewBox: "0 0 22.6667 24",
    iconPath: "p2dd7a980" as keyof typeof svgPaths,
    inset: "12.5% 14.58%",
  },
  {
    id: "think",
    label: "To think deeply",
    iconViewBox: "0 0 24 24",
    iconPath: "p3cc1dcf0" as keyof typeof svgPaths,
    inset: "12.5%",
  },
];

export function MotivationStep({ onNext, onBack, onAnswer }: MotivationStepProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSave = () => {
    onAnswer?.(selected);
    onNext();
  };

  return (
    <QuestionLayout
      stepName="Your motivation"
      percent={20}
      question="What motivates you to read?"
      subtitle="We'll use this to set the tone of your recommendations."
      saveLabel="Save motivations"
      saveEnabled={selected !== null}
      onBack={onBack}
      onSave={handleSave}
    >
      <div className="flex flex-col gap-[8px] py-[8px]">
        {motivations.map((m) => {
          const isSelected = selected === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setSelected(m.id)}
              className="relative flex items-center justify-between px-[18px] py-[14px] rounded-[12px] w-full text-left"
              style={{
                height: 76,
                background: isSelected ? "rgba(173,240,199,0.15)" : "white",
                border: isSelected
                  ? "2px solid #adf0c7"
                  : "2px solid transparent",
                boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-[12px] flex-1">
                {/* Icon circle */}
                <div
                  className="relative rounded-full flex items-center justify-center shrink-0"
                  style={{
                    width: 48,
                    height: 48,
                    background: "white",
                    border: "1px solid rgba(213,213,213,0.3)",
                  }}
                >
                  <div className="relative" style={{ width: 32, height: 32 }}>
                    <div
                      className="absolute"
                      style={{ inset: m.inset }}
                    >
                      <svg
                        className="absolute block w-full h-full"
                        fill="none"
                        viewBox={m.iconViewBox}
                      >
                        <path
                          d={svgPaths[m.iconPath]}
                          fill="#1F2122"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Label */}
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#1f2122",
                  }}
                >
                  {m.label}
                </span>
              </div>

              {/* Check indicator */}
              {isSelected && (
                <div
                  className="rounded-full flex items-center justify-center shrink-0"
                  style={{
                    width: 24,
                    height: 24,
                    background: "#adf0c7",
                  }}
                >
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path
                      d="M1 5L4.5 8.5L11 1.5"
                      stroke="#2d5a41"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </QuestionLayout>
  );
}