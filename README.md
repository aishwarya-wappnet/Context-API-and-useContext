# Context-API-and-useContext-and-useRef

## Prop Drilling

![image](https://user-images.githubusercontent.com/123728432/221525918-cba825ee-24ce-4d91-986a-e391a7c97c3e.png)

Components in react can be passed some parameters. These parameters are generally named props. There is no hard and fast rule that they should be mentioned as props, but it is convenient to use the same convention.
Prop drilling is basically a situation where the same data is being sent at almost every level due to requirements in the final level. Here data needs to be sent form src/useContext/ComA to src/useContext/ComC. To do this, 
we pass parameter or prop called 'name' in ComA which is then passed to ComB and ultimately to ComC.

The problem with prop drilling is that whenever the data from the parent component will ne needed, it would have to come from each level, regardless of the fact that it is not needed there and is simply needed in the last.

A better alternative to this is using useContext hook. The useContext hook is based on Context API and works on the mechanism of Provider and Consumer. Provider needs to wrap components inside Provider Components in which data have to be consumed. Then in those components, using the useContext hook that data needs to be consumed.

## Context API and useContext()
Reacts useContext hook makes it easy to pass data throughout your app without manually passing props down the tree. Its a simple alternative to Redux.
- context: create a context.
- provider: a medium to provide context from one component to the component where the context is required.
- consumer: to get the context, we have a consumer.

Here, src/CompoC gets the context from parent src/CompoA using context API.

These three make up the context API. But the problem with the context API is that the, consumer part of the context API is too much lengthy/complicated. So when the consumer part of the context API is reduced, we have something called useContext.
In useContext(), we have the same context, same provider but the consumer is reduced. Instead of consumer, useContext is used.
Here, src/CompoB gets the context from parent src/CompoA using useContext.


