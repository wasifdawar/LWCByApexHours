import { LightningElement } from 'lwc';

export default class ParentComponentCommunication extends LightningElement {
    count = 1;
    endValue =0;
    mesg = '';
    handleEventChange(event)
    { 
        this.endValue = event.detail.endValue;
        this.mesg = event.detail.mesg;
       if(this.count < this.endValue)
       {
        this.count = this.count +1;
       }
    }
}