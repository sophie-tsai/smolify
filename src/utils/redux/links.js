import { getAllLinksByID, deleteLinkByID } from "../api";

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

export function deleteLink(linkID) {
  return async (dispatch) => {
    const deleted = await deleteLinkByID(linkID);
    console.log(deleted);
    dispatch({
      type: "DELETE_LINK",
      payload: linkID,
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
      const updatedTotal = links.totalLinks - 1;
      console.log("new arr", updatedArr);
      return {
        totalLinks: updatedTotal,
        userLinks: updatedArr,
      };
    default:
      return links;
  }
}
