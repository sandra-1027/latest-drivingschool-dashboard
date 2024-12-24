// app/staff/layout.tsx
export default function StaffLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header>Staff Navigation</header>
        <main>{children}</main>
        <footer>Staff Footer</footer>
      </div>
    );
  }
  