import React from "react";

const ChatHome = (props) => {
  const { setInConvo } = [props];
  return (
    <div className="chathome chatmain" id="chatscroll">
      <h1>We Missed You</h1>
      <h2>Since you've been gone...</h2>
      <hr />
      <p>
        We need money! Some call it begging... we call it asking for support.
      </p>
      <p>
        We Need To Talk is written and maintained by developers who volunteer
        their time to be paid an average salary. For over 20 years, we've
        connected people around the world, fostered friendships, ended dire
        conflicts between nations, and helped you say happy birthday to your
        grandma without ever needing to pick up the phone.
      </p>

      <h3>We only think it's fair.</h3>

      <p>
        We want to make that sweet, sweet lambo money just like those nerds at
        <span
          style={{
            fontWeight: 900,
            fontStyle: "italic",
            textDecoration: "underline",
          }}
        >
          {" "}
          Hype.{" "}
        </span>
        My marriage is failing. My children have been asking me why their
        friend's dad who programs owns two yachts but we still drive a fifteen
        year old car.
      </p>

      <h4>Not all of us make cool hit games like Death's Journey. </h4>

      <p>
        But guess what? We have to keep living, anyway. We keep coding, even
        though our idea got stolen. Even if it's clear to anyone with a brain
        that Death's Journey is just a ripoff of my ten year old prototype
        Hospicevile. Because you know what? No one cares about that. Not my
        children. Not my sister-in-law. Certainly not the venture capitalists.
      </p>

      <h5>My sister-in-law is literally a venture capitalist.</h5>

      <p>
        Chew on that one the next time you want to whine about a bad
        Thanksgiving. Last November my pitchdeck got rejected by my five year
        old niece before I even got a chance to make a presentation. She had the
        gall to tell me that my market capture projections seem unrealistic. How
        would she know? What has my sister-in-law been telling her? She can't
        even pronounce 'liquidity' properly. Imagine the humiliation of being
        told at the Thanksgiving table by your young niece that "seed funding in
        your niche pwoduct doesn't smart duwing the cuwwent wiquidity cwunch."
        After he saw me get dressed down by a five year old child, my
        father-in-law literally took the carving knives away from me because he
        thought I couldn't handle the pressure of cutting a turkey properly. My
        father-in-law told me that my hands looked "weak and convictionless."
        Then my niece copied him and told me that I couldn't possibly "do an
        ABCDEFG wound wiv weak, convictionwess hands."
      </p>

      <h6>
        We Need To Talk is free. But have you ever considered not being so
        cheap?
      </h6>
    </div>
  );
};

export default ChatHome;
