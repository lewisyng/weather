export const Header = () => {
    return (
        <header className="bg-gray-700 text-gray-50 font-bold mb-8">
            <div className="flex ml-auto max-w-[600px]">
                <a href="" className="px-10 py-3 hover:bg-gray-500 transition-all">Current weather</a>
                <a href="" className="px-10 py-3 hover:bg-gray-500 transition-all">Weather forecast</a>
                <a href="" className="px-10 py-3 hover:bg-gray-500 transition-all">Weather map</a>
            </div>
        </header>
    )
}

export default Header;