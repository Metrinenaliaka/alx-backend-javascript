import express from 'express';

const app = express();
const indexRouter = require('./routes/index');

app.listen(1245, () => {
  console.log('server started');
});
app.use('/', indexRouter);
app.use('/students', indexRouter);
app.use('/students/:major', indexRouter);

export default app;