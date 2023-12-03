import { SVG_STYLES } from "../constant";
import { SVGIconProps } from "../types";

export const Icons = {
  close: (props: SVGIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-x"
      viewBox="0 0 24 24"
      {...SVG_STYLES}
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12"></path>
    </svg>
  ),
  bell: (props: SVGIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-bell"
      viewBox="0 0 24 24"
      {...SVG_STYLES}
      {...props}
    >
      <path d="M6 8a6 6 0 0112 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 003.4 0"></path>
    </svg>
  ),
};
