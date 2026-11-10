function btn2(){
   const button=document.querySelector(".btn")
   document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
       button.textContent="مود روشن";
        
    }
 else{
     button.textContent="مود تاریک";
}
 };
