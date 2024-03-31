import './App.css';
import { loeAndmed } from './utils'
import { useState } from 'react'
import Film from './Film'

function App() {
  const [otsisona, SetOtsisona] = useState('');
  const [otsitulemus, setOtsitulemus] = useState([]);

  const uuendaOtsisona = (event) => {
    SetOtsisona(event.target.value);
  }

  const search = async () => {
    const andmed = await loeAndmed({ search: otsisona});
    setOtsitulemus(andmed.results)
    setValitudFilm(null);
}

  const [valitudFilm, setValitudFilm] = useState(null);


  const uuendaValitudFilmi = (film) => {
    setValitudFilm(film);
  }

  <div></div>
  return (
    <div className='container row'>
            
      <div className='otsinguala col'>
        <h1>Filmide otsing</h1>
        <div>
          <input value={otsisona} onChange={uuendaOtsisona} placeholder='sisesta filmi nimi'/>
          <button onClick={search}>Otsi</button>
        </div>
      </div>
      <div className='row'>
      <h2>Tulemused</h2>
      <div className='tulemusteLoetelu col'>
        <ul>
          {otsitulemus.map((film) => (
            <li key={film.id} onClick={() => uuendaValitudFilmi(film)} >{film.title}</li>
          ))}
        </ul>
      </div>
      <div className='pildiBlokk col'>
        {valitudFilm && (
          <Film
            title={valitudFilm.title}
            overview={valitudFilm.overview}
            posterPath={valitudFilm.poster_path}
          />
        )}
        </div>
      </div>
      </div>
  )

}
export default App;
