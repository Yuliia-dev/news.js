import axios from 'axios';
const KEY = '49117519fc164683b7b4990bef0d98b9';

export default class fetchNews {
  constructor() {
    this.page = 1;
  }

  async allNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?pageSize=10&page=${this.page}&apiKey=${KEY}`
    );
    console.log(response.data);
    return response.data;
  }

  async appleNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?pageSize=10&page=${this.page}&q=apple&from=2022-08-21&to=2022-08-21&sortBy=popularity&apiKey=${KEY}`
    );
    console.log(response.data);
    return response.data;
  }

  async teslaNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?pageSize=10&page=${this.page}&q=tesla&sortBy=publishedAt&apiKey=${KEY}`
    );
    console.log(response.data);
    return response.data;
  }

  async businessNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?pageSize=10&page=${this.page}&country=us&category=business&apiKey=${KEY}`
    );
    console.log(response.data);
    return response.data;
  }

  async techCrunchNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?pageSize=10&page=${this.page}&sources=techcrunch&apiKey=${KEY}`
    );
    console.log(response.data);
    return response.data;
  }

  async wallStreetJournalNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?pageSize=10&page=${this.page}&domains=wsj.com&apiKey=${KEY}`
    );
    console.log(response.data);
    return response.data;
  }
}
