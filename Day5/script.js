const panels=document.querySelectorAll('.panel')


const toggleOpen = (e) => {
    const target=e.target;
    console.log(target);
    if(target.nodeName==='P'){
        const ptarget=target.parentNode
        ptarget.classList.toggle('open');
        setTimeout(() => {
            ptarget.classList.toggle('open-active'); 
        },500)   
        
    }  
    target.classList.toggle('open');  
    setTimeout(() => {
        target.classList.toggle('open-active'); 
    },500) 
}
panels.forEach(panel => {
    panel.addEventListener('click',toggleOpen)    
});

