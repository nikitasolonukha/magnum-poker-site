import type { Metadata } from "next";
import { Unbounded, Onest } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["cyrillic", "latin"],
  variable: "--font-unbounded",
  weight: ["400", "500", "600", "700", "800"],
});

const onest = Onest({
  subsets: ["cyrillic", "latin"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "MAGNUM – Ведущий дом спортивного покера в Москве",
  description:
    "Собственный дом на два этажа, девять столов и компания, ради которой хочется вернуться. Покерные вечера на Дизайн-заводе «Флакон». Игра не на деньги. Участие 1000 ₽.",
  openGraph: {
    title: "MAGNUM – Ведущий дом спортивного покера в Москве",
    description:
      "Покерные вечера на Дизайн-заводе «Флакон». Собственный дом на два этажа, девять столов. Игра не на деньги.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAGNUM – Ведущий дом спортивного покера в Москве",
    description:
      "Покерные вечера на Дизайн-заводе «Флакон». Игра не на деньги. Участие 1000 ₽.",
  },
  other: {
    "theme-color": "#08090B",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${onest.variable} antialiased selection:bg-[#7D0B29] selection:text-[#F1EFE9]`}
    >
      <body className="font-sans overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
