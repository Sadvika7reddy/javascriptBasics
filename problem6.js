let inventory=require('./inventory.js');
function problem6(inventory){
    let obj=[];
    var j=0;
    for(var i=0;i<inventory.length;i++){
        if(inventory[i].car_make=="Audi"||inventory[i].car_make=="BMW"){
            obj[j]=inventory[i].car_make;
            j++;
        }
        
    }
    let str=JSON.stringify(obj);
    console.log(str);
}
problem6(inventory);