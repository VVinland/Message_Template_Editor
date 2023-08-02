import ControlledTextarea from "../controlledTextarea/ControlledTextarea";
import cl from './if_then_else.module.css';
const If_Then_else = () => {

    
    return (
        <div className={cl.MT}>
            <button className={cl.MT_btnDelete}>
                <div className={cl.MT_btnDelete_verticalLine}></div>
                <div className={cl.MT_btnDelete_horizontalLine}></div>
            </button>
            <div className={cl.MT_wrapper_If_Then_Else}>
                <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorIf].join(' ')}>
                    <span>IF</span>
                    <ControlledTextarea />
                </div>
                <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorThen].join(' ')}>
                    <span>THEN</span>
                    <ControlledTextarea />
                </div>
                <div className={[cl.MT_If_Then_Else, cl.MT_If_Then_Else_colorElse].join(' ')}>
                    <span>ELSE</span>
                    <ControlledTextarea />
                </div>
            </div>
        </div>
    );
}

export default If_Then_else;