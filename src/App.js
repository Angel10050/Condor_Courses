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
    },
    filterInfo: {
      filtredItems: [],
      thereIsNextPage: null
    },
    filterError: null,
    courseName: ""
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
      this.state.url != null // Load data if the "next" property exists
    ) {
      return this.HandlerFetchData();
    }
  };
  /* function to load more data */

  HandlerFetchData = async () => {
    this.setState({
      loading: true
    });
    try {
      const query = await axios.get(`${this.state.url}`);
      this.setState({
        loading: false,
        url: query.data.next,
        page: this.state.page + 1,
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

  HandlerFilter = async () => {
    try {
      const filtredQuery = await axios.get(`${this.state.courseName}`);
      this.setState({
        filterInfo: {
          filtredCourses: filtredQuery.data.items,
          thereIsNextPage: filtredQuery.data.next
        }
      });
    } catch (error) {
      this.setState({
        filterError: error.message
      });
    }
  };

  handlerOnchange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
    this.HandlerFilter();
  };

  render() {
    if (this.state.loading && this.state.page === 0) {
      return <Loader className="loaderSection" />;
    } else if (this.state.queryError) {
      return "error";
    } else {
      return (
        <div className="App">
          <Main state={this.state} handlerOnchange={this.handlerOnchange} />
        </div>
      );
    }
  }
}

export default App;
