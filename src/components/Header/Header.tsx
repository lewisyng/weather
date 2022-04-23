import LinkItem from '../LinkItem/LinkItem';

export const Header = () => {
    return (
        <header className="bg-gray-700 text-gray-50 font-bold mb-8">
            <div className="flex ml-auto max-w-[600px]">
                <LinkItem href="/" title="Current Weather" />
                <LinkItem href="/forecast" title="Weather forecast" />
                <LinkItem href="/map" title="Weather map" />
            </div>
        </header>
    );
};

export default Header;
