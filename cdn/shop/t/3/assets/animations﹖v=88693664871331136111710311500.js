const SCROLL_ANIMATION_TRIGGER_CLASSNAME="scroll-trigger",SCROLL_ANIMATION_OFFSCREEN_CLASSNAME="scroll-trigger--offscreen",SCROLL_ZOOM_IN_TRIGGER_CLASSNAME="animate--zoom-in",SCROLL_ANIMATION_CANCEL_CLASSNAME="scroll-trigger--cancel";function onIntersection(elements,observer){elements.forEach((element,index)=>{if(element.isIntersecting){const elementTarget=element.target;elementTarget.classList.contains(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME)&&(elementTarget.classList.remove(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME),elementTarget.hasAttribute("data-cascade")&&elementTarget.setAttribute("style",`--animation-order: ${index};`)),observer.unobserve(elementTarget)}else element.target.classList.add(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME),element.target.classList.remove(SCROLL_ANIMATION_CANCEL_CLASSNAME)})}function initializeScrollAnimationTrigger(rootEl=document,isDesignModeEvent=!1){const animationTriggerElements=Array.from(rootEl.getElementsByClassName(SCROLL_ANIMATION_TRIGGER_CLASSNAME));if(animationTriggerElements.length===0)return;if(isDesignModeEvent){animationTriggerElements.forEach(element=>{element.classList.add("scroll-trigger--design-mode")});return}const observer=new IntersectionObserver(onIntersection,{rootMargin:"0px 0px -50px 0px"});animationTriggerElements.forEach(element=>observer.observe(element))}function initializeScrollZoomAnimationTrigger(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const animationTriggerElements=Array.from(document.getElementsByClassName(SCROLL_ZOOM_IN_TRIGGER_CLASSNAME));if(animationTriggerElements.length===0)return;const scaleAmount=.2/100;animationTriggerElements.forEach(element=>{let elementIsVisible=!1;new IntersectionObserver(elements=>{elements.forEach(entry=>{elementIsVisible=entry.isIntersecting})}).observe(element),element.style.setProperty("--zoom-in-ratio",1+scaleAmount*percentageSeen(element)),window.addEventListener("scroll",throttle(()=>{elementIsVisible&&element.style.setProperty("--zoom-in-ratio",1+scaleAmount*percentageSeen(element))}),{passive:!0})})}function percentageSeen(element){const viewportHeight=window.innerHeight,scrollY=window.scrollY,elementPositionY=element.getBoundingClientRect().top+scrollY,elementHeight=element.offsetHeight;if(elementPositionY>scrollY+viewportHeight)return 0;if(elementPositionY+elementHeight<scrollY)return 100;let percentage=(scrollY+viewportHeight-elementPositionY)/((viewportHeight+elementHeight)/100);return Math.round(percentage)}window.addEventListener("DOMContentLoaded",()=>{initializeScrollAnimationTrigger(),initializeScrollZoomAnimationTrigger()}),Shopify.designMode&&(document.addEventListener("shopify:section:load",event=>initializeScrollAnimationTrigger(event.target,!0)),document.addEventListener("shopify:section:reorder",()=>initializeScrollAnimationTrigger(document,!0)));
//# sourceMappingURL=/cdn/shop/t/3/assets/animations.js.map?v=88693664871331136111710311500
