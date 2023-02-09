import React, { useState } from 'react'
import { serverURL } from '../../config';
import { ICharacter, selectCharClass, selectFaction, selectRarity } from '../../models';
import { validateNumber, validateTime } from '../../utils/inputValidators';
import { Input } from '../Input'
import { List } from '../List';
import { Select } from '../Select';

interface GO {
    [key:string]: string
} 




interface ICharData {
    [key: string]: string|number;
    char_id: string,
    char_name: string,
    char_class: string,
    char_image: string,
    char_faction: string,
    char_link: string,
    char_rarity: string,
    stats_construction: number,
    stats_lvl: number,
    stats_hp: number,
    stats_fp: number,
    stats_eva: number,
    stats_rld: number,
    stats_trp: number,
    stats_avi: number,
    stats_aa: number,
    stats_asw: number,
}

const char_data: ICharData = {
    char_id: '',
    char_name: '',
    char_class: selectCharClass[0].value,
    char_image: '',
    char_faction: selectFaction[0].value,
    char_link: '',
    char_rarity: selectRarity[0].value,
    stats_construction: 0,
    stats_lvl: 0,
    stats_hp: 0,
    stats_fp: 0,
    stats_eva: 0,
    stats_rld: 0,
    stats_trp: 0,
    stats_avi: 0,
    stats_aa: 0,
    stats_asw: 0,
}



const convertTime = (val: string) => {
    const time: number[] = val.split('-').map(i=>Number(i));
    return time[0]*60 + time[1]
}



const validateState = (s: ICharData):boolean => {
    let result:boolean = true;

    for (let field in s) {
        if (field.includes('stats')) {
            if(field === "stats_construction")  {
                console.log('failed on', field, s[field]);
                result = validateTime(String(s[field]))
            } else
            if(!validateNumber(String(s[field]))) {
                console.log('failed on', field, s[field]);
                result = false
            } 
        } 

        
    }

    return result
}

function fetchPOST<T>(url: string, data: T):Promise<T> {
    return new Promise((resolve, reject)=>{
        fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            resolve(res.json())
        })
        .catch(e=>{
            reject(e)
        })
    })

}

export function CreateCharacterForm({onCreate}: {onCreate?:(char:ICharacter)=>void}) {
    const [characterData, setCharacterData] = useState(char_data)
    const [characterCreated, setCharacterCreated] = useState(false)
    const [createdData, setCreatedData] = useState<ICharacter & {_id: string}>();
    const [skills, setSkills] = useState<GO[]>([]);


    function sendAdditionalData() {
        if(!skills) return
        if(!createdData) return
        const charInfo = {
            id: createdData._id,
            skills: skills,
            equipment: "",
            description: ""
        }
        console.log('мы отправили:');
        console.log(charInfo);
        fetchPOST(serverURL+"charinfo", charInfo)
        .then(res=>{
            console.log("с сервера пришло:");
            console.log(res);
        })
    }

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault()

        const valid = validateState(characterData)
        console.log(valid?"all fields are valid":"some fields ire invalid");


        if(!valid) return

        const c = characterData;
        
        fetch(
            'http://localhost:5000/characters'
            , {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id: c.char_id,
                name: c.char_name,
                class: c.char_class,
                image: c.char_image,
                faction: c.char_faction,
                rarity: Number(c.char_rarity),
                link: c.char_link,
                stats: {
                    lvl: Number(c.stats_lvl),
                    hp: Number(c.stats_hp),
                    fp: Number(c.stats_fp),
                    construction: convertTime(String((c.stats_construction))),
                    aa: Number(c.stats_aa),
                    avi: Number(c.stats_avi),
                    rld: Number(c.stats_rld),
                    eva: Number(c.stats_eva),
                    trp: Number(c.stats_trp),
                    asw: Number(c.stats_asw),
                }
              })
            })
            .then(d=>d.json())
            .then(r => {
                
                if(!r) {
                    console.log("ты попробовал создать перса, но у тебя не получилось")
                }

                setCharacterCreated(true);
                setCreatedData(r);
                console.log("персонаж создан успешно, открыты дальнейшие действия")
            })
    }

    const onUpdateItems = (fromList?:string, items?: GO[]) => {
        if(!items && !fromList) return
        if(items === undefined) return
        setSkills([...items])
        console.log(fromList);
        console.log(items);

    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement| HTMLInputElement | HTMLTextAreaElement>) => {
        setCharacterData((prev) => {
            if(!e) return prev

            const key = e.target.id;
            const value = e.target.value;
            prev[key] = value
            
            return {...prev}
        })

        
    }

    const selectHandler = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {

        setCharacterData((prev) => {
            if(!e) return prev

            const key = e.target.id;
            const value = e.target.value;
            prev[key] = value
            
            return {...prev}
        })
    }

    return (
        <div>
        <form className='w-full flex flex-col gap-8' onSubmit={submitHandler}>

            <div className='flex flex-row justify-between items-start'>
                <fieldset className='w-[400px] border'>
                    <Input inputHandler={changeHandler} title="Имя" id="char_name" name="char_name" placeholder='Введите имя персонажа...'/>
                    <Input inputHandler={changeHandler} title="ID" id="char_id" name="char_id" placeholder='ID'/>
                    <Select onChange={selectHandler} options={selectCharClass} label="Класс" id="char_class" name="char_class"/>
                    <Select onChange={selectHandler} options={selectFaction} id="char_faction" name="char_faction" label='Укажите фракцию'/>
                    <Select onChange={selectHandler} options={selectRarity} label="Редкость" id="char_rarity" name="char_rarity" />
                    <Input inputHandler={changeHandler} title="Ссылка на вики" id="char_link" name="char_link" placeholder='Вставьте ссылку на вики...'/>
                    <Input inputHandler={changeHandler} title="Ссылка на картинку" id="char_image" name="char_image" placeholder='Вставьте ссылку на картинку...'/>

                </fieldset>

                <fieldset className='w-[300px]'>

                    <Input inputHandler={changeHandler} validator={validateTime} title="Время конструкции" id="stats_construction" name="stats_construction" placeholder='hh-mm'/>
                    <Input inputHandler={changeHandler} validator={validateNumber} title="Максимальный уровень" id="stats_lvl" name="stats_lvl" placeholder='Введите уровень' />
                    <Input inputHandler={changeHandler} validator={validateNumber} title="Показатель hp" id="stats_hp" name="stats_hp" placeholder='0' />
                    <Input inputHandler={changeHandler} validator={validateNumber} title="Показатель eva" id="stats_eva" name="stats_eva" placeholder='0' />
                    <Input inputHandler={changeHandler} validator={validateNumber} title="Показатель rld" id="stats_rld" name="stats_eld" placeholder='0' />
                    <Input inputHandler={changeHandler} validator={validateNumber} title="Показатель fp" id="stats_fp" name="stats_fp" placeholder='0' />
                    <Input inputHandler={changeHandler} validator={validateNumber} title="Показатель trp" id="stats_trp" name="stats_trp" placeholder='0' />
                    <Input inputHandler={changeHandler} validator={validateNumber} title="Показатель avi" id="stats_avi" name="stats_avi" placeholder='0' />
                    <Input inputHandler={changeHandler} validator={validateNumber} title="Показатель aa" id="stats_aa" name="stats_aa" placeholder='0' />
                    <Input inputHandler={changeHandler} validator={validateNumber} title="Показатель asw" id="stats_asw" name="stats_asw" placeholder='0' />
                </fieldset>
            </div>

            <div>
                <button disabled={characterCreated} className={`m-auto border-2 block border-main-1 px-4 py-2 ${characterCreated? "bg-black/50" : ""}`} type='submit' >Добавить</button>
            </div>
        </form>

        {
            characterCreated &&
            <div>
                {`персонаж ${createdData?.name} создан`}
                <img src={createdData?.image} alt="Чел готовый" />
            </div>
        }
        {characterCreated && 
        <div>
            <div className='grid grid-cols-2 gap-x-4 mx-12 mt-4 mb-24'>

                <div className='bg-pink-300 p-2'>
                    <h4 className='w-full text-center border-b text-lg border-white'>Скиллы</h4>

                    
                    <List listName="skills" onUpdateItems={onUpdateItems}/>

                </div>

                <div className='bg-pink-500 p-2'>
                    <h4 className='w-full text-center border-b text-lg border-white'>Снаряжение</h4>

                </div>
            </div>
            <button className='w-[100px] h-[40px] text-center p-auto border-2 border-main-1' onClick={()=>sendAdditionalData()}>Добавить</button>

        </div>}
        </div>
    )
}