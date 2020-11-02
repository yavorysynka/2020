import { Translation } from './i18nInterface';
import { translation as voipTrans } from '~voip/../i18n'; // tslint:disable

export const translation: Translation = {
  // HPQD->>
  common: {
    appName: `HeyPhone`,
    beta: ``,
    appFullName: `$t(common.appName) $t(common.beta)`,
    ok: `Ok`,
    cancel: `Abbrechen`,
    yes: `Ja`,
    no: `Nein`,
    next: `Nächste`,
    back: `Zurück`,
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
      12: `December`
    }
  },
  units: {
    B: 'B',
    KB: 'KB',
    MB: "MN",
    GB: "SF",
    MHz: 'MHz',
    seconds: 's'
  },
  iOSPush: {
    message: `Neue Nachricht`,
    messages: `Neue Nachrichten ({{count}})`
  },
  appState: {
    Connected: `Verbunden`,
    Disconnected: `Verbindung getrennt`,
    Unpaired: `Ungepaart`,
    Pairing: `Pairing`,
    Connecting: `Verbinden...`
  },
  actions: {
    open: `Öffnen`,
    openWith: `Öffnen mit...`,
    copy: `Kopieren`,
    cancel: `$t(common.cancel)`,
    close: `$t(common.close)`,
    remove: `Entfernen`,
    retry: `Wiederholen`,
    save: `Speichern als...`,
    share: "Teilen",
    openFileLocation: `Dateiverzeichnis öffnen`,
    get: `Erhalten`
  },
  // <<-HPQD
  core: {
    notifications: {
      app: {
        NewNotificationSummarySingle: "Neue Benachrichtigung: (1)",
        NewNotificationSummaryMultiple: "Neue Benachrichtigungen: ({{count}})"
      },
      sms: {
        NewMessageSummarySingle: `Neue Nachricht: (1)`,
        NewMessageSummaryMultiple: `Neue Nachrichten: ({{count}})`,
        SmsName: `Nachrichten`
      }
    },
    // HPQD->>
    pwa: {
      installPrompt: `Möchtest du $t(common.appName) als eigenständige App hinzufügen?`,
      closeDuringTransfer: {
        title: `Warnung: Medienübertragung ist im Gange.`,
        content: `Durch das Schließen der App wird der gesamte laufende Medientransfer beendet.`,
        confirm: `Ok`,
        cancel: `Abbrechen`
      }
    } // <<-HPQD

  },
  errors: {
    popupBlocked: {
      title: `Browser hat das Öffnen von Dokumenten für diese Seite blockiert`,
      subtitle: `Du kannst die Blockierung durch Drücken eines "Popup"-Symbols in der Adressleiste wieder aufheben und Popups erlauben`
    }
  },
  widgets: {
    menuTitle: '+ WIDGETS',
    menu: {
      Settings: "Einstellungen",
      Customize: "Anpassen",
      Mirroring: "Spiegeln",
      Media: "Medien",
      Sms: "Nachrichten",
      Contacts: "Kontakte",
      Notifications: "Benachrichtigungen",
      Dashboard: 'Dashboard'
    }
  },
  component: {
    settings: {
      name: `Einstellungen`,
      enableNotifications: `Benachrichtigungs-Popups auf Ihrem PC anzeigen`,
      selectNotificationsMute: `Wählen Sie die Telefon-Anwendungen, von denen Sie Benachrichtigungen auf Ihrem PC sehen möchten.`,
      selectNotificationsMuteIosHtml: `Telefonanwendungen, von denen Sie Benachrichtigungen während dieser Paarungssitzung erhalten haben.<br>Deaktivieren Sie die Anwendungen, von denen Sie keine Benachrichtigungen erhalten möchten.`,
      sendFeedbackTo: `Feedback senden an:`,
      version: `Version:`,
      allowSms: `SMS-Benachrichtigungen erlauben`,
      allowToastSound: `Popup-Töne erlauben`,
      permissionsTitle: `Berechtigungen`,
      bluetoothPair: `Verbinde dein Mobilgerät und HP PC über Bluetooth`,
      bluetoothAlreadyPaired: `Telefon und PC sind bereits über Bluetooth gekoppelt.`,
      selectBackground: `Hintergrundbild auswählen`
    },
    notifications: {
      name: `Benachrichtigungen`,
      noNewNotifications: `Keine Benachrichtigungen zum Anzeigen`,
      clearAll: `Alle Benachrichtigungen löschen`,
      openInApp: `In App öffnen`,
      inviteToVOIP: `Zum Videochat einladen`,
      reply: `Antwort`,
      replyAll: `Alle antworten`,
      replyPlaceholder: `Nachricht eingeben`,
      replyFailureToast: {
        title: `Antwort fehlgeschlagen`,
        subtitle: `Klicke, um $tzu starten (common.appName)`
      },
      mute: `Stumm`,
      unmute: `Entstumm`,
      privateContact: `Privater Kontakt`,
      privateSubtitle: `Private Nachricht`
    },
    media: {
      name: `Dateien`,
      downloadButton: `Download`,
      previewButton: `Vorschau`,
      noPreviewAvailable: `Diese Datei kann nicht in der Vorschau angezeigt werden.`,
      noFilesFound: `Keine Dateien gefunden`,
      photo: `Fotos`,
      video: `Videos`,
      audio: `Audio`,
      album: `Album`,
      document: `Dokumente`,
      confirmDelete: `Sind Sie sicher, dass Sie diese Datei löschen möchten?`,
      deleteFailed: `Fehler beim Löschen der Datei`,
      saveAsFileTypeDescription: `Gemeinsame Datei`,
      savedToKnownDirectory: `{{fileName}} wurde im Ordner {{directory}} gespeichert`,
      displaySize: {
        L: 'L',
        M: 'M',
        S: 'S'
      },
      dragAndDropFailText: `Ziehen fehlgeschlagen. Bitte versuchen Sie es erneut, nachdem die Datei bereit ist`,
      fileFields: {
        name: 'Name',
        created: "Erstellt",
        modified: "Geändert",
        type: "Typ",
        size: "Größe"
      }
    },
    messages: {
      name: `Nachrichten`,
      composeButtonTitle: `+ Neue Nachricht`,
      inputPlaceholder: `Nachricht schreiben...`,
      composeHeader: `Neue Nachricht`,
      groupConversationButtonTitle: `Gruppengespräch starten`,
      selectMessageRecipients: `Nachrichtenempfänger auswählen...`,
      image: `Bild`,
      video: `Video`,
      attachmentTooltip: `Dateien anhängen`,
      fileTooLargeWarningTitle: `Datei zu groß`,
      fileTooLargeWarning: `Die Dateigröße überschreitet das Maximum von {{size}} $t(Einheiten.KB). Bitte überprüfen Sie die maximale Dateigröße, die Ihr Versanddienst zulässt. Bei Überschreitung kann unerwartetes Verhalten auftreten.`,
      toTitle: `An:`,
      emojiTooltip: `Emoji`,
      noConversationsAvailable: `Hier werden neue Unterhaltungen angezeigt.`,
      noConversationSelected: `Keine Unterhaltung ausgewählt`,
      noConversationSelectedMessage: `Wählen Sie eine Unterhaltung zum Anzeigen und Senden von Nachrichten`,
      onboardingTitle: `Textnachrichten`,
      onboardingSubtitle: `Senden und Empfangen von Textnachrichten über Ihren PC`,
      onboardingButtonTitle: `Los geht's`,
      info: `info`,
      groupMessage: `Gruppen-Nachricht`,
      groupConversation: `Gruppengespräch`,
      massText: `Massentext`,
      messageContact: `Nachricht\n{{name}}`,
      emailContact: `E-Mail\n{{name}}`,
      initialComposeTooltip: `Neue Nachricht verfassen`,
      start: `Start`,
      sending: `Senden`,
      sent: `Gesendet`,
      unsent: `Unsent`
    },
    phonebook: {
      name: `Telefon`
    },
    contacts: {
      name: `Kontakte`,
      noContactSelected: `Kein Kontakt ausgewählt`
    },
    apps: {
      name: `Apps`
    },
    diagnostics: {
      name: `Diagnose`,
      battery: `Akkustand`,
      storage: `Verwendeter Speicher`,
      memory: `Verwendeter Speicher`,
      cpuUsage: `CPU Auslastung`,
      cpuFrequency: `CPU-Frequenz`
    },
    dialer: {
      dialer: "Anrufer",
      name: `Keypad`,
      incomingCallFrom: `Eingehender Anruf von`
    },
    mirroring: {
      name: `Spiegeln`,
      sessionExpiredHtml: `Die Spiegelungssitzung ist abgelaufen, um<br/>den Akku Ihres Telefons zu sparen`,
      reActivate: `Spiegelung reaktivieren`
    },
    voip: voipTrans.component.voip,
    dashboard: {
      name: `Dashboard`,
      title: `Willkommen!`,
      subtitle: `Ihr PC ist erfolgreich verbunden mit:`,
      connectedHtml: `Ihr <strong>{{deviceName}}</strong> ist jetzt mit Ihrem PC verbunden.`,
      notificationsHtml: `Empfange und antworte auf Telefon<br><strong>Benachrichtigungen</strong>`,
      messagesHtml: `<strong>Text</strong> vom Komfort<br>Ihres PCs`,
      contactsHtml: `Alle Ihr Telefon <strong>Kontakte</strong><br>an einem Ort`,
      mirroringHtml: `Enjoy full <strong>mirroring</strong> of your<br>phone on your PC`,
      appsHtml: `Führen Sie <strong>Apps</strong><br>auf dem großen Bildschirm aus`,
      mediaHtml: `Sehen Sie sich die Fotos,<br>Videos & <strong>Dateien</strong> auf Ihrem PC an`,
      privacy: `Wir kümmern uns um Ihre Privatsphäre. Ihre Telefon-Inhalte werden lokal auf Ihrem PC Browser angezeigt und werden nicht auf unseren Servern gespeichert.`,
      serviceLoadingPlaceholder: `Lädt, bitte warten...`,
      serviceConnectingPlaceholder: `Verbindung zum Telefon`
    },
    notificationPermissionRequest: {
      info: `Sie können nun die Benachrichtigungen Ihres Telefons auf der Registerkarte Benachrichtigungen sehen. Wenn Sie auch möchten, dass neue Benachrichtigungen in Ihrem Browser angezeigt werden (wenn Ihr Browser minimiert ist oder sogar wenn Sie nicht auf $tsind (gemeinsam. ppName)'s site), wähle "Erlauben" wenn du dazu aufgefordert wirst.`
    },
    unsupportedBrowser: {
      title: `Sie scheinen einen nicht unterstützten Browser zu verwenden`,
      subtitle: `Um unsere Anwendung zu genießen, verwenden Sie die folgenden Browser`
    },
    privacy: {
      textHtml: `Wir kümmern uns um Ihre Privatsphäre und respektieren sie.\n
      <ul>
      <li>Ihr Inhalt wird lokal in Ihrem Browser angezeigt, und es werden keine persönlichen Daten auf unseren Servern gespeichert.</li>
      <li>Sie haben die volle Kontrolle über die Berechtigungen, die der App auf Ihrem Telefon gewährt werden.</li>
      <li>Wir werden Ihre persönlichen Daten unter keinen Umständen an Dritte verkaufen.</li>
      <li>Wir sammeln minimale Nutzungsdaten ohne persönliche Informationen, was uns hilft, unsere App zu verbessern.</li>
      </ul>`,
      textLongHtml: ``,
      textExtendedHtml: ``,
      linkTitle: `Überprüfe deine Privatsphäre-Einstellungen`,
      linkUnderlinedMessage: `Mehr erfahren`,
      analyticsNotice: `Analysemitteilung`,
      yes: `Ja, machen Sie meine Erfahrung besser, indem Sie meine Nutzungsdaten teilen`,
      no: `Nein, ich werde später entscheiden`,
      titleHtml: ``,
      buttonInactive: `Bitte wählen Sie Ihre Auswahl`,
      buttonYesActive: `Hilf dabei, deine Erfahrung zu verbessern`,
      buttonNoActive: `Weiter`
    },
    landing: {
      titleHtml: `Bring dein Telefon auf<br/> deinen großen Bildschirm`,
      pointListHtml: `
        <li>Text aus dem Komfort Ihres PCs</li>
        <li>Führen Sie Videoanrufe durch</li>
        <li><li> Zugriff auf die Dateien und Medien Ihres Telefons</li>
        <li>Empfangen und antworten Sie auf Telefonbenachrichtigungen</li>
        
        <li>Führen Sie Ihre Telefon-Apps auf dem großen Bildschirm aus</li>
        `,
      subtitle: `Alles aus dem Komfort Ihres PC-Browsers!`,
      downloadTitleHtml: `Lade <strong>$t(common.appName)</strong> App auf dein Android herunter:`,
      getMobileAppHtml: `Holen Sie sich die <strong>$t(common.appName)</strong> mobile App von Google Play`,
      connected: `Genießen Sie Ihr Telefon auf Ihrem PC`,
      terms: `Begriffe`,
      privacy: `Datenschutzerklärung`,
      about: `Erfahren Sie mehr über $t(common.appName)`,
      poweredByHtml: `Unterstützt von <strong>Screenovate Technologies LTD</strong>`,
      // HPQD->>
      accessRecentFiles: `Zugriff auf meine letzten Dateien`,
      updateTitle: `Aktualisieren Sie Ihre Mobile App $t(common.appName) :`,
      updateMessage: `Wir haben Verbesserungen vorgenommen, die eine aktualisierte mobile Begleit-App erfordern. Bitte stellen Sie sicher, dass Ihre mobile App vor dem Kopieren auf dem neuesten Stand ist.`
    },
    filedrop: {
      share: `Datei hier ablegen um mit dem Teilen zu beginnen`,
      attachToMessage: `Dateien hier ablegen um eine Nachricht anzuhängen`,
      saveToMedia: `Dateien hier ablegen um auf Ihr Telefon zu speichern`,
      filedropInvalid: `Nicht unterstützter Dateityp`
    },
    connect: {
      connecting: `Verbinden...`,
      reconnecting: `Verbindung zum Server getrennt, erneut verbinden...`,
      establishingP2PConnection: `Peer-to-Peer-Verbindung einrichten`,
      scanQRCodeHtml: `Scannen Sie nach der App-Installation den QR-Code, um Ihr Telefon mit Ihrem PC zu verbinden`,
      rememberMe: `Erinnere mich`,
      reloadQR: `QR-Code neu laden, um den Paarungsprozess fortzuführen`,
      scanQRCodeHtmlFirstTime: `G Het<br/>heeft de app?`,
      subtitleFirstTime: `Verbinden Sie Ihr Telefon jetzt mit<br/>Ihrem Computer!`,
      connectingToIOS: `Verbinde mit Ihrem iPhone...`,
      selectIOSFromList: `Wählen Sie Ihr Telefon aus der Liste der Bluetooth-Geräte`,
      pairIOSIfNessesary: `Wenn Sie Ihr iPhone nicht finden, öffnen Sie die Bluetooth-Einstellungen und koppeln Sie es an Ihren PC`
    },
    transfer: {
      name: `Datei hochladen`,
      downloadSucceeded: `Download erfolgreich`,
      downloadFailed: `Download fehlgeschlagen`,
      uploadSucceeded: `Upload erfolgreich`,
      uploadFailed: `Upload fehlgeschlagen`
    },
    shareFeed: {
      emptyTitle: `Sie suchen Ihren vorherigen Inhalt?`,
      emptyLink: `Finden Sie es hier oder klicken Sie auf das Ordnersymbol`,
      name: `Feed teilen`,
      menuName: `Aktivitäts-Feed`,
      fileDeleted: `Datei ist nicht mehr verfügbar`,
      openFailed: `Öffnen fehlgeschlagen`,
      saveFailed: `Speichern fehlgeschlagen`,
      saveSucceedTitle: `Speichern`,
      saveSucceedSubtitle: `Datei erfolgreich gespeichert`,
      inputPlaceholder: `Eine Notiz senden`,
      filedropHint: `Dateien hier ablegen`,
      textdropHint: `Text hier ablegen`,
      filedropInvalid: `Nicht unterstützter Dateityp`,
      sendingTitle: `Senden...`,
      receivingTitle: `Empfangen...`,
      downloadSubfolderName: `Meine empfangenen Dateien`,
      emptyStateTitleHtml: `Ihr Feed ist derzeit leer.<br>Ablegen Sie eine Datei hier oder senden Sie eine Notiz oben.`,
      dropHintTitle: `Zum Senden eine Datei hier ablegen`,
      saveAsFileTypeDescription: `Gemeinsame Datei`,
      toastSingleMessage: `Neue Nachricht`,
      toastMultipleMessages: `Neue Nachrichten ({{count}})`,
      transferFailed: `Übertragungsfehler, bitte erneut versuchen`,
      transferTextFailed: `Fehler beim Senden des Textes`,
      transferFailedDueTimeout: `Sende-Timeout, bitte versuchen Sie es erneut, wenn das andere Gerät bereit ist`,
      transferFailedOnRemoteDevice: `Übertragungsfehler, bitte erneut vom ursprünglichen Gerät versuchen`,
      unableToOpenFile: `Datei kann nicht geöffnet werden`,
      tooLargeForRelay: `Dateigröße überschreitet {{size}}MB Cloud-Verbindung`,
      recentFeedActivity: `Letzte Feed-Aktivität`,
      emptyFile: `Kann keine leere Datei senden (0 KB)`,
      hiddenFile: `Kann keine versteckte Datei senden`,
      fileUnavailable: `Datei ist nicht mehr verfügbar`,
      notEnoughSpace: `Nicht genügend Speicherplatz auf dem Gerät, um die Datei zu empfangen`,
      uploadsDisabled: `Dateien können während der Freigabe nicht gesendet werden`,
      message: `Nachricht`,
      menu: `Kontextmenü`,
      attachFile: `Datei anhängen`,
      logoutTitle: `Gerät entkoppeln`,
      logoutText: `Sie sind dabei, die Verbindung zu trennen und Ihr Gerät zu entkoppeln. Wenn Sie die App das nächste Mal öffnen, werden Sie aufgefordert, sich neu zu verbinden und Ihre Geräte zu koppeln. Hinweis: Auf Ihre aktuellen Dateien kann jederzeit zugegriffen werden.`,
      readMore: `Lesen Sie mehr`,
      readLess: `Einklappen`,
      pendingSummaryTitle: `Warte auf Empfang`,
      pendingFilesSummary: `Neue Dateien: `,
      pendingNotesSummary: `Neue Notizen: `
    },
    handsfree: {
      dialError: `Wählen nicht möglich, bitte erneut versuchen`,
      ongoingCall: `Laufender Anruf`
    },
    troubleshootStepBluetoothHelper: {
      line1Html: `1. Greifen Sie auf die Bluetooth-Einstellungen Ihres Mobilgeräts und tippen Sie auf <strong>(i)</strong> neben Ihrem PC-Namen`,
      line2Html: `2. Schalten Sie <strong>“Kontakte synchronisieren”</strong> & <strong>“Benachrichtigungen anzeigen”</strong> um die Nachrichtenfunktion zu aktivieren`,
      notificationsLine2Html: `2. Aktivieren Sie <strong>"Systembenachrichtigungen teilen"</strong>.`
    },
    NotificationsIOSBtTroubleSeeing: {
      havingTroubleTitle: `Haben Sie Probleme mit dem Sehen von Benachrichtigungen?`,
      imgAlt: `iOS-Benachrichtigungsberechtigungsanfrage`
    },
    BtPairingHelper: {
      bluetooth: `Bluetooth`,
      pairBluetooth: `Paarung starten`,
      deviceNotFound: `Gerät nicht gefunden`,
      toggleAppBtPermission: `Bitte versuchen Sie, die Bluetooth-Berechtigung für $t(common.appName) in Ihren <strong>iPhone-Einstellungen auszuschalten</strong>.`,
      readyHtml: `Greifen Sie auf die Einstellungen Ihres Mobilgerätes zu und stellen Sie sicher, dass Bluetooth eingeschaltet ist.`,
      ready2Html: `Bitte halten Sie die Bluetooth-Einstellungen während des Paarvorgangs offen.`,
      readyTitle: `Schalten Sie das Bluetooth Ihres Mobilgeräts ein`,
      btSettingReadyHtml: `Open your phone's Bluetooth settings, click <strong>Next</strong> below, and approve the Bluetooth pairing requests on your PC and your phone.`,
      title: "Verbinden Ihres Telefons und PCs über Bluetooth",
      titleNotifications: "Hol dir deine Telefon-Benachrichtigungen auf deinem PC",
      titlePhone: "Anrufe auf Ihrem PC tätigen und empfangen",
      titleSms: "Verbinden Ihres Telefons und PCs über Bluetooth",
      subtitle: "Wir benötigen dein Telefon um es über Bluetooth zu entdecken",
      subtitleIosSms: "Um Nachrichten zu lesen und zu schreiben, koppeln Sie Ihren PC mit Ihrem mobilen Gerät mit Bluetooth",
      subtitle2Html: "Klicken Sie auf <strong>Paarung starten</strong> und folgen Sie den Anweisungen",
      errorTitle: "Paarung fehlgeschlagen",
      errorMessage: "Bitte erneut versuchen",
      fatalErrorTitle: "Bluetooth-Fehler",
      discoveringTitle: `Entdecke dein Telefon`,
      fatalErrorMessage: "Ein Bluetooth-Fehler ist aufgetreten, bitte starten Sie Ihren PC neu.",
      nowDiscoverableAs: `Jetzt entdeckbar als '{{deviceName}}'`,
      pairingComplete: `Paarung erfolgreich!.`,
      pairingCompleteIosSubtitle: `Ein letzter Schritt...`,
      pairingCompleteAndroidSubtitle: `Nachrichten, die Sie auf Ihrem PC lesen, werden als gelesen auf Ihrem mobilen Gerät angezeigt.`,
      pairingInProcess: `Wenn ein Pin-Code auf dem PC und dem mobilen Gerät erscheint, bestätigen Sie beides.`
    },
    LandingQrBlock: {
      title: `Bitte genehmigen Sie unsere`,
      and: `und`,
      terms: `Nutzungsbedingungen`,
      privacy: `Datenschutzerklärung`
    },
    // This should align with real iOS translations in the Settings -> Bluetooth screen
    iOSPermissionImage: {
      myDevices: `MEINE GERÄTE`,
      devices: `GERÄTE`,
      myLaptop: `Mein Laptop`,
      // default message, not aligned to iOS
      connected: `Verbunden`,
      forgetThisDevice: `Dieses Gerät vergessen`,
      systemNotifications: `SYSTEM-BENACHRICHTUNGEN`,
      shareSystemNotifications: `Systembenachrichtigungen teilen`,
      showNotifications: `Benachrichtigungen anzeigen`,
      syncContacts: `Kontakte synchronisieren`
    },
    NoBrowserSupport: {
      title: `$t(common.appName) wird im Browser nicht unterstützt`,
      message: `Bitte verwenden Sie die Windows $t(common.appName) Anwendung`
    }
  },
  troubleshooting: {
    common: {
      ShowPermissionRequestOnYourPhone: `Berechtigungsanfrage auf Ihrem Telefon anzeigen`,
      phonePermissionSteps: `<ul>
      <li>  1. Öffne $t(gemeinsam. ppName) auf Ihrem Mobilgerät</li>
      <li>  2. Klicken Sie auf die Schaltfläche „Berechtigungen anzeigen“ unter</li>
      <li>  3. Genehmigt die Berechtigung für Ihr Telefon</li>
      </ul>`,
      onDismissedTitle: `Optionales Problem abgelehnt`,
      onDismissedText: `Wenn Sie es später initiieren möchten, überprüfen Sie bitte die Registerkarte Einstellungen`
    },
    step: {
      ApprovePermissionOnPhone: `$t(Fehlersuche.common.ShowPermissionRequestOnYourPhone)`,
      ApproveSystemSettingsPermissionOnPhone: `Systemberechtigungsanfrage anzeigen`,
      EnablePermissionOnPhoneSettings: `$t(Fehlersuche.common.ShowPermissionRequestOnYourPhone)`,
      UseDifferentFlavorOnPcOrPhone: `UseDifferentFlavorOnPcOrPhone`,
      RefreshWebPage: `Reload`,
      UpdatePhoneApp: ``,
      ConnectPcToInternet: `Verbinde PcToInternet`,
      ConnectPhoneToInternet: `Wiederholen`,
      ResumeSesssion: `Neu verbinden`,
      UseInThisWindow: `In diesem Fenster verwenden`,
      MoveDeviceToBtRange: `Stellen Sie sicher, dass Ihr Telefon im selben Raum ist wie Ihr PC`,
      LaunchBtSettings: `Bluetooth-Einstellungen`,
      CheckBtAdapter: `Überprüfen Sie Ihren Bluetooth-Adapter`,
      // <<-HPQD
      TurnOnBtInPhone: `Bitte stellen Sie sicher, dass Ihr Mobilgerät eingeschaltet ist und sich im selben Raum wie Ihr PC befindet.`,
      TogglePhoneBtOffAndOn: `Bitte schalten Sie Ihr Telefon Bluetooth aus und wieder ein.`,
      EnableContactAccessForBtDevice: `SMS verwenden und auf Ihre Kontakte zugreifen`,
      EnableMessagesAccessForBtDevice: `SMS verwenden und auf Ihre Kontakte zugreifen`,
      ShowMeHow: `Zeige mir wie`,
      ApproveCapturingPermissionDialogOnPhone: `$t(Fehlersuche.common.ShowPermissionRequestOnYourPhone)`,
      TryMirroringOrNotifActivationAgain: `Erneut Spiegeln starten`,
      ApprovePcNotifPermissionWithDialog: `Berechtigungsanfrage anzeigen`,
      ManuallyGrantPcNotifPermission: `ManuallyGrantPcNotifPermission`,
      AllowNotificationsManuallyHtml: `Ihre Benachrichtigungen sind gesperrt.<br>Drücken Sie die Sperrtaste in der Adressleiste und erlauben Sie Benachrichtigungen für $t(common.appName).`,
      RemovePhone: `Entfernen Sie das Telefon von $t(common.appName) indem Sie zu den Einstellungen gehen und auf Entfernen klicken.`,
      RemoveBtPairing: `Bluetooth erneut verbinden`,
      RebootPc: `Bitte starten Sie Ihren PC neu`,
      UnpairPcBt: {
        action: `Entkoppeln`
      },
      UnpairPcBle: `Unpair PC BLE.`,
      UnpairPhoneBt: `Diesen PC von den Bluetooth-Einstellungen Ihres Telefons vergessen`,
      UnpairPhoneBle: `Vergessen Sie diesen PC von den Bluetooth-Einstellungen Ihres iPhone.`,
      LaunchPhoneAppAncs: `Um die Ladezeit der Benachrichtigungen zu beschleunigen, öffnen Sie bitte die $t(common.appName) App auf Ihrem Telefon.`,
      CloseOtherBleApps: `Wenn das Problem weiterhin besteht, stellen Sie sicher, dass kein anderes Programm auf diesem PC über Bluetooth mit Ihrem Telefon verbunden ist.`,
      AncsPermissionNotShown: `Wenn Sie den Berechtigungs-Pop, oben auf der Telefon-App, nicht gesehen haben, versuchen Sie zum Startbildschirm des Telefons zu gelangen.`,
      ToggleAncsPermission: `Wenn die Erlaubnis in der Vergangenheit abgelehnt wurde:`,
      RequestAncsPermission: `Berechtigungsanfrage anzeigen`,
      UpdateWindows: `Bitte versuchen Sie, Windows zu aktualisieren.`,
      HandsfreeFirstTime: `Wenn der Zustimmungsdialog nicht erscheint, starten Sie bitte $tneu (common.appName).`,
      RemoveOtherApp: `Bitte deinstallieren Sie die App, starten Sie Ihren Rechner neu und versuchen Sie es erneut.`,
      GrantHfPermissionOnPc: `Windows-Einstellungen öffnen`,
      DisableHandsfreeOnOtherApp: `Bitte stellen Sie sicher, dass keine andere App berechtigt ist, Anrufe zu verarbeiten. Starten Sie $tneu (common.appName).`,
      FocusAssist: `Focus Assistent Einstellungen öffnen`
    },
    sms: {
      MessageNotSent: `Nachricht konnte nicht gesendet werden. Klicke zum wiederholen klicken.`
    },
    issue: {
      PcBtOff: {
        title: `PC Bluetooth ist deaktiviert.`,
        subtitleHtml: `Bitte schalten Sie es ein.`
      },
      PcBtUnavailable: {
        title: `Bluetooth ist nicht verfügbar`,
        subtitleHtml: ``
      },
      PhoneBtOff: {
        title: `Bluetooth ist deaktiviert.`,
        subtitleHtml: `Bitte schalten Sie es ein.`
      },
      BtDeviceNotSelected: {
        title: `Bitte öffnen Sie die mobile App und klicken Sie unten auf Paar`,
        subtitleHtml: ``
      },
      NoHandsFreePermissionsOnPc: {
        title: `$t(troubleshooting.issue.UnableToConnectToHandsfree.title)`,
        subtitleHtml: `<ul>
        <li>$t(common.appName) darf keine Anrufe verarbeiten.</li>
        <li>Bitte erteilen Sie diese Berechtigung in den Windows-Einstellungen. Dann starten Sie $tneu (common.appName).</li>
        </ul>`
      },
      NoToken: {
        title: `$t(troubleshooting.issue.UnableToConnectToHandsfree.title)`,
        subtitleHtml: `Telefonate werden für die Versionen 1903 und 1909 von Windows 10 nicht unterstützt.`
      },
      HandsfreeFirstTime: {
        title: `$t(troubleshooting.issue.UnableToConnectToHandsfree.title)`,
        subtitleHtml: `Bitte genehmigen Sie $t(common.appName) für Anrufe.`
      },
      HfDriversInstalled: {
        title: '$t(troubleshooting.issue.UnableToConnectToHandsfree.title)',
        subtitleHtml: "Eine andere App verhindert die Verwendung von Telefongesprächen. Bitte entfernen Sie die App, starten Sie Ihren Rechner neu und versuchen Sie es erneut."
      },
      BtHfOffOnPhone: {
        title: `Keine Verbindung zu Ihrem Telefon möglich`,
        subtitleHtml: `Stellen Sie sicher, dass Ihr Telefon in der Nähe ist und sein Bluetooth eingeschaltet ist.`
      },
      HfDisabledOnPhone: {
        title: ``,
        subtitleHtml: `<ul>
        <li><br></li>
        <li>Wenn das Problem weiterhin besteht, bitte führen Sie folgende Schritte durch:</li>
        <li>  1. Trennen Sie Ihr Telefon von den Bluetooth-Einstellungen Ihres PCs.</li>
        <li>  2. Trennen Sie Ihren PC mit den Bluetooth-Einstellungen Ihres Telefons.</li>
        <li>  3. Entkoppeln Sie Ihren PC und Ihr Telefon über $t(common.appName).</li>
        <li>  4. Verbinden Sie Ihren PC und rufen Sie erneut über $tan (gemeinsam. ppName).</li>
        </ul>`
      },
      DisableFocusAssist: {
        title: `$t(troubleshooting.issue.UnableToConnectToHandsfree.title)`,
        subtitleHtml: `Bitte stellen Sie sicher, dass Fokus-Assistent ausgeschaltet ist.\n $t(Fehlerbehebung.issue.HfDisabledOnPhone.subtitleHtml)`
      },
      UnableToConnectToHandsfree: {
        title: `Anrufe auf Ihrem PC tätigen und empfangen`,
        subtitleHtml: `Anrufe Ihres Telefons können nicht verwaltet werden`
      },
      HandsFreeCollision: {
        title: `$t(troubleshooting.issue.UnableToConnectToHandsfree.title)`,
        subtitleHtml: `Anrufe werden von einer anderen App verwaltet.`
      },
      FeatureHasNoCachedDataYet: {
        title: `Funktion ist nicht verfügbar, wenn nicht verbunden`,
        subtitleHtml: `Erneut verbinden, um diese Funktion zu nutzen`
      },
      FeatureUnavailableWhileSuspended: {
        title: `Nicht verfügbar während der Verbindung getrennt`,
        subtitleHtml: `Fortsetzen`
      },
      UnableToAccessMessagesViaBt: {
        title: `SMS verwenden und auf Ihre Kontakte zugreifen`,
        subtitleHtml: ``,
        leadTitle: `Aktiviere Zugriff auf Nachrichten in den Bluetooth-Einstellungen`
      },
      NoOptionalBtPairing: {
        title: `Um zusätzliche Funktionen zu erhalten, koppeln Sie bitte Ihr Mobiltelefon und Ihren PC per Bluetooth.`,
        subtitleHtml: ``,
        SmsReadOverBt: {
          title: `Um die Textnachrichten als gelesen zu markieren, koppeln Sie bitte Ihr Mobiltelefon und Ihren PC per Bluetooth.`,
          subtitleHtml: ``
        },
        Inputs: {
          title: `Um Ihr Handy mit der Maus und Tastatur zu steuern, koppeln Sie bitte Ihr Mobiltelefon und Ihren PC über Bluetooth.`,
          subtitleHtml: ``
        }
      },
      UnableToAccessContactsViaBt: {
        title: `SMS verwenden und auf Ihre Kontakte zugreifen`,
        subtitleHtml: ``,
        Sms: {
          title: `SMS verwenden und auf Ihre Kontakte zugreifen`,
          subtitleHtml: ``
        }
      },
      UnableToConnectViaBt: {
        title: `Keine Verbindung zu Ihrem Mobilgerät über Bluetooth`,
        subtitleHtml: `Bitte stellen Sie sicher, dass Ihr Mobilgerät eingeschaltet ist und sich im selben Raum wie Ihr PC befindet<br/>Wenn Sie das Bluetooth-Paar auf dem mobilen Gerät entfernt haben, bitte entkoppeln Sie das Mobiltelefon von Ihrem PC.`,
        SmsReadOverBt: {
          title: `Keine Verbindung zu Ihrem Mobilgerät über Bluetooth, um Nachrichten als gelesen zu markieren`,
          subtitleHtml: `$t(troubleshooting.issue.UnableToConnectViaBt.subtitleHtml)`
        }
      },
      NoCapturingPermission: {
        title: `Sehen Sie den Bildschirm Ihres Telefons auf Ihrem Computer!`,
        subtitleHtml: `Erlaube <strong>$t(common.appName)</strong> den Bildschirm zu erfassen`
      },
      NoCapturingPermissionAndRejected: {
        title: `Sehen Sie den Bildschirm Ihres Telefons auf Ihrem Computer!`,
        subtitleHtml: `Erlaube <strong>$t(common.appName)</strong> den Bildschirm zu erfassen`
      },
      NoNotifPermissionOnPc: {
        title: `Sehen Sie die Benachrichtigungen Ihres Telefons auf Ihrem Computer!`,
        subtitleHtml: `Erlaube dem Browser Benachrichtigungen anzuzeigen`
      },
      NoContactsPermissionOnPhone: {
        title: `Melden Sie Ihre Kontakte direkt von Ihrem Computer!`,
        subtitleHtml: `Erlaube <strong>$t(common.appName)</strong> auf Kontakte zuzugreifen`
      },
      NoSmsPermissionsOnPhone: {
        leadTitle: `Um Nachrichten auf Ihrem PC anzuzeigen, benötigt $t(common.appName) die Berechtigung zu Kontakten und SMS`,
        leadSubtitleHtml: ``,
        title: ``,
        subtitleHtml: `$t(Fehlersuche.common.phonePermissionSteps)`
      },
      NoAccessibilityPermissionOnPhone: {
        title: `Kann Maus oder Tastatur nicht verwenden um mit dem Telefon zu interagieren`,
        subtitleHtml: `Aktivieren Sie den Eingabedienst auf Ihrem Telefon, um Ihr Telefon von Ihrem Computer aus zu steuern`
      },
      NoNotifAccessPermissionsOnPhone: {
        title: `Sehen Sie die Benachrichtigungen Ihres Telefons auf Ihrem Computer!`,
        subtitleHtml: `Um die Benachrichtigungen deines Telefons zu sehen, musst du <strong>$t(common.appName)</strong> den Zugriff erlauben:`
      },
      // HPQD->>
      FlavorMismatch: {
        title: `Die <strong>$t(common.appName)</strong> Variante auf Ihrem Telefon stimmt nicht mit der auf Ihrem Computer überein`,
        subtitleHtml: `Bitte stellen Sie sicher, dass das gleiche Produkt sowohl auf dem Computer als auch auf dem Telefon verwendet wird`
      },
      LocalVersionOutdated: {
        title: `Die $t(common.appName) Webseite wurde aktualisiert`,
        subtitleHtml: `Aktualisiere $t(common.appName) in deinem Browser`
      },
      RemoteVersionOutdated: {
        title: `Update ist erforderlich`,
        subtitleHtml: `Die $t(common.appName) App auf Ihrem Telefon ist veraltet.<br/>Bitte aktualisieren Sie Ihre App, um fortzufahren.`
      },
      UnableToConnectWebRtc: {
        title: `Ihr Telefon ist möglicherweise nicht verbunden`,
        subtitleHtml: `Bitte stelle sicher, dass dein Telefon eine aktive Internetverbindung hat und starte $t(common.appName) darauf`
      },
      UnableToReachBackend: {
        title: `Computer nicht verbunden`,
        subtitleHtml: `Stellen Sie sicher, dass Ihr Computer eine aktive Internetverbindung hat`
      },
      OpenedInAnotherBrowserWindow: {
        title: `$t(common.appName) ist in einem anderen Fenster geöffnet`,
        subtitleHtml: `$t(common.appName) in diesem Fenster verwenden`
      },
      NoExternalStoragePermissionOnPhone: {
        leadTitle: `Um Fotos und Videos zu teilen, benötigt $t(common.appName) die Erlaubnis „Zugriff auf Fotos, Medien und Dateien“.`,
        leadSubtitleHtml: ``,
        title: ``,
        subtitleHtml: `<ul>
        <li>  1. Öffne $t(gemeinsam. ppName) auf Ihrem Mobilgerät</li>
        <li>  2. Klicken Sie auf die Schaltfläche „Berechtigungen anzeigen“ unter</li>
        <li>  3. Genehmigt die Berechtigung für Ihr Telefon</li>
        </ul>`
      },
      NoExternalStoragePermissionOnIos: {
        leadTitle: `Um Fotos und Videos zu teilen, benötigt $t(common.appName) die Erlaubnis, auf Ihre Fotos zuzugreifen.`,
        leadSubtitleHtml: ``,
        title: `Wie kann ich das Teilen von Medien auf Ihrem mobilen Gerät zulassen`,
        subtitleHtml: `<ul>
        <li>  1. Öffnen Sie die $t(gemeinsam. ppName) App auf Ihrem Mobilgerät</li>
        <li>  2. Klicken Sie auf die Schaltfläche „App-Einstellungen öffnen“ unter</li>
        <li>  3. Zugriff $t(gemeinsam. ppName) App-Einstellungen und stellen Sie sicher, dass Fotos gelesen und</li>
        <li>  Schreib-Option ausgewählt</li>
        </ul>`
      },
      NoSystemSettingsPermissionOnPhone: {
        title: `Drehen Sie Ihr Handy!`,
        subtitleHtml: `Aktivieren, um Ihr Telefon zu drehen.`
      },
      NoOverlayPermission: {
        title: `Verbinden Sie sich mit Ihrem Telefon von Ihrem Computer!`,
        subtitleHtml: `Um das Mitwirken mit Benachrichtigungen und Apps von Ihrem PC zu ermöglichen, benötigt $t(common.appName) die Erlaubnis, über andere Apps zu zeichnen.`
      },
      NoPushNotificationPermissionOnPhone: {
        title: ``,
        leadSubtitleHtml: `Wir empfehlen, Benachrichtigungen für ein besseres Erlebnis mit der App<br/>zu erlauben oder sicherzustellen, dass die App geöffnet ist, wenn Medien freigegeben werden.`,
        subtitleHtml: `<ul>
        <li>  1. Öffnen Sie die $t(gemeinsam. ppName) App auf Ihrem Mobilgerät</li>
        <li>  2. Klicken Sie auf die Schaltfläche „App-Einstellungen öffnen“ unter</li>
        <li>  3. Zugriff $t(gemeinsam. ppName) App-Einstellungen und stellen Sie sicher, dass Benachrichtigungen</li>
        <li>  aktiviert hat</li>
        </ul> </ul>`
      },
      // <<-HPQD
      PcBtUnpaired: {
        title: `PC Bluetooth wurde von Ihrem Telefon getrennt.`,
        subtitleHtml: ``
      },
      PcBleUnpaired: {
        title: `PC Bluetooth wurde von Ihrem Telefon getrennt.`,
        subtitleHtml: ``
      },
      PcBleStuck: {
        title: `Bluetooth-Verbindung fehlgeschlagen.`,
        subtitleHtml: `Die Bluetooth-Verbindung mit Ihrem Telefon ist instabil.`
      },
      PhoneBleUnpaired: {
        title: `Es gibt ein Problem beim Verbinden mit Ihrem iPhone über Bluetooth.`,
        subtitleHtml: `Wenn Sie Ihren PC von den iPhone-Bluetooth-Einstellungen entfernt haben (klicken Sie auf "Dieses Gerät vergessen") fahren Sie mit den Anweisungen fort.`
      },
      PcBle30SecondDisconnectionBug: {
        title: `Bluetooth-Verbindung fehlgeschlagen.`,
        subtitleHtml: `Die Bluetooth-Verbindung mit Ihrem Telefon ist instabil. Es wird empfohlen, Bluetooth nicht ein/aus zu schalten.`
      },
      UnableToConnectAncs: {
        title: `Verbinde mit Ihrem Telefon...`,
        subtitleHtml: ``
      },
      PermissionToConnectAncsNotRequested: {
        title: `Hol dir deine Telefon-Benachrichtigungen auf deinem PC`,
        subtitleHtml: `Wir benötigen Ihre Berechtigung für den Zugriff auf Benachrichtigungen<br/><br/>Klicken Sie <strong>Berechtigungsanfrage anzeigen</strong> um die Anfrage auf Ihrem Telefon anzuzeigen`
      },
      PermissionToConnectAncsNotDetermined: {
        title: `$t(troubleshooting.issue.PermissionToConnectAncsNoquested.title)`,
        subtitleHtml: `Wir benötigen deine Erlaubnis, um auf Benachrichtigungen zuzugreifen`
      },
      WaitBleDisconnection: {
        title: `$t(troubleshooting.issue.UnableToConnectViaBt.title)`,
        subtitleHtml: `Bitte schalten Sie Ihr Telefon Bluetooth aus und wieder ein.<br/>Wenn das Problem weiterhin besteht, stellen Sie sicher, dass kein anderes Programm auf diesem PC über Bluetooth mit Ihrem Telefon verbunden ist.`
      },
      NoBtDiscoveryPermission: {
        title: `$t(component.BtPairingHelper.subtitle)`,
        subtitleHtml: `<ul>
        <li>  1. Öffnen Sie die App auf Ihrem Mobilgerät</li>
        <li>  2. Klicken Sie auf $t(troubleshooting.common. howPermissionRequestOnYourPhone) unten</li>
        <li>  3. Genehmigung der auf Ihrem Telefon angegebenen Berechtigung</li>
        </ul>`
      },
      NoAncsPermission: {
        title: `Benachrichtigungen auf Ihrem PC anzeigen`,
        subtitleHtml: ``
      },
      UploadsNotSupported: {
        title: `Senden ist nicht verfügbar`,
        subtitleHtml: `Bitte warten Sie, bis der aktuelle Prozess beendet ist, bevor Sie fortfahren`
      }
    },
    actions: {
      ignore: {
        RequestAncsPermission: `Fertig`,
        AncsPermissionNotShown: `$t(Fehlersuche.actions.ignore.RequestAncsPermission)`,
        ToggleAncsPermission: `$t(Fehlersuche.actions.ignore.RequestAncsPermission)`
      },
      havingTrouble: {
        RequestAncsPermission: `Es gibt keine Anfrage am Telefon`
      }
    }
  },
  debug: {
    isRelay: "ist Relais"
  }
};
export default translation;