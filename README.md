# GraphQL Goodreads

## Prerequisites

- [Node.js 10](https://nodejs.org/dist/latest-v10.x/)
- [Goodreads API key](https://www.goodreads.com/api/keys)

## Setup

To install project dependencies, from root directory run:

```shell
npm install
```

Create a `.env` file in root directory with Goodreads API key:

```
GOODREADS_KEY=<KEY>
```

## Run

To start project, from root directory run:

```shell
npm start
```

Access [GraphiQL](http://localhost:4000/graphql) web interface to run queries like:

```
{
  author(id: 346732) {
    name,
    books {
      title
    }
  }
}
```
