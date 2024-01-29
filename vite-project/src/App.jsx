import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import UseRefAttributes from "./component/UseRefAttributes";
import UseRefCss from "./component/UseRefCss";
import UseRefHook from "./component/UseRefHook";
import UseRefInput from "./component/UseRefInput";
import UseRefPersistedMutable from "./component/UseRefPersistedMutable";

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
      <UseRefPersistedMutable />
      <Footer />
    </div>
  );
};

export default App;