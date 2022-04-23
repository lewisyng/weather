export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className="min-h-screen w-full max-w-[1440px]">{children}</div>;
};

export default PageWrapper;
