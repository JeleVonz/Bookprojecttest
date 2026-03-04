import { useState } from "react";
import svgPaths from "../../../imports/svg-5rmk2tukx2";
import { QuestionLayout } from "./QuestionLayout";

interface WritingStyleStepProps {
  onNext: () => void;
  onBack: () => void;
  onAnswer?: (style: { pace: number; tone: number; language: number }) => void;
}

function getPaceLabel(value: number): string {
  if (value < 34) return "Slow";
  if (value < 67) return "Medium";
  return "Fast";
}

function getToneLabel(value: number): string {
  if (value < 34) return "Hopeful";
  if (value < 67) return "Balanced";
  return "Dark";
}

function getLanguageLabel(value: number): string {
  if (value < 34) return "Simple";
  if (value < 67) return "Balanced";
  return "Rich";
}

interface WritingSliderRowProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  valueLabel: string;
  minLabel: string;
  maxLabel: string;
  onChange: (v: number) => void;
}

function WritingSliderRow({
  icon,
  label,
  value,
  valueLabel,
  minLabel,
  maxLabel,
  onChange,
}: WritingSliderRowProps) {
  return (
    <div className="flex flex-col pb-[8px] w-full">
      {/* Row */}
      <div className="flex items-center w-full" style={{ minHeight: 68 }}>
        <div className="flex flex-1 gap-[8px] items-center">
          <div className="flex items-center justify-center" style={{ width: 24, height: 24, flexShrink: 0 }}>
            {icon}
          </div>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "24px",
              color: "#1f2122",
            }}
          >
            {label}
          </span>
        </div>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: "20px",
            color: "#2d5a41",
            flexShrink: 0,
          }}
        >
          {valueLabel}
        </span>
      </div>

      {/* Slider */}
      <div className="px-[4px] flex flex-col gap-[4px] w-full">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="writing-slider w-full"
          style={{ margin: 0 }}
        />
        <div
          className="flex justify-between"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "16px",
            color: "#414346",
          }}
        >
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      </div>
    </div>
  );
}

export function WritingStyleStep({ onNext, onBack, onAnswer }: WritingStyleStepProps) {
  const [pace, setPace] = useState(50);
  const [tone, setTone] = useState(25);
  const [language, setLanguage] = useState(80);

  const handleSave = () => {
    onAnswer?.({ pace, tone, language });
    onNext();
  };

  return (
    <>
      <style>{`
        .writing-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
        }
        .writing-slider::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 9999px;
          background: #e1e3e6;
        }
        .writing-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #adf0c7;
          border: 2px solid white;
          margin-top: -8px;
          box-shadow: 0 0 0 1px rgba(173,240,199,0.5);
          cursor: pointer;
        }
        .writing-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #adf0c7;
          border: 2px solid white;
          cursor: pointer;
        }
        .writing-slider::-moz-range-track {
          height: 8px;
          border-radius: 9999px;
          background: #e1e3e6;
        }
      `}</style>
      <QuestionLayout
        stepName="Writing style"
        percent={70}
        question="How do you like the writing?"
        subtitle="Adjust these sliders to set your preferred writing style."
        saveLabel="Save style"
        saveEnabled={true}
        onBack={onBack}
        onSave={handleSave}
      >
        <div className="flex flex-col gap-[32px] py-[8px] w-full">
          {/* Pace */}
          <WritingSliderRow
            icon={
              <svg width="24" height="24" viewBox="0 0 20 18" fill="none">
                <path d={svgPaths.p3f84b580} fill="#1F2122" />
              </svg>
            }
            label="Pace"
            value={pace}
            valueLabel={getPaceLabel(pace)}
            minLabel="Slow"
            maxLabel="Fast"
            onChange={setPace}
          />

          {/* Tone */}
          <WritingSliderRow
            icon={
              <svg width="24" height="24" viewBox="0 0 20.4 17" fill="none">
                <path d={svgPaths.p47f9b80} fill="#1F2122" />
              </svg>
            }
            label="Tone"
            value={tone}
            valueLabel={getToneLabel(tone)}
            minLabel="Hopeful"
            maxLabel="Dark"
            onChange={setTone}
          />

          {/* Language */}
          <WritingSliderRow
            icon={
              <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
                <path d={svgPaths.p3511ef80} fill="#1F2122" />
              </svg>
            }
            label="Language"
            value={language}
            valueLabel={getLanguageLabel(language)}
            minLabel="Simple"
            maxLabel="Rich"
            onChange={setLanguage}
          />
        </div>
      </QuestionLayout>
    </>
  );
}