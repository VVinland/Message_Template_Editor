import { useContext, useEffect, useId, useRef, useState } from 'react';
import cl from './messageTemplate.module.css';
import ControlledTextarea from '../controlledTextarea/ControlledTextarea';
import If_Then_else from '../If_Then_Else/If_Then_Else';
import { Context } from '../../pages/MessageTemplateEditor';

interface MessageTemplateProps {
    queue: Array<object>,
    delete_IF_THEN_ELSE: (id: number) => void;
}

const MessageTemplate = ({ queue, delete_IF_THEN_ELSE }: MessageTemplateProps) => {


    return (
        <div className={cl.MT_wrapper} >
            {
                queue.map((item: any, index: number) => {

                    if (item.value) {
                        console.log(item.value, 'MT', item.id);
                    }


                    if (item.subLevel === null && item.nextTextFields === null) {

                        return <If_Then_else type={item.type} key={item.id} id={item.id} defvalue={item.value} />

                    } else {
                        return (
                            <div className={cl.MT_container} key={item.id}>
                                <div className={cl.MT_container_sub}>
                                    <div>
                                        <If_Then_else type={item.type} key={item.id} id={item.id} defvalue={item.value} />
                                    </div>
                                    <div className={cl.MT_subLevel}>
                                        <button className={cl.MT_btnDelete} onClick={() => delete_IF_THEN_ELSE(item.id)}>
                                            <div className={cl.MT_btnDelete_verticalLine}></div>
                                            <div className={cl.MT_btnDelete_horizontalLine}></div>
                                        </button>

                                        <MessageTemplate
                                            delete_IF_THEN_ELSE={delete_IF_THEN_ELSE}
                                            queue={item.subLevel}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <MessageTemplate
                                        queue={item.nextTextFields}
                                        delete_IF_THEN_ELSE={delete_IF_THEN_ELSE}
                                    />
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div >
    );



}

export default MessageTemplate;

// {
//     queue.map((item: any, index: number) => {
//         if (item.subLevel.length === 0) {

//             return <If_Then_else type={item.type} />

//         } else {
//             return (
//                 <div className={cl.MT_container}>
//                     <div className={cl.MT_container_sub}>
//                         <div>
//                             <If_Then_else type={item.type} />
//                         </div>
//                         <MessageTemplate queue={item.subLevel} />
//                     </div>
//                     <div>
//                         <MessageTemplate queue={item.nextTextField} />
//                     </div>
//                 </div>
//             )
//         }
//     })
// }