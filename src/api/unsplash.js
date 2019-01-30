import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID af26898466eb73e17bdb4ba6c4a62b1cb7460998fb9962d93f4256b2e15cbea6'
    }
});
