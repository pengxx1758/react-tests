/*
 * @Description: file content
 * @Version: v1.0.0
 * @Autor: sanjin
 * @Date: 2022-01-19 18:02:00
 * @LastEditors: sanjin
 * @LastEditTime: 2022-01-20 16:26:37
 */

// 红包任务类型
export enum RedPacketTaskType {
  FollowLive = 1, // 关注企业直播
  LiveInterview = 2, // 直播邀请
  LiveSee = 3, // 直播观看时长
  LiveLike = 4, // 直播点赞
  VideoInterview = 5, // 视频邀请
  VideoLike = 6, // 视频点赞
  LiveOrder = 8, // 直播预约
  SupportOld = 10, // 养老专区
}
export const RedPacketTaskTypeText = {
  [RedPacketTaskType.FollowLive]: '关注基金',
  [RedPacketTaskType.LiveInterview]: '直播邀请好友',
  [RedPacketTaskType.LiveSee]: '直播观看时长',
  [RedPacketTaskType.LiveLike]: '直播点赞次数',
  [RedPacketTaskType.VideoInterview]: '视频邀请好友',
  [RedPacketTaskType.VideoLike]: '视频点赞次数',
  [RedPacketTaskType.LiveOrder]: '直播间预约',
  [RedPacketTaskType.SupportOld]: '养老专区',
}

// 任务状态
export enum RedPacketStatus {
  UnComplete = 3, // 未完成
  Completed = 4, // 已完成
  Received = 5, // 已领取
  Empty = 6, // 已领完
}
export const RedStatusText = {
  [RedPacketStatus.UnComplete]: '未完成',
  [RedPacketStatus.Completed]: '已完成',
  [RedPacketStatus.Received]: '已领取',
  [RedPacketStatus.Empty]: '已领完',
}

// 任务完成状态
export enum CompleteStatus {
  UnFinished = 0, // 未完成
  Finished = 1, // 已完成
  CannotReceive = 2, // 不可领取
}

// 直播状态
export enum LiveStatus{
  UnStart=0, // 未开始
  Living=1,  // 直播中
  LiveOver=2,  // 已结束

  UnPay=3,  // 未支付
  Deleted=4,  // 删除
}


// 直播间
export interface LiveRoomItemProps {
  // 公司id
  companyId: string; 
  // 公司名称
  companyName: string; 
  // 公司名拼音
  company: string; 
  // 公司logo
  companyLogo: string; 
  // 房间id
  roomId: string; 
  // 直播间名称
  roomName: string; 
  // 封面url
  cover: string; 
  // 直播状态
  status: LiveStatus; 
  //是否推送到直播日历
  calendarPush: boolean; 
  // 预计开始时间
  pStartTime: string; 
  //预计开始时间
  pTime: string; 
  //实际开始时间
  starttime: string; 
  //预约状态 0：未预约，1已预约
  subscribeStatus: number; 
  //任务点赞数
  taskLikeNum: number; 
  //邀请人数
  inviteNum: number; 
}

// 视频
export interface VideoItemProps {
  // 视频id
  videoId: string;
  // 视频封面图
  videoCover: string;
  // 视频标题
  videoTitle: string;
  // 视频介绍（文字）
  videoIntro: string;
  // 公司LOGO
  companyLogo: string;
  // 公司名
  companyName: string;
  // 公司id
  companyId: string;
  // 讲师（可能为null）
  caster: string | null;
  //视频状态（1审核通过 2在审核中 3审核不通过 4视频已删除）
  status: number;
  // 视频地址
  videoUrl: string;
  // 视频时长（秒）
  videoDuration: number;
  //点赞次数
  likeNum: number;
  //视频id
  id: string;
  // 更新时间
  updateTime: string;
  // 标题
  name: string;
  // 任务点赞数
  taskLikeNum: number;
  //邀请人数
  inviteNum: number;
}

// 公共

export interface TaskItemProps {
  // ID
  id: string;
  // 红包状态
  status: RedPacketStatus;
  // 用户任务完成状态
  completeStatus: CompleteStatus;
  // 状态完成描述 已弃用
  statusDesc?: string;
  // 关联直播间或视频  养老专区链接数组第一位
  relatedContents: string[];
  // 任务需要的次数
  taskTime: number;
  // 用户已完成任务次数 已弃用
  userTaskTime: number;
  // 任务性质(必做，非必做)  已废除
  taskType: number;
  // 红包任务类型
  redPacketTaskType: RedPacketTaskType;
  // 任务的直播间列表
  sbuRoomInfoRespList?: LiveRoomItemProps[];
  // 任务的视频列表
  videoInfoList?: VideoItemProps[];
}
