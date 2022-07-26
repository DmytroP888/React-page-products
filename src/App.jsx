import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import MultiView from "./components/MultiView";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:path(|multi-view)">
                    <MultiView {...multiViewData} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
const group2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c06d25ee092ef699495931/img/vector-1@2x.svg",
};

const group85Data = {
    number: "0",
    text8: "0 г.",
    text9: "Оформить заказ",
    group2Props: group2Data,
};

const group1Data = {
    phone: "+380 97 0000777",
    text98: "Заказать звонок",
};

const group84Data = {
    text217: "Киев",
    group: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/group-18@2x.svg",
    x_: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c0becead7f05c93f81b00f/img/---------------3@2x.svg",
    group1Props: group1Data,
};

const text1Data = {
    children: "Подарочные ножи",
};

const maskGroup1Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/mask-group@2x.png",
};

const maskGroup2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/mask-group@2x.png",
    className: "mask-group-1",
};

const maskGroup3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/mask-group@2x.png",
    className: "mask-group-2",
};

const maskGroup4Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/mask-group@2x.png",
    className: "mask-group-3",
};

const maskGroup5Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/mask-group@2x.png",
    className: "mask-group-4",
};

const maskGroup6Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/mask-group@2x.png",
    className: "mask-group-5",
};

const maskGroup7Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/mask-group@2x.png",
    className: "mask-group-6",
};


const infozlatmaxru1Data = {
    children: <React.Fragment>Златоустовские ножи <br />в Киеве и области <br />области</React.Fragment>,
};

const infozlatmaxru2Data = {
    children: <React.Fragment>Условия оплаты <br />и доставки</React.Fragment>,
    className: "text-102",
};

const infozlatmaxru3Data = {
    children: <React.Fragment>Политика <br />конфиденциальности</React.Fragment>,
    className: "text-103",
};

const group75Data = {
    text29: "ИНФОРМАЦИЯ",
    text30: "Ножевые стали",
    text32: "О нас",
    infozlatmaxru1Props: infozlatmaxru1Data,
    infozlatmaxru2Props: infozlatmaxru2Data,
    infozlatmaxru3Props: infozlatmaxru3Data,
};

const group76Data = {
    text12: "СЛУЖБА ПОДДЕРЖКИ",
    text13: "Контактная информация",
    text14: "Возврат товара",
    text15: "Карта сайта",
};

const group93Data = {
    text20: "ДОПОЛНИТЕЛЬНО",
    text21: "Подарочные сертификаты",
    text22: "Партнеры",
    text23: "Товары со скидкой",
};

const group94Data = {
    text24: "ЛИЧНЫЙ КАБИНЕТ",
    text25: "Личный кабинет",
    text26: "История заказов",
    text27: "Мои закладки",
    text28: "Рассылка новостей",
};

const infozlatmaxru4Data = {
    children: <React.Fragment>Пн-Пт <br />7:00 - 16:00 (GMT)</React.Fragment>,
    className: "text-105",
};

const infozlatmaxru5Data = {
    children: <React.Fragment>Киев, <br />ул. Победы, <br />д. 2, офис «3А»</React.Fragment>,
    className: "text-106",
};

const infozlatmaxru6Data = {
    children: "info@zlatmax.uk",
    className: "infozlatmaxuk",
};

const group95Data = {
    text16: "ПОЛЕЗНЫЕ ССЫЛКИ",
    text17: "Способы оплаты и доставки",
};

const group96Data = {
    text18: "НАША ГАРАНТИЯ",
    spanText1: <React.Fragment>Недовольны своей покупкой? <br />Вы можете вернуть ее в течении <br />30 дней с даты получения,<br />согласно </React.Fragment>,
    spanText2: "нашим правилам",
};

const group9432Data = {
    text1: " НОВОСТНАЯ РАССЫЛКА",
    text2: "Подпишитесь прямо сейчас!",
    text3: <React.Fragment>Я прочитал Условия соглашения и <br />согласен с условиями</React.Fragment>,
};

const viewData = {
    w513H5131371296104Facebook8: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/w513h5131371296104facebook-8@2x.png",
    w513H5131371296104Facebook7: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c0becead7f05c93f81b00f/img/w513h5131371296104facebook-7@2x.png",
    telegram4: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c21436ad7f05c93f81b2e6/img/telegram-4@2x.png",
    logoWhatsappPngTransparentBackgroun: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c0becead7f05c93f81b00f/img/logo-whatsapp-png-transparent-background-8-4-1@2x.png",
};

const multiViewData = {
    navbarLinkText113: "О нас",
    navbarLinkText108: "Оплата и доставка",
    navbarLinkText109: "Новости",
    navbarLinkText110: "Контакты",
    navbarLinkText117: "Личный кабинет",
    text104: "Каталог ножей",
    text105: "Клинковый сувенир",
    text106: "Сувенирные изделия",
    armytek: "Фонари ARMYTEK",
    text107: "Сопуствующие товары",
    text116: "Поиск",
    text114: "Главная",
    text115: "Подарочные ножи",
    text327: "По популярности",
    text215: "Фильтр товаров",
    text216: "Цена",
    text217: "Производство",
    text218: "АиР",
    text219: "(250)",
    text220: "(25)",
    text221: "(265)",
    text222: "(18)",
    text223: "(170)",
    text224: "Сталь",
    text225: "Рукоять",
    text226: "Pesso",
    text227: "Cobalt",
    text228: "ЗЗОСС",
    text229: "ЗИК",
    text230: "(170)",
    text231: "ЗЛАТКО",
    text232: "(170)",
    text233: "ЗлатПрофит",
    text234: "(170)",
    text235: "ЗОК",
    text236: "(170)",
    text237: "НБК",
    text238: "(170)",
    text239: "НИКОН",
    text240: "(170)",
    text241: "Tricky",
    text242: "(170)",
    text243: "Сувенир",
    text244: "(170)",
    text245: "СТИЛЬ-М",
    text246: "100Х13М",
    text247: "(250)",
    text248: "(25)",
    text249: "(265)",
    text250: "(18)",
    text251: "(170)",
    text252: "110Х18М-ШД",
    text253: "40Х10С2М (ЭИ-107)",
    text254: "50Х14МФ",
    text255: "95Х18",
    text256: "(170)",
    aus8: "AUS-8",
    text257: "(170)",
    elmax: "ELMAX",
    text258: "(170)",
    rwl34: "RWL-34",
    text259: "(170)",
    text260: "Дамаск",
    text261: "(170)",
    text262: "К340",
    text263: "(170)",
    text264: "Литой булат",
    text265: "Литой булат",
    text266: "(170)",
    text267: "Литой булат",
    text268: "(170)",
    text269: "(170)",
    text270: "М390",
    text271: "Золочение",
    text272: "Общая длина, мм",
    text273: "Длина клинка, мм",
    text274: "Золочение клинка",
    number1: "100",
    number2: "90",
    text275: "Золочение рисунка на клинке",
    mercorne: "Mercorne",
    text276: "(250)",
    text277: "(25)",
    text278: "(265)",
    text279: "(18)",
    text280: "(170)",
    text281: "Березовый кап",
    text282: "Бубинго",
    text283: "Граб",
    text284: "Дуб",
    text285: "(170)",
    text286: "Кап",
    text287: "(170)",
    text288: "(170)",
    text289: "Каштан",
    text290: "(170)",
    text291: "Квартопрен",
    text292: "(170)",
    text293: "Кожа-Металл",
    text294: "(170)",
    text295: "Комбинированная",
    text296: "Комбинированная",
    text297: "Гарда и тыльник",
    text298: "Алюминий",
    text299: "(250)",
    text300: "(25)",
    text301: "(265)",
    text302: "(18)",
    text303: "(170)",
    text304: "Латунь",
    text305: "Литой Барс",
    text306: "Литой Барс",
    text307: "(170)",
    text308: "Литой Пума",
    text309: "Литой Пума",
    text310: "(170)",
    text311: "(170)",
    text312: "Металлический",
    text313: "Литье",
    text314: "(170)",
    text315: "Нержавеющая сталь",
    text316: "(170)",
    text317: "Текстолит",
    text318: "(170)",
    text319: "Комбинированная",
    number3: "100",
    number4: "90",
    text320: "Ширина клинка, мм",
    text321: "Рейтинг",
    number5: "100",
    text322: "5/5",
    text323: "4/5",
    text324: "3/5",
    text325: "2/5",
    text326: "1/5",
    number6: "90",
    address2: "5000 грн.",
    address3: "5000 грн.",
    x01S21: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/01s-2@2x.png",
    text118: "Нож Лиса",
    text119: "95х18",
    text120: "Орех, Алюминий",
    address4: "12 отзывов",
    address5: "2 719 г.",
    text328: "-50%",
    x01S22: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/01s-2@2x.png",
    text127: "Нож Лиса",
    text128: "95х18",
    text129: "Орех, Алюминий",
    address6: "12 отзывов",
    address7: "2 719 г.",
    x01S23: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/01s-2@2x.png",
    text136: "Нож Лиса",
    text137: "95х18",
    text138: "Орех, Алюминий",
    address8: "12 отзывов",
    address9: "2 719 г.",
    x01S24: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/01s-2@2x.png",
    text145: "Нож Лиса",
    text146: "95х18",
    text147: "Орех, Алюминий",
    address10: "12 отзывов",
    address11: "2 719 г.",
    x01S25: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/01s-2@2x.png",
    text154: "Нож Лиса",
    text155: "95х18",
    text156: "Орех, Алюминий",
    address12: "12 отзывов",
    address13: "2 719 г.",
    x01S26: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/01s-2@2x.png",
    text163: "Нож Лиса",
    text164: "95х18",
    text165: "Орех, Алюминий",
    address14: "12 отзывов",
    address15: "2 719 г.",
    x01S27: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c1a97b02d46bac82824b84/img/01s-2@2x.png",
    text172: "Нож Лиса",
    text173: "95х18",
    text174: "Орех, Алюминий",
    address16: "12 отзывов",
    address17: "2 719 г.",
    text213: "Показать больше",
    text182: "Как выбрать лучший разделочный нож",
    x2019121012471: "https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/--------------2019-12-10---12-47-1@2x.png",
    text207: " КОНТАКТЫ",
    phone: "+380 97 0000777",
    exampleGmailCom: "example@gmail.com",
    x437wwwzlatmaxru: <React.Fragment>Все материалы, размещенные на сайте, носят справочный характер и не являются <br />публичной офертой, определяемойположениями Статьи 127. <br />При копировании материалов гиперссылка на www.zlatmax.uk обязательна!</React.Fragment>,
    copyright: "Златоустовские ножи www.zlatmax.uk ©",
    group85Props: group85Data,
    group84Props: group84Data,
    text1Props: text1Data,
    maskGroup1Props: maskGroup1Data,
    maskGroup2Props: maskGroup2Data,
    maskGroup3Props: maskGroup3Data,
    maskGroup4Props: maskGroup4Data,
    maskGroup5Props: maskGroup5Data,
    maskGroup6Props: maskGroup6Data,
    maskGroup7Props: maskGroup7Data,
    group75Props: group75Data,
    group76Props: group76Data,
    group93Props: group93Data,
    group94Props: group94Data,
    infozlatmaxru1Props: infozlatmaxru4Data,
    infozlatmaxru2Props: infozlatmaxru5Data,
    infozlatmaxru3Props: infozlatmaxru6Data,
    group95Props: group95Data,
    group96Props: group96Data,
    group9432Props: group9432Data,
    viewProps: viewData,
};

