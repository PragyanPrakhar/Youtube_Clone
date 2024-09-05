import { useRef, useState } from "react";

const Demo2 = () => {
    let x = 10;
    const [y, setY] = useState(0);
    const ref=useRef(0);
    return (
        <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96 ">
            <div>
                <button
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        x = x + 1;
                        console.log(x);
                    }}
                >
                    Increase x
                </button>
                <h1 className="font-bold text-xl">Let x= {x}</h1>
            </div>
            <div>
                <button
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        setY(y + 1);
                    }}
                >
                    Increase y
                </button>
                <h1 className="font-bold text-xl">Let y= {y}</h1>
            </div>
            <div>
                <button
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        ref.current=ref.current+1;
                        console.log("ref="+ref.current);
                    }}
                >
                    Increase ref
                </button>
                <h1 className="font-bold text-xl">Let ref= {ref.current}</h1>
            </div>
        </div>
    );
};

export default Demo2;
