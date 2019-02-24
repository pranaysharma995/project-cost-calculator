class total_app_cost {
    constructor() {
        this.total_app_cost = 0; //global variable for project cost
        this.add_into_total_app_cost = function (x) {
            this.total_app_cost = this.total_app_cost + x;
        };
        this.get_total_cost_for_app = function () {
            return this.total_app_cost;
        };
        this.set_total_app_cost=function(value)
        {
            this.total_app_cost=value;
        }
    }
}
//make class for platform cost
class platform_cost {
    constructor() {
        this.total_platform_cost = 0; //global variable for platform cost
        this.add_into_total_platform_cost = function (value) {
            this.total_platform_cost = this.total_platform_cost + value;
        };
        this.get_total_platform_cost = function () {
            return this.total_platform_cost;
        };
    }
}
class screen_cost {
    constructor() {
        this.total_screen_cost = 0; //global variable for screen cost
        this.add_into_total_screen_cost = function (value) {
            this.total_screen_cost = this.total_screen_cost + value;
        };
        this.get_total_screen_cost = function () {
            return this.total_screen_cost;
        };
        this.set_total_screen_cost = function (value) {
            this.total_screen_cost=value;
        };
    }
}
class design_customization_cost {
    constructor() {
        this.total_design_customization_cost = 0; //global variable for design customization cost
        this.add_into_total_design_customization_cost = function (value) {
            this.total_design_customization_cost = this.total_design_customization_cost + value;
        };
        this.get_total_design_customization_cost = function () {
            return this.total_design_customization_cost;
        };
        this.set_total_design_customization_cost= function (value){
            this.total_design_customization_cost=value;
        };
    }
}
class login_system_cost {
    constructor() {
        this.total_login_system_cost = 0; //global variable for login system cost
        this.add_into_total_login_system_cost = function (value) {
            this.total_login_system_cost = this.total_login_system_cost + value;
        };
        this.get_total_login_system_cost = function () {
            return this.total_login_system_cost;
        };
        this.set_total_login_system_cost = function (value){
            this.total_login_system_cost = value;
        }
    }
}
class data_store_cost {
    constructor() {
        this.total_data_store_cost = 0; //global variable for login system cost
        this.add_into_total_data_store_cost = function (value) {
            this.total_data_store_cost = this.total_data_store_cost + value;
        };
        this.get_total_data_store_cost = function () {
            return this.total_data_store_cost;
        };
        this.set_total_data_store_cost = function (value) {
            return this.total_data_store_cost= value;
        };
    }
}
class integrate_cost {
    constructor() {
        this.total_integrate_cost = 0; //global variable for integrate cost
        this.add_into_total_integrate_cost = function (value) {
            this.total_integrate_cost = this.total_integrate_cost + value;
        };
        this.get_total_integrate_cost = function () {
            return this.total_integrate_cost;
        };
        this.set_total_integrate_cost = function(value) {
             this.total_integrate_cost= value;
        };
    }
}
class locattion_cost {
    constructor() {
        this.total_location_cost = 0; //global variable for location cost
        this.add_into_total_location_cost = function (value) {
            this.total_location_cost = this.total_location_cost + value;
        };
        this.get_total_location_cost = function () {
            
              return this.total_location_cost;
        };
        this.set_total_location_cost = function(value) {
            this.total_location_cost= value;
        };
    }
}
class third_party_cost {
    constructor() {
        this.total_third_party_cost = 0; //global variable for location cost
        this.add_into_total_third_party_cost = function (value) {
            this.total_third_party_cost = this.total_third_party_cost + value;
        };
        this.get_total_third_party_cost = function () {
            return this.total_third_party_cost;
        };
        this.set_total_third_party_cost = function(value) {
            this.total_third_party_cost = value;
        };
    }
}
class payment_cost {
    constructor() {
        this.total_payment_cost = 0; //global variable for payment cost
        this.add_into_total_payment_cost = function (value) {
            this.total_payment_cost = this.total_payment_cost + value;
        };
        this.get_total_payment_cost = function () {
            return this.total_payment_cost;
        };
        this.set_total_payment_cost = function(value) {
            this.total_payment_cost = value;
        };
    }
}
class sync_data_cost {
    constructor() {
        this.total_sync_data_cost = 0; //global variable for sync data cost
        this.add_into_total_sync_data_cost = function (value) {
            this.total_sync_data_cost = this.total_sync_data_cost + value;
        };
        this.get_total_sync_data_cost = function () {
            return this.total_sync_data_cost;
        };
        this.set_total_sync_data_cost = function(value) {
            this.total_sync_data_cost = value;
        };
    }
}
class notifications_cost {
    constructor() {
        this.total_notifications_cost = 0; //global variable for notifiaction cost
        this.add_into_total_notifications_cost = function (value) {
            this.total_notifications_cost = this.total_notifications_cost + value;
        };
        this.get_total_notifications_cost = function () {
            return this.total_notifications_cost;
        };
        this.set_total_notifications_cost = function(value) {
            this.total_notifications_cost = value;
        };
    }
}
class security_cost {
    constructor() {
        this.total_security_cost = 0; //global variable for security cost
        this.add_into_total_security_cost = function (value) {
            this.total_security_cost = this.total_security_cost + value;
        };
        this.get_total_security_cost = function () {
            return this.total_security_cost;
        };
        this.set_total_security_cost = function(value) {
            this.total_security_cost = value;
        };
    }
}
class track_cost {
    constructor() {
        this.total_track_cost = 0; //global variable for total track cost
        this.add_into_total_track_cost = function (value) {
            this.total_track_cost = this.total_track_cost + value;
        };
        this.get_total_track_cost = function () {
            return this.total_track_cost;
        };
        this.set_total_track_cost = function(value) {
            this.total_track_cost = value;
        };
    }
}
class content_management_cost {
    constructor() {
        this.total_content_management_cost = 0; //global variable for content management cost
        this.add_into_total_content_management_cost = function (value) {
            this.total_content_management_cost = this.total_content_management_cost + value;
        };
        this.get_total_content_management_cost = function () {
            return this.total_content_management_cost;
        };
        this.set_total_content_management_cost = function(value) {
            this.total_content_management_cost = value;
        };
    }
}
class design_cost {
    constructor() {
        this.total_design_cost = 0; //global variable for design cost
        this.add_into_total_design_cost = function (value) {
            this.total_design_cost = this.total_design_cost + value;
        };
        this.get_total_design_cost = function () {
            return this.total_design_cost;
        };
        this.set_total_design_cost = function(value) {
            this.total_design_cost = value;
        };
    }
}

var my_app_cost = new total_app_cost();
var my_platform_cost = new platform_cost();
var my_screen_cost = new screen_cost();
var my_design_customization_cost = new design_customization_cost();
var my_login_system_cost = new login_system_cost();
var my_data_store_cost = new data_store_cost();
var my_integrate_cost = new integrate_cost();
var my_location_cost = new locattion_cost();
var my_third_party_cost = new third_party_cost();
var my_payment_cost = new payment_cost();
var my_sync_data_cost = new sync_data_cost();
var my_notification_cost = new notifications_cost();
var my_security_cost = new security_cost();
var my_track_cost = new track_cost();
var my_content_management_cost = new content_management_cost();
var my_design_cost = new design_cost();

$(document).ready(function()
{
    $(".project-platform-checkbox-first input[type='checkbox']").on("click",function(e)
    {
        let checkbox_status=$(this). prop("checked");//variable for checked status on checkbox
        
        
        if( checkbox_status === true)//if checkbox is checked
        {
            
            $(".table-project-selector").text($(".project-platform-name").text());
            
            
        my_platform_cost.add_into_total_platform_cost(200);//add values
        console.log(my_platform_cost.get_total_platform_cost());
        my_app_cost.add_into_total_app_cost(200);

        }
        else//if checkbox is not checked
        {
            
            
            
            
            
           my_platform_cost.add_into_total_platform_cost(-200);//substract values
        console.log(my_platform_cost.get_total_platform_cost());
        my_app_cost.add_into_total_app_cost(-200);
        }
        let total_app_cost=my_app_cost.get_total_cost_for_app();
        
        $(".total-estimate-ammount").text(total_app_cost);
    })
    
    $(".project-platform-checkbox-second input[type='checkbox']").on("click",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            //slip value
             $(".table-project-selector").text($(".project-platform-name-second").text());
            
            
            
            my_platform_cost.add_into_total_platform_cost(200);//add values
            console.log(my_platform_cost.get_total_platform_cost());
            my_app_cost.add_into_total_app_cost(200);
        }
        else//if checkbox is not checked
        {
             
            
            
            
            
             my_platform_cost.add_into_total_platform_cost(-200);//substract values
        console.log(my_platform_cost.get_total_platform_cost()); 
        my_app_cost.add_into_total_app_cost(-200);
        }
           let total_app_cost=my_app_cost.get_total_cost_for_app();
        
        $(".total-estimate-ammount").text(total_app_cost);
        
    }
    )
      $(".project-platform-checkbox-third input[type='checkbox']").on("click",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            //slip value
            
             $(".table-project-selector").text($(".project-platform-project-name-third").text());
            
            
            
            
            
            my_platform_cost.add_into_total_platform_cost(200);//add values
            console.log(my_platform_cost.get_total_platform_cost());
            my_app_cost.add_into_total_app_cost(200);
        }
        else//if checkbox is not checked
        {
          
            
            
            
             my_platform_cost.add_into_total_platform_cost(-200);//substract values
        console.log(my_platform_cost.get_total_platform_cost()); 
        my_app_cost.add_into_total_app_cost(-200);
        }
           let total_app_cost=my_app_cost.get_total_cost_for_app();
        
        $(".total-estimate-ammount").text(total_app_cost);
        
    })
    //for screen
      $(".project-screens-checkbox-first input[type='radio']").on("change",function(e)
    {
        console.log("Radio button changed");
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
            //slip
            
            $(".table-screen-selector").text($(".project-screens-page-first").text());
            
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_screen_cost.get_total_screen_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+200);
                //step 3
                my_screen_cost.set_total_screen_cost(0);
                //step 4
                my_screen_cost.set_total_screen_cost(my_screen_cost.get_total_screen_cost()+200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
                 
                 
            
        }
        else//if checkbox is not checked
        {
              $(this).removeClass("active");
             my_screen_cost.add_into_total_screen_cost(-200);//substract values
        console.log(my_screen_cost.get_total_screen_cost()); 
        my_app_cost.add_into_total_app_cost(-200);
        }
        
    }
    )
     $(".project-screens-checkbox-second input[type='radio']").on("change",function(e)
    {
        console.log("Radio button chnaged");
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
               //slip
            
            $(".table-screen-selector").text($(".project-screens-page-second").text());
            
            
        
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_screen_cost.get_total_screen_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+400);
                //step 3
                my_screen_cost.set_total_screen_cost(0);
                //step 4
                my_screen_cost.set_total_screen_cost(my_screen_cost.get_total_screen_cost()+400);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
              $(this).removeClass("active");
             my_screen_cost.add_into_total_screen_cost(-200);//substract values
        console.log(my_screen_cost.get_total_screen_cost());
        my_app_cost.add_into_total_app_cost(-200);
        }

    
        
    }
    )
     $(".project-screens-checkbox-third input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
            
               //slip
            
            $(".table-screen-selector").text($(".project-screens-page-third").text());
            
            
            
            

            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_screen_cost.get_total_screen_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+600);
                //step 3
                my_screen_cost.set_total_screen_cost(0);
                //step 4
                my_screen_cost.set_total_screen_cost(my_screen_cost.get_total_screen_cost()+600);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
              $(this).removeClass("active");
             my_screen_cost.add_into_total_screen_cost(-200);//substract values
        console.log(my_screen_cost.get_total_screen_cost()); 
        my_app_cost.add_into_total_app_cost(-200);
        }

    
        
    }
    )
     $(".project-screens-checkbox-four input[type='radio']").on("click",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
            
               //slip
            
            $(".table-screen-selector").text($(".project-screens-page-four").text());
            
            
            
            
      //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_screen_cost.get_total_screen_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+800);
                //step 3
                my_screen_cost.set_total_screen_cost(0);
                //step 4
                my_screen_cost.set_total_screen_cost(my_screen_cost.get_total_screen_cost()+800);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
            $(this).removeClass("active");
             my_screen_cost.add_into_total_screen_cost(-200);//substract values
        console.log(my_screen_cost.get_total_screen_cost()); 
        my_app_cost.add_into_total_app_cost(-200);
        }
    
        
    }
    )
    //design_customization
      $(".design-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
            
               //slip
            
            $(".table-design-customization-selector").text($(".design-first").text());
            
            
            
            
            
      //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_design_customization_cost.get_total_design_customization_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+800);
                //step 3
                my_design_customization_cost.set_total_design_customization_cost(0);
                //step 4
                my_design_customization_cost.set_total_design_customization_cost(my_design_customization_cost.get_total_design_customization_cost()+800);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
                  
        
        }
        else//if checkbox is not checked
        {
              my_design_customization_cost.add_into_total_design_customization_cost(-200);//add values
            console.log(my_design_customization_cost.get_total_design_customization_cost());
            my_app_cost.add_into_total_app_cost(-200);
        }
         
    
        
    }
    )
      $(".design-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        { 
            
                //slip
            
            $(".table-design-customization-selector").text($(".design-second").text());
            
            
            
            
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_design_customization_cost.get_total_design_customization_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+800);
                //step 3
                my_design_customization_cost.set_total_design_customization_cost(0);
                //step 4
                my_design_customization_cost.set_total_design_customization_cost(my_design_customization_cost.get_total_design_customization_cost()+800);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
              my_design_customization_cost.add_into_total_design_customization_cost(-200);//add values
            console.log(my_design_customization_cost.get_total_design_customization_cost());
            my_app_cost.add_into_total_app_cost(-200);
        }
         let total_app_cost=my_app_cost.get_total_cost_for_app();
        
        $(".total-estimate-ammount").text(total_app_cost);
    
        
    }
    )
      $(".design-checkbox-third input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
            
                //slip
            
            $(".table-design-customization-selector").text($(".design-third").text());
            
            
            
            
            
            
            
        //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_design_customization_cost.get_total_design_customization_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+800);
                //step 3
                my_design_customization_cost.set_total_design_customization_cost(0);
                //step 4
                my_design_customization_cost.set_total_design_customization_cost(my_design_customization_cost.get_total_design_customization_cost()+800);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
              my_design_customization_cost.add_into_total_design_customization_cost(-200);//add values
            console.log(my_design_customization_cost.get_total_design_customization_cost());
        }
        
    }
    )
      $(".design-checkbox-four input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
                //slip
            
            $(".table-design-customization-selector").text($(".design-four").text());
            
            
            
            
            
            
            
            
     //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_design_customization_cost.get_total_design_customization_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_design_customization_cost.set_total_design_customization_cost(0);
                //step 4
                my_design_customization_cost.set_total_design_customization_cost(my_design_customization_cost.get_total_design_customization_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());    
        }
        else//if checkbox is not checked
        {
              my_design_customization_cost.add_into_total_design_customization_cost(-200);//add values
            console.log(my_design_customization_cost.get_total_design_customization_cost());
        }
        
    }
    )
    //login system
     $(".login-system-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
            
                //slip
            
            $(".table-login-system-selector").text($(".login-system-first").text());
            
            
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_login_system_cost.get_total_login_system_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_login_system_cost.set_total_login_system_cost(0);
                //step 4
                my_login_system_cost.set_total_login_system_cost(my_login_system_cost.get_total_login_system_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
        }
        else//if checkbox is not checked
        {
              my_login_system_cost.add_into_total_login_system_cost(-200);//add values
            console.log(my_login_system_cost.get_total_login_system_cost());

        }
        
    }
    )
     $(".login-system-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
               //slip
            
            $(".table-login-system-selector").text($(".login-system-second").text());
            
            
            
            
           
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_login_system_cost.get_total_login_system_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_login_system_cost.set_total_login_system_cost(0);
                //step 4
                my_login_system_cost.set_total_login_system_cost(my_login_system_cost.get_total_login_system_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
              my_login_system_cost.add_into_total_login_system_cost(-200);//add values
            console.log(my_login_system_cost.get_total_login_system_cost());

        }
        
    }
    )
     $(".login-system-checkbox-third input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
            
               //slip
            
            $(".table-login-system-selector").text($(".login-system-third").text());
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_login_system_cost.get_total_login_system_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_login_system_cost.set_total_login_system_cost(0);
                //step 4
                my_login_system_cost.set_total_login_system_cost(my_login_system_cost.get_total_login_system_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
              my_login_system_cost.add_into_total_login_system_cost(-200);//add values
            console.log(my_login_system_cost.get_total_login_system_cost());

        }
        
    }
    )
     //data store
     $(".data-store-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
           
            
               //slip
            
            $(".table-data-selector").text($(".data-store-first").text());
            
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_data_store_cost.get_total_data_store_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_data_store_cost.set_total_data_store_cost(0);
                //step 4
                my_data_store_cost.set_total_data_store_cost(my_data_store_cost.get_total_data_store_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
            
            
            
        }
        else//if checkbox is not checked
        {
              my_data_store_cost.add_into_total_data_store_cost(-200);//subtract values
            console.log(my_data_store_cost.get_total_data_store_cost());

        }
        
    }
    )
    $(".data-store-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
         
         
             
               //slip
            
            $(".table-data-selector").text($(".data-store-second").text());
            
            
              
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_data_store_cost.get_total_data_store_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1200);
                //step 3
                my_data_store_cost.set_total_data_store_cost(0);
                //step 4
                my_data_store_cost.set_total_data_store_cost(my_data_store_cost.get_total_data_store_cost()+1200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
              my_data_store_cost.add_into_total_data_store_cost(-200);//subtract values
            console.log(my_data_store_cost.get_total_data_store_cost());

        }
        
    }
    )
    $(".data-store-checkbox-third input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
               
               //slip
            
            $(".table-data-selector").text($(".data-store-third").text());
            
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_data_store_cost.get_total_data_store_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1400);
                //step 3
                my_data_store_cost.set_total_data_store_cost(0);
                //step 4
                my_data_store_cost.set_total_data_store_cost(my_data_store_cost.get_total_data_store_cost()+1400);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
              my_data_store_cost.add_into_total_data_store_cost(-200);//subtract values
            console.log(my_data_store_cost.get_total_data_store_cost());

        }
        
    }
    )
    // integrate
    $(".integrate-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//valuefor check status
        if( checkbox_status===true)//ifcheckbox is checked
        {
           
                
               //slip
            
            $(".table-integrate-selector").text($(".integrate-first").text());
            
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_integrate_cost.get_total_integrate_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_integrate_cost.set_total_integrate_cost(0);
                //step 4
                my_integrate_cost.set_total_integrate_cost(my_integrate_cost.get_total_integrate_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
            
        }
        else
        {
             my_integrate_cost.add_into_total_integrate_cost(-200);
            console.log(my_integrate_cost.get_total_integrate_cost());
        }
    }
    
    
    )
    $(".integrate-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//valuefor check status
        if( checkbox_status===true)//ifcheckbox is checked
        {
            
                  
               //slip
            
            $(".table-integrate-selector").text($(".integrate-second").text());
            
            
            
            
            
            
           //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_integrate_cost.get_total_integrate_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1200);
                //step 3
                my_integrate_cost.set_total_integrate_cost(0);
                //step 4
                my_integrate_cost.set_total_integrate_cost(my_integrate_cost.get_total_integrate_cost()+1200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else
        {
             my_integrate_cost.add_into_total_integrate_cost(-200);
            console.log(my_integrate_cost.get_total_integrate_cost());
        }
    }
    
    
    )
    
   $(".integrate-checkbox-third input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//valuefor check status
        if( checkbox_status===true)//ifcheckbox is checked
        {
            
               //slip
            
            $(".table-integrate-selector").text($(".integrate-third").text());
            
            
            
            
            
            
           //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_integrate_cost.get_total_integrate_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1400);
                //step 3
                my_integrate_cost.set_total_integrate_cost(0);
                //step 4
                my_integrate_cost.set_total_integrate_cost(my_integrate_cost.get_total_integrate_cost()+1400);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else
        {
             my_integrate_cost.add_into_total_integrate_cost(-200);
            console.log(my_integrate_cost.get_total_integrate_cost());
        }
    }
    
    
    )
    //location
     //location
     $(".location-data-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
              //slip
            
            $(".table-location-selector").text($(".location-data-first").text());
            
            
            
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_location_cost.get_total_location_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_location_cost.set_total_location_cost(0);
                //step 4
                my_location_cost.set_total_location_cost(my_location_cost.get_total_location_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
        }
        else//if checkbox is not checked
        {
                my_location_cost.add_into_total_location_cost(-200);//subtract values
            console.log( my_location_cost.get_total_location_cost());
        }
        
    }
    )
     $(".location-data-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
               //slip
            
            $(".table-location-selector").text($(".location-data-second").text());
            
            
            
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_location_cost.get_total_location_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1200);
                //step 3
                my_location_cost.set_total_location_cost(0);
                //step 4
                my_location_cost.set_total_location_cost(my_location_cost.get_total_location_cost()+1200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
                my_location_cost.add_into_total_location_cost(-200);//subtract values
            console.log( my_location_cost.get_total_location_cost());
        }
        
    }
    )
     $(".location-data-checkbox-third input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
           
           
               //slip
            
            $(".table-location-selector").text($(".location-data-third").text());
            
           
           
           
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_location_cost.get_total_location_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1400);
                //step 3
                my_location_cost.set_total_location_cost(0);
                //step 4
                my_location_cost.set_total_location_cost(my_location_cost.get_total_location_cost()+1400);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
                my_location_cost.add_into_total_location_cost(-200);//subtract values
            console.log( my_location_cost.get_total_location_cost());
        }
        
    }
    )
     $(".location-data-checkbox-four input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
            
               //slip
            
            $(".table-location-selector").text($(".location-data-four").text());
            
           
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_location_cost.get_total_location_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1600);
                //step 3
                my_location_cost.set_total_location_cost(0);
                //step 4
                my_location_cost.set_total_location_cost(my_location_cost.get_total_location_cost()+1600);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
                my_location_cost.add_into_total_location_cost(-200);//subtract values
            console.log( my_location_cost.get_total_location_cost());
        }
        
    }
    )
    //third party
   $(".third-parties-checkbox-firs input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
               //slip
            
            $(".table-third-parties-selector").text($(".third-parties-first").text());
            
            
            
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_third_party_cost.get_total_third_party_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_third_party_cost.set_total_third_party_cost(0);
                //step 4
                my_third_party_cost.set_total_third_party_cost(my_third_party_cost.get_total_third_party_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
        }
        else//if checkbox is not checked
        {
                my_third_party_cost.add_into_total_third_party_cost(-200);//subtract values
            console.log(my_third_party_cost.get_total_third_party_cost());
        }
        
    }
    )
    
    $(".third-parties-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
                //slip
            
            $(".table-third-parties-selector").text($(".third-parties-second").text());
            
               
               
                    
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_third_party_cost.get_total_third_party_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1200);
                //step 3
                my_third_party_cost.set_total_third_party_cost(0);
                //step 4
                my_third_party_cost.set_total_third_party_cost(my_third_party_cost.get_total_third_party_cost()+1200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
                my_third_party_cost.add_into_total_third_party_cost(-200);//subtract values
            console.log(my_third_party_cost.get_total_third_party_cost());
        }
        
    }
    )
    $(".third-parties-checkbox-third input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
              //slip
            
            $(".table-third-parties-selector").text($(".third-parties-third").text());
            
               
            
            
                      
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_third_party_cost.get_total_third_party_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1400);
                //step 3
                my_third_party_cost.set_total_third_party_cost(0);
                //step 4
                my_third_party_cost.set_total_third_party_cost(my_third_party_cost.get_total_third_party_cost()+1400);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
                my_third_party_cost .add_into_total_third_party_cost(-200);//subtract values
            console.log(  my_third_party_cost .get_total_third_party_cost());
        }
        
    }
    )
     //payment
    $(".project-payment-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
              //slip
            
            $(".table-project-payment-selector").text($(".project-payment-first").text());
            
            
            
           
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_payment_cost.get_total_payment_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_payment_cost.set_total_payment_cost(0);
                //step 4
                my_payment_cost.set_total_payment_cost(my_payment_cost.get_total_payment_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
            
            
        }
        else//if checkbox is not checked
        {
                my_payment_cost  .add_into_total_payment_cost(-200);//subtract values
            console.log(  my_payment_cost .get_total_payment_cost());
        }
        
    }
    )
    $(".project-payment-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
         
              //slip
            
            $(".table-project-payment-selector").text($(".project-payment-second").text());
            
            
         
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_payment_cost.get_total_payment_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1200);
                //step 3
                my_payment_cost.set_total_payment_cost(0);
                //step 4
                my_payment_cost.set_total_payment_cost(my_payment_cost.get_total_payment_cost()+1200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
                my_payment_cost  .add_into_total_payment_cost(-200);//subtract values
            console.log(  my_payment_cost .get_total_payment_cost());
        }
        
    }
    )
 //sync data
     $(".sync-data-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
           
              //slip
            
            $(".table-sync-data-selector").text($(".sync-data-first").text());
            
            
            
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_sync_data_cost.get_total_sync_data_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_sync_data_cost.set_total_sync_data_cost(0);
                //step 4
                my_sync_data_cost.set_total_sync_data_cost(my_sync_data_cost.get_total_sync_data_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
               my_sync_data_cost.add_into_total_sync_data_cost (-200);//subtract values
            console.log(my_sync_data_cost.get_total_sync_data_cost());
        }
        
    }
    )
    
     $(".sync-data-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
              
               //slip
            
            $(".table-sync-data-selector").text($(".sync-data-second").text());
            
            
              
              
                    
            //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_sync_data_cost.get_total_sync_data_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1200);
                //step 3
                my_sync_data_cost.set_total_sync_data_cost(0);
                //step 4
                my_sync_data_cost.set_total_sync_data_cost(my_sync_data_cost.get_total_sync_data_cost()+1200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
               my_sync_data_cost.add_into_total_sync_data_cost (-200);//subtract values
            console.log(my_sync_data_cost.get_total_sync_data_cost());
        }
        
    }
    )

     //notifications
     $(".notifications-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
           
            //slip
            
            $(".table-notification-selector").text($(".notifications-first").text());
            
            
              
           
           
            
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_notification_cost.get_total_notifications_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_notification_cost.set_total_notifications_cost(0);
                //step 4
                my_notification_cost.set_total_notifications_cost(my_notification_cost.get_total_notifications_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
            
            
        }
        else//if checkbox is not checked
        {
              my_notification_cost.add_into_total_notifications_cost(-200);//add values
            console.log(my_notification_cost.get_total_notifications_cost());
      }
        
    }
    )
      $(".notifications-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
             //slip
            
            $(".table-notification-selector").text($(".notifications-second").text());
            
            
             
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_notification_cost.get_total_notifications_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1200);
                //step 3
                my_notification_cost.set_total_notifications_cost(0);
                //step 4
                my_notification_cost.set_total_notifications_cost(my_notification_cost.get_total_notifications_cost()+1200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
            
        }
        else//if checkbox is not checked
        {
              my_notification_cost.add_into_total_notifications_cost(-200);//add values
            console.log(my_notification_cost.get_total_notifications_cost());
      }
        
    }
    )
     //security

     $(".security-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
            
             //slip
            
            $(".table-security-selector").text($(".security-first").text());
            
             
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_security_cost.get_total_security_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_security_cost.set_total_security_cost(0);
                //step 4
                my_security_cost.set_total_security_cost(my_security_cost.get_total_security_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
            
            
            
            
        }
        else//if checkbox is not checked
        {
              my_security_cost.add_into_total_security_cost(-200);//add values
            console.log(my_security_cost.get_total_security_cost());
      }
        
    }
    )
     $(".security-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
         
         
           //slip
            
            $(".table-security-selector").text($(".security-second").text());
            
         
         
         
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_security_cost.get_total_security_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1200);
                //step 3
                my_security_cost.set_total_security_cost(0);
                //step 4
                my_security_cost.set_total_security_cost(my_security_cost.get_total_security_cost()+1200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
        }
        else//if checkbox is not checked
        {
              my_security_cost.add_into_total_security_cost(-200);//add values
            console.log(my_security_cost.get_total_security_cost());
      }
        
    }
    )
     
 $(".security-checkbox-third input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
             //slip
            
            $(".table-security-selector").text($(".security-second").text());
            
         
            
            
         
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_security_cost.get_total_security_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1400);
                //step 3
                my_security_cost.set_total_security_cost(0);
                //step 4
                my_security_cost.set_total_security_cost(my_security_cost.get_total_security_cost()+1400);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
        }
        else//if checkbox is not checked
        {
              my_security_cost.add_into_total_security_cost(-200);//add values
            console.log(my_security_cost.get_total_security_cost());
      }
        
    }
    )
   //track
$(".track-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
          
            //slip
            
            $(".table-analytics-selector").text($(".track-first").text());
            
          
          
            
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_track_cost.get_total_track_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_track_cost.set_total_track_cost(0);
                //step 4
                my_track_cost.set_total_track_cost(my_track_cost.get_total_track_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
            
            
            
        }
        else//if checkbox is not checked
        {
              my_track_cost.add_into_total_track_cost(-200);//add values
            console.log(my_track_cost.get_total_security_cost());
      }
        
    }
    )
    $(".track-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
              //slip
            
            $(".table-analytics-selector").text($(".track-second").text());
            
            
            
            
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_track_cost.get_total_track_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1200);
                //step 3
                my_track_cost.set_total_track_cost(0);
                //step 4
                my_track_cost.set_total_track_cost(my_track_cost.get_total_track_cost()+1200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
              my_track_cost.add_into_total_track_cost(-200);//add values
            console.log(my_track_cost.get_total_security_cost());
      }
        
    }
    )
    $(".track-checkbox-third input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
             //slip
            
            $(".table-analytics-selector").text($(".track-third").text());
            
            
            
            
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_track_cost.get_total_track_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1400);
                //step 3
                my_track_cost.set_total_track_cost(0);
                //step 4
                my_track_cost.set_total_track_cost(my_track_cost.get_total_track_cost()+1400);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
        }
        else//if checkbox is not checked
        {
              my_track_cost.add_into_total_track_cost(-200);//add values
            console.log(my_track_cost.get_total_security_cost());
      }
        
    }
    )
    
    //content management
   $(".management-system-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
             //slip
            
            $(".tablecontent-management-selector").text($(".management-system-first").text());
            
            
            
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_content_management_cost.get_total_content_management_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_content_management_cost.set_total_content_management_cost(0);
                //step 4
                my_content_management_cost.set_total_content_management_cost(my_content_management_cost.get_total_content_management_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
            
            
            
        }
        else//if checkbox is not checked
        {
            my_content_management_cost.add_into_total_content_management_cost(-200);//add values
            console.log(my_content_management_cost.get_total_content_management_cost());
      }
        
    }
    )  
    $(".management-system-checkbox-second input[type='radio']").on("click",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
              //slip
            
            $(".tablecontent-management-selector").text($(".management-system-second").text());
            
            
            
            
            
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_content_management_cost.get_total_content_management_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1200);
                //step 3
                my_content_management_cost.set_total_content_management_cost(0);
                //step 4
                my_content_management_cost.set_total_content_management_cost(my_content_management_cost.get_total_content_management_cost()+1200);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
        }
        else//if checkbox is not checked
        {
            my_content_management_cost.add_into_total_content_managemet_cost(-200);//add values
            console.log(my_content_management_cost.get_total_content_management_cost());
      }
        
    }
    ) 
    // project design
     $(".project-design-checkbox-first input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
             //slip
            
            $(".table-project-design-selector").text($(".project-design-first").text());
            
            
            
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_design_cost.get_total_design_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_design_cost.set_total_design_cost(0);
                //step 4
                my_design_cost.set_total_design_cost(my_design_cost.get_total_design_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
            
            
            
            
            
        }
        else//if checkbox is not checked
        {
              my_design_cost.add_into_total_design_cost(-200);//add values
            console.log(my_design_cost.get_total_design_cost());
      }
      let total_design_cost=my_design_cost.get_total_design_cost(); 
      
      $(".total-estimate-ammount").text(total_design_cost);
        
        
    }
    ) 
    // project design
     $(".project-design-checkbox-second input[type='radio']").on("change",function(e)
    {
        let checkbox_status=$(this). prop("checked");//value for check status on checkbox
        
        if( checkbox_status===true)//if checkbox is checked
        {
            
             //slip
            
            $(".table-project-design-selector").text($(".project-design-second").text());
            
            
            
            
              //step 1
            my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()-my_design_cost.get_total_design_cost());
            //step 2
         my_app_cost.set_total_app_cost(my_app_cost.get_total_cost_for_app()+1000);
                //step 3
                my_design_cost.set_total_design_cost(0);
                //step 4
                my_design_cost.set_total_design_cost(my_design_cost.get_total_design_cost()+1000);
                 
                  $(".total-estimate-ammount").text(my_app_cost.get_total_cost_for_app());
                  console.log(my_app_cost.get_total_cost_for_app());
            
        }
        else//if checkbox is not checked
        {
              my_design_cost.add_into_total_design_cost(-200);//add values
            console.log(my_design_cost.get_total_design_cost());
      }
       
    }
    )
 
    $(".get_cost_button").on("click",function()
    {
            let total_platform_cost=my_platform_cost.get_total_platform_cost();
            console.log(total_platform_cost);
            let total_screen_cost=my_screen_cost.get_total_screen_cost();
              console.log(total_screen_cost);
            let total_design_customization_cost=my_design_customization_cost.get_total_design_customization_cost();
              console.log(total_design_customization_cost);
            let total_login_system_cost=my_login_system_cost.get_total_login_system_cost();
              console.log(total_login_system_cost);
            let total_data_store_cost=my_data_store_cost.get_total_data_store_cost();
              console.log(total_data_store_cost);
            let total_integrate_cost=my_integrate_cost.get_total_integrate_cost();
              console.log(total_integrate_cost);
            let total_location_cost=my_location_cost.get_total_location_cost();
              console.log(total_location_cost);
            let total_third_party_cost=my_third_party_cost.get_total_third_party_cost();
            let total_payment_cost=my_payment_cost.get_total_payment_cost();
            let total_sync_data_cost=my_sync_data_cost.get_total_sync_data_cost();
            let total_notifications_cost=my_notification_cost.get_total_notifications_cost();
            let total_security_cost=my_security_cost.get_total_security_cost();
            let total_track_cost=my_track_cost.get_total_track_cost();
            let total_content_management_cost=my_content_management_cost.get_total_content_management_cost();
            let total_design_cost=my_design_cost.get_total_design_cost();
            
    
    $(".total-amount-value").text(total_platform_cost+total_screen_cost+total_design_customization_cost+total_login_system_cost+total_data_store_cost+total_integrate_cost+total_location_cost+total_third_party_cost+total_payment_cost+total_sync_data_cost+total_security_cost+total_track_cost+total_content_management_cost+total_design_cost);
    
     
    $(".table-project-cost").text(my_platform_cost.get_total_platform_cost());
   $(".table-screen-cost").text(my_screen_cost.get_total_screen_cost());
    $(".table-design-customization-cost").text(my_design_customization_cost.get_total_design_customization_cost());
   $(".table-login-system-cost").text(my_login_system_cost.get_total_login_system_cost());
   $(".table-data-cost").text(my_login_system_cost.get_total_login_system_cost());
 $(".table-integrate-cost").text(my_integrate_cost.get_total_integrate_cost());
   $(".table-third-parties-cost").text(my_third_party_cost.get_total_third_party_cost());
   $(".table-project-payment-cost").text(my_payment_cost.get_total_payment_cost());
   $(".table-sync-data-cost").text(my_sync_data_cost.get_total_sync_data_cost());
   $(".table-notification-cost").text(my_notification_cost.get_total_notifications_cost());
  
   $(".table-security-cost").text(my_security_cost.get_total_security_cost());
   $(".table-analytics-cost").text(my_track_cost.get_total_track_cost());
  
   $(".table-content-management-cost").text(my_content_management_cost.get_total_content_management_cost());
   $(".table-project-design-cost").text(my_design_cost.get_total_design_cost());
   $(".table-location-cost").text(my_location_cost.get_total_location_cost());
   
    
    
        
    })
    
   
    
    
    
    
    //code for carousel active 
    
    $(".right-carousel-fixed li").on("click",function()
    {
        $(".right-carousel-fixed li").removeClass("active");
        $(this).addClass("active");
        $($(this).prevAll("li")).addClass("active");
    })
    
    $(".nexti").on("click",function()
    {
     let number=$(".right-carousel-fixed li.active").length;
     number=number+1;
     let current_number=$(".right-carousel-fixed li").get(number-1);
     $(current_number).addClass("active");
     $($(this).prevAll("li")).addClass("active");
    })
    
    $(".previous").on("click",function()
    {
        
        
        let number=$(".right-carousel-fixed li.active").length;
        number=number;
        
         if(number==1){
            return false;
        }
        
         
        
        let current_number=$(".right-carousel-fixed li").get(number-1);
        $(current_number).removeClass("active");
        $($(this)).addClass("active");
        $($(this).prevAll("li")).addClass("active");
       
    })
    
    
    
    
    
    
    
    /* form on project submit*/
        $("[name='my-project-form-group']").on("submit",function(e)
        {
            e.preventDefault();
            $(".loader-container").show();
            
        var data={
        name:$(".name").val(),
        email:$(".email").val(),
        phone_number:$(".phone-number").val(),
        };
        console.log(data);
        $.ajax({
            type:"post",
            url:"http://abhishek.acropolisglobal.com/estimate-your-project/sendMail.php",
            data:data,
            success:function(data)
            {
            console.log(data);
            $(".loader-container").hide();
            $("#myModal").modal('show');
            $(".name").val(""),
            $(".email").val(""),
            $(".phone-number").val("")
           
            }
        })
        
        
        
        
        
        });
    
//show model
      $(".get_cost_button").on("click",function()
      {
      
          $("#myModal-price").modal('show');
          
          
          
      })
      
      //insert data
      
      
      var title=[],choice=[],childChoice=[],price=" ",current_choice_list="";
      
      
      $.getJSON("employee.json", function(data)
      {
          
          //loop to get local variable
        for(let i=0; i<data.length; i++)
        {
            let current_container=$(".item").get(i);//get the container container
            current_choice_list=$(current_container).find(".app-name");//set all choice container
            title.push(data[i].title);
            let current_choice=data[i].choice;
            for(let k=0;k<current_choice.length;k++)
            {
                $($(current_choice_list).get(k)).text(current_choice[k]);//push the choices
            }
            console.log(data[i].choice);
        }
        //loop to set heading
        for(let i=0; i<title.length; i++)
        {
           $($(".which-platform").get(i)).text(title[i]);
        }

      })
      
      
      
       
})

