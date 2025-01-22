import { useNavigate } from "react-router-dom";
// import ActionButton from "./ActionButton.jsx";

const Logout = ({ handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    fetch("/api/logout", {method: "POST", credentials:"include"})
    .then(response => {
        if (response) {
            handleLogout()
            navigate("/login")
        }
        else {
            console.log("Failure to log out")
        }
    })
    // try {
    //   const response = await fetch("/api/logout", { method: "POST", credentials: "include" });

    //   if (response.ok) {
    //     handleLogout()
    //     navigate("/login");  
    //   } else {
    //     console.error("Logout failed");
    //   }
    // } catch (error) {
    //   console.error("Error during logout:", error);
    // }
  };

  handleLogoutClick()
  //return <ActionButton variant="secondary" title="Logout" onClick={handleLogoutClick} />;
};

export default Logout;