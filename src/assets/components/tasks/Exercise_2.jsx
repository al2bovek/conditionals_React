import { useState, useEffect } from "react";
import { Button } from "../Button"

const loadingStatus = false;
const logStatus = false;
export const Loading = () => {
    const [load, setLoad] = useState(loadingStatus);
    const [log, setLog] = useState(logStatus);
    useEffect(() => {
        if (log) {
            setLoad(true);
            const timer = setTimeout(() => setLoad(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [log]);

    return (
        <>
        <div className="flex flex-col w-[40%] m-auto md:w-[90%]">
            <h2>Exercise 2</h2>
            <p>{loadingStatus ? "Loading..." : ''}</p>
            <h3 className="text-3xl py-6">
                {log
                    ? load
                        ? "Loading..."
                        : "Welcome, User!"
                    : "Please log in"}
            </h3>
            <Button
                status={log}
                setStatus={setLog}
                style="bg-amber-950" />
            <hr />
                </div>
        </>
    )
}
