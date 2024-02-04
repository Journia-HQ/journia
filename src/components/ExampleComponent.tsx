"use client"

// This is an example of how functional React components should look like.

// Notice that the file is in Pascal Case (which means the first letter of
// each word is capitalized). It's a convention to name files as the components
// inside and to name components in Pascal Case.

// This component will be a customizable button.


// This is a type declaration for our component's props
type ExampleComponentProps = {
  buttonText: string
  clickHandler: () => void
}

// This is component declaration. We use functional components, so each
// component is a function. This function is called when React needs to render
// some UI and the function should return the TSX representation of what we'll
// see in the browser.

// Declaration consists of:

// const ExampleComponent - a variable in which the component function is stored

// :React.FC - a type definition, explaining to typescript that ExampleComponent
// is storing a react functional component

// (...) => {...} - function itself

const ExampleComponent: React.FC<ExampleComponentProps> = ({ buttonText, clickHandler }) => {
  // You can insert any JS value inside the TSX syntax by using {}
  return (
    <button
      className="border-2 p-2" // This is styling using TailwindCSS
      onClick={clickHandler} // here onClick - is an attribute of an html button
    >
      {buttonText}
    </button>
  )
}

// This is another component, just to show how to use our ExampleComponent
// This component is used in the page.tsx file and you can see it in the browser.
const SomeComponent = () => {
  const textForButton = "Click me!"
  const functionForButton = () => {
    console.log("The button was clicked!")
  }

  // Notice how for component to work we need to pass it all the values
  // that are described in ExampleComponentProps
  return (
    <div>
      <ExampleComponent
        buttonText={textForButton}
        clickHandler={functionForButton}
      />
    </div>
  )
}

// This is an explicit export from the file, so SomeComponent can be used elsewhere
export default SomeComponent
