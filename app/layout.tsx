import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black min-h-screen max-w-[1600px] mx-auto border-x border-black selection:bg-brand-main selection:text-black">
        {/* Global Navigation Grid Row */}
        <Navbar />

        {/* Dynamic Inner Layout Body */}
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
