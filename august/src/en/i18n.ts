import { Translation } from './i18nInterface';
import { translation as voipTrans } from '~voip/../i18n';

// tslint:disable
export const translation: Translation = {
  // HPQD->>
  common: {
    appName: `HeyPhone`,
    beta: ``,
    appFullName: `$t(common.appName) $t(common.beta)`,
    ok: `Ok`,
    cancel: `Cancel`,
    yes: `Yes`,
    no: `No`,
    next: `Next`,
    back: `Back`,
    send: `Send`,
    dismiss: `Dismiss`,
    logout: `Logout`,
    retry: `Retry`,
    reload: `Reload`,
    useHere: `Use Here`,
    refresh: `Refresh`,
    notNow: `Not now`,
    device: `device`,
    supportMail: `info@heyphone.com`,
    search: `Search...`,
    moreInfo: `More Info`,
    later: `Later`,
    iPhone: `iPhone`,
    android: `Android`,
    getAppHtml: `<span>get $t(common.appName)</span><br/><span>for <strong>{{os}}<strong></span>`,
    today: `Today`,
    about: `About`,
    accept: `Accept`,
    idle: `idle`,
    loading: `Loading...`,
    done: `Done`,
    close: `Close`,
    month: {
      1: `January`,
      2: `February`,
      3: `March`,
      4: `April`,
      5: `May`,
      6: `June`,
      7: `July`,
      8: `August`,
      9: `September`,
      10: `October`,
      11: `November`,
      12: `December`,
    },
  },
  units: {
    B: 'B',
    KB: 'KB',
    MB: 'MB',
    GB: 'GB',
    MHz: 'MHz',
    seconds: 's',
  },
  iOSPush: {
    message: `New message`,
    messages: `New messages ({{count}})`,
  },
  appState: {
    Connected: `Connected`,
    Disconnected: `Disconnected`,
    Unpaired: `Unpaired`,
    Pairing: `Pairing`,
    Connecting: `Connecting...`,
  },
  actions: {
    open: `Open`,
    openWith: `Open with...`,
    copy: `Copy`,
    cancel: `$t(common.cancel)`,
    close: `$t(common.close)`,
    remove: `Remove`,
    retry: `Retry`,
    save: `Save as...`,
    share: 'Share',
    openFileLocation: `Open file location`,
    get: `Get`,
  },
  // <<-HPQD
  core: {
    notifications: {
      app: {
        NewNotificationSummarySingle: "New notification: (1)",
        NewNotificationSummaryMultiple: "New notifications: ({{count}})",
      },
      sms: {
        NewMessageSummarySingle: `New message: (1)`,
        NewMessageSummaryMultiple: `New messages: ({{count}})`,
        SmsName: `Messages`,
      }
    },
  // HPQD->>
    pwa: {
      installPrompt: `Would you like to add $t(common.appName) as a standalone app?`,
      closeDuringTransfer: {
        title: `Warning: Media transfer is in progress.`,
        content: `By closing the app, all media transfer in progress will end.`,
        confirm: `OK`,
        cancel: `Cancel`,
      },
    }
  // <<-HPQD
  },
  errors: {
    popupBlocked: {
      title: `Browser blocked opening documents for this page`,
      subtitle: `You can unblock it by pressing a 'popup' icon in an address bar and Allow showwing popups`,
    },
  },
  widgets: {
    menuTitle: '+ WIDGETS',
    menu: {
      Settings: 'Settings',
      Customize: 'Customize',
      Mirroring: 'Mirroring',
      Media: 'Media',
      Sms: 'Messages',
      Contacts: 'Contacts',
      Notifications: 'Notifications',
      Dashboard: 'Dashboard',
    }
  },
  component: {
    settings: {
      name: `Settings`,
      enableNotifications: `See notification pop-ups on your PC`,
      selectNotificationsMute: `Choose phone applications from which you would like to see notifications on your PC.`,
      selectNotificationsMuteIosHtml: `Phone applications from which you received notifications during this pairing session.<br>Uncheck the applications from which you do not want to receive notifications.`,
      sendFeedbackTo: `Send feedback to:`,
      version: `Version:`,
      allowSms: `Allow SMS notifications`,
      allowToastSound: `Allow popup sounds`,
      permissionsTitle: `Permissions`,
      bluetoothPair: `Pair your mobile device and HP PC via Bluetooth`,
      bluetoothAlreadyPaired: `Phone and PC are already paired over Bluetooth.`,
      selectBackground: `Select background picture`,
    },
    notifications: {
      name: `Notifications`,
      noNewNotifications: `No notifications to display`,
      clearAll: `Clear all notifications`,
      openInApp: `Open in app`,
      inviteToVOIP: `Invite to Video Chat`,
      reply: `Reply`,
      replyAll: `Reply All`,
      replyPlaceholder: `Enter a message`,
      replyFailureToast: {
        title: `Reply Failed`,
        subtitle: `Click to launch $t(common.appName)`,
      },
      mute: `Mute`,
      unmute: `Unmute`,
      privateContact: `Private contact`,
      privateSubtitle: `Private message`,
    },
    media: {
      name: `Files`,
      downloadButton: `Download`,
      previewButton: `Preview`,
      noPreviewAvailable: `This file cannot be previewed.`,
      noFilesFound: `No files were found`,
      photo: `Photos`,
      video: `Videos`,
      audio: `Audio`,
      album: `Album`,
      document: `Documents`,
      confirmDelete: `Are you sure you want to delete this file?`,
      deleteFailed: `Failed to delete file`,
      saveAsFileTypeDescription: `Shared file`,
      savedToKnownDirectory: `{{fileName}} was saved in the {{directory}} folder`,
      displaySize: {
        L: 'L',
        M: 'M',
        S: 'S',
      },
      dragAndDropFailText: `Dragging out failed. Please try again after file is ready`,
      fileFields: {
        name: 'Name',
        created: 'Created',
        modified: 'Modified',
        type: 'Type',
        size: 'Size',
      },
    },
    messages: {
      name: `Messages`,
      composeButtonTitle: `+ New Message`,
      inputPlaceholder: `Write a message...`,
      composeHeader: `New Message`,
      groupConversationButtonTitle: `Start group conversation`,
      selectMessageRecipients: `Select message recipients...`,
      image: `Picture`,
      video: `Video`,
      attachmentTooltip: `Attach files`,
      fileTooLargeWarningTitle: `File too large`,
      fileTooLargeWarning: `File size exceeds {{size}} $t(units.KB) maximum. Please validate the maximum file size allowed by your carrier. When exceeded, unexpected behavior may occur.`,
      toTitle: `To:`,
      emojiTooltip: `Emoji`,
      noConversationsAvailable: `New conversations will be displayed here.`,
      noConversationSelected: `No conversation has been selected`,
      noConversationSelectedMessage: `Select a conversation to view and send messages`,
      onboardingTitle: `Text Messages`,
      onboardingSubtitle: `Send and receive text messages using your PC`,
      onboardingButtonTitle: `Get Started`,
      info: `info`,
      groupMessage: `Group Message`,
      groupConversation: `Group Conversation`,
      massText: `Mass Text`,
      messageContact: `Message\n{{name}}`,
      emailContact: `Email\n{{name}}`,
      initialComposeTooltip: `Compose a new message`,
      start: `Start`,
      sending: `Sending`,
      sent: `Sent`,
      unsent: `Unsent`,
    },
    phonebook: {
      name: `Phone`,
    },
    contacts: {
      name: `Contacts`,
      noContactSelected: `No contact has been selected`,
    },
    apps: {
      name: `Apps`,
    },
    diagnostics: {
      name: `Diagnostics`,
      battery: `Battery Level`,
      storage: `Used Storage`,
      memory: `Used Memory`,
      cpuUsage: `CPU Usage`,
      cpuFrequency: `CPU Frequency`,
    },
    dialer: {
      dialer: 'Dialer',
      name: `Keypad`,
      incomingCallFrom: `Incoming Call From`,
    },
    mirroring: {
      name: `Mirroring`,
      sessionExpiredHtml: `The mirroring session expired in order<br/>to save your phone's battery`,
      reActivate: `Re-activate Mirroring`,
    },
    voip: voipTrans.component.voip,
    dashboard: {
      name: `Dashboard`,
      title: `Welcome Aboard!`,
      subtitle: `Your PC is successfully connected to:`,
      connectedHtml: `Your <strong>{{deviceName}}</strong> is now connected to your PC.`,
      notificationsHtml: `Receive and reply to phone<br><strong>notifications</strong>`,
      messagesHtml: `<strong>Text</strong> from the comfort<br>of your PC`,
      contactsHtml: `All your phone <strong>contacts</strong><br>in one place`,
      mirroringHtml: `Enjoy full <strong>mirroring</strong> of your<br>phone on your PC`,
      appsHtml: `Run your phone’s <strong>apps</strong><br>on the big screen`,
      mediaHtml: `See your phone’s photos,<br>videos & <strong>files</strong> on your PC`,
      privacy: `We care about your privacy. Your phone content will show locally on your PC browser and will not be stored on our servers.`,
      serviceLoadingPlaceholder: `Loading, please wait...`,
      serviceConnectingPlaceholder: `Connecting to phone`,
    },
    notificationPermissionRequest: {
      info: `You can now see your phone's notifications on the notifications tab. If you would also like new notifications to pop up on your browser (when your browser is minimized or even when you are not on $t(common.appName)'s site), select "Allow" when prompted.`,
    },
    unsupportedBrowser: {
      title: `You seem to be using an unsupported browser`,
      subtitle: `To enjoy our application, try using the following browsers`,
    },
    privacy: {
      textHtml: `We care about and respect your privacy.\n
      <ul>
      <li>Your content will show locally on your browser, and no personal data is ever stored on our servers.</li>
      <li>You are in a full control of the permissions granted to the app on your phone.</li>
      <li>We will never sell your personal data to third parties under any circumstances.</li>
      <li>We collect a minimal set of usage data, with no personal information, which helps us improve our app.</li>
      </ul>`,
      textLongHtml: ``,
      textExtendedHtml: ``,
      linkTitle: `Review your privacy settings`,
      linkUnderlinedMessage: `Learn more`,
      analyticsNotice: `Analytics Notice`,
      yes: `Yes, make my experience better by sharing my usage data`,
      no: `No, I’ll decide later`,
      titleHtml: ``,
      buttonInactive: `Please make your selection`,
      buttonYesActive: `Help Improve Your Experience`,
      buttonNoActive: `Continue`,
    },
    landing: {
      titleHtml: `Bring your phone to<br/> your big screen`,
      pointListHtml: `
        <li>Text from the comfort of your PC</li>
        <li>Make and take video calls</li>
        <li>Access your phone’s files and media</li>
        <li>Receive and reply to phone notifications</li>
        <li>Run your phone’s apps on the big screen</li>
        `,
      subtitle: `All from the comfort of your PC’s browser!`,
      downloadTitleHtml: `Download <strong>$t(common.appName)</strong> app to your android:`,
      getMobileAppHtml: `Get the <strong>$t(common.appName)</strong> mobile app from Google Play`,
      connected: `Enjoy your phone on your PC`,
      terms: `Terms`,
      privacy: `Privacy Policy`,
      about: `Learn More About $t(common.appName)`,
      poweredByHtml: `Powered by <strong>Screenovate Technologies LTD</strong>`,
      // HPQD->>
      accessRecentFiles: `Access My Recent Files`,
      updateTitle: `Update Your $t(common.appName) Mobile App:`,
      updateMessage: `We have made improvements that require an updated mobile companion app. Please ensure your mobile app is up to date before pairing.`,
    },
    filedrop: {
      share: `Drop file here to start sharing`,
      attachToMessage: `Drop files here to attach to a message`,
      saveToMedia: `Drop files here to save to your phone`,
      filedropInvalid: `Unsupported file type`,
    },
    connect: {
      connecting: `Connecting...`,
      reconnecting: `Disconnected from server, reconnecting...`,
      establishingP2PConnection: `Establishing peer to peer connection`,
      scanQRCodeHtml: `After app installation, scan the QR code to connect your phone to your PC`,
      rememberMe: `Remember me`,
      reloadQR: `Reload QR code to continue the pairing process`,
      scanQRCodeHtmlFirstTime: `Already<br/>Have the app?`,
      subtitleFirstTime: `Pair your phone to<br/>your PC now!`,
      connectingToIOS: `Connecting to your iPhone...`,
      selectIOSFromList: `Select your phone from the list of Bluetooth devices`,
      pairIOSIfNessesary: `If you can't find your iPhone, open Bluetooth preferences and pair it to your PC`,
    },
    transfer: {
      name: `File Upload`,
      downloadSucceeded: `Download succeeded`,
      downloadFailed: `Download failed`,
      uploadSucceeded: `Upload succeeded`,
      uploadFailed: `Upload failed`,
    },
    shareFeed: {
      emptyTitle: `Looking for your previous content?`,
      emptyLink: `Find it here or click the folder icon`,
      name: `Share Feed`,
      menuName: `Activity Feed`,
      fileDeleted: `File is no longer available`,
      openFailed: `Open failed`,
      saveFailed: `Save failed`,
      saveSucceedTitle: `Save`,
      saveSucceedSubtitle: `File saved successfully`,
      inputPlaceholder: `Send a note`,
      filedropHint: `Drop your files here`,
      textdropHint: `Drop your text here`,
      filedropInvalid: `Unsupported file type`,
      sendingTitle: `Sending...`,
      receivingTitle: `Receiving...`,
      downloadSubfolderName: `My Received Files`,
      emptyStateTitleHtml: `Your feed is currently empty.<br>Drop a file here or send a note above.`,
      dropHintTitle: `Drop a file here to send`,
      saveAsFileTypeDescription: `Shared file`,
      toastSingleMessage: `New message`,
      toastMultipleMessages: `New messages ({{count}})`,
      transferFailed: `Transfer error, please retry`,
      transferTextFailed: `Error sending text`,
      transferFailedDueTimeout: `Sending timed out, please retry when the other device is ready`,
      transferFailedOnRemoteDevice: `Transfer error, please retry from original device`,
      unableToOpenFile: `File can't be opened`,
      tooLargeForRelay: `File size exceeds {{size}}MB cloud connection limit`,
      recentFeedActivity: `Recent Feed Activity`,
      emptyFile: `Can't send an empty file (0 KB)`,
      hiddenFile: `Can't send a hidden file`,
      fileUnavailable: `File is no longer available`,
      notEnoughSpace: `Not enough space on device to receive the file`,
      uploadsDisabled: `Can't send files while sharing is in progress`,
      message: `Message`,
      menu: `Context Menu`,
      attachFile: `Attach a file`,
      logoutTitle: `Unpair your device`,
      logoutText: `You are about to disconnect and unpair your device. Next time you open the app, you will be asked to reconnect and pair your devices. Note: your recent files can be accessed at any time.`,
      readMore: `Read more`,
      readLess: `Collapse`,
      pendingSummaryTitle:`Waiting to receive`,
      pendingFilesSummary:`New files: `,
      pendingNotesSummary:`New notes: `,
    },
    handsfree: {
      dialError: `Unable to dial, please try again`,
      ongoingCall: `Ongoing call`,
    },
    troubleshootStepBluetoothHelper: {
      line1Html: `1. Access your mobile device’s Bluetooth settings and tap the <strong>(i)</strong> next to your PC name`,
      line2Html: `2. Turn ON <strong>“Sync Contacts”</strong> & <strong>“Show Notifications”</strong> to enable Messaging functionality`,
      notificationsLine2Html: `2. Turn on <strong>"Share System Notifications"</strong>.`,
    },
    NotificationsIOSBtTroubleSeeing: {
      havingTroubleTitle: `Having trouble seeing notifications?`,
      imgAlt: `iOS notification permission request`,
    },
    BtPairingHelper: {
      bluetooth: `Bluetooth`,
      pairBluetooth: `Start Pairing`,
      deviceNotFound: `Device not found`,
      toggleAppBtPermission: `Please try toggling Off and On the Bluetooth permission for $t(common.appName) inside your <strong>iPhone's Settings</strong>.`,
      readyHtml: `Access your mobile device’s Settings>Bluetooth, and make sure Bluetooth is toggled on.`,
      ready2Html: `Please keep the Bluetooth settings screen open during the pairing process.`,
      readyTitle: `Turn on your mobile device’s Bluetooth`,
      btSettingReadyHtml: `Open your phone's Bluetooth settings, click <strong>Next</strong> below, and approve the Bluetooth pairing requests on your PC and your phone.`,
      title: 'Pairing your phone and PC over Bluetooth',
      titleNotifications: 'Get your phone notifications on your PC',
      titlePhone: 'Make and receive calls on your PC',
      titleSms: 'Pairing your phone and PC over Bluetooth',
      subtitle: 'We need your phone to be discoverable by Bluetooth',
      subtitleIosSms: 'To read and write messages, pair your PC with your mobile device using Bluetooth',
      subtitle2Html: 'Click <strong>Start Pairing</strong> and follow the instructions',
      errorTitle: 'Pairing failed',
      errorMessage: 'Please try again',
      fatalErrorTitle: 'Bluetooth error',
      discoveringTitle: `Discovering your phone`,
      fatalErrorMessage: 'A Bluetooth error was encountered, please reboot your PC.',
      nowDiscoverableAs: `Now discoverable as '{{deviceName}}'`,
      pairingComplete: `Pairing Succeeded!.`,
      pairingCompleteIosSubtitle: `One final step...`,
      pairingCompleteAndroidSubtitle: `Messages you read on your PC will be indicated as read on your mobile device.`,
      pairingInProcess: `When a pin code appears on the PC and the mobile device, confirm both.`,
    },
    LandingQrBlock: {
      title: `Please approve our`,
      and: `and`,
      terms: `Terms of Use`,
      privacy: `Privacy Policy`,
    },
    // This should align with real iOS translations in the Settings -> Bluetooth screen
    iOSPermissionImage: {
      myDevices: `MY DEVICES`,
      devices: `DEVICES`,
      myLaptop: `My Laptop`, // default message, not aligned to iOS
      connected: `Connected`,
      forgetThisDevice: `Forget This Device`,
      systemNotifications: `SYSTEM NOTIFICATIONS`,
      shareSystemNotifications: `Share System Notifications`,
      showNotifications: `Show Notifications`,
      syncContacts: `Sync Contacts`,
    },
    NoBrowserSupport: {
      title: `$t(common.appName) is not supported on browsers`,
      message: `Please use the Windows $t(common.appName) application`,
    },
  },
  troubleshooting: {
    common: {
      ShowPermissionRequestOnYourPhone: `Show permission request on your phone`,
      phonePermissionSteps: `<ul>
      <li>  1. Open $t(common.appName) on your mobile device</li>
      <li>  2. Click the “Show Permission” button below</li>
      <li>  3. Approve the permission on your phone</li>
      </ul>`,
      onDismissedTitle: `Optional issue dismissed`,
      onDismissedText: `If you want to initiate it in anytime later, please check in the Settings tab`,
    },
    step: {
      ApprovePermissionOnPhone: `$t(troubleshooting.common.ShowPermissionRequestOnYourPhone)`,
      ApproveSystemSettingsPermissionOnPhone: `Show system permission request`,
      EnablePermissionOnPhoneSettings: `$t(troubleshooting.common.ShowPermissionRequestOnYourPhone)`,
      UseDifferentFlavorOnPcOrPhone: `UseDifferentFlavorOnPcOrPhone`,
      RefreshWebPage: `Reload`,
      UpdatePhoneApp: ``,
      ConnectPcToInternet: `ConnectPcToInternet`,
      ConnectPhoneToInternet: `Retry`,
      ResumeSesssion: `Reconnect`,
      UseInThisWindow: `Use in this window`,
      MoveDeviceToBtRange: `Make sure your phone is in the same room as your PC`,
      LaunchBtSettings: `Bluetooth Settings`,
      CheckBtAdapter: `Check your Bluetooth adapter`,
      // <<-HPQD
      TurnOnBtInPhone: `Please make sure your mobile device is turned on and is in the same room as your PC.`,
      TogglePhoneBtOffAndOn: `Please turn your phone Bluetooth off and then back on.`,
      EnableContactAccessForBtDevice: `To use SMS and access your contacts`,
      EnableMessagesAccessForBtDevice: `To use SMS and access your contacts`,
      ShowMeHow: `Show me how`,
      ApproveCapturingPermissionDialogOnPhone: `$t(troubleshooting.common.ShowPermissionRequestOnYourPhone)`,
      TryMirroringOrNotifActivationAgain: `Launch mirroring again`,
      ApprovePcNotifPermissionWithDialog: `Show permission request`,
      ManuallyGrantPcNotifPermission: `ManuallyGrantPcNotifPermission`,
      AllowNotificationsManuallyHtml: `Your notifications are blocked.<br>Press the lock button in the address bar and allow notifications for $t(common.appName).`,
      RemovePhone: `Remove the phone from $t(common.appName) by going to Settings and clicking Unpair.`,
      RemoveBtPairing: `Pair Bluetooth again`,
      RebootPc: `Please restart your PC`,
      UnpairPcBt: {
        action: `Unpair`,
      },
      UnpairPcBle: `Unpair PC BLE.`,
      UnpairPhoneBt: `Forget this PC from your phone's Bluetooth settings`,
      UnpairPhoneBle: `Forget this PC from your iPhone's Bluetooth settings.`,
      LaunchPhoneAppAncs: `To speed up notifications' loading time, please open the $t(common.appName) app on your phone.`,
      CloseOtherBleApps: `If the problem persists, make sure no other program on this PC is connected to your phone via Bluetooth.`,
      AncsPermissionNotShown: `If you didn't see the permission pop on top of the phone app, try going to the phone's home screen.`,
      ToggleAncsPermission: `If the permission was rejected in the past:`,
      RequestAncsPermission: `Show permission request`,
      UpdateWindows: `Please try upgrading Windows.`,
      HandsfreeFirstTime: `If consent dialog does not pop, please restart $t(common.appName).`,
      RemoveOtherApp: `Please uninstall the app, restart your machine and try again.`,
      GrantHfPermissionOnPc: `Open Windows Settings`,
      DisableHandsfreeOnOtherApp: `Please verify that no other app is authorized to handle phone calls. Then restart $t(common.appName).`,
      FocusAssist: `Open Focus Assist Settings`,
    },
    sms: {
      MessageNotSent: `Message failed to be sent. Click to retry.`,
    },
    issue: {
      PcBtOff: {
        title: `PC Bluetooth is turned off.`,
        subtitleHtml: `Please turn it on.`,
      },
      PcBtUnavailable: {
        title: `Bluetooth is Unavailable`,
        subtitleHtml: ``,
      },
      PhoneBtOff: {
        title: `Phone Bluetooth is turned off.`,
        subtitleHtml: `Please turn it on.`,
      },
      BtDeviceNotSelected: {
        title: `Please open the mobile app and click Pair below`,
        subtitleHtml: ``,
      },
      NoHandsFreePermissionsOnPc: {
        title: `$t(troubleshooting.issue.UnableToConnectToHandsfree.title)`,
        subtitleHtml: `<ul>
        <li>$t(common.appName) is not allowed to handle phone calls.</li>
        <li>Please grant this permission in Windows Settings. Then, restart $t(common.appName).</li>
        </ul>`,
      },
      NoToken: {
        title: `$t(troubleshooting.issue.UnableToConnectToHandsfree.title)`,
        subtitleHtml: `Phone calls are not supported for versions 1903 and 1909 of Windows 10.`,
      },
      HandsfreeFirstTime: {
        title: `$t(troubleshooting.issue.UnableToConnectToHandsfree.title)`,
        subtitleHtml: `Please approve $t(common.appName) to handle phone calls.`,
      },
      HfDriversInstalled: {
        title: '$t(troubleshooting.issue.UnableToConnectToHandsfree.title)',
        subtitleHtml: 'Another app is preventing using phone calls. Please unintstall the app, restart your machine and try again.',
      },
      BtHfOffOnPhone: {
        title: `Unable to connect to your phone`,
        subtitleHtml: `Make sure that your phone is nearby and its Bluetooth is turned on.`,
      },
      HfDisabledOnPhone: {
        title: ``,
        subtitleHtml: `<ul>
        <li><br></li>
        <li>If the problem persists, please perform the following steps:</li>
        <li>  1. Unpair your phone from your PC's Bluetooth settings.</li>
        <li>  2. Unpair your PC from your phone's Bluetooth settings.</li>
        <li>  3. Unpair your PC and phone via $t(common.appName).</li>
        <li>  4. Pair your PC and phone again via $t(common.appName).</li>
        </ul>`,
      },
      DisableFocusAssist: {
        title: `$t(troubleshooting.issue.UnableToConnectToHandsfree.title)`,
        subtitleHtml: `Please make sure Focus Assist is off.\n $t(troubleshooting.issue.HfDisabledOnPhone.subtitleHtml)`,
      },
      UnableToConnectToHandsfree: {
        title: `Make and receive calls on your PC`,
        subtitleHtml: `Unable to manage your phone's calls`,
      },
      HandsFreeCollision: {
        title: `$t(troubleshooting.issue.UnableToConnectToHandsfree.title)`,
        subtitleHtml: `Calls are managed by another app.`,
      },
      FeatureHasNoCachedDataYet: {        
        title: `Feature is not available while not connected`,
        subtitleHtml: `Reconnect in order to use this feature`,
      },
      FeatureUnavailableWhileSuspended: {
        title: `Unavailable while disconnected`,
        subtitleHtml: `Resume`,
      },
      UnableToAccessMessagesViaBt: {
        title: `To use SMS and access your contacts`,
        subtitleHtml: ``,
        leadTitle: `Enable access to messages in Bluetooth settings`,
      },
      NoOptionalBtPairing: {
        title: `To get extra features, please pair your mobile device and PC via Bluetooth.`,
        subtitleHtml: ``,
        SmsReadOverBt: {
          title: `To mark the text messages as read, please pair your mobile device and PC via Bluetooth.`,
          subtitleHtml: ``
        },
        Inputs: {
          title: `To control your phone using the mouse and keyboard, please pair your mobile device and PC via Bluetooth.`,
          subtitleHtml: ``,
        }
      },
      UnableToAccessContactsViaBt: {
        title: `To use SMS and access your contacts`,
        subtitleHtml: ``,
        Sms: {
          title: `To use SMS and access your contacts`,
          subtitleHtml: ``,
        },
      },
      UnableToConnectViaBt: {
        title: `Unable to connect to your mobile device via Bluetooth`,
        subtitleHtml: `Please make sure your mobile device is turned on and is in the same room as your PC<br/>If you removed the Bluetooth pairing on the mobile device, please unpair the mobile device from your PC.`,
        SmsReadOverBt: {
          title: `Unable to connect to your mobile device via Bluetooth to mark messages as read`,
          subtitleHtml: `$t(troubleshooting.issue.UnableToConnectViaBt.subtitleHtml)`,
        },
      },
      NoCapturingPermission: {
        title: `See your phone’s screen on your computer!`,
        subtitleHtml: `Allow <strong>$t(common.appName)</strong> to capture your phone screen`,
      },
      NoCapturingPermissionAndRejected: {
        title: `See your phone’s screen on your computer!`,
        subtitleHtml: `Allow <strong>$t(common.appName)</strong> to capture your phone screen`,
      },
      NoNotifPermissionOnPc: {
        title: `See your phone’s notifications on your computer!`,
        subtitleHtml: `Allow browser to show you notifications`,
      },
      NoContactsPermissionOnPhone: {
        title: `Message your contacts right from your computer!`,
        subtitleHtml: `Allow <strong>$t(common.appName)</strong> to access contacts`,
      },
      NoSmsPermissionsOnPhone: {
        leadTitle: `To show message on your PC, $t(common.appName) requires permission to Contacts and SMS`,
        leadSubtitleHtml: ``,
        title: ``,
        subtitleHtml: `$t(troubleshooting.common.phonePermissionSteps)`,
      },
      NoAccessibilityPermissionOnPhone: {
        title: `Cannot use mouse or keyboard to interact with phone`,
        subtitleHtml: `Enable Input Service on your phone to control your phone from your computer`,
      },
      NoNotifAccessPermissionsOnPhone: {
        title: `See your phone's notifications on your computer!`,
        subtitleHtml: `To see your phone's notifications, you'll need to allow <strong>$t(common.appName)</strong> to access:`,
      },
      // HPQD->>
      FlavorMismatch: {
        title: `The <strong>$t(common.appName)</strong> variant on your phone does not match the one on your computer`,
        subtitleHtml: `Please make sure that the same product is used on both computer and phone`,
      },
      LocalVersionOutdated: {
        title: `The $t(common.appName) website has been updated`,
        subtitleHtml: `Refresh $t(common.appName) on your browser`,
      },
      RemoteVersionOutdated: {
        title: `Update is required`,
        subtitleHtml: `The $t(common.appName) app on your phone is out of date.<br/>Please update your app to continue.`,
      },
      UnableToConnectWebRtc: {
        title: `Your phone might not be connected`,
        subtitleHtml: `Please make sure your phone has an active internet connection and launch $t(common.appName) on it`,
      },
      UnableToReachBackend: {
        title: `Computer not connected`,
        subtitleHtml: `Make sure your computer has an active internet connection`,
      },
      OpenedInAnotherBrowserWindow: {
        title: `$t(common.appName) is open in another window`,
        subtitleHtml: `Use $t(common.appName) in this window`,
      },
      NoExternalStoragePermissionOnPhone: {
        leadTitle: `To share photos and videos, $t(common.appName) requires permission to “Access photos, media, and files”.`,
        leadSubtitleHtml: ``,
        title: ``,
        subtitleHtml: `<ul>
        <li>  1. Open $t(common.appName) on your mobile device</li>
        <li>  2. Click the “Show Permission” button below</li>
        <li>  3. Approve the permission on your phone</li>
        </ul>`,
      },
      NoExternalStoragePermissionOnIos: {
        leadTitle: `To share photos and videos, $t(common.appName) requires permission to Access Your Photos.`,
        leadSubtitleHtml: ``,
        title: `How to allow media sharing on your mobile device`,
        subtitleHtml: `<ul>
        <li>  1. Open the $t(common.appName) app on your mobile device</li>
        <li>  2. Click the “Open App Settings” button below</li>
        <li>  3. Access $t(common.appName) app settings and make sure Photos has Read and</li>
        <li>  Write option selected</li>
        </ul>`,
      },
      NoSystemSettingsPermissionOnPhone: {
        title: `Rotate your phone!`,
        subtitleHtml: `Enable to rotate your phone.`,
      },
      NoOverlayPermission: {
        title: `Engage with your phone from your computer!`,
        subtitleHtml: `To allow engaging with notifications and apps from your PC, $t(common.appName) needs permission to draw over other apps.`,
      },
      NoPushNotificationPermissionOnPhone: {
        title: ``,
        leadSubtitleHtml: `We recommend allowing notifications for a better experience with the app,<br/>or make sure the app is open when sharing media.`,
        subtitleHtml: `<ul>
        <li>  1. Open the $t(common.appName) app on your mobile device</li>
        <li>  2. Click the “Open App Settings” button below</li>
        <li>  3. Access $t(common.appName) app settings and make sure Notifications</li>
        <li>  has Allow Notifications enabled</li>
        </ul>`,
      },
      // <<-HPQD
      PcBtUnpaired: {
        title: `PC Bluetooth was unpaired from your phone.`,
        subtitleHtml: ``,
      },
      PcBleUnpaired: {
        title: `PC Bluetooth was unpaired from your phone.`,
        subtitleHtml: ``,
      },
      PcBleStuck: {
        title: `Bluetooth Connection Failure.`,
        subtitleHtml: `The Bluetooth connection with your phone is unstable.`,
      },
      PhoneBleUnpaired: {
        title: `There is a problem connecting to your iPhone via Bluetooth.`,
        subtitleHtml: `If you removed your PC from the iPhone Bluetooth settings (clicked "Forget This Device") proceed with the instructions.`,
      },
      PcBle30SecondDisconnectionBug: {
        title: `Bluetooth Connection Failure.`,
        subtitleHtml: `The Bluetooth connection with your phone is unstable. It is recommended to avoid toggling Bluetooth on/off.`,
      },
      UnableToConnectAncs: {
        title: `Connecting to your phone...`,
        subtitleHtml: ``,
      },
      PermissionToConnectAncsNotRequested: {
        title: `Get your phone notifications on your PC`,
        subtitleHtml: `We need your permission to access notifications<br/><br/>Click <strong>Show permission request</strong> to show the request on your phone`,
      },
      PermissionToConnectAncsNotDetermined: {
        title: `$t(troubleshooting.issue.PermissionToConnectAncsNotRequested.title)`,
        subtitleHtml: `We need your permission to access notifications`,
      },
      WaitBleDisconnection: {
        title: `$t(troubleshooting.issue.UnableToConnectViaBt.title)`,
        subtitleHtml: `Please turn your phone Bluetooth off and then back on.<br/>If the problem persists, make sure no other program on this PC is connected to your phone via Bluetooth.`,
      },
      NoBtDiscoveryPermission: {
        title: `$t(component.BtPairingHelper.subtitle)`,
        subtitleHtml: `<ul>
        <li>  1. Open the app on your mobile device</li>
        <li>  2. Click $t(troubleshooting.common.ShowPermissionRequestOnYourPhone) below</li>
        <li>  3. Approve the permission showed on your phone</li>
        </ul>`,
      },
      NoAncsPermission: {
        title: `To view notifications on your PC`,
        subtitleHtml: ``,
      },
      UploadsNotSupported: {
        title: `Sending is unavailable`,
        subtitleHtml: `Please wait for current process to end before proceeding`,
      },
    },
    actions: {
      ignore: {
        RequestAncsPermission: `Done`,
        AncsPermissionNotShown: `$t(troubleshooting.actions.ignore.RequestAncsPermission)`,
        ToggleAncsPermission: `$t(troubleshooting.actions.ignore.RequestAncsPermission)`,
      },
      havingTrouble: {
        RequestAncsPermission: `There is no request on the phone`,
      },
    },
  },
  debug: {
    isRelay: 'is relay',
  }
};

export default translation;
