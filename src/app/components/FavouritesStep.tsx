import { useState, useMemo } from "react";
import { StatusBar } from "./StatusBar";
import { HomeIndicator } from "./HomeIndicator";
import svgPaths from "../../imports/svg-3y23vj7t0l";

import imgMockingbird from "figma:asset/a3a46e049f716894b0ff09783525ca4f55bc0213.png";
import imgWarPeace from "figma:asset/d8846db139c16fb67b84037c0345d6913097251f.png";
import imgCatcher from "figma:asset/ece3a6f74a0a006a76f8b2ccd7d6e0c529ca340e.png";
import imgGatsby from "figma:asset/8ee1281c9df8f21831898bbd3f7a1b4ef76578d0.png";
import img1984 from "figma:asset/4162f3c232cb7195c08d6687f71ad86c0c1637e2.png";
import imgPride from "figma:asset/7615307f2bffde2392b604d62eda923329dfe4ba.png";
import imgMoby from "figma:asset/930f75d34fbcd56a3b4613885023c7faee527494.png";
import imgBrave from "figma:asset/9a0701c1bb275382ccee675a8314b32be5eff0ab.png";
import imgLOTR from "figma:asset/3d9341f136493e834de0c206c9fbe8ac5c7390de.png";

interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  img: string;
}

const popularBooks: Book[] = [
  { id: "mockingbird", title: "To Kill a Mockingbird", author: "Harper Lee", year: "1960", img: imgMockingbird },
  { id: "war-peace", title: "War and Peace", author: "Leo Tolstoy", year: "1869", img: imgWarPeace },
  { id: "catcher", title: "The Catcher in the Rye", author: "J.D. Salinger", year: "1951", img: imgCatcher },
  { id: "gatsby", title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: "1925", img: imgGatsby },
  { id: "1984", title: "1984", author: "George Orwell", year: "1949", img: img1984 },
  { id: "pride", title: "Pride and Prejudice", author: "Jane Austen", year: "1813", img: imgPride },
  { id: "moby", title: "Moby Dick", author: "Herman Melville", year: "1851", img: imgMoby },
  { id: "brave", title: "Brave New World", author: "Aldous Huxley", year: "1932", img: imgBrave },
  { id: "lotr", title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: "1954", img: imgLOTR },
];

interface FavouritesStepProps {
  onNext: () => void;
  onBack: () => void;
  onAnswer?: (books: string[]) => void;
}

export function FavouritesStep({ onNext, onBack, onAnswer }: FavouritesStepProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return popularBooks;
    const q = searchQuery.toLowerCase();
    return popularBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const toggleBook = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSave = () => {
    const selectedTitles = popularBooks
      .filter((b) => selected.has(b.id))
      .map((b) => b.title);
    onAnswer?.(selectedTitles);
    onNext();
  };

  const saveEnabled = selected.size > 0;

  return (
    <div
      className="relative bg-[#f6f7f8] overflow-hidden"
      style={{ width: 393, height: 852 }}
    >
      <HomeIndicator color="#1f2122" />
      <StatusBar variant="light" />

      {/* Progress bar */}
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
              Books you love
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
              90%
            </span>
          </div>
          <div
            className="rounded-[9999px] overflow-hidden w-full"
            style={{ height: 8, background: "rgba(173,240,199,0.3)" }}
          >
            <div
              className="h-full rounded-[9999px]"
              style={{ width: "90%", background: "#adf0c7", transition: "width 0.3s ease" }}
            />
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        className="overflow-y-auto"
        style={{ height: 852 - 54 - 68 - 112, paddingBottom: 8 }}
      >
        {/* Title & subtitle */}
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
            Any all-time favorites?
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: "26px",
              color: "#66696d",
            }}
          >
            Name one or more books you loved. It helps us find your next one.
          </div>
        </div>

        {/* Search field */}
        <div className="px-[16px] pb-[16px]">
          <div
            className="relative flex items-center rounded-[8px] bg-white w-full"
            style={{
              height: 48,
              border: "1px solid #d5d5d5",
            }}
          >
            {/* Search icon */}
            <div className="flex items-center justify-center shrink-0" style={{ width: 40, height: 40 }}>
              <div className="relative" style={{ width: 18, height: 18 }}>
                <svg className="absolute block w-full h-full" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p2a619100} fill="#1F2122" />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search books or authors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none pr-[12px]"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "20px",
                color: "#1f2122",
              }}
            />
            {searchQuery.length > 0 && (
              <button
                onClick={() => setSearchQuery("")}
                className="flex items-center justify-center shrink-0 mr-[8px]"
                style={{ width: 24, height: 24, background: "none", border: "none", cursor: "pointer" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 1L11 11M11 1L1 11"
                    stroke="#66696d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Selected books tags (if any) */}
        {selected.size > 0 && (
          <div className="px-[16px] pb-[12px] flex flex-wrap gap-[8px]">
            {popularBooks
              .filter((b) => selected.has(b.id))
              .map((b) => (
                <button
                  key={b.id}
                  onClick={() => toggleBook(b.id)}
                  className="flex items-center gap-[6px] rounded-[20px] px-[12px] py-[6px]"
                  style={{
                    background: "#adf0c7",
                    border: "1px solid #adf0c7",
                    cursor: "pointer",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    color: "#2d5a41",
                  }}
                >
                  {b.title}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 1L9 9M9 1L1 9" stroke="#2d5a41" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              ))}
          </div>
        )}

        {/* Section heading */}
        <div className="px-[16px] pb-[12px]">
          <span
            style={{
              fontFamily: "Karla, Inter, sans-serif",
              fontWeight: 500,
              fontSize: 18,
              lineHeight: "24px",
              color: "#414346",
              letterSpacing: "-0.36px",
            }}
          >
            {searchQuery ? "Search results" : "Popular all time favorite"}
          </span>
        </div>

        {/* Book grid */}
        <div className="px-[16px] pb-[8px]">
          {filteredBooks.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center py-[32px] text-center"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                color: "#66696d",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-[12px] opacity-30">
                <path
                  d="M4 6h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
                  stroke="#1f2122"
                  strokeWidth="2"
                />
                <path d="M10 6V2M22 6V2M2 13h22" stroke="#1f2122" strokeWidth="2" strokeLinecap="round" />
              </svg>
              No books found for "{searchQuery}"
            </div>
          ) : (
            <div
              className="grid gap-[8px]"
              style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              {filteredBooks.map((book) => {
                const isSelected = selected.has(book.id);
                return (
                  <button
                    key={book.id}
                    onClick={() => toggleBook(book.id)}
                    className="relative rounded-[12px] overflow-hidden text-left"
                    style={{
                      background: "#f6f7f8",
                      border: isSelected ? "2px solid #adf0c7" : "1px solid #d5d5d5",
                      cursor: "pointer",
                      transition: "all 0.15s ease",
                      minHeight: 230,
                    }}
                  >
                    {/* Cover image */}
                    <div className="relative w-full overflow-hidden" style={{ height: 182 }}>
                      <img
                        src={book.img}
                        alt={book.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Selected overlay */}
                      {isSelected && (
                        <div
                          className="absolute inset-0 flex items-start justify-end p-[8px]"
                          style={{ background: "rgba(173,240,199,0.2)" }}
                        >
                          <div
                            className="flex items-center justify-center rounded-full"
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
                        </div>
                      )}
                    </div>

                    {/* Book info */}
                    <div className="flex flex-col gap-[4px] items-start p-[8px]">
                      <span
                        className="w-full"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: 10,
                          lineHeight: "12px",
                          color: "#313030",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {book.title}
                      </span>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                          fontSize: 10,
                          lineHeight: "12px",
                          color: "#66696d",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "100%",
                        }}
                      >
                        {book.author} | {book.year}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* CTA bar */}
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
          Save my favourites
        </button>
      </div>
    </div>
  );
}
