import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Difference between authorization and authentication</h1>
      <p>
        In Authentication process,the system checks the person's authorities for
        accesing the system resources.In Authentication process, the identity of
        users are checked for providing access to system.Secondly,In
        Authorization,user in validated directly.Moreover in
        authentication,people are verified.Thirdly,Authorization process ocurs
        after the authentication process.Authentication process is done
        first.Authorization needs user's security levels.Authentication needs
        user's login.Authorization determines what permissions users have
        Authentication determines if the person is user or not.Authentication is
        visible to the user.Authorization isnot visible to the
        user.Authorization grants or denies permission.Authentication verifies
        credentials.
      </p>
      <h1>
        Why do we use firebase?What other options do we have to implement
        authentication?
      </h1>
      <p>
        Firebase is a Google backed application devolopement.It provides tools
        for seeing analytics,authentications for various providers.In laymen
        terms,authentication means process of verifying a person's identity.This
        can be explained using a short example.The process of entering a
        username and password when you log into a website is an unique example
        of Authentication.In our day to day life we get many examples of
        authentication.For example:Biometric Authentication,Multifactor
        Authentication etc.In Biometric Authentication,we use unique
        characteristics of individual to get characteristics of
        Individual.Biometric Individual includes Facial Recognisition,Finger
        Print Recognisition.Speaker and Eye scanners are also part of Biometric
        Authentication.As the world devolops,the Authentication System will also
        develop and become more advanced.
      </p>

      <h1>
        What other services provided by firebase other than athentication?
      </h1>
      <p>
        Besides authentication,Firebase provides ample amount of services.The
        services are Cloud Storage,Google Analytics,Cloud
        messaging,Predictions,Hosting,Cloud Messaging etc.In Predictions,the
        firebase helps us to making predictions about our website decisions.This
        service is important to increase our bussiness and revenue.In gooogle
        analytics,it helps us to track user demographics,revenue reports.This
        service provides visualization of all information in a singlr tap.In
        hosting service , firebase helps us to crate live site of our website so
        that the website is sharable all around the world.In cloud
        storage,firebase helps to store data for our future useage.
      </p>
    </div>
  );
};

export default Blog;
