import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

function capitaliseFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const isPrinciple = data.type === "principles";
  let title = "Products";
  if (data.isAwsmJobOpeningsArchive) {
    title = "Jobs";
  }
  if (isPrinciple) {
    title = "Principles";
  }

  return (
    <Container>
      {/* Render a title. */}
      <Header>{title}</Header>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.isCategory && "Principle"}:{" "}
          <b>
            {capitaliseFirst(decode(state.source[data.taxonomy][data.id].name))}
          </b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* If the list is a AWSM Job career page, we render the introductory job posting text. */}
      {data.isAwsmJobOpeningsArchive && (
        <section className="section">
          <h3>We are always interested in hearing from talented people.</h3>
          <br />
          <p>
            {" "}
            You can send your application to us, with a suitable covering
            letter/email and a detailed CV by email to{" "}
            <a href="mailto:info@tarainstruments.com">
              info@tarainstruments.com
            </a>
            .{" "}
          </p>
          <p>
            Please make it clear in your application the type of role which
            interests you.{" "}
          </p>
          <p>
            We aim to contact individuals who have applied speculatively when a
            suitable role arises, but please don’t hesitate to apply again at a
            later date if you see a role you think is right for you.
          </p>
        </section>
      )}
      {/* Iterate over the items of the list. */}
      {data.isAwsmJobOpeningsArchive && (
        <section className="section job-listing">
          <div className="container">
            <div className="row">
              {/* Iterate over the items of the list. */}
              {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <Item key={item.id} item={item} />;
              })}
            </div>
          </div>
        </section>
      )}
      {!data.isAwsmJobOpeningsArchive && (
        <>
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // if (typeof item !== "undefined") {
            //   console.log("Item WHICH IS undefined: ");
            //   console.log(item);
            // }
            // Render one Item component for each one.
            // if (item.categories.include(typeToShow))
            return (
              <Item key={item.id} item={item} isPrinciples={isPrinciple} />
            );
            // else return null;
          })}
        </>
      )}

      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: 1200px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
  list-style: none;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
`;
