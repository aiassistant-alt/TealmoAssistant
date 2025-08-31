import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TealmoAssistant - English Course',
  description: 'Interactive English Learning Platform with AI Voice Assistant and 3D Interface',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
);
}
