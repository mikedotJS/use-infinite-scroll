# use-infinite-scroll

![GitHub](https://img.shields.io/github/license/mikedotJS/use-infinite-scroll) ![GitHub package.json version](https://img.shields.io/github/package-json/v/mikedotJS/use-infinite-scroll)

A custom hook for implementing infinite scrolling in React applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install `use-infinite-scroll` using npm or yarn:

```bash
npm install @mikexrmn/use-infinite-scroll

# OR

yarn add @mikexrmn/use-infinite-scroll
```

## Usage

```javascript
import React from "react";
import useInfiniteScroll from "@mikexrmn/use-infinite-scroll";

function MyComponent() {
  const fetchData = async (page) => {
    // Replace this with your data fetching logic
  };

  const { data, loading } = useInfiniteScroll(fetchData);

  return <div>{/_ Render your data and loading indicator here _/}</div>;
}

export default MyComponent;
```

## API Reference

### `useInfiniteScroll(fetchDataFunction: (page: number) => Promise<any[]>): InfiniteScrollResult`

#### Parameters

- `fetchDataFunction`: A function that fetches data based on the current page number.

#### Returns

An object with the following properties:

- `data`: An array of data items.
- `loading`: A boolean indicating whether data is currently being loaded.

### `InfiniteScrollResult`

An object with the following properties:

- `data`: An array of data items.
- `loading`: A boolean indicating whether data is currently being loaded.

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the MIT License.
