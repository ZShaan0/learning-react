import React from "react";
import HelloWorld from "../components/HelloWorld";

function Home(){
    return (
        <div>
            <h1 className='font-bold text-xl mb-3'>This is the home page</h1>

            <HelloWorld name="ZShaan0" />

        </div>
    )
}

export default Home