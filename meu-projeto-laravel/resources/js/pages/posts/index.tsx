interface Post {
    title: string;
    category: string;
}

interface PostsIndexProps {
    category: string;
    posts: Post[];
}

export default function PostsIndex({ category, posts }: PostsIndexProps) {
    const filteredPosts = category === 'all' ? posts : posts.filter((post) => post.category === category);
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

            <h1 className="mb-4 text-3xl font-bold">Posts</h1>
            <p className="mb-4">
                Current category: <span className="font-semibold text-blue-600">{category}</span>
            </p>

            <div className="mb-6 grid gap-4">
                {filteredPosts.map((post, index) => (
                    <div key={index} className="rounded-lg bg-gray-100 p-4">
                        <h3 className="font-semibold">{post.title}</h3>
                        <span className="text-sm text-gray-600">Category: {post.category}</span>
                    </div>
                ))}
            </div>

            <div>
                <h2 className="mb-2 text-xl font-semibold">Try these URLs:</h2>
                <ul className="space-y-1">
                    <li>
                        <a href="/posts" className="text-blue-500 hover:underline">
                            /posts (all categories)
                        </a>
                    </li>
                    <li>
                        <a href="/posts/tutorial" className="text-blue-500 hover:underline">
                            /posts/tutorial
                        </a>
                    </li>
                    <li>
                        <a href="/posts/frontend" className="text-blue-500 hover:underline">
                            /posts/frontend
                        </a>
                    </li>
                    <li>
                        <a href="/posts/php" className="text-blue-500 hover:underline">
                            /posts/php
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
