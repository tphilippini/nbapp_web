import React, { useState, useContext } from "react";
// import Validator from 'validator';
import { FormattedMessage } from "react-intl";

import UserContext from "../../../stores/contexts/user.context";
import { patch } from "../../../stores/actions/user.action";

import Field from "../../../components/forms/Field.component";
import Label from "../../../components/forms/Label.component";
import Input from "../../../components/forms/Input.component";
import Help from "../../../components/forms/Help.component";
import Button from "../../../components/buttons/Button.component";

import Columns from "../../elements/Columns.component";
import Column from "../../elements/Column.component";
import Message from "../../elements/Message.component";

const AccountProfileForm = () => {
  const { user, setUser } = useContext(UserContext);

  const [profile, setProfile] = useState(user);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate(profile);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setLoading(true);
      const result = await patch(profile, "update");
      setLoading(false);
      if (result?.email) {
        setMessage({
          text: "Your account has been modified with success",
          type: "success",
        });
        setUser(result);
        setTimeout(() => {
          setMessage({});
        }, 1000);
      } else {
        setErrors(result);
        setTimeout(() => {
          setErrors({});
        }, 2000);
      }
    }
  };

  const validate = (data) => {
    const err = {};
    // if (!Validator.isEmail(data.email)) err.email = 'This email is invalid';
    if (!data.firstName) err.firstName = "firstName is mandatory";
    if (!data.lastName) err.lastName = "lastName is mandatory";
    if (!data.alias) err.alias = "Alias is mandatory";
    return err;
  };

  return (
    <form onSubmit={onSubmit}>
      {errors.message && <Message danger>{errors.message}</Message>}

      {message.text && (
        <Message className={`is-${message.type ? message.type : ""}`}>
          {message.text}
        </Message>
      )}

      <Field>
        <Label htmlFor="alias">
          <FormattedMessage id="account.alias" default="username" />
        </Label>
        <Input
          id="alias"
          name="alias"
          placeholder="e.g. alexS"
          className={`${errors.alias ? "is-danger" : ""}`}
          value={profile.alias}
          onChange={onChange}
        ></Input>
        {errors.alias && <Help className="is-danger">{errors.alias}</Help>}
      </Field>

      <Field>
        <Label htmlFor="firstName">
          <FormattedMessage id="account.firstName" default="firstName" />
        </Label>
        <Input
          id="firstName"
          name="firstName"
          placeholder="e.g. Alex"
          className={`${errors.firstName ? "is-danger" : ""}`}
          value={profile.firstName}
          onChange={onChange}
        ></Input>
        {errors.firstName && (
          <Help className="is-danger">{errors.firstName}</Help>
        )}
      </Field>

      <Field>
        <Label htmlFor="lastName">
          <FormattedMessage id="account.lastName" default="lastName" />
        </Label>
        <Input
          id="lastName"
          name="lastName"
          placeholder="e.g. Smith"
          className={`${errors.lastName ? "is-danger" : ""}`}
          value={profile.lastName}
          onChange={onChange}
        ></Input>
        {errors.lastName && (
          <Help className="is-danger">{errors.lastName}</Help>
        )}
      </Field>

      {/* <Field>
        <Label htmlFor="email">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="mail"
          placeholder="e.g. alexsmith@gmail.com"
          className={`${errors.email ? "is-danger" : ""}`}
          value={profile.email}
          onChange={onChange}
        ></Input>
        {errors.email && (
          <Help className="is-danger">{errors.email}</Help>
        )}
      </Field> */}

      <Columns>
        <Column>
          <Button
            primary="true"
            className={`is-pulled-right ${loading ? "is-loading" : ""}`}
          >
            <FormattedMessage id="utils.apply" default="Apply" />
          </Button>
        </Column>
      </Columns>
    </form>
  );
};

export default AccountProfileForm;
