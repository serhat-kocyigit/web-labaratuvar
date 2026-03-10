import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* --- HAKKIMDA BÖLÜMÜ --- */}
      <section
        id="hakkimda"
        className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          <figure className="shrink-0">
            <div className="w-40 h-40 rounded-full object-cover shadow-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-6xl text-white font-bold select-none">
              SK
            </div>
          </figure>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
              Hakkımda
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Frontend geliştirici olarak modern web teknolojileriyle kullanıcı dostu arayüzler
              oluşturuyorum. React, TypeScript ve Tailwind CSS ile yüksek kaliteli web uygulamaları
              geliştiriyorum.
            </p>
            <ul className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'].map((skill) => (
                <li
                  key={skill}
                  className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- PROJELER BÖLÜMÜ --- */}
      <section
        id="projeler"
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Projelerim
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated" title="E-Ticaret Platformu">
              React ve Node.js ile tam kapsamlı uygulama. Ödeme entegrasyonu, ürün yönetimi ve
              kullanıcı paneli içerir.
            </Card>
            <Card variant="elevated" title="Portföy Web Sitesi">
              TypeScript ve Tailwind CSS kullanılarak geliştirilmiş kişisel portföy. Animasyonlu
              geçişler ve koyu mod desteği.
            </Card>
            <Card variant="elevated" title="Görev Yöneticisi">
              Drag &amp; drop özellikli görev yönetim uygulaması. Local Storage ile veri kalıcılığı.
            </Card>
            <Card variant="outlined" title="Hava Durumu Uygulaması">
              OpenWeather API entegrasyonu ile anlık hava durumu verisi. Responsive tasarım.
            </Card>
            <Card variant="outlined" title="Blog Platformu">
              Markdown editor, kategori filtreleme ve yorum sistemi içeren modern blog uygulaması.
            </Card>
            <Card variant="filled" title="Chat Uygulaması">
              WebSocket tabanlı gerçek zamanlı mesajlaşma uygulaması. Oda sistemi ve emoji desteği.
            </Card>
          </div>
        </div>
      </section>

      {/* --- İLETİŞİM BÖLÜMÜ --- */}
      <section id="iletisim" className="py-16 px-4 dark:bg-gray-950">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            İletişim
          </h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Input id="name" label="Ad Soyad" placeholder="Adınız ve soyadınız" required />
            <Input
              id="email"
              label="E-posta"
              type="email"
              placeholder="ornek@mail.com"
              required
              helpText="E-posta adresiniz gizli tutulur"
            />
            <div className="space-y-1">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Mesajınız
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Mesajınızı buraya yazın..."
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"
              />
            </div>
            <Button variant="primary" size="lg" type="submit" className="w-full">
              Gönder
            </Button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>© 2025 Serhat Koçyiğit. Tüm hakları saklıdır.</p>
        <p className="mt-1">
          Yapılı:{' '}
          <span className="font-medium text-blue-600 dark:text-blue-400">
            React + TypeScript + Tailwind CSS v4
          </span>
        </p>
      </footer>
    </div>
  );
}
