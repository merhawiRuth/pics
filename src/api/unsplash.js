import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 05fde41ad83f719a2f846db7e90654714b4f8c8bc0652895b30d6f3ffda5084f'
  }
});
