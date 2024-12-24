// app/user/layout.tsx
export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header>User Navigation</header>
        <main>{children}</main>
        <footer>User Footer</footer>
      </div>
    );
  }
  