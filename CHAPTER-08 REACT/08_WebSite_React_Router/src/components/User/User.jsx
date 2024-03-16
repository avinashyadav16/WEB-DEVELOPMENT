import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <>
      <div className="mx-auto w-full max-w-7xl mt-8 mb-8">
        <div className="max-w-screen-xl p-20 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-center text-center mt-8 mb-8">
            <div className="font-bold">
              <h1>Welcome Back, Dear User {userid}</h1>
              <h3>This is your personal page</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
