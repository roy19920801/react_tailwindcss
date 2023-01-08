
const AdminNavbar = () => {
    return(
        <>
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                {/* Brand */}
                <a
                    className="text-xl text-blue-900 font-bold lg:inline-block font-semibold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    PageLayout overview
                </a>
                </div>
            </nav>
            {/* End Navbar */}
        </>
    );
}

export default AdminNavbar;