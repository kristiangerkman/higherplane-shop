import React, { useState } from "react";
import { Form } from "remix";
import Button from "~/components/Button";
import InputField from "~/components/InputField";
import SpacedHeader from "~/components/SpacedHeader";

import type { FieldData } from "~/actions/handleFormSubmit";
import { handleFormSubmit } from "~/actions/handleFormSubmit";

export const loader = () => {
  return {}
};

export const action = async ({ request }:any) => {
  const body = await request.formData();
  const name = body.get("email");
  console.log(body)
  return { message: `Hello, ${name}` };
}

export default function Contact() {
  const fieldData = [
    {
      placeholder: "Type here...",
      label: "E-MAIL",
      id: "email",
      height: false,
      required: true,
    },
    {
      placeholder: "Type here...",
      label: "SUBJECT",
      id: "subject",
      height: false,
      required: true,
    },
    {
      placeholder: "Type here...",
      label: "MESSAGE",
      id: "message",
      height: true,
      required: true,
    }
  ]
  
  
  
  const fields = () => {
    const fields = fieldData.map((f) => {
      return (<React.Fragment key={f.id}><InputField placeholder={f.placeholder} label={f.label} id={f.id} height={f.height ? 't' : undefined} /></React.Fragment>)
    });
    return (<>{fields}</>)
  }
  // onSubmit={(e) => handleFormSubmit(e, fieldData)}
  return (
    <div className="pl-3 pr-3 mb-72">
    <SpacedHeader text="CONTACT US"/>
    <Form className="space-y-3 mb-5" method="post" action="/contact?index" replace >
    {fields()}
    <Button text="SEND" />
    </Form>
    </div>
    );
  }