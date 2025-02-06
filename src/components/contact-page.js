import BodyWr from "./body-wr";
import AsideContact from "./asideContact";
import Contact from "./contact/Contact";

function ContactPage() {
  return (
    <>
      <BodyWr>
        <Contact />
        <AsideContact />
      </BodyWr>
    </>
  );
}

export default ContactPage;
