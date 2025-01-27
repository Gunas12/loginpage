import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Çıxış edildi");
    navigate("/sign");
  };
  return (
    <>
      <div>
        {user ? (
          <>
            <h2>{user.email}</h2>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button
            onClick={() => {
              navigate("/sign");
            }}
          >
            Login
          </button>
        )}
      </div>
      <h1>Welcome our page!</h1>
    </>
  );
}

export default Home;
