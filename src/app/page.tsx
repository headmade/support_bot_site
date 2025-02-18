"use client";

import { Button, Col, Row } from 'antd';
import Image from 'next/image';

import Header from '@/components/Header';

import styles from './page.module.scss'

import phone from '@/assets/mobile.png'
import Advantage from '@/components/Advantage';
import HowTo from '@/components/HowTo';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className={styles.container}>
      <Row style={{ height: '100%' }} justify={'center'}>
        <Col xs={24}>
          <Header />
        </Col>
      </Row>
      <main className={styles.main}>
        <div className={styles.hero}>
          <Row justify={'center'}>
            <Col xs={22} lg={17}>
              <div className={styles.hero_content}>

                <div className={styles.hero_wrapp}>
                  <div className={styles.hero_header_wrapper}>
                    <h2 className={styles.hero_header}>Support Bot</h2>
                    <p className={styles.hero_subheader}>by <a target='_blank' href="https://headmade.pro/">HeadMade</a></p>
                  </div>
                  <p className={styles.hero_description}>Удобный способ поддержки клиентов</p>
                  <Button className={styles.contact_us}>Связаться с нами</Button>
                </div>
                <Image className={styles.hero_cover} src={phone} alt='phone' />
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.why_us}>
          <Row justify={'center'}>
            <Col xs={23} lg={17}>
              <h1 className={styles.why_us_header}>Почему это удобно?</h1>
              <div className={styles.advantages}>
                <Advantage title='Без установки новых приложений' description='Всё работает прямо в Telegram' />
                <Advantage title='Лёгкий доступ' description='Просто написать боту, без поиска контактов поддержки' />
                <Advantage title='Быстрая связь' description='Поддежкуа получает сообщение мгновенно и может сразу ответить.' />
                <Advantage title='Приватность' description='Вопросы остаются в личных диалогах, не загромождая общий чат' />
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.how_it_works}>
          <Row justify={'center'}>
            <Col style={{ display: "flex", flexDirection: 'column', justifyContent: 'center' }} xs={22} lg={17}>
              <h1 className={styles.how_it_works_header}>Как это работает?</h1>
              <div className={styles.steps}>
                <HowTo step={1} title='Вы создаёте бота' description='Буквально в пару кликов — без сложных настроек и кода.' />
                <HowTo step={2} title='Мы всё настраиваем' description='Подключаем бота к вашему чату поддержки, чтобы он работал идеально.' />
                <HowTo step={3} title='Сообщения автоматически пересылаются' description='Пользователь пишет в поддержку → операторы видят запрос в отдельном чате → отвечают прямо от имени бота.' />
              </div>
              <p className={styles.telegram}>💬 Всё в Telegram, без лишних приложений и сложностей! 🔥</p>
              <Button className={styles.contact_us}>Связаться с нами</Button>
            </Col>

          </Row>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
