import { If_Then_ElseProps } from "../../interfaces";
import ControlledTextarea from "../controlledTextarea/ControlledTextarea";
import cl from './if_then_else.module.css';



const If_Then_else = ({ type, id, defvalue }: If_Then_ElseProps) => {


    if (type === '') {
        return (
            <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_empty].join(' ')}>
                <label htmlFor={id}></label>
                <ControlledTextarea id={id} defvalue={defvalue} key={id} />
            </div>

        )
    }

    if (type === "If") {
        return (
            <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorIf].join(' ')}>
                <label htmlFor={id}>IF</label>
                <ControlledTextarea id={id} defvalue={defvalue} key={id} />
            </div>
        )
    }

    if (type === "Then") {
        return (
            < div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorThen].join(' ')} >
                <label htmlFor={id}>THEN</label>
                <ControlledTextarea id={id} defvalue={defvalue} key={id} />
            </div >
        )
    }

    if (type === "Else") {
        return (
            <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorElse].join(' ')}>
                <label htmlFor={id}>ELSE</label>
                <ControlledTextarea id={id} defvalue={defvalue} key={id} />
            </div>
        )
    }
}

export default If_Then_else;