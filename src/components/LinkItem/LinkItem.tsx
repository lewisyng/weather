import Link from 'next/link';

export const LinkItem = ({ title, href }: { title: string; href: string }) => {
    return (
        <Link href={href} passHref>
            <span className="px-10 py-3 hover:bg-gray-500 transition-all cursor-pointer">
                {title}
            </span>
        </Link>
    );
};

export default LinkItem;
