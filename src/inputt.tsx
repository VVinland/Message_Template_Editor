import React, { useState } from "react";

const Inputt = React.memo(({ varName, abc }: any) => {
    const [value, setValue] = useState();

    const handler = (event: any) => {
        console.log(event.target.name);
        abc(event.target.name, event.target.value);
        
        setValue(event.target.value);
    }

    return (
        <div key={new Date().getMilliseconds()+2}>
            <label htmlFor="">{varName}</label>
            <input type="text"
                name={varName}
                value={value}
                onChange={handler}
                key={new Date().getMilliseconds()+2}
            />
        </div>
    )


})

export default Inputt;
