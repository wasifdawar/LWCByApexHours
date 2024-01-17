import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement 
{ 
    myList = [];
  constructor()
  {
    super();
    console.log("Constructor");
  }

  connectedCallback()
  {
    console.log("Connected CallBack");
    this.myList.push("Push Value from MYList")
  }

  disconnectedCallback()
  {
    console.log("Disconnected CallBack");
    this.myList = [];
  }
}