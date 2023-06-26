import Navbar from "@/components/navBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <body>{children}</body>
    </>
  );
}
