document.querySelector('.nav__button').addEventListener('click', showNav);


function showNav(){
    document.querySelector('.nav__links').classList.toggle('show__links');

    if(document.querySelector('.tooltiptext').innerHTML === "Expand"){

        document.querySelector('.tooltiptext').innerHTML = "Collapse";

        document.querySelector('.tooltip').style.transform = "rotate(-90deg)"; 
        
        document.querySelector('.tooltiptext').style.transform = "rotate(90deg)";
    }
    else{

        document.querySelector('.tooltiptext').innerHTML = "Expand";

        document.querySelector('.tooltip').style.transform = "rotate(90deg)";

        document.querySelector('.tooltiptext').style.transform = "rotate(270deg)";
    }
}

