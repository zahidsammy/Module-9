const express = require('express');
const calculatorRoutes = require('./routes/CalculatorRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/calculator', calculatorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
