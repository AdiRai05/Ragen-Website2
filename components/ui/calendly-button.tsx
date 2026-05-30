"use client";

import { PopupButton } from "react-calendly";

export default function CalendlyButton() {
  return (
    <PopupButton
      url="https://calendly.com/ragen/30min"
      rootElement={document.body}
      text="Schedule Discovery Call"
      className="rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90"
    />
  );
}