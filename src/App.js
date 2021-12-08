import "./styles.css";

export default function App() {
  let classRoster = [
    { first: "Ye", last: "Paing", role: "teacher"},
    { first: "Emily", last: "Neilsen", role: "teacher"},
    { first: "Keturah", last: "Allen", role: "student"},
    { first: "Amori", last: "Steele", role: "student"}
  ];
 if(classRoster.role==="teacher"){
   className==="teacher";
 }
  return (
    <div className="App">
       {classRoster.map(
         function(teacher){
           return(
             <h1>{teacher.first},{teacher.role}</h1>
           )})
      }
    </div>
  );
}
