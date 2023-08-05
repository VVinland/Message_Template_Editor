import { useId } from "react";
import ControlledTextarea from "../controlledTextarea/ControlledTextarea";
import cl from './if_then_else.module.css';

interface If_Then_ElseProps {
    type: string;
    id: number;
    value: string
}

const If_Then_else = ({ type, id, value }: If_Then_ElseProps) => {

    // const emptyId = useId();
    // const ifId = useId();
    // const thenId = useId();
    // const elseId = useId();

    if (type === '') {
        return (
            <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_empty].join(' ')}>
                <label></label>
                <ControlledTextarea id={id} defvalue={value}/>
            </div>

        )
    }

    if (type === "If") {
        return (
            <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorIf].join(' ')}>
                <label >IF</label>
                <ControlledTextarea id={id} defvalue={value}/>
            </div>
        )
    }

    if (type === "Then") {
        return (
            < div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorThen].join(' ')} >
                <label>THEN</label>
                <ControlledTextarea id={id} defvalue={value}/>
            </div >
        )
    }

    if (type === "Else") {
        return (
            <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorElse].join(' ')}>
                <label>ELSE</label>
                <ControlledTextarea id={id} defvalue={value}/>
            </div>
        )
    }


    // return (
    //     <div className={cl.MT}>
    //         <button className={cl.MT_btnDelete}>
    //             <div className={cl.MT_btnDelete_verticalLine}></div>
    //             <div className={cl.MT_btnDelete_horizontalLine}></div>
    //         </button>
    //         <div className={cl.MT_wrapper_If_Then_Else}>

    //             <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorIf].join(' ')}>
    //                 <span>IF</span>
    //                 <ControlledTextarea />
    //             </div>
    //             <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorThen].join(' ')}>
    //                 <span>THEN</span>
    //                 <ControlledTextarea />
    //             </div>
    //             <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorElse].join(' ')}>
    //                 <span>ELSE</span>
    //                 <ControlledTextarea />
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default If_Then_else;