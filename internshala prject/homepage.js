let pop = document.querySelector('.popup');
let popS = false;
function popup(){
    if(pop.classList.contains('visibility')){
        pop.classList.remove('visibility');
    }else{
        pop.classList.add('visibility');
    }
}