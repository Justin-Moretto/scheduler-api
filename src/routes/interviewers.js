const router = require("express").Router();

module.exports = db => {
  router.get("/interviewers", (request, response) => {
    db.query(`SELECT * FROM interviewers`).then(({ rows: interviewers }) => {
      response.json(
        interviewers.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
      res.sendStatus(200)
    });
  });

  return router;
};
