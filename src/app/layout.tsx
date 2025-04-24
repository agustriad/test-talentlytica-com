import "./globals.css";
import Navbar from "../components/Navbar";


export const metadata = {
  title: 'Dashboard',
  description: 'test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-gray-100 text-gray-900">
        {/* header */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
