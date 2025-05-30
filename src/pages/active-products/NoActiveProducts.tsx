import React, { useState } from 'react';
import "./ActiveProduct.css"

const NoActiveProducts: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('Active Products');

  const handleMenuClick = (label: string) => {
    setActiveLink(label);
  };

  return (
    <div className="my-products-container">
      <header>
        <div className="site-name">PuppyCo</div>
      </header>

      <nav className="crypto-menu">
        <a href="#login" className="login-btn">
          Login or Register
        </a>
        {['Active Products', 'Invite & Earn', 'Deposit / Withdraw'].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase().replace(/ /g, '-')}`}
            className={activeLink === label ? 'active-click' : ''}
            onClick={() => handleMenuClick(label)}
          >
            {label}
          </a>
        ))}
      </nav>

      <main className='flex justify-center'>
        <div className="empty-state">
          <div className="empty-icon">✖</div>
          <h2 className="empty-title">No Products Found</h2>
          <p className="empty-message">
            You haven't purchased any product yet. Browse our products to start earning today!
          </p>
          <a href="#all-products" className="browse-btn">
            BROWSE PRODUCTS
          </a>
        </div>
      </main>

      <footer>
        <div className="footer-text">
          © 2023 PuppyCo Crypto Platform | Secure and fast transactions
        </div>
      </footer>
    </div>
  );
};

export default NoActiveProducts;
