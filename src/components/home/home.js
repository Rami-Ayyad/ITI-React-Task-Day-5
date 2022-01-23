import React from "react";
import { useSelector, useDispatch } from "react-redux";
import changeLanguage from "./../../store/actions/action";
import { useContext } from "react";
import { languageContext } from "./../../contexts/languageContext";
import { loaderContext } from "./../../contexts/loaderContext";
const Home = () => {
  // const language = useSelector((state) => state.language.lang);

  // const dispatch = useDispatch();

  const { lang, setLang } = useContext(languageContext);
  const { loader } = useContext(loaderContext);

  const toggleLanguage = () => {
    setLang(lang == "en" ? "ar" : "en");
  };
  console.log(loader);
  return (
    <>
      <div dir={lang == "en" ? "ltr" : "rtl"}>
        <h2>Home</h2>
        <h2>{lang}</h2>
        <h2>{` loader is : ${loader}`}</h2>
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
          onClick={() => {
            toggleLanguage();
          }}
        >
          change language
        </button>
      </div>
    </>
  );
};

export default Home;
