// import { useState, useEffect } from "react";

// Method: 02
import { useLoaderData } from "react-router-dom";

function Github() {
  // Method: 01
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("http://api.github.com/users/avinashyadav16")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-screen-xl sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-center text-center">
            <div className="flex-row text-center bg-gray-500 text-white text-3xl rounded-xl p-10">
              <div style={{ display: "inline-block", marginRight: "20px" }}>
                <img
                  src={data.avatar_url}
                  alt="Git Profile Image"
                  className="h-40 w-40 rounded-xl"
                />
              </div>
              <div style={{ display: "inline-block" }}>
                <h2>User: {data.login}</h2>
                <h2>Following: {data.following}</h2>
                <h2>Followers: {data.followers}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Github;
