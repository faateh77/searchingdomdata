var company = document.getElementById("company");
var model = document.getElementById("model");
var mobile = {
    apple:{
        iPhone14:{
          camera:"12MP",
          color:"black",
          ram:"16gb",
        },
        iPhone15:{
            camera:"16MP",
            color:"red",
            ram:"16gb",
          },
          iPhone16:{
            camera:"24MP",
            color:"silver",
            ram:"24gb",
          },
    },
    samsung:{
        SamsungGalaxyA34:{
            camera:"48MP",
            color:"black",
            ram:"8gb",
        },
        SamsungGalaxyM14:{
            camera:"13MP",
            color:"black",
            ram:"4gb",
        },
        SamsungGalaxyA54:{
            camera:"50MP",
            color:"navyblue",
            ram:"8gb",
        },
    },
};

function data(){
    for(var i=0; i <=mobile.length;i++){
        if(company.value==mobile.company[i] && model.value==mobile.model[i]){
          console.log(mobile.company[i],mobile.model[i]);
        }
      
    }
   
    
}
