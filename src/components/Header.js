import "./style.css";
export default function Header() {
  return (
    <div className="headerContainer">
      <div className="ghh">
        <span>Store locator</span>

        <input />

        <button>Login</button>
      </div>
      <div style={{ background: "blue", padding: "20px 10px" }}>
        <a className="links" >Computers and Acc</a>
        <a className="links">Phones</a>
        <a className="links">Electronics</a>
        <a className="links">Konga fashion</a>
      </div>
    </div>
    
  );
}
