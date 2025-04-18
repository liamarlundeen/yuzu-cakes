// src/app/menu/page.tsx
import '../styles/menu.css'

export default function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-content">
        <h1 className="menu-title">MENU</h1>
      
      {/* BOXED CAKES SECTION */}
      <div className="menu-section">
        <div className="section-title">
          <div className="line"></div>
          <h2>BOXED CAKES</h2>
          <div className="line"></div>
        </div>
        
        <div className="menu-items">
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Sesame</h3>
            <p>Vanilla buttercream, black sesame paste, black sesame topping</p>
          </div>
          
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Matcha</h3>
            <p>Matcha buttercream, matcha filling, strawberry matcha topping</p>
          </div>
          
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Strawberry</h3>
            <p>Strawberry buttercream, strawberry jam filling, topped with fresh strawberries</p>
          </div>
        </div>
        
        <div className="menu-items">
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Sesame</h3>
            <p>Vanilla buttercream, black sesame paste, black sesame topping</p>
          </div>
          
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Matcha</h3>
            <p>Matcha buttercream, matcha filling, strawberry matcha topping</p>
          </div>
          
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Strawberry</h3>
            <p>Strawberry buttercream, strawberry jam filling, topped with fresh strawberries</p>
          </div>
        </div>
      </div>
      
      {/* BASQUE CAKES SECTION */}
      <div className="menu-section">
        <div className="section-title">
          <div className="line"></div>
          <h2>BASQUE CAKES</h2>
          <div className="line"></div>
        </div>
        
        <div className="menu-items">
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Sesame</h3>
            <p>Vanilla buttercream, black sesame paste, black sesame topping</p>
          </div>
          
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Matcha</h3>
            <p>Matcha buttercream, matcha filling, strawberry matcha topping</p>
          </div>
          
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Strawberry</h3>
            <p>Strawberry buttercream, strawberry jam filling, topped with fresh strawberries</p>
          </div>
        </div>
      </div>
      
      {/* BOUQUET CAKES SECTION */}
      <div className="menu-section">
        <div className="section-title">
          <div className="line"></div>
          <h2>BOUQUET CAKES</h2>
          <div className="line"></div>
        </div>
        
        <div className="menu-items">
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Sesame</h3>
            <p>Vanilla buttercream, black sesame paste, black sesame topping</p>
          </div>
          
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Matcha</h3>
            <p>Matcha buttercream, matcha filling, strawberry matcha topping</p>
          </div>
          
          <div className="menu-item">
            <div className="item-image"></div>
            <h3>Strawberry</h3>
            <p>Strawberry buttercream, strawberry jam filling, topped with fresh strawberries</p>
          </div>
        </div>
      </div>
      
      {/* CUSTOM CAKES SECTION */}
      <div className="menu-section">
        <div className="section-title">
          <div className="line"></div>
          <h2>CUSTOM CAKES</h2>
          <div className="line"></div>
        </div>
        
        <div className="custom-message">
          <p>If you would like to order a custom cake, please fill out this form below.</p>
          <button className="order-button">ORDER NOW</button>
        </div>
        
        <div className="gallery">
          <div className="gallery-image"></div>
          <div className="gallery-image"></div>
          <div className="gallery-image"></div>
          <div className="gallery-image"></div>
        </div>
      </div>
      </div>
    </div>
  );
}