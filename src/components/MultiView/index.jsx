// import React, { useRef, useState } from "react";
import Group85 from "../Header multi view/Group85";
import Group61 from "../Header multi view/Group61";
import Group84 from "../Header multi view/Group84";
import Text1 from "../Text1";
import Group75 from "../Footer multi view/Group75";
import Group76 from "../Footer multi view/Group76";
import Group93 from "../Footer multi view/Group93";
import Group94 from "../Footer multi view/Group94";
import Infozlatmaxru from "../Footer multi view/Infozlatmaxru";
import Group95 from "../Footer multi view/Group95";
import Group96 from "../Footer multi view/Group96";
import Group9432 from "../Footer multi view/Group9432";
import View from "../Footer multi view/View";
import Collapse from "./Collapse";
import FilterPriceRangeInputBlock from "./FiterPriceRangeInputBlock";
import "./MultiView.css";
import "../../globals.css";


function MultiView(props) {
  const {
    navbarLinkText113,
    navbarLinkText108,
    navbarLinkText109,
    navbarLinkText110,
    navbarLinkText117,
    text104,
    text105,
    text106,
    armytek,
    text107,
    text116,
    text114,
    text115,
    text327,
    x01S21,
    text118,
    text119,
    text120,
    address4,
    address5,
    text328,
    text213,
    text182,
    x2019121012471,
    text207,
    phone,
    exampleGmailCom,
    x437wwwzlatmaxru,
    copyright,
    group85Props,
    group84Props,
    text1Props,
    group75Props,
    group76Props,
    group93Props,
    group94Props,
    infozlatmaxru1Props,
    infozlatmaxru2Props,
    infozlatmaxru3Props,
    group95Props,
    group96Props,
    group9432Props,
    viewProps,
    titleFilter,
    styleTitleFilter,
    classElementMenuFilter,
    arrowFilter,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="multi-view screen">

        {/* ==================================================== HEADER start =================================================== */}
        <div className="navbar">
          <div className="navbar-link-text-10 montserrat-medium-white-16px">{navbarLinkText113}</div>
          <div className="navbar-link-text-5 montserrat-medium-white-16px">{navbarLinkText108}</div>
          <div className="navbar-link-text-6 montserrat-medium-white-16px">{navbarLinkText109}</div>
          <div className="navbar-link-text-7 montserrat-medium-white-16px">{navbarLinkText110}</div>
          <img alt="" className="icon-user"
            src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c21436ad7f05c93f81b2e6/img/group-6@2x.svg"
          />
          <div className="navbar-link-text-14 montserrat-semi-bold-white-18px">{navbarLinkText117}</div>
        </div>
        <div className="overlap-group32">
          <div className="rectangle-4"></div>
          <div className="rectangle-2"></div>
          <div className="text-1-1 montserrat-medium-fuel-yellow-18px">{text104}</div>
          <div className="text-2 montserrat-medium-white-18px-2">{text105}</div>
          <div className="text-3 montserrat-medium-white-18px-2">{text106}</div>
          <div className="armytek montserrat-medium-white-18px-2">{armytek}</div>
          <div className="text-4 montserrat-medium-white-18px-2">{text107}</div>
          <Group85
            number={group85Props.number}
            text8={group85Props.text8}
            text9={group85Props.text9}
            group2Props={group85Props.group2Props}
          />
          <img alt="" className="icon-heart-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/-----------------@2x.svg"
          />
          <div className="overlap-group1-1">
            <Group61 />
            <div className="text-13 montserrat-medium-black-14px">{text116}</div>
            <div className="overlap-group-4">
              <div className="ellipse-12 border-1px-black-3"></div>
              <img alt=""
                className="line-9"
                src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/line-9@2x.svg"
              />
            </div>
          </div>
          <img alt="" className="line-26"
            src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c19e6f51e3f1b355ff7479/img/line-26@2x.svg"
          />
          <img alt="" className="logo"
            src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c0becead7f05c93f81b00f/img/logo-1@2x.svg"
          />
          <Group84
            text217={group84Props.text217}
            group={group84Props.group}
            x_={group84Props.x_}
            group1Props={group84Props.group1Props}
          />
        </div>
        {/* ==================================================== HEADER end =================================================== */}

        <Text1>{text1Props.children}</Text1>
        <div className="flex-row-6">
          <div className="text-11 montserrat-medium-licorice-16px">{text114}</div>
          <img alt="" className="group-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/group@2x.svg"
          />
          <div className="text-12 montserrat-medium-fuel-yellow-16px">{text115}</div>
          <div className="overlap-group35 border-1px-black-6">
            <div className="text-224 montserrat-medium-black-16px-2">{text327}</div>
            <img alt=""
              className="group-5"
              src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c0becead7f05c93f81b00f/img/group-20@2x.svg"
            />
          </div>
        </div>
        <div className="flex-row-7">

          {/* -------------------------------- */}
          <ul>
            <Collapse classElementMenuFilter="rectangle-281" titleFilter="Фильтр товаров" styleTitleFilter="text-114 montserrat-bold-white-20px">
              {titleFilter} {styleTitleFilter} {classElementMenuFilter} {arrowFilter}
              <div className="filterPriceBox-1">
                <div className="text-113 montserrat-semi-bold-licorice-20px">Цена</div>
                <img alt="" className="group-6" src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/group-2@2x.svg"></img>

                <div>
                  {/* <div className="containerRangeFilter">
                    <div className="rangeline-yellow">
                      <div className="circle-yellow"></div>
                      <div className="circle-black"></div>
                      <div className="textrange-left montserrat-medium-licorice-14px">  2000 грн.</div>
                    </div>
                    <div className="rangeline-yellow-right">
                      <div className="circle-yellow-right"  >
                        <div className="circle-black-right"></div>
                        <div className="textrange-right montserrat-medium-licorice-14px"> 5000 грн.</div></div>
                    </div>
                  </div> */}

                  <FilterPriceRangeInputBlock >

                  </FilterPriceRangeInputBlock>

                </div>
              </div>

              <li >
                <Collapse classElementMenuFilter="rectangle-281" arrowFilter={<img alt="arrow" src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/group-2@2x.svg"></img>}
                  titleFilter="Производство" styleTitleFilter="text-114 montserrat-semi-bold-white-20px"
                >
                  <div className='filterPriceBox-2'>
                    <ul>
                      <li>
                        <input type="checkbox" name="production" className="custom-checkbox" id="production" />
                        <label for='production'>SpaceX</label>
                        <span className="text-116 montserrat-medium-fuel-yellow-16px">(50)</span>
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </li>
              <li >
                <Collapse classElementMenuFilter="rectangle-281" arrowFilter={<img alt="arrow" src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/group-2@2x.svg"></img>}
                  titleFilter="Сталь" styleTitleFilter="text-114 montserrat-semi-bold-white-20px"
                >
                  <div className='filterPriceBox-2'>
                    <ul>
                      <li>
                        <input type="checkbox" name="steel" className="custom-checkbox" id="steel" />
                        <label for='steel'>Дамаск</label>
                        <span className="text-116 montserrat-medium-fuel-yellow-16px">(20)</span>
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </li>
              <li >
                <Collapse classElementMenuFilter="rectangle-281" arrowFilter={<img alt="arrow" src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/group-2@2x.svg"></img>}
                  titleFilter="Рукоять" styleTitleFilter="text-114 montserrat-semi-bold-white-20px"
                >
                  <div className='filterPriceBox-2'>
                    <ul>
                      <li>
                        <input type="checkbox" name="helve" className="custom-checkbox" id="helve" />
                        <label for='helve'>Дуб</label>
                        <span className="text-116 montserrat-medium-fuel-yellow-16px">(50)</span>
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </li>
              <li >
                <Collapse classElementMenuFilter="rectangle-281" arrowFilter={<img alt="arrow" src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/group-2@2x.svg"></img>}
                  titleFilter="Гарда и тыльник" styleTitleFilter="text-114 montserrat-semi-bold-white-20px"
                >
                  <div className='filterPriceBox-2'>
                    <ul>
                      <li>
                        <input type="checkbox" name="garda" className="custom-checkbox" id="garda" />
                        <label for='garda'>Металл</label>
                        <span className="text-116 montserrat-medium-fuel-yellow-16px">(30)</span>
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </li>
              <li >
                <Collapse classElementMenuFilter="rectangle-281" arrowFilter={<img alt="arrow" src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/group-2@2x.svg"></img>}
                  titleFilter="Золочение" styleTitleFilter="text-114 montserrat-semi-bold-white-20px"
                >
                  <div className='filterPriceBox-2'>
                    <ul>
                      <li>
                        <input type="checkbox" name="zolot" className="custom-checkbox" id="zolot" />
                        <label for='zolot'>Золочение</label>
                        <span className="text-116 montserrat-medium-fuel-yellow-16px">(35)</span>
                      </li>
                    </ul>
                  </div>
                </Collapse>
              </li></Collapse>
          </ul>


          {/* ++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          {/* -------------------------------- */}


          <div className="contentPageMulti">
            <div className="containerProductsMultiCart">
              <div className="group-container">
                <div className="overlap-group37">
                  <div className="group">
                    <div className="overlap-group-2">
                      <img alt="" className="x01s-2" src={x01S21} />
                      <div className="flex-row">
                        <div className="text-container">
                          <div className="text montserrat-semi-bold-licorice-20px">{text118}</div>
                          <div className="text montserrat-semi-bold-silver-chalice-16px">{text119}</div>
                        </div>
                        <div className="text-1 montserrat-semi-bold-silver-chalice-16px">{text120}</div>
                      </div>
                      <div className="flex-row-1">
                        <img alt=""
                          className="icon-star"
                          src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/star-21@2x.svg"
                        />
                        <img alt=""
                          className="icon-star-1"
                          src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/star-21@2x.svg"
                        />
                        <img alt=""
                          className="icon-star-1"
                          src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/star-21@2x.svg"
                        />
                        <img alt=""
                          className="icon-star-1"
                          src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/star-21@2x.svg"
                        />
                        <img alt=""
                          className="icon-star-1"
                          src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/star-21@2x.svg"
                        />
                        <div className="address montserrat-medium-silver-chalice-16px">{address4}</div>
                      </div>
                      <img alt=""
                        className="line-22"
                        src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/line-22@2x.svg"
                      />
                      <div className="flex-row-2">
                        <div className="address-1 montserrat-semi-bold-licorice-20px">{address5}</div>
                        <img alt=""
                          className="group-1"
                          src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/group-12@2x.svg"
                        />
                        <img alt=""
                          className="icon-heart"
                          src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/------------------1@2x.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img alt=""
                    className="rectangle-27"
                    src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/rectangle-277@2x.svg"
                  />
                  <div className="text-22 montserrat-semi-bold-white-18px">{text328}</div>
                </div>
              </div>

            </div>
            <button className="overlap-group24 border-2px-fuel-yellow">
              <div className="text-110 montserrat-semi-bold-fuel-yellow-20px">{text213}</div>
            </button>

          </div>
        </div>

        {/* =================================== Footer start ================================= */}

        <div className="overlap-group38">
          <div className="rectangle-30"></div>
          <img alt="" className="footer-preview"
            src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c19e6f51e3f1b355ff7479/img/mask-group@1x.svg"
          />
          <div className="text-79 montserrat-bold-fuel-yellow-24px">{text182}</div>
          <div className="text-80 montserrat-medium-white-18px-2">
            <br />
            При подборе такого изделия нужно учитывать несколько важных факторов. Особенно обращать внимание на то, что
            ножи разделочные, цена которых намного выше своих аналогов не всегда являются качественными. Потому при
            выборе изделия учитываете следующие особенности:
            <br />
            <br />
            Рукоять такого инструмента должна обеспечивать плотный захват. При этом разделочный нож не только должен
            хорошо лежать в руке, но и не скользить при работе, независимо от того, чистый он, или чем-либо испачкан и
            намочен.
            <br />
            <br />
            Вторым моментом становится заточка, в частности ее тип и угол. Все изделия, представленные в нашем каталоге,
            обладают наиболее оптимальными характеристиками заточки, которая проводится с использованием лазерных
            технологий.
            <br />
            <br />И следующим важным фактором становится крепление лезвия к ручке, которое должно быть максимально
            надежным и создавать цельную систему.
            <br />
            <br />И если вы не знаете, какой разделочный нож выбрать, то рекомендуем проконсультироваться у наших
            специалистов, которые помогут принять решение и подобрать изделие, подходящее под Ваши нужды.
          </div>
        </div>
        <div className="footer">
          <div className="overlap-group23">
            <div className="flex-col-1">
              <div className="group-container-2">
                <Group75
                  text29={group75Props.text29}
                  text30={group75Props.text30}
                  text32={group75Props.text32}
                  infozlatmaxru1Props={group75Props.infozlatmaxru1Props}
                  infozlatmaxru2Props={group75Props.infozlatmaxru2Props}
                  infozlatmaxru3Props={group75Props.infozlatmaxru3Props}
                />
                <Group76
                  text12={group76Props.text12}
                  text13={group76Props.text13}
                  text14={group76Props.text14}
                  text15={group76Props.text15}
                />
                <Group93
                  text20={group93Props.text20}
                  text21={group93Props.text21}
                  text22={group93Props.text22}
                  text23={group93Props.text23}
                />
                <Group94
                  text24={group94Props.text24}
                  text25={group94Props.text25}
                  text26={group94Props.text26}
                  text27={group94Props.text27}
                  text28={group94Props.text28}
                />
              </div>
              <img alt=""
                className="line-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/line-22-4@1x.svg"
              />
              <img alt="" className="x2019-12-10-1247-1" src={x2019121012471} />
            </div>
            <div className="group-container-3">
              <div className="group-80">
                <div className="text-104 montserrat-semi-bold-white-18px">{text207}</div>
                <div className="flex-row-8">
                  <img alt="" className="icon-call"
                    src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/-------------@2x.svg"
                  />
                  <div className="phone montserrat-medium-white-18px">{phone}</div>
                </div>
                <div className="flex-row-9">
                  <div className="group-78 border-1px-white">
                    <div className="rectangle-38"></div>
                    <div className="rectangle-39"></div>
                  </div>
                  <Infozlatmaxru className={infozlatmaxru1Props.className}>
                    {infozlatmaxru1Props.children}
                  </Infozlatmaxru>
                </div>
                <div className="flex-row-10">
                  <img alt="" className="_"
                    src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62c0becead7f05c93f81b00f/img/---------------2@2x.svg"
                  />
                  <Infozlatmaxru className={infozlatmaxru2Props.className}>
                    {infozlatmaxru2Props.children}
                  </Infozlatmaxru>
                </div>
                <div className="flex-row-11">
                  <div className="overlap-group-5">
                    <img alt="" className="vector-2"
                      src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/vector-2@2x.svg"
                    />
                    <div className="rectangle-40 border-1px-white"></div>
                  </div>
                  <Infozlatmaxru className={infozlatmaxru3Props.className}>
                    {infozlatmaxru3Props.children}
                  </Infozlatmaxru>
                </div>
              </div>
              <Group95 text16={group95Props.text16} text17={group95Props.text17} />
              <Group96
                text18={group96Props.text18}
                spanText1={group96Props.spanText1}
                spanText2={group96Props.spanText2}
              />
              <div className="overlap-group2">
                <Group9432 text1={group9432Props.text1} text2={group9432Props.text2} text3={group9432Props.text3} />
                <div className="examplegmailcom montserrat-medium-white-16px-3">{exampleGmailCom}</div>
                <img alt="" className="rectangle-41"
                  src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/rectangle-41@2x.svg"
                />
                <img alt="" className="group-16"
                  src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/group-16@2x.svg"
                />
              </div>
            </div>
            <View
              w513H5131371296104Facebook8={viewProps.w513H5131371296104Facebook8}
              w513H5131371296104Facebook7={viewProps.w513H5131371296104Facebook7}
              telegram4={viewProps.telegram4}
              logoWhatsappPngTransparentBackgroun={viewProps.logoWhatsappPngTransparentBackgroun}
            />
            <img alt="" className="line-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/62bc1e7a1d7decf3ee18d7fe/releases/62bc20fb14c5c7c964fb025a/img/line-22-4@1x.svg"
            />
            <div className="flex-row-12 montserrat-medium-white-14px">
              <p className="x">{x437wwwzlatmaxru}</p>
              <div className="copyright">{copyright}</div>
            </div>
          </div>
        </div>

        {/* =================================== Footer end ================================= */}

      </div>
    </div >
  );
}

export default MultiView;
