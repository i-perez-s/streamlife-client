// import { fetchSinToken } from "./fetch";

export const fileUpload = async (file, uid) => {
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file.file);
  console.log(uid);
  console.log(`${process.env.REACT_APP_API_URL}/setUserPhoto/${uid}`);
  const resp = await fetch(
    `${process.env.REACT_APP_API_URL}/setUserPhoto/${uid}`,
    {
      method: "POST",
      body: formData,
    }
  );

  console.log(await resp.json());
  // return ;
};
