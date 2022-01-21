/*
 * @Description: file content
 * @Version: v1.0.0
 * @Autor: sanjin
 * @Date: 2022-01-19 17:05:00
 * @LastEditors: sanjin
 * @LastEditTime: 2022-01-20 16:22:01
 */
import React, { memo } from 'react';
import { RedPacketTaskTypeText,TaskItemProps } from '../../model/task.model';
import styleCss from './index.module.scss';
const TaskItem = (props) => {
    const {detail}:{detail:TaskItemProps} = props;
    return (
        <div className={styleCss.task_container}>
            <div className={styleCss.task_title}>
                <span>{RedPacketTaskTypeText[detail.redPacketTaskType]}</span>
                <button>Button</button>
            </div>
            <div className={styleCss.task_content}>
                
            </div>
        </div>    
    )
}
export default memo(TaskItem);
