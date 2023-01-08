import React from 'react';
import CardStats from '../Cards/CardStats';

const HeaderStats = () => {
    return (
        <>
            <div className="relative md:pt-32 pb-32 pt-12">
                <div className="px-4 md:px-10 mx-auto w-full">
                     <div class="flex flex-wrap">
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle="Total Paid Payouts"
                                statTitle="$0.00"
                                statTitleColor="text-blue-900"
                                statIconName="fa fa-chart-bar"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle="Total Unpaid Payouts"
                                statTitle="$185.88"
                                statTitleColor="text-blue-900"
                                statIconName="fa fa-chart-bar"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle="Total Ready Payouts"
                                statTitle="$185.88"
                                statTitleColor="text-emerald-500"
                                statIconName="fa fa-chart-bar"
                            />
                        </div>
                     </div>
                </div>
            </div>
        </>
    );
}

export default HeaderStats;
