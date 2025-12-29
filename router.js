const express = require('express');
const router = express.Router();

// 首頁
router.get('/', (req, res) => {
  res.render('test', { title: '開頭動畫' });
});

// 首頁 /homepage
router.get('/homepage', (req, res) => {
  res.render('homepage', { title: '首頁' });
});

// 菜單
router.get('/menu', (req, res) => {
  res.render('menu', { title: '菜單' });
});

// 訂購
router.get('/order', (req, res) => {
  res.render('order', { title: '訂購' });
});

// 門市資訊
router.get('/storepage', (req, res) => {
  res.render('storepage', { title: '門市資訊' });
});

// 品牌故事
router.get('/brandstory', (req, res) => {
  res.render('brandStory', { title: '品牌故事' });
});

// 常見問題
router.get('/frequentlyaskedquestions', (req, res) => {
  res.render('frequentlyaskedquestions', { title: '常見問題' });
});

module.exports = router;
