import React from "react";
import Call from "@/components/Call";

export default function Page({ params }) {
    return (
        React.createElement("main", { className: "flex w-full flex-col" },
            React.createElement("p", { className: "absolute z-10 mt-2 ml-12 text-2xl font-bold text-gray-900" },
                params.channelName
            ),
            React.createElement(Call, { appId: process.env.PUBLIC_AGORA_APP_ID, channelName: params.channelName })
        )
    );
}
