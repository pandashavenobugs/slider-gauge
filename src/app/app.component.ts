import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slider';
  gaugeType='arch';
  gaugeValue:number;
  gaugeLabel='motor cikisi';
  gaugeAppendText="mhz"
  gaugeMin=0;
  gaugeMax=100
  gaugeSize=200;
  oldMax=this.gaugeMax;
  oldMin=this.gaugeMin;
  oldRange=(this.oldMax-this.oldMin);


  //newMax=1613
  //newMin=0
  newMax=50;
  newMin=0;
  newRange=(this.newMax-this.newMin);
  pressValue($evet){
    console.log($evet)
    if(this.gaugeValue>this.gaugeMax){
      this.gaugeValue= this.gaugeMax
    }
    else if(this.gaugeValue<this.gaugeMin){
      this.gaugeValue= this.gaugeMin;
    }
  }
  /**
   * formula of scaling
   * oldRange=(oldMax-oldMin)
   * newRange=(newMax-newMin)
   * newValue=(((oldValue-oldMin)*newRange)/oldRange)+newMin
   */
  sendData(){
    if(!(this.gaugeValue > this.gaugeMax && this.gaugeValue<this.gaugeMin)){
      const newValue=(((this.gaugeValue-this.oldMin)*this.newRange)/this.oldRange)+this.newMin;
      console.log(newValue)

    }

  }
}
