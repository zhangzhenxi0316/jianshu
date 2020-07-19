import { fromJS } from "immutable";
import * as Types from "../../../constance";
const defauleStore = fromJS({
  topicList: [],
  news: [],
  recommendList: [],
  articleList: [],
  articlePage: 1,
  showScroll: false,
});
export default (state = defauleStore, action) => {
  switch (action.type) {
    case Types.GET_HOME:
      return state.merge({
        topicList: fromJS(action.value.topicList),
        news: fromJS(action.value.news),
        recommendList: fromJS(action.value.recommendList),
      });
    case Types.ADD_HOME_LIST:
      // return  state.set('articleList',state.get('articleList').concat(action.value))
      return state
        .set("news", state.get("news").concat(fromJS(action.value)))
        .set("articlePage", action.page);
    case Types.CHANGE_SHOW:
      return state.set("showScroll", true);
    case Types.CHANGE_DISAPPEAR:
      return state.set("showScroll", false);

    default:
      return state;
  }
};
