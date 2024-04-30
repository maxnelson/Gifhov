export function Header() {
  return (
    <>
      <div className="header">
        <a href="/">
          <div className="header_logo_container">
            <h1 className="header_logo">
              <span className="logo-part-1 no-space">GIF</span>
              <span className="logo-part-2 no-space">HOV</span>
            </h1>
          </div>
        </a>
        <div className="header_buttons_container">
          <div className="header_button_container">
            <a href="/browse">
              <button className="header_button">Browse</button>
            </a>
          </div>
          <div className="header_button_container">
            <button className="header_button">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}
