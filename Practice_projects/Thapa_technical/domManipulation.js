<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body{
      background-color: rgb(229, 228, 226);
    }
    h1{
      margin:auto;
      display: flex;
      justify-content: center;
    }
    button{
      margin-top: 2rem;
      margin-left: 20rem;
      background-color: rgb(239, 159, 11);
      font-size: 20px;
      border-radius: 10px;
      border: transparent;
      color: white;
    }
    button:hover{
      background-color:black;
      color: rgb(255, 255, 255);
      border-radius: 10px;
      border:solid rgb(239, 159, 11);

    }


  </style>
</head>
<body>
  <h1>Inline Event</h1>
  <button id="btn1" onclick="alert('Welcome');">greeting</button>
  <button id="btn2" ondblclick="alert('Welcome due to double click batok')">greeting again</button>
  <button id="btn3" onmouseover="alert('Welcome due to mouseover batok')">greeting again</button>
   <h1>DOM Event Handler</h1>
  <button id="btn4" >greeting again</button>
  <h1>Add event listener</h1>
  <button id="btn5" >greeting again</button>
  <button id="btn6" >greeting again</button>



  <script>
    document.getElementById("btn4").onclick=()=>{
      alert("Welcome to DOM");
    }
    document.getElementById("btn5").addEventListener("click",()=>{
      alert("Welcome to DOM through add event listener");
    })
    document.getElementById("btn6").addEventListener('mouseover',()=>{
      alert("Hello sadhak aur batok you are welcome due to mousehover addlistener event");
    })

  </script>
</body>
</html>
