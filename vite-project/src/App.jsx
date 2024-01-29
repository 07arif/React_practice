import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import UseRefAttributes from "./component/UseRefAttributes";
import UseRefCss from "./component/UseRefCss";
import UseRefHook from "./component/UseRefHook";
import UseRefInput from "./component/UseRefInput";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ContactForm />
      <UseRefHook />
      <UseRefAttributes />
      <UseRefInput />
      <UseRefCss />
      <Footer />
    </div>
  );
};

export default App;