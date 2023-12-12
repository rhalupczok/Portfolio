export const appShotsIMG = [
    `app_shot_1.png`,
    `app_shot_2.png`,
    `app_shot_3.png`,
    `app_shot_4.png`,
    `app_shot_5.png`,
    `app_shot_6.png`,
];

export const techSectionData = [
    {
        section: "frontEnd",
        title: "React router",
        description:
            "The application was developed using the <b>React framework</b> and it features such as <b>React Routes</b>, including functionalities like <b>Route, Navigation, Outlet</b>, and <b>links</b>.",
        img: ["reactrouter.png", "reactrouter_2.png"],
    },
    {
        section: "frontEnd",
        title: "TypeScript",
        description:
            "<b>TypeScript</b> to leverage enhanced type safety and advanced functionality, including <b>interfaces</b> and other features.",
        img: ["typescript_1.png", "typescript_2.png"],
    },
    {
        section: "frontEnd",
        title: "useContext",
        description:
            "Employ the <b>useContext</b> hook to access state across components, eliminating the need to pass it through each individual component",
        img: ["useContext_1.png", "useContext_2.png"],
    },
    {
        section: "frontEnd",
        title: "Registration - REGEX",
        description:
            "To match character combinations in strings used <b>Regular expressions</b><br />Form can be send only when all conditions are met.",
        img: ["register_1.png", "register_2.png"],
    },
    {
        section: "frontEnd",
        title: "Authentication",
        description:
            "Access to the database, saving, and retrieval of top scores are exclusive privileges granted to registered users. Authentication is achieved through the implementation of the <b>JSON Web Token (JWT)</b> method. The Login component utilizes <b>JWT decoding</b>, extracting user credentials from the payload passed by the <b>accessToken</b> upon successful login.",
        img: ["authentication_1.png", "authentication_2.png"],
    },
    {
        section: "frontEnd",
        title: "Usefull hooks",
        description: `The <b>useInput</b> hook enhances the user's experience with the application. Even after an accidental page refresh, the "input" field remembers the entered text, and the cursor is automatically placed in that field, allowing the user to continue typing the name without starting from the beginning.`,
        img: ["inputhook_1.png", "inputhook_2.png"],
    },
    {
        section: "frontEnd",
        title: "AXIOS",
        description: `The frontend communicates with the server using <b>Axios</b> (a promise-based HTTP Client for node.js).`,
        img: ["axios_1.png", "axios_2.png"],
    },
    {
        section: "server",
        title: "Registration",
        description:
            "Retrieve the username and password, and check for any potential name conflicts. If there are no conflicts, proceed to hash the password using <b>Bcrypt</b> and store the user attributes in the database.",
        img: ["back_register_1.png", "back_register_2.png"],
    },
    {
        section: "server",
        title: "Autenthication",
        description:
            "If user data is correct, the controller uses <b>JWT</b> technology to respond with the <b>accessToken</b> to the client and stores the <b>refreshToken</b> in HTTP secured cookies.",
        img: ["back_auth_1.png", "back_auth_2.png"],
    },
    {
        section: "server",
        title: "Autenthication middleware - routes",
        description:
            "Each request requiring user authentication goes through the <b>JWT Verify</b> middleware, which checks the user <b>accessToken</b> present in the request request header. If the token is absent, or if it is invalid/expired, the middleware denies the request.",
        img: ["back_jwt_verify_1.png", "back_jwt_verify_2.png"],
    },
    {
        section: "server",
        title: "Mongo DataBase",
        description:
            "UserData, including credentials and best scores, is stored in a <b>Mongo database</b> within a collection created using the <b>Mongoose Schema Model</b>.",
        img: ["back_mongo_1.png", "back_mongo_2.png"],
    },
    {
        section: "REFRESH TOKEN ROTATION",
        title: "Refresh Logic",
        description:
            "<b>The RefreshToken controller</b> clears the old token from cookies and the database, providing the user with a new set of tokens (AccessToken in the response and Refresh Token to cookies). <br /> As a safety measure, it checks if the token is compromised. If it is, all tokens associated with the `hacked user` are securely cleared for enhanced security.",
        img: ["jwt_back_1.png", "jwt_back_2.png"],
    },
    {
        section: "REFRESH TOKEN ROTATION",
        title: "Cookies",
        description:
            "The Refresh Token is stored in HTTP Secure cookies, inaccessible at the JavaScript level. These cookies remain valid with each client-server communication, and the application logic use them as needed.",
        img: ["jwt_cookies_1.png", "jwt_cookies_2.png"],
    },
    {
        section: "REFRESH TOKEN ROTATION",
        title: "React interceptors",
        description:
            "Every client request requiring credentials is dispatched by the <b>useAxiosPrivate</b> function through <b>React interceptors</b>. The initial request includes the AccessToken in the header. In the event that the token is absent or has expired, and the server responds with a `Forbidden` status, the function initiates the refreshToken procedure. If a new AccessToken is successfully obtained, the function resends the original request without requiring user intervention. The on-the-fly modification of requests is facilitated by React interceptors.",
        img: ["jwt_react_interceptors_1.png", "jwt_react_interceptors_2.png"],
    },
    {
        section: "REFRESH TOKEN ROTATION",
        title: "Persist login",
        description:
            "The <b>persistLogin</b> functionality is tied to the chosen option at login. Initially, it checks the localStorage to determine if the user desires to maintain the login session. By utilizing the refresh controller, a new set of tokens is obtained. <br /> This approach prevents the need for re-login after each page refresh. <br /> The session remains valid for the duration specified by the refresh token cookies.",
        img: ["persistLogin_1.png", "persistLogin_2.png"],
    },
];
