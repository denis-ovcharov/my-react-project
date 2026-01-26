import { useId } from "react";
import css from "./OrderForm.module.css";
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";

interface OrderData {
  username: string;
  email: string;
  delivery: string;
  deliveryTime: string;
  restrictions: string[];
}

const initialFormValues: OrderData = {
  username: "",
  email: "",
  delivery: "courier",
  deliveryTime: "",
  restrictions: [],
};
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(10, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .max(20, "Email is too long")
    .required("Email is ruquired"),
});

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = async (
    values: OrderData,
    actions: FormikHelpers<OrderData>,
  ) => {
    await new Promise((r) => setTimeout(r, 3000));
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialFormValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => {
        return (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Client info:</legend>
              <label htmlFor={`${fieldId}-username`} className={css.label}>
                Name
              </label>
              <Field type="text" name="username" id={`${fieldId}-username`} />
              <br />
              <ErrorMessage
                name="username"
                component="span"
                className={css.error}
              />
              <label htmlFor={`${fieldId}-email`} className={css.label}>
                Email
              </label>
              <Field type="email" name="email" id={`${fieldId}-email`} />
              <br />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Delivery method:</legend>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
              </label>
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Dietary restrictions:</legend>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
              </label>
              <label className={css.option}>
                <Field
                  type="checkbox"
                  name="restrictions"
                  value="gluten-free"
                />
                Gluten-free
              </label>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
              </label>
            </fieldset>

            <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
              Preferred delivery time
            </label>
            <Field
              as="select"
              name="deliveryTime"
              id={`${fieldId}-deliveryTime`}
              className={css.input}
            >
              <option value="">-- Choose delivery time --</option>
              <option value="morning">Morning (8:00-12:00)</option>
              <option value="afternoon">Afternoon (12:00-16:00)</option>
              <option value="evening">Evening (16:00-20:00)</option>
            </Field>

            <button type="submit" className={css.button}>
              {isSubmitting ? "Submitting..." : "Place order"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
