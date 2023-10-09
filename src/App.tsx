import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes";
import Layout from "./components/Organisms/Layout";
import GlobalStyle from "./styles/global.style";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

export default App;
