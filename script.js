
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
     const call=document.getElementById('call-button1')
    call.addEventListener('click',function(){
        const service1=document.getElementById('ServiceName1')
        const serviceNumber1=document.getElementById('surviceNumber1').innerText
        const serviceValue1=service1.innerText
        console.log(serviceValue1,serviceNumber1);
        
        if(Count>=0){
            alert(`serviceName: ${serviceValue1}\n number :${serviceNumber1}`)
        }
    })

    const call1=document.getElementById('call-button2')
    call1.addEventListener('click',function(){
        const service2=document.getElementById('ServiceName2')
        const serviceNumber2=document.getElementById('surviceNumber2').innerText
        const serviceValue2=service2.innerText
        console.log(serviceValue2,serviceNumber2);
        
        if(Count>=0){
            alert(`serviceName: ${serviceValue2}\n number :${serviceNumber2}`)
        }
    })

    const call2=document.getElementById('call-button3')
    call2.addEventListener('click',function(){
        const service3=document.getElementById('ServiceName3')
        const serviceNumber3=document.getElementById('surviceNumber3').innerText
        const serviceValue3=service3.innerText
        console.log(serviceValue3,serviceNumber3);
        
        if(Count>=0){
            alert(`serviceName: ${serviceValue3}\n number :${serviceNumber3}`)
        }
    })

    const call4=document.getElementById('call-button4')
    call4.addEventListener('click',function(){
        const service4=document.getElementById('ServiceName4')
        const serviceNumber4=document.getElementById('surviceNumber4').innerText
        const serviceValue4=service4.innerText
        console.log(serviceValue4,serviceNumber4);
        
        if(Count>=0){
            alert(`serviceName: ${serviceValue4}\n number :${serviceNumber4}`)
        }
    })

    const call5=document.getElementById('call-button5')
    call5.addEventListener('click',function(){
        const service5=document.getElementById('ServiceName5')
        const serviceNumber5=document.getElementById('surviceNumber5').innerText
        const serviceValue5=service5.innerText
        console.log(serviceValue5,serviceNumber5);
        
        if(Count>=0){
            alert(`serviceName: ${serviceValue5}\n number :${serviceNumber5}`)
        }
    })


    const call6=document.getElementById('call-button6')
    call6.addEventListener('click',function(){
        const service6=document.getElementById('ServiceName6')
        const serviceNumber6=document.getElementById('surviceNumber6').innerText
        const serviceValue6=service6.innerText
        console.log(serviceValue6,serviceNumber6);
        
        if(Count>=0){
            alert(`serviceName: ${serviceValue6}\n number :${serviceNumber6}`)
        }
    })

    const call7=document.getElementById('call-button7')
    call7.addEventListener('click',function(){
        const service7=document.getElementById('ServiceName7')
        const serviceNumber7=document.getElementById('surviceNumber7').innerText
        const serviceValue7=service7.innerText
        console.log(serviceValue7,serviceNumber7);
        
        if(Count>=0){
            alert(`serviceName: ${serviceValue7}\n number :${serviceNumber7}`)
        }
    })

    const call8=document.getElementById('call-button8')
    call8.addEventListener('click',function(){
        const service8=document.getElementById('ServiceName8')
        const serviceNumber8=document.getElementById('surviceNumber8').innerText
        const serviceValue8=service8.innerText
        console.log(serviceValue8,serviceNumber8);
        
        if(Count>=0){
            alert(`serviceName: ${serviceValue8}\n number :${serviceNumber8}`)
        }
    })

    const call9=document.getElementById('call-button9')
    call9.addEventListener('click',function(){
        const service9=document.getElementById('ServiceName9')
        const serviceNumber9=document.getElementById('surviceNumber9').innerText
        const serviceValue9=service9.innerText
        console.log(serviceValue9,serviceNumber9);
        
        if(Count>=0){
            alert(`serviceName: ${serviceValue9}\n number :${serviceNumber9}`)
        }
    })


    const historySection=document.getElementById('historySection')
    .addEventListener('click',function(){
        console.log('hi')        
    })


    // for copy button
    let copyNumber=0
    const copyButtons=document.getElementsByClassName('copyButton')
    for(const copy of copyButtons){
        copy.addEventListener('click',function(){
            copyNumber++;
            const copyNumberValue=document.getElementById('copyCount')
            copyNumberValue.innerText=copyNumber

        })
    }

    const copy1=document.getElementById('copy1')
    
        copy1.addEventListener('click',function(){
            let textarea=document.createElement('textarea')
            textarea.value=document.getElementById('surviceNumber1').innerText
            document.body.appendChild(textarea)

            textarea.select()

            document.execCommand('copy')

            document.body.removeChild(textarea)
            alert('Text copied')
        })

        const copy2=document.getElementById('copy2')
    
        copy2.addEventListener('click',function(){
            let textarea=document.createElement('textarea')
            textarea.value=document.getElementById('surviceNumber2').innerText
            document.body.appendChild(textarea)

            textarea.select()

            document.execCommand('copy')

            document.body.removeChild(textarea)
            alert('Text copied')
        })

        const copy3=document.getElementById('copy3')
    
        copy3.addEventListener('click',function(){
            let textarea=document.createElement('textarea')
            textarea.value=document.getElementById('surviceNumber3').innerText
            document.body.appendChild(textarea)

            textarea.select()

            document.execCommand('copy')

            document.body.removeChild(textarea)
            alert('Text copied')
        })

        const copy4=document.getElementById('copy4')
    
        copy4.addEventListener('click',function(){
            let textarea=document.createElement('textarea')
            textarea.value=document.getElementById('surviceNumber4').innerText
            document.body.appendChild(textarea)

            textarea.select()

            document.execCommand('copy')

            document.body.removeChild(textarea)
            alert('Text copied')
        })

        const copy5=document.getElementById('copy5')
    
        copy5.addEventListener('click',function(){
            let textarea=document.createElement('textarea')
            textarea.value=document.getElementById('surviceNumber5').innerText
            document.body.appendChild(textarea)

            textarea.select()

            document.execCommand('copy')

            document.body.removeChild(textarea)
            alert('Text copied')
        })

        const copy6=document.getElementById('copy6')
    
        copy6.addEventListener('click',function(){
            let textarea=document.createElement('textarea')
            textarea.value=document.getElementById('surviceNumber6').innerText
            document.body.appendChild(textarea)

            textarea.select()

            document.execCommand('copy')

            document.body.removeChild(textarea)
            alert('Text copied')
        })

        const copy7=document.getElementById('copy7')
    
        copy7.addEventListener('click',function(){
            let textarea=document.createElement('textarea')
            textarea.value=document.getElementById('surviceNumber7').innerText
            document.body.appendChild(textarea)

            textarea.select()

            document.execCommand('copy')

            document.body.removeChild(textarea)
            alert('Text copied')
        })

        const copy8=document.getElementById('copy8')
    
        copy8.addEventListener('click',function(){
            let textarea=document.createElement('textarea')
            textarea.value=document.getElementById('surviceNumber8').innerText
            document.body.appendChild(textarea)

            textarea.select()

            document.execCommand('copy')

            document.body.removeChild(textarea)
            alert('Text copied')
        })

        const copy9=document.getElementById('copy9')
    
        copy9.addEventListener('click',function(){
            let textarea=document.createElement('textarea')
            textarea.value=document.getElementById('surviceNumber9').innerText
            document.body.appendChild(textarea)

            textarea.select()

            document.execCommand('copy')

            document.body.removeChild(textarea)
            alert('Text copied')
        })


        // for call button
        const callButton=document.getElementById('call-button1')
        .addEventListener('click',function(){
            const historySectionName=document.getElementById('new')
            const now=new Date()
            const date=now.toLocaleTimeString()
            const serviceName1=document.getElementById('ServiceName1').innerText
            const serviceNumber1=document.getElementById('surviceNumber2').innerText

            
            const div=document.createElement('div')
            div.innerHTML=`
             <div class="flex justify-between items-center p-3 rounded-2xl bg-[#fafafa] mt-2 font-bold">
                    <div>
                      <p>${serviceName1}</p>
                      <h1>${serviceNumber1}</h1>
                    </div>
                      <h1>${date}</h1>
           </div>
            
            
            
            `
            historySectionName.appendChild(div)
        })
        
        const callButton1=document.getElementById('call-button2')
        .addEventListener('click',function(){
            const historySectionName=document.getElementById('new')
            const now=new Date()
            const date=now.toLocaleTimeString()
            const serviceName2=document.getElementById('ServiceName2').innerText
            const serviceNumber2=document.getElementById('surviceNumber2').innerText

            
            const div=document.createElement('div')
            div.innerHTML=`
             <div class="flex justify-between items-center p-3 rounded-2xl bg-[#fafafa] mt-2 font-bold">
                    <div>
                      <p>${serviceName2}</p>
                      <h1>${serviceNumber2}</h1>
                    </div>
                      <h1>${date}</h1>
           </div>
            
            
            
            `
            historySectionName.appendChild(div)
        })

        const callButton2=document.getElementById('call-button3')
        .addEventListener('click',function(){
            const historySectionName=document.getElementById('new')
            const now=new Date()
            const date=now.toLocaleTimeString()
            const serviceName3=document.getElementById('ServiceName3').innerText
            const serviceNumber3=document.getElementById('surviceNumber3').innerText

            
            const div=document.createElement('div')
            div.innerHTML=`
             <div class="flex justify-between items-center p-3 rounded-2xl bg-[#fafafa] mt-2 font-bold">
                    <div>
                      <p>${serviceName3}</p>
                      <h1>${serviceNumber3}</h1>
                    </div>
                      <h1>${date}</h1>
           </div>
            
            
            
            `
            historySectionName.appendChild(div)
        })

        const callButton3=document.getElementById('call-button4')
        .addEventListener('click',function(){
            const historySectionName=document.getElementById('new')
            const now=new Date()
            const date=now.toLocaleTimeString()
            const serviceName4=document.getElementById('ServiceName4').innerText
            const serviceNumber4=document.getElementById('surviceNumber4').innerText

            
            const div=document.createElement('div')
            div.innerHTML=`
             <div class="flex justify-between items-center p-3 rounded-2xl bg-[#fafafa] mt-2 font-bold">
                    <div>
                      <p>${serviceName4}</p>
                      <h1>${serviceNumber4}</h1>
                    </div>
                      <h1>${date}</h1>
           </div>
            
            
            
            `
            historySectionName.appendChild(div)
        })

        const callButton4=document.getElementById('call-button5')
        .addEventListener('click',function(){
            const historySectionName=document.getElementById('new')
            const now=new Date()
            const date=now.toLocaleTimeString()
            const serviceName5=document.getElementById('ServiceName5').innerText
            const serviceNumber5=document.getElementById('surviceNumber5').innerText

            
            const div=document.createElement('div')
            div.innerHTML=`
             <div class="flex justify-between items-center p-3 rounded-2xl bg-[#fafafa] mt-2 font-bold">
                    <div>
                      <p>${serviceName5}</p>
                      <h1>${serviceNumber5}</h1>
                    </div>
                      <h1>${date}</h1>
           </div>
            
            
            
            `
            historySectionName.appendChild(div)
        })

        const callButton5=document.getElementById('call-button6')
        .addEventListener('click',function(){
            const historySectionName=document.getElementById('new')
            const now=new Date()
            const date=now.toLocaleTimeString()
            const serviceName6=document.getElementById('ServiceName6').innerText
            const serviceNumber6=document.getElementById('surviceNumber6').innerText

            
            const div=document.createElement('div')
            div.innerHTML=`
             <div class="flex justify-between items-center p-3 rounded-2xl bg-[#fafafa] mt-2 font-bold">
                    <div>
                      <p>${serviceName6}</p>
                      <h1>${serviceNumber6}</h1>
                    </div>
                      <h1>${date}</h1>
           </div>
            
            
            
            `
            historySectionName.appendChild(div)
        })

        const callButton6=document.getElementById('call-button7')
        .addEventListener('click',function(){
            const historySectionName=document.getElementById('new')
            const now=new Date()
            const date=now.toLocaleTimeString()
            const serviceName7=document.getElementById('ServiceName7').innerText
            const serviceNumber7=document.getElementById('surviceNumber7').innerText

            
            const div=document.createElement('div')
            div.innerHTML=`
             <div class="flex justify-between items-center p-3 rounded-2xl bg-[#fafafa] mt-2 font-bold">
                    <div>
                      <p>${serviceName7}</p>
                      <h1>${serviceNumber7}</h1>
                    </div>
                      <h1>${date}</h1>
           </div>
            
            
            
            `
            historySectionName.appendChild(div)
        })

        const callButton7=document.getElementById('call-button8')
        .addEventListener('click',function(){
            const historySectionName=document.getElementById('new')
            const now=new Date()
            const date=now.toLocaleTimeString()
            const serviceName8=document.getElementById('ServiceName8').innerText
            const serviceNumber8=document.getElementById('surviceNumber8').innerText

            
            const div=document.createElement('div')
            div.innerHTML=`
             <div class="flex justify-between items-center p-3 rounded-2xl bg-[#fafafa] mt-2 font-bold">
                    <div>
                      <p>${serviceName8}</p>
                      <h1>${serviceNumber8}</h1>
                    </div>
                      <h1>${date}</h1>
           </div>
            
            
            
            `
            historySectionName.appendChild(div)
        })

        const callButton8=document.getElementById('call-button9')
        .addEventListener('click',function(){
            const historySectionName=document.getElementById('new')
            const now=new Date()
            const date=now.toLocaleTimeString()
            const serviceName9=document.getElementById('ServiceName9').innerText
            const serviceNumber9=document.getElementById('surviceNumber9').innerText

            
            const div=document.createElement('div')
            div.innerHTML=`
             <div class="flex justify-between items-center p-3 rounded-2xl bg-[#fafafa] mt-2 font-bold">
                    <div>
                      <p>${serviceName9}</p>
                      <h1>${serviceNumber9}</h1>
                    </div>
                      <h1>${date}</h1>
           </div>
            
            
            
            `
            historySectionName.appendChild(div)
        })

        // for clear button

        const clearButton=document.getElementById('clearButton')
       const callHistory=document.getElementById('new')
      

       clearButton.addEventListener('click',function(){
        callHistory.innerHTML=''
       

       })


        
    















