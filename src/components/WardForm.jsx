export const WardForm = ({ handleSubmit, wardInput, setWardInput, ward }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="card">
        <div>
          <label>
            <strong>Ward Number: </strong>
          </label>

          <input
            placeholder="Ward Number"
            type="number"
            min={0}
            value={wardInput.wardNumber}
            onChange={(e) =>
              setWardInput({ ...wardInput, wardNumber: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>
            <strong>Capacity: </strong>
          </label>
          <input
            placeholder="Capacity"
            type="number"
            min={0}
            value={wardInput.capacity}
            onChange={(e) =>
              setWardInput({ ...wardInput, capacity: e.target.value })
            }
            required
          />{" "}
        </div>
        <div>
          <label>
            <strong>Specialization: </strong>
          </label>
          <select
            onChange={(e) =>
              setWardInput({
                ...wardInput,
                specialization: e.target.value
              })
            }
            value={wardInput.ward}
          >
            <option value="General Ward">General Ward</option>
            <option value="Emergency Ward">Emergency Ward</option>
            <option value="Intensive Care Unit">Intensive Care Unit</option>
            <option value="Intensive Coronary Care Unit">
              Intensive Coronary Care Unit
            </option>
            <option value="Nursery">Nursery</option>
            <option value="Special Septic Nursery">
              Special Septic Nursery
            </option>
            <option value="Burns Ward">Burns Ward</option>
            <option value="Postoperative Ward">Postoperative Ward</option>
            <option value="Postnatal Ward">Postnatal Ward</option>
          </select>
        </div>

        <input type="submit" value={ward ? "Update" : "Add"} />
      </form>
    </>
  );
};
