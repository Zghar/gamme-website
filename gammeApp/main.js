let listfilter=document.querySelectorAll('.filter li');
let gaming=Array.from(document.querySelectorAll('.types_of_content div'));


// console.log(gaming)
listfilter.forEach((list) => { 
list.addEventListener('click',removeclass)
list.addEventListener('click',showitems);

 })



 function removeclass(){
    listfilter.forEach((list) => { 
        list.classList.remove('active');
        this.classList.add('active');
     })
 }

 function showitems(){
 
    gaming.forEach((item) => { 
        item.style.display="none";
     })

    document.querySelectorAll(this.dataset.type).forEach((divs)=>{
      divs.style.display="block"
    })

   //  console.log(this.dataset.type)
    
     
 }
