import Header from "@/components/header/Header.tsx";
import Hero from "@/components/hero/Hero.tsx";
import Projects from "@/components/projects/Projects.tsx";
import { useRef } from "react";

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header pageRefs={{ projectsRef }}/>
      <Hero/>
      <Projects ref={projectsRef}/>
    </>
  )
}

export default App
