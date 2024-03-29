"use client";
import React from "react";

import AgoraRTC, {
  AgoraRTCProvider,
  LocalVideoTrack,
  RemoteUser,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRTCClient,
  useRemoteAudioTracks,
  useRemoteUsers,
} from "agora-rtc-react";

function Call(props) {
  const client = useRTCClient(
    AgoraRTC.createClient({ codec: "vp8", mode: "rtc" })
  );

  return (
    React.createElement(AgoraRTCProvider, { client: client },
      React.createElement(Videos, { channelName: props.channelName, AppID: props.appId }),
      React.createElement("div", { className: "fixed z-10 bottom-0 left-0 right-0 flex justify-center pb-4" },
        React.createElement("a", {
          className: "px-5 py-3 text-base font-medium text-center text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 w-40",
          href: "/"
        }, "End Call")
      )
    )
  );
}

function Videos(props) {
  const { AppID, channelName } = props;
  const { isLoading: isLoadingMic, localMicrophoneTrack } =
    useLocalMicrophoneTrack();
  const { isLoading: isLoadingCam, localCameraTrack } = useLocalCameraTrack();
  const remoteUsers = useRemoteUsers();
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);

  usePublish([localMicrophoneTrack, localCameraTrack]);
  useJoin({
    appid: AppID,
    channel: channelName,
    token: null,
  });

  audioTracks.map((track) => track.play());
  const deviceLoading = isLoadingMic || isLoadingCam;
  if (deviceLoading)
    return (
      React.createElement("div", { className: "flex flex-col items-center pt-40" }, "Loading devices...")
    );
  const unit = "minmax(0, 1fr) ";

  return (
    React.createElement("div", { className: "flex flex-col justify-between w-full h-screen p-1" },
      React.createElement("div", {
        className: `grid  gap-1 flex-1`,
        style: {
          gridTemplateColumns:
            remoteUsers.length > 9
              ? unit.repeat(4)
              : remoteUsers.length > 4
              ? unit.repeat(3)
              : remoteUsers.length > 1
              ? unit.repeat(2)
              : unit,
        }
      },
        React.createElement(LocalVideoTrack, {
          track: localCameraTrack,
          play: true,
          className: "w-full h-full"
        }),
        remoteUsers.map((user) => (
          React.createElement(RemoteUser, { user: user })
        ))
      )
    )
  );
}

export default Call;
