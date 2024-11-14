let order = document.querySelector('#button')
let burger = document.querySelector('#burger')
let fries = document.querySelector('#fries')
let drink = document.querySelector('#Drink')
let img = document.querySelector('.img')

order.addEventListener('click',()=>{
    img.innerHTML = "";
    let imgage1 = document.createElement('img');
    let imgage2 = document.createElement('img');
    let imgage3 = document.createElement('img');
    if(burger.checked && fries.checked && drink.checked){
         
         
         
            imgage1.setAttribute('src','https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            imgage1.className = "picture"
            imgage2.setAttribute('src','https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            imgage2.className = "picture"
            imgage3.setAttribute('src','https://plus.unsplash.com/premium_photo-1725075086631-b21a5642918b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            imgage3.className = "picture"
            img.appendChild(imgage1)
            img.appendChild(imgage2)
            img.appendChild(imgage3)
    }
    else if(burger.checked && fries.checked){
        imgage1.setAttribute('src','https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            imgage1.className = "picture"
            imgage2.setAttribute('src','https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            imgage2.className = "picture"
            img.appendChild(imgage1)
            img.appendChild(imgage2)
    }
    else if(fries.checked && drink.checked){
        imgage2.setAttribute('src','https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            imgage2.className = "picture"
            imgage3.setAttribute('src','https://plus.unsplash.com/premium_photo-1725075086631-b21a5642918b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            imgage3.className = "picture"
            img.appendChild(imgage2)
            img.appendChild(imgage3)
    }
    else if(burger.checked){
        imgage1.setAttribute('src','https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            imgage1.className = "picture"
            img.appendChild(imgage1)
    }
    else if(fries.checked){
        imgage2.setAttribute('src','https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            imgage2.className = "picture"
            img.appendChild(imgage2)
    }
    else if(drink.checked){
        imgage3.setAttribute('src','https://plus.unsplash.com/premium_photo-1725075086631-b21a5642918b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
            imgage3.className = "picture"
            
            img.appendChild(imgage3)
    }
    else{
        alert('Pahle kuch order to kr lo Gareeeb')
    }
    
})