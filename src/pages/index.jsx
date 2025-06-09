import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Episode } from '../components/Episode';


const episodes = [
  { num: 126, title: 'Robot, který snědl koblihu', guest: 'Radovan Siwek' },
  { num: 127, title: 'Hledání plyšového Yettiho', guest: 'Vojtěch Ryba' },
  { num: 128, title: 'Moderní hrachová polévka', guest: 'Kamila Štancová' },
  { num: 129, title: 'Poloautomatické zrcadlo', guest: 'Janka Janovská' },
  { num: 130, title: 'Máčené hlavy parlamentu', guest: 'Jonáš Daněk' },
  { num: 131, title: 'Služby na hraně přívěsu', guest: 'Tereza Křivánková' },
  { num: 132, title: 'Klasifikace sněžných klokanů', guest: 'Josef Stix' },
  { num: 133, title: 'Rybolov v Oceánu bouří', guest: 'Ludmila Gajová' },
];

const listEpisodes = episodes.map((item) => <Episode key={item.num} num={item.num} title={item.title} guest={item.guest}/>);
  


document.querySelector("#root").innerHTML = render(
  <main>
    <div className="episodes-list">

      <p>1. část úkolu: Pomocí této komponenty zobrazte stejné dvě epizody, jaké byly v původním kódu napevno zadrátované.</p>
      <Episode
        num='127'
        title='Hledání plyšového Yettiho'
        guest='Vojtěch Ryba'
      />
      <Episode
        num='128'
        title='Moderní hrachová kaše'
        guest='Kamila Štancová'
      />      

      <p>2. část úkolu: Místo natvrdo zadrátovaných epizod přímo v kódu použijte následujicí data a na stránce zobrazte všechny uvedené epizody.</p>
      {listEpisodes}

    </div>
  </main>
);