import React from "react";
import Link from "next/link";
import HomeNav from "../components/HomeNav";
import SubsectionNav from "../components/SubsectionNav";
import Slider from "../components/Slider";
import ExchangeRates from "../components/ExchangeRates";
import ExchangeCalculator from "../components/ExchangeCalculator";
import HomeOtherLinks from "../components/HomeOtherLinks";
import Award from "../components/Award";

import { currentDate, getRandomFloat } from "../utils/usefulFunctions";

const Home = () => {

  let businessLinks = [
    { name: "кредит", link: "http://www.google.ru/search?q=кредит" },
    { name: "интернет-банк", link: "http://www.google.ru/search?q=интернет" },
    { name: "зарплатный проект", link: "http://www.google.ru/search?q=зарплатный" },
    { name: "корпоративные карты", link: "http://www.google.ru/search?q=корпоративные" },
    { name: "комплексное обслуживание", link: "http://www.google.ru/search?q=комплексное" },
    { name: "международные операции", link: "http://www.google.ru/search?q=международные" },
    { name: "банковская гарантия", link: "http://www.google.ru/search?q=банковская" },
    { name: "расчётный счет", link: "http://www.google.ru/search?q=расчётный" },
    { name: "ценные бумаги", link: "http://www.google.ru/search?q=ценные" },
    { name: "рко", link: "http://www.google.ru/search?q=рко" },
  ];  

  let personLinks = [
    { name: "вклад", link: "http://www.google.ru/search?q=вклад" },
    { name: "кредит", link: "http://www.google.ru/search?q=кредит" },
    { name: "переводы", link: "http://www.google.ru/search?q=переводы" },
    { name: "дебетовая карта", link: "http://www.google.ru/search?q=дебетовая" },
    { name: "мобильный банк", link: "http://www.google.ru/search?q=мобильный" },
    { name: "международные операции", link: "http://www.google.ru/search?q=международные" },
    { name: "ценные бумаги", link: "http://www.google.ru/search?q=ценные" },
    { name: "открыть счёт", link: "http://www.google.ru/search?q=открыть" },
    { name: "обмен валют", link: "http://www.google.ru/search?q=обмен" },
  ];  

  const sliderBusLinks = [
    {
      img: "/homepage/bus_loan.png",
      text: "кредит до 20 млн ₽ для малого и среднего предпринимательства с быстрым сроком рассмотрения",
      highlight: "+3%",
      highlightDescription: "к ставке ЦБ",
      link: "/",
      scale: null,
    },
    {
      img: "/homepage/bus_int_bank.png",
      text: "интернет-банк с доступом к вашим средствам из любой точки для оформления платежей с контрагентами",
      highlight: "от 0₽",
      highlightDescription: "за подключение к ДБО",
      link: "/",
      scale: null,

    },
    {
      img: "/homepage/bus_acc.png",
      text: "откройте счёт в удобном для вас офисе с низкими комиссиями и личным менеджером",
      highlight: "от 0₽",
      highlightDescription: "индивидуальные тарифы",
      link: "/",
      scale: null,

    },
  ];

  const sliderPerLinks = [
    {
      img: "/homepage/per_savings.png",
      text: "с пополнением и выплатой процентов в конце срока",
      highlight: "6%",
      highlightDescription: "вклад «Сберегательный»",
      link: "/",
      scale: 1,

    },
    {
      img: "/homepage/per_card.jpg",
      text: "оплачивайте покупки в магазинах, подписки в интернете и поездки в общественном транспорте",
      highlight: "0₽",
      highlightDescription: "карты «Мир» и «Mastercard»",
      link: "/",
      scale: null,

    },
    {
      img: "/homepage/Hard_Hat_Mockup_1.png",
      text: "кредит на приобретение недвижимости до 5 млн ₽ сроком до 10 лет",
      highlight: "от 11%",
      highlightDescription: "на ипотеку",
      link: "/",
      scale: null,

    },
  ];

  const rates = [
                ["€", "евро", getRandomFloat(70, 72), getRandomFloat(66, 68), getRandomFloat(69,70)], 
                ["¥", "юань", getRandomFloat(11, 12), getRandomFloat(9, 10), getRandomFloat(10, 11)], 
                ["$", "доллар", getRandomFloat(65, 67), getRandomFloat(60, 62), getRandomFloat(62, 65)]   
                ];


  return (
    <main className="lg:mt-10 md:mt-8 mt-5">
      
      <div className="widthUniversal">
        <HomeNav/>
        <SubsectionNav section={"бизнесу"} allLinks={businessLinks} breakpoint={5}/>
      </div>

      <Slider links={sliderBusLinks} timer={6500}/>

      <div className="widthUniversal mt-20">
        <SubsectionNav section={"частному лицу"} allLinks={personLinks} breakpoint={6}/>
      </div>

      <Slider links={sliderPerLinks} timer={8500}/>

      <div className="widthUniversal mt-20 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 mx-4 sm:mx-0">
          <ExchangeRates rates={rates}/>
        </div>
        <div className="w-full md:w-1/3 mt-5">
          <ExchangeCalculator rates={rates} date={currentDate()}/>
        </div>
      </div>

      <div className="widthUniversal mt-14 sm:mt-20">
        <HomeOtherLinks/>
      </div>

      
      <div className="widthUniversal mt-14 sm:mt-10">
        <Award/>
      </div>

    </main>
  );
};

export default Home;
