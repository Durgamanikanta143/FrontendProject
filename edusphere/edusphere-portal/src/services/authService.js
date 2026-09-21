import axios from "axios";

export const loginUser = async (email, password) => {

    await new Promise(resolve => setTimeout(resolve, 500));

    const users = [
        {
            id: 1,
            fullName: "Manikanta Student",
            email: "student@edusphere.com",
            password: "Student@123",
            role: "Student"
        },
        {
            id: 2,
            fullName: "Ravi Teacher",
            email: "teacher@edusphere.com",
            password: "Teacher@123",
            role: "Teacher"
        },
        {
            id: 3,
            fullName: "Admin User",
            email: "admin@edusphere.com",
            password: "Admin@123",
            role: "Admin"
        }
    ];

    const user = users.find(
        x =>
            x.email === email &&
            x.password === password
    );

    if (!user) {
        throw new Error("Invalid email or password");
    }

    return {
        success: true,
        message: "Login successful",
        user: {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            role: user.role
        }
    };
};