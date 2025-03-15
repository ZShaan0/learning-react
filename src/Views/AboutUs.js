import React from "react";

function AboutUs(){
    return (
        <div>
            <h1 className="font-bold text-xl mb-3">This is the About Us page</h1>

            <p>
                This is my first project in react. <br/> I am experimenting using JavaScript,
                HTML, CSS (TailwindCSS) and React (with ReactRouter, FontAwesome).
            </p>
            <br/>
            <p>
                You can find more of my work at:
                <a href="https://github.com/ZShaan0" className="ml-1 underline text-blue-500">ZShaan0's GitHub</a>
            </p>
        </div>
    )
}

export default AboutUs