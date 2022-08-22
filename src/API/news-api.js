import axios from 'axios';
const KEY = '49117519fc164683b7b4990bef0d98b9';

export default class fetchNews {
  async appleNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=apple&from=2022-08-21&to=2022-08-21&sortBy=popularity&apiKey=${KEY}`
    );
    return response.articles;
  }

  async teslaNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2022-07-22&sortBy=publishedAt&apiKey=${KEY}`
    );
    return response.articles;
  }

  async businessNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${KEY}`
    );
    return response.articles;
  }

  async techCrunchNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${KEY}`
    );
    return response.articles;
  }

  async wallStreetJournalNews() {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${KEY}`
    );
    return response.articles;
  }
}
