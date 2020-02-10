import axios from "axios";
import errorController from "./errorController";

export async function get(url) {
  try {
    //if(process.env.NODE_ENV !== 'production') {
    console.log("Calling ApiRoute: [GET]  Async", url);
    //}
    const response = await axios.get(url);
    //if(process.env.NODE_ENV !== 'production') {
    // console.log("Response ApiRoute: [GET] Async", url, response.data);
    //}
    return response.data;
  } catch (errors) {
    //if(process.env.NODE_ENV !== 'production') {
    console.log("error response get", errors);
    //}
    if (
      errors.status === 401
      //  && errors.data &&
      // errors.data.code === "auth-error"
    ) {
      console.log("Error 401: ", errors);
      throw {
        code: "auth-error",
        description:
          "Authorization for resource failed for READ (url:" +
          errors.config.url +
          ")"
      };
    } else if (!errors.data) {
      //if(process.env.NODE_ENV !== 'production') {
      console.log("Error: ", `${errors.message}`);
      //}
      throw { code: errors.message };
    }
    if (!errorController(errors)) {
      throw errors.data;
    }
  }
}

export async function post(url, object) {
  try {
    //if(process.env.NODE_ENV !== 'production') {
    console.log("Calling ApiRoute: [POST] Async  ", url, " Data: ", object);
    //}
    const response = await axios.post(url, object);

    //if(process.env.NODE_ENV !== 'production') {
    console.log("Post Response Async =>", url, response.data);
    //}
    return response.data;
  } catch (errors) {
    //if(process.env.NODE_ENV !== 'production') {
    console.log("error response", errors);
    //}
    if (errors.status === 413) {
      throw { code: 413, description: "Request payload size exceeds" };
    } else if (!errors.data) {
      //if(process.env.NODE_ENV !== 'production') {
      console.log("Error: ", `${errors.message}`);
      //}
      throw { code: errors.message };
    }
    if (!errorController(errors)) {
      throw errors.data;
    }
    // return errors.data;
  }
}

export async function _post(url, object) {
  try {
    //if(process.env.NODE_ENV !== 'production') {
    console.log("Calling ApiRoute: [POST] Async", url, " Data: ", object);
    //}
    const response = await axios.post(url, object);
    //if(process.env.NODE_ENV !== 'production') {
    console.log("Post Response Async =>", url, response);
    //}
    return response;
  } catch (errors) {
    //if(process.env.NODE_ENV !== 'production') {
    console.log("error response", errors);
    //}
    if (errors.status === 413) {
      throw { code: 413, description: "Request payload size exceeds" };
    } else if (!errors.data) {
      //if(process.env.NODE_ENV !== 'production') {
      console.log("Error: ", `${errors.message}`);
      //}
      throw { code: errors.message };
    }
    if (!errorController(errors)) {
      throw errors.data;
    }
  }
}

export async function put(url, object) {
  try {
    //if(process.env.NODE_ENV !== 'production') {
    console.log("Calling ApiRoute: [PUT] Async ", url, " Data: ", object);
    //}
    const response = await axios.put(url, object);
    //if(process.env.NODE_ENV !== 'production') {
    console.log("Put Response Async =>", url, response.data);
    //}
    return response.data;
  } catch (errors) {
    console.log("error response", errors);
    if (errors.status === 413) {
      throw { code: 413, description: "Request payload size exceeds" };
    } else if (!errors.data) {
      //if(process.env.NODE_ENV !== 'production') {
      console.log("Error: ", `${errors.message}`);
      //}
      throw { code: errors.message };
    }
    if (!errorController(errors)) {
      throw errors.data;
    }
  }
}

export async function deleteItem(url, request = undefined) {
  try {
    //if(process.env.NODE_ENV !== 'production') {
    console.log("Calling ApiRoute: [DELETE]  Async", url, "body=>", request);
    //}
    const response = await axios.delete(url, { data: request });
    //if(process.env.NODE_ENV !== 'production') {
    console.log("Delete Response Async =>", url, response);
    //}
    return response.data;
  } catch (errors) {
    //if(process.env.NODE_ENV !== 'production') {
    console.log("error response", errors);
    //}
    if (!errors.data) {
      console.log("Error: ", `${errors.message}`);
      throw { code: errors.message };
    }
    if (!errorController(errors)) {
      throw errors.data;
    }
  }
}
