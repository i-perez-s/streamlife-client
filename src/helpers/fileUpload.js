export const fileUpload = async (file) => {
  let token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file.file);
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/setUserPhoto`, {
    method: "POST",
    headers: {
      token: token,
    },
    body: formData,
  });

  const body = await resp.json();
  console.log(body);
  return body;
};
