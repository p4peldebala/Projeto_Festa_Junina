const botaoMais = document.getElementById('plus')
const botaoMenos = document.getElementById('minus')
let counts = document.querySelectorAll('#qtd')

counts.forEach(count =>{
    count.dataset.content = '0' + 1
})


let contador = parseInt(counts[0].dataset.content)



function addPortion(e){
    ++contador
    counts.forEach(count =>{
        e.preventDefault();
        console.log(contador);
           
        if(e.target = botaoMais){
            if(contador <= 9){
                count.dataset.content = '0' + (contador)
            } else{
                count.dataset.content =  (contador)
            }
        }
        
    })
    
}

function removePortion(e){
    --contador;
    counts.forEach(count =>{
        if(e.target = botaoMenos){
            if(contador >= 10){
                count.dataset.content = (contador);
            } else if(contador < 1){
                contador = 1;
            }else{
                count.dataset.content = '0' + (contador);
            }
        }
    })
    
}


botaoMais.onclick = addPortion;
botaoMenos.onclick = removePortion;


