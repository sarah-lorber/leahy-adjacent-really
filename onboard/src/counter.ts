export function setupCounter(element: HTMLButtonElement) {
  let counter = 0 //why is this declared here? it doesn't have to be
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1)) //increment set here
  setCounter(0) // this number is starting number
}
