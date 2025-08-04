const VideoAndMoreDetails = ({ form, handleChange }) => {
  return (
    <div>
      <h2>Links</h2>
      <div>
        <label>company image</label>
        <br />
        <input
          type="text"
          name="imageurl"
          value={form.imageurl}
          onChange={handleChange}
          placeholder="e.g. bU1QPtOZQZU"
        />
      </div>
      <br />

      <div>
        <label>Job URL :</label>
        <br />
        <input
          type="text"
          name="joblink"
          value={form.joblink}
          onChange={handleChange}
          placeholder="e.g. 134173961"
        />
      </div>
      <hr />
    </div>
  );
};

export default VideoAndMoreDetails;
