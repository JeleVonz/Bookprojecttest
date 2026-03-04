export type ReaderAnswers = {
  motivation: string | null;       // "relax" | "escape" | "learn" | "inspire" | "think"
  genre: string | null;            // "fiction" | "nonfiction" | "mix"
  subgenres: string[];
  priority: { characters: number; plot: number; setting: number };
  style: { pace: number; tone: number; language: number };
  books: string[];                 // selected book titles
};

export type ReaderTypeInfo = {
  name: string;
  tagline: string;
  description: string;
};

const READER_TYPES: Record<string, ReaderTypeInfo> = {
  empath: {
    name: "The Empath",
    tagline: "You read with your heart",
    description: "You're drawn to soulful characters and emotional connection.",
  },
  explorer: {
    name: "The Explorer",
    tagline: "You read to wander",
    description: "You seek richly drawn worlds and adventures beyond the familiar.",
  },
  scholar: {
    name: "The Scholar",
    tagline: "You read to understand",
    description: "Depth and knowledge drive your curiosity and love of discovery.",
  },
  dreamer: {
    name: "The Dreamer",
    tagline: "You read to imagine",
    description: "Stories of hope, wonder and possibility keep your mind alive.",
  },
  philosopher: {
    name: "The Philosopher",
    tagline: "You read to question",
    description: "You're drawn to stories that challenge your worldview and provoke thought.",
  },
  bibliophile: {
    name: "The Bibliophile",
    tagline: "You read for the love of it",
    description: "Books are your world — you savour every page and every genre.",
  },
};

export function computeReaderType(answers: ReaderAnswers): ReaderTypeInfo {
  const { motivation, priority } = answers;

  if (motivation === "relax") {
    const charactersDominate =
      priority.characters > priority.plot && priority.characters > priority.setting;
    return charactersDominate ? READER_TYPES.empath : READER_TYPES.dreamer;
  }
  if (motivation === "escape") return READER_TYPES.explorer;
  if (motivation === "learn") return READER_TYPES.scholar;
  if (motivation === "inspire") return READER_TYPES.dreamer;
  if (motivation === "think") return READER_TYPES.philosopher;

  return READER_TYPES.bibliophile;
}

export function getMotivationLabel(id: string | null): string {
  const map: Record<string, string> = {
    relax: "To relax",
    escape: "To escape",
    learn: "To learn",
    inspire: "To be inspired",
    think: "To think deeply",
  };
  return id ? (map[id] ?? id) : "—";
}

export function getGenreLabel(id: string | null): string {
  const map: Record<string, string> = {
    fiction: "Fiction",
    nonfiction: "Non-fiction",
    mix: "A mix of both",
  };
  return id ? (map[id] ?? id) : "—";
}

export function getPriorityLabel(priority: { characters: number; plot: number; setting: number }): string {
  const { characters, plot, setting } = priority;
  if (characters >= plot && characters >= setting) return "Character driven";
  if (plot >= characters && plot >= setting) return "Plot driven";
  return "Setting driven";
}

export function getPaceLabel(value: number): string {
  if (value < 34) return "Slow pace";
  if (value < 67) return "Medium pace";
  return "Fast pace";
}

export function getToneLabel(value: number): string {
  if (value < 34) return "Hopeful tone";
  if (value < 67) return "Balanced tone";
  return "Dark tone";
}

export function getLanguageLabel(value: number): string {
  if (value < 34) return "Simple language";
  if (value < 67) return "Balanced language";
  return "Rich language";
}
