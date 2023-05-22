import { redirect } from "react-router-dom";
import { createContact, getContacts } from "../contacts.js";

export async function loader({ params }) {
    const contacts = await getContacts(params.contactId);
    return { contacts };
}

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`)
}