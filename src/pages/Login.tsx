import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import LoginGate from "./LoginGate";

const Login = () => {
  const { authenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) navigate("/", { replace: true });
  }, [authenticated, navigate]);

  const handleLogin = (code: string) => {
    const ok = login(code);
    if (ok) navigate("/", { replace: true });
    return ok;
  };

  return <LoginGate onLogin={handleLogin} />;
};

export default Login;
