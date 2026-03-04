import { useState } from "react";
import svgPaths from "../../../imports/svg-k1dpfvqkdy";
import { QuestionLayout } from "./QuestionLayout";

interface StoryPriorityStepProps {
  onNext: () => void;
  onBack: () => void;
  onAnswer?: (priority: { characters: number; plot: number; setting: number }) => void;
}

function getPriorityLabel(value: number): string {
  if (value < 34) return "Low priority";
  if (value < 67) return "Medium priority";
  return "High priority";
}

interface SliderRowProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (v: number) => void;
}

function SliderRow({ icon, label, value, onChange }: SliderRowProps) {
  const priorityLabel = getPriorityLabel(value);
  return (
    <div className="flex flex-col pb-[8px] w-full">
      {/* Row setting */}
      <div className="flex items-center w-full" style={{ minHeight: 68 }}>
        <div className="flex flex-1 gap-[8px] items-center">
          {/* Icon */}
          <div className="flex items-center justify-center" style={{ width: 24, height: 24, flexShrink: 0 }}>
            {icon}
          </div>
          {/* Title */}
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
        {/* Priority label */}
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
          {priorityLabel}
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
          className="priority-slider w-full"
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
          <span>Low priority</span>
          <span>High priority</span>
        </div>
      </div>
    </div>
  );
}

export function StoryPriorityStep({ onNext, onBack, onAnswer }: StoryPriorityStepProps) {
  const [characters, setCharacters] = useState(50);
  const [plot, setPlot] = useState(25);
  const [setting, setSettings] = useState(80);

  const handleSave = () => {
    onAnswer?.({ characters, plot, setting });
    onNext();
  };

  return (
    <>
      <style>{`
        .priority-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
        }
        .priority-slider::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 9999px;
          background: #e1e3e6;
        }
        .priority-slider::-webkit-slider-thumb {
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
        .priority-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #adf0c7;
          border: 2px solid white;
          cursor: pointer;
        }
        .priority-slider::-moz-range-track {
          height: 8px;
          border-radius: 9999px;
          background: #e1e3e6;
        }
      `}</style>
      <QuestionLayout
        stepName="Story priority"
        percent={50}
        question="What matters most in a story?"
        subtitle="Adjust the sliders to show us what you prioritize in your books"
        saveLabel="Save priorities"
        saveEnabled={true}
        onBack={onBack}
        onSave={handleSave}
      >
        <div className="flex flex-col gap-[32px] py-[8px] w-full">
          {/* Characters */}
          <SliderRow
            icon={
              <svg width="24" height="24" viewBox="0 0 18.0004 18.0004" fill="none">
                <path d={svgPaths.p2c1cdd00} fill="#1F2122" />
              </svg>
            }
            label="Characters"
            value={characters}
            onChange={setCharacters}
          />

          {/* Plot */}
          <SliderRow
            icon={
              <svg width="24" height="24" viewBox="0 0 19 18" fill="none">
                <path d={svgPaths.p17f39680} fill="#1F2122" />
              </svg>
            }
            label="Plot"
            value={plot}
            onChange={setPlot}
          />

          {/* Setting */}
          <SliderRow
            icon={
              <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
                <path d={svgPaths.p37ed24f1} fill="#1F2122" />
              </svg>
            }
            label="Setting"
            value={setting}
            onChange={setSettings}
          />
        </div>
      </QuestionLayout>
    </>
  );
}