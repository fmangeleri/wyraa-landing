import { Metadata } from "next";
import './global.css'


export const metadata: Metadata = {
  title: 'Wyraa',
  description: 'Gestion de compras, software de cuentas por pagar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
