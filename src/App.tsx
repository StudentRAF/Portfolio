import Header from "@/components/header/Header.tsx";
import Hero from "@/components/hero/Hero.tsx";
import Projects from "@/components/projects/Projects.tsx";
import { useEffect, useRef, useState } from "react";
import { ApplicationContext, type ApplicationData, getDefaultApplicationData } from "@/lib/context.ts";
import { createContacts, createNavigations, createProjects } from "@/lib/data.ts";
import Footer from "@/components/footer/Footer.tsx";

function App() {
  const [data, setData] = useState<ApplicationData | undefined>(getDefaultApplicationData);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => setData(prevState => (
    {
      ...prevState,
      projects: createProjects(),
      contacts: createContacts(),
      navigations: createNavigations({ projectsRef })
    }
  )), []);

  return (
    <>
      <ApplicationContext.Provider value={{ data, setData }}>
        <Header/>
        <Hero/>
        <Projects ref={projectsRef}/>
        <Footer/>
      </ApplicationContext.Provider>
    </>
  )
}

export default App
