// Form Validation
export const validate = (schema, object, _setIsValid, _setFormErrors) => {
  const { error, value } = schema.validate(object, {
    abortEarly: false,
  });
  if (error) {
    const arr = [];
    error.details.map(({ context, message }) =>
      arr.push({ label: context.label, message: message })
    );
    _setIsValid(false);
    _setFormErrors(arr);
  } else {
    console.log(value);
    _setFormErrors([]);
    _setIsValid(true);
  }
};
