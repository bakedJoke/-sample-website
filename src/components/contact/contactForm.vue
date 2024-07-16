<template>
     <form>
        <p class=" mb-3 fw-bold">Please note: all fields are required.</p>

        <div class="form-floating mb-4">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" >
        <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-4">
        <input type="text" class="form-control" id="floatingUsername" placeholder="UserName" >
        <label for="floatingUsername">UserName</label>
        </div>
        <div class="form-floating mb-4">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Company Name:</label>
        </div>
        <div class="form-floating mb-4">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Company Email:</label>
        </div>
        <div class="form-floating mb-4">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Job Title:</label>
        </div>
        <div class="form-floating mb-4">
            <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>...</option>
            </select>   
        <label for="inputState">Country:</label>
        </div>
        <div class="form-floating mb-4">
            <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
         

        <div class="form-check text-start my-3">
        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            I'd like to receive more information about TUNE; I understand and agree to the privacy policy.
        </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">Send Message</button>
        </form>
</template>