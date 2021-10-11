import "./styles.css";
import 'semantic-ui-css/semantic.min.css'
import {Container} from "semantic-ui-react"
import Intro from "./components/intro/Intro"

export default function App() {
  return (
    <Container>
      <Intro/>
    </Container>
  );
}
