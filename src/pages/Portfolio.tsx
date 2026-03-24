import React, { useState, useEffect, useMemo } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Alert from '../components/Alert';
import type { Project, SortField, SortOrder } from '../types/Project';

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filters and Sorting States
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<SortField>('title');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} - Data could not be loaded.`);
        }
        const data = await response.json();
        // Simulate a slight delay for better UX demo
        await new Promise(resolve => setTimeout(resolve, 800));
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred while fetching projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(projects.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, [projects]);

  const processedProjects = useMemo(() => {
    let result = [...projects];

    // Filtering by Search Term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter(
        (p: Project) => p.title.toLowerCase().includes(lowerSearch) || 
                       p.description.toLowerCase().includes(lowerSearch)
      );
    }

    // Filtering by Category
    if (categoryFilter !== 'All') {
      result = result.filter((p: Project) => p.category === categoryFilter);
    }

    // Sorting
    result.sort((a, b) => {
      let valA = a[sortBy];
      let valB = b[sortBy];

      if (typeof valA === 'string') valA = (valA as string).toLowerCase();
      if (typeof valB === 'string') valB = (valB as string).toLowerCase();

      if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
      if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [projects, searchTerm, categoryFilter, sortBy, sortOrder]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* --- HERO / HAKKIMDA BÖLÜMÜ --- */}
      <section
        id="hakkimda"
        className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950/20"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          <figure className="shrink-0 group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-7xl text-white font-bold select-none transform transition duration-500 hover:scale-105">
              SK
            </div>
          </figure>
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Modern Çözümler, <span className="text-blue-600 dark:text-blue-400">Yenilikçi Tasarımlar</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
              Frontend mühendisi olarak kullanıcı deneyimini merkeze alan, performanslı ve estetik web uygulamaları 
              geliştiriyorum. TypeScript ve React ekosisteminde uzmanlaşarak, karmaşık problemleri zarif çözümlere dönüştürüyorum.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {['React 19', 'TypeScript', 'Tailwind 4', 'Vite', 'Frontend Docs'].map((skill) => (
                <span
                  key={skill}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJELER BÖLÜMÜ --- */}
      <section
        id="projeler"
        className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Projelerim
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6 font-medium">
                Geliştirdiğim en son çalışmaları keşfedin ve filtreleyin.
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                      categoryFilter === cat
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col gap-4">
              <Input
                id="search"
                label="Proje Ara"
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="w-full !mb-0"
              />
              <div className="flex gap-2">
                <select
                  aria-label="Sıralama Alanı"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortField)}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all flex-1"
                >
                  <option value="title">Başlığa Göre</option>
                  <option value="id">ID'ye Göre</option>
                  <option value="completed">Duruma Göre</option>
                </select>
                <button
                  type="button"
                  onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Sıralama Düzeni"
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </button>
              </div>
            </div>
          </div>

          {/* Error State */}
          {error && (
            <Alert variant="error" title="Veri Yükleme Hatası" className="mb-8" dismissible>
              {error}
            </Alert>
          )}

          {/* Loading State */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(n => (
                <div key={n} className="h-[400px] rounded-2xl bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {processedProjects.map(project => (
                <Card 
                  key={project.id} 
                  variant="elevated" 
                  title={project.title}
                  className="overflow-hidden group hover:-translate-y-2 transition-all duration-500 rounded-2xl border-none shadow-xl hover:shadow-2xl dark:bg-gray-800/50 backdrop-blur-md"
                >
                  <div className="relative h-48 -mx-5 -mt-5 mb-5 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${
                        project.completed 
                          ? 'bg-green-500 text-white' 
                          : 'bg-amber-500 text-white'
                      }`}>
                        {project.completed ? 'Tamamlandı' : 'Devam Ediyor'}
                      </span>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Button variant="secondary" className="w-full font-bold tracking-wide">
                    Detayları Görüntüle
                  </Button>
                </Card>
              ))}
            </div>
          )}

          {!loading && processedProjects.length === 0 && (
            <div className="text-center py-20 bg-white dark:bg-gray-800/30 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
              <p className="text-xl text-gray-500 dark:text-gray-400 font-semibold mb-2">Aradığınız kriterlere uygun proje bulunamadı.</p>
              <Button variant="secondary" onClick={() => { setSearchTerm(''); setCategoryFilter('All'); }}>Filtreleri Temizle</Button>
            </div>
          )}
        </div>
      </section>

      {/* --- İLETİŞİM BÖLÜMÜ --- */}
      <section id="iletisim" className="py-24 px-4 dark:bg-gray-950">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
              İletişime Geçin
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Yeni bir proje veya iş birliği için mesaj bırakabilirsiniz.
            </p>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input id="name" label="Ad Soyad" placeholder="Adınız" required />
              <Input id="email" label="E-posta" type="email" placeholder="ornek@mail.com" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                Mesajınız
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Nasıl yardımcı olabilirim?"
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 transition-all resize-none"
              />
            </div>
            <Button variant="primary" size="lg" type="submit" className="w-full py-4 text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5">
              Mesajı Gönder
            </Button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-center py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-900 dark:text-white font-bold text-lg mb-4 select-none">SK</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">© 2026 Serhat Koçyiğit. Tüm hakları saklıdır. Lab-5 Modern JS & TS Entegrasyonu.</p>
          <div className="flex justify-center gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
            <span className="font-bold text-blue-600 dark:text-blue-400">React 19</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">TypeScript</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">Tailwind 4</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
