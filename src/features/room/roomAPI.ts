import { httpclient } from "../../http";

export const getAPI = (roomIds: string) => {
  return httpclient
    .get("/api/rooms", {
      params: { roomIds },
    })
    .then((res) => res.data);
};
