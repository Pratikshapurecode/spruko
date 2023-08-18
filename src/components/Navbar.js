import gstyle from './globle.module.css';
import './sidebar.css'

const Navbar = ()=>{
    return(<>
        <div className={gstyle.nb_container}>
            <div className={gstyle.nb_lt_ct}>
                <div className={gstyle.nb_img_box}>
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/108px-Hamburger_icon.svg.png" />
                </div>
            </div>

            <div className={gstyle.nb_md_ct}>
                <div className={gstyle.nb_img_box}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAVqK6PrEG_bnWrMHiy4DLjCoKW_vXtfIRw&usqp=CAU' />
                </div>
                <input style={{width: '50%', height: '10px', borderRadius: '20px', padding: '10px'}} type='text' placeHolder='Start typing to search..' />
            </div>
            
            <div className={gstyle.nb_rt_ct}>
                <div  className={gstyle.nb_rt_ltsub_ct}>
                    <div className={gstyle.nb_img_box}>
                        <img src="https://static.vecteezy.com/system/resources/previews/016/328/983/non_2x/united-kingdom-flat-rounded-flag-icon-with-transparent-background-free-png.png" />
                    </div>
                </div>
                
                <div className={gstyle.nb_rt_rtsub_ct}>
                    <div className={gstyle.nb_img_box}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOhPimlRhDAWxw6geqc25kwk2YmIzLzY7PFOUsyW-jxQVcrjUuCBSx2egKdlM4aWk-DU&usqp=CAU' />
                    </div>
                    <div className={gstyle.nb_img_box}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFS5ltUp2nKWrDX8ZRFwFiL0KljOheKdJGjULtOkKM6zmizx9-o0QCjQEmpLTtsI64FY&usqp=CAU' />
                    </div>
                    <div className={gstyle.nb_rt_ltsub_ct}>
                        <div className={gstyle.nb_pf_img_box}>
                            <img src='https://images.statusfacebook.com/profile_pictures/fb_beautiful_girl/cute_fb_beautiful_girl_33.jpg'/>
                        </div>
                        <h4 style={{marginLeft: '3px'}}>Harry Jones</h4>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Navbar;