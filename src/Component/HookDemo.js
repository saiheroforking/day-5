    import React, { useState, useEffect, useRef } from "react";
    import "./HookDemo.css"

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
            <div className="Hook">
                <h2>Hooks Demo</h2>
                <input
                    ref={inputRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button id="click" onClick={Input}>Focus Input</button>
            </div>
        );
    }

    export default HooksDemo;
