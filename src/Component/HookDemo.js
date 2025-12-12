import React, { useState, useEffect, useRef } from "react";

function HooksDemo() {
    const [text, setText] = useState("Hello");
    const inputRef = useRef(null);

    useEffect(() => {
        console.log(`[Hook Demo] useEffect called after render`);
    });

    const Input = () => {
        console.log("[Hook Demo] useRef points to input element");
        inputRef.current.focus();
    };

    console.log(`[Hook Demo] useState value: '${text}'`);

    return (
        <div>
            <h2>Hooks Demo</h2>
            <input
                ref={inputRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={Input}>Focus Input</button>
        </div>
    );
}

export default HooksDemo;
