function IPL(){
    let attempts=0;
    let success= false;
    return function(){
        attempts++;
        if(attempts<18){
             console.log("RCB LOST")
        }else if(attempts===18){
            success=true;
            console.log(`RCB WON THE IPL 2025 ️‍🔥 after ${attempts} years`)
        }
    }
}



const RCB=IPL();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
RCB();
