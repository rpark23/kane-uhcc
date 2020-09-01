import React, { Component } from "react";
import { Link } from "react-router-dom";

//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export class AiPono extends Component {
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
      <div className="aipono">
        <div className="landing">
          <div className="text">
            <h2>‘Ai Pono Module</h2>
            <img src="img/meal.jpg" />
            <h3>I ola no ke kino i ka mā‘ona o ka ‘ōpū</h3>
            <em>
              <h4>The body enjoys health when the stomach is well filled</h4>
            </em>
          </div>
          <img src="img/meal.jpg" />
        </div>
        <div className="content">
          <div className="recipes">
            <h2>Recipes</h2>
            <div className="dish">
              <div className="show">
                <img src="img/lawalu.jpg" alt="Lawalu" />
                <button className="expandable">Lawalu</button>
              </div>
              <div className="text">
                <h4>Ingredients:</h4>
                <p>
                  Akule, halalū, or any shoreline fish
                  <br />
                  ‘Inamona & Pa‘akai
                  <br />
                  Tomatoes & Onion – diced
                  <br />
                  ‘Ōlena – sliced
                  <br />
                  Kī or ti leaf – 1-2 leaves, strip spine
                </p>
                <h4>Instructions :</h4>
                <p>
                  Remove spine from ti leaf and center fish on leaf. Lightly
                  sprinkle inamona and pa’akai over fish (amount personal
                  preference). Add tomatoes, onions, and olena. Wrap edge of ti
                  leaf over each side fish and ingredients, then fold over ti
                  leaf to cover top of fish completely. With ti leaf ends, tie
                  and securely wrap fish. Place in microwave for 3-4 minutes.
                  Remove and serve.
                </p>
                <br />
              </div>
            </div>

            <div className="dish">
              <div className="show">
                <img src="img/poke.jpg" alt="Poke" />
                <button className="expandable">Poke</button>
              </div>
              <div className="text">
                <h4>Ingredients:</h4>
                <p>
                  Raw fish (personal preference)
                  <br />
                  ‘Inamona & Pa‘akai
                  <br />
                  Onion – sliced
                  <br />
                  Limu
                </p>
                <h4>Instructions :</h4>
                <p>
                  Mix ingredients into a large bowl and portion out servings.
                </p>
                <br />
              </div>
            </div>

            <div className="dish">
              <div className="text-only">
                <button className="expandable">I‘a Soup</button>
              </div>
              <div className="text">
                <h4>Ingredients:</h4>
                <p>
                  Akule bone for stock & strain
                  <br />
                  Pa‘akai
                  <br />
                  ‘Ōlena – sliced
                  <br />
                  Tomato & Onion – diced or sliced Seaweed (optional)
                </p>
                <h4>Instructions :</h4>
                <p>
                  Mix ingredients into a large pot, boil, and portion out
                  servings.
                </p>
                <br />
              </div>
            </div>

            <div className="dish">
              <div className="show">
                <img src="img/salad.jpg" alt="Salad" />
                <button className="expandable">Salad</button>
              </div>
              <div className="text">
                <h4>Ingredients:</h4>
                <p>
                  Spring salad mix
                  <br />
                  Tomatoes & Onion – diced or sliced
                  <br />
                  Dressing: vinegar-based dressing with a little sugar
                </p>
                <h4>Instructions :</h4>
                <p>
                  Mix ingredients into a large bowl and portion out servings.
                </p>
                <br />
              </div>
            </div>

            <div className="dish">
              <div className="show">
                <img src="img/dessert.jpg" alt="Maui Superman Dessert" />
                <button className="expandable">Maui Superman Dessert</button>
              </div>
              <div className="text">
                <h4>Ingredients:</h4>
                <p>
                  Spring salad mix
                  <br />
                  Tomatoes & Onion – diced or sliced
                  <br />
                  Dressing: vinegar-based dressing with a little sugar
                </p>
                <h4>Instructions :</h4>
                <p>
                  Mix ingredients into a large bowl and portion out servings.
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="recap">
            <div className="outline">
              <h2>Module Recap</h2>
              <div className="video-container">
                <iframe
                  src="https://player.vimeo.com/video/356830413"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
              <button className="expandable">Background</button>
              <div className="text">
                <p>
                  <br />
                  Ancient Hawaiians were strong, sturdy and capable of bearing
                  great fatigue. They planted and irrigated taro patches, hunted
                  birds and pigs, gathered vines, ferns, herbs and medicinal
                  plants, practiced both net and deep sea fishing; harvested
                  shrimp, picked seaweed, and collected shellfish. The food they
                  ate was modest, gathered fresh each day and simply cooked.
                  <br />
                  <br />
                  Food came from the sea, lowlands, and mountains. Red meat was
                  limited, and pork and chicken were saved for very special
                  occasions. Fresh fish was abundant, and therefore the main
                  course of a traditional Hawaiian meal.
                  <br />
                  <br />
                  The ancient Hawaiians were fit. The traditional Hawaiian diet
                  may have been “one of the best in the world”, according to Dr.
                  George Kanahele. It was simple, high starch, high fiber, low
                  saturated fat, low sodium, and low cholesterol diet. Most
                  Hawaiians today do not follow a traditional lifestyle, and as
                  a consequence, do not live a long time. How can we improve the
                  health of Native Hawaiians?
                </p>
                <br />
              </div>
              <button className="expandable">Discussion Questions</button>
              <div className="text">
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
              <button className="expandable">Summary</button>
              <div className="text">
                <p>
                  <br />
                  Writing...
                </p>
                <br />
              </div>
            </div>
            <div className="materials">
              <h2>Supplementary Material</h2>
              <button className="expandable">Ingredients List Handout</button>
              <div className="text">
                <a href="files/IngredientsTable.pdf" target="_blank">
                  <p>
                    <br />
                    Link to Handout
                  </p>
                  <br />
                </a>
              </div>
              <button className="expandable">Slido Link/Instructions</button>
              <div className="text">
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
              <button className="expandable">General Survey</button>
              <div className="text">
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
              <button className="expandable">Session Survey</button>
              <div className="text">
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
        <div className="quote">
          <em>
            <h3>
              "Hawaiians have colon cancer, diabetes, and hypertension. Cooking
              the Hawaiian way can be our medicine."
            </h3>
          </em>
          <h4>Herbert Hoe</h4>
        </div>
        <div className="mahalo">
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

export default AiPono;
