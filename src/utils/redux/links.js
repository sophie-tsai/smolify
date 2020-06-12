import { getAllLinksByID } from "../api";

const linksState = {
  userLinks: [],
};

// get all links of one user
export function getUserLinks(userId) {
  return async (dispatch) => {
    const links = await getAllLinksByID(userId);

    dispatch({
      type: "GET_USER_LINKS",
      payload: links,
    });
  };
}

export default function linksReducer(links = linksState, action) {
  switch (action.type) {
    case "GET_USER_LINKS":
      return {
        ...links,
        ...action.payload,
      };
    default:
      return links;
  }
}
