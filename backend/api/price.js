const express = require('express');
const router = express.Router();
const { getCurrentPrice, getHistoryPrice } = require('../services/coingecko');

router.get('/:symbol', async (req, res) => {
    try {
        const symbol = req.params.symbol.toLowerCase();
        const price = await getCurrentPrice(symbol);

        if (!price) {
            return res.status(404).json({ error: 'Cryptocurrency not found' });
        }

        res.json({ symbol, price });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cryptocurrency price' });
    }
});

router.get('/:symbol/history', async (req, res) => {
    try {
        const symbol = req.params.symbol.toLowerCase();
        const history = await getHistoryPrice(symbol);

        if (!history) {
            return res.status(404).json({ error: 'Cryptocurrency history not found' });
        }

        res.json({ symbol, history });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cryptocurrency history' });
    }
});

module.exports = router;