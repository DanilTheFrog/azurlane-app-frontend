import React from 'react'
import { H } from 'shared/UI/text/H'
import { P } from 'shared/UI/text/P'
import './style.css'

import welcomeImg from 'shared/images/welcomeImg.jpg';
import { ShortInfoArticle } from 'entities/ShortInfoArticle'
import { PromoButton } from 'shared/UI/buttons/promoButton';



export function HomePage() {
    return (
        <main className='bg-main-light top-0 left-0 right-0 bottom-0'>



            <section className='bg-main-pale-dark pb-4 w-full gap-2 flex flex-col md:flex-row justify-center items-center lg:py-16'>
                <div className='text-white px-4 w-full md:w-1/3'>
                    <H type="2" additionalClasses='!text-left !mt-0'>Добро пожаловать!</H>
                    <P margin={false}>Это фан страница по игре Azur Lane для СНГ-комьюнити. На ней есть вся актуальная информация по персонажам, шмоткам, гайдам, новостям и т.д.</P>

                    <P margin={true}>Приятного использования!</P>
                </div>
                <div className='w-1/2 md:w-2/5'>
                    <img src={welcomeImg} className="shadow-main-1 shadow-2xl" alt="welcoming" />
                </div>
            </section>

            <ShortInfoArticle title='ПЕРСОНАЖИ'
            addedContent={<PromoButton type='link' to="/characters" text="ПЕРЕЙТИ К ПЕРСОНАЖАМ"/>}>
                <>
                    В этом разделе содержится актуальная информация по персонажам, скилам, их лору и т.д. Вы можете навести мышку на иконку и появится мини-инфа по ним.
                    <br/>
                    <br/>
                    В разделе могут вносится дополнения и правки, информация обновляется до 2-х недель.
                </>
            </ShortInfoArticle>


            <ShortInfoArticle isDecorativeTriangles={true} title='ЛОР'
            addedContent={<PromoButton type='link' to="/lore" text="ПЕРЕЙТИ К ЛОРУ"/>}
            >
                    В этом разделе содержится вся акутальная информация по лору. Раздел связан с разделом “персонажи”
                    <br/><br/>
                    Вся актуальная информация обновляется до 2-х недель.
            </ShortInfoArticle>


            <ShortInfoArticle title='НОВОСТИ'
            addedContent={<PromoButton type='link' text="ПЕРЕЙТИ К НОВОСТЯМ" to="/news"/>}>
                    В этом разделе содержится информация по свежим новостям, обновлениям, сплетням (нет) и любым актуальным изменениям.
                    <br/><br/>
                    Новости обновляются в течении нескольких дней.
            </ShortInfoArticle>

        </main>
    )
}