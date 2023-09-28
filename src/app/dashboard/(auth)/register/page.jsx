import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const { name, email, password,confirmPassword } = formData;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword
        }),
      });
      
      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Username"
          required
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
        />
        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"} 
            name="password"
            placeholder="Password"
            required
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} 
            className={styles.passwordToggle}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className={styles.passwordContainer}>
        <input
          type={showConfirmPassword ? "text" : "password"} 
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          className={styles.input}
          value={formData.confirmPassword}
          onChange={handleChange}
        />  <button
        type="button"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
        className={styles.passwordToggle}
      >
        {showConfirmPassword ? "Hide" : "Show"}
      </button></div>
        <button className={styles.button}>Register</button>
        {error && <div className={styles.error}>{error}</div>}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
