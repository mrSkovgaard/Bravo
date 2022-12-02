/*!
 * Bravo for Power BI
 * Copyright (c) SQLBI corp. - All rights reserved.
 * https://www.sqlbi.com
 
 * Persian Translation by: Mahyar Abidi - https://www.linkedin.com/in/mahyarabidi/
*/

import { Locale } from '../i18n';
import { strings as _ } from '../strings';

const locale: Locale = {

    locale: "fa", // DO NOT TRANSLATE
    enName: "Persian", // DO NOT TRANSLATE
    name: "فارسی",

    strings: {
        [_.addCtrlTitle]: "باز کردن",
        [_.aggregatedTableName]: "جداول تجمیعی",
        [_.AnalyzeModel]: "آنالیز مدل",
        [_.analyzeModelSummary]: `حجم دیتاست شما <strong>{size:bytes}</strong> بوده و شامل <strong>{count}</strong> ستون می باشد.`,
        [_.analyzeModelSummary2]: `, تعداد<span class="text-highlight"><strong>{count}</strong> ستون در مدل شما بدون مرجع می باشد</span>`,
        [_.appExtensionName]: "Bravo Template Editor", // DO NOT TRANSLATE
        [_.appName]: "Bravo for Power BI", // DO NOT TRANSLATE
        [_.appUpdateAvailable]: "نسخه جدید در دسترس می باشد: {version}",
        [_.appUpdateChangelog]: "سوابق تغییرات",
        [_.appUpdateDownload]: "دانلود",
        [_.appUpdateViewDetails]: "مشاهده جزئیات",
        [_.appUpToDate]: "Bravo به روز می باشد",
        [_.appVersion]: "نسخه {version}",
        [_.backupReminder]: "قبل از ادامه، از وجود نسخه پشتیبان اطمینان حاصل کنید - <b>برخی تغییرات امکان بازیابی نخواهند داشت</b>.",
        [_.BestPractices]: "بست پرکتیس",
        [_.canceled]: "لغو شده",
        [_.changeStatusAdded]: "A",
        [_.changeStatusAddedTitle]: "اضافه شد",
        [_.changeStatusDeleted]: "D",
        [_.changeStatusDeletedTitle]: "حذف شد",
        [_.changeStatusModified]: "M",
        [_.changeStatusModifiedTitle]: "اصلاح شد",
        [_.checking]: "در حال چک کردن...",
        [_.clearCtrlTitle]: "پاک کردن",
        [_.closeCtrlTitle]: "بستن",
        [_.closeOtherTabs]: "بستن تب های دیگر",
        [_.closeTab]: "بستن",
        [_.collapseAllCtrlTitle]: "جمع کردن همه",
        [_.columnExportedCompleted]: "خروجی این جدول با موفقیت انجام شد.",
        [_.columnExportedFailed]: "بر اساس یک خطای ناشناخته، خروجی این جدول انجام نشد.",
        [_.columnExportedTruncated]: "با توجه به محدودیت تعداد سطر های اکسل، سطرهای اضافه از خروجی حذف شدند.",
        [_.columnMeasureFormatted]: "فرمت این سنجه قبلا انجام شده است.",
        [_.columnMeasureNotFormattedTooltip]: "فرمت این سنجه انجام نشده است.",
        [_.columnMeasureWithError]: "این سنجه شامل خطا می باشد.",
        [_.columnUnreferencedExplanation]: `<span class="text-highlight">ستون‌های بدون مرجع</span> معمولاً می‌توانند از مدل حذف شوند تا عملکرد را بهینه کنند. قبل از حذف آنها، مطمئن شوید که از این ستون ها در هیچ گزارشی استفاده نمی کنید، که Bravo نمی تواند آنها را تعیین کند.`,
        [_.columnUnreferencedTooltip]: "این ستون در مدل شما ارجاع داده نشده است",
        [_.confirmTabCloseMessage]: "به نظر می رسد تغییرات این سند را ذخیره نکرده اید.<br>آیا مطمئن هستید که آن را می بندید؟",
        [_.connectBrowse]: "مرور",
        [_.connectDatasetsTableEndorsementCol]: "تأیید",
        [_.connectDatasetsTableNameCol]: "نام",
        [_.connectDatasetsTableOwnerCol]: "مالک",
        [_.connectDatasetsTableWorkspaceCol]: "فضای کاری",
        [_.connectDialogAttachPBIMenu]: "مجموعه داده ها در powerbi.com",
        [_.connectDialogConnectPBIMenu]: "گزارش‌های فعال در Power BI Desktop",
        [_.connectDialogOpenVPXMenu]: "VPAX فایل های",
        [_.connectDialogTitle]: "باز کردن",
        [_.connectDragFile]: "فایل VPAX را به اینجا بکشید<br>یا فایل را از کامپیوتر خود انتخاب کنید",
        [_.connectNoReports]: "گزارش فعالی یافت نشد.<br>گزارشی را با Power BI Desktop باز کنید و منتظر بمانید تا اینجا ظاهر شود.",
        [_.copiedErrorDetails]: "کپی شد!",
        [_.copy]: "کپی",
        [_.copyErrorDetails]: "خطای کپی",
        [_.copyFormulaCtrlTitle]: "کپی فرمت سنجه",
        [_.copyMessage]: "پیغام کپی",
        [_.copyright]: "کلیه حقوق محفوظ می باشد.",
        [_.createIssue]: "گزارش مشکل",
        [_.cut]: "بریدن",
        [_.dataUsageLink]: "How your data is used?", 
        [_.dataUsageMessage]: `برای قالب‌بندی کد شما، Bravo سنجه های این مجموعه داده را از طریق یک اتصال ایمن به DAX Formatter، سرویسی که توسط SQLBI مدیریت می‌شود، ارسال می‌کند<p><strong>این سرویس داده‌های شما را در هیچ کجا ذخیره نمی‌کند.</strong></p><p>برخی اطلاعات مانند پرکاربردترین توابع DAX، شاخص پیچیدگی و میانگین طول پرس و جو را می توان برای اهداف آماری ذخیره کرد.</p>`,
        [_.dataUsageTitle]: "داده های شما چگونه استفاده می شود؟",
        [_.DaxFormatter]: "فرمت DAX",
        [_.daxFormatterAgreement]: "برای فرمت DAX، Bravo سنجه های شما را به سرویس DAX Formatter ارسال می‌کند.",
        [_.daxFormatterAnalyzeConfirm]: "برای انجام تجزیه و تحلیل، Bravo باید تمام اقدامات را به سرویس DAX Formatter ارسال کند. آیا مطمئن هستید که ادامه می دهید؟",
        [_.daxFormatterAutoPreviewOption]: "پیش نمایش خودکار",
        [_.daxFormatterFormat]: "فرمت انتخاب شده ها",
        [_.daxFormatterFormatDisabled]: "فرمت (پشتیبانی نشده)",
        [_.daxFormatterFormattedCode]: "فرمت شده (نمایش)",
        [_.daxFormatterOriginalCode]: "جاری",
        [_.daxFormatterPreviewAllButton]: "نمایش همه سنجه ها",
        [_.daxFormatterPreviewButton]: "نمایش",
        [_.daxFormatterPreviewDesc]: "برای ایجاد پیش نمایش، Bravo باید این سنجه را به سرویس DAX Formatter ارسال کند.",
        [_.daxFormatterSuccessSceneMessage]: "تبریک می‌گویم, <strong>{count} سنجه</strong> با موفقیت فرمت شد.",
        [_.daxFormatterSummary]: `مجموعه داده شما شامل {count} سنجه می باشد: <span class="text-error"><strong>{errors:number}</strong> شامل خطا</strong></span>, <span class="text-highlight"><strong>{formattable:number}</strong> قابل فرمت</span>, <strong>{analyzable:number}</strong> برای آنالیز (<span class="link manual-analyze">آنالیز را انجام بده</span>).`,
        [_.daxFormatterSummaryNoAnalysis]: `مجموعه داده شما شامل <strong>{count}</strong> سنجه می باشد: <span class="text-error"><strong>{errors:number}</strong> شامل خطا</strong></span> و <span class="text-highlight"><strong>{formattable:number}</strong> قابل فرمت.</span>`,
        [_.defaultTabName]: "بدون عنوان",
        [_.devCreateTemplateDialogOk]: "ایجاد",
        [_.devCreateTemplateLabelModel]: "بر مبنای",
        [_.devCreateTemplateLabelName]: "نام الگو",
        [_.devCreateTemplateNotes]: "برای انتخاب پوشه ای که در آن پروژه کد ویژوال استودیو حاوی الگوی جدید ذخیره می شود، روی <strong>ایجاد</strong> کلیک کنید.",
        [_.devCreateTemplateTitle]: "الگوی تاریخ جدید",
        [_.devDefaultTemplateName]: "بدون عنوان",
        [_.devShowInFolder]: "نمایش در File Explorer",
        [_.devTemplateRemoveConfirmation]: "الگوی <b>{template}</b> از این لیست حذف می‌شود، اما تمامی فایل‌های موجود در سیستم حفظ خواهند شد.<br>آیا مطمئن هستید که ادامه می‌دهید؟",
        [_.devTemplatesBrowse]: "مرور",
        [_.devTemplatesColAction]: "عملکردها",
        [_.devTemplatesColName]: "الگو",
        [_.devTemplatesColType]: "نوع",
        [_.devTemplatesCreate]: "الگوی جدید",
        [_.devTemplatesEdit]: "ویرایش",
        [_.devTemplatesEditTitle]: "ویرایش در کد ویژوال استودیو",
        [_.devTemplatesEmpty]: "هیچ الگوی سفارشی تاریخ یافت نشد.",
        [_.devTemplatesNotAvailable]: "این الگو دیگر در دسترس نیست.",
	[_.devTemplatesRemove]: "حذف",
        [_.devTemplatesTypeOrganization]: "سازمان",
        [_.devTemplatesTypeUser]: "کاربر",
        [_.devTemplatesVSCodeDownload]: "دانلود کد ویژوال استودیو",
        [_.devTemplatesVSCodeExtensionDownload]: "دانلود پسوند {extension}",
        [_.devTemplatesVSCodeMessage]: "<p>پروژه الگوی تاریخ اکنون با کد ویژوال استودیو باز می شود و نیاز به کامپایل شدن <b>{extension}</b> دارد.</p><p>اگر روی سیستم شما موجود نیست، لطفاً آن را دانلود نمایید:</p>",
        [_.devTemplatesVSCodeTitle]: "باز کردن با Visual Studio Code",
        [_.dialogCancel]: "انصفرا",
        [_.dialogContinue]: "ادامه",
        [_.dialogNeverShowAgain]: "دیگر نمایش نده",
        [_.dialogOK]: "OK",
        [_.dialogOpen]: "باز کردن",
        [_.docLimited]: "محدود",
        [_.docLimitedTooltip]: "همه ویژگی ها در این نسخه موجود نیست.",
        [_.documentation]: "مستندسازی",
        [_.doneCtrlTitle]: "انجام شد",
        [_.emailAddress]: "آدرس ایمیل",
        [_.emailAddressPlaceholder]: "آدرس ایمیل خود را وارد نمایید",
        [_.error]: "خطا",
        [_.errorAborted]: "عملیات متوقف شد.",
        [_.errorAnalysisServicesConnectionFailed]: "مشکل اتصال با سرور رخ داده است.",
        [_.errorCheckForUpdates]: "نمی توان برای به روز رسانی ها بررسی کرد - سرور راه دور قابل دسترسی نیست.",
        [_.errorConnectionUnsupported]: "اتصال به منبع درخواستی پشتیبانی نمی شود.",
        [_.errorDatasetConnectionUnknown]: "اتصال نامشخص.",
        [_.errorDatasetsEmptyListing]: "گزارش های باز موجود نیست.",
        [_.errorDatasetsListing]: "بازیابی لیست مجموعه داده های Power BI Service امکان پذیر نیست.",
        [_.errorExportDataFileError]: "هنگام خروجی داده مشکلی رخ داده است. لطفاً دوباره امتحان کنید.",
        [_.errorGetEnvironments]: "لطفا یک حساب Power BI معتبر وارد کنید.",
        [_.errorManageDateNoTemplates]: "الگوهای تاریخ در سیستم وجود ندارد. بررسی کنید که آیا ادمین سیستم آنها را غیرفعال کرده است.",
        [_.errorManageDateTemplateError]: "خطا در همگام اجرا رخ داده است: DAX template engine.",
        [_.errorNetworkError]: "شما به اینترنت متصل نیستید.",
        [_.errorNone]: "خطای نامشخص.",
        [_.errorNotAuthorized]: "شما مجاز به مشاهده این منبع نیستید.",
        [_.errorNotConnected]: "شما به Power BI متصل نیستید - لطفاً برای ادامه وارد شوید.",
        [_.errorNotFound]: "نمی توان به منبع مشخص شده متصل شد.",
        [_.errorPathNotFound]: "مسیر پیدا نشد یا دسترسی باز کردن آن را ندارید.",
        [_.errorReportConnectionUnknown]: "اتصال نامعتبر.",
        [_.errorReportConnectionUnsupportedAnalysisServicesCompatibilityMode]: "حالت سازگاری Power BI Desktop Analysis Services  روی PowerBI تنظیم نشده است.",
        [_.errorReportConnectionUnsupportedAnalysisServicesConnectionNotFound]: "اتصال TCP مربوط به Power BI Desktop Analysis Services یافت نشد.",
        [_.errorReportConnectionUnsupportedAnalysisServicesProcessNotFound]: "فرآیند پردازش Power BI Desktop Analysis Services (Process Instance) یافت نشد.", 
        [_.errorReportConnectionUnsupportedConnectionException]: "در هنگام اتصال به Power BI Desktop Analysis Services instance خطایی رخ داده است.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionEmpty]: "سرویس Power BI Desktop Analysis Services instance شامل هیچ دیتابیسی نمی باشد. از طریق آیکون Bravo، منوی ابزارهای خارجی، به Power BI Desktop متصل شوید.",
        [_.errorReportConnectionUnsupportedDatabaseCollectionUnexpectedCount]: "سرویس Power BI Desktop Analysis Services instance شامل بیش از یک دیتابیس ناشناخته می باشد.",
        [_.errorReportConnectionUnsupportedProcessNotReady]: "فرآیند Power BI Desktop در حال اجرا بوده و یا Analysis Services instance هنوز آماده سرویس دهی نیست.", 
        [_.errorReportsEmptyListing]: "هیچ گزارش باز نشده ای موجود نیست.",
        [_.errorRetry]: "تلاش مجدد",
        [_.errorSignInMsalExceptionOccurred]: "خطای غیرمنتظره در درخواست ورود به سیستم.",
        [_.errorSignInMsalTimeoutExpired]: "درخواست ورود به سیستم لغو شد زیرا دوره وقفه قبل از تکمیل عملیات منقضی شده بود.",
        [_.errorTemplateAlreadyExists]: "الگوی دیگری با همان مسیر/نام از قبل وجود دارد: <br><b>{name}</b>",
        [_.errorTimeout]: "زمان پایان درخواست.",
        [_.errorTitle]: "اوه...",
        [_.errorTOMDatabaseDatabaseNotFound]: "پایگاه داده در مجموعه وجود ندارد یا کاربر به آن دسترسی ندارد.",
        [_.errorTOMDatabaseUpdateConflictMeasure]: "به روز رسانی درخواستی با وضعیت فعلی منبع هدف مغایرت دارد.",
        [_.errorTOMDatabaseUpdateErrorMeasure]: "به روز رسانی درخواستی انجام نشد زیرا یک یا چند سنجه حاوی خطا هستند.", 
        [_.errorTOMDatabaseUpdateFailed]: "به روز رسانی هنگام ذخیره تغییرات Local انجام شده در مدل، در سرور پایگاه داده انجام نشد.",
        [_.errorTryingToUpdateMeasuresWithErrors]: `به‌روزرسانی درخواستی انجام نشد زیرا سنجه های زیر حاوی خطا می باشند:<br><strong>{measures}</strong>`,
        [_.errorUnhandled]: "خطای ناشناخته - لطفاً آن را گزارش کنید و شناسه ردیابی را در صورت وجود ارائه دهید.",
        [_.errorUnspecified]: "خطای نامشخص.",
        [_.errorUserSettingsSaveError]: "نمی توان تنظیمات را ذخیره کرد.",
        [_.errorVpaxFileExportError]: "هنگام خروجی گرفتن از فایل VPAX خطایی رخ داده است.",
        [_.errorVpaxFileImportError]: "هنگام وارد کردن فایل VPAX خطایی رخ داده است.",
        [_.expandAllCtrlTitle]: "باز کردن همه",
        [_.ExportData]: "خروجی گرفتن",
        [_.exportDataCSVCustomDelimiter]: "جداکننده فیلد سفارشی",
        [_.exportDataCSVDelimiter]: "جدا کننده فیلدها",
        [_.exportDataCSVDelimiterComma]: "ویرگول",
        [_.exportDataCSVDelimiterDesc]: `جداکننده فیلد را انتخاب کنید. <em>اتوماتیک</em> از کاراکتر پیش فرض سیستم شما استفاده می کند.`,
        [_.exportDataCSVDelimiterOther]: "سایر...",
        [_.exportDataCSVDelimiterPlaceholder]: "کاراکتر",
        [_.exportDataCSVDelimiterSemicolon]: "نقطه ویرگول",
        [_.exportDataCSVDelimiterSystem]: "اتوماتیک",
        [_.exportDataCSVDelimiterTab]: "Tab",
        [_.exportDataCSVEncoding]: "رمزگذاری",
        [_.exportDataCSVEncodingDesc]: "",
        [_.exportDataCSVFolder]: "ذخیره در زیرپوشه",
        [_.exportDataCSVFolderDesc]: "ذخیره اکسل خروجی گرفته شده در زیرپوشه.",
        [_.exportDataCSVQuote]: "رشته ها را در دو گیومه قرار دهید",
        [_.exportDataCSVQuoteDesc]: "اطمینان حاصل کنید که هر رشته در گیومه های دوتایی محصور شده است.",
        [_.exportDataExcelCreateExportSummary]: "خلاصه خروجی گرفتن",
        [_.exportDataExcelCreateExportSummaryDesc]: "یک شیت در اکسل به عنوان خلاصه عملیات خروجی اضافه کن",
        [_.exportDataExport]: "خروجی انتخاب شده",
        [_.exportDataExportAs]: "خروجی گرفتن به عنوان",
        [_.exportDataExportAsDesc]: "",
        [_.exportDataExporting]: "در حال خروجی گرفتن جدول {table}...",
        [_.exportDataExportingDone]: "انجام شد!",
        [_.exportDataNoColumns]: "امکان خروجی گرفتن از جدول وجود ندارد، چون شامل هیچ ستونی نمی باشد.",
        [_.exportDataNotQueryable]: "این جدول نمی تواند خروجی گرفته شود زیرا حاوی یک یا چند ستون محاسبه شده با عبارت نامعتبر یا ستون هایی است که باید دوباره محاسبه شوند.",
        [_.exportDataOpenFile]: "باز کردن فایل خروجی گرفته شده",
        [_.exportDataOpenFolder]: "باز کردن فولدر خروجی گرفته شده",
        [_.exportDataOptions]: "تنظیمات خروجی فایل",
        [_.exportDataStartExporting]: "در حال آماده سازی...",
        [_.exportDataSuccessSceneMessage]: "<strong>{count}/{total} جدول</strong> با موفقیت خروجی گرفته شدند.",
        [_.exportDataSummary]: "مجموعه دیتای شما شامل <strong>{count} جدول می باشد</strong> که می تواند خروجی گرفته شود.",
        [_.exportDataTruncated]: "این جدول دارای تعداد زیادی ردیف است. فقط یک میلیون ردیف اول را می توان به اکسل خروجی گرفت. از فرمت CSV برای خروجی گرفتن تمام ردیف های جدول استفاده کنید.",
        [_.exportDataTypeCSV]: "CSV (Comma-separated values)",
        [_.exportDataTypeXLSX]: "Excel Spreadsheet",
        [_.failed]: "ناموفق",
        [_.filterMeasuresWithErrorsCtrlTitle]: "فقط نمایش سنجه های دارای خطا",
        [_.filterUnrefCtrlTitle]: "فقط نمایش ستون های ارجاع داده نشده",
        [_.formattingMeasures]: "در حال فرمت سنجه ها...",
        [_.goBackCtrlTitle]: "انصراف و بازگشت",
        [_.groupByTableCtrlTitle]: "گروه بندی بر اساس جدول",
        [_.helpConnectVideo]: "چگونه متصل شوم؟",
        [_.helpCtrlTitle]: "راهنما",
        [_.helpOptions]: "تنظیمات",
        [_.helpUserInterface]: "رابط کاربری",
        [_.helpTemplates]: "الگوهای تاریخ",
        [_.hideUnsupportedCtrlTitle]: "فقط مواردی که پشتیبانی می شود",
        [_.less]: "کمتر",
        [_.license]: "تحت مجوز MIT منتشر شده است.",
        [_.loading]: "در حال بارگذاری...",
        [_.ManageDates]: "مدیریت تاریخ ها",
        [_.manageDatesApplyCtrlTitle]: "اعمال تغییرات",
        [_.manageDatesAuto]: "اتوماتیک",
        [_.manageDatesAutoScan]: "اسکن اتوماتیک",
        [_.manageDatesAutoScanActiveRelationships]: "ارتباط های فعال",
        [_.manageDatesAutoScanDesc]: "گزینه <em>اسکن کامل</em> را برای اسکن کردن کلیه ستون ها شامل ستون های تاریخ انتخاب کنید. برای انتخاب ستون ها می توانید از گزینه <em>انتخاب ستون...</em> استفاده کنید.",
        [_.manageDatesAutoScanDisabled]: "غیرفعال",
        [_.manageDatesAutoScanFirstYear]: "سال اول",
        [_.manageDatesAutoScanFirstYearDesc]: "",
        [_.manageDatesAutoScanFull]: "اسکن کامل",
        [_.manageDatesAutoScanInactiveRelationships]: "ارتباط های غیرفعال",
        [_.manageDatesAutoScanLastYear]: "سال آخر",
        [_.manageDatesAutoScanLastYearDesc]: "",
        [_.manageDatesAutoScanSelectedTablesColumns]: "انتخاب ستون...",
        [_.manageDatesBrowserPlaceholder]: "هیچ آیتمی برای ویرایش وجود ندارد.",
        [_.manageDatesCalendarDesc]: "یک الگوی تقویم را برای اعمال در این مدل انتخاب کنید. Bravo جداول مورد نیاز را ایجاد می کند یا آنها را به روز می کند در حالی که روابط موجود را دست نخورده نگه می دارد.", 
        [_.manageDatesCalendarTemplateName]: "الگو",
        [_.manageDatesCalendarTemplateNameDesc]: "برای تقویم بر اساس ماه ‌های مختلف، <em>ماهانه</em> را برای تقویم انتخاب کنید. گزینه  <em>هفتگی</em> را برای تقویم‌های 445-454-544-ISO تنظیم کنید. از گزینه  <em>سفارشی</em> برای تقویم‌های منعطف با طول متغیر استفاده کنید.",
        [_.manageDatesCreatingTables]: "به روز رسانی مدل...",
        [_.manageDatesDatesDesc]: "قالب و محل تاریخ ها را در مدل خود پیکربندی کنید.",
        [_.manageDatesDatesTableDesc]: "این جدولی است که در گزارش های تاریخ استفاده می شود.",
        [_.manageDatesDatesTableName]: "جدول تاریخ ها",
        [_.manageDatesDatesTableReferenceDesc]: "این جدول پنهان حاوی تمام توابع DAX است که برای تولید تاریخ ها استفاده می شود.",
        [_.manageDatesDatesTableReferenceName]: "جدول تعریف تاریخ ها",
        [_.manageDatesHolidaysDesc]: "تعطیلات را به مدل خود اضافه کنید. Bravo جداول مورد نیاز را ایجاد می کند یا آنها را به روز می کند و در عین حال روابط موجود را دست نخورده نگه می دارد.",
        [_.manageDatesHolidaysEnabledDesc]: "جدول تعطیلات را به مدل خود اضافه کنید.",
        [_.manageDatesHolidaysEnabledName]: "تعطیلات",
        [_.manageDatesHolidaysTableDefinitionDesc]: "این جدول پنهان حاوی تمام توابع DAX است که برای تولید تاریخ تعطیلات استفاده می شود.",
        [_.manageDatesHolidaysTableDefinitionName]: "جدول تعریف تعطیلات",
        [_.manageDatesHolidaysTableDesc]: "این جدولی است که در گزارش های تعطیلات استفاده می شود.",
        [_.manageDatesHolidaysTableName]: "جدول تعطیلات",
        [_.manageDatesIntervalDesc]: "یک فاصله زمانی برای مدل خود انتخاب کنید.",
        [_.manageDatesISOCountryDesc]: "",
        [_.manageDatesISOCountryName]: "کشور برای محاسبات تعطیلات",
        [_.manageDatesISOCustomFormatDesc]: "با استفاده از تگ زبان IETF BCP 47 یک قالب منطقه ای را وارد کنید. به عنوان مثال. en-US",
        [_.manageDatesISOCustomFormatName]: "فرمت دلخواه",
        [_.manageDatesISOFormatDesc]: "قالب منطقه ای تاریخ ها را انتخاب کنید.",
        [_.manageDatesISOFormatName]: "قالب منطقه ای",
        [_.manageDatesISOFormatOther]: "سایر...",
        [_.manageDatesISOFormatOtherPlaceholder]: "منطقه",
        [_.manageDatesManageTemplates]: "مدیریت الگوها",
        [_.manageDatesMenuCalendar]: "تقویم",
        [_.manageDatesMenuDates]: "تاریخ ها",
        [_.manageDatesMenuHolidays]: "تعطیلات",
        [_.manageDatesMenuInterval]: "دوره زمانی",
        [_.manageDatesMenuPreviewCode]: "فرمول",
        [_.manageDatesMenuPreviewModel]: "تغییرات مدل",
        [_.manageDatesMenuPreviewTable]: "دیتای نمونه",
        [_.manageDatesMenuPreviewTreeDate]: "تاریخ ها",
        [_.manageDatesMenuPreviewTreeDateHolidays]: "تاریخ ها & تعطیلات",
        [_.manageDatesMenuPreviewTreeTimeIntelligence]: "محاسبات زمانی",
        [_.manageDatesMenuTimeIntelligence]: "محاسبات زمانی",
        [_.manageDatesModelCheck]: "چک کردن مدل",
        [_.manageDatesPreview]: "نمایش",
        [_.manageDatesPreviewCtrlTitle]: "نمایش تغییرات",
        [_.manageDatesSampleData]: "دیتای نمونه",
        [_.manageDatesSampleDataError]: "دیتای نمونه قابلیت ایجاد ندارند.",
        [_.manageDatesStatusCompatible]: `<div class="hero">این مدل از قبل حاوی تعدادی <b>جدول تاریخ سازگار</b> با Bravo است.</div>اگر چیزی را در اینجا تغییر دهید، این جداول و آنها به روز می شوند. روابط دست نخورده باقی خواهند ماند`,
        [_.manageDatesStatusError]: `<div class="hero">تنظیمات فعلی قابل اعمال نیستند.</div>{error}`,
        [_.manageDatesStatusIncompatible]: `<div class="hero">این مدل حاوی تعدادی <b>جدول تاریخ است که با Bravo سازگار نیستند</b>.</div>برای ایجاد تغییرات، باید نام دیگری برای آن انتخاب کنید. جداول <b>تاریخ</b> و/یا <b>تعطیلات</b>.`,
        [_.manageDatesStatusNotAvailable]: `<div class="hero">این مدل دیگر در دسترس نیست.</div> سعی کنید برنامه را مجددا راه اندازی کنید.`,
        [_.manageDatesStatusOk]: `<div class="hero">این مدل <b>با ویژگی مدیریت تاریخ‌ها سازگار است</b>.</div>می‌توانید جداول تاریخ جدیدی را بدون نگرانی در مورد پیدا شدن مشکل در سنجه ها یا گزارش‌ها ایجاد کنید.`,
        [_.manageDatesSuccessSceneMessage]: "تبریک، مدل شما با موفقیت به روز رسانی شد.",
        [_.manageDatesTemplateFirstDayOfWeek]: "اولین روز هفته",
        [_.manageDatesTemplateFirstDayOfWeekDesc]: "برای تقویم استاندارد، انتخاب کنید: <em>دوشنبه</em>.",
        [_.manageDatesTemplateFirstFiscalMonth]: "اولین ماه سال",
        [_.manageDatesTemplateFirstFiscalMonthDesc]: "برای تقویم استاندارد، انتخاب کنید: <em>ژانویه</em>.",
        [_.manageDatesTemplateMonthsInYear]: "ماه های سال",
        [_.manageDatesTemplateMonthsInYearDesc]: "",
        [_.manageDatesTemplateNameConfig01]: "استاندارد",
        [_.manageDatesTemplateNameConfig02]: "استاندارد - مالی",
        [_.manageDatesTemplateNameConfig03]: "ماهانه",
        [_.manageDatesTemplateNameConfig04]: "ماهانه - مالی",
        [_.manageDatesTemplateNameConfig05]: "سفارشی",
        [_.manageDatesTemplateNameConfig06]: "سفارشی - مالی",
        [_.manageDatesTemplateNameConfig07]: "هفتگی",
        [_.manageDatesTemplateNameCurrent]: "جاری",
        [_.manageDatesTemplateQuarterWeekType]: "سیستم هفتگی",
        [_.manageDatesTemplateQuarterWeekTypeDesc]: "",
        [_.manageDatesTemplateTypeStartFiscalYear]: "تاریخ تعیین کننده سال مالی",
        [_.manageDatesTemplateTypeStartFiscalYearDesc]: "برای تقویم هفتگی، انتخاب کنید: <em>انتهای سال</em>.",
        [_.manageDatesTemplateTypeStartFiscalYearFirst]: "ابتدای سال",
        [_.manageDatesTemplateTypeStartFiscalYearLast]: "انتهای سال",
        [_.manageDatesTemplateWeeklyType]: "آخرین روز کاری سال",
        [_.manageDatesTemplateWeeklyTypeDesc]: "اگر هفته شما از یکشنبه شروع می شود، آخرین روز هفته شنبه است. اگر <em>انتهای سال</em> را انتخاب کنید، سال مالی در آخرین شنبه آخرین ماه سال به پایان می رسد. در غیر این صورت، سال مالی در نزدیکترین شنبه به آخرین روز آخرین ماه به پایان می رسد - ممکن است در سال آینده باشد. برای ایزو هفتگی، <em>نزدیک به انتهای سال</em> را تنظیم کنید.",
        [_.manageDatesTemplateWeeklyTypeLast]: "انتهای سال",
        [_.manageDatesTemplateWeeklyTypeNearest]: "نزدیک به انتهای سال",
        [_.manageDatesTimeIntelligenceDesc]: "متداول ترین عملکردهای Time Intelligence DAX موجود در مدل خود را ایجاد کنید.",
        [_.manageDatesTimeIntelligenceEnabledDesc]: "",
        [_.manageDatesTimeIntelligenceEnabledName]: "Time Intelligence توابع",
        [_.manageDatesTimeIntelligenceTargetMeasuresAll]: "تمام سنجه ها",
        [_.manageDatesTimeIntelligenceTargetMeasuresChoose]: "سنجه را انتخاب کنید...",
        [_.manageDatesTimeIntelligenceTargetMeasuresDesc]: "سنجه مورد استفاده برای تولید توابع Time Intelligence را انتخاب کنید.",
        [_.manageDatesTimeIntelligenceTargetMeasuresName]: "سنجه های هدف",
        [_.manageDatesYearRange]: "بازه تاریخ",
        [_.manageDatesYearRangeDesc]: "نحوه تعیین فاصله تاریخ مدل را انتخاب کنید. برای استفاده از اسکن خودکار، <em>سال اول</em> و/یا <em>سال گذشته</em> را خالی بگذارید.",
        [_.menuCtrlTitle]: "باز کردن/بستن منو",
        [_.minimizeCtrlTitle]: "مینیمایز",
        [_.modelLanguage]: "زبان مدل ({culture})",
        [_.more]: "بیشتر",
        [_.notificationCtrlTitle]: "اعلانات",
        [_.notificationsTitle]: "{count} اعلان",
        [_.openSourcePayoff]: "{appName} یک ابزار متن باز است که توسط SQLBI و انجمن Github توسعه یافته و نگهداری می شود. به ما بپیوندید",
        [_.openWithDaxFormatterCtrlTitle]: "فرمت آنلاین توسط DAX Formatter",  
        [_.optionAccount]: "Power BI حساب",
        [_.optionAccountDescription]: "حساب را برای دسترسی به مجموعه داده های آنلاین Power BI تنظیم کنید.",
        [_.optionBrowserAuthentication]: "احراز هویت در مرورگر",
        [_.optionBrowserAuthenticationDescription]: "احراز هویت با استفاده از مرورگر پیش فرض. این یک روش ورود جایگزین است که برای حل مشکلات با احراز هویت دو مرحله ای مفید است.",
        [_.optionCheckForUpdates]: "بررسی به روزرسانی ها بصورت خودکار",
        [_.optionDev]: "فعال کردن الگوهای تاریخ",
        [_.optionDevDescription]: "",
        [_.optionDiagnostic]: "سطح اشکال یابی",
        [_.optionDiagnosticDescription]: "خطاها و گزارش‌ها را در یک بخش عیب‌یابی نشان دهید. برای ثبت تنها چند پیام، <em>Basic</em> را انتخاب کنید. <em>Verbose</em> همه پیام‌ها را ثبت می‌کند.",
        [_.optionDiagnosticLevelBasic]: "Basic",
        [_.optionDiagnosticLevelNone]: "None",
        [_.optionDiagnosticLevelVerbose]: "Verbose",
        [_.optionDiagnosticMore]: "برای اعلان خطا، استفاده نمایید",
        [_.optionFormattingBreaks]: "Name-Expression شکستن",
        [_.optionFormattingBreaksAuto]: "اتوماتیک",
        [_.optionFormattingBreaksDescription]: "نحوه جداسازی نام و عبارت اندازه گیری را انتخاب کنید. <em>اتوماتیک</em> را برای تعیین خودکار سبک استفاده شده در مدل تنظیم کنید.",
        [_.optionFormattingBreaksInitial]: "شکست خط",
        [_.optionFormattingBreaksNone]: "همان خط",
        [_.optionFormattingIncludeTimeIntelligence]: "شامل Time Intelligence",
        [_.optionFormattingIncludeTimeIntelligenceDescription]: "شامل سنجه های ایجاد شده به طور اتوماتیک توسط مدیریت تاریخ برای Time Intelligence.",
        [_.optionFormattingLines]: "خطوط",
        [_.optionFormattingLinesDescription]: "خطوط کوتاه یا طولانی را انتخاب کنید.",
        [_.optionFormattingLinesValueLong]: "خطوط طولانی",
        [_.optionFormattingLinesValueShort]: "خطوط کوتاه",
        [_.optionFormattingPreview]: "پیش نمایش خودکار",
        [_.optionFormattingPreviewDescription]: "برای تولید پیش‌نمایش، سنجه ها را به‌طور خودکار به DAX Formatter ارسال کنید.",
        [_.optionFormattingSeparators]: "جداکننده ها",
        [_.optionFormattingSeparatorsDescription]: "جداکننده های اعداد و لیست ها را انتخاب کنید.",
        [_.optionFormattingSeparatorsValueAuto]: "اتوماتیک",
        [_.optionFormattingSeparatorsValueEU]: "A; B; C; 1234,00",
        [_.optionFormattingSeparatorsValueUS]: "A, B, C, 1234.00",
        [_.optionFormattingSpaces]: "فاصله گذاری",
        [_.optionFormattingSpacesDescription]: "فاصله بعد از عنوان توابع را مدیریت کن.",
        [_.optionFormattingSpacesValueBestPractice]: "بست پرکتیس",
        [_.optionFormattingSpacesValueFalse]: "بدون فاصله - IF( ",
        [_.optionFormattingSpacesValueTrue]: "فاصله - IF ( ",
        [_.optionInvalidValue]: "مقدار نامعتبر",
        [_.optionLanguage]: "زبان",
        [_.optionLanguageDescription]: "زبان Bravo را انتخاب کنید. نیاز به بارگیری مجدد دارد.",
        [_.optionLanguageResetConfirm]: "آیا می‌خواهید برای اعمال زبان جدید، Bravo را دوباره بارگیری کنید؟",
        [_.optionPolicyNotice]: "این امکان توسط سازمان شما مدیریت می شود.",
        [_.optionProxyAddress]: "آدرس سرور پراکسی",
        [_.optionProxyAddressDescription]: "آدرس سرور پراکسی را وارد کنید.",
        [_.optionProxyBypassList]: "لیست آدرس های استثنا",
        [_.optionProxyBypassListDescription]: "از سرور پراکسی به جز آدرس هایی که با ورودی های درج شده شروع می شوند، استفاده کنید. از نقطه ویرگول (;) برای جدا کردن ورودی ها استفاده کنید.",
        [_.optionProxyBypassOnLocal]: "دور زدن آدرس های لوکال",
        [_.optionProxyBypassOnLocalDescription]: "از پروکسی با آدرس های محلی (اینترانت) استفاده نکنید.",
        [_.optionProxyConfirmDeleteCredentials]: "آیا مطمئن هستید که اطلاعات Credentials سفارشی را از سیستم حذف می کنید؟",
        [_.optionProxyCustomCredentials]: "سفارشی Credentials",
        [_.optionProxyCustomCredentialsDescription]: "برای احراز هویت در سرور پروکسی از Credential سفارشی استفاده کنید. از Credential سیستم استفاده نکنید.",
        [_.optionProxyCustomCredentialsEdit]: "ویرایش Credential سفارشی",
        [_.optionProxyType]: "سرور پراکسی",
        [_.optionProxyTypeCustom]: "سفارشی",
        [_.optionProxyTypeDescription]: "سرور پراکسی را انتخاب کنید.",
        [_.optionProxyTypeNone]: "هیچ کدام",
        [_.optionProxyTypeSystem]: "سیستم",
        [_.optionResetAlerts]: "بازیابی هشدارها",
        [_.optionResetAlertsButton]: "بازیابی",
        [_.optionResetAlertsDescription]: "بازیابی تمام هشدارهای پنهان.",
        [_.optionsDialogAboutMenu]: "درباره",
        [_.optionsDialogDevMenu]: "الگوها",
        [_.optionsDialogFormattingMenu]: "فرمت کردن",
        [_.optionsDialogGeneralMenu]: "عمومی",
        [_.optionsDialogProxyMenu]: "پراکسی",
        [_.optionsDialogTelemetryMenu]: "عیب یابی",
        [_.optionsDialogTitle]: "تنظیمات",
        [_.optionTelemetry]: "Telemetry",
        [_.optionTelemetryDescription]: "ارسال اطلاعات بصورت ناشناس به SQLBI.",
        [_.optionTelemetryMore]: "به ما در درک نحوه استفاده از Bravo و نحوه بهبود آن کمک کنید. هیچ اطلاعات شخصی جمع آوری نمی شود. لطفاً توجه داشته باشید که اگر این گزینه غیرفعال باشد، تیم توسعه قادر به جمع آوری خطاهای کنترل نشده و ارائه اطلاعات اضافی یا پشتیبانی نخواهد بود.",
        [_.optionTheme]: "تم",
        [_.optionThemeDescription]: "تم نرم افزار را انتخاب کنید.",
        [_.optionThemeValueAuto]: "بر اساس تم سیستم",
        [_.optionThemeValueDark]: "تم تیره",
        [_.optionThemeValueLight]: "تم روشن",
        [_.otherColumnsRowName]: "ستون های کوچکتر...",
        [_.paste]: "الصاق کردن",
        [_.powerBiObserving]: "منتظر باز کردن فایل در Power BI Desktop...",
        [_.powerBiObservingCancel]: "انصراف",
        [_.powerBiSigninDescription]: "برای اتصال Bravo به مجموعه داده های آنلاین خود، وارد سرویس Power BI شوید.",
        [_.powerBiSigninTitle]: "Power BI",
        [_.quickActionAttachPBITitle]: "ضمیمه کردن به Power BI Desktop",
        [_.quickActionConnectPBITitle]: "اتصال به Power BI Service",
        [_.quickActionOpenVPXTitle]: "باز کردن فایل Vertipaq Analyzer",
        [_.refreshCtrlTitle]: "بازیابی صفحه",
        [_.refreshPreviewCtrlTitle]: "بازیابی پیش نمایش",
        [_.saveVpaxCtrlTile]: "ذخیره به عنوان VPAX",
        [_.savingVpax]: "ایجاد VPAX...",
        [_.sceneUnsupportedReason]: "این ویژگی برای این منبع داده در دسترس نیست.",
        [_.sceneUnsupportedReasonManageDatesAutoDateTimeEnabled]: `مدل‌هایی که در آن گزینه تاریخ/زمان خودکار فعال است، پشتیبانی نمی‌شوند.<br><span class="link" href="https://www.sqlbi.com/tv/disabling-auto-date-time-in-power-bi/">غیر فعال کردن تاریخ/زمان خودکار در Power BI (ویدیو)</span>`,
        [_.sceneUnsupportedReasonManageDatesEmptyTableCollection]: "این ویژگی فقط توسط پایگاه های داده ای که حداقل یک جدول دارند پشتیبانی می شود.",
        [_.sceneUnsupportedReasonManageDatesPBIDesktopModelOnly]: "این ویژگی فقط توسط مدل در حالت Power BI Desktop پشتیبانی می شود.",
        [_.sceneUnsupportedReasonMetadataOnly]: "پایگاه داده از فایل VPAX که فقط شامل متادیتای آن است، تولید شده است.",
        [_.sceneUnsupportedReasonReadOnly]: "اتصال به این پایگاه داده فقط خواندنی است.",
        [_.sceneUnsupportedReasonXmlaEndpointNotSupported]: "فرمت XMLA برای این مجموعه داده پشتیبانی نمی شود.",
        [_.sceneUnsupportedTitle]: "غیر قابل پشتیبانی",
        [_.searchColumnPlaceholder]: "جستجوی ستون",
        [_.searchDatasetPlaceholder]: "جستجوی مجموعه داده",
        [_.searchEntityPlaceholder]: "جستجوی جدول/ستون",
        [_.searchMeasurePlaceholder]: "جستجوی سنجه",
        [_.searchPlaceholder]: "جستجو",
        [_.searchTablePlaceholder]: "جستجوی جدول",
        [_.settingsCtrlTitle]: "تنظیمات",
        [_.sheetOrphan]: "غیر قابل دسترس",
        [_.sheetOrphanPBIXTooltip]: "این گزارش در Power BI Desktop بسته شده است. هرگونه عملیات ذخیره سازی غیرقابل انجام است.",
        [_.sheetOrphanTooltip]: "مدل در دسترس نیست. هرگونه عملیات ذخیره سازی غیرقابل انجام است.",
        [_.showDiagnosticPane]: "مشاهده جزئیات",
        [_.sideCtrlTitle]: "مشاهده در نمای Side-by-side",
        [_.signedInCtrlTitle]: "وارد شده در سیستم به عنوان {name}",
        [_.signIn]: "وارد شدن به سیستم",
        [_.signInCtrlTitle]: "وارد شدن به سیستم",
        [_.signOut]: "خروج از سیستم",
        [_.sqlbiPayoff]: "Bravo is a project of SQLBI.",
        [_.syncCtrlTitle]: "همگام سازی",
        [_.tableColCardinality]: "کاردینالیتی",
        [_.tableColCardinalityTooltip]: "تعداد المان های یکتا",
        [_.tableColColumn]: "ستون",
        [_.tableColColumns]: "ستون ها",
        [_.tableColMeasure]: "سنجه",
        [_.tableColPath]: "جدول \\ ستون",
        [_.tableColRows]: "ردیف ها",
        [_.tableColSize]: "سایز",
        [_.tableColTable]: "جدول",
        [_.tableColWeight]: "عرض",
        [_.tableSelectedCount]: "{count} انتخاب شده",
        [_.tableValidationInvalid]: "این عنوان غیرقابل انتخاب می باشد",
        [_.tableValidationValid]: "این عنوان معتبر می باشد",
        [_.themeCtrlTitle]: "تغییر تم",
        [_.toggleTree]: "مشاهده در نمای درختی",
        [_.traceId]: "شناسه ردیابی",
        [_.unknownMessage]: "خطای نامعتبر دریافت شد",
        [_.updateChannelBeta]: "Beta",
        [_.updateChannelCanary]: "Canary",
        [_.updateChannelDev]: "Dev",
        [_.updateChannelStable]: "Stable", 
        [_.updateMessage]: "نسخه جدید در دسترس می باشد: {version}",
        [_.validating]: "اعتبارسنجی...",
        [_.version]: "نسخه",
        [_.welcomeHelpText]: "برای یادگیری نحوه استفاده از Bravo، ویدیوهای زیر را تماشا کنید:",
        [_.welcomeHelpTitle]: "چگونه از Bravo استفاده کنم?",
        [_.welcomeText]: "Bravo یک جعبه ابزار کاربردی Power BI است که می‌توانید از آن برای تجزیه و تحلیل مدل‌های خود،قالب‌بندی سنجه ها، ایجاد جداول تاریخ و خروجی گرفتن از داده‌ها استفاده کنید..",
        [_.whitespacesTitle]: "فضاهای خالی",
        [_.wrappingTitle]: "اتوماتیک word-wrap",
    }
}
export default locale;
