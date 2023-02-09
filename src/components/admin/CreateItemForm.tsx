
import React, {useState} from 'react'
import { selectClass, selectFaction, selectRarity } from '../../models';
import { normalizeObject } from '../../utils/inputValidators';
import { Input } from '../Input';
import { Select } from '../Select';

interface GO {
    [key: string]: any
}


const iniItem: GO = {

    name: "",
    id: "",
    link: "",
    image: "",
    faction : selectFaction[0].value,
    rarity: selectRarity[0].value,
    class: selectClass[0].value,
    stats_fp: 0,
    stats_eva: 0,
    stats_trp: 0,
    stats_hp: 0,
    stats_oxy: 0,
    stats_hit: 0,
    stats_avi: 0,
    stats_aa: 0,
    stats_rld: 0,
    stats_asw: 0,
    stats_speed: 0,
    stats_lck: 0,
}


export function CreateItemForm() {

    const [item, setItem] = useState(iniItem);

    async function createItem(data: GO) {
        await fetch("http://localhost:5000/items", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data)
        },
         )
        .then(res => {
            return res;
        })
    }

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault()
        console.log(normalizeObject(item, "_", ["rarity", "stats"]));
        const createdItem = await createItem(normalizeObject(item, "_", ["rarity", "stats"]))
        console.log(createdItem);
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const id  = e.target.id;
        const val = e.target.value;
        if(item.hasOwnProperty(id)) {
            setItem(prev => {
                prev[id] = val;
                return {...prev}
            })
        }
    }

    return (
        <form className='w-full flex flex-col gap-3' onSubmit={submitHandler}>

            <div className='grid grid-cols-3 gap-8'>
                <fieldset className='border'>
                    <Input inputHandler={changeHandler} title="Название" id="name" name="name" placeholder='Введите название...'/>
                    <Input inputHandler={changeHandler} title="ID" id="id" name="id" placeholder='ID'/>
                    <Input inputHandler={changeHandler} title="Ссылка на вики" id="link" name="link" placeholder='Вставьте ссылку на вики...'/>
                    <Input inputHandler={changeHandler} title="Ссылка на изображение" id="image" name="image" placeholder='Вставьте ссылку на вики...'/>
                    <Select onChange={changeHandler} label="Редкость" options={selectRarity} name='rarity' id='rarity'/>
                    <Select onChange={changeHandler} label="Тип предмета" options={selectClass} name='class' id='class'/>
                    <Select onChange={changeHandler} label="Фракция" options={selectFaction} name='faction' id='faction'/>
                </fieldset>

                <fieldset className='border'>
                    <Input inputHandler={changeHandler} title="fp" id="stats_fp" name="stats_fp" placeholder='0'/>
                    <Input inputHandler={changeHandler} title="eva" id="stats_eva" name="stats_eva" placeholder='0'/>
                    <Input inputHandler={changeHandler} title="trp" id="stats_trp" name="stats_trp" placeholder='0'/>
                    <Input inputHandler={changeHandler} title="hp" id="stats_hp" name="stats_hp" placeholder='0'/>
                    <Input inputHandler={changeHandler} title="oxy" id="stats_oxy" name="stats_oxy" placeholder='0'/>
                    <Input inputHandler={changeHandler} title="hit" id="stats_hit" name="stats_hit" placeholder='0'/>
                </fieldset>

                <fieldset className='border'>
                <Input inputHandler={changeHandler} title="avi" id="stats_avi" name="stats_avi" placeholder='0'/>
                    <Input inputHandler={changeHandler} title="aa" id="stats_aa" name="stats_aa" placeholder='0'/>
                    <Input inputHandler={changeHandler} title="rld" id="stats_rld" name="stats_rld" placeholder='0'/>
                    <Input inputHandler={changeHandler} title="asw" id="stats_asw" name="stats_asw" placeholder='0'/>
                    <Input inputHandler={changeHandler} title="speed" id="stats_speed" name="stats_speed" placeholder='0'/>
                    <Input inputHandler={changeHandler} title="lck" id="stats_lck" name="stats_lck" placeholder='0'/>
                </fieldset>

            </div>

            <button>Добавить</button>
        </form>

    )
}