const Home = () => {
  const username = localStorage.getItem("username");
  return (
    <div>
      <h1>My Contacts Application</h1>
      {username? <h2>Welcome: {username}</h2> : <h2> Please Log in or register</h2>}
    </div>
  );
};
  
  export default Home;