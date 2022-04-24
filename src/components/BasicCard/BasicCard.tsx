import cn from 'classnames';

export const BasicCard = ({
    className,
    mainData,
    title,
}: {
    className?: string;
    mainData: number | string | React.ReactNode;
    title: string;
}) => {
    return (
        <div
            className={cn(
                className,
                'shadow',
                'rounded',
                'p-4',
                'hover:bg-gray-200',
                'dark:bg-gray-800'
            )}
        >
            <div className="flex items-center">
                {title && (
                    <p className="text-md text-gray-700 dark:text-white font-bold">
                        {title}
                    </p>
                )}
            </div>

            <div className="flex flex-col justify-start">
                <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                    {mainData}
                </p>

                {/* <div className="flex items-center text-green-500 text-sm">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                    </svg>

                    <span>5.5%</span>

                    <span className="text-gray-400">vs last month</span>
                </div> */}
            </div>
        </div>
    );
};

export default BasicCard;
