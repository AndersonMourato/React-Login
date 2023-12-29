export function formValidation(form) {
    return (
      form.name?.length >= 3 &&
      form.email?.includes("@") &&
      form.email?.includes(".") &&
      form.password?.length >= 8 &&
      form.password?.match(/^[a-zA-Z0-9._]+$/)
    );
  }
  