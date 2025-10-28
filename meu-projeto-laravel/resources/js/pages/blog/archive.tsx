interface BlogArchiveProps {
    year: string;
    month: string;
    title: string;
}

export default function BlogArchive({ year, month, title }: BlogArchiveProps) {
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

            <h1 className="mb-4 text-3xl font-bold">{title}</h1>

            <div className="mb-6 rounded-lg bg-green-100 p-6">
                <h2 className="mb-2 text-xl font-semibold">Archive Details</h2>
                <p>
                    <strong>Year:</strong> {year}
                </p>
                <p>
                    <strong>Month:</strong> {month}
                </p>
                <p className="mt-2 text-sm text-gray-600">This demonstrates multiple route parameters working together!</p>
            </div>

            <div>
                <h2 className="mb-2 text-xl font-semibold">Try these URLs:</h2>
                <ul className="space-y-1">
                    <li>
                        <a href="/blog/2024/01" className="text-blue-500 hover:underline">
                            /blog/2024/01
                        </a>
                    </li>
                    <li>
                        <a href="/blog/2023/12" className="text-blue-500 hover:underline">
                            /blog/2023/12
                        </a>
                    </li>
                    <li>
                        <a href="/blog/2025/03" className="text-blue-500 hover:underline">
                            /blog/2025/03
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
