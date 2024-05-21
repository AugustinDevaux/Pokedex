import React, {useState} from 'react'
import Select from 'react-select'
import './App.css'
import Button from './components/Button'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [name, setName] = useState("")
  const [attack, setAttack] = useState ("")
  const [defense, setDefense] = useState ("")
  const [type, setType] = useState ("")

  const options = [
    { value: 'acier', label: 'Acier' },
    { value: 'combat', label: 'Combat' },
    { value: 'dragon', label: 'Dragon' },
    { value: 'eau', label: 'Eau' },
    { value: 'electrik', label: 'Electrik' },
    { value: 'fee', label: 'Fée' },
    { value: 'feu', label: 'Feu' },
    { value: 'glace', label: 'Glace' },
    { value: 'insecte', label: 'Insecte' },
    { value: 'normal', label: 'Normal' },
    { value: 'plante', label: 'Plante' },
    { value: 'poison', label: 'Poison' },
    { value: 'psy', label: 'Psy' },
    { value: 'roche', label: 'Roche' },
    { value: 'sol', label: 'Sol' },
    { value: 'spectre', label: 'Spectre' },
    { value: 'tenebres', label: 'Ténèbres' },
    { value: 'vol', label: 'Vol' }
  ]

  const _onSubmit = () => {
    setPokemons([
      ...pokemons,
      {
        id: Math.ceil(Math.random() * 999999999),
        name,
        attack,
        defense,
        type: type.label
      }
    ]);
    setName("");
    setAttack("");
    setDefense("");
    setType("");
  };

  const _onDelete = (id) => {
    setPokemons(pokemons.filter(pokemons => pokemons.id !== id));
  };

  // useEffect(() => console.log(pokemons), [pokemons]);
  

  return (

    <div className='form'>
      <h1>Pokédex</h1>
      <input 
        type="text"
        placeholder="Nom du pokémon"
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="number"
        placeholder="Statistique d'attaque"
        onChange={(e) => setAttack(e.target.value)}
      />
      <input 
        type="number"
        placeholder="Statistique de défense"
        onChange={(e) => setDefense(e.target.value)}
      />

      <Select 
        options={options}
        className='typeList'
        placeholder="Type du pokémon"
      />
      <Button onClick={_onSubmit}>Envoyer</Button>
      <Button></Button>

      {pokemons.map((pokemons) =>(
          <div key={pokemons.id}>
            <div>
              <h3>{pokemons.name}</h3>
              <p>Attaque : {pokemons.attack}</p>
              <p>Défense : {pokemons.defense}</p>
              <p>Type : {pokemons.type}</p>
            </div>

            <div>
              <Button onClick={() => _onDelete(pokemons.id)}>Fermer</Button>
            </div>
          </div>
        ))}

    </div>

  );
}

export default App
