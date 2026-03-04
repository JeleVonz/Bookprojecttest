import { useState } from "react";
import svgPaths from "../../../imports/svg-1j6cakt1ua";
import { QuestionLayout } from "./QuestionLayout";

interface GenreStepProps {
  onNext: () => void;
  onBack: () => void;
  onAnswer?: (genre: string | null) => void;
}

const genres = [
  {
    id: "fiction",
    label: "Fiction",
    iconViewBox: "0 0 24 24",
    iconPath: "p28e84200" as keyof typeof svgPaths,
    inset: "12.5%",
  },
  {
    id: "nonfiction",
    label: "Non-fiction",
    iconViewBox: "0 0 24 24",
    iconPath: "p3f7817c0" as keyof typeof svgPaths,
    inset: "12.5%",
  },
  {
    id: "mix",
    label: "A mix of both",
    iconViewBox: "0 0 24 24",
    iconPath: "p257b4e00" as keyof typeof svgPaths,
    inset: "12.5%",
  },
];

export function GenreStep({ onNext, onBack, onAnswer }: GenreStepProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSave = () => {
    onAnswer?.(selected);
    onNext();
  };

  return (
    <QuestionLayout
      stepName="Preferred genres"
      percent={30}
      question="What genres are you interested in?"
      subtitle="This narrows down the library for you."
      saveLabel="Continue to selection"
      saveEnabled={selected !== null}
      onBack={onBack}
      onSave={handleSave}
    >
      <div className="flex flex-col gap-[8px] py-[8px]">
        {genres.map((g) => {
          const isSelected = selected === g.id;
          return (
            <button
              key={g.id}
              onClick={() => setSelected(g.id)}
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
              <div className="flex items-center gap-[12px] flex-1">
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
                    <div className="absolute" style={{ inset: g.inset }}>
                      <svg
                        className="absolute block w-full h-full"
                        fill="none"
                        viewBox={g.iconViewBox}
                      >
                        <path d={svgPaths[g.iconPath]} fill="#1F2122" />
                      </svg>
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#1f2122",
                  }}
                >
                  {g.label}
                </span>
              </div>
              {isSelected && (
                <div
                  className="rounded-full flex items-center justify-center shrink-0"
                  style={{ width: 24, height: 24, background: "#adf0c7" }}
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