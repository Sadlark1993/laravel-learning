import { Head } from '@inertiajs/react';

export default function Contact() {
    return (
        <>
            <Head title="Contact">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <div>
                <h1>Hallo from the contact page</h1>
            </div>
        </>
    );
}
