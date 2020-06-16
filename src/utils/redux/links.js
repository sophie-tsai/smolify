import { getAllLinksByID, deleteLinkByID, addALink } from "../api";

const linksState = {
  userLinks: [],
  totalLinks: 0,
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

// delete a specific link
export function deleteLink(linkID) {
  return async (dispatch) => {
    await deleteLinkByID(linkID);

    dispatch({
      type: "DELETE_LINK",
      payload: linkID,
    });
  };
}

// add link
export function addLink(link, userID) {
  return async (dispatch) => {
    const linkObj = await addALink(link, userID);

    dispatch({
      type: "ADD_LINK",
      payload: linkObj,
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
    case "DELETE_LINK":
      const updatedArr = links.userLinks.filter(
        (element) => element._id !== action.payload
      );

      return {
        userLinks: updatedArr,
        totalLinks: links.totalLinks - 1,
      };

    case "ADD_LINK":
      return {
        userLinks: [action.payload, ...links.userLinks],
        totalLinks: links.totalLinks + 1,
      };
    default:
      return links;
  }
}
