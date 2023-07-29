import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store';
import CustomButton from '../components/CustomButton';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'


const Home = () => {
    const snap = useSnapshot(state)
    return (
        <AnimatePresence>
            ({snap.intro &&
                <motion.section className='w-fit xl:h-full flex xl:justify-between justify-start items-start flex-col xl:py-8 xl:px-36 sm:p-8 p-6 max-xl:gap-7 absolute z-10' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src='./light.png'
                            alt="logo"
                            className="w-16 h-16 object-contain"
                        />
                    </motion.header>

                    <motion.div className="flex-1 xl:justify-center justify-start heading flex flex-col gap-10" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="xl:text-[10rem] text-[6rem] xl:leading-[11rem] leading-[7rem] text-[#18191A]">
                                LET'S <br className="xl:block hidden" /> DO IT.
                            </h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className="flex flex-col gap-5"
                        >
                            <p className="max-w-md font-normal text-[#18191A] text-base">
                                Welcome to my unique app, where style meets personalization. Create your unique look with customizable apparel. Embrace fashion that celebrates individuality and elegance today!
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize Your Style"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            })
            <marquee behavior="" direction="right" className="absolute bottom-0 uppercase" > made by <strong>Suraj Pal</strong>  </marquee>
        </AnimatePresence>
    )
}

export default Home