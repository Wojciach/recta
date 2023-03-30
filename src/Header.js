import "./Header.scss";


function Header() {
    return (
      <section id="header">
         <div className="sBackground"></div>
        
        <div id="slogan">
            <h1>Usługi Budownane Recta</h1>
            <h2>Budujemy lepszą przyszłość</h2>
        </div>
        <div>
            <input type="text" placeholder="Jakiej usługi szukasz?"/>
        </div>
       
      </section>
    );
  }
  
  export default Header;
  