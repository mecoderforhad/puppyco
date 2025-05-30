import { createContext, useState, ReactNode } from "react";
import { AuthContextType, User } from "../types/auth/AuthInterface";
import { toast } from "react-toastify";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const siteData = JSON.parse(localStorage.getItem("site") || "{}");

  const [user, setUser] = useState<User | null>(siteData?.user || null);
  const [token, setToken] = useState<string>(siteData?.token || "");

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // If response status is not OK (e.g. 400, 401, 500)
        const errorMessage = data.message || "Login failed. Please try again.";
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }
      if (data.token) {
        const userData: User = {
          id: data.user?.id,
          name: data.user?.name,
          email: data?.user?.email,
          role: data?.user?.role,
          referId: data.user?.referId,
        };

        setUser(userData);
        setToken(data.token);

        localStorage.setItem(
          "site",
          JSON.stringify({ user: userData, token: data.token })
        );
        toast.success("Login successful!");
      } else {
        toast.error("Invalid credentials or no token received.");
        throw new Error("Invalid credentials or no token.");
      }
    } catch (err: any) {
      const message = err?.message || "Something went wrong during login.";
      toast.error(message);
      throw err;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        const errorMessage = data.message || "Registration failed.";
        toast.error(errorMessage);
        throw new Error(errorMessage);
      }

      if (data.token) {
        const userData: User = {
          id: data.user?.id,
          name: data.user?.name,
          email: data.user?.email,
          role: data.user?.role,
          referId: data.user?.referId,
        };

        setUser(userData);
        setToken(data.token);

        localStorage.setItem(
          "site",
          JSON.stringify({ user: userData, token: data.token })
        );
        toast.success("Registration successful!");
      } else {
        toast.error("Registration successful but no token received.");
        throw new Error("No token received after registration.");
      }
    } catch (err: any) {
      const message =
        err?.message || "Something went wrong during registration.";
      toast.error(message);
      throw err;
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, register, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
