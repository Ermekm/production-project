import React, { Suspense, type ReactNode } from 'react'
import { PageError } from 'widgets/PageError/ui/PageError'

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch (error: Error, errorInfo: React.ErrorInfo): void {
        // You can also log the error to an error reporting service
        console.error('Uncaught error:', error, errorInfo)
    }

    render (): ReactNode {
        if (this.state.hasError) {
        // You can render any custom fallback UI
            return <Suspense fallback=""><PageError/></Suspense>
        }

        return this.props.children
    }
}

export default ErrorBoundary
