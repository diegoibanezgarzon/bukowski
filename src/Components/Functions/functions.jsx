import axios from 'axios';

const cocktails = () => {
    const peticion  =axios.get('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    console.log(peticion)
}

export {
    cocktails
}