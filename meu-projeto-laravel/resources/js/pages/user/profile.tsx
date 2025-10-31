interface UserProfileProps {
  userId: string;
  message: string;
}

export default function UserProfile({ userId, message }: UserProfileProps) {
  return (
    <div className="p-6">
      <nav className="mb-6">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>
        <span className="mx-2">|</span>
        <a href="/about" className="text-blue-500 hover:underline">
          About
        </a>
        <span className="mx-2">|</span>
        <a href="/contact" className="text-blue-500 hover:underline">
          Contact
        </a>
      </nav>

      <h1 className="mb-4 text-3xl font-bold">User Profile</h1>
      <div className="rounded-lg bg-blue-100 p-4">
        <p className="text-lg">{message}</p>
        <p className="mt-2">
          User ID: <span className="font-mono font-bold">{userId}</span>
        </p>
      </div>

      <div className="mt-6">
        <h2 className="mb-2 text-xl font-semibold">Try these URLs:</h2>
        <ul className="space-y-1">
          <li>
            <a href="/user/123" className="text-blue-500 hover:underline">
              /user/123
            </a>
          </li>
          <li>
            <a href="/user/456" className="text-blue-500 hover:underline">
              /user/456
            </a>
          </li>
          <li>
            <a href="/user/john" className="text-blue-500 hover:underline">
              /user/john
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
