import { Outlet, NavLink, useLoaderData, Form, redirect, useNavigation } from 'react-router-dom';
import { getContacts, createContact } from '../routerex/contacts.js';

// Towards end of react router contact demo: Golbal Pending UI, useNavigation hook.
// https://reactrouter.com/en/main/hooks/use-navigation

// This LOADER is imported in index.jsx, where this Root component is referenced.
export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

// So is this ACTION. index.jsx is where the router and its routes are defined.
// index.jsx is where the callbacks to action, loader are linked up with the routes.
// It is also where THIS root Route (specifically, Root) is referenced.
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
          <form id="search-form" role="search">
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
          </form>
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

