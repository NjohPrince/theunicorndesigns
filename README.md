## TheUnicornDesigns

- Platform to showcase your products/ skills/designs

## Running Instructions

- Clone or download the repository
- Open the downloaded or cloned project on a code/text editor of your choice

- Create an account on the [GraphCMS Platform](https://graphcms.com/)
- Create a project
- Create the Schemas `Design, Categories and Author` and create the following fields/attributes:

```gql
  designs {
    title
    description
    slug
    author
    coverPhoto
    datePublished

  }
```

```gql
  authors {
    name
    avatar
  }
```

```gql
  categories {
    label
  }
```

- Create a relationship between Design and Author

- Create a relationship between Design and Category (PS: Make this two way)

- Under your project setting on the [GraphCMS Platform](https://graphcms.com/) migrate to the `API Access` tab
- Copy your content API URL and paste in the `.env.local` file within the root of the cloned/downloaded project.
  => Use the format `NEXT_PUBLIC_GRAPHCMS_URL="PASTE_API_URL_HERE"`

- Within the root directory of the project run `npm install`
- Then run `npm run dev` 
- Hurray 🎉🎉🎉 you should have your application running on `http://localhost:3000` 

## Technologies Used

- NextJS (React framework for production)
- ReactJS (JavaScript Library)
- GraphCMS (Content management and structuring)
- Graphql
- Graphql-request

## Why NextJS

Next.js is an open-source development framework built on top of Node.js
enabling React based web applications functionalities such as server-side
rendering and generating static websites.

### What NextJS Gives

- Rich user experience (easier and faster)
- Outstanding performance (also easier and faster)
- Rapid feature development

### CSS Modules (Preferred styling format for nextjs apps)

- Using CSS modules avoid namespace collision for CSS classes
- You can use the same CSS class in multiple CSS files
- You can confidently update any CSS file without worrying about affecting other pages
- Using CSS Modules generates random CSS classes when displayed in the browser

## Why GraphCMS

- GraphCMS is the ultimate content platform that enables you to deliver ambitious applications at scale, API first, using your preferred frameworks.
- Build your production-ready Content API within minutes.

  => [Read More Here](https://graphcms.com/)

## GraphQL

- GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

  => [Read More Here](https://graphql.org/)

## graphql-request

- graphql-request is the most minimal and simplest to use GraphQL client.

## Use Cases of This Application

- Blog Post
- News Feeds
- Showcasing your skills and works
- Company products showcasing
- Grouping chat messages by time sent and target authors of threads (tracking and monitoring messages)
