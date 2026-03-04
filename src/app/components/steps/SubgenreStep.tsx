import { useState } from "react";
import { StatusBar } from "../StatusBar";
import { HomeIndicator } from "../HomeIndicator";

interface SubgenreStepProps {
  onNext: () => void;
  onBack: () => void;
  onAnswer?: (subgenres: string[]) => void;
}

const fictionSubgenres = [
  "Romance",
  "Thriller",
  "Mystery",
  "Fantasy",
  "Sci-Fi",
  "Historical Fiction",
  "Literary",
  "Young Adult",
  "Horror",
  "Short Stories",
];

const nonfictionSubgenres = [
  "Biography",
  "Self-Help",
  "History",
  "Science",
  "True Crime",
  "Travel",
  "Philosophy",
  "Psychology",
  "Business",
  "Essays",
];

export function SubgenreStep({ onNext, onBack, onAnswer }: SubgenreStepProps) {
  const [selectedFiction, setSelectedFiction] = useState<Set<string>>(
    new Set()
  );
  const [selectedNonfiction, setSelectedNonfiction] = useState<Set<string>>(
    new Set()
  );

  const toggleFiction = (genre: string) => {
    setSelectedFiction((prev) => {
      const next = new Set(prev);
      if (next.has(genre)) next.delete(genre);
      else next.add(genre);
      return next;
    });
  };

  const toggleNonfiction = (genre: string) => {
    setSelectedNonfiction((prev) => {
      const next = new Set(prev);
      if (next.has(genre)) next.delete(genre);
      else next.add(genre);
      return next;
    });
  };

  const selectAllFiction = () => {
    setSelectedFiction(new Set(fictionSubgenres));
  };

  const totalSelected = selectedFiction.size + selectedNonfiction.size;
  const saveEnabled = totalSelected > 0;

  const handleSave = () => {
    const allSelected = [
      ...Array.from(selectedFiction),
      ...Array.from(selectedNonfiction),
    ];
    onAnswer?.(allSelected);
    onNext();
  };

  return (
    <div
      className="relative bg-[#f6f7f8] overflow-hidden"
      style={{ width: 393, height: 852 }}
    >
      <HomeIndicator color="#1f2122" />

      {/* Status Bar */}
      <StatusBar variant="light" />

      {/* Progress */}
      <div
        className="relative w-full"
        style={{ borderBottom: "1px solid rgba(213,213,213,0.3)" }}
      >
        <div className="flex flex-col gap-[8px] items-start p-[16px] w-full">
          <div className="flex items-end justify-between w-full">
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "20px",
                color: "#1f2122",
              }}
            >
              Your genre preferences
            </span>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                lineHeight: "20px",
                color: "#2d5a41",
              }}
            >
              40%
            </span>
          </div>
          <div
            className="rounded-[9999px] overflow-hidden w-full"
            style={{ height: 8, background: "rgba(173,240,199,0.3)" }}
          >
            <div
              className="h-full rounded-[9999px]"
              style={{ width: "40%", background: "#adf0c7" }}
            />
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        className="overflow-y-auto"
        style={{ height: 852 - 54 - 68 - 112, paddingBottom: 8 }}
      >
        <div className="flex flex-col gap-[8px] items-start p-[16px] w-full">
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: 24,
              lineHeight: "30px",
              color: "#1f2122",
            }}
          >
            Which of these do you enjoy?
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "24px",
              color: "#66696d",
            }}
          >
            Tap your favourite subgenres.
          </div>
        </div>

        {/* Fiction section */}
        <div className="px-[16px] py-[8px]">
          {/* Section heading */}
          <div className="flex items-center w-full mb-[12px]">
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 18,
                lineHeight: "26px",
                color: "#414346",
                flexShrink: 0,
              }}
            >
              Fiction
            </span>
            <div className="flex-1 mx-3" style={{ height: 1, background: "#D5D5D5" }} />
            <button
              onClick={selectAllFiction}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                color: "#1f2122",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0 8px",
                flexShrink: 0,
              }}
            >
              Select all fiction
            </button>
          </div>

          {/* Fiction chips */}
          <div className="flex flex-wrap gap-[8px]">
            {fictionSubgenres.map((genre) => {
              const isSelected = selectedFiction.has(genre);
              return (
                <button
                  key={genre}
                  onClick={() => toggleFiction(genre)}
                  className="rounded-[20px] px-[13px] py-[9px] flex items-center"
                  style={{
                    height: 38,
                    background: isSelected ? "#adf0c7" : "rgba(255,255,255,0.8)",
                    border: isSelected
                      ? "1px solid #adf0c7"
                      : "1px solid rgba(213,213,213,0.3)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: isSelected ? "#2d5a41" : "#414346",
                    }}
                  >
                    {genre}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Non-fiction section */}
          <div className="flex items-center w-full mt-[24px] mb-[12px]">
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 18,
                lineHeight: "26px",
                color: "#414346",
                flexShrink: 0,
              }}
            >
              Non-fiction
            </span>
            <div
              className="flex-1 mx-3"
              style={{ height: 1, background: "#D5D5D5" }}
            />
          </div>

          {/* Non-fiction chips */}
          <div className="flex flex-wrap gap-[8px]">
            {nonfictionSubgenres.map((genre) => {
              const isSelected = selectedNonfiction.has(genre);
              return (
                <button
                  key={genre}
                  onClick={() => toggleNonfiction(genre)}
                  className="rounded-[20px] px-[13px] py-[9px] flex items-center"
                  style={{
                    height: 38,
                    background: isSelected ? "#adf0c7" : "rgba(255,255,255,0.8)",
                    border: isSelected
                      ? "1px solid #adf0c7"
                      : "1px solid rgba(213,213,213,0.3)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: "20px",
                      color: isSelected ? "#2d5a41" : "#414346",
                    }}
                  >
                    {genre}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Bar */}
      <div
        className="absolute bottom-0 left-0 w-full flex gap-[8px]"
        style={{
          backdropFilter: "blur(6px)",
          background: "white",
          borderTop: "1px solid rgba(213,213,213,0.3)",
          paddingBottom: 40,
          paddingTop: 24,
          paddingLeft: 20,
          paddingRight: 20,
          zIndex: 10,
        }}
      >
        <button
          onClick={onBack}
          style={{
            height: 48,
            width: 91,
            borderRadius: 8,
            border: "1px solid #d5d5d5",
            background: "transparent",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "24px",
            color: "#1f2122",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          Back
        </button>
        <button
          onClick={saveEnabled ? handleSave : undefined}
          style={{
            flex: 1,
            height: 48,
            borderRadius: 8,
            border: "none",
            background: saveEnabled ? "#1f2122" : "rgba(12,12,13,0.05)",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "24px",
            color: saveEnabled ? "white" : "#66696d",
            cursor: saveEnabled ? "pointer" : "default",
            transition: "background 0.2s ease, color 0.2s ease",
          }}
        >
          Save genres
        </button>
      </div>
    </div>
  );
}