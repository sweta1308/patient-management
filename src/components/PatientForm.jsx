export const PatientForm = ({
  handleSubmit,
  patientInput,
  setPatientInput,
  patient
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="card">
        <div>
          <label>
            <strong>Name: </strong>
          </label>
          <input
            placeholder="John Doe"
            value={patientInput.name}
            onChange={(e) =>
              setPatientInput({ ...patientInput, name: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>
            <strong>Age: </strong>
          </label>
          <input
            placeholder="Age"
            type="number"
            min={0}
            value={patientInput.age}
            onChange={(e) =>
              setPatientInput({ ...patientInput, age: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label>
            <strong>Gender: </strong>
          </label>
          <span>
            <label>
              <input
                name="gender"
                type="radio"
                value="Male"
                onChange={(e) =>
                  setPatientInput({ ...patientInput, gender: e.target.value })
                }
                checked={patientInput.gender === "Male"}
              />{" "}
              Male
            </label>
          </span>
          <span>
            <label>
              <input
                name="gender"
                type="radio"
                value="Female"
                onChange={(e) =>
                  setPatientInput({ ...patientInput, gender: e.target.value })
                }
                checked={patientInput.gender === "Female"}
              />{" "}
              Female
            </label>
          </span>
          <span>
            <label>
              <input
                name="gender"
                type="radio"
                value="Other"
                onChange={(e) =>
                  setPatientInput({ ...patientInput, gender: e.target.value })
                }
                checked={patientInput.gender === "Other"}
              />{" "}
              Other
            </label>
          </span>
        </div>

        <div>
          <label>
            <strong>Medical History: </strong>
          </label>
          <input
            placeholder="History"
            type="text"
            value={patientInput.medicalHistory}
            onChange={(e) =>
              setPatientInput({
                ...patientInput,
                medicalHistory: e.target.value.replace(/ /g, "").split(",")
              })
            }
            required
          />
        </div>

        <div>
          <label>
            <strong>Contact: </strong>
          </label>
          <input
            placeholder="Contact"
            type="number"
            min={0}
            value={patientInput.contactInfo}
            onChange={(e) =>
              setPatientInput({
                ...patientInput,
                contactInfo: e.target.value
              })
            }
            required
          />
        </div>

        <div>
          <label>
            <strong>Ward: </strong>
          </label>
          <select
            value={patientInput.assignedward}
            onChange={(e) =>
              setPatientInput({
                ...patientInput,
                assignedward: e.target.value
              })
            }
          >
            <option value={101}>101</option>
            <option value={201}>201</option>
            <option value={301}>301</option>
            <option value={401}>401</option>
            <option value={501}>501</option>
            <option value={601}>601</option>
            <option value={701}>701</option>
            <option value={801}>801</option>
            <option value={901}>901</option>
          </select>
        </div>

        <input type="submit" value={patient ? "Update" : "Add"} />
      </form>
    </>
  );
};
