const express = require("express");
const Sequelize = require("sequelize");

app = express();
app.use(express.json());

const sequelize = new Sequelize("postgres://zfiqpiew:7yziSd85oD27nNO_ebfJi5PynAR1U1BF@ziggy.db.elephantsql.com:5432/zfiqpiew");
sequelize.authenticate().then(() => console.log("db an dat"));

const Dish = sequelize.define(
  "dish",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    vegan: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    cost: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

app.get("/dish", (req, res) => {
  Dish.findAll()
    .then((dishes) => {
      res.json(dishes);
    })
    .catch((err) => {
      res.status(400).json("Bad Request");
      console.error(err);
    });
});

app.post("/dish", (req, res) => {
  Dish.create({
    name: req.body.name,
    vegan: req.body.vegan,
    cost: req.body.cost,
    img: req.body.img,
  })
    .then((dish) => res.json(dish))
    .catch((err) => {
      res.status(400).json("bad request");
    });
});

app.patch("/dish/:id", (req, res) => {
  let id = req.params.id;
  let update = req.body;
  Dish.update(update, {
    where: {
      id: id,
    },
    returning: true,
  })
    .then((dish) => {
      res.json(dish);
    })
    .catch((err) => res.status(400).json("bad request"));
});

app.delete("/dish/:id", (req, res) => {
  let id = req.params.id;
  Dish.destroy({
    where: {
      id: id,
    },
  })
    .then((rows) => {
      if (rows == 1)
        res.json({
          success: true,
        });
      else res.status(400).json("bad request");
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json("bad request");
    });
});

app.listen(5000);
