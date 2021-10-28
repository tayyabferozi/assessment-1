import React from "react";

const Reservation = () => {
  return (
    <div id="reservation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1 text">
            <h1 className="mb-5">
              MODERN AND STYLISH BURGER BAR. IN OUR MENU YOU WILL FIND BOTH
              CLASSIC BURGERS AND UNUSUAL AND UNPREDICTABLE RECIPES FROM OUR
              CHIEF COOK.
            </h1>

            <p>
              Who doesn’t love burgers and fries? And who wouldn’t love to eat
              at the best dine-in that serves the best of it? Well, I know the
              best place to go. Thurman Cafe, located in Columbus, Ohio. They
              serve a variety of food and they all taste amazing. They serve
              things such as starters, sloppy fries, famous fries, wings, pizza
              thins, salads, famous burgers, and so much more. But the main
              thing is what’s the best there. Thurman Cafe is a very famous
              restaurant that’s known for their burgers; mostly, but also fries,
              sandwiches and stuff. Thurman Cafe is a restaurant that was opened
              by Nick Suclescy and passed through the family. And have been a
              landmark since 1942 in German Village. Their signature dishes are
              the Thurmanator and Thurman Burger.…show more content… Even though
              I hate cheese on my burgers, that was the first and best burger
              with cheese ever. My mom ordered a Thurman burger, and my sister
              ordered a cheeseburger deluxe. And since we aren 't very much of a
              meat eater, it was still delicious even with how much meat the
              burger comes with. My mom loved the Thurman burger and said it was
              the best she had ever had. By the way, no we didn 't try the
              famous signature dish, The Thurmanator, that would be too insane
              for us to do.
            </p>

            <br />

            <p>
              At times when we are in a hurry, hamburgers are one of the easiest
              foods to eat while on the go. No matter what time it is whether
              its breakfast, lunch, or dinner we grab a hamburger and might
              throw in some fries and a soda to go with it. Many restaurants are
              known to make their hamburgers in a specific way. Preparation
              differs from restaurant to restaurant. But what really makes a
              hamburger taste so delicious? Depending where you go they will
              taste different but they are all structured the same. It consists
              of a bun, a ground meat patty and often ingredients such as
              cheese, onion slices, lettuce and other condiments. I occasionally
              like to buy juicy burgers that look and taste great. When your
              food is served it does not only have to taste good, but also has
              to look good in order for it to be appetizing. Hamburgers, no
              doubt, look very pleasing to the eyes and are round in shape with
              many layers of nutrients.
            </p>

            <img
              src="/assets/img/signature.png"
              className="signature mt-3"
              alt="signature"
            />
          </div>
          <div className="col-lg-4 order-1 order-lg-2 reservation-card-wrapper">
            <div className="reservation-card">
              <div className="body">
                <div className="section">
                  <h4>OPENING HOURS</h4>
                  <p>Mon - Fri (10-24)</p>
                  <p>Seven days a week</p>
                </div>
                <div className="section">
                  <h4>LOCATION</h4>
                  <p>234 Long Street Name</p>
                  <p>London, CL 44627</p>
                </div>
                <button className="btn theme-btn">MAKE A RESERVATION</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
