class Elevator {

  constructor(){
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction;
    this.timerId;
    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
  }
  //
  // start() {
  //   this.timerId = setInterval(this.update, 1000);
  // }

  start() {
    this.timerId = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }

  update() {
    //if nobody in the elevator or waiting to get in it.
    if (this.passengers.length === 0 && this.requests.length === 0 && this.waitingList.length === 0) {
      this.stop();
    }



    this.requests.forEach(() => {
      if (this.floor === this.requests.destinationFloor){
        this._passengersLeave(pepino);
      }
    });


    this.waitingList.forEach(() => {
      if (this.floor === this.waitingList.originFloor){
        this._passengersEnter(this.waitingList);
      }
    });



    this.log();
  }

  _passengersEnter(pepito) {
    this.passengers.push(pepito);
    this.waitingList.shift(pepito);
    console.log(`${pepito.name} enetered the elevator`);

   }

  _passengersLeave(pepito) {
    if(pepito.destinationFloor === this.floor){
      console.log(`${pepito.name} left the elevator`);
      this.passengers.pop(pepito);
    }
  }

  floorUp() {
    if(this.floor<this.MAXFLOOR){
      this.floor++;
      this.direction = "UP";
    } else {this.floorDown();}
  }

  floorDown() {
    if(this.floor>0){
      this.floor--;
      this.direction = "DOWN";
    } else {this.floorUp();}
  }

  call(pepito) {
    this.waitingList.push(pepito);
    this.requests.push(pepito);
  }

  log() {
    console.log(`Direction:  ${this.direction} | Floor:  ${this.floor}`);
  }

}

module.exports = Elevator;
