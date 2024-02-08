import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-large font-bold text-4xl">Dabbawala</div>
            <div className="flex space-x-4">
                <Link href="/about">
                    <span className="text-white hover:text-gray-300">About</span>
                </Link>
                <Link href="/contact">
                    <span className="text-white hover:text-gray-300">Contact</span>
                </Link>
                <Link href="/login">
                    <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Login / SignUp
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;