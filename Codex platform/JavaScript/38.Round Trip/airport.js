// Write code below 💖
departTripTicket={name:"Pratik","from":"Kathmandu",to:"Biratnagar",businessClass:true,leaveTime:"7AM",arriveTime:"9AM",upgrade(){
  if(departTripTicket.businessClass){ 
    return "Your ticket is already business class!"
  }else{
    return "Your can purchase business class ticket"
  }
}
}    // departing object 🛫


returnTripTicket={name:"Pratik",from:"Kathmandu",to:"Biratnagar",businessClass:true,leaveTime:"2PM",arriveTime:"5PM",flightTime(){
   return `the plane will depart from ${returnTripTicket.from} to ${returnTripTicket.to} on ${returnTripTicket.leaveTime} and land on ${returnTripTicket.arriveTime}`
}}    //returning object 🛬 
console.log(departTripTicket.upgrade())
console.log(returnTripTicket.flightTime())
