const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/ani.png" alt="logo" heigth="100px" width="100px"/>
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;