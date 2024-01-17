import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement 
{
  constructor()
  {
    super();
    console.log("Constructor");
  }

  connectedCallback()
  {
    console.log("Connected CallBack");
  }

  disconnectedCallback()
  {
    console.log("Disconnected CallBack");
  }
}