import { Form, useLoaderData, useFetcher } from "react-router-dom";
import { getContact, updateContact } from '../routerex/contacts.js';

export async function loader({ params }) {
  const contact = await getContact( params.contactId );
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return contact;
}

export async function action({ request, params }) {
  let formData = await request.formData();
  return(
    updateContact(params.contactId, { favorite: formData.get("favorite") === "true" })
  );
}

export default function Contact() {
  const contact = useLoaderData();

  return (
    <div id="contact">
      <div>
        <img
          key={ contact.avatar }
          src={ contact.avatar || null }
          alt='avatar'/>
      </div>

      <div>
        <h1>
          { contact.first || contact.last ? (
            <>
              { contact.first } { contact.last }
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={ contact } />
        </h1>

        { contact.twitter && (
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/${ contact.twitter }`}
            >
              { contact.twitter }
            </a>
          </p>
        )}

        { contact.notes && <p>{contact.notes }</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={ (event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

// IMPORTANT: In any Form, method="post" will call the action()  (applies to fetcher.Form as well)
function Favorite({ contact }) {
  const fetcher = useFetcher();
  // yes, this is a `let` for later .. later meaning now when we add some Optimistic UI.
  let favorite = contact.favorite;
  // Optimistic UI: The fetcher knows the form data being submitted to the action, so it's available
  // to you on fetcher.formData. We'll use that to immediately update the star's state, even though
  // the network hasn't finished. If the update eventually fails, the UI will revert to the real data.
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }


  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={ favorite ? "false" : "true" }
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        { favorite ? "★" : "☆" }
      </button>
    </fetcher.Form>
  );
}

// Fake contact data removed from top of Contact()
//
// const contact = {
//   first: "Your",
//   last: "Name",
//   avatar: "https://placekitten.com/g/200/200",
//   twitter: "your_handle",
//   notes: "Some notes",
//   favorite: true,
// };
//

