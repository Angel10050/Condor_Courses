import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Main from "./pages/main/Main";
import Loader from "./components/loader/Loader";

class App extends Component {
  state = {
    url: "/api/courses?orderBy=popularity+desc&expand=provider&name=",
    loading: false,
    queryError: null,
    info: {
      items: []
    }
  };

  componentDidMount() {
    this.HandlerFetchData();
  }

  HandlerFetchData = async () => {
    this.setState({
      queryError: null,
      loading: true
    });
    try {
      const query = await axios.get(
        `https://test.mytablemesa.com${this.state.url}`
      );
      this.setState({
        loading: false,
        queryError: null,
        info: {
          items: [].concat(this.state.info.items, query.data.items)
        }
      });
    } catch (error) {
      this.setState({
        queryError: error.message,
        loading: false
      });
    }
  };
  /* ------------------------------------------------------------------------------------------------ */

  /* ------------------------------------------------------------------------------------------------ */

  render() {
    console.log(this.state.info);
    if (this.state.loading || !this.state.info.items) {
      return <Loader />;
    } else if (this.state.queryError) {
      return "error";
    } else if (this.state.info.items) {
      return (
        <div className="App">
          <Main state={this.state} />
        </div>
      );
    }
  }
}

export default App;
