async function loeAndmed({search}) {
    const paringuUrl = `https://api.themoviedb.org/3/search/movie?api_key=42d1fd46e44dd90c3a68be1b4a01e6bb&query=${search}`
    const response = await fetch(paringuUrl)
    const andmed = await response.json()
    console.log(andmed)
    return andmed
}

export {
    loeAndmed
}