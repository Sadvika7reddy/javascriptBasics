let inventory=require('./inventory.js');
function problem5(inventory){
    let obj=[];
    var j=0;
    for(var i=0;i<inventory.length;i++){
        if(inventory[i].car_year<2000){
            obj[j]=inventory[i].car_year;
            j++;

        }
        
    }
    return obj

}
console.log(problem5(inventory));