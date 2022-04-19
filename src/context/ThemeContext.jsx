import { createContext, useState} from "react";

const ThemeContext = createContext();


const ThemeProvider = ({children}) => {
  const [ligthTheme, setLightTheme] = useState(true)
  
const handleTheme = () => {
    setLightTheme(!ligthTheme)
     console.log("Funcion desde contexto")
}

  // const data = {
  //     ligthTheme,
  //     handleTheme
  // }



    return(
        <ThemeContext.Provider value={{
          ligthTheme,
          handleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider}
export default ThemeContext