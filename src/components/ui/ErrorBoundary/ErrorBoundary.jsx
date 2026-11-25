import { Component } from 'react'

import styles from './ErrorBoundary.module.css'

/**
 * React ErrorBoundary isolating lazy-loaded or interactive section failures.
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.fallback} role="alert">
          <div className={styles.card}>
            <h2>Something went wrong loading this section.</h2>
            <button
              type="button"
              className={styles.retryButton}
              onClick={this.handleRetry}
            >
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
