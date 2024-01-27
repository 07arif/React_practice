import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import UseRefHook from "./component/UseRefHook";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ContactForm />
      <UseRefHook />
      <Footer />
    </div>
  );
};

export default App;