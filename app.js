let doorImage1 = document.getElementById('door1');
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let doorImage2 = document.getElementById('door2') ;
let doorImage3 = document.getElementById('door3');
beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
spaceDoorPath="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let numClosedDoors = 3 ;
let chorDoor = Math.floor(Math.random() * numClosedDoors) ;




door1.onclick = () => {
  // use #id to reference  and change image URL
	 doorImage1.src = botDoorPath;
}

door2.onclick = () => {
 
  doorImage2.src = beachDoorPath;
  
}

door3.onclick = () => {
  doorImage3.src = spaceDoorPath; 
}

const randomChoreGenerator = () => {
  
};
