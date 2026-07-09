import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-bold transition"
    >
      Logout
    </button>
  );
}

export default LogoutButton;