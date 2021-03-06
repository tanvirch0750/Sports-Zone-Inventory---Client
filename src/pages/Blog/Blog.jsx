import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section className="blogs">
      <div className="blogs-inner container">
        <article className="blog">
          <h2>What is the difference between Javascript and Node Js?</h2>
          <p>
            Javascript is a programming language, Node Js is a javascript
            runtime. Javascript is used for client side, Node js is used for
            server side. Javascript can run run in any browser with support of
            javascript engine, Node js have v8 engine, that runs and parses
            javascript code. Javascript is mainly used for frontend of a
            application, Node Js used for backend of a application. Javascript
            can add HTML tags, can perform DOM related functionality but Node js
            does not have this functionality.
          </p>
        </article>
        <article className="blog">
          <h2>When should you use Node Js and When should you use Mongodb?</h2>
          <p>
            NodeJS and MongoDB are two different technologies. MonogDB is a
            database system that allows us to efficiently store documents in a
            database and perform operations like data updates or searching
            documents based on certain criteria while Node Js is a javascript
            runtime. So we use Mongodb when we need NoSQL database program and
            build highly scalable application. We use node js for fast and
            scalable network applications. Application that needs non-blocking
            I/O model and lightweight and efficient.
          </p>
        </article>
        <article className="blog">
          <h2>What is the difference between sql and nosql database?</h2>
          <p>
            Sql database means relational data mangament system while nosql
            database means non-relational database system. Sql database is
            needed when a database need complex queries, nosql database not best
            suited for that needs complex queries. Sql database veritcally
            scalabe and nosql database horizontally scalable. Sql database table
            based but nosql database document based. Sql database have
            predefined schema while nosql database have dynamic schema.
          </p>
        </article>
        <article className="blog">
          <h2>What is the porpose of JWT and how does it work?</h2>
          <p>
            JSON Web Token is a standard for creating access tokens that allow
            clients and servers to share security information. It operates in a
            very straightforward and efficient way. Clients log in or sign up
            using their email address/username and password. A token is
            generated by the server for the client. The token is saved by the
            client in either a browser cookie or local storage. When a request
            is made by the client, a copy of the token is sent to the server for
            authentication. Before granting access or authorization, the server
            verifies the Json Web Token signature. If everything is correct, the
            server will respond to the client's request.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Blog;
