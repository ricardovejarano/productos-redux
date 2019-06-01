import React from "react";

import { Provider } from "react-redux";
import store from "./store";
import Productos from "./components/Productos";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <h1>Bienvenidos a la clase de Redux</h1>
        <Productos />
      </Provider>
    );
  }
}

export default App;