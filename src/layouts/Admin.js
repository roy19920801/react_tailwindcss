import AdminNavbar from "../components/Navbars/AdminNavbar";
import HeaderStats from "../components/Headers/HeaderStats";
const Admin = () => {
    return (
        <>
            <div className="relative bg-blueGray-100">
                <AdminNavbar/>
                {/* Header */}
                <HeaderStats />
            </div>
        </>
    );
}

export default Admin;