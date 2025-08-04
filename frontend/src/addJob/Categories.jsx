import React from "react";

const Categories = ({ form, handleChange }) => {
  return (
    <>
      <h3>Categories</h3>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {/* Left Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <label>
            <input
              type="radio"
              name="category"
              value="Accounting"
              checked={form.category === "Accounting"}
              onChange={handleChange}
            />
            &nbsp;Accounting
          </label>
          <br /><br />

          <label>
            <input
              type="radio"
              name="category"
              value="Adipisicing iste arc"
              checked={form.category === "Adipisicing iste arc"}
              onChange={handleChange}
            />
            &nbsp;Adipisicing iste arc
          </label>
          <br /><br />

          <label>
            <input
              type="radio"
              name="category"
              value="Agriculture"
              checked={form.category === "Agriculture"}
              onChange={handleChange}
            />
            &nbsp;Agriculture
          </label>
          <br /><br />

          <label>
            <input
              type="radio"
              name="category"
              value="Commercial"
              checked={form.category === "Commercial"}
              onChange={handleChange}
            />
            &nbsp;Commercial
          </label>
          <br /><br />

          <label>
            <input
              type="radio"
              name="category"
              value="IT & Telecom"
              checked={form.category === "IT & Telecom"}
              onChange={handleChange}
            />
            &nbsp;IT & Telecom
          </label>
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <label>
            <input
              type="radio"
              name="category"
              value="Neque voluptas ea id"
              checked={form.category === "Neque voluptas ea id"}
              onChange={handleChange}
            />
            &nbsp;Neque voluptas ea id
          </label>
          <br /><br />

          <label>
            <input
              type="radio"
              name="category"
              value="Sales & Marketing"
              checked={form.category === "Sales & Marketing"}
              onChange={handleChange}
            />
            &nbsp;Sales & Marketing
          </label>
          <br /><br />

          <label>
            <input
              type="radio"
              name="category"
              value="Support Service"
              checked={form.category === "Support Service"}
              onChange={handleChange}
            />
            &nbsp;Support Service
          </label>
          <br /><br />

          <label>
            <input
              type="radio"
              name="category"
              value="test categories"
              checked={form.category === "test categories"}
              onChange={handleChange}
            />
            &nbsp;test categories
          </label>
        </div>
      </div>
    </>
  );
};

export default Categories;
