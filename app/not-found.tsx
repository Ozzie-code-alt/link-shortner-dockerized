
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the link you followed may be broken or no longer exists.</p>
      <Link href="/">
        Go back home
      </Link>
    </div>
  );
}