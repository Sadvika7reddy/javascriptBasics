let inventory=require('./inventory.js');
function problem3(inventory){
    inventory.sort((a,b)=>{
       if(a.car_model===b.car_model)
       return 0;
       return a.car_model>b.car_model?1:-1;
    })
    let obj=[];
    for(var i=0;i<inventory.length;i++){
        obj[i]=inventory[i].car_model

    }
    console.log(obj);
}
problem3(inventory)

