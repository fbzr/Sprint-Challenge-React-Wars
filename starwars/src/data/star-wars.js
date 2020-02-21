import axios from 'axios';

function getPeople(page=1) {
    console.log('get request');
    return axios.get(`https://swapi.co/api/people/?page=${page}`);
}

export default { getPeople };