const scrollers = document.querySelectorAll('.scroller');

// If a user hasn't opted in for recuded motion, then we add the animation
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach((scroller) => {

         // add data-animated="true" to every `.scroller` on the page
  
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollInner = scroller.querySelector('.scroller_inner');
        const scrollerContent = Array.from(scrollInner.children);
    
        // For each item in the array, clone it
       // add aria-hidden to it
      // add it into the `.scroller-inner`
   
        scrollerContent.forEach((item) => {
            const duplicateItem = item.cloneNode(true);
            duplicateItem.setAttribute('aria-hidden', true);
            scrollInner.appendChild(duplicateItem);
        })
    })
}