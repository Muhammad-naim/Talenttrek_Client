const Dashboard = () => {
    return (
        <div className="flex justify-start">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start justify-start gap-2 pl-3">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-xs drawer-button lg:hidden">{'>'}</label>
                    <div>
                        hello
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay">th</label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;