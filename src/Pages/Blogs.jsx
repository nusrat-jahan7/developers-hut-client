import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const Blogs = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div>
        <Typography variant="h3" className="text-center text-gray-700 mt-6">
          Our Blogs
        </Typography>
        <Typography className="text-center text-gray-700 mt-4">
          Explore diverse job opportunities in one place, tailored for every
          skill set and career level.
        </Typography>
      </div>
      <div className="mt-10 max-w-4xl mx-auto">
        <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </AccordionHeader>
          <AccordionBody>
            <h1 className="text-xl font-semibold">Access Token: -</h1>
            <h1 className="text-lg font-semibold">1.Definition:</h1>
            <p>
              An access token is a credential used by the client to access
              specific resources on a server. It represents the authorization
              granted to the client and expires after a short period.{" "}
            </p>
            <h1 className="text-lg font-semibold">2.How it Works:</h1>
            <p>
              When a user logs in or authenticates, the server validates the
              credentials and issues an access token to the client. This token
              is then sent with each subsequent request to access protected
              resources on the server.
            </p>
            <h1 className="text-lg font-semibold">3.Lifespan:</h1>
            <p>
              Access tokens have a short lifespan, typically ranging from
              minutes to hours, for security reasons. If intercepted, their
              exposure time is limited.
            </p>
            <h1 className="text-xl font-semibold mt-3">Refresh Token:-</h1>
            <h1 className="text-lg font-semibold">1.Definition:</h1>
            <p>
              A refresh token is a credential used to obtain a new access token.
              It is issued to the client along with the access token.
            </p>
            <h1 className="text-lg font-semibold">2.How it Works:</h1>
            <p>
              When the access token expires, the client can use the refresh
              token to request a new access token without requiring the user to
              log in again. The refresh token is more long-lived than the access
              token.
            </p>
            <h1 className="text-lg font-semibold">3.Lifespan:</h1>
            <p>
              Refresh tokens have a longer lifespan compared to access tokens,
              often days or even weeks. However, they can typically only be used
              once per request.
            </p>
            <h1 className="text-xl font-semibold mt-3">
              Storage on Client-side:-
            </h1>
            <h1 className="text-lg font-semibold">1.Accesee Tokens:</h1>
            <p>
              Access tokens are sensitive data and should be stored securely.
              They are usually stored in memory (like JavaScript variables) and
              sent in the Authorization header of API requests. Storing them in
              HTTP cookies or local storage is not recommended due to security
              vulnerabilities.
            </p>
            <h1 className="text-lg font-semibold">2.Refresh Tokens:</h1>
            <p>
              Refresh tokens are even more sensitive as they can be used to
              obtain new access tokens. Therefore, they should be stored in a
              secure HTTP-only cookie. This helps protect them from XSS
              (Cross-Site Scripting) attacks because JavaScript running on a
              page cannot read HTTP-only cookies. Remember, security is
              paramount when handling authentication tokens. Always use HTTPS to
              encrypt data in transit, and avoid storing sensitive tokens in
              insecure locations on the client-side. Additionally, follow best
              practices and standards for your specific programming language or
              framework to ensure the security of your authentication system.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            What is express js? What is Nest JS?
          </AccordionHeader>
          <AccordionBody>
            <h1 className="text-xl font-semibold">Express Js:-</h1>
            <p>
              Express.js is a minimal and flexible Node.js web application
              framework that provides a robust set of features for web and
              mobile applications. It is the de facto standard server framework
              for Node.js. With a myriad of HTTP utility methods and middleware
              at your disposal, creating a robust API is quick and easy. It is
              widely used for building web applications and APIs with Node.js
              due to its simplicity and flexibility.
            </p>
            <h1 className="text-xl font-semibold mt-3">Nest Js:-</h1>
            <p>
              Nest.js is a progressive Node.js framework for building efficient,
              reliable, and scalable server-side applications. It uses modern
              JavaScript, is built with TypeScript (which adds optional static
              types), and combines elements of OOP (Object-Oriented
              Programming), FP (Functional Programming), and FRP (Functional
              Reactive Programming). Nest.js is designed to make the development
              of robust, scalable, and maintainable server-side applications
              significantly more accessible and enjoyable.
            </p>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Explaination of my code !
          </AccordionHeader>
          <AccordionBody>
            <h1 className="text-xl font-semibold">State Management:-</h1>
            <p>
              I use the useState hook to create a state variable searchField and
              its corresponding updater function setSearchField. This state
              variable will hold the value of the search field input.
            </p>
            <h1 className="text-xl font-semibold">Fetch Function:-</h1>
            <p>
              I have created a fetch function that makes an API call based on
              the searchField value. If searchField has a length (meaning there
              is some search input), it constructs a URL with the search query.
              If not, it fetches all jobs.
            </p>
            <h1 className="text-xl font-semibold">useQuery:-</h1>
            <p>
              You are using the useQuery hook from a data fetching library
              (probably React Query). This hook fetches the data based on the
              provided query key and query function. queryKey is an array used
              to identify a unique query. It depends on the searchField length.
              If there is a search query, it includes the search term in the key;
              otherwise, it fetches all jobs. queryFn specifies the function to
              execute when the query is triggered. In your case, it calls the
              fetch function, which makes the API call and returns the data.
              When the searchField state changes, the useQuery hook will
              automatically re-run, fetching new data based on the updated
              search query.
            </p>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
