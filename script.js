const btn=document.querySelector('.btn-toggle')
const links=document.querySelector('.nav-links')
const tap=document.querySelector('.btn-tap')
const rock=document.querySelector('.rocket')
const balance=document.querySelector('.mybal')
let count=1;
btn.addEventListener('click',()=>{
    if (links.classList.contains('sidebar')) {
        links.classList.remove('sidebar')
    }
    else {
        links.classList.add('sidebar')
    }
})

tap.addEventListener('click',()=>{
    if (tap.classList.contains('btn-tap')) {
        tap.classList.add('tap-effect')
        rock.classList.add('spin')
        console.log("yes")
        
        setTimeout(function() {
  tap.classList.remove('tap-effect')
  rock.classList.remove('spin')
  console.log("Timeout executed!");
}, 500);
    }
    
    let newCount=count++
    balance.innerHTML=newCount + ".00";
})
