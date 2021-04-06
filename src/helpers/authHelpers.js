export const isLogged = () => {
  if (localStorage.getItem("token")) {
    console.log("ol");
    return true;
  } else {
    return false;
  }
};
