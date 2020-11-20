import React from "react"
import Button from "./Button"

const CallToAction = props => {
  return (
    <section className="cta">
      <h1>Try our awesome product.</h1>
      <p>There&apos;s nothing to lose. 30 days free trial.</p>
      <Button label="Check Availability Here!" />
    </section>
  )
}

export default CallToAction
