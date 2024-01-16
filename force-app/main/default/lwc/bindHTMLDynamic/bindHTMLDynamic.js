import { LightningElement } from 'lwc';

export default class BindHTMLDynamic extends LightningElement {
    myValue = "Salesforce by M Wasif Dawar";
    handleChange(event)
    {
        this.myValue = event.target.value;
    }
}