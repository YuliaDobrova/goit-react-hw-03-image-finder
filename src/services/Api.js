import axios from "axios";

const API_KEY = "22367618-7fb2d68f51aac1758c60e4fb0";

export const getImages = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

//pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

// https: id;
// webformatURL;
// largeImageURL;
