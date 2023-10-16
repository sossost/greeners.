import { useEffect, useState } from "react";
import { app } from "./firebaseApp";
import { BrowserRouter as Router } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  AuthContextProvider,
  BreakpointContextProvider,
  ToastProvider,
} from "./provider";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/global.style";
import { Layout } from "./components/Templates";
import { Loading } from "./components/Molecules";

function App() {
  const auth = getAuth(app);
  const [init, setInit] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!auth.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <AuthContextProvider>
      <Router>
        <GlobalStyle />
        <ToastProvider />
        <BreakpointContextProvider>
          <Layout>
            {init ? (
              <AppRoutes isAuthenticated={isAuthenticated} />
            ) : (
              <Loading />
            )}
          </Layout>
        </BreakpointContextProvider>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
