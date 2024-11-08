import { useLocation } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AppRoutes from "./AppRoutes";

function App() {
  const location = useLocation();
  const hideFooterRoutes = ["/login","/checkout","/order-confirmation"];
  const hideHeaderRoutes = ["/checkout","/login","/order-confirmation"]
  const showHeader = !hideHeaderRoutes.includes(location.pathname) && location.pathname !== '*'
  const showFooter =
    !hideFooterRoutes.includes(location.pathname) &&
    location.pathname !== '*';
  return (
    <div className="bg-background">
      {showHeader && <NavBar />}
      <div>
        <AppRoutes />
      </div>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
