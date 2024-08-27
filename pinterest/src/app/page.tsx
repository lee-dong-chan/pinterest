export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>메인페이지</div>
      {children}
    </main>
  );
}
