import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}
