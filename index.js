document.addEventListener("DOMContentLoaded", () => {
  const thirdPartyCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  };

  thirdPartyCookie("MAMAD_AD_USER_ID", "FMNKJD4D48D8E52", 52);
});
