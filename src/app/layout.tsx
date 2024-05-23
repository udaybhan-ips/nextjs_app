import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"
import "./globals.css"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>

    </html>
  )
}
