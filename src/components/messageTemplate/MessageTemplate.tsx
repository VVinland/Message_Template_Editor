import { useEffect, useState } from 'react';
import cl from './messageTemplate.module.css';
import ControlledTextarea from '../controlledTextarea/ControlledTextarea';
import If_Then_else from '../If_Then_Else/If_Then_Else';

const MessageTemplate = ({ template }: any) => {



    if (!template) {
        return (
            <div className={cl.MT_wrapper}>
                <ControlledTextarea />
            </div>
        )
    }


    return (

        <div className={cl.MT_wrapper}>
            {/* <ControlledTextarea />
            <If_Then_else /> */}
        </div>

        // <div className={cl.MT_wrapper}>
        //     <ControlledTextarea/>
        //     {/* <If_Then_else/> */}
        // </div>

        // <div className={cl.MT_wrapper}>
        //     <div className={cl.MT_textBlockContainer}>
        //         <ControlledTextarea />
        //         <If_Then_else />
        //     </div>
        //     <div className={cl.MT_textBlockContainer}>
        //         <ControlledTextarea />
        //         <If_Then_else />
        //     </div>
        //     <div className={cl.MT_textBlockContainer}>
        //         <ControlledTextarea />
        //     </div>
        // </div>

        // <div className={cl.MT_wrapper}>
        //     <div className={cl.MT_textBlockContainer}>
        //         <ControlledTextarea />
        //         <If_Then_else />
        //     </div>
        //     <div className={cl.MT_textBlockContainer}>
        //         <ControlledTextarea />
        //         <If_Then_else />
        //     </div>
        //     <div className={cl.MT_textBlockContainer}>
        //         <ControlledTextarea />
        //     </div>
        // </div>
    );
}

export default MessageTemplate;