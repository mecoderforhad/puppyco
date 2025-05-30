import "../../../App.css";
// import Prices from "../Prices/Prices";
// import Activity from "../Activity/Activity";

export default function ProductPage() {
  return (
    <main>
      <div className="products-grid">
        {/* Product: Rocki */}
        <div className="product wallet-pro">
          <img src="https://i.postimg.cc/GmsfXr29/IMG-4912.png" alt="Rocki" />
          <h3 className="product-name">Rocki</h3>
          <div className="description">
            Rocki is an innovative product designed to deliver consistent
            financial returns while providing exceptional value. Priced at{" "}
            <span className="highlight">$575</span>, Rocki is more than just a
            purchase — it's a smart investment opportunity that generates a
            reliable profit of <span className="highlight">$15</span> every
            single day.
          </div>
          <button
            className="buy-now-btn"
            data-product="Rocki"
            data-price="575"
            data-daily-earning="15"
          >
            Buy Now
          </button>
        </div>

        {/* Product: Leon */}
        <div className="product wallet-pro defi">
          <img src="https://i.postimg.cc/qB1PnxBj/IMG-4904.png" alt="Leon" />
          <h3 className="product-name">Leon</h3>
          <div className="description">
            Leon is a powerful investment product priced at{" "}
            <span className="highlight">$750</span> that delivers a guaranteed
            daily profit of <span className="highlight">$30</span>.
            <br />
            With Leon, your investment works hard for you every day, providing a
            simple and effective way to boost your financial growth with minimal
            effort.
          </div>
          <button
            className="buy-now-btn"
            data-product="Leon"
            data-price="750"
            data-daily-earning="30"
          >
            Buy Now
          </button>
        </div>

        {/* Product: Lara */}
        <div className="product wallet-pro defi lara">
          <img src="https://i.postimg.cc/3R4WDR7r/IMG-4914.png" alt="Lara" />
          <h3 className="product-name">Lara</h3>
          <span className="status-badge">ACTIVE</span>
          <div className="description">
            Lara is a cryptocurrency investment product priced at{" "}
            <span className="highlight">$1,280</span>. It offers a daily profit
            of <span className="highlight">$90</span>, making it a high-yield
            opportunity for investors. You can earn consistent returns every
            day, providing a quick recovery of the initial investment in just
            over two weeks.
          </div>
          <button
            className="buy-now-btn"
            data-product="Lara"
            data-price="1280"
            data-daily-earning="90"
          >
            Buy Now
          </button>
        </div>

        {/* Product: Husk */}
        <div className="product wallet-pro defi husk">
          <img src="https://i.postimg.cc/V6qvFhS2/IMG-4916.png" alt="Husk" />
          <h3 className="product-name">Husk</h3>
          <div className="description">
            Unlock daily passive income with Husk! For a one-time{" "}
            <span className="highlight">$2,900</span> investment, earn a
            consistent <span className="highlight">$180</span> daily return.
          </div>
          <button
            className="buy-now-btn"
            data-product="Husk"
            data-price="2900"
            data-daily-earning="180"
          >
            Buy Now
          </button>
        </div>

        {/* Product: Tokito */}
        <div className="product wallet-pro defi tokito">
          <img src="https://i.postimg.cc/kGwpWn7G/IMG-4918.png" alt="Tokito" />
          <h3 className="product-name">Tokito</h3>
          <div className="description">
            Step into elite crypto earnings with Tokito. For just{" "}
            <span className="highlight">$4,999</span>, enjoy a powerful{" "}
            <span className="highlight">$400</span> daily profit.
          </div>
          <button
            className="buy-now-btn"
            data-product="Tokito"
            data-price="4999"
            data-daily-earning="400"
          >
            Buy Now
          </button>
        </div>

        {/* Product: Lord */}
        <div className="product wallet-pro defi lord">
          <img src="https://i.postimg.cc/3JPQxMT2/IMG-4908.png" alt="Lord" />
          <h3 className="product-name">Lord</h3>
          <div className="description">
            Step into elite crypto earnings with Lord. For just{" "}
            <span className="highlight">$9,999</span>, enjoy a powerful{" "}
            <span className="highlight">$900</span> daily profit.
          </div>
          <button
            className="buy-now-btn"
            data-product="Lord"
            data-price="9999"
            data-daily-earning="900"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Activity Section */}
      {/* <Activity /> */}

      {/* Prices Section */}
      {/* <Prices /> */}

      {/* Action Buttons */}
      {/* <div className="action-buttons-container">
        <button className="action-button download-app-btn">
          <i className="fas fa-download"></i> Download App
        </button>
        <button className="action-button telegram-btn">
          <i className="fab fa-telegram"></i> Telegram
        </button>
      </div> */}
    </main>
  );
}
