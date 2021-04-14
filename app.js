const moment = require('moment');
const fs = require("fs")
const nomeArquivo="pets.json"

const petshop = "PETSHOP DH";

let petsJSON = fs.readFileSync(nomeArquivo) // le conteudo do arquivo
let arquivoPets = JSON.parse(petsJSON) //converte a formato JS

//console.log(arquivoPets.pets);

const atualizarJson = () =>{
  let listaJson = JSON.stringify(arquivoPets,null,2); // converte objeto a json
  fs.writeFileSync(nomeArquivo,listaJson,"utf-8"); //camino arquivo,conteudo novo, formato
 
}


const listarPets = (listaDePets) => {
  for (let contador = 0; contador < listaDePets.length; contador++) {
    //atualizarJson()
    console.log(`${listaDePets[contador].nome}, ${listaDePets[contador].idade} anos, ${listaDePets[contador].tipo}, ${listaDePets[contador].raca}, ${(listaDePets[contador].vacinado) ? 'vacinado' : 'não vacinado'}`);
    
    for (let index = 0; index < listaDePets[contador].servicos.length; index++) {
      //atualizarJson()
      console.log(`${listaDePets[contador].servicos[index].data} - ${listaDePets[contador].servicos[index].nome}`);
    }
  }
};


const vacinarPet = (pet) => {
  if (!pet.vacinado) {  
    pet.vacinado = true;
    atualizarJson()
      console.log(`${pet.nome} foi vacinado com sucesso!`);

  } else {
    //atualizarJson()
    console.log(`Ops, ${pet.nome} já está vacinado!`);
  }
} 
//vacinarPet(arquivoPets.pets[0])

const campanhaVacina = (listaPets) => {
  let totalVacinados = 0;
  for (let i = 0; i < listaPets.length; i++) {
      if (!listaPets[i].vacinado) {
          listaPets[i].vacinado = true;
          totalVacinados++;
      }
  }
  atualizarJson()
  console.log(`Parabéns, ${totalVacinados} pets foram vacinados nessa campanha!`);
};
const adicionarPet = (infoPet) => {
  arquivoPets.pets.push(infoPet)
  atualizarJson()
  
  //console.log(`${infoPet.nome} está cadastrado no nosso sistema!`)
  //pets.push(infoPet);
}

adicionarPet({
      nome: 'Rex', 
      idade: 1, 
      raca: 'Maltes', 
      tipo: 'cachorro', 
      vacinado: false,
      genero: 'M',
      servicos: []
  }); 

const eliminarPet = (pet)=>{
  arquivoPets.pets.pop()
  atualizarJson()
}

//eliminarPet()

const buscarPet = (nomePet) => {
  const petEncontrado = arquivoPets.pets.find((pet) => {
      return pet.nome == nomePet
  
  })
  console.log(petEncontrado ? petEncontrado : "nenhum encontrado")
}
//buscarPet("Batman")

const filtrarPet = (vacinadoPet) => {
  const petVacinado=arquivoPets.pets.filter((pet) => {
    if (pet.vacinado){ 
      console.log(`${pet.nome} esta vacinado`)
    } else {
      console.log(`${pet.nome} no esta vacinado!`)
    }   
  })
}

filtrarPet()

console.log("\nQUANTIDADE DE PETS")

const contarPet = (contarPet) => {
  let contador=0;
  for (let obj of arquivoPets.pets){
    contador++
  }
  console.log(contador)
}
contarPet()


const darBanhoPet = (pet) => {
      pet.servicos.push({
      nome: 'banho',
      data: moment().format('DD-MM-YYYY')
  });
  atualizarJson()
  console.log(`${pet.nome} está cherose!`);
}

const atenderCliente =(pet,servicos) => {
 // console.log(`Ola,${pet.nome}!`)
  servicos(pet);
  // console.log(`Ate mais!`);
}

//atenderCliente(arquivoPets.pets[0], darBanhoPet)

const tosarPet = (pet) => {
      pet.servicos.push({
      nome: 'tosar',
      data: moment().format('DD-MM-YYYY')
  });
  atualizarJson()
  console.log(`${pet.nome} está com cabelino!`);
}

const apurarUnhas = (pet) => {
  arquivoPets.pets.servicos.push({
      nome:"apurar unhas",
      data:moment().format('DD-MM-YYYY')
  });
  atualizarJson()
  console.log(`${pet.nome} està com unhas novas`)
}


//listarPets(arquivoPets.pets)
 
// apurarUnhas(pets[2])
// tosarPet(pets[3])
// darBanhoPet(pets[4]);
// darBanhoPet(pets[4]);
// darBanhoPet(pets[3]);
// listarPets(pets);
// vacinarPet(pets[0]);
// // vacinarPet(pets[1]);
// // vacinarPet(pets[3]);
// campanhaVacina(pets);
