import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"

const App = () => {
 
        return (
            <div className="app-wrapper">
                <Header
                    title="Stuff To Do"
                />
                <Main/>
            </div>
        )
    }


export default App


