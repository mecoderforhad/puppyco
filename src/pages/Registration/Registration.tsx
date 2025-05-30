import { useEffect, useState } from "react";
import "../login/LoginPage.css";
import { Link } from "react-router";

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const RegistrationPage = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState("");

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setInputCaptcha("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputCaptcha !== captcha) {
      alert("Captcha verification failed. Please try again.");
      refreshCaptcha();
    } else {
      alert("Registration successful! Redirecting...");
      // Registration submission logic here
    }
  };

  useEffect(() => {
    const container: any = document.getElementById("particles");
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100 + 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(particle);
    }
  }, []);

  return (
    <div className="login-page">
      <header>
        <div className="site-name"><Link to="/">PuppyCo</Link></div>
      </header>

      <div className="particles" id="particles"></div>

      <div className="login-container">
        <h1 className="login-title">Register New Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label>Captcha Verification</label>
            <div className="captcha-container">
              <div className="captcha-display">{captcha}</div>
              <button
                type="button"
                className="refresh-captcha"
                onClick={refreshCaptcha}
              >
                ↻
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the captcha above"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Register
          </button>
        </form>

        <div className="login-footer">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
