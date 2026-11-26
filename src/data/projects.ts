import type { ImageMetadata } from "astro";
import readTheGlobeBanner from "../assets/projects/readtheglobe-banner.png";

/** A phrase in the description that gets a marker highlight on hover/focus. */
export interface MarkedPhrase {
  text: string;
  tone: "olive" | "rust";
}

export interface ProjectImage {
  light: ImageMetadata;
  /** Shown when the site is in dark mode; falls back to `light`. */
  dark?: ImageMetadata;
  alt: string;
  /** Where a map pin lands on hover, as % from the image's top-left. */
  pin?: { x: number; y: number };
  /**
   * A text-free banner (1408x880) shown full width under the project's text,
   * instead of a small screenshot beside it.
   */
  banner?: boolean;
}

export interface Project {
  name: string;
  url: string;
  status?: string;
  description: (string | MarkedPhrase)[];
  image?: ProjectImage;
  builtWith?: string;
}

export const projects: Project[] = [
  {
    name: "Read The Globe",
    url: "https://www.readtheglobe.app",
    status: "Side project",
    // Olive and rust match the app's own map: setting vs. author's country.
    description: [
      "A reading log with a world map. Log a book and your atlas marks ",
      { text: "where the story is set", tone: "olive" },
      " and ",
      { text: "where its author is from", tone: "rust" },
      ".",
    ],
    image: {
      light: readTheGlobeBanner,
      banner: true,
      alt: "The Read The Globe app in a browser window: an example reader’s atlas, a world map with countries filled in, next to the Log a book form for The Sympathizer by Viet Thanh Nguyen. Around it, stickers of a globe, a compass, a postcard, a stack of books and a map pin.",
    },
  },
];
