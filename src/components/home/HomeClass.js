import React from "react";
import { connect } from "react-redux";
import changeLanguage from "./../../store/actions/action";
import { changeLoader } from './../../store/actions/loaderAction';

class HomeClass extends React.Component {
  constructor() {
    super();
  }

  toggleLanguage = () => {
    this.props.changeLang(this.props.language == "en" ? "ar" : "en");
  };

  render() {
    console.log(this.props);

    return (
      <>
        <div dir={this.props.language == "en" ? "ltr" : "rtl"} >
          <h2>Home Class</h2>
          <h2>{this.props.language}</h2>
          <p>
            Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
          </p>
          <p>
            <small>
              This line of text is meant to be treated as fine print.
            </small>
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
              this.toggleLanguage();
            }}
          >
            change language
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.lang,
    
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (x) => dispatch(changeLanguage(x)),
    changeLoader:(x)=>dispatch(changeLoader(x))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)   (HomeClass);
