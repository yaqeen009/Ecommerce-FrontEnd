import { useLocation } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AppRoutes from "./AppRoutes";

function App() {
  const location = useLocation();
  const hideHeaderFooterRoutes = ["/login"];
  const showHeaderFooter =
    !hideHeaderFooterRoutes.includes(location.pathname) &&
    location.pathname !== '*';
  return (
    <div className="bg-background">
      {showHeaderFooter && <NavBar />}
      <div>
        <AppRoutes />
      </div>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
