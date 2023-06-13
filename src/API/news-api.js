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
    // console.log(response);
    return response.data;
  }
}
