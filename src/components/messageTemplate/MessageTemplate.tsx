import { useEffect, useState } from 'react';
import cl from './messageTemplate.module.css';
import ControlledTextarea from '../controlledTextarea/ControlledTextarea';
import If_Then_else from '../If_Then_Else/If_Then_Else';



const MessageTemplate = ({ queue }: any) => {



    if (queue.length === 1) {
        return <ControlledTextarea key={queue[0].key} />
    }


    return (
        // Тут надо сказать как отрисовывать
        <div className={cl.MT_wrapper}>
            {queue.map((item: any, index: any) => {

                if (item.type === "TextField") {
                    return (
                        <ControlledTextarea/>
                    )
                }

                if (item.type === "If_Then_Else") {
                    return <If_Then_else />
                }

            })}
        </div>
    );



}

export default MessageTemplate;