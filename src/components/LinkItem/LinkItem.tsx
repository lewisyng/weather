import Link from 'next/link';
import { clearWeatherData } from '../../store/slices/weatherData';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

export const LinkItem = ({ title, href }: { title: string; href: string }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleClick = () => {
        if (router.pathname !== href) {
            dispatch(clearWeatherData());
        }
    };

    return (
        <Link href={href} passHref>
            <span
                onClick={handleClick}
                className="px-10 py-3 hover:bg-gray-500 transition-all cursor-pointer"
            >
                {title}
            </span>
        </Link>
    );
};

export default LinkItem;
