import { useState,useEffect } from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import { UserData } from "./Data";

function App() {

  const [showPosts,setshowPosts] = useState()

  const apiURL = 'https://jsonplaceholder.typicode.com/todos'
  let displayData

  function pullJson(){
    fetch(apiURL)
    .then(response => response.json())
    .then(responseData => {
      displayData = responseData.map(function(todo){
        return(
          <p key={todo.id}>{todo.title}</p>
        )
      })
      console.log(responseData)
      setshowPosts(displayData)
    })
    // return
  }
  useEffect(() => {

  pullJson()

  },[])

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      {showPosts}
    </div>
  );
}

export default App;
