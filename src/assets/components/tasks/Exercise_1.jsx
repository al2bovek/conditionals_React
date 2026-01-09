import { useState } from "react";
import { Button } from "../Button";

const loggedInIs = false;

export const Welcome = () => {
    const [status, setStatus] = useState(loggedInIs);

    return (
        <div className="flex flex-col w-[40%] m-auto md:w-[90%]">
            <h2>Exercise 1</h2>
            <h3 className="text-3xl py-6">
                {status ? "Welcome, User!" : "Please log in"}
            </h3>
            <Button
                status={status}
                setStatus={setStatus}
                style="bg-amber-600"
                />
            <hr />
        </div>
    );
};
