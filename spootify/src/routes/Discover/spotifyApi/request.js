import axios from "axios";
import queryString from "querystring";
import config from "../../../config";

const { spotifyApi } = config;

export default async function request(path, resourceType) {
  // The post method was used for the authorization process.
  const {
    data: { access_token: token },
  } = await axios.post(
    spotifyApi.authUrl,
    queryString.stringify({ grant_type: "client_credentials" }),
    {
      headers: {
        Authorization: `Basic ${btoa(
          `${spotifyApi.clientId}:${spotifyApi.clientSecret}`
        )}`,
      },
    }
  );

  // A request was sent to the API with the GET method.
  const res = await axios.get(
    `${spotifyApi.baseUrl}/browse/${path}?locale=en_US`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return res.data[resourceType].items;
}
