import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-500 pb-4">
        🎨 UI Kit
      </h1>

      {/* --- BUTTONS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2">
          Buttons
        </h2>

        {/* Varyant 1: Renk varyantları */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
            Renk Varyantları
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </div>

        {/* Varyant 2: Boyut varyantları */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
            Boyut Varyantları
          </p>
          <div className="flex flex-wrap items-end gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Disabled durumu */}
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 font-medium uppercase tracking-wide">
            Disabled Durumu
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" disabled>
              Disabled Primary
            </Button>
            <Button variant="danger" disabled>
              Disabled Danger
            </Button>
          </div>
        </div>
      </section>

      {/* --- INPUTS --- */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2">
          Inputs
        </h2>

        {/* Varyant 3: Normal */}
        <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />

        {/* Varyant 4: Hatalı */}
        <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" />

        {/* Varyant 5: Help text */}
        <Input
          id="ui-help"
          label="Help Text"
          type="email"
          helpText="E-posta adresinizi girin"
          placeholder="ornek@mail.com"
        />

        {/* Varyant 6: Disabled */}
        <Input id="ui-dis" label="Disabled" disabled value="Düzenlenemez" onChange={() => {}} />
      </section>

      {/* --- CARDS --- */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2">
          Cards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Varyant 7: Elevated */}
          <Card variant="elevated" title="Elevated Card">
            Gölge ile yükseltilmiş kart. Dikkat çeken içerikler için idealdir.
          </Card>

          {/* Varyant 8: Outlined */}
          <Card variant="outlined" title="Outlined Card">
            Çerçeveli kart. Minimal tasarım için tercih edilir.
          </Card>

          {/* Varyant 9: Filled */}
          <Card variant="filled" title="Filled Card">
            Dolgulu arka plan. Arka plan rengiyle vurgulama yapar.
          </Card>
        </div>
      </section>

      {/* --- ALERTS --- */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b pb-2">
          Alerts
        </h2>

        {/* Varyant 10: Info */}
        <Alert variant="info" title="Bilgi">
          Bilgilendirme mesajı. Kullanıcıya yararlı ek bilgi verir.
        </Alert>

        {/* Varyant 11: Success */}
        <Alert variant="success" title="Başarılı">
          İşlem tamamlandı. Her şey yolunda!
        </Alert>

        {/* Varyant 12: Warning */}
        <Alert variant="warning" title="Uyarı">
          Dikkat edilmesi gereken durum. Devam etmeden önce kontrol edin.
        </Alert>

        {/* Varyant 13: Error (dismissible) */}
        <Alert variant="error" title="Hata" dismissible>
          Bir hata oluştu. Lütfen tekrar deneyin.
        </Alert>
      </section>
    </div>
  );
}
