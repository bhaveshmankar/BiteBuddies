import React ,{useState} from 'react'

const Section = ({title, description, isVisible, setIsVisible}) => {

   return(
    <div className='border border-solid border-black p-2 m-2'>   
       <h3 className="font-bold text-xl">{title} </h3>

       {isVisible? (
        <button className='cursor-pointer underline' onClick={() =>{
          setIsVisible(false);
       }}>Hide</button>
       ):
       (   
        <button className='cursor-pointer underline' onClick={() =>{
          setIsVisible(true);
       }}>Show</button>
       )
      }
       {isVisible && <p className="">{description}</p>}
    </div>

   ) 
}

const Instamart = () => {
 const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
         <h1 className="font-bold text-xl">Instamart Component</h1>

         <Section title={"About Instamart"}
         isVisible={visibleSection === "about"} 
         setIsVisible={() =>setVisibleSection("about")}
         description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
        
         <Section title={"Team Instamart"} 
         isVisible={visibleSection === "team"} 
         setIsVisible = {() => setVisibleSection("team")}
         description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
         
         <Section title={"Careers@Instamart"} 
         isVisible={visibleSection === "careers"} 
         setIsVisible = {() => setVisibleSection("careers")}
         description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
         
         <h1>100s of component inside it</h1>
    </div>
  )
}

export default Instamart
