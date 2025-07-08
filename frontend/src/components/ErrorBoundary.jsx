import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center px-6 text-center">
          

          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-600 mb-6 max-w-md">
            It looks like this section of the app encountered a problem. We're working on it — in
            the meantime, you can try refreshing the page.
          </p>

          <button
            onClick={this.handleReload}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;