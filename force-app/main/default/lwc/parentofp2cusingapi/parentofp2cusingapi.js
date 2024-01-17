import { LightningElement } from 'lwc';

export default class Parentofp2cusingapi extends LightningElement {

    percentage = 20;

    handleOnChange(event){
        this.percentage = event.target.value();
    }
}