import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata = {
  title: {
    default: "IMAM University | Together for Excellence",
    template: "%s | IMAM University",
  },
  description:
    "IMAM University official website redesign prototype — academics, admissions, research, student life, centers and university services.",
  icons: { icon: "/images/imam-logo.jpg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
