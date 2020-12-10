module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      link: String,
      published: Boolean
    },
    { timestamps: true }//When you enable timestamps, Mongoose adds createdAt and updatedAt properties to your schema
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
