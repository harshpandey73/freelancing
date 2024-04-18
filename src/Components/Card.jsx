import  image123 from '../assets/image123.jpg'
import  image21 from '../assets/image21.jpg'
import  image23 from '../assets/image23.jpg'

export default function Card(){
    return(
        <div className='flex flex-col items-center justify-center gap-24 mt-24'>
        <div className="flex justify-between w-[95%]">
        <div className='px-24'>
        <img src={image123} alt="image-1" className="w-[357px]"/>
        </div>
         <div className="flex flex-col w-[544px] text-[#20294C]">
            <span className="font-semibold  text-6xl py-5 border leading-60 tracking-[-1.92px]" style={{fontFamily: 'Source Code Pro, monospace' }}>Stop worrying about exams</span>
            <p className="py-5 font-regular text-2xl leading-9 text-left font-inter">
                ZuAI app is your new study buddy that hels you <span className="font-bold">prepare,practise,revise and learn smartly </span>Now you can
                mastering your subjects rather than judging study tasks
            </p>
        </div>
        </div>
        <div className="flex justify-between w-[95%]">
        <div className='px-24'>
        <img src={image21} alt="image-1" className="w-[357px]"/>
        </div>
         <div className="flex flex-col w-[544px] text-[#20294C]">
            <span className="font-semibold  text-6xl py-5 border leading-60 tracking-[-1.92px]" style={{fontFamily: 'Source Code Pro, monospace' }}>Stop bored- Studying</span>
            <p className="py-5 font-regular text-2xl leading-9 text-left font-inter">
            Textbooks are boring, you will sleep faster than learning concepts and clear doubts. With ZuAI, say hello to  <span className="font-bold border bg-[#20294C]">interactive learning experiences </span>
             that make you forget you're even studying. Who knew learning could be this fun (or that textbooks could be this jealous)
            </p>
        </div>
        </div>
        <div className="flex justify-between w-[95%]">
        <div className='px-24'>
        <img src={image23} alt="image-1" className="w-[357px]"/>
        </div>
         <div className="flex flex-col w-[544px] text-[#20294C]">
            <span className="font-semibold text-6xl py-5 border leading-60 tracking-[-1.92px]" style={{fontFamily: 'Source Code Pro, monospace' }}>Stop Feeling Lonely</span>
            <p className="py-5 font-regular text-2xl leading-9 text-left font-inter">
            Remember that angry time, when no one was Remember that angry time, when no one was parent, and no friends? ZuAI is 24X7 there for you, 
            it's a teacher that you always wanted and <span className='text-xs'> friend you never had.</span>
            </p>
        </div>
        </div>
        <div className="flex justify-between w-[95%]">
        <div className='px-24'>
        <img src={image23} alt="image-1" className="w-[357px]"/>
        </div>
         <div className="flex flex-col w-[544px] text-[#20294C]">
            <span className="font-semibold text-6xl py-[20px] border leading-60 tracking-[-1.92px]" style={{fontFamily: 'Source Code Pro, monospace' }}>Stop Wasting your Time</span>
            <p className="font-inter py-5 font-regular text-2xl leading-9 text-left">
             Don't wait for someone to solve your doubts or go through the same things again and again to <div className='border bg-[#20294C]'><span className="font-bold">get a follow-up doubt cleared. ZuAI solves any doubt for every difficulty you face on the spot </span></div>
             so that you don't waste time and keep going effectively.
            </p>
        </div>
        </div>
        </div>
    );
}

