const problemas = ()=>{
  return {
    general_title:"",
    seguranca:{
            title: "Segurança/Violência",
            votes: 0
        },
    educacao:{
            title: "Educação",
            votes: 0
        },
    saude: {
            title: "Saúde",
            votes: 0
        },
    saneamento: {
            title: "Saneamento básico",
            votes: 0
        },
    alimentacao:{
            title: "Alimentação/fome/pobreza",
            votes: 0
        },
    transporte:{
      
            title: "Transporte público",
            votes: 0
        }

    }
  }

fontes = [0,0,0,0,0,0,0]
fontes.forEach(((elemento,index,array)=>{
 array[index] = problemas();
}))

let [televisao, am ,fm, internet, whatsapp,outros] = fontes;
televisao.general_title = "Televisão";
am.general_title = "Rádio AM";
fm.general_title = "Rádio FM";
internet.general_title = "Internet";
whatsapp.general_title = "Grupos de WhatsApp";
outros.general_title == "Outros";

function myFunction() {
  
}

var form = FormApp.openById('1La8MRbHvknioMgqrBVMykZ2xFm-NazTONNRSRTaMt8s');
const responses = form.getResponses();
let values=0;
responses.forEach(element=>{
  let problema;
  const answers = element.getItemResponses();
  answers.forEach(answer=>{
    let result = answer.getResponse();
    const item = answer.getItem();
    const item_id = item.getId();
    if(item_id == 1891834288){
     if(result == "Segurança/Violência"){
      problema = "seguranca";
     }else if(result == "Educação"){
       problema = "educacao";
     }else if(result == "Saúde"){
       problema = "saude";
     }else if(result == "Saneamento básico"){
       problema = "saneamento"
     }else if(result == "Alimentação/fome/pobreza"){
       problema = "alimentacao"
     }else if(result == "Transporte público"){
       problema = "transporte";
     }
    }else{
      result.forEach(media=>{
         if(media == "Televisão"){
        televisao[problema].votes++;
      }else if(media == "Rádio AM"){
        am[problema].votes++;
      }else if(media == "Rádio FM"){
        fm[problema].votes++;

      }else if(media == "Internet"){
        internet[problema].votes++;
      }else if(media == "Grupos de WhatsApp"){
        whatsapp[problema].votes++;
      }else{
        outros[problema].votes++
      }

      });
     
    }
    
  })
  
 

}
);

console.log(JSON.stringify({
  televisao,
  am,
  fm,
  internet,
  whatsapp,
  outros

}))

