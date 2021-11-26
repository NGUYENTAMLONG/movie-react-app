const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "c4e2a4468a94bb797562945ae5021a4d",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
