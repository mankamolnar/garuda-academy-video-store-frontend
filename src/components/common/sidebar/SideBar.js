import React from "react";
import { connect } from "react-redux";
import SideButton from "./SideButton";
import * as CategoryActions from "./../../../redux/actions/CategoryActions";

class SideBar extends React.Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props._getCategories();
    } else {
      const token = this.props.token.token.jwt;
      this.props._getCategoriesWithPurchases(token, 1);
    }
    
  }

  render() {
    let categories = [];

    if (!this.props.isLoggedIn && (!this.props.categoriesWithPurchases.fetched || this.props.categoriesWithPurchases.error)) {
      categories = this.props.categories.categories.map((element) => (
        <SideButton key={"side-bar-category" + element.id} isCommercial={element.isCommercial} cid={element.id}>
          {element.name}
        </SideButton>
      ));
    } else {
      categories = this.props.categoriesWithPurchases.categories.map((element) => (
        <SideButton key={"side-bar-category" + element.id} isCommercial={element.isCommercial} isPurchased={element.isPurchased} cid={element.id}>
          {element.name}
        </SideButton>
      ));
    }

    return <div className="btn-group-vertical w-100">
      {categories}
    </div>
  }
}

const selector = (store) => {
  return {
    token: store.token,
    isLoggedIn: store.token.fetched && !store.token.error,
    categories: store.categories,
    categoriesWithPurchases: store.categoriesWithPurchases
  };
}

const dispatcher = (dispatch) => ({
  _getCategories: (...args) => dispatch(CategoryActions.getCategories(...args)),
  _getCategoriesWithPurchases: (...args) => dispatch(CategoryActions.getCategoriesWithPurchases(...args))
});

export default connect(selector, dispatcher)(SideBar);
