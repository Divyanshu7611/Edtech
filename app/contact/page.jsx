import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import Navbar2 from "@/components/global/Navbar2";

export const metadata = {
  title: "Impact IT services || Contact",
};

export default function page() {
  return (
    <section className="text-gray-600 body-font relative">
      <Navbar2 />
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <ContactMap />
        <ContactForm />
      </div>
    </section>
  );
}
