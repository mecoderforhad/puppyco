import { useEffect, useState } from "react";
import "../login/LoginPage.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../provider/useAuth";

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

type FormValues = {
  name: string;
  email: string;
  password: string;
  captchaInput: string;
};

const RegistrationPage = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const { register: registration } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    setValue("captchaInput", "");
  };

  const onSubmit = async (data: FormValues) => {
    if (data.captchaInput !== captcha) {
      toast.error("Captcha verification failed. Please try again.");
      refreshCaptcha();
    } else {
      try {
        await registration(data?.name, data?.email, data?.password);
      } catch (error: any) {
        toast.error(error);
      }
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
      <ToastContainer />
      <header>
        <div className="site-name">
          <Link to="/">PuppyCo</Link>
        </div>
      </header>

      <div className="particles" id="particles"></div>

      <div className="login-container">
        <h1 className="login-title">Register New Account</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="error text-rose-600">Username is required</p>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="error">Email is required</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="error">Password is required</p>}
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
              {...register("captchaInput", { required: true })}
            />
            {errors.captchaInput && (
              <p className="error">Captcha is required</p>
            )}
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
