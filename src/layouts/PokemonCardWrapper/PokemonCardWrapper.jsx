import PokemonCard from "../../components/PokemonCard/PokemonCard"
import "./PokemonCardWrapper.css"
function PokemonCardWrapper(props){
    return(
        <section className="pokemonCardWrapper">
            <PokemonCard 
                pokemonName="Wooper" 
                pokemonType={["Water", "Ground"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
            <PokemonCard 
                pokemonName="Ditto" 
                pokemonType={["Normal"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                pokemonHP="48"
                updateCounter={props.updateCounter}
            />
            <PokemonCard 
                pokemonName="Diglett" 
                pokemonType={["Ground"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
                pokemonHP="10"
                updateCounter={props.updateCounter}
            />
            <PokemonCard 
                pokemonName="Lickitung" 
                pokemonType={["Normal"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
                pokemonHP="90"
                updateCounter={props.updateCounter}
            />
        </section>  
    )
}

export default PokemonCardWrapper