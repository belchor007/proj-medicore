import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("admin@medicore.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  async function handleLogin(event) {
    event.preventDefault();
    setError("");

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      const user = response.data.user;

localStorage.setItem(
  "medicore_user",
  JSON.stringify(user)
);

localStorage.setItem(
  "medicore_token",
  response.data.token

  
);

if (user.role === "admin") {
  navigate("/admin");
}

if (user.role === "medico") {
  navigate("/medico");
}

if (user.role === "recepcao") {
  navigate("/recepcao");
}

if (user.role === "financeiro") {
  navigate("/financeiro");
}

      localStorage.setItem("medicore_token", response.data.token);
      localStorage.setItem("medicore_user", JSON.stringify(response.data.user));

      navigate("/admin");
      console.log(response.data);
    } catch (error) {
      setError("E-mail ou senha inválidos.");
      console.error(error);
    }
  }

  return (
    <div>
      <h1>MediCore</h1>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;