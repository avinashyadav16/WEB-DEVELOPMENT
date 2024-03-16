import { useContext } from "react";
import UserContext from "../Context/UserContext";

// Taking the data
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h5>Loading... Please Login First</h5>;
  return <h1>Welcome {user.username}</h1>;
}

export default Profile;
