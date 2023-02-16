import React, { useState } from 'react'
import closeImage from 'shared/images/x.svg'
import arrowImage from 'shared/images/arrow.svg'
import { Input } from './Input';
import { ListElement } from './ListElement';


interface GO {
    [key:string]: string
} 

interface ListProps {
    items?: GO[];
    listName: string
    onUpdateItems: (fromList?: string, data?: GO[]) => void;
}

enum AddingState {Search, Create, Choice}

export function List({items, onUpdateItems, listName}: ListProps) {

    const [elements, setElements] = useState(items || [])
    const [addedState, setAddedState] = useState(AddingState.Choice)
    const [isSaved, setIsSaved] = useState(true)

    const onSave = () => {
        onUpdateItems(listName, [...elements])
        setIsSaved(true);
    }

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    }

    let temporaryData:GO = {
        title: "",
        text: "",
        image: "",
        type: ""
    }

    const createHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        if(!e) return
        const id: string = e.target.id;
        if(e.target.id.includes("skill")) {
            const field = id.split("_");
            if(temporaryData.hasOwnProperty(field[1])) {
                temporaryData[field[1]] = e.target.value;
            }
        }
        
    }


    return (
        <div>
                {elements.map(el =>
        
                <div key={el.title} className='flex justify-between items-center'>
                    <ListElement title={el.title} text={el.text} type={el.type} image={el.image}/>
                    <div className='flex flex-row items-center gap-2'>
                        <img className="w-6 h-6 cursor-pointer" src={arrowImage} alt="Вверх" 
                        onClick={
                            ()=>{
                                setElements(prev => {
    
                                    for(let i=0; i< prev.length; i++) {
                                        if(prev[i].title === el.title && prev[i].text === el.text) {
                                            if(i===prev.length-1) return prev;
                                            [prev[i+1], prev[i]] = [prev[i], prev[i+1]]
                                            setIsSaved(false)
                                            return [...prev]
                                        }
                                    }
                                    return prev
                                })
                            }
                        }
                        />
                        
                        <img className="w-6 h-6 cursor-pointer rotate-180" src={arrowImage} alt="Вниз" 
                        onClick={()=>{
                            setElements(prev => {

                                for(let i=0; i< prev.length; i++) {
                                    if(prev[i].title === el.title && prev[i].text === el.text) {
                                        if(i===0) return prev;
                                        [prev[i-1], prev[i]] = [prev[i], prev[i-1]]
                                        setIsSaved(false)
                                        return [...prev]
                                    }
                                }
                                return prev
                            })
                        }}
                        />
                        
                        <img className="w-6 h-6 cursor-pointer" 
                        src={closeImage} 
                        alt="Удалить" 
                        onClick={()=>{
                            setElements(prev=>{
                                setIsSaved(false)
                                return prev.filter(item=>item.title !== el.title)
                            })
                        }}
                        />

                    </div>
                </div>)}



                {
                        addedState === AddingState.Choice ?
                        <div className='grid grid-cols-2 grid-rows-2 mt-3 gap-2'>
                            <button className='px-6 py-2 bg-main-light ' onClick={()=>setAddedState(AddingState.Search)}>Найти</button>
                            <button className='px-6 py-2 bg-main-light ' onClick={()=>setAddedState(AddingState.Create)}>Создать</button>
                            {!isSaved &&
                            <button className='px-6 py-2 bg-main-light  col-start-1 col-end-3' onClick={()=>onSave()}>Сохранить</button>
                            }
                            </div> :
                        <div className='grid grid-cols-1 mt-3'>
                         <button className='px-6 py-2 bg-main-light mx-2' onClick={()=>setAddedState(AddingState.Choice)}>Назад</button>
                        </div>
                        }

                        { addedState === AddingState.Search &&
                            <Input title='Поиск скила' inputHandler={searchHandler}id="skill_search" name='skill search' placeholder='Введите название'/>
                        }


                {addedState === AddingState.Create &&
                <div>
                    <Input title='Название скила' inputHandler={createHandler}id="skill_title" name='skill title' placeholder='Введите название'/>
                    <Input title='Ссылка на картинку' inputHandler={createHandler}id="skill_image" name='skill image' placeholder='Ссылка на картинку'/>
                    <label htmlFor="description" className="text-black/70">Текст</label>
                    
                    <textarea onChange={createHandler} className="w-full min-h-[200px] max-h-[200px] border-2 border-main-1" name="skill_text" id="skill_text"></textarea>
                    <button className="px-2 py-2 bg-main-light"
                    onClick={()=>{
                        setElements(prev => { 
                            for(let i of prev) {
                                if(i.title === temporaryData.title) return prev;
                            }
                            return [...prev, {...temporaryData}]
                        })

                        temporaryData = {title:"", text:"", image:"", type:""}
                        setAddedState(AddingState.Choice)
                        setIsSaved(false)
                        }
                    }
                    >Добавить</button>
                </div>
                }

                {isSaved ? <p className='text-center text-green-600'>Данные сохранены</p> : <p className='text-center text-red-500'>Данные НЕ сохранены</p>}
        </div>
    )
}