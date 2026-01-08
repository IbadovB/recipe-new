import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/header/header.jsx"; 
// import GlobalSpinner from "./GlobalSpinner"; // spinner varsa
import Footer from "./components/footer/footer.jsx";


export default function Root() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    
          <div className="app">
        <Header />
      {isNavigating && <GlobalSpinner />}
       <main className="page">
      <Outlet />
      </main>
        <Footer />
    </div>
  );
}
