
const serviceName=document.getElementsByClassName('ServiceName')
for(const name of serviceName){
    const nameValue=name.innerText
    console.log(name,nameValue);
    
}









// for heartIcon
const heartIcons=document.getElementsByClassName('heartIcon')
const heartCount=document.getElementById('heartCount')
let count=0;
for(const heart of heartIcons){
    heart.addEventListener('click', function(){
        count++;
        heartCount.innerText=count;   
    })
}

// call button 
const callButtons=document.getElementsByClassName('call-button')
const coinNumber=document.getElementById('coin')

let Count=100

for(const call of callButtons){
    call.addEventListener('click', function(){
    Count-=20;
    coinNumber.innerText=Count;
    
    if(Count<0){
        alert('Not enough coins to make this call')
        coinNumber.innerText=0;
    }
})
}

// 
for(const call of callButtons){
    call.addEventListener('click',function(){
        if(Count>0){
            alert('stop')
        }
    })
}


// for histore section










