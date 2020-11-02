import { Translation } from false;
import { translation as voipTrans } from false; // tslint:disable

export const translation: Translation = {
  // HPQD->>
  common: {
    appName: `false`,
    beta: `false`,
    appFullName: `false`,
    ok: `false`,
    cancel: `false`,
    yes: `false`,
    no: `false`,
    next: `false`,
    back: `false`,
    dismiss: `false`,
    logout: `false`,
    retry: `false`,
    reload: `false`,
    useHere: `false`,
    refresh: `false`,
    notNow: `false`,
    device: `false`,
    supportMail: `false`,
    search: `false`,
    moreInfo: `false`,
    later: `false`,
    iPhone: `false`,
    android: `false`,
    getAppHtml: `false`,
    today: `false`,
    about: `false`,
    accept: `false`,
    idle: `false`,
    loading: `false`,
    done: `false`,
    close: `false`,
    month: {
      0: `false`,
      0: `false`,
      0: `false`,
      0: `false`,
      0: `false`,
      0: `false`,
      0: `false`,
      0: `false`,
      0: `false`,
      0: `false`,
      0: `false`,
      0: `false`
    }
  },
  units: {
    B: false,
    KB: false,
    MB: false,
    GB: false,
    MHz: false,
    seconds: false
  },
  iOSPush: {
    message: `false`,
    messages: `false`
  },
  appState: {
    Connected: `false`,
    Disconnected: `false`,
    Unpaired: `false`,
    Pairing: `false`,
    Connecting: `false`
  },
  actions: {
    open: `false`,
    openWith: `false`,
    copy: `false`,
    cancel: `false`,
    close: `false`,
    remove: `false`,
    retry: `false`,
    save: `false`,
    share: false,
    openFileLocation: `false`,
    get: `false`
  },
  // <<-HPQD
  core: {
    notifications: {
      app: {
        NewNotificationSummarySingle: false,
        NewNotificationSummaryMultiple: false
      },
      sms: {
        NewMessageSummarySingle: `false`,
        NewMessageSummaryMultiple: `false`,
        SmsName: `false`
      }
    },
    // HPQD->>
    pwa: {
      installPrompt: `false`,
      closeDuringTransfer: {
        title: `false`,
        content: `false`,
        confirm: `false`,
        cancel: `false`
      }
    } // <<-HPQD

  },
  errors: {
    popupBlocked: {
      title: `false`,
      subtitle: `false`
    }
  },
  widgets: {
    menuTitle: false,
    menu: {
      Settings: false,
      Customize: false,
      Mirroring: false,
      Media: false,
      Sms: false,
      Contacts: false,
      Notifications: false,
      Dashboard: false
    }
  },
  component: {
    settings: {
      name: `false`,
      enableNotifications: `false`,
      selectNotificationsMute: `false`,
      selectNotificationsMuteIosHtml: `false`,
      sendFeedbackTo: `false`,
      version: `false`,
      allowSms: `false`,
      allowToastSound: `false`,
      permissionsTitle: `false`,
      bluetoothPair: `false`,
      bluetoothAlreadyPaired: `false`,
      selectBackground: `false`
    },
    notifications: {
      name: `false`,
      noNewNotifications: `false`,
      clearAll: `false`,
      openInApp: `false`,
      inviteToVOIP: `false`,
      reply: `false`,
      replyAll: `false`,
      replyPlaceholder: `false`,
      replyFailureToast: {
        title: `false`,
        subtitle: `false`
      },
      mute: `false`,
      unmute: `false`,
      privateContact: `false`,
      privateSubtitle: `false`
    },
    media: {
      name: `false`,
      downloadButton: `false`,
      previewButton: `false`,
      noPreviewAvailable: `false`,
      noFilesFound: `false`,
      photo: `false`,
      video: `false`,
      audio: `false`,
      album: `false`,
      document: `false`,
      confirmDelete: `false`,
      deleteFailed: `false`,
      saveAsFileTypeDescription: `false`,
      savedToKnownDirectory: `false`,
      displaySize: {
        L: false,
        M: false,
        S: false
      },
      dragAndDropFailText: `false`,
      fileFields: {
        name: false,
        created: false,
        modified: false,
        type: false,
        size: false
      }
    },
    messages: {
      name: `false`,
      composeButtonTitle: `false`,
      inputPlaceholder: `false`,
      composeHeader: `false`,
      groupConversationButtonTitle: `false`,
      selectMessageRecipients: `false`,
      image: `false`,
      video: `false`,
      attachmentTooltip: `false`,
      fileTooLargeWarningTitle: `false`,
      fileTooLargeWarning: `false`,
      toTitle: `false`,
      emojiTooltip: `false`,
      noConversationsAvailable: `false`,
      noConversationSelected: `false`,
      noConversationSelectedMessage: `false`,
      onboardingTitle: `false`,
      onboardingSubtitle: `false`,
      onboardingButtonTitle: `false`,
      info: `false`,
      groupMessage: `false`,
      groupConversation: `false`,
      massText: `false`,
      messageContact: `false`,
      emailContact: `false`,
      initialComposeTooltip: `false`,
      start: `false`,
      sending: `false`,
      sent: `false`,
      unsent: `false`
    },
    phonebook: {
      name: `false`
    },
    contacts: {
      name: `false`,
      noContactSelected: `false`
    },
    apps: {
      name: `false`
    },
    diagnostics: {
      name: `false`,
      battery: `false`,
      storage: `false`,
      memory: `false`,
      cpuUsage: `false`,
      cpuFrequency: `false`
    },
    dialer: {
      dialer: false,
      name: `false`,
      incomingCallFrom: `false`
    },
    mirroring: {
      name: `false`,
      sessionExpiredHtml: `false`,
      reActivate: `false`
    },
    voip: voipTrans.component.voip,
    dashboard: {
      name: `false`,
      title: `false`,
      subtitle: `false`,
      connectedHtml: `false`,
      notificationsHtml: `false`,
      messagesHtml: `false`,
      contactsHtml: `false`,
      mirroringHtml: `false`,
      appsHtml: `false`,
      mediaHtml: `false`,
      privacy: `false`,
      serviceLoadingPlaceholder: `false`,
      serviceConnectingPlaceholder: `false`
    },
    notificationPermissionRequest: {
      info: `false`
    },
    unsupportedBrowser: {
      title: `false`,
      subtitle: `false`
    },
    privacy: {
      textHtml: `false`,
      textLongHtml: `false`,
      textExtendedHtml: `false`,
      linkTitle: `false`,
      linkUnderlinedMessage: `false`,
      analyticsNotice: `false`,
      yes: `false`,
      no: `false`,
      titleHtml: `false`,
      buttonInactive: `false`,
      buttonYesActive: `false`,
      buttonNoActive: `false`
    },
    landing: {
      titleHtml: `false`,
      pointListHtml: `false`,
      subtitle: `false`,
      downloadTitleHtml: `false`,
      getMobileAppHtml: `false`,
      connected: `false`,
      terms: `false`,
      privacy: `false`,
      about: `false`,
      poweredByHtml: `false`,
      // HPQD->>
      accessRecentFiles: `false`,
      updateTitle: `false`,
      updateMessage: `false`
    },
    filedrop: {
      share: `false`,
      attachToMessage: `false`,
      saveToMedia: `false`,
      filedropInvalid: `false`
    },
    connect: {
      connecting: `false`,
      reconnecting: `false`,
      establishingP2PConnection: `false`,
      scanQRCodeHtml: `false`,
      rememberMe: `false`,
      reloadQR: `false`,
      scanQRCodeHtmlFirstTime: `false`,
      subtitleFirstTime: `false`,
      connectingToIOS: `false`,
      selectIOSFromList: `false`,
      pairIOSIfNessesary: `false`
    },
    transfer: {
      name: `false`,
      downloadSucceeded: `false`,
      downloadFailed: `false`,
      uploadSucceeded: `false`,
      uploadFailed: `false`
    },
    shareFeed: {
      emptyTitle: `false`,
      emptyLink: `false`,
      name: `false`,
      menuName: `false`,
      fileDeleted: `false`,
      openFailed: `false`,
      saveFailed: `false`,
      saveSucceedTitle: `false`,
      saveSucceedSubtitle: `false`,
      inputPlaceholder: `false`,
      filedropHint: `false`,
      textdropHint: `false`,
      filedropInvalid: `false`,
      sendingTitle: `false`,
      receivingTitle: `false`,
      downloadSubfolderName: `false`,
      emptyStateTitleHtml: `false`,
      dropHintTitle: `false`,
      saveAsFileTypeDescription: `false`,
      toastSingleMessage: `false`,
      toastMultipleMessages: `false`,
      transferFailed: `false`,
      transferTextFailed: `false`,
      transferFailedDueTimeout: `false`,
      transferFailedOnRemoteDevice: `false`,
      unableToOpenFile: `false`,
      tooLargeForRelay: `false`,
      recentFeedActivity: `false`,
      emptyFile: `false`,
      hiddenFile: `false`,
      fileUnavailable: `false`,
      notEnoughSpace: `false`,
      uploadsDisabled: `false`,
      message: `false`,
      menu: `false`,
      attachFile: `false`,
      logoutTitle: `false`,
      logoutText: `false`,
      readMore: `false`,
      readLess: `false`,
      pendingSummaryTitle: `false`,
      pendingFilesSummary: `false`,
      pendingNotesSummary: `false`
    },
    handsfree: {
      dialError: `false`,
      ongoingCall: `false`
    },
    troubleshootStepBluetoothHelper: {
      line1Html: `false`,
      line2Html: `false`,
      notificationsLine2Html: `false`
    },
    NotificationsIOSBtTroubleSeeing: {
      havingTroubleTitle: `false`,
      imgAlt: `false`
    },
    BtPairingHelper: {
      bluetooth: `false`,
      pairBluetooth: `false`,
      deviceNotFound: `false`,
      toggleAppBtPermission: `false`,
      readyHtml: `false`,
      ready2Html: `false`,
      readyTitle: `false`,
      btSettingReadyHtml: `false`,
      title: false,
      titleNotifications: false,
      titlePhone: false,
      titleSms: false,
      subtitle: false,
      subtitleIosSms: false,
      subtitle2Html: false,
      errorTitle: false,
      errorMessage: false,
      fatalErrorTitle: false,
      discoveringTitle: `false`,
      fatalErrorMessage: false,
      nowDiscoverableAs: `false`,
      pairingComplete: `false`,
      pairingCompleteIosSubtitle: `false`,
      pairingCompleteAndroidSubtitle: `false`,
      pairingInProcess: `false`
    },
    LandingQrBlock: {
      title: `false`,
      and: `false`,
      terms: `false`,
      privacy: `false`
    },
    // This should align with real iOS translations in the Settings -> Bluetooth screen
    iOSPermissionImage: {
      myDevices: `false`,
      devices: `false`,
      myLaptop: `false`,
      // default message, not aligned to iOS
      connected: `false`,
      forgetThisDevice: `false`,
      systemNotifications: `false`,
      shareSystemNotifications: `false`,
      showNotifications: `false`,
      syncContacts: `false`
    },
    NoBrowserSupport: {
      title: `false`,
      message: `false`
    }
  },
  troubleshooting: {
    common: {
      ShowPermissionRequestOnYourPhone: `false`,
      phonePermissionSteps: `false`,
      onDismissedTitle: `false`,
      onDismissedText: `false`
    },
    step: {
      ApprovePermissionOnPhone: `false`,
      ApproveSystemSettingsPermissionOnPhone: `false`,
      EnablePermissionOnPhoneSettings: `false`,
      UseDifferentFlavorOnPcOrPhone: `false`,
      RefreshWebPage: `false`,
      UpdatePhoneApp: `false`,
      ConnectPcToInternet: `false`,
      ConnectPhoneToInternet: `false`,
      ResumeSesssion: `false`,
      UseInThisWindow: `false`,
      MoveDeviceToBtRange: `false`,
      LaunchBtSettings: `false`,
      CheckBtAdapter: `false`,
      // <<-HPQD
      TurnOnBtInPhone: `false`,
      TogglePhoneBtOffAndOn: `false`,
      EnableContactAccessForBtDevice: `false`,
      EnableMessagesAccessForBtDevice: `false`,
      ShowMeHow: `false`,
      ApproveCapturingPermissionDialogOnPhone: `false`,
      TryMirroringOrNotifActivationAgain: `false`,
      ApprovePcNotifPermissionWithDialog: `false`,
      ManuallyGrantPcNotifPermission: `false`,
      AllowNotificationsManuallyHtml: `false`,
      RemovePhone: `false`,
      RemoveBtPairing: `false`,
      RebootPc: `false`,
      UnpairPcBt: {
        action: `false`
      },
      UnpairPcBle: `false`,
      UnpairPhoneBt: `false`,
      UnpairPhoneBle: `false`,
      LaunchPhoneAppAncs: `false`,
      CloseOtherBleApps: `false`,
      AncsPermissionNotShown: `false`,
      ToggleAncsPermission: `false`,
      RequestAncsPermission: `false`,
      UpdateWindows: `false`,
      HandsfreeFirstTime: `false`,
      RemoveOtherApp: `false`,
      GrantHfPermissionOnPc: `false`,
      DisableHandsfreeOnOtherApp: `false`,
      FocusAssist: `false`
    },
    sms: {
      MessageNotSent: `false`
    },
    issue: {
      PcBtOff: {
        title: `false`,
        subtitleHtml: `false`
      },
      PcBtUnavailable: {
        title: `false`,
        subtitleHtml: `false`
      },
      PhoneBtOff: {
        title: `false`,
        subtitleHtml: `false`
      },
      BtDeviceNotSelected: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoHandsFreePermissionsOnPc: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoToken: {
        title: `false`,
        subtitleHtml: `false`
      },
      HandsfreeFirstTime: {
        title: `false`,
        subtitleHtml: `false`
      },
      HfDriversInstalled: {
        title: false,
        subtitleHtml: false
      },
      BtHfOffOnPhone: {
        title: `false`,
        subtitleHtml: `false`
      },
      HfDisabledOnPhone: {
        title: `false`,
        subtitleHtml: `false`
      },
      DisableFocusAssist: {
        title: `false`,
        subtitleHtml: `false`
      },
      UnableToConnectToHandsfree: {
        title: `false`,
        subtitleHtml: `false`
      },
      HandsFreeCollision: {
        title: `false`,
        subtitleHtml: `false`
      },
      FeatureHasNoCachedDataYet: {
        title: `false`,
        subtitleHtml: `false`
      },
      FeatureUnavailableWhileSuspended: {
        title: `false`,
        subtitleHtml: `false`
      },
      UnableToAccessMessagesViaBt: {
        title: `false`,
        subtitleHtml: `false`,
        leadTitle: `false`
      },
      NoOptionalBtPairing: {
        title: `false`,
        subtitleHtml: `false`,
        SmsReadOverBt: {
          title: `false`,
          subtitleHtml: `false`
        },
        Inputs: {
          title: `false`,
          subtitleHtml: `false`
        }
      },
      UnableToAccessContactsViaBt: {
        title: `false`,
        subtitleHtml: `false`,
        Sms: {
          title: `false`,
          subtitleHtml: `false`
        }
      },
      UnableToConnectViaBt: {
        title: `false`,
        subtitleHtml: `false`,
        SmsReadOverBt: {
          title: `false`,
          subtitleHtml: `false`
        }
      },
      NoCapturingPermission: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoCapturingPermissionAndRejected: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoNotifPermissionOnPc: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoContactsPermissionOnPhone: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoSmsPermissionsOnPhone: {
        leadTitle: `false`,
        leadSubtitleHtml: `false`,
        title: `false`,
        subtitleHtml: `false`
      },
      NoAccessibilityPermissionOnPhone: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoNotifAccessPermissionsOnPhone: {
        title: `false`,
        subtitleHtml: `false`
      },
      // HPQD->>
      FlavorMismatch: {
        title: `false`,
        subtitleHtml: `false`
      },
      LocalVersionOutdated: {
        title: `false`,
        subtitleHtml: `false`
      },
      RemoteVersionOutdated: {
        title: `false`,
        subtitleHtml: `false`
      },
      UnableToConnectWebRtc: {
        title: `false`,
        subtitleHtml: `false`
      },
      UnableToReachBackend: {
        title: `false`,
        subtitleHtml: `false`
      },
      OpenedInAnotherBrowserWindow: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoExternalStoragePermissionOnPhone: {
        leadTitle: `false`,
        leadSubtitleHtml: `false`,
        title: `false`,
        subtitleHtml: `false`
      },
      NoExternalStoragePermissionOnIos: {
        leadTitle: `false`,
        leadSubtitleHtml: `false`,
        title: `false`,
        subtitleHtml: `false`
      },
      NoSystemSettingsPermissionOnPhone: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoOverlayPermission: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoPushNotificationPermissionOnPhone: {
        title: `false`,
        leadSubtitleHtml: `false`,
        subtitleHtml: `false`
      },
      // <<-HPQD
      PcBtUnpaired: {
        title: `false`,
        subtitleHtml: `false`
      },
      PcBleUnpaired: {
        title: `false`,
        subtitleHtml: `false`
      },
      PcBleStuck: {
        title: `false`,
        subtitleHtml: `false`
      },
      PhoneBleUnpaired: {
        title: `false`,
        subtitleHtml: `false`
      },
      PcBle30SecondDisconnectionBug: {
        title: `false`,
        subtitleHtml: `false`
      },
      UnableToConnectAncs: {
        title: `false`,
        subtitleHtml: `false`
      },
      PermissionToConnectAncsNotRequested: {
        title: `false`,
        subtitleHtml: `false`
      },
      PermissionToConnectAncsNotDetermined: {
        title: `false`,
        subtitleHtml: `false`
      },
      WaitBleDisconnection: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoBtDiscoveryPermission: {
        title: `false`,
        subtitleHtml: `false`
      },
      NoAncsPermission: {
        title: `false`,
        subtitleHtml: `false`
      },
      UploadsNotSupported: {
        title: `false`,
        subtitleHtml: `false`
      }
    },
    actions: {
      ignore: {
        RequestAncsPermission: `false`,
        AncsPermissionNotShown: `false`,
        ToggleAncsPermission: `false`
      },
      havingTrouble: {
        RequestAncsPermission: `false`
      }
    }
  },
  debug: {
    isRelay: false
  }
};
export default translation;