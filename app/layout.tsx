import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TealmoAssistant',
  description: 'AI Voice Assistant with 3D Spline Interface',
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
