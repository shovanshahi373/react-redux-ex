import { IRoomData } from "./types";

export const filterRoomData = (data: any): IRoomData[] => {
  return data.map((item: any) => {
    const { group, room, hotel } = item;
    const reqData: IRoomData = {} as IRoomData;
    reqData.roomName = room[0].roomName;
    reqData.roomType = room[0].roomType;
    reqData.groupName = group[0].groupName;
    reqData.hotelName = hotel[0].hotelName;
    reqData.travelStartDate = room[0].travelStartDate;
    reqData.travelEndDate = room[0].travelEndDate;
    reqData.hotelImage = hotel[0].hotelImage;
    reqData.hotelDescription = hotel[0].hotelDescription;
    reqData.remainingBalance = room[0].remainingBalance;
    reqData.roomStatus = room[0].roomStatus;
    return reqData;
  });
};
