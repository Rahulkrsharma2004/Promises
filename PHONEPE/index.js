let input = document.getElementById("inp1");
let paybtn = document.getElementById("button");
let pending=document.getElementById("pending");
let success = document.getElementById("success");

paybtn.addEventListener('click',function(){
    // e.preventDefault()
    
    if(input.value == ""){
        
        alert("Please Enter Amount")
    }
    else if(input.value<=0){
        alert("Error")
    }
    else{
    
        let randomtime = Math.floor(Math.random() * 4000) + 1000
        
        setTimeout(function(){
            new Promise(function(resolve,reject){
                if(input.value > 0 && input.value <= 5000){
                    resolve()
                }
                else if(input.value > 5000){
                    reject ()
                }
                
    
            }).then(res => {
                pending.style.display = `none`
                document.getElementById("hidden1").style.display = 'block'
                console.log(res)

            }).catch(res => {
                pending.style.display = `none`
                document.getElementById("hidden2").style.display = 'block'
                console.log(res)

            })
    
        },randomtime)
        pending.style.display = `block`
        document.getElementById("hidden1").style.display = 'none' 
        document.getElementById("hidden2").style.display = 'none'

    }
        
        // if(done == 'none' && reject == 'none'){
        //     pending.style.display = `block`
        // }
        // else if(done == 'block' || reject == 'block'){
        //     pending.style.display = `none`
        // }
})