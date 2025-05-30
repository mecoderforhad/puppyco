import React, { useRef, useState } from "react";
import "./InviteEarn.css";

const InviteEarn: React.FC = () => {
  const referralInputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    if (referralInputRef.current) {
      referralInputRef.current.select();
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <div className="invite-container">
        <h2 className="invite-title">Invite Friends & Earn Rewards</h2>

        <div className="referral-box">
          <h3>Your Referral Link</h3>
          <div className="referral-link">
            <input
              ref={referralInputRef}
              type="text"
              readOnly
              value="https://example.com/referral?code=XYZ123"
              className="referral-input"
            />
            <button onClick={copyReferralLink} className="copy-btn">
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
          <p>
            Share this link with friends and earn $20 when they sign up and make
            their first deposit!
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-value">8</div>
            <div className="stat-label">Friends Invited</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">$160</div>
            <div className="stat-label">Total Earned</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">7</div>
            <div className="stat-label">More to Reward</div>
          </div>
        </div>

        <h3>Your Reward Progress</h3>

        <div className="reward-tier">
          <div className="tier-header">
            <span className="tier-name">15 Friends Invited</span>
            <span className="tier-reward">$20 Bonus</span>
          </div>
          <p>Invite 15 friends to receive $20 bonus in your account</p>
          <div className="tier-progress">
            <div className="progress-bar" style={{ width: "53%" }}></div>
          </div>
        </div>

        <div className="reward-tier">
          <div className="tier-header">
            <span className="tier-name">30 Friends Invited</span>
            <span className="tier-reward">$50 Bonus</span>
          </div>
          <p>Reach 30 referrals for a $50 account credit</p>
          <div className="tier-progress">
            <div className="progress-bar" style={{ width: "26%" }}></div>
          </div>
        </div>

        <div className="reward-tier">
          <div className="tier-header">
            <span className="tier-name">50 Friends Invited</span>
            <span className="tier-reward">$100 Bonus</span>
          </div>
          <p>Hit 50 referrals and get $100 plus exclusive benefits</p>
          <div className="tier-progress">
            <div className="progress-bar" style={{ width: "16%" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteEarn;
