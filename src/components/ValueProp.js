import React from "react"
import Button from "./Button"

const ValueProp = props => {
  return (
    <section className="value-prop">
      <div className="main-subtitle">SPECIAL VIRTUAL LEARNING PARTY!</div>
      <div className="value-prop-content">
        <div className="main-message">
          <div className="main-title">
            <h1>
              <b>
                The Economy Has Already Shifted {"&"} The Time To Catch Up Is
                Right Now... Or Else We Risk Getting Left Behind.
              </b>
            </h1>
          </div>
          <div className="main-subtitle">
            <p>
              Tony Robbins {"&"} Dean Graziosi Pull Back The Curtain To Reveal
              Their Secret To THRIVING In<b> Up {"&"} Down Markets</b> And How
              You Could Use this Same Model to{" "}
              <b>
                Create NEXT LEVEL Success {"&"} Impact During These Uncertain
                Times!!
              </b>
            </p>
          </div>
        </div>
        <div className="main-photo"></div>
        <Button label="Check Availability Here!" />
      </div>
    </section>
  )
}

export default ValueProp
