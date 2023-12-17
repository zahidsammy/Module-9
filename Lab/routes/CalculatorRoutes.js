const express = require('express');
const router = express.Router();
const calculatorModel = require('../model/CalculatorModel');

router.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    const result = calculatorModel.add(parseInt(num1), parseInt(num2));
    res.json({ result });
});

router.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    const result = calculatorModel.subtract(parseInt(num1), parseInt(num2));
    res.json({ result });
});

router.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    const result = calculatorModel.multiply(parseInt(num1), parseInt(num2));
    res.json({ result });
});

router.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    const divisor = parseInt(num2);
    if (divisor === 0) {
        res.status(400).json({ error: 'Cannot divide by zero' });
    } else {
        const result = calculatorModel.divide(parseInt(num1), divisor);
        res.json({ result });
    }
});

module.exports = router;
