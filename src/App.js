import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import Main from "./pages/main/Main";
import Loader from "./components/loader/Loader";

class App extends Component {
  state = {
    url: "/api/courses?orderBy=popularity+desc&expand=provider&name=",
    page: 0,
    loading: false,
    queryError: null,
    info: {
      items: []
    }
  };

  componentDidMount() {
    this.HandlerFetchData(); // initial data
    document.addEventListener("scroll", this.loadMoreData);
  }

  /* function to load more data */
  loadMoreData = event => {
    const {
      scrollTop,
      clientHeight,
      scrollHeight
    } = event.target.documentElement;

    if (
      scrollTop + clientHeight >= scrollHeight - 20 &&
      this.state.url != null
    ) {
      return this.HandlerFetchData();
    }
  };
  /* function to load more data */

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
        url: query.data.next,
        page: this.state.page + 1,
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
    if (this.state.loading && this.state.page === 0) {
      return <Loader className="loaderSection" />;
    } else if (this.state.queryError) {
      return "error";
    } else if (this.state.info.items) {
      return (
        <div className="App">
          <Main state={this.state} isLoading={this.state.loading} />
        </div>
      );
    }
  }
}

export default App;
