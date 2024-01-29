const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const places=[];
fetch(endpoint)
    .then(data => data.json())
    .then(place => places.push(...place))

const findMatches = (word,places) => {
    return places.filter(place => {
        const regex=new RegExp(word,'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}

const numberWithCommas=(x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const displayMatches = (e) => {    
    const word =(e.target.value);
    const newArr=findMatches(word,places)
    const showData=newArr.map(place => {
        const regex=new RegExp(word,'gi')
        const cityName= place.city.replace(regex,`<span class='hl'>${word}</span>`)
        const stateName= place.state.replace(regex,`<span class='hl'>${word}</span>`)
        return `
            <li>
                <span class='name'>${cityName} , ${stateName} </span>
                <span class='population'> ${numberWithCommas(place.population)}</span>
            </li>
        `
    }).join('')
    suggestions.innerHTML=showData
} 

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup',displayMatches)