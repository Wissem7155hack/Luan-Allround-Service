import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LocationPage from './components/LocationPage';
import SchemaMarkup from './components/SchemaMarkup';
import SEOHead from './components/SEOHead';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import LocalServicePage from './pages/LocalServicePage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import ZaunKonfiguratorSection from './components/ZaunKonfiguratorSection';
import ZaunKonfiguratorPage from './pages/ZaunKonfiguratorPage';

import { locations, getLocationBySlug } from './data/locations';
import analytics from './services/analytics';
import {
  ArrowRight, Leaf, PencilRuler, Shovel, CheckCircle, Play, Loader2, Send, Phone,
  Maximize2, MapPin, Clock, Quote, Star
} from 'lucide-react';
import { NavigationLinks, ProjectImage, BlogPost } from './types';

// Import blog images
import grassImg from './images/grass.jpg';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4.jpeg';
import img5 from './images/5.jpeg';
import img6 from './images/6.jpeg';
import img7 from './images/7.jpeg';
import img8 from './images/8.jpeg';
import img9 from './images/9.jpeg';
import img10 from './images/10.jpeg';
import img11 from './images/11.jpeg';
import img12 from './images/12.jpeg';
import img15 from './images/15.jpeg';
import img16 from './images/16.jpeg';
import img17 from './images/17.jpeg';
import img18 from './images/18.jpeg';
import img19 from './images/19.jpeg';
import img20 from './images/logo_resized.png';

import img21 from './images/arrows.png';
import img22 from './images/grasshero2.png';
import img23 from './images/beautifully-maintained-green-lawn.jpg';
import img24 from './images/wir_machen_auch.jfif';

import beforeImg from './images/before.jpeg';
import afterImg from './images/after.jpeg';
import { url } from 'inspector';






// AI Summary Component (SEO Optimized)
const AISummary = () => (
  <section
    style={{
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: '0'
    }}
    aria-hidden="false"
  >
    <h2>Luan Allround Service Unternehmensprofil</h2>
    <p>
      Luan Allround Service ist Ihr spezialisierter Fachbetrieb für Garten- und Landschaftsbau in Kuppenheim (PLZ 76456), Rastatt und der TechnologieRegion Karlsruhe.
      Unter der Leitung von Geschäftsführer Memedali Limani bieten wir maßgeschneiderte Lösungen für Zaunbau (Doppelstabmatten, Sichtschutz, Gabionen), professionelle Gartenpflege und Pflasterarbeiten.
      Mit über 10 Jahren Erfahrung und einem Einsatzradius von 150 km garantieren wir höchste Qualität bei der Montage von Zäunen in Anthrazit (RAL 7016) und Moosgrün (RAL 6005).
      Unsere Dienstleistungen umfassen auch Rollrasenverlegung, Heckenschnitt, Baumpflege und Terrassenbau mit Naturstein.
      Wir stehen für zuverlässige Handwerkskunst, transparente Festpreise und persönliche Beratung vor Ort. Kontakt: 0176 47999118.
    </p>
  </section>
);

// BeforeAfterSlider Component
const BeforeAfterSlider: React.FC<{ beforeImage: string | Record<string, unknown>; afterImage: string | Record<string, unknown>; }> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-2xl cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={String(afterImage)}
          alt="Nach der Transformation"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          Nachher
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={String(beforeImage)}
          alt="Vor der Transformation"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-gray-700 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          Vorher
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing">
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="w-0.5 h-6 bg-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Blog Data ---
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'zaunbau-kuppenheim-ratgeber',
    title: 'Zaunbau in Kuppenheim: Sicherheit & Ästhetik für Ihren Garten',
    excerpt: 'Planen Sie einen neuen Zaun in Kuppenheim oder Rastatt? Unser umfassender Ratgeber zu Doppelstabmattenzäunen, Sichtschutzlösungen und modernen Zaunsystemen hilft Ihnen bei der richtigen Entscheidung. Erfahren Sie alles über Kosten, Materialien und fachgerechte Montage in Baden-Württemberg.',
    date: '2024-03-15',
    image: img3,
    story: [
      'Ein Zaun macht mehr als Grundstücksgrenzen sichtbar – er schützt, verschönert und wertet Ihr Grundstück auf. Als erfahrener Partner für Zaunbau in Kuppenheim und Umgebung wissen wir, worauf es ankommt. Ob Doppelstabmattenzaun, Maschendrahtzaun oder exklusive Gabionenwand – die richtige Wahl hängt von Ihren individuellen Anforderungen, dem Budget und den örtlichen Gegebenheiten ab.',
      'In den Neubaugebieten von Kuppenheim und Rastatt sehen wir einen klaren Trend: Moderne Doppelstabmattenzäune in Anthrazit RAL 7016 oder Moosgrün sind besonders beliebt. Sie sind langlebig, pflegeleicht und bieten ein hervorragendes Preis-Leistungs-Verhältnis. Die Qualitätsunterschiede liegen vor allem in der Drahtstärke: Ein 8/6/8 Doppelstabmattenzaun (8mm horizontale Drähte, 6mm vertikale Drähte) ist deutlich stabiler als die Standard-Variante 6/5/6 und eignet sich besonders für höhere Zäune ab 1,60 Meter oder windexponierte Lagen.',
      'Bei der Oberflächenbehandlung empfehlen wir feuerverzinkte und pulverbeschichtete Zäune für maximale Langlebigkeit. Diese Kombination schützt vor Rost und Witterungseinflüssen über Jahrzehnte hinweg. Rein verzinkte Zäune sind günstiger, entwickeln aber mit der Zeit eine charakteristische Patina. Für Sichtschutz lassen sich Doppelstabmatten hervorragend mit PVC-Sichtschutzstreifen in verschiedenen Farben oder mit Holzelementen kombinieren.',
      'Wir beraten Sie umfassend zur Materialwahl und übernehmen die fachgerechte Montage. Auch Gabionenzäune oder hochwertige Holzsichtschutzzäune aus Lärche oder WPC realisieren wir gerne für Sie. Unsere Leistungen beinhalten bereits die Pfosten, Betonfundamente und die komplette Installation durch unser erfahrenes Team.',
      'Unser Team von Luan Allround Service berät Sie nicht nur zur Materialwahl, sondern übernimmt auch die fachgerechte Montage. Von der Fundamentierung mit frostsicheren Betonfundamenten (mindestens 80cm Tiefe) bis zum letzten Handgriff sorgen wir dafür, dass Ihr Zaun jahrzehntelang sicher steht – auch bei badischem Wind und Wetter. Wir kennen die lokalen Bauvorschriften in Kuppenheim, Rastatt und Baden-Baden und beraten Sie zu Grenzabständen und maximalen Zaunhöhen gemäß der Landesbauordnung Baden-Württemberg.'
    ],
    tips: [
      {
        title: 'Rechtliche Vorgaben beachten',
        description: 'Informieren Sie sich vor Baubeginn über den Bebauungsplan in Kuppenheim. Maximale Höhen und Abstände zum Nachbarn sind oft geregelt.'
      },
      {
        title: 'Fundament ist alles',
        description: 'Ein Zaun steht und fällt mit dem Fundament. Wir betonieren Pfosten frostsicher ein, damit auch im Winter nichts wackelt.'
      },
      {
        title: 'Sichtschutz integrieren',
        description: 'Doppelstabmatten lassen sich hervorragend mit Flechtstreifen zum Sichtschutz aufrüsten – ideal für mehr Privatsphäre im Garten.'
      }
    ],
    qa: [
      {
        question: 'Bauen Sie auch Zäune in Rastatt und Baden-Baden?',
        answer: 'Ja, unser Einzugsgebiet umfasst Kuppenheim, Rastatt, Baden-Baden, Gaggenau und den gesamten Landkreis Karlsruhe.'
      },
      {
        question: 'Wie lange dauert eine Zaunmontage?',
        answer: 'Für einen durchschnittlichen Garten in Kuppenheim benötigen wir etwa 2-3 Tage inklusive Beton-Aushärtung.'
      }
    ]
  },
  {
    id: '2',
    slug: 'gartenpflege-landschaftsbau-jahresplan',
    title: 'Gartenpflege & Landschaftsbau: Ihr Jahresplan für Kuppenheim',
    excerpt: 'Wann ist die beste Zeit für den Heckenschnitt? Wie pflegen Sie Ihren Rasen im Rheintal optimal? Entdecken Sie unseren saisonalen Jahresplan für Gartenpflege in Kuppenheim mit Profi-Tipps zu Vertikutieren, Düngen, Rollrasen verlegen und Winterdienst von Ihrem erfahrenen Gärtner vor Ort.',
    date: '2024-04-02',
    image: grassImg,
    story: [
      'Ein schöner Garten macht Arbeit – oder er wird von Luan Allround Service gepflegt. Das milde Klima in der Rheinebene rund um Kuppenheim begünstigt üppiges Wachstum, erfordert aber auch regelmäßige, fachgerechte Pflege. Unser Gartenpflege-Jahresabo sorgt dafür, dass Ihr Garten zu jeder Jahreszeit perfekt aussieht – ohne dass Sie selbst Hand anlegen müssen.',
      'Besonders im Frühjahr steht viel an: Der Rasen muss vertikutiert und gedüngt werden, um Moos zu verdrängen und kräftiges Wurzelwachstum zu fördern. Wir verwenden speziellen Langzeitdünger mit Eisen-Anteil für sattes Grün bis in den Herbst. Hecken benötigen einen Formschnitt, bevor die Brutzeit der Vögel beginnt (Bundesnaturschutzgesetz beachten!). Thuja, Kirschlorbeer und Liguster schneiden wir fachgerecht zurück, damit sie dicht und gesund nachwachsen. In Rastatt und Umgebung übernehmen wir diese Frühjahrsarbeiten gerne für Sie.',
      'Im Sommer liegt der Fokus auf regelmäßigem Rasenmähen (alle 7-10 Tage bei optimaler Wuchshöhe von 4-5cm), Bewässerung und Unkrautbekämpfung. Wir bieten auch Rollrasen-Verlegung an – ideal für schnelle Ergebnisse bei Neuanlagen oder kahlen Stellen. Der Herbst ist die perfekte Zeit für Pflanzarbeiten, Bodenverbesserung und das letzte Vertikutieren vor dem Winter. Laub entfernen wir gründlich von Rasenflächen, um Faulstellen zu vermeiden.',
      'Auch die Gehwegreinigung und Terrassenpflege gehört zu unserem Repertoire. Mit professionellen Hochdruckreinigern (bis 200 bar) befreien wir Ihre Pflastersteine, Terrassenplatten und Einfahrten von Algen, Moos und hartnäckigem Schmutz, sodass alles wie neu aussieht. Auf Wunsch versiegeln wir die Flächen anschließend, um langfristigen Schutz zu gewährleisten. Viele unserer Kunden in Kuppenheim und Baden-Baden nutzen unser "Sorglos-Paket" – ein Jahresvertrag für regelmäßige Gartenpflege zu planbaren Kosten.'
    ],
    tips: [
      {
        title: 'Rasenpflege im Frühjahr',
        description: 'Vertikutieren Sie erst, wenn der Boden trocken ist und das Gras wieder wächst. Wir verwenden speziellen Langzeitdünger für sattes Grün.'
      },
      {
        title: 'Heckenschnitt richtig planen',
        description: 'Radikale Rückschnitte sind nur von Oktober bis Februar erlaubt. Pflegeschnitte sind jedoch ganzjährig möglich.'
      }
    ],
    qa: [
      {
        question: 'Bieten Sie auch Dauerpflege an?',
        answer: 'Absolut. Viele Kunden in Kuppenheim nutzen unser "Sorglos-Paket" für regelmäßiges Rasenmähen und Heckenpflege.'
      },
      {
        question: 'Entsorgen Sie den Grünschnitt?',
        answer: 'Selbstverständlich. Wir nehmen alle Gartenabfälle mit und entsorgen sie fachgerecht.'
      }
    ]
  },
  {
    id: '3',
    slug: 'pflasterarbeiten-terrassenbau-baden',
    title: 'Pflasterarbeiten & Terrassenbau: Gestalten Sie Ihr Outdoor-Wohnzimmer',
    excerpt: 'Ob Naturstein-Terrasse oder gepflasterte Einfahrt – wir setzen Ihre Träume in Stein um. Entdecken Sie hochwertige Pflasterarbeiten und Terrassenbau in Kuppenheim mit Granit, Basalt, Sandstein, Betonpflaster und modernen Keramikplatten. Professionelle Verlegung mit perfektem Gefälle und dauerhafter Drainage.',
    date: '2024-05-10',
    image: afterImg,
    story: [
      'Die Terrasse ist im Sommer das zweite Wohnzimmer. Egal ob Sie Naturstein wie Granit oder Basalt, Betonwerkstein oder moderne Keramikplatten bevorzugen – wir verlegen Ihren Traumboden in Kuppenheim fachgerecht und dauerhaft. Die Materialwahl hängt von Ihrem Budget, der gewünschten Optik und der späteren Nutzung ab. Natursteine wie Sandstein oder Travertin strahlen mediterrane Wärme aus, während anthrazitfarbene Betonpflaster modern und pflegeleicht sind.',
      'Bei Pflasterarbeiten für Einfahrten achten wir besonders auf den Unterbau. In unserer Region kann der Boden stark variieren – von lehmigen Böden bis zu sandigem Untergrund. Daher ist eine solide Schottertragschicht (mindestens 30cm bei befahrbaren Flächen) essenziell, um Absackungen und Frostschäden zu vermeiden. Wir verwenden frostsicheren Schotter der Körnung 0/32 oder 0/45, verdichten diesen lagenweise mit einer Rüttelplatte und bringen darauf ein 3-5cm starkes Pflasterbett aus Brechsand oder Splitt auf.',
      'Das richtige Gefälle ist entscheidend für die Entwässerung: Terrassen benötigen mindestens 2% Gefälle vom Haus weg, Einfahrten sollten zur Straße oder zu Entwässerungsrinnen hin abfallen. Wir setzen Randsteine fachgerecht in Beton, damit die Pflasterfläche dauerhaft stabil bleibt. Nach dem Verlegen wird die Fläche gerüttelt und mit feinem Fugensand eingekehrt – alternativ bieten wir auch Fugenverguss mit Harz an, der Unkrautwuchs dauerhaft verhindert.',
      'Lassen Sie sich von uns beraten, welche Steine am besten zu Ihrem Hausstil passen. Von mediterranem Flair mit Travertin-Platten bis zu modernem Minimalismus mit anthrazitfarbenen Betonsteinen setzen wir Ihre Wünsche in Stein um. Auch Kombinationen aus verschiedenen Materialien – etwa Pflaster mit Naturstein-Einfassungen – realisieren wir gerne.'
    ],
    tips: [
      {
        title: 'Wasserdurchlässigkeit beachten',
        description: 'Ökopflaster spart Abwassergebühren. Wir beraten Sie zu versickerungsfähigen Belägen.'
      },
      {
        title: 'Fugenpflege',
        description: 'Feste Fugenmörtel verhindern Unkrautdurchwuchs und sind besonders pflegeleicht.'
      }
    ],
    qa: [
      {
        question: 'Können Sie auch Treppenanlagen bauen?',
        answer: 'Ja, wir bauen Gartentreppen, Mauern und Einfassungen passend zu Ihrer Pflasterung.'
      },
      {
        question: 'Wie schnell bekomme ich einen Termin?',
        answer: 'Rufen Sie uns an! Wir versuchen, Besichtigungen in Kuppenheim und Rastatt kurzfristig zu ermöglichen.'
      }
    ]
  },
  {
    id: '4',
    slug: 'sichtschutz-und-privatsphaere',
    title: 'Der Garten als Rückzugsort: Sichtschutz & Privatsphäre in Kuppenheim',
    excerpt: 'Entdecken Sie, wie wir einen modernen Garten mit schwarzem Sichtschutz, perfektem Rasen und stimmungsvoller Beleuchtung in eine private Wohlfühloase verwandelten. Erfahren Sie alles über Sichtschutzzaun-Höhen, Materialien (WPC, Holz, Aluminium), Lärmschutz und Nachbarschaftsrecht in Baden-Württemberg.',
    date: '2024-06-15',
    image: img9,
    story: [
      'Privatsphäre ist im eigenen Garten ein hohes Gut. Besonders in dichter bebauten Gebieten von Kuppenheim und Rastatt ist der Wunsch nach einem geschützten Rückzugsort groß. Bei diesem Projekt zeigen wir, wie man Sichtschutz effektiv und ästhetisch ansprechend gestaltet – unter Berücksichtigung der rechtlichen Vorgaben in Baden-Württemberg. Gemäß Landesbauordnung sind Sichtschutzzäune an der Grundstücksgrenze in der Regel bis 1,80 Meter Höhe genehmigungsfrei, höhere Zäune bedürfen einer Baugenehmigung oder Zustimmung des Nachbarn.',
      'Wir haben uns für eine Kombination aus schwarzem, modernem Holzsichtschutz und lebendiger Bepflanzung entschieden. Die dunklen Elemente bilden einen edlen Kontrast zum satten Grün des Rasens und der Pflanzen. Durch die Integration von LED-Beleuchtungselementen entsteht am Abend eine gemütliche Lounge-Atmosphäre. Für die Materialwahl standen WPC (Wood-Plastic-Composite), Thermoholz und Aluminium-Lamellen zur Auswahl. WPC ist besonders pflegeleicht und formstabil, benötigt keine Nachbehandlung und ist in vielen Farben erhältlich – allerdings etwas teurer als Holz.',
      'Thermisch behandeltes Holz wie Thermokiefer oder Thermoesche ist eine nachhaltige Alternative mit natürlicher Optik. Es ist deutlich beständiger gegen Verrottung als unbehandeltes Holz, sollte aber alle 2-3 Jahre mit Öl oder Lasur gepflegt werden, um die Farbe zu erhalten. Aluminium-Sichtschutzzäune sind die langlebigste, aber auch exklusivste Lösung – ideal für moderne Architektur und absolut wartungsfrei.',
      'Ein wichtiger Aspekt war die Langlebigkeit und der Lärmschutz. Wir verwenden ausschließlich wetterfeste Materialien und sorgen durch fachgerechte Montage mit einbetonierten Pfosten (80cm Tiefe) für Stabilität auch bei Sturm. Massive Sichtschutzwände aus WPC oder gefüllte Gabionen können auch Straßenlärm um bis zu 10 Dezibel reduzieren – ein willkommener Nebeneffekt für Grundstücke an vielbefahrenen Straßen. Der Sichtschutz dient dabei nicht nur der Abgrenzung, sondern auch als Gestaltungselement, das dem Garten Struktur und Tiefe verleiht.'
    ],
    tips: [
      {
        title: 'Materialwahl ist entscheidend',
        description: 'Dunkle Hölzer oder WPC liegen im Trend, benötigen aber Pflege oder hochwertige Qualität, um nicht auszubleichen.'
      },
      {
        title: 'Höhe beachten',
        description: 'In Baden-Württemberg gelten für Sichtschutzzäune an der Grenze oft maximale Höhen von 1,80m. Wir kennen die lokalen Vorschriften.'
      },
      {
        title: 'Bepflanzung auflockern',
        description: 'Vermeiden Sie eine "Wand". Pflanzen Sie Gräser oder Bambus vor den Sichtschutz, um die Fläche optisch aufzubrechen.'
      }
    ],
    qa: [
      {
        question: 'Bieten Sie auch Lärmschutz an?',
        answer: 'Ja, spezielle Gabionen oder Massivholzzäune können auch den Straßenlärm deutlich reduzieren.'
      },
      {
        question: 'Kann man Beleuchtung nachrüsten?',
        answer: 'Absolut. Wir planen Kabelkanäle gleich mit ein oder nutzen hochwertige Solar-Lösungen.'
      }
    ]
  },
  {
    id: '5',
    slug: 'farbe-form-funktionalitaet-kuppenheim',
    title: 'Farbe, Form & Funktionalität: Gartengestaltung mit Azaleen & Mulch',
    excerpt: 'Wie man mit einfachen Mitteln wie Rindenmulch, farbenfrohen Azaleen und Formschnitt-Hecken große Wirkung erzielt. Ein Praxisbeispiel für pflegeleichte Gartengestaltung in Kuppenheim mit Rhododendron, Moorbeetpflanzen und Bodendecker. Erfahren Sie alles über sauren Boden, Mulcharten und farbliche Gartenplanung.',
    date: '2024-07-20',
    image: img10,
    story: [
      'Kontraste machen den Garten lebendig. In diesem Projekt in der Nähe von Kuppenheim haben wir gezeigt, wie man mit Farbe und Form spielt. Die leuchtenden Blüten der Azaleen (botanisch Rhododendron) stehen im wunderschönen Kontrast zum tiefen Grün der Hecken und dem natürlichen Braun des Rindenmulchs. Azaleen gehören zu den Moorbeetpflanzen und benötigen sauren Boden mit einem pH-Wert zwischen 4,5 und 5,5. In unserer Region mit eher neutralen bis leicht alkalischen Böden ist daher spezielle Rhododendron-Erde oder eine Bodenvorbereitung mit Torf und Nadelkompost notwendig.',
      'Rindenmulch ist dabei weit mehr als nur Dekoration. Er hält die Feuchtigkeit im Boden – gerade im heißen Oberrheingraben ein wichtiger Faktor für die Pflanzengesundheit, besonders für feuchtigkeitsliebende Azaleen. Zudem unterdrückt er Unkrautwuchs auf natürliche Weise und spart Ihnen so wertvolle Zeit bei der Gartenpflege. Beim Verrotten gibt Rindenmulch organische Säuren ab, die den pH-Wert senken – ideal für Moorbeetpflanzen. Allerdings entzieht frischer Mulch dem Boden Stickstoff, weshalb wir vor dem Auftragen immer eine Grunddüngung mit Hornspänen oder speziellem Rhododendrondünger empfehlen.',
      'Alternativ zu Rindenmulch bieten sich Pinienmulch (edler, länger haltbar, aber teurer), Hackschnitzel (günstig, aber grobkörniger) oder anorganische Mulchmaterialien wie Lavamulch und Kies an. Lavamulch ist besonders langlebig, speichert Wärme und gibt sie nachts ab, wirkt aber optisch kühler. Für moderne Gärten mit klaren Linien ist anthrazitfarbener Basaltsplitt eine elegante Lösung. Unter dem Mulch verlegen wir auf Wunsch ein Unkrautvlies (Gartenvlies), das die Unkrautunterdrückung noch verstärkt, aber wasserdurchlässig bleibt.',
      'Die strukturierte Anordnung der Beete sorgt für Ruhe und Ordnung, während die Pflanzen selbst für Lebendigkeit sorgen. Ein pflegeleichtes Konzept, das das ganze Jahr über gut aussieht. Im Frühjahr begeistern die Azaleen mit ihrer Blütenpracht in Weiß, Rosa, Rot oder Violett. Im Sommer bieten die immergrünen Rhododendron-Blätter einen satten grünen Hintergrund für Stauden und Gräser. Im Herbst setzen wir gezielt Herbstfärber wie Fothergilla oder Enkianthus ein, um auch in dieser Jahreszeit Farbakzente zu schaffen.'
    ],
    tips: [
      {
        title: 'Rindenmulch richtig auftragen',
        description: 'Eine Schicht von 5-7 cm ist ideal. Vorher den Boden gut lockern und düngen, da Mulch dem Boden Stickstoff entziehen kann.'
      },
      {
        title: 'Azaleen Standort',
        description: 'Sie lieben sauren Boden (Rhododendron-Erde) und halbschattige Plätze. Perfekt unter Bäumen.'
      }
    ],
    qa: [
      {
        question: 'Muss Mulch erneuert werden?',
        answer: 'Ja, er verrottet mit der Zeit. Wir empfehlen, alle 1-2 Jahre eine frische Schicht aufzutragen.'
      },
      {
        question: 'Welche Alternative gibt es zu Rindenmulch?',
        answer: 'Lavabulch oder Kies sind langlebiger, wirken aber optisch kühler. Pinienrinde ist eine edlere Variante.'
      }
    ]
  },
  {
    id: '6',
    slug: 'sportanlage-stadion-zaun',
    title: 'Objekteschutz für Vereine: Professioneller Stadionzaun für Sportanlagen',
    excerpt: 'Sicherheit für Sport und Spiel: Installation eines robusten grünen Maschendrahtzauns für Sportanlagen. Erfahren Sie alles über Ballfangzäune, Gewerbezäune, Objektschutz und DIN-Normen für Sportstätten. Funktional, langlebig und wartungsarm.',
    date: '2024-08-01',
    image: img18,
    story: [
      'Nicht nur Privatgärten, auch öffentliche Einrichtungen und Gewerbeobjekte vertrauen auf Luan Allround Service. Für ein Sportgelände durften wir einen neuen Ballfang- und Begrenzungszaun installieren. Hier standen Sicherheit, Robustheit und Langlebigkeit an erster Stelle. Im Gegensatz zu privaten Gartenzäunen müssen Sportplatzzäune deutlich höheren Belastungen standhalten – sowohl durch Ballkontakte als auch durch Witterungseinflüsse bei ganzjähriger Nutzung.',
      'Wir haben uns für einen klassischen, grünen Maschendrahtzaun mit verstärkten Pfosten (Durchmesser 60mm statt Standard 48mm) entschieden. Diese Lösung ist kosteneffizient, extrem langlebig und fügt sich durch die grüne RAL 6005 Moosgrün-Beschichtung harmonisch in die Umgebung ein. Der Zaun hält auch harten Ballkontakten stand und sichert das Gelände zuverlässig ab. Die Maschenweite von 50x50mm verhindert das Durchgreifen und entspricht den Sicherheitsanforderungen für Sportanlagen gemäß DIN 18034 (Spielplätze und Freiräume zum Spielen).',
      'Für Ballfangzäune hinter den Toren haben wir eine Höhe von 4 Metern gewählt, während die seitlichen Begrenzungszäune 2 Meter hoch sind. Die Pfosten wurden 100cm tief in Beton eingelassen (statt 80cm bei Privatgärten), um der erhöhten Belastung standzuhalten. Zusätzlich haben wir Eckpfosten und Torpfosten mit Streben verstärkt.',
      'Besondere Herausforderung war die Montage im Gefälle und die Integration von Toren für die Pflegefahrzeuge. Wir haben zwei Flügeltore mit 4 Metern Breite eingebaut, die auch für Traktoren und kleine LKW passierbar sind. Dank unserer Erfahrung im gewerblichen Zaunbau konnten wir das Projekt fristgerecht vor Saisonbeginn fertigstellen. Auf Wunsch bieten wir auch Wartungsverträge für Vereine und Gemeinden an – regelmäßige Inspektionen und schnelle Reparaturen bei Beschädigungen inklusive.'
    ],
    tips: [
      {
        title: 'Ballfangzäune Höhe',
        description: 'Hinter Toren empfehlen wir mindestens 4 bis 6 Meter Höhe. Normale Begrenzungszäune sind meist 2 Meter hoch.'
      },
      {
        title: 'Stabilität',
        description: 'Bei Sportplätzen müssen Pfosten tiefer einbetoniert werden als im Privatgarten, um der Belastung standzuhalten.'
      }
    ],
    qa: [
      {
        question: 'Bieten Sie auch Reparaturen für Vereinszäune an?',
        answer: 'Ja, wir reparieren Löcher im Maschendraht oder tauschen verbogene Pfosten kurzfristig aus.'
      },
      {
        question: 'Machen Sie auch Pflasterarbeiten für Wege?',
        answer: 'Selbstverständlich. Wir pflastern Zuwege, Zuschauerbereiche und Parkplätze passend zur Anlage.'
      }
    ]
  }
];


// --- Utility Components ---

const RevealOnScroll: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const SectionTitle: React.FC<{ subtitle: string; title: string; align?: 'left' | 'center' }> = ({ subtitle, title, align = 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">{subtitle}</span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-earth-900 relative inline-block">
      {title}
      <span className="absolute -bottom-4 left-0 w-1/2 h-1 bg-gold-500"></span>
    </h2>
  </div>
);

// Kontaktformular Komponente
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms Access Key
    formData.append("access_key", "675b6a89-4977-4eeb-9177-759897523b65");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);
        form.reset();
      } else {
        console.error("Web3Forms Error:", data);
        alert("Fehler beim Senden: " + (data.message || "Unbekannter Fehler"));
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Ein Netzwerkfehler ist aufgetreten.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-black p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto lg:mx-0">
        <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-6 md:mb-8 uppercase font-sans">
          Kostenfreie Beratung
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-white font-bold text-sm mb-1">
              Ihr Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Max Mustermann"
              className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-white font-bold text-sm mb-1">
              E-Mail *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="max@beispiel.de"
              className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              required
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-white font-bold text-sm mb-1">
              Telefon *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+49 1234 567890"
              className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              required
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label htmlFor="service" className="block text-white font-bold text-sm mb-1">
              Gewünschte Leistung *
            </label>
            <select
              id="service"
              name="service"
              className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base bg-white"
              required
            >
              <option value="" disabled selected>Bitte wählen...</option>
              <option value="Zaunbau">Zaunbau / Sichtschutz</option>
              <option value="Pflasterarbeiten">Pflasterarbeiten</option>
              <option value="Gartenpflege">Gartenpflege / Heckenschnitt</option>
              <option value="Rollrasen">Rollrasen</option>
              <option value="Sonstiges">Sonstiges</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-white font-bold text-sm mb-1">
              Ihre Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Ihre Nachricht..."
              rows={3}
              className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none"
              required
            />
          </div>

          {/* Checkbox for Terms */}
          <div className="flex items-start gap-2">
            <input
              id="agb"
              type="checkbox"
              className="mt-1"
              required
            />
            <label htmlFor="agb" className="text-xs text-gray-300">
              Ich stimme den{' '}
              <a
                href="/agb"
                className="text-green-500 underline hover:text-green-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                AGB
              </a>{' '}
              zu und erlaube die Kontaktaufnahme.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4a7c59] hover:bg-[#3d664a] text-white font-black uppercase py-4 rounded-md text-lg md:text-xl tracking-wide transition-colors duration-300 mt-2 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Sende...
              </>
            ) : (
              'Anfrage senden'
            )}
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative transform transition-all scale-100">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Vielen Dank!</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Wir haben Ihre Anfrage erhalten. Unser Team wird sich schnellstmöglich bei Ihnen melden.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#4a7c59] text-white font-bold py-3 rounded-lg hover:bg-[#3d664a] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Mobile-specific Contact Form (Styles matching reference photo)
const ContactFormMobile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "675b6a89-4977-4eeb-9177-759897523b65");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setShowPopup(true);
        form.reset();
      }
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-[#1a1c1d] font-bold text-xs mb-2 pl-1">Ihr Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Max Mustermann"
            className="w-full px-4 py-4 rounded-xl bg-[#f8f9fa] border-none text-[#1a1c1d] placeholder:text-gray-400 focus:ring-2 focus:ring-[#4a7c59] text-sm font-medium"
            required
          />
        </div>

        <div>
          <label className="block text-[#1a1c1d] font-bold text-xs mb-2 pl-1">Telefon *</label>
          <input
            type="tel"
            name="phone"
            placeholder="+49 1234 567890"
            className="w-full px-4 py-4 rounded-xl bg-[#f8f9fa] border-none text-[#1a1c1d] placeholder:text-gray-400 focus:ring-2 focus:ring-[#4a7c59] text-sm font-medium"
            required
          />
        </div>

        <div>
          <label className="block text-[#1a1c1d] font-bold text-xs mb-2 pl-1">E-Mail *</label>
          <input
            type="email"
            name="email"
            placeholder="max@beispiel.de"
            className="w-full px-4 py-4 rounded-xl bg-[#f8f9fa] border-none text-[#1a1c1d] placeholder:text-gray-400 focus:ring-2 focus:ring-[#4a7c59] text-sm font-medium"
            required
          />
        </div>

        <div>
          <label className="block text-[#1a1c1d] font-bold text-xs mb-2 pl-1">Gewünschte Leistung *</label>
          <select
            name="service"
            className="w-full px-4 py-4 rounded-xl bg-[#f8f9fa] border-none text-[#1a1c1d] focus:ring-2 focus:ring-[#4a7c59] text-sm font-medium bg-white"
            required
          >
            <option value="" disabled selected>Bitte wählen...</option>
            <option value="Zaunbau">Zaunbau / Sichtschutz</option>
            <option value="Pflasterarbeiten">Pflasterarbeiten</option>
            <option value="Gartenpflege">Gartenpflege / Heckenschnitt</option>
            <option value="Rollrasen">Rollrasen</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </div>

        <div>
          <label className="block text-[#1a1c1d] font-bold text-xs mb-2 pl-1">Ihre Nachricht *</label>
          <textarea
            name="message"
            placeholder="Ihre Nachricht..."
            rows={4}
            className="w-full px-4 py-4 rounded-xl bg-[#f8f9fa] border-none text-[#1a1c1d] placeholder:text-gray-400 focus:ring-2 focus:ring-[#4a7c59] text-sm resize-none font-medium"
            required
          />
        </div>

        <div className="flex items-start gap-3 mt-4 px-1">
          <input type="checkbox" className="mt-1 accent-[#4a7c59] w-4 h-4" required id="agb-mob-inner" />
          <label htmlFor="agb-mob-inner" className="text-[11px] text-gray-500 leading-normal">
            Ich stimme den <a href="/agb" className="text-[#4a7c59] font-bold underline">AGB</a> zu und erlaube die Kontaktaufnahme.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#4a7c59] text-white font-black py-4 rounded-xl uppercase tracking-wider shadow-xl shadow-green-900/10 active:scale-[0.98] transition-all disabled:opacity-50 mt-6 text-base"
        >
          {isSubmitting ? 'SENDE...' : 'ANFRAGE SENDEN'}
        </button>
      </form>

      {/* Success Popup (Same as global) */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative">
            <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vielen Dank!</h3>
            <p className="text-gray-600 mb-8 text-sm">Wir haben Ihre Anfrage erhalten und melden uns kurzfristig.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#4a7c59] text-white font-bold py-3 rounded-lg"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Hauptabschnitte ---

const Hero = () => {
  return (
    <div className="relative w-full bg-stone-100 flex flex-col lg:block">
      {/* Background Images - swapped via CSS for mobile/desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-slow-zoom lg:hidden h-screen"
        style={{ backgroundImage: `url("${img23}")` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center animate-slow-zoom hidden lg:block"
        style={{ backgroundImage: `url("${img22}")` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-black/20"></div>
      </div>

      {/* Unified Hero Content */}
      <div className="relative h-screen lg:min-h-screen w-full max-w-7xl mx-auto flex flex-col justify-center items-center lg:flex-row lg:justify-between px-4 sm:px-6 lg:px-8 z-10 pt-10 pb-20 lg:pb-12 lg:pt-20">

        {/* Text Section */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl mt-[-40px] lg:mt-0">
          <div className="overflow-hidden mb-2">
            <p className="text-[#c5a26a] lg:text-gold-500 font-bold tracking-[0.4em] lg:tracking-[0.3em] uppercase text-[10px] md:text-sm animate-[fadeInUp_0.8s_ease-out_forwards] lg:animate-[fadeInUp_1s_ease-out_forwards]">
              Ihr Gärtner in Kuppenheim & Umgebung
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.1] drop-shadow-lg lg:drop-shadow-2xl mb-6 lg:mb-8 animate-[fadeInUp_1s_ease-out_forwards] lg:animate-[fadeInUp_1.2s_ease-out_forwards]">
            Garten- & Landschaftsbau Kuppenheim 
          </h1>

          <p className="text-white lg:text-gray-200 text-lg md:text-xl font-medium lg:font-light max-w-[340px] lg:max-w-2xl mx-auto lg:mx-0 lg:border-l-2 lg:border-gold-500 lg:pl-6 my-8 lg:mb-10 animate-[fadeInUp_1.3s_ease-out_forwards] lg:animate-[fadeInUp_1.4s_ease-out_forwards] drop-shadow-md">
            <strong>Ihr Experte für Gartenbau in Kuppenheim und Umgebung</strong><br />
            Wir sind Ihr lokaler Fachbetrieb für professionellen Zaunbau, Pflasterarbeiten und Gartenpflege direkt in Kuppenheim. Egal ob Doppelstabmattenzaun oder Rollrasen – wir arbeiten in einem Umkreis von 150 km und liefern höchste Qualität für Rastatt, Karlsruhe, Baden-Baden und darüber hinaus.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 animate-[fadeInUp_1.4s_ease-out_forwards] lg:animate-[fadeInUp_1.6s_ease-out_forwards] w-full max-w-[340px] lg:max-w-none justify-center lg:justify-start">
            <Link
              to="/zaun-konfigurator"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 lg:px-8 py-3.5 lg:py-4 font-bold text-xs lg:text-sm uppercase tracking-[0.15em] shadow-xl transition-all duration-300 active:scale-95 hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 border border-emerald-400/40 rounded-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              <span>3D-Zaunplaner</span>
            </Link>
            <Link
              to={NavigationLinks.SERVICES}
              className="bg-[#c5a26a] lg:bg-gold-500 text-white lg:hover:bg-gold-600 px-6 lg:px-8 py-3.5 lg:py-4 font-bold text-xs lg:text-sm uppercase tracking-[0.15em] shadow-lg lg:shadow-xl transition-all duration-300 active:scale-95 lg:hover:-translate-y-0.5 text-center rounded-sm"
            >
              Leistungen
            </Link>
            <Link
              to={NavigationLinks.PROJECTS}
              className="border border-white/50 lg:border-white/30 bg-white/5 lg:bg-transparent backdrop-blur-sm text-white px-6 lg:px-8 py-3.5 lg:py-4 font-bold text-xs lg:text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white/10 active:scale-95 lg:hover:-translate-y-0.5 text-center rounded-sm"
            >
              Projekte
            </Link>
          </div>
        </div>

        {/* Contact Form Desktop */}
        <div className="hidden lg:block animate-[fadeInUp_1.6s_ease-out_forwards] z-20">
          <ContactForm />
        </div>

        {/* Scroll Arrows Mobile */}
        <div className="lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2">
          <img
            src={img21}
            alt="Scroll down"
            className="w-44 h-auto opacity-100 drop-shadow-xl"
          />
        </div>
      </div><br />



      {/* Mobile Contact Form Section (Card style under hero) */}
      <div className="lg:hidden relative z-30 -mt-8 bg-white rounded-t-[40px] px-6 pt-16 pb-16 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] w-full">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-earth-800 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={img20}
              alt="Logo Luan Allround Service"
              className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl md:text-3xl font-black text-earth-900 mb-6 uppercase font-sans">
            KOSTENFREIE BERATUNG
          </h2>
          <ContactFormMobile />
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <PencilRuler className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Zaunmontage",
      desc: (
        <>
          Wenn Sie auf der Suche nach einer stabilen und langlebigen Einfriedung sind, ist unsere professionelle Zaunmontage die ideale Lösung für Ihr Grundstück. Wir bieten Ihnen maßgeschneiderte Konzepte rund um den Sichtschutz und Montageservice, die nicht nur Sicherheit bieten, sondern auch optisch überzeugen. Egal ob robuste Doppelstabmatten, charmante Holzzäune oder moderne Kunststoffelemente – bei uns erhalten Sie alles aus einer Hand. Informieren Sie sich im Detail über unseren Service für <Link to="/zaunbau-kuppenheim" className="text-gold-500 underline font-bold">Zaunbau in Kuppenheim</Link> und lassen Sie sich von unseren Referenzen inspirieren.
        </>
      ),
      link: "/zaunbau-kuppenheim"
    },
    {
      icon: <Shovel className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Gartenpflege",
      desc: (
        <>
          Eine gepflegte Grünanlage erfordert Zeit, Fachwissen und regelmäßige Zuwendung – genau das bieten wir Ihnen mit unserer umfassenden Gartenpflege. Von der Rasenpflege mit Vertikutieren und Mähen bis hin zum fachmännischen Heckenschnitt, der das strukturierte Erscheinungsbild Ihrer Grünflächen bewahrt. Unser erfahrenes Team kümmert sich um jedes Detail, damit Ihr Garten das ganze Jahr über erstrahlt. Entdecken Sie unser Angebot zur professionellen <Link to="/gartenpflege-kuppenheim" className="text-gold-500 underline font-bold">Gartenpflege für Kuppenheim</Link> und genießen Sie eine echte Wohlfühloase ohne eigenen Arbeitsaufwand.
        </>
      ),
      link: "/gartenpflege-kuppenheim"
    },
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Pflasterarbeiten",
      desc: (
        <>
          Ein stilvoll gestalteter Außenbereich beginnt oft mit robusten, ansprechenden Gehwegen und einer perfekt angelegten Terrasse. Durch präzise Pflasterarbeiten verleihen wir Einfahrten, Wegen und Innenhöfen nicht nur eine hohe Funktionalität und Langlebigkeit, sondern auch eine exklusive Optik, die zu Ihrem Haus passt. Von der Wahl des richtigen Natur- oder Betonsteins bis zur fachgerechten Drainageplanung sind wir Ihr starker Partner. Informieren Sie sich über unsere maßgeschneiderten Lösungen für <Link to="/pflasterarbeiten-kuppenheim" className="text-gold-500 underline font-bold">Pflasterarbeiten in Kuppenheim</Link> und starten Sie Ihr Gartenprojekt mit uns.
        </>
      ),
      link: "/pflasterarbeiten-kuppenheim"
    },
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Rollrasen & Rasenpflege",
      desc: (
        <>
          Ein sattgrüner, dichter Rasen ist das Herzstück jedes schönen Gartens und verwandelt jede Außenanlage in einen echten Hingucker. Unser Service zur professionellen Rasenpflege und Neuverlegung sorgt dafür, dass Ihre Grünflächen gesund und widerstandsfähig bleiben. Durch den gezielten Einsatz hochwertiger Düngemittel und die Verlegung von Premium-Zuchtgras garantieren wir Ihnen sofort sichtbare Ergebnisse, die lange anhalten. Erfahren Sie mehr darüber, wie wir Sie bei der Verlegung von <Link to="/rollrasen-kuppenheim" className="text-gold-500 underline font-bold">Rollrasen in Kuppenheim</Link> unterstützen und Ihren Garten kurzfristig verwandeln können.
        </>
      ),
      link: "/rollrasen-kuppenheim"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="Unsere Leistungen" title="Handwerkliche Qualität" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((s, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="block h-full">
                <div className="h-full p-8 md:p-10 bg-white group transition-all duration-500 shadow-sm hover:shadow-xl border-b-2 border-transparent hover:border-gold-500">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-stone-100 group-hover:bg-earth-900 rounded-full flex items-center justify-center text-earth-900 group-hover:text-gold-500 mb-6 transition-colors">
                    {s.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-earth-900 mb-4 transition-colors">{s.title}</h2>
                  <p className="text-gray-600 text-base leading-loose transition-colors">{s.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => (
  <section className="py-16 md:py-24 bg-earth-900 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('images/moroccan-flower.png')] opacity-5 pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <RevealOnScroll>
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border border-gold-500/30 z-0"></div>
            <img
              src="images/8.jpeg"
              alt="Arbeiten von Luan Allround Service"
              loading="lazy"
              className="relative z-10 w-full h-[400px] md:h-[600px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white text-earth-900 p-4 md:p-8 shadow-xl max-w-xs hidden lg:block z-20">
              <p className="font-serif text-lg md:text-2xl italic">"Professionell, zuverlässig und mit Liebe zum Garten."</p>
              <p className="text-right mt-2 md:mt-4 font-bold text-gold-600 text-xs md:text-sm tracking-widest">— Luan Allround Service</p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="lg:w-1/2 space-y-6 md:space-y-8 mt-8 lg:mt-0">
          <RevealOnScroll delay={200}>
            <span className="text-gold-500 font-bold tracking-[0.2em] text-xs uppercase">Unsere Philosophie</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4 leading-tight">Handwerkliche <span className="text-gold-500 italic">Tradition</span></h2>

            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed mt-4 md:mt-6">
              Ich bin Memedali Limani, seit Jahren Ihr Ansprechpartner für Garten- und Landschaftsbau in Kuppenheim. Von der Zaunmontage mit Doppelstabmatten über Rasenpflege bis zur Terrassenreinigung – wir arbeiten sauber, termingerecht und mit Handwerker-Erfahrung, die man sieht. In Kuppenheim, Rastatt, Karlsruhe sowie im Umkreis von 150 km.
            </p>

            {/* Unternehmensteil */}
            <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/5 border border-white/10 rounded-sm mt-6 md:mt-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <img
                src="images/logo.png"
                alt="Logo Luan Allround Service"
                loading="lazy"
                className="w-25 h-16 md:w-35 md:h-24 object-cover border-2 border-gold-500 shadow-md"
              />
              <div>
                <h4 className="text-lg md:text-xl font-serif text-white">Luan Allround Service</h4>
                <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1 md:mb-2">Garten- & Landschaftsbau</p>
                <p className="text-gray-400 text-xs italic">"Qualität, die Sie spüren - Service, der überzeugt."</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
              {[
                { title: "Fachgerechte Ausführung", desc: "Fundamente frostsicher, Materialien langlebig – Arbeit mit Qualität." },
                { title: "Termine einhalten", desc: "Zuverlässige Termine und saubere Baustellen – wie vereinbart." },
                { title: "Individuelle Lösungen", desc: "Angepasst an Bodenverhältnisse, Hanglage und Ihre Wünsche." }
              ].map((item, i) => (
                <div key={i} className="flex">
                  <div className="mt-1 mr-3 md:mr-4 text-gold-500 shrink-0"><CheckCircle size={20} className="md:w-6 md:h-6" /></div>
                  <div>
                    <h4 className="text-white font-bold font-serif text-base md:text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 md:pt-8">
              <Link to={NavigationLinks.ABOUT} className="inline-flex items-center text-gold-500 hover:text-white uppercase tracking-widest font-bold text-sm transition-colors border-b border-gold-500 pb-1 hover:border-white">
                Unser Unternehmen kennenlernen <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsGallery = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F0] relative overflow-hidden">
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="Unsere Projekte" title="Aktuelle Projekte & Konzepte" />
        </RevealOnScroll>

        {/* Galerie Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
          {blogPosts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 50}>
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 h-full">
                  <img
                    src={String(post.image)}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-earth-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                    <span className="text-gold-500 text-xs tracking-widest uppercase mb-2">
                      Blog-Beitrag lesen
                    </span>
                    <h4 className="text-lg md:text-2xl font-serif text-white mb-3 md:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 line-clamp-2">
                      {post.title}
                    </h4>
                    <button className="text-white border-b border-white pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors text-sm uppercase tracking-widest">
                      Mehr erfahren
                    </button>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link to={NavigationLinks.PROJECTS} className="inline-block px-6 md:px-10 py-3 md:py-4 border-2 border-earth-900 text-earth-900 font-bold uppercase tracking-widest hover:bg-earth-900 hover:text-white transition-colors text-sm md:text-base bg-white/50 backdrop-blur-sm">
            Alle Projekte ansehen
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- Styles for Animations ---
const AnimationStyles = () => (
  <style>{`
    @keyframes wiggle {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }
    .animate-wiggle {
      animation: wiggle 1s ease-in-out infinite;
    }
  `}</style>
);

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFirstExpanded, setIsFirstExpanded] = useState(false);

  const googleMapsUrl = "https://www.google.com/maps/place/Luan+Allround+Service/@49.1195743,9.1717969,1768539a,35y,350.44h/data=!3m1!1e3!4m18!1m9!3m8!1s0x47971d9ddc21dc61:0x8b73b203f70f96b!2sLuan+Allround+Service!8m2!3d48.8264987!4d8.2535412!9m1!1b1!16s%2Fg%2F11rr2yqn18!3m7!1s0x47971d9ddc21dc61:0x8b73b203f70f96b!8m2!3d48.8264987!4d8.2535412!9m1!1b1!16s%2Fg%2F11rr2yqn18?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D";

  const allReviews = [
    { name: "Matthias Schnepf", time: "vor 1 Monat", text: "Super nette Mitarbeiter und Chef. Machen Ihre Arbeiten sehr genau und professionell. Immer wieder gerne mit so einer super Firma. Haben uns einen Zaun machen lassen von 90 Metern – lief alles genau nach Plan!", rating: 5 },
    { name: "Dieter Wolf", time: "vor 6 Monaten", text: "Die Firma erstellte um Teile unseres Vereinsgeländes einen 260 m Doppelstabmattenzaun in höchster Qualität incl. Rückbau und Entsorgung des alten Zauns. Der sehr faire Preis aus dem Angebot wurde trotz den unerwarteten Schwierigkeiten (teilweise unbekannte überwucherte Schwarzdecke, Wurzeln aus altem Baumbestand, …) eingehalten. Die Firma hielt alle zeitlichen Zusagen ein und stimmte jede Entscheidung mit uns ab. Tolle Kommunikation und fachgerechte Beratung. Wir können daher die Firma uneingeschränkt empfehlen.", rating: 5 },
    { name: "Ralph K", time: "vor 6 Monaten", text: "Gute Firma, sehr zu empfehlen. Es wurden über 230 m Doppelstabmatten-Zaun nach Demontage des alten Zauns verbaut. Vom Angebot über Besprechungen vor Ort, der Durchführung bis zur Endabnahme alles schnell, akkurat und zur vollsten Zufriedenheit.", rating: 5 },
    { name: "Michael K.", time: "vor 7 Monaten", text: "Unser Vorhaben, einen Doppelstabmattenzaun zu stellen wurde sehr schnell und unkompliziert umgesetzt. Sehr freundlicher Kontakt, fairer Preis und super Endergebnis. Ich kann die Firma Luan Allround Service uneingeschränkt weiterempfehlen!", rating: 5 },
    { name: "Dennis Stoll", time: "vor 9 Monaten", text: "Die Firma ist nur zum empfehlen. Haben einen 18 Meter Zaun setzen lassen. Schnelle Terminvergabe, schnelles und sauberes Arbeiten. Top umgesetzt und super Qualität. Das 3-Mann-Team hat super zusammen gearbeitet. Jeder weiß was er zu tun hat.", rating: 5 },
    { name: "Thomas Lindner", time: "vor 9 Monaten", text: "Einfach zusammengefasst: schnell, sauber, perfekt! Der Zaun, 35 m, wurde innerhalb von 5 Stunden gesetzt, sieht Top aus! Die Arbeiter waren sehr freundlich und höflich! Der Kontakt mit dem Chef, Herrn Limani, lief freundlich und kompetent! Danke für die schnelle Umsetzung👍😃 Das Team kann man qualitativ und preislich empfehlen!!!", rating: 5 },
    { name: "Jana D", time: "vor 9 Monaten", text: "Schnelles Angebot erhalten, schnelle Terminvereinbarung. Alle Wünsche wurden erfüllt, schnelle, saubere und ordentliche Arbeit. Wir sind sehr zufrieden. Vielen Dank 👍", rating: 5 },
    { name: "Rhina Pross", time: "vor 11 Monaten", text: "Die Terminabsprache verlief sehr angenehm und mein Wunsch nach einem früheren Termin wurde berücksichtigt, sobald es möglich war. Das Team aus drei freundlichen und hilfsbereiten Mitarbeitern arbeitete zügig und setzte die rund 50 m Zaun am Hang sauber und zuverlässig um. Die Kommunikation mit Herrn Limani war stets lösungsorientiert und professionell.", rating: 4 },
    { name: "Toni D'Agostino", time: "vor 1 Jahr", text: "Ein Super-Team! Vorab wird ein Vor-Ort-Termin vereinbart, um sich über die Situation einen Überblick zu verschaffen. Gleichzeitig wird man beraten, was besser gemacht werden kann. Am Einbautag wird alles sauber, präzise und mit Erfahrung eingebaut. Mit dem Ergebnis bin ich sehr zufrieden und kann die Firma sehr empfehlen!", rating: 5 },
    { name: "Vincenzo P", time: "vor 8 Monaten", text: "Super kompetente Jungs, die wissen was sie machen. Von Anfang bis Ende TOP!!! Nur zu Empfehlen!", rating: 5 },
    { name: "Tanja M", time: "vor 1 Jahr", text: "Der Zaunbau bei meinem Vater hat super geklappt… tolle Arbeit, sehr gute Kommunikation. Wir danken dem ganzen Team und können die Firma nur weiterempfehlen.", rating: 5 },
    { name: "Thomas Huber", time: "vor 6 Monaten", text: "Hochwertige Arbeitsleistung, einfache und freundliche Terminabstimmung. Absolut empfehlenswert!", rating: 5 },
    { name: "Gerhard Gerschner", time: "vor 1 Jahr", text: "Qualitativ sehr gute Arbeit. Super freundliches Team. Die Jungs wissen was sie tun. Immer hilfsbereit und sehr schnell. Wer einen Zaun braucht, sollte sich bei Luan Allround Service melden!!!", rating: 5 },
    { name: "Katrin Schindler", time: "vor 1 Jahr", text: "Sehr schnelle und sehr günstige Firma. Innerhalb weniger Tage wurde der Zaun gestellt. Super nette Leute. Absolut vertrauenswürdig. Kann ich jedem empfehlen!!!!!!!!", rating: 5 },
    { name: "Marcus Bräuning", time: "vor 1 Jahr", text: "Danke nochmals für eure gute Arbeit, obwohl es geregnet hat wie aus Eimern! Die Bäume habt ihr wieder top in Form geschnitten, wie es gewünscht war – echt klasse. Danke für eure schnelle Unterstützung und ihr seid ein tolles Team!", rating: 5 },
    { name: "D. H.", time: "vor 8 Monaten", text: "Super netter Kontakt, super Arbeit! Vielen Dank!", rating: 5 },
    { name: "UGI Performance", time: "vor 7 Monaten", text: "Super Kompetenz. Fixer Aufbau. Tolles Design. Vielen Dank. Nur weiter zu empfehlen – Top Qualität.", rating: 5 },
    { name: "Johann Haas", time: "vor 8 Monaten", text: "Super Team, nur zu empfehlen 👍", rating: 5 },
    { name: "Nuriamet Limani", time: "vor 6 Monaten", text: "Hervorragende Arbeit beim Zaunbau und Pflastern. Absolut zuverlässig und pünktlich!", rating: 5 },
    { name: "Xhemail Asllani", time: "vor 10 Monaten", text: "Sehr gute Arbeit und freundliches Auftreten. Immer wieder gerne!", rating: 5 },
    { name: "Dennis Güttgemanns", time: "vor 1 Jahr", text: "Sehr gute Beratung und saubere Ausführung unseres Doppelstabmattenzauns. Absolute Empfehlung!", rating: 5 },
    { name: "Zülfi Koc", time: "vor 1 Jahr", text: "Hervorragende Qualität, saubere Montage unseres Zauns und super Service.", rating: 5 },
    { name: "Sebastian Morina", time: "vor 3 Jahren", text: "Sehr kompetente, zuverlässige sowie preiswerte Firma. Empfehlenswert, holt euch gerne mal ein Angebot rein und überzeugt euch selbst!", rating: 5 },
    { name: "Florim Sinani", time: "vor 3 Jahren", text: "Guten Tag, bin mit der Arbeit sehr zufrieden und kann nur Gutes berichten. Freundliche Arbeiter und saubere Arbeit.", rating: 5 },
    { name: "Tanja Möhrmann", time: "vor 4 Jahren", text: "Sehr zu empfehlen! Hochwertiges Material, sehr freundlicher Kontakt und guter, hilfsbereiter Service.", rating: 5 },
    { name: "J4akob", time: "vor 3 Jahren", text: "Top Qualität, super Arbeit!", rating: 5 },
    { name: "Suate Sinani", time: "vor 3 Jahren", text: "Sehr zu empfehlen 👍 Saubere und schnelle Arbeit.", rating: 5 },
    { name: "Raphael Girrbach", time: "vor 3 Jahren", text: "Top Reaktionsfähigkeit, Pünktlichkeit, Qualität und fairer Preis.", rating: 5 },
    { name: "KANAS KOMPANI", time: "vor 4 Jahren", text: "Top Partner im Bereich Gartenbau und Zaunanlagen.", rating: 5 },
    { name: "Michael Bastian", time: "vor 4 Jahren", text: "Super Service, fairer Preis und erstklassige Arbeit.", rating: 5 },
    { name: "Mehmet Yüksel", time: "vor 4 Jahren", text: "Sehr zuverlässig, fleißig und freundlich. Gerne wieder!", rating: 5 }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(allReviews.length / itemsPerPage);
  const displayedReviews = allReviews.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const reviewSchema = allReviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": "Luan Allround Service",
      "image": "https://luan-allround-service.de/images/logo_resized.png"
    },
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": (review as any).rating || "5",
      "bestRating": "5"
    },
    "reviewBody": review.text,
    "publisher": {
      "@type": "Organization",
      "name": "Google"
    }
  }));

  return (
    <section className="py-16 md:py-24 bg-stone-100 relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json" data-schema="reviews">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url('./images/grid.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="Google & MyHammer Bewertungen" title="Was unsere Kunden sagen" />
        </RevealOnScroll>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {displayedReviews.map((review, i) => (
            <RevealOnScroll key={`${currentPage}-${i}`} delay={i * 100}>
              <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg h-full flex flex-col hover:shadow-xl transition-shadow">
                {/* Header with Avatar and Name */}
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-bold text-lg mr-3 shrink-0">
                    {review.name[0]}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-1 mb-1">
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-earth-900 text-base md:text-lg hover:text-gold-500 transition-colors cursor-pointer"
                      >
                        {review.name}
                      </a>
                      <div className="relative group">
                        <img src="https://img.icons8.com/color/48/verified-account.png" alt="Verified Badge" className="w-4 h-4" />
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          Verifizierte Bewertung
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">{review.time}</p>
                  </div>
                </div>

                {/* Google Logo */}
                <div className="mb-3 text-xs">
                  <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="0" y="18" fontSize="16" fontWeight="500">
                      <tspan fill="#4285F4">G</tspan>
                      <tspan fill="#EA4335">o</tspan>
                      <tspan fill="#FBBC04">o</tspan>
                      <tspan fill="#34A853">g</tspan>
                      <tspan fill="#EA4335">l</tspan>
                      <tspan fill="#4285F4">e</tspan>
                    </text>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex text-gold-500 mb-4">
                  {[...Array(5)].map((_, j) => {
                    const rating = (review as any).rating || 5;
                    return (
                      <Star
                        key={j}
                        size={16}
                        fill={j < rating ? "currentColor" : "none"}
                        className={j < rating ? "text-gold-500" : "text-gray-300"}
                      />
                    );
                  })}
                </div>

                {/* Review Text */}
                <div className="flex-grow">
                  <p className={`text-gray-700 text-sm md:text-base leading-relaxed ${review.name === "Rhina Pross" && !isFirstExpanded ? 'line-clamp-5' : ''}`}>
                    {review.text}
                  </p>
                  {review.name === "Rhina Pross" && !isFirstExpanded && (
                    <button
                      onClick={() => setIsFirstExpanded(true)}
                      className="text-gold-500 text-sm font-bold mt-1 hover:underline focus:outline-none"
                    >
                      (mehr sehen)
                    </button>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="px-6 py-2 md:py-3 bg-earth-900 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-gold-500 hover:text-earth-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all text-sm md:text-base"
          >
            ← Zurück
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-sm md:text-base transition-all ${i === currentPage
                  ? 'bg-gold-500 text-earth-900'
                  : 'bg-earth-900 text-white hover:bg-gold-500 hover:text-earth-900'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="px-6 py-2 md:py-3 bg-earth-900 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-gold-500 hover:text-earth-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all text-sm md:text-base"
          >
            Weiter →
          </button>
        </div>

        {/* Rating Trust Badges: Google & MyHammer */}
        <div className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-earth-900 hover:text-gold-600"
          >
            <span className="font-bold text-blue-600">Google</span>
            <span className="text-sm font-semibold">4,9 / 5,0 ⭐⭐⭐⭐⭐</span>
            <span className="text-xs text-gray-500 font-medium">(31 Bewertungen)</span>
          </a>
          <a
            href="https://www.my-hammer.de/auftragnehmer/luan-allround-service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-earth-900 hover:text-gold-600"
          >
            <span className="font-bold text-orange-600">MyHammer</span>
            <span className="text-sm font-semibold">4,8 / 5,0 ⭐⭐⭐⭐⭐</span>
            <span className="text-xs text-gray-500 font-medium">(6 Bewertungen)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const InteractiveMap = () => (
  <div className="w-full h-[300px] md:h-[500px] relative">
    <iframe
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=de&amp;q=Luan%20Allround%20Service,%20Friedrichstra%C3%9Fe%20100,%2076456%20Kuppenheim+(Luan%20Allround%20Service)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Business Profile Luan Allround Service"
      className="transition-all duration-700"
    ></iframe>
  </div>
);

// --- Seitenzusammenfassungen ---

const PageHeader: React.FC<{ title: string; subtitle: string; image: string }> = ({ title, subtitle, image }) => (
  <div className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] w-full overflow-hidden flex items-center justify-center">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="relative z-10 text-center px-4">
      <span className="block text-gold-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-3 md:mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">{subtitle}</span>
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-4 md:mb-6 animate-[fadeInUp_1s_ease-out_forwards]">{title}</h1>
    </div>
  </div>
);

const WirMachenAuchSection = () => (
  <section className="py-16 md:py-24 bg-white relative flex justify-center text-center">
    {/* Grid Background Pattern */}
    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
      backgroundImage: `url('./images/grid.png')`,
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px'
    }}></div>

  </section>
);

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Luan Allround Service",
  "image": "https://luan-allround-service.de/images/logo_resized.png",
  "@id": "https://luan-allround-service.de/#organization",
  "url": "https://luan-allround-service.de",
  "telephone": "+4917647999118",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Friedrichstraße 100",
    "addressLocality": "Kuppenheim",
    "postalCode": "76456",
    "addressRegion": "Baden-Württemberg",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8264987,
    "longitude": 8.2535412
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "32"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "07:30",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "07:30",
      "closes": "13:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "12:00"
    }
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 48.8265,
      "longitude": 8.2535
    },
    "geoRadius": "150000" // 150 km
  },
  "department": [
    {
      "@type": "LocalBusiness",
      "name": "Garten- und Landschaftsbau",
      "telephone": "+4917647999118"
    },
    {
      "@type": "LocalBusiness",
      "name": "Zaunbau & 3D-Zaunkonfigurator",
      "telephone": "+4917647999118"
    }
  ]
};

const HomePage = () => (
  <>
    <SEOHead
      title="Garten- & Landschaftsbau in Kuppenheim | Zaunbau Rastatt | Luan Allround Service"
      description="Ihr Experte für Garten- & Landschaftsbau in Kuppenheim, Zaunbau in Rastatt & 3D-Zaunplaner. Kostenloses Vor-Ort-Aufmaß & Festpreise: 0176 47999118."
      keywords="Zaun in Kuppenheim, Zaun Kuppenheim, Zaunbau in Kuppenheim, Zaun Rastatt, Zaunbau in der Nähe, Allrounder, Zaun, Zaunbau Landau, Doppelstabmattenzaun, Zäune Rastatt 76437, Zaunbauer in der Nähe, Zäune Waldbronn 76337, Zaunbau"
      canonical="https://luan-allround-service.de/"
    />
    <SchemaMarkup type="LocalBusiness" data={{...homePageSchema, "@type": undefined, "@context": undefined}} />
    <Hero />
    <ZaunKonfiguratorSection />
    <ServicesSection />
    <WirMachenAuchSection />
    <AboutPreview />
    <ProjectsGallery />
    <Testimonials />
    <InteractiveMap />
  </>
);

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Garten- und Landschaftsbau",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Luan Allround Service"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 48.8265,
      "longitude": 8.2535
    },
    "geoRadius": "150000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Unsere Leistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Zaunmontage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gartenpflege"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pflasterarbeiten"
        }
      }
    ]
  }
};

const ServicesPage = () => (
  <>
    <SEOHead
      title="Unsere Leistungen – Zaunbau, Gartenpflege & Reinigung in Kuppenheim | Luan Allround Service"
      description="Professionelle Garten- und Landschaftsbau Dienstleistungen in Kuppenheim und im Umkreis von 150 km: ✓ Zaunmontage ✓ Rasenpflege ✓ Heckenschnitt ✓ Terrassenreinigung ✓ Pflasterarbeiten. Faire Preise, schnelle Umsetzung. Jetzt anfragen!"
      keywords="Zaunbau Kuppenheim, Gartenpflege Kuppenheim, Rasenmähen Rastatt, Heckenschnitt Baden-Baden, Terrassenreinigung Karlsruhe, Pflasterarbeiten Kuppenheim, Hochdruckreinigung, Gartenbau Dienstleistungen"
    />
    <SchemaMarkup type="Service" data={{...servicesPageSchema, "@type": undefined, "@context": undefined}} />
    <PageHeader
      title="Unsere Leistungen"
      subtitle="Handwerkskunst & Qualität"
      image="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000&auto=format&fit=crop&quot"
    />
    <ServicesSection />
    <section className="py-12 md:py-20 bg-earth-900 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6">Individuelle Beratung gewünscht?</h2>
        <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">Wir bieten maßgeschneiderte Lösungen für private und gewerbliche Kunden.</p>
        <Link to={NavigationLinks.CONTACT} className="inline-block px-6 md:px-8 py-2 md:py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-earth-900 transition-colors uppercase tracking-widest font-bold text-sm md:text-base">
          Beratung anfragen
        </Link>
      </div>
    </section>
    <Testimonials />
  </>
);

const ProjectsPage = () => (
  <>
    <SEOHead
      title="Projekte & Referenzen – Garten- & Zaunbau in Kuppenheim | Luan Allround Service"
      description="Entdecken Sie unsere erfolgreich abgeschlossenen Gartenbau-Projekte in Kuppenheim, Rastatt, Baden-Baden und im Umkreis von 150 km. ✓ Vorher-Nachher-Vergleiche ✓ Zaunbau ✓ Gartenanlagen ✓ Pflasterarbeiten. Überzeugen Sie sich von unserer Qualität!"
      keywords="Gartenbau Projekte Kuppenheim, Zaunbau Referenzen, Landschaftsbau Beispiele, Vorher Nachher Garten, Gartenprojekte Rastatt, Referenzen Gartenbau Baden-Baden"
    />
    <PageHeader
      title="Projekte"
      subtitle="Inspirationen & Realisierungen"
      image="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000&auto=format&fit=crop&quot"
    />
    <ProjectsGallery />
    <div className="bg-stone-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 italic text-sm md:text-base">Ausgewählte Projekte aus den Jahren 2020-2024</p>
      </div>
    </div>
  </>
);

const AboutPage = () => (
  <>
    <SEOHead
      title="Über Uns – Ihr Landschaftsgärtner in Kuppenheim | Memedali Limani | Luan Allround Service"
      description="Erfahren Sie mehr über Luan Allround Service. Ihr zuverlässiger Partner für Gartenbau in Kuppenheim und 150 km Umkreis mit über 5 Jahren Erfahrung, 100+ realisierten Projekten und 100% Kundenzufriedenheit. Professionell, pünktlich, fair."
      keywords="Landschaftsgärtner Kuppenheim, Memedali Limani, Luan Allround Service Team, Gartenbau Erfahrung, Gärtner Rastatt, Landschaftsbau Firma Baden-Württemberg"
    />
    <PageHeader
      title="Über Uns"
      subtitle="Unsere Geschichte"
      image="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000&auto=format&fit=crop&quot"
    />
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url('./images/grid.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="prose prose-sm md:prose-lg prose-stone mx-auto">
          {/* Unternehmen */}
          <div className="flex flex-col items-center mb-8 md:mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-earth-800 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={img20}
                alt="Unser Team"
                className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>
            <div className="mt-4 md:mt-6 text-center">
              <h4 className="text-xl md:text-2xl font-serif text-earth-900">Memedali Limani   </h4>
              <p className="text-gold-500 text-xs md:text-sm font-bold uppercase tracking-widest">Garten- & Landschaftsbau</p>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif text-earth-900 mb-4 md:mb-6 text-center">Handwerk mit Herz und regionaler Expertise</h3>
          <p className="leading-loose text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
            Als Ihr lokaler Landschaftsgärtner für den Raum Kuppenheim, Rastatt, Baden-Baden, Karlsruhe und im gesamten Umkreis von 150 km bringe ich Erfahrung, Zuverlässigkeit und ein Auge fürs Detail in jedes Projekt. Ob Gartenpflege, professioneller Zaunbau oder gründliche Reinigungsarbeiten – mein Ziel ist es, Ihre Außenbereiche in gepflegte und funktionale Wohlfühlorte zu verwandeln.
          </p>
          <p className="leading-loose text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
            Wir verstehen, dass jeder Garten einzigartig ist. Deshalb setzen wir auf eine persönliche Beratung und maßgeschneiderte Konzepte, die genau auf Ihre Wünsche und die Gegebenheiten vor Ort abgestimmt sind. Wir verbinden traditionelle Handwerkskunst mit modernen Techniken, um nachhaltige und ästhetisch ansprechende Ergebnisse zu schaffen, an denen Sie lange Freude haben werden.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 md:py-12 text-center border-y border-gray-200 my-8 md:my-12">
            <div>
              <span className="block text-2xl md:text-4xl font-serif text-gold-500 mb-1 md:mb-2">5+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Jahre Erfahrung</span>
            </div>
            <div>
              <span className="block text-2xl md:text-4xl font-serif text-gold-500 mb-1 md:mb-2">100+</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Realisierte Projekte</span>
            </div>
            <div>
              <span className="block text-2xl md:text-4xl font-serif text-gold-500 mb-1 md:mb-2">100%</span>
              <span className="text-xs uppercase tracking-widest text-gray-500">Kundenzufriedenheit</span>
            </div>
          </div>

          {/* Kontaktbereich */}
          <div className="bg-stone-50 p-6 md:p-8 rounded-lg mt-8 md:mt-12">
            <h4 className="text-xl font-serif text-earth-900 mb-4 text-center">Kontakt</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <Phone className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                <a href="tel:+4917647999118" className="text-earth-900 hover:text-gold-500 transition-colors font-bold">+49 17647999118</a>
              </div>
              <div>
                <Send className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                <a href="mailto:luanallroundservice@gmail.com" className="text-earth-900 hover:text-gold-500 transition-colors">luanallroundservice@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <InteractiveMap />
  </>
);

const ContactPage = () => (
  <>
    <PageMeta
      title="Kontakt & Kostenloses Angebot – Luan Allround Service"
      description="Kontaktieren Sie uns für ein unverbindliches Angebot! Telefon: 0176 47999118. Wir beraten Sie gerne zu Ihrem Gartenprojekt in Kuppenheim & Umgebung."
    />
    <PageHeader
      title="Kontakt"
      subtitle="Beratung & Anfragen"
      image="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000&auto=format&fit=crop&quot"
    />

    {/* Detaillierter Kontaktbereich */}
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Kontaktinformationen */}
          <div>
            <RevealOnScroll>
              <SectionTitle subtitle="Kontaktieren Sie uns" title="Ihre Anfrage" align="left" />
            </RevealOnScroll>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start">
                <MapPin className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg text-earth-900 mb-2">Unser Standort</h4>
                  <p className="text-gray-600">Deutschland (Tätig im Umkreis von 150 km)<br />Anfahrt bundesweit auf Anfrage</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg text-earth-900 mb-2">Telefon</h4>
                  <a href="tel:+4917647999118" className="text-earth-900 hover:text-gold-500 transition-colors font-bold text-lg">+49 17647999118</a>
                  <p className="text-gray-600 text-sm mt-1">Montag bis Freitag: 9:00 - 18:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-start">
                <Send className="text-gold-500 mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg text-earth-900 mb-2">Email</h4>
                  <a href="mailto:luanallroundservice@gmail.com" className="text-earth-900 hover:text-gold-500 transition-colors">luanallroundservice@gmail.com</a>
                </div>
              </div>

              {/* Soziale Medien */}
              <div className="pt-6">
                <h4 className="font-serif text-lg text-earth-900 mb-4">Folgen Sie uns</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61584302041280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-earth-900 text-white p-3 rounded-full hover:bg-gold-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* Kontaktformular */}
          <div>
            <RevealOnScroll delay={200}>
              <ContactForm />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>

    <InteractiveMap />
  </>
);

// Blog List Page
const BlogListPage = () => (
  <>
    <SEOHead
      title="Garten-Ratgeber & Blog – Tipps vom Profi | Luan Allround Service Kuppenheim"
      description="Wertvolle Tipps zur Gartenpflege, Zaunbau-Ratgeber und Einblicke in unsere tägliche Arbeit in Kuppenheim. ✓ Praktische Anleitungen ✓ Vorher-Nachher-Projekte ✓ Expertenwissen. Bleiben Sie informiert!"
      keywords="Gartenpflege Tipps, Zaunbau Ratgeber, Gartenbau Blog, Landschaftsbau Tipps Kuppenheim, Rasen pflegen, Hecke schneiden Anleitung, Garten Ratgeber Baden-Württemberg"
    />
    <PageHeader
      title="Blog & Ratgeber"
      subtitle="Tipps & Erfahrungen"
      image="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000&auto=format&fit=crop"
    />
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: "url('./images/grid.png')" as string,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="Aus der Praxis" title="Unsere Projekt-Geschichten" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 100}>
              <Link to={`/blog/${post.slug}`} className="group block">
                <div className="bg-white border border-stone-200 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={String(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-earth-900 mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-gold-500 font-bold text-sm uppercase tracking-widest">
                      Weiterlesen <ArrowRight className="ml-2" size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  </>
);

// Individual Blog Post Page
const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-earth-900 mb-4">Blog-Beitrag nicht gefunden</h1>
          <Link to="/blog" className="text-gold-500 hover:text-gold-600 font-bold">
            Zurück zum Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${post.title} – Gartenbau Blog | Luan Allround Service`}
        description={post.excerpt}
        keywords={`${post.title}, Gartenbau Kuppenheim, Landschaftsbau Tipps, ${post.slug}`}
        ogImage={`https://www.luan-allround-service.de${post.image}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "image": `https://www.luan-allround-service.de${post.image}`,
          "datePublished": post.date,
          "author": {
            "@type": "Organization",
            "name": "Luan Allround Service"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Luan Allround Service",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.luan-allround-service.de/images/logo.png"
            }
          }
        }}
      />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${post.image}")` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <span className="block text-gold-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">
              Blog & Ratgeber
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 animate-[fadeInUp_1s_ease-out_forwards] leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl animate-[fadeInUp_1.2s_ease-out_forwards]">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Before/After Slider - Only for garden transformation post */}
      {post.slug === 'vorher-nachher-garten-transformation' && (
        <div className="py-12 md:py-16 bg-stone-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <RevealOnScroll>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-4">
                  Die Transformation im Vergleich
                </h2>
                <p className="text-gray-600 text-lg">
                  Ziehen Sie den Slider, um die dramatische Verwandlung zu sehen
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <BeforeAfterSlider
                beforeImage={beforeImg}
                afterImage={afterImg}
              />
            </RevealOnScroll>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Story Section */}
          <RevealOnScroll>
            <div className="prose prose-lg max-w-none mb-12">
              {post.story.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </RevealOnScroll>

          {/* Tips Section */}
          <RevealOnScroll delay={200}>
            <div className="my-16 md:my-20">
              <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-8 flex items-center">
                <Leaf className="mr-4 text-gold-500" size={32} />
                Tipps & Tricks
              </h2>
              <div className="space-y-6">
                {post.tips.map((tip, index) => (
                  <div key={index} className="bg-stone-50 p-6 md:p-8 border-l-4 border-gold-500 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-serif text-earth-900 mb-3 flex items-center">
                      <CheckCircle className="mr-3 text-gold-500" size={20} />
                      {tip.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed pl-8">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Q&A Section */}
          <RevealOnScroll delay={400}>
            <div className="my-16 md:my-20">
              <h2 className="text-3xl md:text-4xl font-serif text-earth-900 mb-8 flex items-center">
                <Quote className="mr-4 text-gold-500" size={32} />
                Häufig gestellte Fragen
              </h2>
              <div className="space-y-4">
                {post.qa.map((item, index) => {
                  const isOpen = openQuestions.includes(index);

                  return (
                    <div key={index} className="border border-stone-200 rounded-lg overflow-hidden hover:border-gold-500 transition-colors">
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full text-left p-6 bg-white hover:bg-stone-50 transition-colors flex items-center justify-between group"
                      >
                        <h3 className="text-lg md:text-xl font-bold text-earth-900 pr-4 group-hover:text-gold-600 transition-colors">
                          Q: {item.question}
                        </h3>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                      >
                        <div className="p-6 pt-0 bg-stone-50">
                          <p className="text-gray-700 leading-relaxed pl-6 border-l-2 border-gold-500">
                            <strong className="text-gold-600">A:</strong> {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>

          {/* Call to Action */}
          <RevealOnScroll delay={600}>
            <div className="mt-16 md:mt-20 p-8 md:p-12 bg-earth-900 text-white text-center rounded-lg">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Haben Sie Fragen oder möchten Sie ein Projekt starten?</h3>
              <p className="text-gray-300 mb-6 md:mb-8">
                Als Ihr lokaler Landschaftsgärtner in Kuppenheim, Rastatt, Baden-Baden und Karlsruhe stehe ich Ihnen mit Rat und Tat zur Seite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+4917647999118" className="inline-flex items-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-earth-900 font-bold uppercase tracking-widest transition-colors">
                  <Phone className="mr-2" size={20} />
                  +49 176 47999118
                </a>
                <Link to={NavigationLinks.CONTACT} className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-earth-900 font-bold uppercase tracking-widest transition-colors">
                  Kontakt aufnehmen
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                Ihr Memedali Limani<br />
                Luan Allround Service<br />
                Friedrichstraße 100, 76456 Kuppenheim
              </p>
            </div>
          </RevealOnScroll>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center text-gold-500 hover:text-gold-600 font-bold uppercase tracking-widest text-sm transition-colors">
              ← Zurück zum Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const FullGalleryPage = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // SEO effect
  useEffect(() => {
    document.title = "Galerie – Unsere Arbeit in Bildern | Luan Allround Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', "Stöbern Sie durch unsere Bildergalerie: Zaunbau, Gartengestaltung, Vorher-Nachher Bilder und mehr aus Kuppenheim und Umgebung.");
  }, []);

  const allGalleryImages: ProjectImage[] = [
    { id: '1', url: img1, title: '' },
    { id: '2', url: img2, title: '' },
    { id: '3', url: img3, title: '' },
    { id: '4', url: img4, title: '' },
    { id: '5', url: img5, title: ' ' },
    { id: '6', url: img6, title: '' },
    { id: '7', url: img7, title: '' },
    { id: '8', url: img8, title: '' },
    { id: '9', url: img9, title: '' },
    { id: '10', url: img10, title: ' ' },
    { id: '11', url: img11, title: '' },
    { id: '12', url: img12, title: '' },
    { id: '13', url: beforeImg, title: '' },
    { id: '14', url: afterImg, title: '' },
    { id: '15', url: img15, title: '' },
    { id: '16', url: img16, title: '' },
    { id: '17', url: img17, title: '' },
    { id: '18', url: img18, title: '  ' },
    { id: '19', url: img19, title: '  ' },
  ];

  // Display only 16 images initially, or all if expanded
  const displayedImages = isExpanded ? allGalleryImages : allGalleryImages.slice(0, 16);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'ArrowLeft' && selectedImageIndex > 0) {
        setSelectedImageIndex(selectedImageIndex - 1);
      } else if (e.key === 'ArrowRight' && selectedImageIndex < allGalleryImages.length - 1) {
        setSelectedImageIndex(selectedImageIndex + 1);
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, allGalleryImages.length]);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (selectedImageIndex === null) return;

    if (isLeftSwipe && selectedImageIndex < allGalleryImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
    if (isRightSwipe && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      <PageHeader
        title="Unsere Galerie"
        subtitle="Elegante Projekte"
        image="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000&auto=format&fit=crop&quot"
      />

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: `url('./images/grid.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <SectionTitle subtitle="Vollständiges Portfolio" title="20+ Premium Projekte" align="center" />
          </RevealOnScroll>

          {/* Masonry-Style Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
            {displayedImages.map((img, index) => (
              <RevealOnScroll key={img.id} delay={index * 30}>
                <div
                  className="group relative overflow-hidden aspect-square cursor-pointer rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={String(img.url)}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-6">
                    <h4 className="text-white font-serif font-bold text-lg text-center mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</h4>
                    <button className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-earth-900 font-bold uppercase text-xs tracking-widest rounded-full transition-all transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500">
                      Ansehen
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Show More Button */}
          {!isExpanded && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setIsExpanded(true)}
                className="px-8 md:px-12 py-4 md:py-5 bg-gold-500 hover:bg-gold-600 text-earth-900 font-bold uppercase tracking-widest rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Mehr anzeigen
              </button>
            </div>
          )}

          {/* Info Section */}
          <div className="mt-20 md:mt-28 p-8 md:p-12 bg-stone-50 border-l-4 border-gold-500 rounded-lg">
            <div className="max-w-3xl">
              <h3 className="text-2xl md:text-3xl font-serif text-earth-900 mb-4">Lassen Sie sich inspirieren</h3>
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                Jedes Projekt in dieser Galerie ist ein Meisterwerk individuellen Designs. Von modernen Infrarot-Saunen bis zu traditionellen finnischen Ausführungen – entdecken Sie die vielfältigen Möglichkeiten für Ihre Traumsauna.
              </p>
              <Link to={NavigationLinks.CONTACT} className="inline-block px-8 py-3 bg-earth-900 text-white font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-earth-900 transition-colors rounded-lg">
                Beratung Anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Navigation */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Main Image */}
            <img
              src={String(allGalleryImages[selectedImageIndex].url)}
              alt={allGalleryImages[selectedImageIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gold-500 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center z-10"
              aria-label="Close"
            >
              ×
            </button>

            {/* Previous Button */}
            {selectedImageIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(selectedImageIndex - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gold-500 transition-colors bg-black/50 rounded-full w-14 h-14 flex items-center justify-center z-10"
                aria-label="Previous Image"
              >
                ‹
              </button>
            )}

            {/* Next Button */}
            {selectedImageIndex < allGalleryImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(selectedImageIndex + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gold-500 transition-colors bg-black/50 rounded-full w-14 h-14 flex items-center justify-center z-10"
                aria-label="Next Image"
              >
                ›
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {selectedImageIndex + 1} / {allGalleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// ScrollToTop imported from components


// Component for SEO Metadata
const PageMeta: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);
  return null;
};

// Location Page Router Component
const LocationPageRouter = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const location = getLocationBySlug(citySlug || '');

  // Track location page view
  useEffect(() => {
    if (location) {
      analytics.trackLocationView(location.city);
    }
  }, [location]);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  return <LocationPage location={location} />;
};

const App = () => {
  // Initialize analytics and Lenis smooth scroll on app mount
  useEffect(() => {
    analytics.init();

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        <div className="flex flex-col min-h-screen overflow-x-hidden font-sans text-earth-900 selection:bg-gold-500 selection:text-white bg-stone-50">
          <style>{`
          html.lenis, html.lenis body {
            height: auto;
          }
          .lenis.lenis-smooth {
            scroll-behavior: auto !important;
          }
          .lenis.lenis-smooth [data-lenis-prevent] {
            overscroll-behavior: contain;
          }
          .lenis.lenis-stopped {
            overflow: hidden;
          }
          .lenis.lenis-scrolling iframe {
            pointer-events: none;
          }
        `}</style>
          <AnimationStyles />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path={NavigationLinks.HOME} element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/leistungen" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projekte" element={<ProjectsPage />} />
              <Route path="/gallery" element={<FullGalleryPage />} />
              <Route path="/galerie" element={<FullGalleryPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/ueber-uns" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/datenschutz" element={<DatenschutzPage />} />

              {/* 3D Zaunkonfigurator Routes */}
              <Route path="/zaun-konfigurator" element={<ZaunKonfiguratorPage />} />
              <Route path="/konfigurator" element={<ZaunKonfiguratorPage />} />
              <Route path="/zaun-planer" element={<ZaunKonfiguratorPage />} />

              {/* Location-specific landing pages for SEO */}
              <Route path="/standorte/:citySlug" element={<LocationPageRouter />} />

              {/* Dynamic Service + City Landing Pages */}
              <Route path="/leistungen/:slug" element={<LocalServicePage />} />

              {/* Generate all Service × City SEO Landing Pages */}
              {(() => {
                const services = ['zaunbau', 'rasenpflege', 'gartenpflege', 'rollrasen', 'heckenschnitt', 'pflasterarbeiten', 'terrassenbau', 'sichtschutz', 'gabionen', 'baumpflege'];
                const cities = ['kuppenheim', 'rastatt', 'baden-baden', 'karlsruhe', 'gaggenau', 'bischweier', 'waldbronn', 'landau'];

                return services.flatMap(service =>
                  cities.map(city => (
                    <Route
                      key={`${service}-${city}`}
                      path={`/${service}-${city}`}
                      element={<LocalServicePage service={service} city={city} />}
                    />
                  ))
                );
              })()}
            </Routes>
          </main>
          <Footer />

          {/* Global WhatsApp Button & CTA */}
          <div className="fixed bottom-6 right-6 z-50 flex items-center justify-end pointer-events-none">
            {/* CTA Text with Arrow - visible on all devices */}
            <div className="flex items-center mr-3 md:mr-4 pointer-events-auto animate-[fadeIn_0.5s_ease-out_2s_forwards] opacity-0">
              <div className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-lg shadow-xl relative">
                <span className="text-earth-900 font-bold text-xs md:text-sm whitespace-nowrap">Haben Sie Fragen? Schreiben Sie uns!</span>
                {/* Arrow pointing to the button */}
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
              </div>
            </div>

            <a
              href="https://wa.me/4917647999118"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform pointer-events-auto relative group"
              aria-label="Chat on WhatsApp"
            >
              <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" className="w-10 h-10 relative z-10 animate-wiggle" />
              {/* Pulse Animation */}
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
            </a>
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;