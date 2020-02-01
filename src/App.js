import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Main from "./pages/main/Main";
import Loader from "./components/loader/Loader";

class App extends Component {
  state = {
    loading: false,
    queryError: null,
    info: ""
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
        "https://test.mytablemesa.com/api/courses?orderBy=popularity+desc&expand=provider&name="
      );
      this.setState({
        loading: false,
        queryError: null,
        info: query.data
      });
    } catch (error) {
      this.setState({
        queryError: error.message,
        loading: false
      });
    }
  };

  render() {
    if (this.state.loading || !this.state.info) {
      return <Loader />;
    } else if (this.state.queryError) {
      return "error";
    } else {
      return (
        <div className="App">
          <Main state={this.state} />
        </div>
      );
    }
  }
}

export default App;
