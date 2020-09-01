import React, { Component } from "react";
import { Link } from "react-router-dom";

//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export class Lokoia extends Component {
  componentDidMount = () => {
    var expandable = document.getElementsByClassName("expandable");
    var i;
    for (i = 0; i < expandable.length; i++) {
      expandable[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content === null) {
          content = this.parentElement.nextElementSibling;
        }
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  };
  render() {
    return (
      <div class="kaula">
        <div class="landing">
          <div class="text">
            <h2>Loko I‘a Module</h2>
            <img src="img/cordage.png" />
            <h3>Aʻohe hana nui ke ʻalu ʻia</h3>
            <em>
              <h4>No task is too big when done together by all</h4>
            </em>
          </div>
          <img src="img/cordage.png" />
        </div>
        <div class="content">
          <div class="cordage">
            <h2>Cordage</h2>
            <div class="plant">
              <h3>Olona</h3>
              <div class="card" onclick="flip(event)">
                <div class="front">
                  <img src="img/olona.png" alt="plant" />
                </div>
                <div class="back"></div>
              </div>
            </div>
          </div>
          <div class="recap">
            <div class="outline">
              <h2>Module Recap</h2>
              <div class="video-container">
                <iframe
                  src="https://player.vimeo.com/video/427549806"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                />
              </div>
              <button class="expandable">Background</button>
              <div class="text">
                <p>
                  <br />
                  The needs of our early Hawaiian ancestors were simple. The
                  pleasant climate demanded very little in the way of personal
                  comfort. Their primary concern were the gathering and
                  preparation of food, construction, sailing, warfare, and the
                  appeasement of their Ali’i and Gods.
                  <br />
                  <br />
                  In each activity, fiber work was a key component. The book
                  Ancient Hawaiian Civilization noted, “ they needed baskets and
                  slings to carry food; nets, lines, and snares for fishing;
                  mats and thatching for homes; sails, ropes, and lashing for
                  canoes; slings and lashing cords for weapons; and the network
                  background for their beautiful feather work”, that adorned
                  their Ali’i and their Gods.
                  <br />
                  <br />
                  To this end, early Hawaiians had to first seek out various raw
                  materials that could be used in fiber work. Thus, fiber
                  material had to be not only strong but pliable; straight but
                  smooth; and long but tough. By identifying useful and reliable
                  raw materials, early Hawaiians learned to propagate these
                  materials for on-going use as Kaula [cordage].
                </p>
                <br />
              </div>
              <button class="expandable">Discussion Questions</button>
              <div class="text">
                <p>
                  <br />
                  What are some take-away messages from Uncle Herbert?
                  <br />
                  <br />
                  How is this way of eating important for Hawaiians today?
                  <br />
                  <br />
                  What does it mean to “step up to the plate”?
                  <br />
                  <br />
                  Why is it “critical” for kāne to take care of their health?
                  <br />
                  <br />
                  Why is it important to take care of your colon?
                </p>
                <br />
              </div>
              <button class="expandable">Summary</button>
              <div class="text">
                <p>
                  <br />
                  Writing...
                </p>
                <br />
              </div>
            </div>
            <div class="materials">
              <h2>Supplementary Material</h2>
              <button class="expandable">Ingredients List Handout</button>
              <div class="text">
                <a href="files/IngredientsTable.pdf" target="_blank">
                  <p>
                    <br />
                    Link to Handout
                  </p>
                  <br />
                </a>
              </div>
              <button class="expandable">Slido Link/Instructions</button>
              <div class="text">
                <p>
                  <br />
                  1. Simply take out your smartphone and open your browser
                  <br />
                  2. Go to{" "}
                  <a href="https://www.sli.do/" target="_blank">
                    sli.do
                  </a>{" "}
                  and enter your event code
                  <br />
                  3. You can now answer questions with live polling!
                  <br />
                </p>
                <br />
              </div>
              <button class="expandable">General Survey</button>
              <div class="text">
                <p>
                  <br />
                  1. What types of foods are good for a healthy colon?
                  <br />
                  2. What types of foods do we get too much of and are not as
                  good for the colon?
                  <br />
                  3. What are 3 things that happen in Hale Mua?
                  <br />
                  4. What are 3 important things to Hawaiian men in terms of
                  health?
                  <br />
                  5. What can Native Hawaiian men do to keep themselves healthy?
                  <br />
                </p>
                <br />
              </div>
              <button class="expandable">Session Survey</button>
              <div class="text">
                <p>
                  <br />
                  1. It was helpful for me to discuss my dietary health with
                  other men
                  <br />
                  2. The discussion leader made me feel comfortable.
                  <br />
                  3. During this session, I learned more about diet and health.{" "}
                  <br />
                  4. I would attend another Kāne session like this one.
                  <br />
                  5. In the past, I attended the following sessions:
                  <br />
                  6. What I liked most about this session is?
                  <br />
                  7. How could this session be improved?
                  <br />
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="quote">
          <em>
            <h3>
              "Hawaiians have colon cancer, diabetes, and hypertension. Cooking
              the Hawaiian way can be our medicine."
            </h3>
          </em>
          <h4>Herbert Hoe</h4>
        </div>
        <div class="mahalo">
          <p>
            Mahalo for attending this session featuring ‘Ai Pono with Uncle
            Herbert Hoe! If you are interested, we have two additional cultural
            modules developed highlighting cordage and pule.
          </p>
        </div>
      </div>
    );
  }
}

export default Lokoia;
