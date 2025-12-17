const puppeteer = require('puppeteer');

async function shareArticle() {
  const browser = await puppeteer.launch({
    headless: false, // Tarayıcıyı görünür modda aç
    slowMo: 50 // İşlemleri yavaşlat (debug için)
  });

  const page = await browser.newPage();

  try {
    // Siteye git
    await page.goto('https://kureansiklopedi.com/tr', {
      waitUntil: 'networkidle0'
    });

    // Giriş yap (login sayfasına git)
    await page.click('a[href*="login"]'); // Login butonunu bul ve tıkla
    await page.waitForSelector('#username'); // Username alanını bekle

    // Giriş bilgilerini gir
    await page.type('#username', 'kullanici_adi');
    await page.type('#password', 'sifre');
    await page.click('button[type="submit"]');

    // Giriş yapıldığını bekle
    await page.waitForNavigation();

    // Yeni yazı oluşturma sayfasına git
    await page.goto('https://kureansiklopedi.com/tr/new-article');

    // Form alanlarını doldur
    await page.type('#title', 'Makale Başlığı');
    await page.type('#content', 'Makale içeriği burada...');
    
    // Kategori seç (eğer varsa)
    await page.select('#category', 'kategori-id');

    // Formu gönder
    await page.click('button[type="submit"]');

    // Başarı mesajını bekle
    await page.waitForSelector('.success-message');

    console.log('Makale başarıyla paylaşıldı!');

  } catch (error) {
    console.error('Hata:', error);
  } finally {
    await browser.close();
  }
}

shareArticle();