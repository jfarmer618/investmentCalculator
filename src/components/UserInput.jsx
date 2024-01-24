export default function UserInput({onChange, userInput}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment.toString()}
            onChange={(event) =>
                onChange("initialInvestment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="null value"
            required
            value={userInput.annualInvestment.toString()}
            onChange={(event) =>
                onChange("annualInvestment", event.target.value)
            }
          ></input>
        </p>
        </div>
        <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn.toString()}
            onChange={(event) =>
                onChange("expectedReturn", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration.toString()}
            onChange={(event) =>
                onChange("duration", event.target.value)
            }
          ></input>
        </p>
      </div>
    </section>
  );
}
