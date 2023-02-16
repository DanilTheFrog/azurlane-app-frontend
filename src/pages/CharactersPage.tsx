import { Modal } from '../components/Modal';
import { ShowCharacter } from '../components/ShowCharacter';
import { Sort } from '../components/Sort';
import { Cards } from '../components/Cards';
import { useModal } from '../hooks/useModal';
import { H } from '../shared/UI/text/H';
import { Loading } from '../shared/UI/Loading';
import { useCharacters } from '../hooks/useCharacters';
import { CustomError } from '../components/CustomError';
import { IFilter } from '../models';



const charSort: IFilter = {
    name: "Sort",
    selected: "rarity",
    values: [
        'rarity', 'lvl', 'construction', 'hp', 'fp', 'trp', 'avi', 'aa', 'asw'
    ]
}



export function CharactersPage() {
    const {close, modal, modalData, cardClickHandler} = useModal();
    const {characters, setCharacters, status, error} = useCharacters();
    
 




    const onSort = (val: string)=> {
        setCharacters((prev)=> {
            
            return [...prev.sort((a, b)=>{
                const aprev = a.stats[val as keyof typeof a.stats];
                const bprev = b.stats[val as keyof typeof b.stats];
                return bprev - aprev;
            })]
        })
    }



    return (
        <div className='w-full'>

            <H type={2}>Персонажи</H>
            <div className='bg-main-2  w-full px-6 pt-2 pb-4'>
                <Sort onSort={onSort} options={charSort}/>
            </div>

            {status==="loading" && 
            <div className='w-full flex items-center justify-center h-[50vh]'>
            <Loading/>
            </div>}
            {status==="loaded" && <Cards onOpen={cardClickHandler} cards={characters}/>}
            {status==="error" && <CustomError msg={error}/>}

            


            
            { modal && <Modal onClose={()=>close()}>
                <ShowCharacter character={modalData}/>
            </Modal>}
        </div>
    )
}