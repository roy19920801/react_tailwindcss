const CardStats = ({
  statSubtitle,
  statTitle,
  statTitleColor,
  statIconName
}) => {
    return(
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="pb-4 relative w-full max-w-full flex-grow flex-1">
                            <h5 className="text-blue-900 font-bold text-xs">
                                <i className={statIconName}></i>
                                &nbsp; {statSubtitle}
                            </h5>
                            <div className="flex flex-wrap justify-between items-center">
                                <div>
                                    <span className={`font-semibold font-bold text-2xl ${statTitleColor} `}>
                                        {statTitle}
                                    </span>
                                </div>    
                                <div>
                                    {
                                        statSubtitle == 'Total Ready Payouts' && 
                                        <button className="bg-blue-600 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            Pay all
                                        </button>
                                    }
                                </div>                            
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardStats;