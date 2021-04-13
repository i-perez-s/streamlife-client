export const fileUpload = async (file, uid) => {
  const formData = new FormData();
  console.log(file);
  formData.append("upload_preset", "react-journal");
  formData.append("file", file.file);
  const resp = await fetch(
    `${process.env.REACT_APP_API_URL}/setUserPhoto/${uid}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const body = await resp.json();
  console.log(resp);
  return body;
};
