import { useLocation, Link } from "react-router-dom";
import "../../../App.css";
import { useAuth } from "../../../provider/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "active-click" : "";

  return (
    <nav className="crypto-menu">
      {user ? (
        <div className="crypto-menu-container">
          <Link to="/" className={`dashboard-btn ${isActive("/")}`}>
            Dashboard
          </Link>
          <Link
            to="/active-product"
            className={`active-products-btn ${isActive("/active-product")}`}
          >
            Active Products
          </Link>
          <Link
            to="/invite-earn"
            className={`invite-earn-btn ${isActive("/invite-earn")}`}
          >
            Invite & Earn
          </Link>
          <a>
            <div onClick={() => logOut()} className="invite-earn-btn">
              Logout
            </div>
          </a>

          <div className="utility-buttons">
            <button className="utility-button balance-chart-btn" title="Wallet">
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
            <button className="utility-button profit-chart-btn" title="Pricing Chart">
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
      ) : (
        <div className="crypto-menu-container">
          <Link to="/login" className="login-btn" id="loginRegisterBtn">
            Login or Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;