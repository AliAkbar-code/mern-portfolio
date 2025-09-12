import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate your backend API or email service
    console.log('Contact form data:', formData);
    setSubmitted(true);
  };

  return (
    <main style={styles.container}>
      <h1>Contact Me</h1>
      {submitted ? (
        <p>Thank you for reaching out! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ ...styles.input, height: '100px' }}
            />
          </label>
          <button type="submit" style={styles.button}>
            Send
          </button>
        </form>
      )}
    </main>
  );
};

const styles = {
  container: {
    padding: '3rem 2rem',
    maxWidth: '600px',
    margin: '0 auto',
    minHeight: '80vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    marginTop: '0.3rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    resize: 'vertical',
  },
  button: {
    padding: '0.7rem',
    backgroundColor: '#61dafb',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default Contact;
