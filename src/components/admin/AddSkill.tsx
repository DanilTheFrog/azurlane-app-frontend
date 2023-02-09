import React, { useState } from 'react'
import { Input } from '../Input'

interface AddSkllProps {
    changeHandler: (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void;
    submitHandler: (e: React.MouseEvent<HTMLButtonElement>, data:{[key: string]: string}) => void;
}

interface ISkill {
    [key: string]: string;
    title: string;
    type: string;
    image:string;
    text: string;
} 

const iniSkill: ISkill = {
    title: "",
    text: "",
    image: "",
    type: "",
}

export function AddSkll({changeHandler, submitHandler}: AddSkllProps) {
    
    const [temporarySkill, setTemporarySkill] = useState<ISkill>({...iniSkill})

    const submit = (e:React.MouseEvent<HTMLButtonElement>) => {
        submitHandler(e, temporarySkill)
        setTemporarySkill({...iniSkill});
    }

    return (
        <div>
        <Input title='Название скила' inputHandler={changeHandler}id="skill_title" name='skill title' placeholder='Введите название'/>
        <Input title='Ссылка на картинку' inputHandler={changeHandler}id="skill_image" name='skill image' placeholder='Ссылка на картинку'/>
        <label htmlFor="description" className="text-black/70">Текст</label>
        <textarea onChange={changeHandler} className="w-full min-h-[200px] max-h-[200px] border-2 border-main-1" name="skill_text" id="skill_text"></textarea>
        <button className="px-2 py-2 bg-main-light"
        onClick={submit}
        >Добавить</button>
    </div>
    )
}