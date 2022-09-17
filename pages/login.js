const Login = () => {
  return (
    <div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button>Log In</button>
      </div>
    </div>
  );
};

export default Login;
