import { Component, ReactNode } from 'react';
import { Root, createRoot } from 'react-dom/client';

class App extends Component<AppProps, AppState> {

  public $props: any;

  constructor(props: AppProps) {
    super(props);
    this.state = { clickCount: 0 };
  }

  private onClick = () => {
    const count = this.state.clickCount || 0;
    this.setState({ clickCount: count + 1});
  }

  public render(): ReactNode {
    return (
      <button className='btn btn-primary'
        type='button' onClick={this.onClick}>
        {!this.state.clickCount ? 'Hello, React !' : this.state.clickCount }
      </button>
    );
  }

}

interface AppProps { count: number; }

interface AppState { clickCount: number; }

createRoot(document.querySelector('#root') as HTMLElement).render(
    <App count={0} />
);
