import { useState } from "react";
import "./Login.css";
import { loginUser } from "../services/authService";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Set error states for email and password validation
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
const handleSubmit = async (e) => {

    e.preventDefault();

    setEmailError("");
    
    setPasswordError("");

    let isValid = true;

    if (!email.trim()) {
        setEmailError("Please enter your email.");
        isValid = false;
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
        setEmailError("Please enter a valid email address.");
        isValid = false;
    }

    if (!password.trim()) {
        setPasswordError("Please enter your password.");
        isValid = false;
    }
    else if (password.length < 6) {
        setPasswordError(
            "Password must be at least 6 characters."
        );
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    try {

        setLoading(true);

        const result = await loginUser(email, password);

        console.log("Login response:", result);

        alert(result.message);

    }
    catch (error) {

        console.error("Login failed:", error);

        alert("Unable to login. Please try again.");

    }
    finally {

        setLoading(false);

    }
};
    return (
        <div className="login-page">

            {/* Animated Background */}
            <div className="background-shape shape-one"></div>
            <div className="background-shape shape-two"></div>
            <div className="background-shape shape-three"></div>


            <div className="login-card">

                {/* Brand Section */}

                <div className="brand-section">

                    <div className="brand-icon">
                        <span>🎓</span>
                    </div>

                    <div>
                        <h1>EduSphere</h1>
                        <p>Education Management Portal</p>
                    </div>

                </div>


                {/* Login Content */}

                <div className="login-content">

                    <div className="welcome-text">

                        <h2>Welcome back</h2>

                        <p>
                            Sign in to continue to your account
                        </p>

                    </div>


                    <form onSubmit={handleSubmit}>

                        {/* Email */}

                        <div className="input-group">

                            <label htmlFor="email">   Email or Username        </label>

                            <div className="input-wrapper">

                                <span className="input-icon"> ✉    </span>

                                <input
                                    id="email"
                                    type="text"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    autoComplete="username"
                                    required
                                />

                            </div>

                             {emailError && (
                                                    <span className="error-message">
                                                        {emailError}
                                                    </span>
                                                )}

                        </div>


                        {/* Password */}

                        <div className="input-group">

                            <div className="password-label">

                                <label htmlFor="password">
                                    Password
                                </label>

                                <a href="#">
                                    Forgot password?
                                </a>

                            </div>


                            <div className="input-wrapper">

                                <span className="input-icon">
                                    🔒
                                </span>

                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setPasswordError("");
                                    }}
                                    autoComplete="current-password"
                                    required
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>

                            </div>

                        </div>


                        {/* Remember Me */}

                        <div className="remember-row">

                            <label className="remember-label">

                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) =>
                                        setRememberMe(e.target.checked)
                                    }
                                />

                                <span>
                                    Remember me
                                </span>

                            </label>

                        </div>


                        {/* Login Button */}

                        <button
                            type="submit"
                            className="login-button"
                            disabled={loading}
                        >

                            {loading ? (
                                <>
                                    <span className="spinner"></span>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <span className="arrow">
                                        →
                                    </span>
                                </>
                            )}

                        </button>

                    </form>


                    {/* Divider */}

                    <div className="divider">
                        <span>OR</span>
                    </div>


                    {/* Google Login */}

                    <button
                        type="button"
                        className="google-button"
                    >

                        <span className="google-icon">
                            G
                        </span>

                        Continue with Google

                    </button>


                    {/* Portal Roles */}

                    <div className="portal-info">

                        <span>Student</span>
                        <span>Teacher</span>
                        <span>Admin</span>

                    </div>

                </div>


                {/* Footer */}

                <div className="login-footer">

                    © 2026 EduSphere · All rights reserved

                </div>

            </div>

        </div>
    );
}

export default Login;