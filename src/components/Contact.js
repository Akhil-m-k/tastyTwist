const Contact = ()=>{
    return (
<section className="bg-white  pt-28 min-h-screen ">
<iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290568.5387146397!2d76.14943971072084!3d9.983134465237178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e1!3m2!1sen!2sin!4v1709828436932!5m2!1sen!2sin"  height="450"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" className="shadow-sm  border border-gray-400 text-gray-900 text-sm rounded-lg p-3 w-full " placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-400 shadow-sm " placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-400 " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-600 sm:w-fit  focus:outline-none ">Send message</button>
      </form>
  </div>
</section>
    )
}

export default Contact;