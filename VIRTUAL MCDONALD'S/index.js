
let button = document.getElementById("order-btn");

button.addEventListener("click",function(e){
    // console.log("succesfull done")
   
    let randomtime = Math.floor(Math.random() * 10000)
    
    setTimeout(function(){
        new Promise(function(resolve,reject){
            document.getElementById("hidden").style.display = 'block'

            randomid = Math.floor(Math.random()*100000)
            document.getElementById("order-number").innerHTML = randomid

            resolve("promised resolved")

        }).then(res => {
            console.log(res)
        })

    },randomtime)
    
})