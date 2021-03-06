import React, { useState } from "react";
import LoadingContext from "../contexts/loading.context";

const LoadingProvider = ({ children }) => {
  /**
   * Loading state/controls
   */

  const showLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loading: false
      };
    });
  };

  const hideLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loading: true
      };
    });
  };

  const loadingState = {
    loading: false,
    showLoading,
    hideLoading
  };

  const [state, toggleLoading] = useState(loadingState);

  return (
    <LoadingContext.Provider value={state}>{children}</LoadingContext.Provider>
  );
};

export default LoadingProvider;
