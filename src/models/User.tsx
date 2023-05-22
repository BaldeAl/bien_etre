{
    const mongoose = require("mongoose");

}
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }]
});

module.exports = mongoose.model('User', UserSchema);
