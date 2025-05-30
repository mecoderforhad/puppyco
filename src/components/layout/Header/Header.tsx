import { Link } from "react-router-dom";
import "../../../App.css";
import { useAuth } from "../../../provider/useAuth";

const Header = () => {
  const { user } = useAuth();

  return (
    <header>
      <div className="site-name">
        <Link to="/">PuppyCo</Link>
      </div>
      {user && (
        <div className="header-utility-buttons">
          <button
            className="utility-button balance-chart-btn"
            // onclick="window.location.href='deposit-withdraw.html'"
            title="Wallet"
          >
            <i className="fa-solid fa-wallet"></i>
            <span className="wallet-balance-text">
              <span id="userBalancePrefix" style={{ color: "white" }}>
                Balance:{" "}
              </span>
              <span id="userBalance">$50.00</span>
              <span
                id="loginPrompt"
                className="login-prompt"
                style={{ display: "none" }}
              >
                Wallet Balance
              </span>
            </span>
            <div
              id="earningsInfoDesktop"
              className="user-info-mobile-display"
              style={{ display: "none" }}
            >
              <span className="label">Today:</span>
              <span
                id="todayEarningsValueDesktop"
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
              id="activeProductInfoDesktop"
              className="user-info-mobile-display"
              style={{ display: "none" }}
            >
              <span className="label">Active Product:</span>
              <span
                id="activeProductValueDesktop"
                className="value product-name"
              ></span>
            </div>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
