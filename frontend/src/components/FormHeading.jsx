import React from "react";

export default function FormHeading(props) {
    return(
        <>
            <h1 className="text-2xl font-bold m-3 underline decoration-cyan-400 text-blue-400 text-center hover:text-blue-600">{props.heading}</h1>
        </>
    )
}