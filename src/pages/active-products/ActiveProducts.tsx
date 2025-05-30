import React, { useEffect } from "react";
import "./ActiveProduct.css";

const ActiveProducts: React.FC = () => {
  useEffect(() => {
    // Update total earned dynamically
    const daysActive = 30;
    const dailyProfit = 90;
    const totalEarned = daysActive * dailyProfit;

    const totalEarnedElement = document.querySelector(
      ".stats-container .stat-card:nth-child(3) .stat-value"
    );

    if (totalEarnedElement) {
      totalEarnedElement.textContent = `$${totalEarned}`;
    }
  }, []);

  return (
    <>
      <div className="product-active">
        <img src="https://i.postimg.cc/3R4WDR7r/IMG-4914.png" alt="Lara" />
        <span className="status-badge">ACTIVE</span>
        <h2 className="product-name">Lara</h2>

        <div className="description">
          Your Lara investment is{" "}
          <span className="highlight">actively generating profits</span> every
          day. Below you can track your earnings and see how your investment is
          performing.
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-value">$1,280</div>
            <div className="stat-label">Initial Investment</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">$90</div>
            <div className="stat-label">Daily Profit</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">$2,700</div>
            <div className="stat-label">Total Earned</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">30 days</div>
            <div className="stat-label">Active Period</div>
          </div>
        </div>

        <div className="process-steps">
          <h3>How Your Profit is Generated:</h3>

          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4 className="step-title">Daily Crypto Mining</h4>
              <p>
                Your investment is automatically allocated to our
                high-performance mining rigs that generate cryptocurrency 24/7.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4 className="step-title">Automatic Profit Calculation</h4>
              <p>
                Every day at midnight UTC, your $90 profit is calculated based
                on current mining yields and market prices.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4 className="step-title">Instant Payout</h4>
              <p>
                Your daily earnings are automatically credited to your account
                balance each morning.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4 className="step-title">Compound or Withdraw</h4>
              <p>
                You can withdraw your profits daily or reinvest them to purchase
                additional products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveProducts;
