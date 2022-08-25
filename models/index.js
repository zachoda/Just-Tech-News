// import all models
const Post = require('./Post');
const User = require('./User');
const Vote = require("./Vote");

// create associations between User & Post
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

//Create associations between User & Post in relation to Vote
User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id"
});

Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id"
});

//Create direct associations between Post & Vote, User & Vote, Vote & User, Vote & Post
Vote.belongsTo(User, {
  foreignKey: "user_id"
});
Vote.belongsTo(Post, {
  foreignKey: "post_id"
});
User.hasMany(Vote, {
  foreignKey: "user_id"
});
Post.hasMany(Vote, {
  foreignKey: "post_id"
});

module.exports = { User, Post, Vote };

