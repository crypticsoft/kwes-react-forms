# KWES Forms

[![Generic badge](https://img.shields.io/badge/development-v0.2.0-<COLOR>.svg)](https://shields.io/)

### What is KWES React Forms?
This is a dynamic form library that extends the [kwesforms.com](https://kwesforms.com/docs/v2/form-components) form components. Allowing you to use a simple data object or JSON configuration to render field groups and columns.

### Why use this library?
_You can go ahead and generate static forms manually but who wants to do that?_
_You can also spend time looking at the dozen of JS libraries that handle all of the validation and rendering aspects, but have fun with that too._

Or you can just let `Kwesforms`` handle the typical form validation and respones. That's what inspired this library is to create forms without the validation hassle. The library has since been extended to allow for a custom form action and submit handler (function) so it can be used more generically and fallback to built-in browser validation.

[Kwesforms](https://kwesforms.com/pricing) does have some additional customization features with their paid plan(s) for showing / hiding fields. This library really is focused on common use-cases and might be best served for those or as a starting point to generate forms you can extend further, if you needed to with their paid plans.

![Screenshot](./screenshot.png?raw=true 'Form Demo')

### @TODO items:
[] Minify steps for css assets to reduce bundle size

[] MSW mocks with `setupTests` (restore when ready)

[] Installation instructions for how to embed form(s) using React (esm / dist)

[] Include existing unit tests and look at removing the `size` data or making it an optional customization from the `fields.groups[]`. _Columns should be automatic but sometimes fine-grained control is warranted._

[] TBD: Consider the optional dependency for `kwesforms` if the form action is customized. (_Is this kind of support even a good idea, in general?_)

  - _Can this be excluded entirely by using a dynamic import?_ (see NPM `peerDependenies` vs [`optionalPeerDependencies`](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#optionaldependencies)))

## Features
[] [Custom Events](https://kwesforms.com/docs/v2/custom-events) - tbd: _Look at adding one in the submission handler?_
[] How to setup variant input sizes for `small` `medium` or `large`? ([see bulma Form docs](https://bulma.io/documentation/form/general/)). Possibly allowing for the form class to include `is-small` and extend the `input` classes, accordingly. [(see sizes)](https://bulma.io/documentation/utilities/control-mixins/#sizes)
  - `is-rounded` - would round the input fields but might need a border-radius default to be customized.
[] `Horizontal form` - variation class `is-horizontal` on the `field` container


### "Starter Plan" features (TBD)

[] [Multi-step forms](https://kwesforms.com/docs/v2/multistep-forms)\
[] [Field Type: Date picker](https://kwesforms.com/docs/v2/datepicker)
[] After Submission :: ["Custom Messages"](https://kwesforms.com/docs/v2/form-messages)
[] [Webhooks](https://kwesforms.com/docs/v2/webhooks)
[] [Repeater Fields](https://kwesforms.com/docs/v2/repeater-fields)

## Form Setup

- In development, use `test` mode and set your local env file.
- The form `id` from the form configuration is what will set the form action.
- `No-Validate` - kwes has built-in field validation, this disables native

## Dynamic Fields

- Hidden fields can be dynamically added to the form and set by using the `data-presets` attribute\
- Form configuration (JSON Endpoint) is defined by using the `data-location` attribute
- _Supported field types_:

  - `text`
  - `textArea`
  - `select`
  - `checkbox`
  - `checkboxGroup`
  - `password`
  - `radio`
  - `email`
  - `hidden`
  - `tel` - phone-specific input with `pattern` capabilities
  - `range` - simple generic
  - `number` - simple generic
  - `date` - simple generic
  - `time` - simple generic but does have some basic validation (title) based on min/max values
  - `datetime-local` - better for date+time scheduling and allows for `min` / `max` dateLocale strings
    - _Consider replacing this with something like [`react-datepicker`](https://reactdatepicker.com/#example-custom-time-class-name)_
  - `datepicker` - renders a styled calendar when `kwesforms` is initialized
  - `file` (req's Starter Plan for file uploads)
  - `cc-number` _(TBD: Starter Plan : Credit card fields)_

- **[💡Tip:]** _You can create a custom field type, then just include it with the interface `Field` type(s) ([see `./src/types/Field.ts`](./src/types/Field.ts))

```HTML
<div
  id="app"
  data-form-id="L6C4A1tTGJgxfefI6vtX"
  data-location="/form01.json"
  data-presets='[{"name": "Tester"},{"lname": "Jim"}]'
></div>
```
** please note ** The `data-form-id` and `data-location` attributes are required. You can simply add multiple div instances to embed multiple forms on the page.

## JSON Configuration
* "Starter Plan" * is needed for the Success & Error Messaging and add'l features.

- Basic Example:

```JSON
{
  "id": "SWXrdEPodyOKj9vXYmwU",
  "title": "Welcome!",
  "subTitle": "Please fill out the form below:",
  "disclaimer": "When you agree to these terms, you agree to allow us to contact you via email.",

  "submission": {
    "button": "Submit",
    "success": "Your form has been submitted successfully.",
    "error": "Opps! Your form has errors. Please check the form and try again."
  },

  "fields": [
    {
      "type": "text",
      "name": "first_name",
      "rules": "required",
      "label": "First Name"
    },
    {
      "type": "select",
      "name": "city",
      "rules": "required",
      "label": "Your City",
      "defaultOption": { "Select One": "" },
      "options": { "Buckeye": "Buckeye", "Avondale": "Avondale" }
    },
    {
      "type": "checkbox",
      "name": "terms",
      "rules": "accepted",
      "label": "I agree to the terms and conditions."
    }
  ]
}
```

## Field Groups

In order to use responsive columns, you can wrap the fields with a `group` array and specify a `size`. These can be interchangeably used with standard `field` definitions.

With the example below, replace `{column-size}` with the column number you want to use. ([see the bulma 12-column grid system](https://bulma.io/documentation/columns/sizes/#12-columns-system))

```JSON
{
  ...
  "fields": [
    "group": [
        {
          "size": {column-size},
          "field": {...}
        },
        ...
    ]
  ]
{
```

**[ 💡 Tip: ]** Try and include your form configurations (JSON) files locally and serve them from the same domain. (see `dist/public paths`)


## Form Examples

`./public` ~ Here are some form examples to get you started.
