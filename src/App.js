import React, { Component } from "react";
import ImageGallery from "./components/imageGallery/ImageGallery";
import { getImages } from "../src/services/Api";
import Searchbar from "./components/searchbar/Searchbar";
import Button from "./components/button/Button";
import AppLoader from "./components/loader/Loader";
import Modal from "./components/modal/Modal";

class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    largeImage: "",
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ isLoading: true });
      const images = await getImages(this.state.query);
      this.setState({ images: images.hits, isLoading: false });
      return;
    }
    if (this.state.page !== prevState.page) {
      this.setState({ isLoading: true });
      const images = await getImages(this.state.query, this.state.page);
      this.setState((prev) => ({
        images: [...prev.images, ...images.hits],
        isLoading: false,
      }));
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  onInputQuery = async (query) => {
    this.setState({ query, page: 1 });
  };

  loadMore = async () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };

  toggleModal = (url) => {
    if (!url) {
      url = null;
    }
    this.setState({ showModal: !this.state.showModal, largeImage: "" });
  };

  addLargeImg = (largeImgUrl) => {
    this.setState({ largeImage: largeImgUrl, showModal: true });
  };

  render() {
    return (
      <>
        <Searchbar onChange={this.onInputQuery} />
        <ImageGallery
          images={this.state.images}
          addLargeImg={this.addLargeImg}
        />
        {this.state.isLoading && <AppLoader />}
        {!!this.state.images.length && !this.state.isLoading && (
          <Button onClick={this.loadMore} />
        )}

        {this.state.showModal && (
          <Modal onClose={this.toggleModal} url={this.state.largeImage} />
        )}
      </>
    );
  }
}

export default App;

// loadMore = async () => {
//    const images = await getImages(this.state.query, this.state.page);
//   this.setState((prev) => ({
//     images: [...prev.images, ...images.hits],
//     page: prev.page + 1,
//   }));
// };

// onInputQuery = async (query) => {
//   const images = await getImages(query);
//   this.setState({ query: query, images: images.hits, page: 2 });
// };
