import Logos from "../components/Logos";
function Contact() {
  const text = {
    heading: "Contact Page",
    intro: "This is a contact page containing some lorem ipsum filler text",
    loremIpsum:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vitae fugit ipsam quo accusantium autem officia necessitatibus ullam voluptatibus consectetur adipisci impedit, eius ex fugiat harum totam nisi! Amet ea cupiditate soluta dolorem, ab tenetur vero natus excepturi eveniet, blanditiis magnam sit? Iure maxime non nesciunt officia repellat atque esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, vitae fugit ipsam quo accusantium autem officia necessitatibus ullam voluptatibus consectetur adipisci impedit, eius ex fugiat harum totam nisi! Amet ea cupiditate soluta dolorem, ab tenetur vero natus excepturi eveniet, blanditiis magnam sit? Iure maxime non nesciunt officia repellat atque esse?",
  };
  return (
    <>
      <Logos />
      <div>
        <h2>{text.heading}</h2>
        <p>{text.intro}</p>
        <p>{text.loremIpsum}</p>
      </div>
    </>
  );
}

export default Contact;
