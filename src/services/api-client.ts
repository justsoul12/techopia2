import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/games/{game_pk}/development-team',
    params: {
        key: '969d9e3da0af4e409b614a627a915cfb'
    }
})