import "./globals.css";
import { lora } from "./fonts.js";

export const metadata = {
  title: "Full Screen POC",
  description: "POC to test full screen layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
