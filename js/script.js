const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const switchLight = document.querySelector(".switch-light");
menuIcon.parentElement.addEventListener("click", () => {
  menuIcon.classList.toggle("rotate");
  menu.classList.toggle("show");
});
switchLight.addEventListener("click", () => {
  document.body.classList.toggle("light");
  switchLight.querySelector(".switch").classList.toggle("light");
});
///////////////////////////////////////////////////////////////////////////
const Letters = "#%&^+=-";
const msg = "Mohamed Saeed";

let msgElem=document.getElementById("messenger");
let count;
const handleText=()=>{
  
    count=0;
    const interval=setInterval(()=>{
    msgElem.textContent = msgElem.textContent
      .split("")
      .map((letter,index) => {
        if (index <= count) {
          return msg[index];
        }
        return Letters[Math.floor(Math.random() * Letters.length)]
      })
      .join("");
      count+=1/3;
      if(count>msg.length)
      clearInterval(interval);
    },70)
  
  };
  handleText();
  setInterval(handleText,4000);
  ////////////////////////////////////////////////////////////////////////////
  const projects=document.querySelectorAll(".proj");
  console.log(projects);
  const projectsCon=document.querySelector('.projects .proj-container');
  console.log(projectsCon);

  const observer=new IntersectionObserver(entities=>{

    entities.forEach((entity)=>{
      console.log(entity);
      if (entity.isIntersecting) {
        entity.target.classList.add('scroll');
      }
      else
      entity.target.classList.remove('scroll');
    })
  })

  projects.forEach(el=>observer.observe(el))