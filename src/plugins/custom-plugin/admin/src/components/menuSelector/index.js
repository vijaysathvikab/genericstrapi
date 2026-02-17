import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { SingleSelect, SingleSelectOption } from "@strapi/design-system";

const strapiMenuSelector = ({
  description,
  disabled,
  error,
  intlLabel,
  name,
  onChange,
  placeholder,
  required,
  value,
}) => {
  const { formatMessage } = useIntl();
  const [selectOption, setSelectOption] = useState([]);

  useEffect(() => {
    fetchStrapiMenu().then((selectData) => {
      if (selectData) {
        setSelectOption(
          selectData.map((item) => {
            return {
              value: item?.id?.toString(),
              label: item?.attributes?.title,
            };
          })
        );
      }
    });
  }, []);

  return (
    <SingleSelect
      disabled={disabled}
      error={error}
      hint={description ? formatMessage(description) : ""}
      label={intlLabel ? formatMessage(intlLabel) : ""}
      name={name}
      onChange={(event) => {
        console.log(event);
        onChange({ target: { name, value: event, type: "string" } });
      }}
      placeholder={placeholder ? formatMessage(placeholder) : "Select a Menu"}
      required={required}
      value={value || ""}
    >
      <SingleSelectOption value="null" defaultChecked>
        {"None"}
      </SingleSelectOption>
      {selectOption.map((option, index) => {
        return (
          <SingleSelectOption value={option.value} key={index}>
            {option.label}
          </SingleSelectOption>
        );
      })}
    </SingleSelect>
  );
};

const fetchStrapiMenu = () => {
  return fetch("/api/menus", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  })
    .then((response) => response.json())
    .then((resp) => (resp.data ? resp.data : resp));
};

export default strapiMenuSelector;
