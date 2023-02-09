import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { Cards } from '../components/Cards'
import { CustomError } from '../components/CustomError'
import { H } from '../components/H'
import { Loading } from '../components/Loading'
import { Modal } from '../components/Modal'
import { ShowItem } from '../components/ShowItem'
import { Sort } from '../components/Sort'
import { serverURL } from '../config'
import { useModal } from '../hooks/useModal'
import { IFilter, IItem } from '../models'


const itemSort: IFilter = {
    name: "Sort",
    selected: "rarity",
    values: [
        'rarity'
    ]
}

export function ItemsPage() {

    const [error, setError] = useState<string>('');
    const [status, setStatus] = useState('loading');
    const [items, setItems] = useState<IItem[]>([])
    const {modal, close, cardClickHandler, modalData} = useModal();

    // const onSort = (val: string)=> {
    //     setItems((prev)=> {
            
    //         return [...prev.sort((a, b)=>{
    //             const aprev:number = a[val as keyof typeof a] as number;
    //             const bprev:number = b[val as keyof typeof b] as number;
    //             return bprev - aprev;
    //         })]
    //     })
    // }

    async function fetchItems() {
        try {
            const response = await axios.get<IItem[]>(serverURL+ "items");
            if(response.data) {
                console.log(response.data);
                setItems(response.data);
                setStatus('loaded');
            }
            //onSort('rarity')
        } catch(error) {
            const e = error as AxiosError;
            console.log(e);
            setError(e.message);
            setStatus('error');
        }
    }


    useEffect(()=>{
        fetchItems();
        // onSort("rarity");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <div className='w-full'>
            <H type="1">Предметы</H>

            {/* <div className='bg-main-2  w-full px-6 pt-2 pb-4'>
                <Sort onSort={onSort} options={itemSort}/>
            </div> */}

            
            {status === 'loading' && <div className='w-full h-[50vh] flex items-center justify-center '><Loading/></div>}
            {status === 'error' && <CustomError msg={error}/>}
            {status === 'loaded' && <Cards cards={items} onOpen={cardClickHandler}/>}

            { modal && <Modal onClose={close}>
                <ShowItem item={modalData}/>
            </Modal>}
        </div>
    )
}