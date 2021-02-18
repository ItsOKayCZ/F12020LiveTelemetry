var telemetry = []

//repeat requesting data from json
function init(){
    setInterval(() => {        
        fetch('/telemetry.json')
            .then(response => response.json())
            .then(data => {
                telemetry = data;
                rewrite();
            });
    }, 100);
}

//set grapgic and text to match json file
function rewrite(){
    //tyres
    let frontleftdamage = document.getElementById('front-left-damage');
    let frontrightdamage = document.getElementById('front-right-damage');
    let rearleftdamage = document.getElementById('rear-left-damage');
    let rearrightdamage = document.getElementById('rear-right-damage');

    changestyle("Tyre_FL_Damage", frontleftdamage)
    changestyle("Tyre_FR_Damage", frontrightdamage)
    changestyle("Tyre_RL_Damage", rearleftdamage)
    changestyle("Tyre_RR_Damage", rearrightdamage)
    
    //front wing
    let frontLeftWingDamage = document.getElementById('front-left-wing-damage');
    let frontrightWingdamage = document.getElementById('front-right-wing-damage');
    
    changestyle("Front_Left_Wing_Damage", frontLeftWingDamage)
    changestyle("Front_Right_Wing_Damage", frontrightWingdamage)

    //rear wing
    let rearWingdamage = document.getElementById('rear-wing-damage');
    changestyle("Rear_Wing_Damage", rearWingdamage)
    
    //engine
    let engineDamage = document.getElementById('engine-damage');
    let gearBoxDamage = document.getElementById('gearbox-damage');
    changestyle("Engine_Damage", engineDamage)
    changestyle("Gearbox_Damage", gearBoxDamage)
}


function changestyle(jsonargument, element){
    let damage = telemetry[jsonargument]
    element.innerHTML = damage;
    element.style.backgroundColor = `rgb(${damage*2.25},${225 - damage*2.25},0)`;

}