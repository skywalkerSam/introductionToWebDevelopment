
# 🚨 [Error Boundries](https://fireship.io/courses/react/basics-error-boundry/)
How do Error Boundaries work in React?

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('something went horribly wrong', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Fallback UI</h1>;
    }

    return this.props.children;
  }
}


// Example Usage
function Main() {
  return (
    <Dashboard>
      <ErrorBoundary>
        <Orders />
      </ErrorBoundary>
    </Dashboard>
  );
}

```


# Challenge
Create an `ErrorBoundary` class component that provides a **fallback UI** in the event an error occurs.



# NOTES:
- Keep it **Simple**, don't over-engineer things unnecessarily!
- Uni-directional data flow, **Parent to child** only, not vice-versa!
- Everytime the state changes, the component **re-renders**.
- **Prop drilling** isn't good in long-term but if you have to, `useContext()`
- Keep it minimal, too much data can lead to **performance issues**!
  

`NOTE`: **Expressions** and **Statements** are two different things, you can only use expressions inside JSX (**JavaScript Expression**)




#

## Until next time...

# ;)
