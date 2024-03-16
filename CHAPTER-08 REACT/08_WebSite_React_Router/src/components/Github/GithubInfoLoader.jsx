const GithubInfoLoader = async () => {
  const response = await fetch("http://api.github.com/users/avinashyadav16");
  return response.json();
};

export default GithubInfoLoader;
