export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <header style={{ padding: "12px 16px", borderBottom: "1px solid #e5e5e5", backgroundColor:"#bbbbbbff" }}>
          <a href="/" style={{ marginRight: 12 }}>
            <button style={{ backgroundColor: "rgba(0,136,169,1)", color: "white", borderRadius: "25px",  padding: "10px 25px" }}>Főoldal</button> 
          </a>
        </header>
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "24px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}