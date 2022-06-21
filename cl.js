class Mobile{
    phoneModel = "lenovo";
    #unlockPIN = 1122

    makeCall(){
        console.log("calling ....");
    }
    sendSMS(){
        console.log("send....");
    }
    getUnlockPIN(){
        return this.#unlockPIN;
    }
}

const myMobile = new Mobile();
myMobile.sendSMS()
console.log(myMobile.phoneModel);
console.log(myMobile.getUnlockPIN());