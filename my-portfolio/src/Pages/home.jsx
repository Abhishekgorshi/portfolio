import Hero from "../component/hero";
import Certificates from "../component/certificates";
import NavBar from "../component/nav";
import Footer from "../component/footer";
import Projects from "../component/project";
import Skills from "../component/skills";

function Home(){
  return(
<>
     <NavBar/>
      <Hero />
       <Certificates/>
       <Projects/>
       <Skills />
       <Footer/> 
    
</>
  )
}

export default Home;