// we need to write the logic to signup 

export const Signup = () => {
    return (
        <div>
            <h1>SignUp</h1>
            <div>
                <form action="">
                    {/* first field */}
                    <div>
                        <label htmlFor="">Username</label>
                        <input type="text" name="username" required placeholder="Enter your name"/>
                    </div>

                    {/* email field */}
                    <div>
                        <label>Email</label>
                        <input type="email" name = "email" required placeholder="Enter your email address"/>
                    </div>

                    {/* password field */}
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name = "password" required placeholder="Enter your password"/>
                    </div>

                    {/* contact field */}
                    <div>
                        <label htmlFor="">Contact</label>
                        <input type="text" name = "contact" required placeholder="Enter your contact number"/>
                    </div>

                    {/* Bio of the user */}
                    <div>
                        <label htmlFor="">Bio</label>
                        <input type="text" name = "bio" placeholder="Enter your Bio"/>
                    </div>

                    {/* submit button */}
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}