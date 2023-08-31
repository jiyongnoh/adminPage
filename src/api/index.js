export const loginAPI = async (url, post) => {
  console.log(url, post);
  try {
    const res = await fetch(`${url}/login`, {
      method: "POST",
      // content-type을 명시하지 않으면 json 파일인지 인식하지 못함
      headers: {
        "Content-Type": "application/json",
        // Authorization: document.cookies.accessToken,
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
    console.log(res);
    return res.data === "Login Success" ? true : false;
  } catch (err) {
    throw err;
  }
};

export const dupleCheckAPI = async (url, post) => {
  console.log(url, post);
  try {
    const res = await fetch(`${url}/signup/duplecheck`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
    console.log(res);
    return res.data === "Success" ? true : false;
  } catch (err) {
    throw err;
  }
};

export const signupAPI = async (url, post) => {
  console.log(url, post);
  try {
    const res = await fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
    console.log(res);
    return res.data === "Success" ? true : false;
  } catch (err) {
    throw err;
  }
};
