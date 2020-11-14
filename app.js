const form = document.querySelector('#searchForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
       getMovies(); 
    } catch(e){
        console.log("Error in search", e)
    }
})

const getMovies = async () => {
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}}
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=`, config);
    imgLoop(res.data);
    
}

const imgLoop = (movies) => {
    for (let movie of movies){
        const img = document.createElement('IMG');
        img.src = movie.show.image.medium;
        document.body.append(img);
    }
}