import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation } from 'react-router-dom';
import { getContacts, createContact } from '../routerex/contacts.js';

// Towards end of react router contact demo: Golbal Pending UI, useNavigation hook.
// https://reactrouter.com/en/main/hooks/use-navigation

// This LOADER is imported in index.jsx, where this Root component is referenced.
export async function loader({ request }) {
  const url = new URL(request.url);
  // IMPORTANT: Logic around the value of q and the usage of the search box.
  // When the search Form is submitted (hit enter within it) it issues a GET request and uses URL params.
  // ** When root first loads, q = null.  ** Hitting enter in an empty search box gives, q = '' (nothing in log).
  // This makes sense because the search Form is ONLY submitted via enter within it. BOTH values are falsy.
  // Filtering using matchsorter() is ONLY applied for a truthy q. This is the nice simple behavior we see.
  // BUT the search box does not work perfectly in all cases. TODO: Note here how it can be improved.
  // 1. If you click a 'found' item, the search resets. Must search again each time you select a found item.
  //      BUT, what makes it much worse is the search terms stay in the box, yet the search has been canceled and
  //      the full contact set is shown. A partial fix would be to have the box clear, but a proper fix would
  //      be for the search results to never change based on navigation, only on a manual reset in one of two
  //      ways of the search; clear and enter OR click the x to cancel search and reset.
  const q = url.searchParams.get("q");
  console.log('LOADER: root params q: ' + q);
  const contacts = await getContacts(q);
  console.log('LOADER: root contacts: ' + JSON.stringify( contacts, null,2 ));
  return { contacts };
}

// This ACTION is imported in index.jsx, where the router and its routes are defined.
// index.jsx is where the callbacks to action, loader are linked up with the routes.
// It is also where THIS root Route (specifically, Root) is referenced.
// IMPORTANT: We have two Forms on this page but this action() is ONLY called by the 'new' button Form.
// Only the 'New' button Form specifies method="post".
// TODO: Clarify how role="search" and type="search" work in the search Form and its input. Do these play any role
//   in functionality of submitting or the usage of GET vs POST? Is default to use GET when no method specified?
export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}


const Root = () => {
  const loaderData = useLoaderData();
  // console.log(JSON.stringify(loaderData));  // loaderData is just so we could see the full object returned.
  // But really, we know this came from the loader() above and from getContacts(). The format is the same.
  // CONCLUSION: useLoaderData() does not change the data returned by loader() at all.
  // Router calls loader() during navigation of routes.
  const { contacts } = loaderData;  // { contacts } is just destructuring.
  const navigation = useNavigation();

  return(
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>

          { contacts.length ? (
            <ul>
              { contacts.map( (contact) => (
                <li key={ contact.id }>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                  >
                    { contact.first || contact.last ? (
                      <>
                        { contact.first } { contact.last }
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    { contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}

        </nav>
      </div>
      <div
        id="detail"
        className={ navigation.state === "loading" ? "loading" : "" }
      >
        <Outlet />
      </div>
    </>
  );
};

export default Root;

