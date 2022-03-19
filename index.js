// ---------- Consulta o Peticion ---------- //

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    
    
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/who_is.gif");
        }
        else {
            return res.json();
        }
        
    }).then((data) => {
        if (data) {
            console.log (data);

            // Imagen
            let pokeImg = data.sprites.front_default;
            pokeImage (pokeImg);
            console.log(pokeImg);

            // Id
            let pokeId = data.id;
            console.log (pokeId);
            pkid = document.getElementById("pokeId");
            pkid.textContent = data.id;
            
            // Nombre
            /*let pokeN = data.species.name;
            console.log (pokeN);
            pkn = document.getElementById("pokeN");
            pkn.textContent = data.species.name;
            */

            // Tipo
            let pokeType = data.types;
            console.log (pokeType[0].type.name/* + ". " + pokeType[1].type.name*/);
            pkt = document.getElementById("pokeType");
            pkt.textContent = data.types[0].type.name;

            // Movimientos
            let pokeMov = data.moves;
            console.log (pokeMov[0].move.name + ", " + pokeMov[1].move.name + ", " + pokeMov[2].move.name + ", " + pokeMov[3].move.name + ", " + pokeMov[4].move.name + ", " + pokeMov[5].move.name + " entre otros...");
            pkm = document.getElementById("pokeMov");
            pkm.textContent = data.moves[0].move.name + ", " + data.moves[1].move.name + ", " + data.moves[2].move.name + ", " + data.moves[3].move.name + ", " + data.moves[4].move.name + ", " + data.moves[5].move.name + "...";
            
            // Estadisticas
            let pokeStats = data.stats;
            pks = document.getElementById("pokeStats");
            console.log (pokeStats[0].stat.name + ": " + pokeStats[0].base_stat);
            //pks.textContent = data.stats[0].stat.name + ": " + data.stats[0].base_stat + data.stats[1].stat.name + ": " + data.stats[1].base_stat;
            console.log (pokeStats[1].stat.name + ": " + pokeStats[1].base_stat);
            //pks.textContent = data.stats[1].stat.name + ": " + data.stats[1].base_stat;
            console.log (pokeStats[2].stat.name + ": " + pokeStats[2].base_stat);
            //pks.textContent = data.stats[2].stat.name + ": " + data.stats[2].base_stat;
            console.log (pokeStats[3].stat.name + ": " + pokeStats[3].base_stat);
            //pks.textContent = data.stats[3].stat.name + ": " + data.stats[3].base_stat;
            console.log (pokeStats[4].stat.name + ": " + pokeStats[4].base_stat);
            //pks.textContent = data.stats[4].stat.name + ": " + data.stats[4].base_stat;
            console.log (pokeStats[5].stat.name + ": " + pokeStats[5].base_stat);
            //pks.textContent = data.stats[5].stat.name + ": " + data.stats[5].base_stat;
            pks.textContent = data.stats[0].stat.name + ": " + data.stats[0].base_stat + "\n" + data.stats[1].stat.name + ": " + data.stats[1].base_stat + "\n" + data.stats[2].stat.name + ": " + data.stats[2].base_stat + "\n" + data.stats[3].stat.name + ": " + data.stats[3].base_stat + "\n" + data.stats[4].stat.name + ": " + data.stats[4].base_stat + "\n" + data.stats[5].stat.name + ": " + data.stats[5].base_stat;
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById ("pokeImg");
    pokePhoto.src = url;
}