import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "API Documentation",
  description: "Documentation de l'API de gestion des utilisateurs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geist.className} antialiased bg-white dark:bg-black`}>
        {children}
      </body>
    </html>
  );
}
