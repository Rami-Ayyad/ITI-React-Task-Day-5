import React from "react";
import { useHistory } from "react-router-dom";
const About = (props) => {
  console.log(props);

  const history = useHistory();
  
  const handleRedirect = () => {
    history.push("/contact");

    //    props.history.push("/contact");
  };
  return (
    <>
      <h2>About us</h2>
      <p>
        Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo.
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
      </p>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        The following is <strong>rendered as bold text</strong>.
      </p>
      <p>
        The following is <em>rendered as italicized text</em>.
      </p>
      <p>
        An abbreviation of the word attribute is{" "}
        <abbr title="attribute">attr</abbr>.
      </p>
      <button
        className="btn btn-success btn-sm"
        onClick={() => handleRedirect()}
      >
        Redirect to contact page
      </button>
    </>
  );
};

export default About;
