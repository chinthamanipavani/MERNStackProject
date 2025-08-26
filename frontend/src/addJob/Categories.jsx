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
              type="checkbox"
              name="category"
              value="Accounting"
              checked={form.category?.includes?.("Accounting") || false}
              onChange={handleChange}
            />
            Accounting
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              name="category"
              value="Adipisicing iste arc"
              checked={
                form.category?.includes?.("Adipisicing iste arc") || false
              }
              onChange={handleChange}
            />
            &nbsp;Adipisicing iste arc
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              name="category"
              value="Agriculture"
              checked={form.category?.includes?.("Agriculture") || false}
              onChange={handleChange}
            />
            &nbsp;Agriculture
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              name="category"
              value="Commercial"
              checked={form.category?.includes?.("Commercial") || false}
              onChange={handleChange}
            />
            &nbsp;Commercial
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              name="category"
              value="IT & Telecom"
              checked={form.category?.includes?.("IT & Telecom") || false}
              onChange={handleChange}
            />
            &nbsp;IT & Telecom
          </label>
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Neque voluptas ea id"
              checked={
                form.category?.includes?.("Neque voluptas ea id") || false
              }
              onChange={handleChange}
            />
            &nbsp;Neque voluptas ea id
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              name="category"
              value="Sales & Marketing"
              checked={form.category?.includes?.("Sales & Marketing") || false}
              onChange={handleChange}
            />
            &nbsp;Sales & Marketing
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              name="category"
              value="Support Service"
              checked={form.category?.includes?.("Support Service") || false}
              onChange={handleChange}
            />
            &nbsp;Support Service
          </label>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              name="category"
              value="test categories"
              checked={form.category?.includes?.("test categories") || false}
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
