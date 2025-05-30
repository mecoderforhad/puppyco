import "../../../App.css";

const Navbar = () => {
  return (
    <nav className="crypto-menu">
      <div className="crypto-menu-container">
        <a href="/" className="dashboard-btn">
          Dashboard
        </a>
        <a href="/active-product" className="active-products-btn">
          Active Products
        </a>
        <a href="/invite-earn" className="invite-earn-btn">
          Invite & Earn
        </a>
        <a href="/login" className="login-btn" id="loginRegisterBtn">
          Login or Register
        </a>
        <div className="utility-buttons">
          <button
            className="utility-button balance-chart-btn"
            // onclick="window.location.href='deposit-withdraw.html'"
            title="Wallet"
          >
            <i className="fa-solid fa-wallet"></i>
            <span className="wallet-balance-text">
              <span id="userBalancePrefixMobile" style={{ color: "white" }}>
                Balance:{" "}
              </span>
              <span id="userBalanceMobile">$50.00</span>
              <span
                id="loginPromptMobile"
                className="login-prompt"
                style={{ display: "none" }}
              >
                Wallet Balance
              </span>
            </span>
            <div
              id="earningsInfoMobile"
              className="user-info-mobile-display"
              style={{ display: "none" }}
            >
              <span className="label">Today:</span>
              <span
                id="todayEarningsValueMobile"
                className="value earnings-amount"
              ></span>
            </div>
          </button>
          <button
            className="utility-button profit-chart-btn"
            // onclick="window.location.href='pricing-chart.html'"
            title="Pricing Chart"
          >
            <i className="fa-solid fa-chart-line"></i>
            <span className="profit-chart-text">Profit Chart</span>
            <div
              id="activeProductInfoMobile"
              className="user-info-mobile-display"
              style={{ display: "none" }}
            >
              <span className="label">Active Product:</span>
              <span
                id="activeProductValueMobile"
                className="value product-name"
              ></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
