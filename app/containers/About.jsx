import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <div className={cx('description')}>
    <div className={cx('shade')}>        
      <video muted autoPlay  poster="http://res.cloudinary.com/drjw5ga79/video/upload/v1473470889/My_Movie_torstp.jpg">
  <source src="http://res.cloudinary.com/drjw5ga79/video/upload/vc_auto/v1473470889/My_Movie_torstp.mp4" type="video/mp4"/>
</video>
</div>
<div className={cx('messageTitle')}>
<div className={cx('sentence-wrapper')} >
                <h2 className={cx('sentence')}>
                    <div className={cx('words-1')}>
                    <a href="#start">
                        <span>Can Cognition help with your next sale?</span>
                        <span>Can Interfaces be built by themselves?</span>
                        <span>Will ethnographic Research lead to Cognitive Systems? </span>
                        <span>Can you train customers through Reinforcement learning?</span>
                        <span>Click to find out!</span>
                        
                        </a>
                    </div>
                </h2>
            </div></div>

      </div>
          <div className={cx('bodyText')}>
  <section id="start">
<blockquote >      When we develop or merchandise in any Digital experience today, we assume what works based on existing patterns and expertise.  </blockquote>

<p>This produced work is largely a set of rules categorized as structured web experiences. Furthermore, people developing such experiences (Websites, Web Applications ) may have trained themselves into assuming will follow one of the many user journey’s they have assumed. One example is the prevalence of a secondary "Add to Wishlist" button next to an "Add to Cart" button.

This Hypothesis assumes that reacting to customer’s intents cognitively and more importantly producing unstructured web experience with Reinforcement learning will yield to dynamic and unknown journeys but with successful outcomes for the Marketer and the Consumer.

The path from intents to customized experience involves cognition. </p>

<p>The prevalence of "You may also like", "Customers typically purchase these products after viewing a product" are all hallmarks of the misguided and unintended influence of customer behavior.

We “Personalize” certain aspects of the experience as a programmatic system builds a particular user profile, however, this model is largely directed to canned responses - Common examples of these can be seen when users are retargeted and the products they bought and rejected are constantly repeated to them.

 A Programmatic model assumes and Reacts Absolutely, a Cognitive model hypothesizes and proposes curiously - learning from or influencing further customer behavior. </p>

<h3 className={cx('headingQuoteLine')} >  Canned Responses assume a single dimension to any Intent. </h3 > 

When you visit a website you are interacting with a piece of work that is created weeks if not months in advance with assumptions around the users interacting with them - The rules are definite and cannot be broken.
</section>
<section>
<blockquote >A Proposed model and a Reference Implementation to map real-time user intents to probabilistic user interface elements.</blockquote>

<p> The Cognitive merchandiser works on the premise that Digital experiences whether implemented as a retail storefront or a content based website can all work on the basis of cognition. </p>

<p>It proposes change in roles:</p>
<h3>The Consumer</h3>
<ul>
  <li>Is training a System to respond to their needs without bias from merchandisers and other humans </li>
</ul>
<h3>The User Experience Researcher. </h3>
<p>The User Experience Researcher or others collecting ethnographic research is essentially creating base training data for a future cognitive system. User experience Research usually helps produce a brief for the user experience. A Base guideline which may contain personas can be added as a base framework for the system. In the reference implementation, it is the Brand Insight section. </p>

<h3>The Experience Developer</h3>


<p>The role of the developer changes to someone who programs a cognitive system, as part of this they have the following key functions </p>

<ul>
  <li>Ensure the Brand brief and the persona contained within can be modeled as a base cognitive framework</li>
  <li>Processing Real-time intents – Developing a Natural Language Classifier  that takes incoming visits and classifies</li>
  <li>A Probabilistic module that takes a probabilistic intent and combines it with established personality attributes provided by the brand brief.</li>
  <li>A Reinforcement learning based module</li>
  <li>Dynamic Interface components that influence not only layout but component behavior based on the input fro the Reinforcement learning module. </li>
</ul>


<h3>The Marketer</h3>
<ul>
  <li>Validates the brief produced by the experience </li>
  <li>Monitors Sale and scores Cognitive patterns that lead to sales. Roadmap Item:</li>
  <li>Watches realtime as the Merchandiser provides Recommendation - Roadmap Item: </li>
</ul>
<h3>The System</h3>
<ul>
  <li> Starts as a basic cognitive system with no awareness of surroundings </li>
  <li> Eventually utilizes Reinforcement learning and strengthens personas to individual user sessions </li>
  <li> Continues to use Re-inforcement learning to build a policy network to strengthen base persona </li>
</ul>
<blockquote >How this Application works </blockquote>
<ul>
  <li>Navigate to <a href="/Persona">Persona Definition</a> and provide an Explanation of who you think the target audience is - A Sample is provided . The service returns Personality attributes and confidence levels <strong> This shapes the unknown user experience </strong>  </li>
  <li>Navigate to <a href="/Search">Search</a> to emulate the role of a customer during an incoming visit - The system accounts for this input and varies the Persona attribute confidence level 
        <ul>
            <li> The system uses Natural Language Processing (NLC) to understand intents behind the search term , try varied terms such as "Mens Polo Shirt" or "Sharp Dressing" </li>
          </ul>
    </li>
  <li> Scroll to the end of both the <a href="/Persona">Persona Definition</a> and <a href="/Search">Search</a> to observe API Response  </li>
</ul>
<blockquote >How this Application works </blockquote>
<ul>
  <li>Navigate to <a href="/Persona">Persona Definition</a> and provide an Explanation of who you think the target audience is - A Sample is provided . The service returns Personality attributes and confidence levels <strong> This shapes the unknown user experience </strong>  </li>
  <li>Navigate to <a href="/Search">Search</a> to emulate the role of a customer during an incoming visit - The system accounts for this input and varies the Persona attribute confidence level 
        <ul>
            <li> The system uses Natural Language Processing (NLC) to  </li>
          </ul>
    </li>
</ul>

<h3> Where to next and how you can contribute. </h3>
<p>The project is open sourced to strengthen the cognitive Algorithms to predict and interact on user experiences better.</p>

<p>The Wiki documents Future Roadmap and modules under consideration </p>
</section>


    </div>
    <footer>
     finiš  &copy; 2016 Cognitive Merchandiser <img src="https://api.travis-ci.org/ramakay/CognitiveMerchandiser.svg" />
    </footer>
  </div>
  );
};

export default About;
