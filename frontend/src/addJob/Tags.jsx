import React from "react";

const tags = ({ form, handleChange }) => {
  return (
    <>
      <h3>tagss</h3>
      <hr />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {/* Left Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <label>
            <input
              type="checkbox"
              id="tags3"
              name="tags"
              value="Back-End"
              checked={form.tags.includes("Back-End")}
              onChange={handleChange}
            />
            &nbsp;Back-end
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags4"
              name="tags"
              value="Beauty"
              checked={form.tags.includes("Beauty")}
              onChange={handleChange}
            />
            &nbsp;Beauty
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags5"
              name="tags"
              value="C++"
              checked={form.tags.includes("C++")}
              onChange={handleChange}
            />
            &nbsp;C++
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags6"
              name="tags"
              value="Care/ Health"
              checked={form.tags.includes("Care/ Health")}
              onChange={handleChange}
            />
            &nbsp;Care/ Health
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags7"
              name="tags"
              value="CASEWARE"
              checked={form.tags.includes("CASEWARE")}
              onChange={handleChange}
            />
            &nbsp;CASEWARE
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags8"
              name="tags"
              value="Creative"
              checked={form.tags.includes("Creative")}
              onChange={handleChange}
            />
            &nbsp;Creative
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags9"
              name="tags"
              value="DairyElectrical"
              checked={form.tags.includes("DairyElectrical")}
              onChange={handleChange}
            />
            &nbsp;DairyElectrical
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags10"
              name="tags"
              value="Elit ut nostrud pro"
              checked={form.tags.includes("Elit ut nostrud pro")}
              onChange={handleChange}
            />
            &nbsp;Elit ut nostrud pro
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags11"
              name="tags"
              value="Fitness"
              checked={form.tags.includes("Fitness")}
              onChange={handleChange}
            />
            &nbsp;Fitness
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags12"
              name="tags"
              value="Food"
              checked={form.tags.includes("Food")}
              onChange={handleChange}
            />
            &nbsp;Food
          </label>
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <label>
            <input
              type="checkbox"
              id="tags13"
              name="tags"
              value="Front-End"
              checked={form.tags.includes("Front-End")}
              onChange={handleChange}
            />
            &nbsp;Front-End
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags14"
              name="tags"
              value="IPR"
              checked={form.tags.includes("IPR")}
              onChange={handleChange}
            />
            &nbsp;IPR
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags15"
              name="tags"
              value="JavaScript"
              checked={form.tags.includes("JavaScript")}
              onChange={handleChange}
            />
            &nbsp;JavaScript
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags16"
              name="tags"
              value="Law & Legal"
              checked={form.tags.includes("Law & Legal")}
              onChange={handleChange}
            />
            &nbsp;Law & Legal
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags17"
              name="tags"
              value="Omnis odit et quo mo"
              checked={form.tags.includes("Omnis odit et quo mo")}
              onChange={handleChange}
            />
            &nbsp;Omnis odit et quo mo
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags18"
              name="tags"
              value="Php"
              checked={form.tags.includes("Php")}
              onChange={handleChange}
            />
            &nbsp;Php
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags19"
              name="tags"
              value="Python"
              checked={form.tags.includes("Python")}
              onChange={handleChange}
            />
            &nbsp;Python
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags20"
              name="tags"
              value="test"
              checked={form.tags.includes("test")}
              onChange={handleChange}
            />
            &nbsp;test
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              id="tags21"
              name="tags"
              value="WordPress"
              checked={form.tags.includes("WordPress")}
              onChange={handleChange}
            />
            &nbsp;WordPress
          </label>
        </div>
      </div>
    </>
  );
};

export default tags;
