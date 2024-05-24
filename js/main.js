const shortInfo = document.querySelector('.shortInfo')
const fullInfo = document.querySelector('.fullInfo')
const moreBTN= document.querySelectorAll('[aria-label="more"]')
const closeBtn= document.querySelectorAll('[aria-label="close"]')
const resizeBtn = document.querySelector('[role="resizeBTN"]')
const changeSizeButtons = document.querySelectorAll('[role="changeSizeButton"]')
const changeSizeLI = document.querySelector('#changeSize')

const changeSizeButton1 = document.querySelector('#changeSizeButton1')
const changeSizeButton2 = document.querySelector('#changeSizeButton2')
const changeSizeButton3 = document.querySelector('#changeSizeButton3')
const allH3 = document.querySelectorAll('h3')
const allP = document.querySelectorAll('p')
const allArticle = document.querySelectorAll('article')


// funkcje zmienajace wielkosc tekstu elemtow h3
changeSizeButton3.addEventListener('click',()=>{
    allArticle.forEach(e=>{
        if(!e.classList.contains('min-h-[520px]')){
            e.classList.toggle('h-[520px]')
            e.classList.toggle('min-h-[520px]')
            }
            e.classList.remove('2xl:w-[20%]')
            e.classList.add('2xl:w-[25%]')
    })
    allH3.forEach(e =>{
        e.classList.remove("text-2xl")
        e.classList.remove("text-4xl")
        e.classList.add("text-6xl")
    })

    allP.forEach(e =>{
        console.log('zmieniam');
      
            e.classList.remove("text-2xl")
            e.classList.remove("text-lg")
        
        e.classList.add("text-4xl")
    })
})
changeSizeButton2.addEventListener('click',()=>{
    allArticle.forEach(e=>{
        if(!e.classList.contains('min-h-[520px]')){
            e.classList.toggle('h-[520px]')
            e.classList.toggle('min-h-[520px]')
            }
    })
    allH3.forEach(e =>{
        e.classList.remove("text-2xl")
        e.classList.remove("text-6xl")
        e.classList.add("text-4xl")
    })
    allP.forEach(e =>{
         e.classList.remove("text-lg")
         e.classList.add("text-2xl")
    }
)
})


changeSizeButton1.addEventListener('click',()=>{
    allH3.forEach(e =>{
        e.classList.remove("text-6xl")
        e.classList.remove("text-4xl")
        e.classList.add("text-2xl")
    })
    allP.forEach(e =>{
        e.classList.remove("text-2xl")
        e.classList.remove("text-4xl")
    })
})


// funkcje otwierajace i zamykajace panel do zwikaszanie wielkosci tekstu
resizeBtn.addEventListener('click', ()=>{
    resizeBtn.classList.toggle('hidden')
    changeSizeLI.classList.toggle('hidden')    
})
   
changeSizeButtons.forEach(e=> {
    e.addEventListener('click', ()=>{
        resizeBtn.classList.toggle('hidden')
        changeSizeLI.classList.toggle('hidden')
    })
})
//
// funkcje to otwirane wiecej informacji / mniej informacji
moreBTN.forEach(function(element) {
    element.addEventListener('click', function() {
        const post = this.closest('article')
        if(!post.classList.contains('min-h-[520px]')){
            post.classList.toggle('h-[520px]')
            post.classList.toggle('min-h-[520px]')
            
        }
            
        
        
        // post.classList.toggle('h-[520px]')
        // post.classList.toggle('min-h-[520px]')
        this.closest('.shortInfo').classList.toggle('hidden')
       const fullInfo= post.querySelector('[aria-label="fullInfo"]')
       fullInfo.classList.toggle('hidden')
        
    });
});

closeBtn.forEach(function(element) {
    element.addEventListener('click', function() {
        const post = this.closest('article')
        if(!post.classList.contains('min-h-[520px]')){
            post.classList.toggle('h-[520px]')
            post.classList.toggle('min-h-[520px]')
            
        }
        // post.classList.toggle('h-[520px]')
        // post.classList.toggle('min-h-[520px]')
        this.closest('.fullInfo').classList.toggle('hidden')
       const shortInfo= post.querySelector('[aria-label="shortInfo"]')
       shortInfo.classList.toggle('hidden')
        
    });
});
//

