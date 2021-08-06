import ContactForm from "../components/contact/contact-form";
import Head from 'next/head';
import { Fragment } from "react";

const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact Me </title>
                <meta name='description' content='Send me your messages' />
            </Head>
            <ContactForm />
        </Fragment>
            );
}

export default ContactPage;