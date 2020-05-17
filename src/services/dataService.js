export const getModuleList = async () => {
  try {
    const url =
      "https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy";
    const myHeaders = new Headers();
    myHeaders.append("hk-access-token", "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f");
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: myHeaders
    };
    const response = await fetch(url, requestOptions);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const getChapterList = async moduleId => {
  try {
    const url = `https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy&moduleId=${moduleId}`;
    const myHeaders = new Headers();
    myHeaders.append("hk-access-token", "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f");
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: myHeaders
    };
    const response = await fetch(url, requestOptions);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export const getExperts = async moduleId => {
  try {
    const url = `https://stgapi.omnicuris.com/api/v3/courses/thyroid-in-pregnancy/experts`;
    const myHeaders = new Headers();
    myHeaders.append("hk-access-token", "89e684ac-7ade-4cd8-bbdf-419a92f4cc5f");
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: myHeaders
    };
    const response = await fetch(url, requestOptions);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
