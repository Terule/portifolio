import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafael Aguiar Gomes — Full-Stack Developer",
  description: "Rafael Aguiar Gomes (Terule) bridges IT operations with modern full-stack development.",
  metadataBase: new URL("https://terule.dev.br"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="dark"><body>{children}</body></html>;
}
