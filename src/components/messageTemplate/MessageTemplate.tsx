import If_Then_else from '../If_Then_Else/If_Then_Else';
import { MessageTemplateProps } from '../../interfaces';
import cl from './messageTemplate.module.css';


const MessageTemplate = ({ structureTemplate, delete_IF_THEN_ELSE }: MessageTemplateProps) => {


    return (
        <div className={cl.MT_wrapper} >
            {
                structureTemplate.map((item: any,) => {

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
                                            structureTemplate={item.subLevel}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <MessageTemplate
                                        structureTemplate={item.nextTextFields}
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