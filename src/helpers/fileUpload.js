import { fetchConToken } from "./fetch";

export const fileUpload = async (file, uid) => {
  const formData = new FormData();

  formData.append("upload_preset", "react-journal");
  formData.append("file", file);
  const resp = await fetchConToken(`setUserPhoto/${uid}`, formData, "POST");
  const body = await resp.json();
  return body;
};
