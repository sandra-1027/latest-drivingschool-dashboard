// app/user/page.tsx
import { getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function UserPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (!session || session.user.role !== 'user') {
        router.push('/login');
      } else {
        setIsAuthenticated(true);
      }
    };
    checkSession();
  }, [router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <h1>Welcome to the User Dashboard</h1>;
}

