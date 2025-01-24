# Chatter
Real time chat that supports text and images(under 4MB), as well as account creation and log in, JWT authentication, powered by Socket.io.

**Link to project:** https://chatter-app-1hc0.onrender.com/

## How It's Made:

**Tech used:** Vite React.js, JavaScript, TailwindCSS, Node.js, Express, Socket.io MongoDB

Started with a bare bones websocket implementation through an HTML document, then gradually built up to using a framework to create a more dynamic application. Through reusable themes given by daisyui, and authentication using JWT to verify users and bcrypt to salt passwords there is an interactive user interface that safely handles user information. Connected through axios for cross origin resource sharing, performs asynchronous requests to a MongoDB database to dynamically display messages, users, and their state. Schema written using Mongoose to facilitate a more seamless integration.

## Optimizations:

Most optimizations for this I pondered on after the fact, however generally this is a fun use case in my opinion for a language such as Rust which offers memory safety, type safety, as well as highly performant to offer a more robust solution for higher frequency requests on the backend. TypeScript would also have been an option, as it's also a language that supports heterogenous types well however I believe even with the tradeoff of development time in this circumstance, learning to use Rust for this problem is probably worth it.

## Lessons Learned:

The most glaring lesson I learned quickly was how big images, and videos are in terms of data, especially in circumstances where input to the data store can compound exponentially, as well as thinking of ways to optimize the flow of data from one point of the application to another to save on resources. Probably one of the more thought provoking projects I've worked on and glad I took the time to play with the websocket protocol before implementing the socket.io framework to handle the connection to have a better picture of its underpinnings.
