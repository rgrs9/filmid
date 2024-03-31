function Film ({title, overview, posterPath}) {
    const pildiUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
    return (
        <div className="card" style={{width: 400}}>
            <img src={pildiUrl} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h2 className="card-title">{title || 'Tundmatu film'}</h2>
                <p className="card-text">{overview|| 'Sisu pole saadaval'}</p>
            </div>
        </div>
    )
}

export default Film;