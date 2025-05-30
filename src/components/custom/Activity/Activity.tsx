export default function Activity() {
  return (
    <div className="activity-box">
      <h3 className="activity-title">Recent Activity</h3>
      <div className="activity-items" id="activityItemsContainer">
        {[
          {
            phone: "+1 (415) 555-0***",
            flag: "us",
            text: "just withdrew",
            amount: "500$ USDT",
          },
          {
            phone: "+49 30 12345-***",
            flag: "de",
            text: "just activated",
            product: "Lord",
          },
          {
            phone: "+383 44 123 45***",
            flag: "xk",
            text: "just withdrew",
            amount: "250$ USDT",
          },
          {
            phone: "+33 6 12 34 56***",
            flag: "fr",
            text: "just activated",
            product: "Husk",
          },
          {
            phone: "+90 212 345 67***",
            flag: "tr",
            text: "just withdrew",
            amount: "1200$ USDT",
          },
          {
            phone: "+32 2 345 67***",
            flag: "be",
            text: "just activated",
            product: "Tokito",
          },
        ].map((activity, index) => (
          <div className="activity-item" key={index}>
            <span className="activity-phone">
              <span
                className="flag-icon"
                style={{
                  backgroundImage: `url('https://flagcdn.com/${activity.flag}.svg')`,
                  display: "inline-block",
                  width: "20px",
                  height: "15px",
                  backgroundSize: "cover",
                  marginRight: "5px",
                }}
              ></span>{" "}
              {activity.phone}
            </span>
            <span className="activity-text-content">
              {activity.text}{" "}
              {activity.amount ? (
                <span className="activity-amount">{activity.amount}</span>
              ) : (
                <span
                  className={`activity-product ${activity.product?.toLowerCase()}`}
                >
                  {activity.product}
                </span>
              )}{" "}
              {activity.product && "product"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
