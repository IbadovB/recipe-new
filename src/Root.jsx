import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/header/header.jsx"; 
import Footer from "./components/footer/footer.jsx";
import Socials from "./components/social.jsx";


/*export default function Root() {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading";

  return (
    
          <div className="app">
        <Header />
           <main className="page">
      <Outlet />
      </main>
       <main className="page">
        <Footer />
        </main>
        <Socials />
    </div>
  );
}*/

export default function Root() {
  return (
    <div className="app">
      <Header />

      <main className="page">
        <Outlet />
      </main>

      <Footer />
      <Socials />
    </div>
  );
}

