
import {Users} from './users.jsx'
import './App.css'
import {Button} from './Button.jsx'

function App() {

  return (
    <>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <div style={{border:"1px solid black" ,width:"200px",textAlign:"center"}}>
      <Users  name="thiru" age="20" place="vijayawada"  />
      <Button />
      </div>
      <div style={{border:"1px solid black",width:"200px",textAlign:"center"}}>
      <Users name="thiru" age="22" place="vijayawada"/>
      <Button />
      </div>
      <div style={{border:"1px solid black",width:"200px",textAlign:"center"}}>
      <Users name="thiru" age="23" place="Hyderabad"/>   <Button />
      </div>
      <div style={{border:"1px solid black",width:"200px",textAlign:"center"}}>
      <Users name="thiru" age="25" place="vijayawada"/>   <Button />
      </div>
      </div>
    </>
  )
}

export function Cpp() {
  let obj=[{
    id:1,name:"thiru",age:20,std:"btech"},
  { id:2,name:"karu",age:25,std:"btech"},
  { id:3,name:"ravi",age:20,std:"MCA"}]

  console.log(obj)


return(
<>
<div  style={{display:"flex",justifyContent:"space-evenly",gap:"20px"}}>
    {obj.map((va,index)=>{
         return(
          <>
              <div style={{border:"2px solid black",width:"200px",textAlign:"center"}}>
              <Users   name={va.name} age={va.age} student={va.std}/>
           <Button key={va.id}/>
              </div>
          </>

)
})}
    
</div>
    </>
 
)
}


export default App 
