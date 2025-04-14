function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('ano')

   var res = document.getElementById('res')

   if (fano.value.length == 0 || Number(fano.value) > ano){
    alert('Verifique os dados e tente novamente!')
   }else {
        var fsex= document.getElementsByName('radisexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'homem-criaça.png')
                document.body.style.background = '#A785A4'
            }else if( /* idade >= 10  &&*/ idade < 21){
                //jovem
                img.setAttribute('src', 'jovem.png')
                document.body.style.background = '#A785A4'
            }else if( idade < 50){
                // adulto
                img.setAttribute('src', 'jovem.png')
                document.body.style.background = '#A785A4'
            }else{
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
                document.body.style.background = '#A785A4'
            }
            
        }else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'mulher-criaça.png')
                document.body.style.background = '#A35753'

            }else if( /* idade >= 10  &&*/ idade < 21){
                //jovem
                img.setAttribute('src', 'jovemM.png')
                 document.body.style.background = '#A35753'
                


            }else if( idade < 50){
                // adulto
                img.setAttribute('src', 'jovemM.png')
                document.body.style.background = '#A35753'
                

            }else{
                //idoso
                img.setAttribute('src', 'mulher-idosa.png')
                document.body.style.background = '#A35753'
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` detectamos, ${genero} com ${idade} anos.`
        res.appendChild(img)
   }
}