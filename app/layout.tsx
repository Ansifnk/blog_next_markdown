import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const Header = () => (
    <header>
      <div>
        <Link href={'/'} >
        <h1>My Blog</h1>
        </Link>
        <p>Welcome</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <br />
      <h3>
        Developed by Ansif
      </h3>
    </footer>
  )

  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
