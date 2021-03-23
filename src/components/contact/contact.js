import React from "react"
import Header from "../Heading"
import "./contact.css"

const ContactPage = () => {
  return (
    <div className="contact_wraper">
      <div className="container">
        <Header
          colClass="col-12"
          title="H1 Title"
          description="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
        />
        <div className="row">
          <div className="col-12">
            <form action="#">
              <label htmlFor="emailid">
                Your email address <span>*</span>
              </label>
              <input id="emailid" type="email" />

              <label htmlFor="subjectid">
                Subject<span>*</span>
              </label>
              <input id="subjectid" type="text" />

              <label htmlFor="discription">
                Description<span>*</span>
              </label>
              <textarea id="discriptionid"></textarea>

              <label htmlFor="attach" className="drop_zone__prompt">
                Attachments
              </label>
              <div className="drop-zone">
                <span className="drop-zone__prompt">
                  <span className="add-file">Add file</span> or drop files here
                </span>
                <input type="file" name="myFile" className="drop-zone__input" />
              </div>
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
