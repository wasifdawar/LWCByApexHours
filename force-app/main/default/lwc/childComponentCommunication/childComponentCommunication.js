import { LightningElement } from 'lwc';

export default class ChildComponentCommunication extends LightningElement {
    endValue =5;
    handleOnClick()
    {
        //this.dispatchEvent(new CustomEvent("increasecount"));
        const myEventWithValue = new CustomEvent("increasecount",{
            detail:{
                endValue:  this.endValue,
                mesg : "Hello From Wasif Dawar"
            }
        });
        this.dispatchEvent(myEventWithValue);
}
}