import styles from "./FeedbackForm.module.css";

export default function FeedbackForm() {
  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="feedback"
      method="POST"
      action="/success"
    >
      <input type="hidden" name="form-name" value="feedback" />
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        className={styles["form-field"]}
        type="text"
        name="name"
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        className={styles["form-field"]}
        type="email"
        name="email"
        required
      />
      <label htmlFor="email">Country</label>
      <input
        id="country"
        className={styles["form-field"]}
        type="country"
        name="country"
        required
      />

      <label htmlFor="company">Company/Department/Agency</label>
      <input
        id="company"
        className={styles["form-field"]}
        type="company"
        name="company"
        required
      />

      <label htmlFor="designation">Designation</label>
      <input
        id="designation"
        className={styles["form-field"]}
        type="designation"
        name="desigantion"
        required
      />

      <label htmlFor="feedback">Message</label>
      <textarea
        id="feedback"
        className={styles["form-field"]}
        wrap="soft"
        name="feedback"
        required
      ></textarea>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
