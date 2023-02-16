import { H } from "shared/UI/text/H";
import './style.css'

interface ShortInfoShortInfoArticleProps {
    children: React.ReactNode;
    isDecorativeTriangles?: boolean;
    addedContent?: React.ReactNode;
    title: string;
}

export function ShortInfoArticle(props: ShortInfoShortInfoArticleProps) {
    return(
        <section className={`w-full relative mt-52 text-sm md:text-2xl ${props.isDecorativeTriangles && 'bg-main-2 text-white'}`}>
        {props.isDecorativeTriangles && 
            <svg className='decorative_triangle-top' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 100 100' preserveAspectRatio='none'>
                <polygon points='0 0, 0 100, 110 100' fill={"#18234D"}/>
            </svg>
        }

        <H type="3">{props.title}</H>
        <p className='w-[70%] m-auto'>
            {props.children}
        </p>

        {props.addedContent && 
        <div className="flex justify-center items-center w-full">
            {props.addedContent}
        </div>
        }

        {props.isDecorativeTriangles && 
            <svg className='decorative_triangle-bottom' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 100 100' preserveAspectRatio='none'>
                <polygon points='0 0, 0 100, 110 100' fill={"#18234D"}/>
            </svg>
        }

        </section>
    )
}