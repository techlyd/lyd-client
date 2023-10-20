export const Header = () => {
    return (
        <div className="w-full h-32 flex items-center justify-between fixed top-0 left-0 px-28 bg-white">
            <div>Logo</div>
            <div>
                <nav>
                    <ul className="flex gap-5">
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                        <li>Button</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
