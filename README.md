# Wayke Pannellum React

Repository for @wayke-se/pannellum-react.

_Based on [farminf's panellum-react](https://github.com/farminf/pannellum-react) which implements [Matthew Petroff's](https://github.com/mpetroff/pannellum) viewer_

## Getting started

**Using npm**

```bash
npm install @wayke-se/pannellum-react
```

```js
import Pannellum from '@wayke-se/pannellum-react';

...
return (
  <Pannellum
    id="react-pannellum"
    panorama="./assets/360.jpg"
    style={{
      width: '2000px',
      height: '1000px',
    }}
  />
)
```

Try it out by cloning the repo
```bash
npm i
npm start
```
Open http://localhost:5000