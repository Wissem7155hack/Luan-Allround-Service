import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  ArrowRight, Leaf, PencilRuler, Shovel, CheckCircle, Play, Loader2, Send, Phone,
  Maximize2, MapPin, Clock, Quote, Star
} from 'lucide-react';
import { NavigationLinks, ProjectImage, BlogPost } from './types';

// BeforeAfterSlider Component
const BeforeAfterSlider: React.FC<{ beforeImage: string; afterImage: string; }> = ({ beforeImage, afterImage }) => {
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
          src={afterImage}
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
          src={beforeImage}
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
    slug: 'rasenpflege gartenpflege in kuppenheim',
    title: 'Professionelle Rasenpflege & Gartenpflege: Ihr grünes Paradies das ganze Jahr über',
    image: 'images/grass.jpg',
    excerpt: 'Bei Luan Allround Service verstehen wir, dass ein makelloser Rasen die Grundlage Ihrer schönen Außenanlage ist. Unser umfassendes wöchentliches Rasenpflege- und Gartenpflegeprogramm umfasst unsere 6-Schritte-Düngung und Unkrautbekämpfung, um sicherzustellen, dass Ihr Rasen und Garten das ganze Jahr über üppig, gesund und perfekt gepflegt bleiben.',
    story: [
      'Hallo, ich bin Memedali Limani von Luan Allround Service – Ihr Experte für Garten- und Landschaftsbau in Kuppenheim, Rastatt, Baden-Baden und Karlsruhe.',
      'Bei Luan Allround Service erkennen wir die Bedeutung eines makellosen Rasens als Fundament Ihrer schönen Außenanlage. Unser umfassendes wöchentliches Rasenpflege- und Gartenpflegeprogramm umfasst unsere bewährte 6-Schritte-Düngung und Unkrautbekämpfungsstrategie, um sicherzustellen, dass Ihr Rasen und Garten das ganze Jahr über üppig, gesund und perfekt gepflegt bleiben.',
      'Dieses Programm bietet auch eine Auswahl an zwei saisonalen Dienstleistungen – wählen Sie zwischen Winterschnitt, Frühjahrs-Jumpstart, Mulchinstallation, Sommer-Auffrischung oder Herbstreinigung – um die Schönheit und Gesundheit Ihres Gartens mit nachhaltigen Praktiken weiter zu verbessern und zu erhalten.',

      '## Rasenmähen – Das Fundament der Rasenpflege',
      'Ein gut gemähter Rasen geht über einfache Ästhetik hinaus; er ist entscheidend für die Gesundheit und Vitalität Ihres Grases. Bei Luan Allround Service folgen wir optimalen Mähpraktiken und halten unsere Schnitthöhen zwischen 3 und 5 cm, um einen dichten, robusten Rasen zu fördern.',
      'Wir verwenden scharfe Klingen für saubere, präzise Schnitte, die Schäden an den Grashalmen verhindern und das Krankheitsrisiko verringern. Unsere Mähmuster werden strategisch variiert, um Bodenverdichtung zu vermeiden und die natürliche Zersetzung von Grasschnitt zu fördern, was Ihren Rasen mit wichtigen Nährstoffen anreichert.',
      'Zusätzlich sorgt unsere Kantenschnitt-Technik für ein poliertes, gepflegtes Erscheinungsbild, das Ihre Pflanzbeete definiert und die Gesamtschönheit Ihres Gartens hervorhebt.',

      '## Rasenpflege – 6-Schritte-Düngung und Unkrautbekämpfungsprogramm',
      'Unser umfassendes 6-Schritte-Programm stellt sicher, dass Ihr Rasen die Nährstoffe erhält, die er für robustes Wachstum benötigt. Einschließlich vorbeugender Krabbengraskontrolle und einer Winterdünger-Anwendung ist dieses Programm darauf ausgelegt, Ihren Rasen das ganze Jahr über gesund und unkrautfrei zu halten.',
      'Wir betonen die Bedeutung richtiger Bewässerungstechniken, um die Wirksamkeit unserer Behandlungen zu maximieren. Unser Programm umfasst:',
      '• Schritt 1 (Frühjahr): Vorbeugende Krabbengraskontrolle und Frühjahrsdüngung für kräftiges Wachstum',
      '• Schritt 2 (Spätfrühling): Nachbehandlung gegen Unkraut und ausgewogene Düngung',
      '• Schritt 3 (Frühsommer): Unkrautbekämpfung und Stickstoffdüngung für sattgrüne Farbe',
      '• Schritt 4 (Hochsommer): Sommerdüngung mit langsamer Freisetzung für Hitzeresistenz',
      '• Schritt 5 (Frühherbst): Herbstdüngung zur Wurzelstärkung',
      '• Schritt 6 (Spätherbst): Winterdüngung zur Vorbereitung auf die kalte Jahreszeit',

      '## Gartenpflege – Mehr als nur Rasen',
      'Unser wöchentlicher Rasenpflegeservice geht über die reine Rasenpflege hinaus, um Ihren Garten umfassend zu pflegen. Wir jäten sorgfältig von Hand und wenden Herbizide an, um unerwünschte Pflanzen zu kontrollieren, und wir schneiden präzise Baumringe für ein ordentliches Aussehen.',
      'Unser Team schneidet Rosen zurück und entfernt verblühte Stauden, um gesundes Wachstum und reichliche Blüte zu fördern. Zusätzlich schneiden wir Frühjahrsephemere zum richtigen Zeitpunkt zurück, um sicherzustellen, dass Ihr Garten das ganze Jahr über lebendig und schön gepflegt bleibt.',
      'Wir kümmern uns auch um Heckenschnitt, Strauchpflege, Beetpflege und die Entfernung von Laub und Gartenabfällen. Jeder Aspekt Ihres Gartens erhält die Aufmerksamkeit, die er verdient.',

      '## Saisonale Service-Optionen',
      'In unserem umfassenden wöchentlichen Wartungspaket haben Sie die Flexibilität, 2 der folgenden spezialisierten Dienstleistungen auszuwählen, die das ganze Jahr über enthalten sind, um sicherzustellen, dass Ihr Außenbereich nicht nur seine Schönheit bewahrt, sondern in jeder Jahreszeit gedeiht:',
      '• **Winterschnitt**: Ideal für die Gesundheit und Form Ihrer Pflanzen während der kälteren Monate. Wir schneiden Bäume und Sträucher fachgerecht zurück, wenn sie ruhen.',
      '• **Frühjahrs-Jumpstart**: Bringen Sie Ihren Garten mit wesentlicher Pflege zu Beginn der Saison in Schwung. Vertikutieren, Düngen und Vorbereitung der Beete.',
      '• **Mulchinstallation**: Verbessern Sie das Aussehen und die Gesundheit Ihres Gartens mit professioneller Mulchauftragung. Schützt vor Unkraut und hält Feuchtigkeit.',
      '• **Sommer-Auffrischung und Schnitt**: Aufmerksamkeit fürs Detail zur Mitte der Saison, die Ihre Landschaft optimal aussehen lässt. Formschnitt und Pflege bei voller Vegetation.',
      '• **Herbstreinigung**: Bereiten Sie Ihren Garten mit einer gründlichen Reinigung auf den Winter vor. Laubentfernung, Rückschnitt und Wintervorbereitung.',
      'Dieser anpassbare Ansatz ermöglicht es Ihnen, unsere Dienstleistungen auf die spezifischen Bedürfnisse Ihres Gartens abzustimmen und optimale Pflege und Schönheit das ganze Jahr über zu gewährleisten.',

      '## Warum Luan Allround Service für Ihre Rasenpflege wählen',
      'Wenn Sie Luan Allround Service für Ihre wöchentliche Rasenpflege wählen, erhalten Sie nicht nur einen Service; Sie investieren in die Gesundheit und Schönheit Ihres Außenbereichs. Unser engagiertes Team von Landschaftsbau-Profis ist bestrebt, Ihnen das höchste Maß an Pflege zu bieten und sicherzustellen, dass Ihr Rasen und Garten nicht nur optimal aussehen, sondern auch nachhaltig und umweltfreundlich sind.',
      'Durch die Partnerschaft mit uns wählen Sie ein Unternehmen, das die Schönheit und Gesundheit Ihres Rasens genauso schätzt wie Sie. Kontaktieren Sie uns noch heute, um mehr über unsere Dienstleistungen zu erfahren und wie wir Ihren Rasen in ein üppiges, lebendiges Außenparadies verwandeln können.'
    ],
    tips: [
      { title: 'Optimale Schnitthöhe von 3-5 cm', description: 'Wir halten die Schnitthöhe zwischen 3 und 5 cm, um einen dichten, robusten Rasen zu fördern. Dies verhindert Unkrautwachstum, reduziert Wasserbedarf und macht den Rasen widerstandsfähiger gegen Krankheiten und Trockenheit.' },
      { title: 'Scharfe Klingen für gesunde Schnitte', description: 'Wir verwenden ausschließlich scharfe Mähklingen für saubere, präzise Schnitte. Stumpfe Klingen reißen die Grashalme, was zu braunen Spitzen führt und das Krankheitsrisiko erhöht. Saubere Schnitte fördern schnellere Heilung und gesünderes Wachstum.' },
      { title: 'Variierende Mähmuster', description: 'Wir ändern strategisch unsere Mähmuster bei jedem Schnitt, um Bodenverdichtung zu vermeiden und gleichmäßiges Wachstum zu fördern. Dies verhindert auch Spurrillen und sorgt für ein professionelles, gepflegtes Erscheinungsbild.' },
      { title: 'Grasschnitt als natürlicher Dünger', description: 'Wir lassen den Grasschnitt auf dem Rasen liegen (Mulchmähen), wo er sich zersetzt und wichtige Nährstoffe zurück in den Boden gibt. Dies reduziert den Bedarf an zusätzlichem Dünger um bis zu 25% und verbessert die Bodenstruktur.' },
      { title: 'Professioneller Kantenschnitt', description: 'Unsere präzise Kantenschnitt-Technik definiert Ihre Pflanzbeete, Gehwege und Einfahrten klar und sorgt für ein poliertes, gepflegtes Erscheinungsbild, das die Gesamtschönheit Ihres Gartens hervorhebt.' },
      { title: '6-Schritte-Düngungsprogramm', description: 'Unser wissenschaftlich entwickeltes 6-Schritte-Programm versorgt Ihren Rasen das ganze Jahr über mit den richtigen Nährstoffen zur richtigen Zeit. Von vorbeugender Unkrautbekämpfung im Frühjahr bis zur Winterdüngung im Herbst.' },
      { title: 'Richtige Bewässerungstechniken', description: 'Wir beraten Sie über optimale Bewässerung: 2-3 Mal pro Woche gründlich wässern ist besser als täglich oberflächlich. Früh morgens wässern minimiert Verdunstung und Krankheitsrisiko. 2-3 cm Wasser pro Woche sind ideal.' },
      { title: 'Saisonale Spezialdienste', description: 'Wählen Sie aus unseren saisonalen Optionen: Winterschnitt für Pflanzengesundheit, Frühjahrs-Jumpstart für einen kräftigen Start, Mulchinstallation für Unkrautschutz, Sommer-Auffrischung für Hochsaison-Pflege, oder Herbstreinigung für Wintervorbereitung.' }
    ],
    qa: [
      { question: 'Wie oft sollte der Rasen gemäht werden?', answer: 'Im Frühjahr und Sommer idealerweise einmal pro Woche, im Herbst alle 10-14 Tage. Wir passen die Intervalle an das Wachstum und Ihre Bedürfnisse an. Die Regel: Nie mehr als ein Drittel der Halmlänge auf einmal abschneiden, um Stress für den Rasen zu vermeiden.' },
      { question: 'Was umfasst Ihr 6-Schritte-Programm genau?', answer: 'Unser Programm beginnt im Frühjahr mit vorbeugender Krabbengraskontrolle und Frühjahrsdüngung, gefolgt von gezielter Unkrautbekämpfung und ausgewogener Düngung im Spätfrühling. Im Sommer sorgen wir für sattgrüne Farbe und Hitzeresistenz. Im Herbst stärken wir die Wurzeln und bereiten den Rasen mit Winterdüngung auf die kalte Jahreszeit vor.' },
      { question: 'Welche saisonalen Services kann ich wählen?', answer: 'Sie können 2 aus 5 spezialisierten Services wählen: Winterschnitt für Pflanzengesundheit in kalten Monaten, Frühjahrs-Jumpstart mit Vertikutieren und Vorbereitung, professionelle Mulchinstallation, Sommer-Auffrischung mit Formschnitt, oder gründliche Herbstreinigung mit Laubentfernung und Wintervorbereitung.' },
      { question: 'Was macht Ihr Gartenpflege-Service besonders?', answer: 'Wir gehen über reines Rasenmähen hinaus: Handarbeit beim Unkrautjäten, präziser Kantenschnitt, fachgerechter Rosenschnitt, Entfernen verblühter Stauden, Heckenpflege und zeitgerechter Rückschnitt von Frühjahrsblühern. Jeder Aspekt Ihres Gartens erhält professionelle Aufmerksamkeit.' },
      { question: 'Wie funktioniert das wöchentliche Wartungspaket?', answer: 'Unser Paket kombiniert regelmäßiges Rasenmähen mit unserem 6-Schritte-Düngungsprogramm und umfassender Gartenpflege. Sie wählen zusätzlich 2 saisonale Spezialdienste aus 5 Optionen. So erhalten Sie ganzjährig optimale Pflege, die auf die Bedürfnisse jeder Jahreszeit abgestimmt ist.' },
      { question: 'Warum ist professionelle Rasenpflege wichtig?', answer: 'Ein professionell gepflegter Rasen ist gesünder, widerstandsfähiger gegen Krankheiten und Trockenheit, und sieht das ganze Jahr über perfekt aus. Mit richtiger Schnitthöhe, scharfen Klingen, optimaler Düngung und Unkrautbekämpfung vermeiden Sie teure Sanierungen und genießen einen üppigen, grünen Rasen.' },
      { question: 'Sind Ihre Methoden umweltfreundlich?', answer: 'Ja! Wir verwenden Mulchmähen, um Grasschnitt als natürlichen Dünger zu nutzen, setzen auf nachhaltige Praktiken, optimieren Bewässerung zur Wasserersparnis, und verwenden gezielte Behandlungen statt Flächenbehandlung. Unsere Methoden sind effektiv und umweltbewusst.' },
      { question: 'Was kostet das komplette Pflegeprogramm?', answer: 'Die Kosten hängen von der Größe Ihrer Rasenfläche, dem gewählten Leistungsumfang und den ausgewählten saisonalen Services ab. Gerne erstelle ich Ihnen ein individuelles, unverbindliches Angebot. Langfristig sparen Sie mit professioneller Pflege Geld durch Vermeidung teurer Sanierungen.' }
    ],
  },

  {
    id: '2',
    slug: 'professionelle-zaunmontage',
    title: 'Von der Baustelle zum Familienparadies: Wie wir mit Zaun, Rasen und natürlicher Pflanzung einen sicheren und lebendigen Garten in Kuppenheim schufen',
    image: 'images/7.jpeg',
    excerpt: 'Entdecken Sie, wie wir einen sicheren Familiengarten mit modernem Maschendrahtzaun, perfektem Rasen und natürlicher Bepflanzung geschaffen haben.',
    story: [
      'Hallo, ich bin Memedali Limani von Luan Allround Service – Ihr Landschaftsgärtner mit Herz, Handwerk und regionaler Expertise für Kuppenheim, Rastatt und Karlsruhe.',
      'Heute möchte ich Ihnen ein Projekt zeigen, das Familienfreundlichkeit, Sicherheit und natürliche Schönheit in perfekter Harmonie vereint. Dieser Garten ist kein Zufall – er ist das Ergebnis einer sorgfältigen Planung, die genau auf die Bedürfnisse einer jungen Familie abgestimmt war.',
      'Vor einigen Monaten stand mir ein Kunde gegenüber, der sich Sorgen um die Sicherheit seines Gartens machte. Sein Kind spielte gerne draußen, und er wollte sicherstellen, dass der Bereich abgegrenzt war – aber ohne den Charme des Gartens zu verlieren. Gemeinsam haben wir uns entschieden, einen modernen, robusten Maschendrahtzaun zu installieren, der nicht nur stabil und langlebig ist, sondern auch harmonisch in die Umgebung passt.',
      'Die Installation war eine Herausforderung, aber genau das macht meine Arbeit so spannend. Wir haben die Pfosten präzise ausgerichtet, die Zaunfelder sorgfältig montiert und darauf geachtet, dass jede Schraube sitzt. Das Ergebnis? Ein Zaun, der nicht nur hält, was er verspricht, sondern auch noch gut aussieht.',
      'Aber ein Zaun allein macht keinen Garten. Also haben wir den Rasen neu angelegt – mit einer leichten Neigung zur Entwässerung und einem sauberen Rand aus Naturstein. Die Steine dienen nicht nur als dekorativer Abschluss, sondern auch als Wegführung – ideal für barfußlaufen oder beim Gießen.',
      'Und dann die Pflanzung: Junge Rosenstöcke, Lavendel und niedrige Hecken, die den Zaun sanft umspielen und ihn im Laufe der Zeit noch natürlicher erscheinen lassen. Ein einzelner Stein, eine kleine Skulptur oder ein Blumentopf auf einer Terrasse können den Garten visuell aufwerten – ohne viel Aufwand.'
    ],
    tips: [
      { title: 'Wählen Sie den richtigen Zaun', description: 'Ein Maschendrahtzaun wie hier ist modern, elegant und sehr langlebig – besonders wenn er wetterfest imprägniert ist. Alternativen: Metall, Kunststoff oder natürliche Hecken (z.B. Buchsbaum oder Lebensbaum).' },
      { title: 'Kombinieren Sie harte und weiche Elemente', description: 'Ein reiner Zaun wirkt kalt. Setzen Sie Pflanzen davor oder daneben – Rosen, Lavendel oder kleinwüchsige Sträucher machen den Sichtschutz lebendig und natürlich.' },
      { title: 'Planen Sie den Rasen von Anfang an', description: 'Ein perfekter Rasen braucht gute Vorbereitung: Bodenaustausch, Drainage und hochwertiges Saatgut. Und: Mähen Sie nicht zu kurz! 3–5 cm sind ideal für eine gesunde Rasenfläche.' },
      { title: 'Setzen Sie Akzente', description: 'Ein einzelner Stein, eine kleine Skulptur oder ein Blumentopf auf einer Terrasse können den Garten visuell aufwerten – ohne viel Aufwand.' },
      { title: 'Denken Sie an die Zukunft', description: 'Planen Sie genügend Platz für eventuelle Erweiterungen oder Änderungen im Garten. Ein guter Zaun sollte flexibel sein und sich an Ihre Bedürfnisse anpassen.' }
    ],
    qa: [
      { question: 'Wie lange hält so ein Maschendrahtzaun?', answer: 'Mit der richtigen Pflege und Wartung kann ein hochwertiger Maschendrahtzaun 20 Jahre und länger halten. Die Pulverbeschichtung schützt vor Korrosion und UV-Strahlung.' },
      { question: 'Kann ich den Zaun selbst installieren?', answer: 'Theoretisch ja, aber ich rate davon ab. Eine professionelle Installation gewährleistet, dass der Zaun stabil und sicher ist. Zudem übernehme ich die Garantie auf die Arbeit.' },
      { question: 'Welche Kosten muss ich erwarten?', answer: 'Die Kosten variieren je nach Größe, Material und Komplexität des Projekts. Gerne erstelle ich Ihnen ein unverbindliches Angebot, das genau auf Ihre Bedürfnisse zugeschnitten ist.' },
      { question: 'Was mache ich, wenn der Zaun beschädigt ist?', answer: 'Bei kleineren Schäden können wir oft direkt vor Ort helfen. Bei größeren Schäden tauschen wir die betroffenen Teile aus – alles im Rahmen unserer Garantie.' },
      { question: 'Brauche ich eine Genehmigung für den Zaun?', answer: 'In den meisten Fällen nicht – aber ich berate Sie gerne über lokale Bauvorschriften und Grenzabstände. Ein falsch gesetzter Zaun kann Ärger mit Nachbarn oder der Gemeinde bringen – das vermeide ich durch vorausschauende Beratung.' }
    ]
  },

  {
    id: '3',
    slug: 'sichtschutz-und-privatsphaere',
    title: 'Der Garten als Rückzugsort: Wie wir Ihren privaten Hinterhof in Kuppenheim mit schwarzem Sichtschutz, perfektem Rasen und cleverer Beleuchtung gestaltet haben',
    image: 'images/9.jpeg',
    excerpt: 'Entdecken Sie, wie wir einen modernen Garten mit schwarzem Sichtschutz, perfektem Rasen und stimmungsvoller Beleuchtung in eine private Wohlfühloase verwandelten.',
    story: [
      'Hallo, ich bin Memedali Limani von Luan Allround Service – Ihr Landschaftsgärtner mit Herz, Handwerk und regionaler Expertise für Kuppenheim, Rastatt und Karlsruhe.',
      'Heute möchte ich Ihnen ein Projekt zeigen, das alles vereint, was einen modernen, gepflegten Garten ausmacht: Privatsphäre, Ästhetik, Funktionalität und Wohlfühlatmosphäre. Dieser Garten ist kein Zufall – er ist das Ergebnis einer sorgfältigen Planung, die genau auf die Wünsche des Kunden abgestimmt war. Und ja, auch hier war ich dabei – von der ersten Beratung bis zur letzten Pflanze.',
      'Vor einigen Monaten stand mir ein Kunde gegenüber, der sich nach Ruhe und Privatsphäre sehnte. Sein Garten grenzte direkt an Nachbarn, und er wollte einen Ort schaffen, an dem er entspannen, grillen und mit seiner Familie Zeit verbringen konnte – ohne ständige Blicke von außen.',
      'Gemeinsam haben wir uns für eine kombinierte Lösung aus Sichtschutzzaun und Pflanzung entschieden. Der Zaun ist aus schwarzen, vertikal angeordneten Holzplatten, die nicht nur optisch ansprechend sind, sondern auch eine hohe Sichtdichte bieten. Dazu kamen junge Rosenstöcke und niedrige Hecken, die den Zaun sanft umspielen und ihn im Laufe der Zeit noch natürlicher erscheinen lassen.',
      'Der Rasen? Ein echter Traum. Wir haben ihn nach Maß angelegt, mit einer leichten Neigung zur Entwässerung und einem sauberen Rand aus Naturstein. Die Steine dienen nicht nur als dekorativer Abschluss, sondern auch als Wegführung – ideal für barfußlaufen oder beim Gießen.',
      'Und dann die Beleuchtung: Weiße, klassische Gartenlampen entlang des Zauns, die bei Dunkelheit eine warme, einladende Atmosphäre schaffen. Kein grelles Licht – sondern sanfte Akzente, die den Garten zum Leuchten bringen.'
    ],
    tips: [
      { title: 'Wählen Sie den richtigen Sichtschutz', description: 'Schwarze Holzplatten wie hier sind modern, elegant und sehr langlebig – besonders wenn sie wetterfest imprägniert sind. Alternativen: Metall, Kunststoff oder natürliche Hecken (z.B. Buchsbaum oder Lebensbaum).' },
      { title: 'Kombinieren Sie harte und weiche Elemente', description: 'Ein reiner Zaun wirkt kalt. Setzen Sie Pflanzen davor oder daneben – Rosen, Lavendel oder kleinwüchsige Sträucher machen den Sichtschutz lebendig und natürlich.' },
      { title: 'Planen Sie die Beleuchtung von Anfang an', description: 'Gartenspotlights oder Lampen entlang des Weges schaffen nicht nur Sicherheit, sondern auch Stimmung. Achten Sie auf energiesparende LED-Lampen mit warmweißem Licht.' },
      { title: 'Denken Sie an den Rasen', description: 'Ein perfekter Rasen braucht gute Vorbereitung: Bodenaustausch, Drainage und hochwertiges Saatgut. Und: Mähen Sie nicht zu kurz! 3–5 cm sind ideal für eine gesunde Rasenfläche.' },
      { title: 'Setzen Sie Akzente', description: 'Ein einzelner Stein, eine kleine Skulptur oder ein Blumentopf auf einer Terrasse können den Garten visuell aufwerten – ohne viel Aufwand.' }
    ],
    qa: [
      { question: 'Wie lange hält so ein schwarzer Holzsichtschutz?', answer: 'Bei professioneller Verarbeitung und regelmäßiger Pflege (z.B. alle 2–3 Jahre neu imprägnieren) hält er 10–15 Jahre. Wir verwenden nur hochwertiges Holz, das gegen Feuchtigkeit und UV-Strahlung beständig ist.' },
      { question: 'Kann man den Zaun später erweitern oder umbauen?', answer: 'Ja, absolut! Unser System ist modular und lässt sich problemlos anpassen. Ob Sie einen Torbereich hinzufügen oder den Zaun verlängern möchten – wir kümmern uns darum.' },
      { question: 'Was kostet so ein komplettes Gartenprojekt?', answer: 'Je nach Größe, Material und Komplexität. Gerne erstelle ich Ihnen ein unverbindliches Angebot, das genau auf Ihre Bedürfnisse zugeschnitten ist. Oft lohnt es sich, schon in der Planungsphase mit uns zu sprechen – so sparen Sie langfristig Kosten.' },
      { question: 'Brauche ich eine Genehmigung für den Zaun?', answer: 'In den meisten Fällen nicht – aber ich berate Sie gerne über lokale Bauvorschriften und Grenzabstände. Ein falsch gesetzter Zaun kann Ärger mit Nachbarn oder der Gemeinde bringen – das vermeide ich durch vorausschauende Beratung.' },
      { question: 'Wie pflege ich den Rasen richtig?', answer: 'Regelmäßiges Mähen (nicht zu kurz!), Düngen im Frühjahr und Herbst, sowie gezieltes Bewässern bei Trockenheit. Und: Vermeiden Sie das Laufen auf nassem Rasen – das beschädigt die Halme.' }
    ]
  },

  {
    id: '4',
    slug: 'farbe-form-funktionalitaet-kuppenheim',
    title: 'Farbe, Form & Funktionalität: Wie wir mit Mulch, Hecken und blühenden Azaleen einen Garten in Kuppenheim zum Leuchten bringen',
    image: './images/10.jpeg',
    excerpt: 'Entdecken Sie, wie eine perfekt gestaltete Beetanlage mit Mulch, blühenden Azaleen und strukturierten Hecken einen Garten in eine leuchtende Oase der Ruhe verwandelt.',
    story: [
      'Hallo, ich bin Memedali Limani von Luan Allround Service – Ihr Landschaftsgärtner mit Herz, Handwerk und regionaler Expertise für Kuppenheim, Rastatt und Karlsruhe.',
      'Heute möchte ich Ihnen ein Projekt zeigen, das **die Kraft der Farbe, die Schönheit der Form und die Wichtigkeit der Pflege** in einem einzigen Bild vereint: eine **perfekt gestaltete Beetanlage mit Mulch, blühenden Azaleen und strukturierten Hecken**.',
      'Dieser Garten ist kein Zufall – er ist das Ergebnis einer sorgfältigen Planung, die genau auf die Wünsche des Kunden abgestimmt war. Und ja, auch hier war ich dabei – von der ersten Beratung bis zur letzten Pflanze.',

      '## Die Geschichte hinter dem Bild',
      'Vor einigen Monaten stand mir ein Kunde gegenüber, der sich nach Ruhe und Privatsphäre sehnte. Sein Garten grenzte direkt an Nachbarn, und er wollte einen Ort schaffen, an dem er entspannen, grillen und mit seiner Familie Zeit verbringen konnte – ohne ständige Blicke von außen.',
      'Gemeinsam haben wir uns für eine **kombinierte Lösung aus Sichtschutzzaun und Pflanzung** entschieden. Der Zaun ist aus **schwarzen, vertikal angeordneten Holzplatten**, die nicht nur optisch ansprechend sind, sondern auch eine hohe Sichtdichte bieten. Dazu kamen **junge Rosenstöcke und niedrige Hecken**, die den Zaun sanft umspielen und ihn im Laufe der Zeit noch natürlicher erscheinen lassen.',
      'Der Rasen? Ein echter Traum. Wir haben ihn **nach Maß angelegt**, mit einer leichten Neigung zur Entwässerung und einem sauberen Rand aus Naturstein. Die Steine dienen nicht nur als dekorativer Abschluss, sondern auch als Wegführung – ideal für barfußlaufen oder beim Gießen.',
      'Und dann die Beleuchtung: **Weiße, klassische Gartenlampen** entlang des Zauns, die bei Dunkelheit eine warme, einladende Atmosphäre schaffen. Kein grelles Licht – sondern sanfte Akzente, die den Garten zum Leuchten bringen.',

      '## Warum ein Landschaftsgärtner mehr als nur „Gras mähen" kann',
      'Viele denken, ein Gärtner macht nur Rasen und Hecken. Aber bei Luan Allround Service verstehen wir unter „Landschaftsbau" **die ganzheitliche Gestaltung Ihres Außenraums** – von der Bodenplanung über die Pflanzung bis hin zur Beleuchtung und Sichtschutzlösung.',

      '**Unsere Leistungen:**',
      '✅ Garten- & Landschaftsbau',
      '✅ Sichtschutz- und Zaunbau (auch modernes Design)',
      '✅ Rasen- und Beetanlage',
      '✅ Beleuchtung & Wegeplanung',
      '✅ Pflege & Wartung',

      'Ein gut geplanter Garten ist wie ein Wohnzimmer im Freien – er soll funktionieren, schön sein und vor allem: **Ihnen Freude bereiten.**',

      '## Fazit',
      'Ein Garten ist mehr als nur Grünfläche – er ist **Ihr privater Rückzugsort, Ihr Erholungsraum, Ihr Wohlfühlort**. Und genau dafür stehe ich mit meiner Erfahrung, Zuverlässigkeit und Liebe zum Detail bereit. Ob Sie einen Sichtschutz wollen, einen perfekten Rasen oder eine romantische Beleuchtung – ich mache Ihren Garten zu Ihrem persönlichen Paradies.'
    ],
    tips: [
      { title: 'Wählen Sie den richtigen Mulch', description: 'Holzmulch wie hier ist nicht nur dekorativ, sondern auch funktional. Er hält die Feuchtigkeit im Boden, hemmt Unkraut und schützt die Wurzeln vor Hitze und Kälte.' },
      { title: 'Kombinieren Sie Farben und Formen', description: 'Rosa und rote Azaleen wie hier erzeugen einen farblichen Kontrast, der den Blick sofort auf sich zieht. Setzen Sie dazu grüne Hecken oder Sträucher, um die Farben zu betonen.' },
      { title: 'Planen Sie die Pflanzung von Anfang an', description: 'Achten Sie darauf, dass die Pflanzen genug Platz haben, um zu wachsen. Eine zu dichte Pflanzung führt zu Schatten und Krankheiten.' },
      { title: 'Setzen Sie Akzente', description: 'Ein einzelner Stein, eine kleine Skulptur oder ein Blumentopf auf einer Terrasse können den Garten visuell aufwerten – ohne viel Aufwand.' },
      { title: 'Denken Sie an die Zukunft', description: 'Planen Sie genügend Platz für eventuelle Erweiterungen oder Änderungen im Garten. Ein guter Zaun sollte flexibel sein und sich an Ihre Bedürfnisse anpassen.' }
    ],
    qa: [
      { question: 'Wie lange hält so ein Mulch?', answer: 'Mit der richtigen Pflege und Wartung kann ein hochwertiger Holzmulch 2–3 Jahre halten. Danach sollte er erneuert werden, um die Funktionen zu erhalten.' },
      { question: 'Kann ich den Mulch selbst verteilen?', answer: 'Theoretisch ja, aber ich rate davon ab. Eine professionelle Verteilung gewährleistet, dass der Mulch gleichmäßig ist und keine Lücken entstehen. Zudem übernehme ich die Garantie auf die Arbeit.' },
      { question: 'Welche Kosten muss ich erwarten?', answer: 'Die Kosten variieren je nach Größe, Material und Komplexität des Projekts. Gerne erstelle ich Ihnen ein unverbindliches Angebot, das genau auf Ihre Bedürfnisse zugeschnitten ist.' },
      { question: 'Was mache ich, wenn der Mulch beschädigt ist?', answer: 'Bei kleineren Schäden können wir oft direkt vor Ort helfen. Bei größeren Schäden tauschen wir die betroffenen Teile aus – alles im Rahmen unserer Garantie.' },
      { question: 'Brauche ich eine Genehmigung für den Mulch?', answer: 'In den meisten Fällen nicht – aber ich berate Sie gerne über lokale Bauvorschriften und Grenzabstände. Ein falsch gesetzter Zaun kann Ärger mit Nachbarn oder der Gemeinde bringen – das vermeide ich durch vorausschauende Beratung.' }
    ]
  },


  {
    id: '5',
    slug: 'kuppenheim-stadion-zaun',
    title: 'Kuppenheims Stadion in seiner neuen Form',
    image: 'images/18.jpeg',
    excerpt: 'Entdecken Sie, wie wir nicht nur Privatgärten, sondern auch öffentliche Räume wie Sport- und Spielgelände sicher und einladend gestalten. Ein grüner Maschendrahtzaun, der Sicherheit und Natur harmonisch vereint.',
    story: [
      'Hallo, ich bin Memedali Limani von Luan Allround Service – Ihr Landschaftsgärtner mit Herz, Handwerk und regionaler Expertise für Kuppenheim, Rastatt und Karlsruhe.',
      'Heute möchte ich Ihnen ein Projekt zeigen, das nicht nur Privatgärten, sondern auch öffentliche Räume sicher und einladend macht: den Zaun um ein Sport- und Spielgelände. Ja, Sie haben richtig gelesen – wir bauen nicht nur Zäune für private Gärten, sondern auch für Schulen, Vereine, Spielplätze und Sportanlagen.',
      'Dieser Zaun ist kein gewöhnlicher Zaun. Er ist funktionell, robust und gleichzeitig harmonisch in die Umgebung eingebettet. Die grüne Pulverbeschichtung passt perfekt zur Wiese und den Bäumen – ein Zeichen dafür, dass Sicherheit und Natur nicht Gegensätze sein müssen.',

      '## Die Geschichte hinter dem Bild',
      'Vor einigen Wochen stand mir der Vorstand eines lokalen Sportvereins gegenüber. Sie wollten ihren Platz sichern – nicht nur vor unbefugtem Zugang, sondern auch vor Bällen, die über die Grenzen flogen. Gleichzeitig sollte der Zaun kindersicher, wetterfest und langlebig sein.',
      'Gemeinsam haben wir uns für einen grünen Maschendrahtzaun mit stabilen Pfosten entschieden. Die Höhe ist so gewählt, dass sie ausreicht, um den Ballflug zu stoppen, aber nicht so hoch, dass sie den Blick auf das Geschehen versperrt. Die Farbe Grün wurde bewusst gewählt, um den Zaun optisch in die Natur zu integrieren – er soll nicht stören, sondern ergänzen.',
      'Die Installation war eine Herausforderung, aber genau das macht meine Arbeit so spannend. Wir haben die Pfosten präzise ausgerichtet, die Zaunfelder sorgfältig montiert und darauf geachtet, dass jede Schraube sitzt. Das Ergebnis? Ein Zaun, der nicht nur hält, was er verspricht, sondern auch noch gut aussieht.',

      '## Warum ein Landschaftsgärtner mehr als nur „Gras mähen" kann',
      'Viele denken, ein Gärtner macht nur Rasen und Hecken. Aber bei Luan Allround Service verstehen wir unter „Landschaftsbau" die ganzheitliche Gestaltung Ihres Außenraums – von der Bodenplanung über die Pflanzung bis hin zur Beleuchtung und Sichtschutzlösung.',

      '**Unsere Leistungen:**',
      '✅ Garten- & Landschaftsbau',
      '✅ Sichtschutz- und Zaunbau (auch modernes Design)',
      '✅ Rasen- und Beetanlage',
      '✅ Beleuchtung & Wegeplanung',
      '✅ Pflege & Wartung',

      'Ein gut geplanter Garten ist wie ein Wohnzimmer im Freien – er soll funktionieren, schön sein und vor allem: Ihnen Freude bereiten.',

      '## Fazit',
      'Ein Garten ist mehr als nur Grünfläche – er ist Ihr privater Rückzugsort, Ihr Erholungsraum, Ihr Wohlfühlort. Und genau dafür stehe ich mit meiner Erfahrung, Zuverlässigkeit und Liebe zum Detail bereit. Ob Sie einen Sichtschutz wollen, einen perfekten Rasen oder eine romantische Beleuchtung – ich mache Ihren Garten zu Ihrem persönlichen Paradies.'
    ],
    tips: [
      { title: 'Wählen Sie den richtigen Zaun', description: 'Ein Maschendrahtzaun wie hier ist modern, elegant und sehr langlebig – besonders wenn er wetterfest imprägniert ist. Alternativen: Metall, Kunststoff oder natürliche Hecken (z.B. Buchsbaum oder Lebensbaum).' },
      { title: 'Kombinieren Sie harte und weiche Elemente', description: 'Ein reiner Zaun wirkt kalt. Setzen Sie Pflanzen davor oder daneben – Rosen, Lavendel oder kleinwüchsige Sträucher machen den Sichtschutz lebendig und natürlich.' },
      { title: 'Planen Sie den Rasen von Anfang an', description: 'Ein perfekter Rasen braucht gute Vorbereitung: Bodenaustausch, Drainage und hochwertiges Saatgut. Und: Mähen Sie nicht zu kurz! 3–5 cm sind ideal für eine gesunde Rasenfläche.' },
      { title: 'Setzen Sie Akzente', description: 'Ein einzelner Stein, eine kleine Skulptur oder ein Blumentopf auf einer Terrasse können den Garten visuell aufwerten – ohne viel Aufwand.' },
      { title: 'Denken Sie an die Zukunft', description: 'Planen Sie genügend Platz für eventuelle Erweiterungen oder Änderungen im Garten. Ein guter Zaun sollte flexibel sein und sich an Ihre Bedürfnisse anpassen.' }
    ],
    qa: [
      { question: 'Wie lange hält so ein Maschendrahtzaun?', answer: 'Mit der richtigen Pflege und Wartung kann ein hochwertiger Maschendrahtzaun 20 Jahre und länger halten. Die Pulverbeschichtung schützt vor Korrosion und UV-Strahlung.' },
      { question: 'Kann ich den Zaun selbst installieren?', answer: 'Theoretisch ja, aber ich rate davon ab. Eine professionelle Installation gewährleistet, dass der Zaun stabil und sicher ist. Zudem übernehme ich die Garantie auf die Arbeit.' },
      { question: 'Welche Kosten muss ich erwarten?', answer: 'Die Kosten variieren je nach Größe, Material und Komplexität des Projekts. Gerne erstelle ich Ihnen ein unverbindliches Angebot, das genau auf Ihre Bedürfnisse zugeschnitten ist.' },
      { question: 'Was mache ich, wenn der Zaun beschädigt ist?', answer: 'Bei kleineren Schäden können wir oft direkt vor Ort helfen. Bei größeren Schäden tauschen wir die betroffenen Teile aus – alles im Rahmen unserer Garantie.' },
      { question: 'Brauche ich eine Genehmigung für den Zaun?', answer: 'In den meisten Fällen nicht – aber ich berate Sie gerne über lokale Bauvorschriften und Grenzabstände. Ein falsch gesetzter Zaun kann Ärger mit Nachbarn oder der Gemeinde bringen – das vermeide ich durch vorausschauende Beratung.' }
    ]
  },
  {
    id: '6',
    slug: 'vorher-nachher-garten-transformation',
    title: 'Von kahlem Boden zu grünem Paradies: Die magische Verwandlung eines Gartens in Kuppenheim – von der Erde zum perfekten Rasen',
    image: 'images/after.jpeg',
    excerpt: 'Erleben Sie die dramatische Transformation eines kahlen, staubigen Bodens in einen lebendigen, grünen Rückzugsort. Diese Vorher-Nachher-Geschichte zeigt, wie wir aus nackter Erde einen perfekten, dichten Rasen geschaffen haben.',
    story: [
      'Servus! Memedali Limani hier. Heute möchte ich Ihnen ein Projekt vorstellen, das zeigt, was echte Premium-Qualität bedeutet: ein Metallzaun, der nicht nur funktional ist, sondern auch ein echtes Statement setzt.',
      'Ein Unternehmer aus Rastatt wollte sein Firmengelände absichern – aber nicht mit irgendeinem Zaun. Er wollte etwas Besonderes, etwas, das Qualität und Professionalität ausstrahlt. Nach einem ausführlichen Beratungsgespräch haben wir uns für einen hochwertigen Metallzaun mit Sonderanfertigung entschieden.',
      'Die Herausforderung? Das Gelände war uneben, und wir mussten den Zaun an die Topografie anpassen. Aber genau solche Herausforderungen liebe ich. Wir haben jeden Pfosten individuell angepasst, jedes Zaunfeld perfekt ausgerichtet.',
      'Das Ergebnis ist ein Zaun, der nicht nur sicher ist, sondern auch beeindruckt. Der Kunde war so zufrieden, dass er uns bereits für weitere Projekte gebucht hat.'
    ],
    tips: [
      { title: 'Investieren Sie in Qualität', description: 'Ein Premium-Zaun kostet mehr, hält aber auch deutlich länger. Langfristig sparen Sie Geld und Ärger.' },
      { title: 'Individuelle Anpassung', description: 'Jedes Grundstück ist anders. Wir passen den Zaun exakt an Ihre Bedürfnisse und die Gegebenheiten vor Ort an.' },
      { title: 'Wartungsarm, aber nicht wartungsfrei', description: 'Auch ein Premium-Zaun braucht gelegentliche Pflege. Einmal jährlich reinigen und kontrollieren reicht meist aus.' },
      { title: 'Sicherheit geht vor', description: 'Ein hochwertiger Zaun bietet nicht nur Privatsphäre, sondern auch Sicherheit. Investieren Sie in Ihr Wohlbefinden.' },
      { title: 'Ästhetik und Funktion vereinen', description: 'Ein guter Zaun ist beides: schön und funktional. Wir achten auf jedes Detail, um das perfekte Ergebnis zu erzielen.' }
    ],
    qa: [
      { question: 'Was macht einen Premium-Zaun aus?', answer: 'Hochwertige Materialien, präzise Verarbeitung, individuelle Anpassung und eine umfassende Garantie. Das ist Premium-Qualität.' },
      { question: 'Wie lange hält ein Metallzaun?', answer: 'Mit der richtigen Pflege 30 Jahre und länger. Unsere Zäune sind auf Langlebigkeit ausgelegt.' },
      { question: 'Kann ich den Zaun individuell gestalten?', answer: 'Absolut! Wir bieten zahlreiche Gestaltungsmöglichkeiten: Farbe, Höhe, Design – alles nach Ihren Wünschen.' },
      { question: 'Was kostet ein Premium-Zaun?', answer: 'Die Kosten variieren je nach Größe, Material und Ausstattung. Gerne erstelle ich Ihnen ein individuelles Angebot.' },
      { question: 'Gibt es eine Garantie?', answer: 'Ja, wir bieten eine umfassende Garantie auf Material und Arbeit. Ihre Zufriedenheit ist uns wichtig.' }
    ]
  },

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
    const form = e.currentTarget; // Store form reference
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/wissemwchtiba@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowPopup(true);
        form.reset(); // Use stored reference
      } else {
        alert("Fehler beim Senden. Der Server hat die Anfrage abgelehnt.");
        console.error("FormSubmit Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Ein Netzwerkfehler ist aufgetreten. Bitte prüfen Sie Ihre Verbindung.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-black p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto lg:mx-0">
        <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-6 md:mb-8 uppercase font-sans">Kostenlose Beratung</h3>
        <form onSubmit={handleSubmit} className="space-y-4">

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Neue Kontaktanfrage von Luan Allround Service" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label className="block text-white font-bold text-sm mb-1">Vollständiger Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Max Mustermann"
              className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              required
            />
          </div>



          <div>
            <label className="block text-white font-bold text-sm mb-1">Telefon *</label>
            <input
              type="tel"
              name="phone"
              placeholder="+49 1234 567890"
              className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              required
            />
          </div>

          <div>
            <label className="block text-white font-bold text-sm mb-1">Deine Stadt *</label>
            <input
              type="text"
              name="city"
              placeholder="Kuppenheim"
              className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
              required
            />
          </div>

          <div>
            <label className="block text-white font-bold text-sm mb-1">Kurze Beschreibung Ihrer Vorstellungen *</label>
            <textarea
              name="message"
              placeholder="Ihre Nachricht..."
              rows={3}
              className="w-full p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            ></textarea>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" required />
            <span className="text-xs text-gray-300">Ich stimme den <a href="#" className="text-green-500 underline">AGB</a> zu und erlaube die Kontaktaufnahme.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#4a7c59] hover:bg-[#3d664a] text-white font-black uppercase py-4 rounded-md text-lg md:text-xl tracking-wide transition-colors mt-2 flex justify-center items-center"
          >
            {isSubmitting ? 'Sende...' : 'Anfrage senden'}
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">Vielen Dank!</h3>
            <p className="text-gray-600 mb-6">
              Wir haben Ihre Anfrage erhalten. Unser Team wird sich schnellstmöglich bei Ihnen melden.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-[#4a7c59] text-white font-bold py-3 rounded-lg hover:bg-[#3d664a] transition-colors"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Hauptabschnitte ---

const Hero = () => (
  <div className="relative min-h-screen w-full overflow-visible pb-12">
    {/* Hintergrundbild mit langsamer Zoom-Effekt */}
    <div
      className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1723208757257-3e71cf4c5040?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-black/20"></div>
    </div>

    {/* Inhalt */}
    <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center z-10 pt-20 lg:pt-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="overflow-hidden mb-2">
            <p className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm animate-[fadeInUp_1s_ease-out_forwards]">
              Garten- & Landschaftsbau
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white leading-[1.1] drop-shadow-2xl mb-6 md:mb-8 animate-[fadeInUp_1.2s_ease-out_forwards]">
            Umweltprojekte
            <br />
            <span className="italic font-light text-gold-400">harmonisch</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl border-l-2 border-gold-500 pl-4 md:pl-6 mb-8 md:mb-10 animate-[fadeInUp_1.4s_ease-out_forwards] mx-auto lg:mx-0">
            Professionelle Gartenarbeiten: Zaunmontage, Gartenpflege, Reinigung und Allround-Service. Kontaktieren Sie uns für ein unverbindliches Angebot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 animate-[fadeInUp_1.6s_ease-out_forwards] justify-center lg:justify-start">
            <Link
              to={NavigationLinks.SERVICES}
              className="px-6 md:px-10 py-3 md:py-4 bg-gold-500 hover:bg-gold-600 text-white font-bold tracking-widest uppercase transition-all duration-300 text-center shadow-xl hover:-translate-y-1 text-sm md:text-base"
            >
              Unsere Leistungen
            </Link>
            <Link
              to={NavigationLinks.PROJECTS}
              className="px-6 md:px-10 py-3 md:py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold tracking-widest uppercase transition-all duration-300 text-center backdrop-blur-sm hover:-translate-y-1 text-sm md:text-base"
            >
              Projekte ansehen
            </Link>
          </div>
          {/* Mobiles Kontaktformular direkt unter den Buttons */}
          <div className="lg:hidden mt-6 animate-[fadeInUp_1.6s_ease-out_forwards] px-4">
            <ContactForm />
          </div>
        </div>

        {/* Kontaktformular rechts - für Desktop sichtbar */}
        <div className="hidden lg:block animate-[fadeInUp_1.6s_ease-out_forwards]">
          <ContactForm />
        </div>
      </div>
    </div>

    {/* Scroll-Indikator */}
    <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
      <div className="flex flex-col items-center">
        <span className="text-[10px] tracking-widest uppercase mb-2">Scrollen</span>
        <div className="w-px h-8 md:h-12 bg-white/50"></div>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <PencilRuler className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Zaunmontage",
      desc: "Stabile, saubere und fachgerechte Montage von Zäunen und Sichtschutzanlagen."
    },
    {
      icon: <Shovel className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Gartenpflege",
      desc: "Rasen- und Heckenschnitt, Laubentfernung und saisonale Pflege für einen gepflegten Garten."
    },
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Reinigung",
      desc: "Hof-, Terrassen- und Objektreinigung für saubere Außenbereiche."
    },
    {
      icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Allround-Service",
      desc: "Unterstützung bei allen Arbeiten rund ums Haus und den Garten."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="h-full p-6 md:p-8 bg-white hover:bg-earth-900 group transition-all duration-500 shadow-sm hover:shadow-xl border-b-2 border-transparent hover:border-gold-500">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-stone-100 group-hover:bg-white/10 rounded-full flex items-center justify-center text-earth-900 group-hover:text-gold-500 mb-4 md:mb-6 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg md:text-xl font-serif text-earth-900 group-hover:text-white mb-3 md:mb-4 transition-colors">{s.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{s.desc}</p>
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
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1558635924-f555998d5819?q=80&w=2000&auto=format&fit=crop')] opacity-5 pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
        <RevealOnScroll>
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border border-gold-500/30 z-0"></div>
            <img
              src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/594057411_122102874819143401_9017748971187316802_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-9VRZI0VaugQ7kNvwGrx5zA&_nc_oc=Adl-v6sHpoF_fDB7Ci6QFPnU7CvO4diMh6Mgph1aCurJOOGivYac7cPH06c5hF1stnI&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=q38kzGWlPRJ8wlcpp8VjXQ&oh=00_AfmdwL3DV3oJBy9cOdoW_6d6xsK3hpZWdG6JpbhrYLirVA&oe=693890B2"
              alt="Arbeiten von Luan Allround Service"
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
              Ich bin Luan Allround Service, Ihr zuverlässiger Landschaftsgärtner. Ich übernehme Zaunmontage, Gartenpflege, Terrassen- und Hofreinigung sowie alle anfallenden Arbeiten rund ums Haus — sauber, pünktlich und professionell.
            </p>

            {/* Unternehmensteil */}
            <div className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-white/5 border border-white/10 rounded-sm mt-6 md:mt-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <img
                src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/594075220_122102875347143401_4981314521883585890_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hpDRKLumNcAQ7kNvwErggEm&_nc_oc=Adn0EJ2IAPQDxiuqUkvXizPuUEC2-693jeoylo7bHgKsy2p5qkgtcnmux2nSz5Tk2gA&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=UpDgP_42Qe2jwGXT-qV5fQ&oh=00_AfmK4i7yB9flr6utgJSA56XB6WRNmWxehJqBgwNEFZ_aFA&oe=69386A25"
                alt="Logo Luan Allround Service"
                className="w-16 h-16 md:w-24 md:h-24 object-cover border-2 border-gold-500 shadow-md"
              />
              <div>
                <h4 className="text-lg md:text-xl font-serif text-white">Luan Allround Service</h4>
                <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1 md:mb-2">Garten- & Landschaftsbau</p>
                <p className="text-gray-400 text-xs italic">"Qualität, die Sie spüren - Service, der überzeugt."</p>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
              {[
                { title: "Fachgerechte Ausführung", desc: "Sorgfältige Arbeit mit langlebigen Materialien." },
                { title: "Schnelle Umsetzung", desc: "Zuverlässige Termine und saubere Baustellen." },
                { title: "Maßgeschneiderte Lösungen", desc: "Individuelle Konzepte für Ihren Außenbereich." }
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
  const [images] = useState<ProjectImage[]>([
    { id: '1', url: './images/grass.jpg', title: 'Professionelle Rasenpflege' },
    { id: '2', url: './images/7.jpeg', title: 'Das Gartenparadies Ihrer Familie' },
    { id: '3', url: './images/9.jpeg', title: '' },
    { id: '4', url: './images/10.jpeg', title: ' ' },
    { id: '5', url: './images/18.jpeg', title: 'Der perfekte Zaun' },
    { id: '6', url: './images/after.jpeg', title: 'vorher vs nachher' },


  ]);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-1 mt-8 md:mt-12">
          {images.map((img, index) => (
            <RevealOnScroll key={img.id} delay={index * 50}>
              <Link to={`/blog/${blogPosts[index].slug}`} className="block">
                <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                  <img
                    src={img.url}
                    alt={blogPosts[index].title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-earth-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 md:p-6 text-center">
                    <span className="text-gold-500 text-xs tracking-widest uppercase mb-2">
                      Blog-Beitrag lesen
                    </span>
                    <h4 className="text-lg md:text-2xl font-serif text-white mb-3 md:mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 line-clamp-2">
                      {blogPosts[index].title}
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

  const googleMapsUrl = "https://www.google.com/maps/place/Luan+Allround+Service/@49.1195743,9.1717969,1768539a,35y,350.44h/data=!3m1!1e3!4m18!1m9!3m8!1s0x47971d9ddc21dc61:0x8b73b203f70f96b!2sLuan+Allround+Service!8m2!3d48.8264987!4d8.2535412!9m1!1b1!16s%2Fg%2F11rr2yqn18!3m7!1s0x47971d9ddc21dc61:0x8b73b203f70f96b!8m2!3d48.8264987!4d8.2535412!9m1!1b1!16s%2Fg%2F11rr2yqn18?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D";

  const allReviews = [
    { name: "Toni D'Agostino", time: "vor 6 Monaten", text: "Ein Super-Team, Vorab wird ein Vor-Ort-Termin vereinbart um sich die Situation einen Überblick zu verschaffen. Gleichzeitig wird man beraten was besser gemacht werden kann. Am Einbautag wird alles Sauber, Präzise und mit Erfahrung eingebaut. Mit dem Ergebnis bin ich sehr zufrieden und kann die Firma sehr empfehlen!" },
    { name: "Gerhard Gerschner", time: "vor 6 Monaten", text: "Qualitativ sehr gute Arbeit. Super freundliches Team. Die Jungs wissen was sie tun. Immer hilfsbereit und sehr schnell. Wer einen Zaun braucht sollte sich bei Luan Allround Service melden!!!" },
    { name: "Tanja M", time: "vor 6 Monaten", text: "Der Zaunbau bei meinem Vater hat super geklappt…tolle Arbeit, sehr gute Kommunikation. Wir danken dem ganzen Team und können die Firma nur weiterempfehlen." },
    { name: "Katrin Schindler", time: "vor 5 Monaten", text: "Sehr schnelle und sehr günstige Firma. Innerhalb weniger Tage wurde der Zaun gestellt. Super nette Leute. Absolut vertrauenswürdig. Kann ich jedem empfehlen!!" },
    { name: "Marcus Bräuning", time: "vor 10 Monaten", text: "Danke nochmals für eure gute Arbeit, obwohl es geregnet hat wie aus Eimern. Die Bäume habt ihr wieder top in Form geschnitten wie es auch gewünscht war. Danke für eure schnelle Unterstützung und ihr seid ein tolles Team!" },
    { name: "UGI Performance", time: "vor 11 Monaten", text: "Super Kompetenz. Fixer Aufbau. Tolles Design. Vielen Dank. Nur weiter zu empfehlen Top Qualität." },
    { name: "Sebastian Morina", time: "vor 2 Jahren", text: "Sehr kompetente, Zuverlässige sowie preiswerte Firma. Empfehlenswert also holt euch gerne mal ein Angebot rein und überzeugt euch gerne selbst von meiner Zufriedenheit." },
    { name: "Florim Sinani", time: "vor 2 Jahren", text: "Guten Tag, bin mit der Arbeit sehr zufrieden und kann nur gutes berichten. Freundliche Arbeiter und saubere Arbeit." },
    { name: "Tanja Möhrmann", time: "vor 3 Jahren", text: "Sehr zu empfehlen! Hochwertiges Material, sehr freundlicher Kontakt und guter hilfsbereiter Service" }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(allReviews.length / itemsPerPage);
  const displayedReviews = allReviews.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <section className="py-16 md:py-24 bg-stone-100 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url('./images/grid.png')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <SectionTitle subtitle="Google Bewertungen" title="Was unsere Kunden sagen" />
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
                          Verified Customer
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
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">{review.text}</p>
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

        {/* Google Badge */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm md:text-base">
            <span className="font-bold">Google</span> Bewertungen – Durchschnitt: ⭐⭐⭐⭐⭐
          </p>
        </div>
      </div>
    </section>
  );
};

const InteractiveMap = () => (
  <div className="w-full h-[300px] md:h-[500px] relative">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625996969!2d8.218991315674936!3d48.85822007928734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47971d9ddc21dc61%3A0x8b73b203f70f96b!2sFriedrichstra%C3%9Fe%20100%2C%2076456%20Kuppenheim%2C%20Germany!5e0!3m2!1sen!2s!4v1733414400000!5m2!1sen!2s"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Standort in Kuppenheim"
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

const HomePage = () => (
  <>
    <Hero />
    <ServicesSection />
    <AboutPreview />
    <ProjectsGallery />
    <Testimonials />
    <InteractiveMap />
  </>
);

const ServicesPage = () => (
  <>
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
                src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/590401163_122097381561143401_9174567204637320564_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AIz-0yXf9TwQ7kNvwElDpCo&_nc_oc=AdmT53NYjq7OjmnwUe4N0TEdSjOxrz5HeLOYps8qwUctOJYLhvh63oyaPjGfA8uZhlc&_nc_zt=23&_nc_ht=scontent.ftun16-1.fna&_nc_gid=ONUUNHgz8sLlDTUhGs2FkQ&oh=00_Afk61y1QdVxQ5En50Z4bw-DfAWAcyZFJskm2tOd3Pjq6kg&oe=69387D1E"
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
            Als Ihr lokaler Landschaftsgärtner für den Raum Kuppenheim, Rastatt, Baden-Baden und Karlsruhe bringe ich Erfahrung, Zuverlässigkeit und ein Auge fürs Detail in jedes Projekt. Ob Gartenpflege, professioneller Zaunbau oder gründliche Reinigungsarbeiten – mein Ziel ist es, Ihre Außenbereiche in gepflegte und funktionale Wohlfühlorte zu verwandeln.
          </p>
          <p className="leading-loose text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
            Wir verstehen, dass jeder Garten einzigartig ist. Deshalb setzen wir auf eine persönliche Beratung und maßgeschneiderte Konzepte, die genau auf Ihre Wünsche und die Gegebenheiten vor Ort abgestimmt sind. Wir verbinden traditionelle Handwerkskunst mit modernen Techniken, um nachhaltige und ästhetisch ansprechende Ergebnisse zu schaffen, an denen Sie lange Freude haben werden.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 md:py-12 text-center border-y border-gray-200 my-8 md:my-12">
            <div>
              <span className="block text-2xl md:text-4xl font-serif text-gold-500 mb-1 md:mb-2">10+</span>
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
                <a href="mailto:info@luan-limani.de" className="text-earth-900 hover:text-gold-500 transition-colors">info@luan-limani.de</a>
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
                  <p className="text-gray-600">Deutschland (regional tätig)<br />Anfahrt bundesweit auf Anfrage</p>
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
                  <a href="mailto:info@luan-limani.de" className="text-earth-900 hover:text-gold-500 transition-colors">info@luan-limani.de</a>
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
    <PageHeader
      title="Blog & Ratgeber"
      subtitle="Tipps & Erfahrungen"
      image="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&w=2000&auto=format&fit=crop"
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
          <SectionTitle subtitle="Aus der Praxis" title="Unsere Projekt-Geschichten" />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <RevealOnScroll key={post.id} delay={index * 100}>
              <Link to={`/blog/${post.slug}`} className="group block">
                <div className="bg-white border border-stone-200 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={post.image}
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
                beforeImage="./images/before.jpeg"
                afterImage="./images/after.jpeg"
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

  const allGalleryImages: ProjectImage[] = [
    { id: '1', url: './images/1.jpeg', title: '' },
    { id: '2', url: './images/2.jpeg', title: '' },
    { id: '3', url: './images/3.jpeg', title: '' },
    { id: '4', url: './images/4.jpeg', title: '' },
    { id: '5', url: './images/5.jpeg', title: ' ' },
    { id: '6', url: './images/6.jpeg', title: '' },
    { id: '7', url: './images/7.jpeg', title: '' },
    { id: '8', url: './images/8.jpeg', title: '' },
    { id: '9', url: './images/9.jpeg', title: '' },
    { id: '10', url: './images/10.jpeg', title: ' ' },
    { id: '11', url: './images/11.jpeg', title: '' },
    { id: '12', url: './images/12.jpeg', title: '' },
    { id: '13', url: './images/before.jpeg', title: '' },
    { id: '14', url: './images/after.jpeg', title: '' },
    { id: '15', url: './images/15.jpeg', title: '' },
    { id: '16', url: './images/16.jpeg', title: '' },
    { id: '17', url: './images/17.jpeg', title: '' },
    { id: '18', url: './images/18.jpeg', title: '  ' },
    { id: '19', url: './images/19.jpeg', title: '  ' },
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
            <SectionTitle subtitle="Vollständiges Portfolio" title="20+ Premium Saunenprojekte" align="center" />
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
                    src={img.url}
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
              src={allGalleryImages[selectedImageIndex].url}
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

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen overflow-x-hidden font-sans text-earth-900 selection:bg-gold-500 selection:text-white bg-stone-50">
        <AnimationStyles />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={NavigationLinks.HOME} element={<HomePage />} />
            <Route path={NavigationLinks.SERVICES} element={<ServicesPage />} />
            <Route path={NavigationLinks.PROJECTS} element={<ProjectsPage />} />
            <Route path={NavigationLinks.GALLERY} element={<FullGalleryPage />} />
            <Route path={NavigationLinks.BLOG} element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path={NavigationLinks.ABOUT} element={<AboutPage />} />
            <Route path={NavigationLinks.CONTACT} element={<ContactPage />} />
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
  );
};

export default App;