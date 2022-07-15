import React from "react";
import "./styles.css";

export default class App extends React.Component {
  double = (number) => {
    return <h1>{number * 2} vezes</h1>;
  };

  text = (text) => {
    return (
      <h1>
        Olá seja bem-vindo ao canal de devs.Aqui você otimiza seu tempo codando
        até:
      </h1>
    );
  };

  render() {
    return (
      <div>
        {this.text()}
        {this.double(2)}
      </div>
    );
  }
}
