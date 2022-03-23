// Styling
// http://localhost:3000/isolated/exercise/06.tsx

import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div>small lightblue box</div>
const mediumBox = <div>medium pink box</div>
const largeBox = <div>large orange box</div>

// 💰 the sizelssColorlessBox should still be a box, just with no size or color
const sizelessColorlessBox = <div>sizeless colorless box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {sizelessColorlessBox}
    </div>
  )
}

export {App}
