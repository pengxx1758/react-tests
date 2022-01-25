/*
 * @Description: file content
 * @Version: v1.0.0
 * @Autor: sanjin
 * @Date: 2022-01-19 17:05:00
 * @LastEditors: sanjin
 * @LastEditTime: 2022-01-21 16:16:40
 */
import React, { memo } from "react";
import {
  LiveRoomItemProps,
  RedPacketTaskTypeText,
  TaskItemProps,
} from "../../model/task.model";
import styleCss from "./index.module.scss";
const TaskItem = (props) => {
  const { detail }: { detail: TaskItemProps } = props;

  function renderLive(live: LiveRoomItemProps) {
    return (
      <div key={live.roomId} className={styleCss.live_item}>
        <div className={styleCss.live_cover}>
          <img src={live.cover} />
        </div>
        <div className={styleCss.live_info}>
          <div className={styleCss.live_name}>
              {live.roomName}
          </div>
          <div className={styleCss.live_status}>
            <button>直播状态-{live.status}</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styleCss.task_container}>
      <div className={styleCss.task_title}>
        <span>{RedPacketTaskTypeText[detail.redPacketTaskType]}</span>
        <button>红包状态</button>
      </div>
      {(detail.sbuRoomInfoRespList || detail.videoInfoList) && (
        <div className={styleCss.task_content}>
          {detail.sbuRoomInfoRespList.length > 0 && (
            <div className={styleCss.list_box}>
              {detail.sbuRoomInfoRespList.map((live) => {
                return renderLive(live);
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default memo(TaskItem);
