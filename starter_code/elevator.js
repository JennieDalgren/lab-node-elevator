class Elevator {

  constructor(){
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction;
    this.timerId;
    this.waitingList = [];
    this.passengers = [];

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

    //if the elevator isn't empty
    if (this.passengers.length !== 0) {
      if (this.requests[0].destinationFloor > this.floor) {
        this.floorUp();
      }
      else {
        this.floorDown();
      }
      this._passengersLeave();
      this._passengersEnter();
    }
    //if the elevator is empty
    else {
      if (this.waitingList[0].originFloor > this.floor) {
        this.floorUp();
      }
      else {
        this.floorDown();
      }
      this._passengersLeave();
      this._passengersEnter();
    }

    this.log();

  }

  _passengersEnter() {
    if(this.waitingList.length > 0) {
      this.waitingList.forEach((person, index) => {
        if (this.floor === person.originFloor){
          this.passengers.push(person);
          this.waitingList.splice(index, 1);
          console.log(`<-- ${person.name} entered the elevator`);
        }
      });
    }
  }

  _passengersLeave() {
    if(this.passengers.length > 0 ){
      this.passengers.forEach((person, index)=>{
        if(person.destinationFloor === this.floor){
          this.passengers.splice(index, 1);
          this.requests.splice(index,1);
          console.log(`--> ${person.name} left the elevator`);
        }
      });
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

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person);
  }

  log() {
    console.log(`Direction:  ${this.direction} | Floor:  ${this.floor}`);
  }

}

module.exports = Elevator;
