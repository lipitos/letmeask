import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { auth, firebase } from "../services/firebase";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import { AuthContext } from "../App";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useContext(AuthContext);

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire suas dúvidas em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo Google" />
            Crie uma sala com o Google
          </button>
          <div className="separator">Entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
