import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import imgBooks from "figma:asset/2e30d2f8c1e49e6c1ddc3887ea4da4cb9e8b5c96.png";
import imgBooksStack from "figma:asset/834f04bf7eec73b1e233623698c82c7a2cb4a63d.png";
import imgReader from "figma:asset/3d19a912f3cce09667062e64dc06e60b742cfb1c.png";

import { IntroSlide } from "./components/IntroSlide";
import { ProfileSetup } from "./components/ProfileSetup";
import { MotivationStep } from "./components/steps/MotivationStep";
import { GenreStep } from "./components/steps/GenreStep";
import { SubgenreStep } from "./components/steps/SubgenreStep";
import { StoryPriorityStep } from "./components/steps/StoryPriorityStep";
import { WritingStyleStep } from "./components/steps/WritingStyleStep";
import { FavouritesStep } from "./components/FavouritesStep";
import { ProfileSummary } from "./components/ProfileSummary";
import { CompleteScreen } from "./components/CompleteScreen";
import { ReaderAnswers } from "./types";

const introSlides = [
  {
    image: imgBooks,
    eyebrow: "DEAR READER",
    title: "Welcome to Thiscover",
    body: "Finding a book shouldn't require endless scrolling. We help you discover books that fit your taste.",
    statusVariant: "dark" as const,
    imageHeight: 683,
  },
  {
    image: imgBooksStack,
    eyebrow: "THE RIGHT BOOK",
    title: "For the moment",
    body: "Whether it's a short commute or a quiet evening, discover books that match your current mood.",
    statusVariant: "light" as const,
    imageHeight: 683,
  },
  {
    image: imgReader,
    eyebrow: "EVERY BOOK",
    title: "Has its reader",
    body: "There are thousands of books to choose from. We help narrow things down to the ones that feel right for you.",
    statusVariant: "light" as const,
    imageHeight: 683,
  },
];

const defaultAnswers: ReaderAnswers = {
  motivation: null,
  genre: null,
  subgenres: [],
  priority: { characters: 50, plot: 25, setting: 80 },
  style: { pace: 50, tone: 25, language: 80 },
  books: [],
};

// Step map:
// 0-2  → intro slides
// 3    → profile setup
// 4    → motivation
// 5    → genre
// 6    → subgenre
// 7    → story priority
// 8    → writing style
// 9    → favourites
// 10   → profile summary
// 11   → complete

export default function App() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<ReaderAnswers>(defaultAnswers);

  const goTo = (next: number) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const next = () => goTo(step + 1);
  const back = () => goTo(step - 1);
  const skipToQuestionnaire = () => goTo(4);
  const skipToSetup = () => goTo(3);

  const updateAnswers = (partial: Partial<ReaderAnswers>) => {
    setAnswers((prev) => ({ ...prev, ...partial }));
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 393 : -393,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -393 : 393,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    if (step >= 0 && step <= 2) {
      const slide = introSlides[step];
      return (
        <IntroSlide
          key={`intro-${step}`}
          image={slide.image}
          eyebrow={slide.eyebrow}
          title={slide.title}
          body={slide.body}
          activeDot={step}
          showBack={step > 0}
          statusVariant={slide.statusVariant}
          imageHeight={slide.imageHeight}
          onNext={next}
          onBack={back}
          onSkip={skipToSetup}
        />
      );
    }
    if (step === 3) {
      return <ProfileSetup key="profile" onNext={next} onSkip={skipToQuestionnaire} />;
    }
    if (step === 4) {
      return (
        <MotivationStep
          key="motivation"
          onNext={next}
          onBack={() => goTo(3)}
          onAnswer={(motivation) => updateAnswers({ motivation })}
        />
      );
    }
    if (step === 5) {
      return (
        <GenreStep
          key="genre"
          onNext={next}
          onBack={back}
          onAnswer={(genre) => updateAnswers({ genre })}
        />
      );
    }
    if (step === 6) {
      return (
        <SubgenreStep
          key="subgenre"
          onNext={next}
          onBack={back}
          onAnswer={(subgenres) => updateAnswers({ subgenres })}
        />
      );
    }
    if (step === 7) {
      return (
        <StoryPriorityStep
          key="priority"
          onNext={next}
          onBack={back}
          onAnswer={(priority) => updateAnswers({ priority })}
        />
      );
    }
    if (step === 8) {
      return (
        <WritingStyleStep
          key="writing"
          onNext={next}
          onBack={back}
          onAnswer={(style) => updateAnswers({ style })}
        />
      );
    }
    if (step === 9) {
      return (
        <FavouritesStep
          key="favourites"
          onNext={next}
          onBack={back}
          onAnswer={(books) => updateAnswers({ books })}
        />
      );
    }
    if (step === 10) {
      return (
        <ProfileSummary
          key="summary"
          answers={answers}
          onBack={back}
          onSave={() => goTo(11)}
          onEdit={(targetStep) => goTo(targetStep)}
        />
      );
    }
    if (step === 11) {
      return <CompleteScreen key="complete" onRestart={() => { setAnswers(defaultAnswers); goTo(0); }} />;
    }
    return null;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "#e5e5e5" }}
    >
      {/* Phone frame */}
      <div
        className="relative overflow-hidden shadow-2xl"
        style={{
          width: 393,
          height: 852,
          borderRadius: 48,
          background: "#1f2122",
          boxShadow: "0 32px 80px rgba(0,0,0,0.4)",
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
