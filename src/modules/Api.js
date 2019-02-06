import get from "lodash/get";
import set from "lodash/set";
import unset from "lodash/unset";
import { LOG_API_CALLS } from "../config/env";

class Api {
  constructor(id) {
    this.url = `https://api.jsonbin.io/b/${id}`;

    this.getAll = this.getAll.bind(this);
    this.setAll = this.setAll.bind(this);
  }

  request(endpoint, method, data) {
    if (LOG_API_CALLS) console.log("API -> call", { endpoint, method, data });

    return fetch(`${this.url}/${endpoint}`, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data && JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (LOG_API_CALLS) console.log("API -> success", res);

        return res;
      })
      .catch(e => {
        if (LOG_API_CALLS) console.log("API -> failed", e);

        throw e;
      });
  }

  getAll() {
    return this.request("latest", "get");
  }

  setAll(data) {
    return this.request("", "put", { _version: -1, ...data });
  }

  set(location, value) {
    return this.getAll().then(data => {
      const newData = set(data, location, value);

      return this.setAll(newData);
    });
  }

  get(location) {
    return this.getAll().then(data => get(data, location));
  }

  delete(location) {
    return this.getAll().then(data => {
      const newData = unset(data, location);

      return this.setAll(newData);
    });
  }
}

export default Api;
