const apiUrl = 'https://pokeapi.co/api/v2/{endpoint}/';
const pokemons = 'https://pokeapi.co/api/v2/pokemon/';
// A API do PokeAPI, é uma API de apenas consumação, onde nenhuma autenticação é necessária para acessá-la.
// Todos os recursos são completamente abertos e disponíveis para o público.
// Desde que se moveram para um host estático, o limite de requisições foi removido por completo.
// Porém é recomendado a limitar a frequência de requisições para reduzir os custos de hosteamento da API.

range = 18;
nomes = [];
tipos = [];

areaCard = document.getElementById('cards-pokemon');

// Listagem dos Cards
for (x = 1; x <= range; x++){
    
    areaCard.innerHTML = areaCard.innerHTML +
    '<div class="col s4">'+
    '<div class="card indigo lighten-1">'+
    '<div class="container center-align" style="border: 0px solid black;">'+
    '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+x+'.png" />'+
    '</div>'+
    '<div class="card-content white-text">'+
    '<span class="card-title" id="nome'+x+'" >NOME POKEMON '+ x +'</span>'+
    '<p id="tipo'+x+'">TIPO:</p>'+
    // '<p>INFO1</p>'+
    // '<p>INFO2</p>'+
    '</div>'+
    '<div class="card-action">'+
    // '<a href="#">LINK 1</a>'+
    // '<a href="#">LINK 2</a>'+
    '</div>'+
    '</div>'+
    '</div>';

    // Atualização da API
    const listarPoke = pokemons + x ;
    
    fetch(listarPoke)
    .then(Response => Response.json())  //Converte a resposta para javascript
    .then(data=>{
        //Receber os Nomes pela API
        nomes.push(data.name);

        //Receber os Tipos pela API
        a = []
        b = []
        c = []
        a.push(data.types)
        b.push(a[0][0])
        c.push(b[0].type)
        tipos.push(c[0].name)

        
        for (y = 0; y <= range; y++){
            // Inserção dos Nomes
            document.getElementById('nome'+(y+1)).innerHTML = nomes[y].toUpperCase();
            
            document.getElementById('tipo'+(y+1)).innerHTML = 'TIPO: ' + tipos[y].toUpperCase();
            
        }
        
    })
}
