## Quick start

After creating an account with PlanetScale, you'll need to create a new database and retrieve the `DATABASE_URL`. Optionally, you can use Vercel integration, which will add the `DATABASE_URL` to the environment variables for your project.

This is the provided `.env.local.example` file, which you'll want to use to create your own `.env.local` file:

```
# https://vercel.com/integrations/planetscale
DATABASE_URL=
```

Next, inside PlanetScale, create a users table based on the schema defined in this repository.

```
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255),
  `username` varchar(255),
  PRIMARY KEY (`id`)
);
```

Insert a row for testing:

```
INSERT INTO `users` (`id`, `email`, `name`, `username`) VALUES (1, 'me@site.com', 'Me', 'username');
```

Finally, run the following commands to start the development server:

```
pnpm install
pnpm dev
```

You should now be able to access the application at http://localhost:3000.

## Overview

This is project uses the following stack:

- Framework - [Next.js 13](https://nextjs.org/13)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [NextAuth.js](https://next-auth.js.org)
- Database - [PlanetScale](https://planetscale.com)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Tremor](https://www.tremor.so)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Linting - [ESLint](https://eslint.org)
- Formatting - [Prettier](https://prettier.io)

This template uses the new Next.js App Router. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.

