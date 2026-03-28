import { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content">
          <div className="max-w-md mx-auto p-8 text-center">
            <h1 className="text-4xl montserrat-700 text-error mb-4">Oops!</h1>
            <p className="text-lg montserrat-400 mb-6">Something went wrong.</p>
            <p className="text-sm montserrat-300 text-base-content/60 mb-8">
              {this.state.error?.message}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-info montserrat-500"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
