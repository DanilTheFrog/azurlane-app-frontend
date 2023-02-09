import React from 'react'
import { ContentContainer } from '../components/ContentContainer'
import { H } from '../components/H'
import { P } from '../components/P'

import welcomeImg from '../images/welcomeImg.jpg';

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
                    <img src={welcomeImg} className="shadow-main-1 shadow-2xl" alt="welcoming " />
                </div>
            </section>






            <ContentContainer>

                <H type="3">ПЕРСОНАЖИ</H>
                <P margin={true}>В этом разделе содержится актуальная информация по персонажам, скилам, их лору и т.д. Вы можете навести мышку на иконку и появится мини-инфа по ним.</P>
                <P margin={true}>
                В разделе могут вносится дополнения и правки, информация обновляется до 2-х недель.
                </P>
            </ContentContainer>

            <section className='container'>
            <H type="3">ПЕРСОНАЖИ</H>
                <P margin={true}>В этом разделе содержится актуальная информация по персонажам, скилам, их лору и т.д. Вы можете навести мышку на иконку и появится мини-инфа по ним.</P>
                <P margin={true}>
                В разделе могут вносится дополнения и правки, информация обновляется до 2-х недель.
                </P>
            </section>
        </main>
    )
}