/*
 * @Description: file content
 * @Version: v1.0.0
 * @Autor: sanjin
 * @Date: 2022-01-19 16:04:34
 * @LastEditors: sanjin
 * @LastEditTime: 2022-01-20 16:08:31
 */
import React, { memo, useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";
import styleCss from "./index.module.scss";
const Task = (props) => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTaskList([
        {
          id: "61e6231200db3b596fc77f13",
          status: 4,
          statusDesc: "可领取",
          relatedContents: null,
          taskTime: null,
          userTaskTime: 0,
          taskType: 0,
          redPacketTaskType: 1,
          sbuRoomInfoRespList: null,
          videoInfoList: null,
          order: 1,
          completeStatus: 2,
        },
        {
          id: "61e65c5c00db3b596fc78135",
          status: 4,
          statusDesc: "可领取",
          relatedContents: [
            "test_20220113153844_TAmq",
            "test_20220113153558_aykL",
          ],
          taskTime: null,
          userTaskTime: 0,
          taskType: 0,
          redPacketTaskType: 8,
          sbuRoomInfoRespList: [
            {
              companyId: "5e3ba3c861c7eb534811dd1b",
              companyName: null,
              company: null,
              companyLogo: null,
              roomId: "test_20220113153844_TAmq",
              roomName: "2022宏观经济及市场前瞻",
              cover:
                "https://jravity-1253740179.file.myqcloud.com/images/bmcHLK6he1642059516964",
              status: 0,
              calendarPush: null,
              starttime: null,
              subscribeStatus: 1,
              taskLikeNum: null,
              inviteNum: null,
              countDownWatch: null,
              pstartTime: "2022-01-21 09:00:00",
              ptime: 1642726800000,
            },
            {
              companyId: "5e3ba3c861c7eb534811dd1b",
              companyName: null,
              company: null,
              companyLogo: null,
              roomId: "test_20220113153558_aykL",
              roomName: "虎虎生金蓄力向新",
              cover:
                "https://jravity-1253740179.file.myqcloud.com/images/IqBCDVesv1642059313924",
              status: 2,
              calendarPush: null,
              starttime: 1642294800000,
              subscribeStatus: 1,
              taskLikeNum: null,
              inviteNum: null,
              countDownWatch: null,
              pstartTime: "2022-01-17 09:00:00",
              ptime: null,
            },
          ],
          videoInfoList: null,
          order: 2,
          completeStatus: 1,
        },
        {
          id: "61e65c9900db3b596fc781a7",
          status: 3,
          statusDesc: "未完成",
          relatedContents: [
            "test_20220113153844_TAmq",
            "test_20220113153558_aykL",
          ],
          taskTime: 1,
          userTaskTime: 0,
          taskType: 1,
          redPacketTaskType: 3,
          sbuRoomInfoRespList: [
            {
              companyId: "5e3ba3c861c7eb534811dd1b",
              companyName: null,
              company: null,
              companyLogo: null,
              roomId: "test_20220113153844_TAmq",
              roomName: "2022宏观经济及市场前瞻",
              cover:
                "https://jravity-1253740179.file.myqcloud.com/images/bmcHLK6he1642059516964",
              status: 0,
              calendarPush: null,
              starttime: null,
              subscribeStatus: 1,
              taskLikeNum: null,
              inviteNum: null,
              countDownWatch: 0,
              pstartTime: "2022-01-21 09:00:00",
              ptime: 1642726800000,
            },
            {
              companyId: "5e3ba3c861c7eb534811dd1b",
              companyName: null,
              company: null,
              companyLogo: null,
              roomId: "test_20220113153558_aykL",
              roomName: "虎虎生金蓄力向新",
              cover:
                "https://jravity-1253740179.file.myqcloud.com/images/IqBCDVesv1642059313924",
              status: 2,
              calendarPush: null,
              starttime: 1642294800000,
              subscribeStatus: 1,
              taskLikeNum: null,
              inviteNum: null,
              countDownWatch: 0,
              pstartTime: "2022-01-17 09:00:00",
              ptime: null,
            },
          ],
          videoInfoList: null,
          order: 3,
          completeStatus: 0,
        },
      ]);
    }, 50);
  }, []);
  return (
    <div className={styleCss.wrapper}>
      {taskList.map((item) => {
        return <TaskItem key={item.id} detail={item}></TaskItem>;
      })}
    </div>
  );
};
export default memo(Task);
