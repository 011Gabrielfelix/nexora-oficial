import { Component, ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ink-950 px-5 text-center">
          <div>
            <h1 className="font-display text-2xl font-semibold text-white">Algo deu errado.</h1>
            <p className="mt-3 text-sm text-slate-400">Recarregue a página. Se o problema continuar, fale com a gente pelo WhatsApp.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
