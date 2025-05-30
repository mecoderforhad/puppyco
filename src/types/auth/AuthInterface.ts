export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  referId: string;
}

export interface AuthContextType {
  user: User | null;
  token: string;
  // loginAction: (data: { phone?: string; password: string }) => Promise<void>;
  logOut: () => void;
  register: (name: string, phone: string, password: string) => Promise<void>;
  login: (phone: string, password: string) => Promise<void>;
}
