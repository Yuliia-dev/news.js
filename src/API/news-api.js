import axios from 'axios';
const KEY = 'b492db96c5msh527b7c6772e1e3bp1b2b59jsne402ddd76d30';

export default class fetchNews {
  constructor() {
    this.pageSize = '12';
    this.page = '1';
    this.query = 'news';
  }

  optionsForRequest() {
    const options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
      params: {
        q: this.query,
        pageNumber: this.page,
        pageSize: this.pageSize,
        autoCorrect: 'true',
        fromPublishedDate: 'null',
        toPublishedDate: 'null',
      },
      headers: {
        'X-RapidAPI-Key': `${KEY}`,
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
      },
    };
    return options;
  }

  async allNews() {
    const response = await axios.request(this.optionsForRequest());
    console.log(response);
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
