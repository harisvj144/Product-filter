// get elements
const btnEl=document.querySelectorAll('.btn');
const boxEl = document.querySelectorAll(".box");
const searchEl=document.getElementById('search');


// search product
searchEl.addEventListener('keyup',(e)=>{
  const searchText=(e.target.value.toLowerCase().trim());

boxEl.forEach((box)=>{
  const data=box.dataset.item;
  if(data.includes(searchText)){
    box.style.display='block';
  }else{
    box.style.display = "none";
  }
});
  btnEl[0].classList.add("btn-clicked");
});

// select all btn
btnEl.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    e.preventDefault();
    setActiveBtn(e);
    const btnfilter=e.target.dataset.filter;

    boxEl.forEach((box)=>{
      if(btnfilter=='all'){
        box.style.display='block';

      }else{
        const boxFilter=box.dataset.item;
        if(btnfilter==boxFilter){
          box.style.display='block';
        }else{
          box.style.display='none';
        }

      }
    })
  });
});

// function active btn
function setActiveBtn(e){
  btnEl.forEach((button) => {
    button.classList.remove('btn-clicked');
  });
e.target.classList.add('btn-clicked')

}