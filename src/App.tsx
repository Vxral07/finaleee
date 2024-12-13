import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/root-layout";
import Home from "./components/pages/home";
import Faq from "./components/pages/faq";
import ContactPage from "./components/pages/contact";
import AboutPage from "./components/pages/about";
import Advisory from "./components/pages/advisory";
import Press from "./components/pages/press";
// import { PrivacyPolicy } from "./components/pages/PrivacyPolicy";
import Privacy from "./components/pages/privacy";
import Terms from "./components/pages/terms";
import Disclaimer from "./components/pages/disclaimer";
import Stock from "./components/pages/stock";
import Cookies from "./components/pages/cookies";
import Iris from "./components/pages/iris";
// import Ethosphere from "./components/pages/ethosphere";
import Ethosphere from "./components/pages/ethosphere";
import Prive from "./components/pages/prive";
import { ContactsPage } from "./components/pages/ContactPage";
// import {Hnis} from "./components/pages/hnis";

const App = () => {
    return (
        <div className="min-h-screen   bg-black text-foreground">
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="faqs" element={<Faq />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="advisory" element={<Advisory />} />
                    <Route path="press" element={<Press />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="terms" element={<Terms />} />
                    <Route path="disclaimer" element={<Disclaimer />} />
                    <Route path="cookies" element={<Cookies />} />
                    <Route path="stock" element={<Stock />} />
                    <Route path="iris" element={<Iris />} />
                    <Route path="ethosphere" element={<Ethosphere />} />
                    <Route path="ContactsPage" element={<ContactsPage />} />
                    {/* <Route path="hnis" element={<Hnis />} /> */}
                </Route>
                <Route path="prive" element={<Prive />} />
            </Routes>
        </div>
    );
};

export default App;

//text-lg card heading
//text-sm card details
//
//