class Tools {
    /**
     * Получение адреса сервера WebTutor
     * @param – нет.
     * @returns – адрес сервера WebTutor(строка).
     * @example: tools.lds_address
     */
    lds_address() {
        return;
    }
    /**
     * Загрузка курса из архива в базу. Курс создается если его нетили обновляется существующий.
     * @param fileUrl (string)– адрес до файла (архива) с курсом;,* @param sFileCharsetParam (string) необязательный – кодировка (по умолчанию utf-8);,* @param docCourseParam (Doc)необязательный – Doc документкурса.
     * @returns – документ загруженного курса. Еслизагрузка не удалась, вернет строку с описанием ошибки.
     * @example: tools.load_course(TopElem.file_import, TopElem.file_charset, docCourseParam );
     */
    load_course() {
        return;
    }
    /**
     * Копирует ресурсы из указанного в файле manifest списка впапку получатель.
     * @param fileUrl (string) – адрес до файла manifest;,* @param baseUrl (string)– адрес до папки получателя относительно wt/web ;
     * @returns – нет.
     * @example: tools.copy_manifest_resources(TopElem.file_import,teCourse.base_url);
     */
    copy_manifest_resources() {
        return;
    }
    /**
     * Обновляет данные о количестве дочерних элементов вродительском форуме. Если задан iNewForumIDParam, то дочерним записям форума с iParentForumEntryIDParam, проставляется новое значение форума.
     * @param doc (Doc)необязательный, если задан iParentForumEntryIDParam – Docзаписи форума, родителя которого нужно обновить;,* @param iNewForumIDParam (int) необязательный – ID форума, к которому нужно привязать элементы ;,* @param iParentForumEntryIDParam (int) необязательный, если задан doc – ID родительской записи форума.
     * @returns – целое число (int),количество дочерних элементов вниз по иерархии в документе определяемом iParentForumEntryIDParam.
     * @example: tools.update_forum_entry( null, null,iParentForumEntryID ); tools.update_forum_entry( TopElem.Doc,TopElem.forum_id );
     */
    update_forum_entry() {
        return;
    }
    /**
     * Обновляет данные о количестве дочерних элементов вродительском комментарии к разделу портала. Если задан iNewPortalDocIDParam, тодочерним записям,  проставляется новое значение документа портала, к которомуони привязаны.
     * @param doc (Doc)  – Doc документзаписи комментария к разделу портала, родителя которого нужно обновить;,* @param iNewPortalDocIDParam (int) необязательный– ID раздела портала к которому нужно привязать дочерниекомментарии.
     * @returns – целое число (int),количество дочерних элементов вниз по иерархии в определяемом doc.
     * @example: tools.update_document_comment_entry(TopElem.Doc, TopElem.portal_doc_id );
     */
    update_document_comment_entry() {
        return;
    }
    /**
     * Добавляет строку к событию базы, определяемому _report_idили документом _source_doc.
     * @param _report_id (int) необязательный,если задан _source_doc – ID событиябазы, к которому нужно добавить строку.,* @param _str (string)– строка, которую нужно добавить к событию базы.,* @param _source_doc (Doc)необязательный, если задан _report_id- Doc документ события базы, ккоторому нужно добавить строку.
     * @returns – сохраненный документ (Doc)  события базы с добавленной строкой.
     * @example: docReport = tools.add_report(docReport.DocID, 'Execution start...', docReport ); tools.add_report( _report_id, 'Savingarchive: OK.' );
     */
    add_report() {
        return;
    }
    /**
     * Загрузка данных на сервер обмена данными.
     * @param _server_id (int)– ID сервера обмена данными, накоторый нужно отправить данные.,* @param _date (date)необязательный – дата, начиная с которой нужно грузить данные.,* @param _type (string)необязательный – описание типа отправки.
     * @returns – строка с ошибкой или пустая строкав случае успеха (string).
     * @example: _str = tools.upload_data(curExchangeServerID, tools.get_exchange_date( serverDoc.TopElem.upload,serverDoc.TopElem.last_upload_date ), 'quick' ); _str = tools.upload_data(curExchangeServerID, '', 'full' );
     */
    upload_data() {
        return;
    }
    /**
     * Получение данных с сервера обмена данными.
     * @param _server_id (int)– ID сервера обмена данными, скоторого нужно получить данные.
     * @returns – строка с ошибкой или пустая строкав случае успеха (string).
     * @example: _str = tools.download_data(_exchange_server_id );
     */
    download_data() {
        return;
    }
    /**
     * Создание пакета данных для отправки на сервер обменаданными.
     * @param _server_id (int)– ID сервера обмена данными,для которого формируется пакет.,* @param _report_id (int)– ID документа событий базы, вкоторый будут записываться отчет.,* @param sPackIDParam (string)– строка с ID загружаемогопакета.,* @param _date (date)необязательный – дата, начиная с которой нужно грузить данные.
     * @returns – строка с адресом до сформированногопакета(string).
     * @example: _filename = ServerEval('tools.create_data_package(' + curExchangeServerID + ',' + _report_id + ',' +_package_id + ',\'\')');
     */
    create_data_package() {
        return;
    }
    /**
     * Возвращает последнюю дату обмена данными (отправки илиполучения) для указанного сервера обмена данными.
     * @param _source (xml element) – xml элемент, в котором храниться дата (download, upload) .,* @param _date (date)– дата последней отправки .
     * @returns – дата последнего обмена (date).
     * @example: _exa2wx5nutv7 = tools.get_exchange_date(curServerDoc.download, curServerDoc.last_download_date ); _exa2wx5nutv7 = tools.get_exchange_date(curServerDoc.upload, curServerDoc.last_upload_date );
     */
    get_exchange_date() {
        return;
    }
    /**
     * Разворачивает базу данных XML из backup файла.
     * @param _backup_file (string)– путь до файла с _backup_file относительно папки сервера WebTutor.
     * @returns – число с результатом выполнения (int). Если больше 0, значит возникла ошибка.
     * @example: tools.recovery_process( \'' + StrReplace(_filepath, '\\', '\\\\' ) + '\' )
     */
    recovery_process() {
        return;
    }
    /**
     * Сохраняет базу данных XML в backup файл.
     * @param _backup_file (string)– путь до файла с _backup_file относительно папки сервера WebTutor.
     * @returns – число с результатом выполнения (int). Если больше 0, значит возникла ошибка.
     * @example: _res = tools.backup_process( \'' +_backup_file + '\' );
     */
    backup_process() {
        return;
    }
    /**
     * Сохраняет базу данных XML в backup файл.Обновляет дату последнего backup внастройках системы.
     * @param – нет.
     * @returns – строка до файла с архивом.
     * @example: _str = tools.backup_data();
     */
    backup_data() {
        return;
    }
    /**
     * Создает для базы данных XML backup файли отправляет его на сервер.
     * @param _server_id (int)– ID сервера обмена данными, накоторый отправляется файл.
     * @returns – нет.
     * @example: _str = tools.send_backup_data(curExchangeServerID );
     */
    send_backup_data() {
        return;
    }
    /**
     * Отправляет файл на указанный сервер обмена данными.Отправление идет как письмо по протоколу Smtp. Поэтомувозможно указать тему и тело сообщения.
     * @param _subject (string)– строка с темой отправляемого сообщения.,* @param _body(string)– строка с телом отправляемого сообщения.,* @param _send_file (string)– строка с адресом до отправляемого файла.,* @param _server_id (int)– ID сервера обмена данными,для которого формируется пакет.,* @param _report_id (int)– ID документа событий базы, вкоторый будут записываться отчет.
     * @returns – строка с адресом до сформированногопакета(string).
     * @example: tools.send_file_to_server(\'data[' + _server_doc.code + ']' + ( _type == 'full' ? ' - full' : '' ) + '\', \'ID:' + _package_id + '\', \'' + _filename + '\', ' + _server_id + ', ' +_report_id + ');
     */
    send_file_to_server() {
        return;
    }
    /**
     * Отправляет файл на указанный сервер обмена данными.Отправление идет Post по http протоколу.
     * @param _send_file (string)– строка с адресом до отправляемого файла.,* @param _server_id (int)– ID сервера обмена данными,для которого формируется пакет.,* @param _report_id (int)– ID документа событий базы, вкоторый будут записываться отчет.
     * @returns – нет.
     * @example: tools.post_file_to_server(\'' +_filename + '\', ' + _server_id + ', ' + _report_id + ' );
     */
    post_file_to_server() {
        return;
    }
    /**
     * Преобразует дату в строку разделенную символом _. Напримердата 01.02.1999 12:34:15 будет преобразована в 1999_02_01_12_23.
     * @param _cur_date (date) необязательный  – дата которую нужно преобразовать, если не указан, то будетпреобразовываться текущая дата и время.
     * @returns – дата преобразованная в строку (string).
     * @example: _pak_name = 'update_' + tools.date_str()+ '_' + _cur_id + '.zip';
     */
    date_str() {
        return;
    }
    /**
     * Возвращает  строку с названием всех файлов с расширением zip из указной папки. Строка это разделенные символом |названия фалов. Название это разделённые символом ; дата, тип, размер и названиефайла.
     * @param _dir (string) – адрес до папки.
     * @returns – строка (string).
     * @example: ServerEval('tools.fill_backup_files_list( \'' + ( Ps.recovery_dir == '' ?'x-local://backup_data/' : Ps.recovery_dir ) + '\' )' )
     */
    fill_backup_files_list() {
        return;
    }
    /**
     * Возвращает  ошибку формы, переданной как параметр.
     * @param _param_form (Doc)  – Doc формы, из которой нужно взять ошибку.
     * @returns – строка с описанием ошибки(string).
     * @example: errorText = tools.get_param_error_text(paramForm );
     */
    get_param_error_text() {
        return;
    }
    /**
     * Загружает пакеты с указанного сервера обмена данными суказанного расположения
     * @param _server_id (int)необязательный (если не указан, считается, что сервер локальный) – ID сервера обмена данным, к которогозагружаются пакеты.,* @param _package_id (int)– ID пакета, который нужнозагрузить.,* @param _temp_url (string)– путь до файла с пакетом.
     * @returns – строка с локальным адресом допакета (string).
     * @example: tools.download_package( ' +Ps.exchange_server_id + ', ' + Ps.Doc.DocID + ' );
     */
    download_package_list() {
        return;
    }
    /**
     * Обрабатывает пакет с данными и загружает содержимое в базуданных.
     * @param _path (string)– путь до файла с пакетом.,* @param _type (string) – тип загрузки. Возможный значения:,* @param objects и std_objects – загружает объекты  в базу. std_objects применяется для загрузки стандартных объектов изпервоначальной установки.,* @param code_update –выгружает файлы из архива в папку wtv сервераWebTutor.,* @param web –выгружает файлы из архива в папку wt/web сервера WebTutor.,* @param _source (Xml document) необязательный (если неуказан, то берутся все типы объектов в системе) – источник данных о типахзагружаемых объектов, и других параметров загрузки объектов.,* @param _report_id (int)– ID документа событий базы, вкоторый будут записываться отчет.,* @param _exchange_server_id (int) необязательный – ID сервера обмена данным, из которого берутся параметры дляфильтрации данных из пакета.,* @param iDownloadPackageIDParam (int) необязательный – ID пакета, из которого нужно загрузить данные.
     * @returns – успешная или не успешная загрузкаданных (bool). В случае типа объектов objects и std_objects.Возвращается форма открытого документа пакета.
     * @example: common_variables.len_flag = ( tools.package_process(\'' + Ps.local_file_url + '\', \'' + Ps.type + '\', \'' + Ps.Doc.DocID + '\' )!= null );
     */
    package_process() {
        return;
    }
    /**
     * Загружает пакет с данными с указного сервера обмена. Послезагрузки пакет обрабатывается функций tools.package_process и данные попадают вбазу. Загрузка происходит по протоколу http.
     * @param _server_id (int)– ID сервера обмена данными, скоторого скачивается пакет.,* @param _report_id (int)– ID документа событий базы, вкоторый будут записываться отчет.
     * @returns – строка с адресом до загруженногопакета(string).
     * @example: ServerEval('tools.download_data_package(' + _server_id + ',' + _report_id + ')' );
     */
    download_data_package() {
        return;
    }
    /**
     * Назначает курс сотруднику.
     * @param oPersonID – структура параметров.В простейшем случае это ID сотрудника,которому назначается курс. Но может быть объектом со следящими полями.,* @param iPersonID (int) обязательный, если передается структура -          ID сотрудника, которому назначаетсякурс.,* @param iCourseID (int) обязательный, если передается структура – ID курса, который необходимоназначить.,* @param sEID(string) необязательный - код записи в каталоге active_learnings. Если он указан, топри назначении курса, когда производится проверка на уже существующий активныйкурс данного сотрудника в каталоге active_learnings,проверяется еще что у данной записи должен быть указанный в параметре код.,* @param iEventID (int) необязательный – ID мероприятия, в рамках которого назначается курс.,* @param teCollaborator (TopElem) необязательный – TopElemкарточки сотрудника, которому назначается курс.,* @param teCourse(TopElem) необязательный – TopElem карточки курса.,* @param iDuration (int) необязательный – длительность курса в днях. Определяетдату планируемого завершения.,* @param dtLastLearningDate(date) необязательный – Если параметр задан, то приназначении курса, проверяется, существует ли завершённый курс в каталоге learnings завершенный после указанной в параметре даты. Еслисуществует, то эта запись возвращается как результат работы функции.,* @param dtStartLearningDate(date) необязательный – дата начала обучения. Еслизадана, то обучение невозможно будет начать раньше указанной даты.,* @param iEducationPlanID(int) необязательный – ID плана обучения в рамках которого назначен курс.,* @param iGroupID (int) необязательный – ID группы, которой назначен курс.,* @param bCommenting необязательный– если свойство задано, то сотрудник может комментировать курс в плеере курса.,* @param bLogging необязательный– если свойство задано, то ведется подробный лог курса.,* @param _course_id (int)необязательный если передается структура oPersonID  – ID курса, который необходимо назначить.,* @param _event_id (int)необязательный – ID мероприятия,в рамках которого назначается курс.,* @param _person_doc (TopElem)необязательный – TopElem карточки сотрудника, которомуназначается курс.,* @param _education_plan_id (int) необязательный – ID плана обучения в рамках которого назначен курс.,* @param _duration (int)необязательный – длительность курса в днях. Определяет дату планируемогозавершения.,* @param _start_learning_date (date) необязательный – дата начала обучения. Если задана, тообучение невозможно будет начать раньше указанной даты.,* @param dtLastLearningDateParam(date) необязательный – Если параметр задан, то при назначениикурса, проверяется, существует ли завершённый курс в каталоге learnings завершенный после указанной в параметре даты. Еслисуществует, то эта запись возвращается как результат работы функции.,* @param _group_id (int)необязательный – ID группы,которой назначен курс.,* @param sEIDParam (string)необязательный - код записи в каталоге active_learnings. Если он указан, то при назначении курса, когдапроизводится проверка на уже существующий активный курс данного сотрудника вкаталоге active_learnings, проверяется еще что у даннойзаписи должен быть указанный в параметре код.
     * @returns – документ незавершенного курса active_learning который назначен сотруднику (Doc). Если курс былназначен раньше, то новый объект не создастся, а будет возвращен ранеесозданный.
     * @example: var iLearning =tools.activate_course_to_person(Child(0).Parent.id.Value, iCourseIDPARAM,iEventIDPARAM, Child(0).Parent, null, null, dStartPARAM, dEndPARAM); _course_learning =tools.activate_course_to_person( TopElem.person_id, Ps.object_id );
     */
    activate_course_to_person() {
        return;
    }
    /**
     * Назначение теста сотруднику.
     * @param _person_id (int)ID сотрудника, которомуназначается тест.,* @param _test_id (int)– ID теста, который необходимоназначить.,* @param _event_id (int)необязательный – ID мероприятия,в рамках которого назначается тест.,* @param _person_doc (TopElem)необязательный – TopElem карточки сотрудника, которомуназначается тест.,* @param _test_doc (TopElem)необязательный – TopElem карточки теста.,* @param _event_doc (TopElem)необязательный – TopElem карточки мероприятия.,* @param _duration (int)необязательный – длительность теста в днях. Определяет дату планируемогозавершения.,* @param _start_learning_date (date) необязательный – дата начала обучения. Если задана, тообучение невозможно будет начать раньше указанной даты.,* @param dtLastLearningDateParam(date) необязательный – Если параметр задан, то при назначениитеста, проверяется, существует ли завершённый тест в каталоге test_learnings завершенный после указанной в параметре даты. Еслисуществует, то эта запись возвращается как результат работы функции.,* @param _group_id (int)необязательный – ID группы,которой назначен тест.
     * @returns – документ незавершенного теста active_test_learning  который назначен сотруднику (Doc).Если тест был назначен раньше, то новый документ не создастся, а будетвозвращен ранее созданный.
     * @example: _test_learning =tools.activate_test_to_person( TopElem.person_id, Ps.object_id ); var iLearning =tools.activate_test_to_person(Child(0).Parent.id.Value, iTestIDPARAM, iEventIDPARAM,Child(0).Parent, null, null, null, dStartPARAM, dEndPARAM);
     */
    activate_test_to_person() {
        return;
    }
    /**
     * Назначение теста участникам указанного мероприятия.
     * @param _event_id (int)– ID мероприятия, в рамкахкоторого назначается тест.,* @param _test_id (int)– ID теста, который необходимоназначить.,* @param _doc_event (Doc)необязательный –документ карточки мероприятия.,* @param _duration (int)необязательный – длительность теста в днях. Определяет дату планируемогозавершения.,* @param _start_learning_date (date) необязательный – дата начала обучения. Если задана, тообучение невозможно будет начать раньше указанной даты.,* @param _last_learning_date (date) необязательный – Если параметр задан, то при назначениитеста, проверяется, существует ли завершённый тест в каталоге test_learnings завершенный после указанной в параметре даты. Еслисуществует, то эта запись возвращается как результат работы функции.,* @param sActTypeParam (string)необязательный – строка указывающая кому назначать тесты. Возможные значения.,* @param all – тестыназначаются всем участникам мероприятия.,* @param post – тестыназначаются участникам мероприятия у которых проставлен флаг «присутствовал намероприятии».
     * @returns – количество назначенных тестов  (int).
     * @example: _eval_str ='tools.activate_test_to_event(' + TopElem.Doc.DocID + ',' + _value.key +',null,&quot;' + _duration + '&quot;,&quot;' + _start_learning_date+ '&quot;,&quot;' + _last_learning_date + '&quot;)';
     */
    activate_test_to_event() {
        return;
    }
    /**
     * Назначение курса участникам указанного мероприятия.
     * @param _event_id (int)– ID мероприятия, в рамкахкоторого назначается тест.,* @param _course_id (int)– ID курса, который необходимоназначить.,* @param _doc_event (Doc)необязательный –документ карточки мероприятия.,* @param _duration (int)необязательный – длительность курса в днях. Определяет дату планируемогозавершения.,* @param _start_learning_date (date) необязательный – дата начала обучения. Если задана, тообучение невозможно будет начать раньше указанной даты.,* @param _last_learning_date (date) необязательный – Если параметр задан, то при назначениикурса, проверяется, существует ли завершённый курс в каталоге learnings завершенный после указанной в параметре даты. Еслисуществует, то эта запись возвращается как результат работы функции.
     * @returns – количество назначенных курсов  (int).
     * @example: _eval_str ='tools.activate_course_to_event(' + TopElem.Doc.DocID + ',' + _value.key +',null,&quot;' + _duration + '&quot;,&quot;' + _start_learning_date+ '&quot;,' + ( _last_learning_date == null ? 'null' : '&quot;' + _last_learning_date+ '&quot;' ) + ')';
     */
    activate_course_to_event() {
        return;
    }
    /**
     * Назначение учебной программы сотруднику. Если в учебнойпрограмме указаны учебные программы, содержащие дистанционное обучение (курсы),то эти курсы будут назначены сотруднику.
     * @param _person_id (int)ID сотрудника, которомуназначается программа.,* @param _education_program_id(int) – ID учебной программы.,* @param _person_doc (TopElem)необязательный – TopElem карточки сотрудника, которомуназначается тест.,* @param _education_program_doc (TopElem) необязательный – TopElemкарточки учебной программы.
     * @returns – количество назначенных курсов врамках учебной программы  (int).
     * @example: _R02847 =tools.activate_education_program_to_person(_s, _e);
     */
    activate_education_program_to_person() {
        return;
    }
    /**
     * Возвращаете время (часы, минуты и секунды) из строки сразделителем T, например вида 2015-06-02T07:51:44.Используется для разбора результатов теста.
     * @param _duration(date) - дата вида 2015-06-02T07:51:44.
     * @returns – время (часы, минуты и секунды) встроке вида 0751:44 (string), если передано время иливсе что стоит после T, если передана строка с такимразделителем.
     * @example: _section.duration =tools.get_time_from_duration( qtiSection.duration );
     */
    get_time_from_duration() {
        return;
    }
    /**
     * Возвращаете время (часы, минуты и секунды) в виде часыHминутыMсекундыSполученное из числа секунд. Используется для разбора результатов теста.
     * @param _seconds(string)- количество секунд, которые нужнопреобразовать в часы, минуты и секунды.
     * @returns – время в виде часыHминутыMсекундыS встроке или пустая строка  если не удалось преобразовать входной параметр вчисло (string).
     * @example: _section.timer =tools.get_time_from_seconds( _section.timer );
     */
    get_time_from_seconds() {
        return;
    }
    /**
     * Отменяет транзакцию. Используется в модуле геймификация.
     * @param _transaction_id (int) ID транзакции,которую нужно отменить.
     * @returns – ID новой транзакции отменяющей указанную (int).
     * @example: tools.delete_transaction(Ps.Doc.DocID );
     */
    delete_transaction() {
        return;
    }
    /**
     * Создает транзакцию по списанию указной суммы в указаннойвалюте с указанного счета. Используется в модуле геймификация. Совершает оплатупо выбранному объекту.
     * @param iAccountObjectIDParam (int) - ID объекта,к которому прикреплен счет, с которого будет происходить списание.,* @param sAccountCurrencyParam (string) необязательный - строка валюты счета, содержащая id валюты из списка валют в системе.,* @param rSumParam (real)– сумма.,* @param sCommentParam (string)необязательный – комментарий к транзакции.,* @param iObjectIDParam (int)необязательный-  ID объекта покоторому происходит транзакция.
     * @returns – документ созданной новойтранзакции  (Doc).
     * @example: tools.pay_new_transaction_by_object(personID, fldBonusElem.currency_type_id, fldBonusElem.sum, 'Bonus byqualification &quot;' + teQualification.name + '&quot;.',qualificationID );
     */
    pay_new_transaction_by_object() {
        return;
    }
    /**
     * Создает транзакцию зачислению суммы из указанной оплаты насчет.
     * @param _invoice_id (int)- ID документа Оплат.,* @param _doc_invoice (TopElem)необязательный – TopElem карточки оплаты.
     * @returns – документ оплаты invoice или null в случае неудачи (Doc).
     * @example: _doc = tools.pay_invoice( Ps.Doc.DocID, Ps.Doc );
     */
    pay_invoice() {
        return;
    }
    /**
     * Создает транзакцию по списанию указной суммы со счетауказанной организации.
     * @param _org_id (int)- ID организации.,* @param _amount (real) – сумма списания.,* @param _comment (string)необязательный – комментарий к транзакции.
     * @returns – id транзакции  или null в случае неудачи (int).
     * @example: tools.pay_courses(personDoc.org_id, courseDoc.price, '' );
     */
    pay_courses() {
        return;
    }
    /**
     * Создает документ об оплате (invoice).
     * @param _org_id (int)- ID организации.,* @param _amount (real) – сумма списания.
     * @returns – id оплаты (int).
     * @example: _invoce_id = tools.set_account(Int( Request.Form.org_id ), Real( Request.Form.sum ) );
     */
    set_account() {
        return;
    }
    /**
     * Создает документ об оплате (invoice)для курса из заявки.
     * @param _org_id (int)- ID организации.,* @param _request_id (int)–ID заявки сотрудника на курспо которой происходит списание.
     * @returns – id оплаты (int).
     * @example: _invoce_id =tools.personal_pay( Int( _org_arr[0] ), Int( _req ) );
     */
    personal_pay() {
        return;
    }
    /**
     * Создает новое неотправленное уведомление. В теле уведомления(шаблоне уведомления) обращение к первому параметру идет через objDocID, кдокументу, открываемому автоматически при вызове функции по отправкеуведомления, objDoc. objDoc- это TopElem документа. Обращение ко второмупараметру идет через objDocSecID, к документу, открываемому автоматически привызове функции по отправке уведомления objDocSec. objDocSec- это TopElemдокумента. Если документ отрыт ранее, то для ускорения работы функции отправкиуведомления, можно передать открытый документ в функцию, что позволит избежатьего повторного открытия. Для этого вместо tools.create_notification( code, id1,'', id2) вызывается функция, куда передаются дополнительные параметрtools.create_notification( code, id1, '', id2, TopElem1,TopElem2 )
     * @param oTypeParam (string) – код типа уведомления,которое будет отправляться. Если параметр пустой, или равен 0, то нужно впараметр teSourceParam передавать структуру, из которой будут заполняться типыполучателей (recipients), тип отправителя (sender_selector) , тема сообщения (subject),тип текста в теле сообщения (body_type), тело сообщения (body) и адресотправителя (sender_email). Если oTypeParam этореальный код типа уведомления, то типы получателей (recipients), типотправителя (sender_selector) и адрес отправителя (sender_email) будут братьсяиз указанного объекта. А тема сообщения (subject), тип текста в теле сообщения(body_type), тело сообщения (body) из шаблона уведомления, прикрепленного ктипу сообщения с указанным в параметре кодом. Если в существующих в системетипах уведомления не найдено типа с указанным кодом, то функция возвратит false.,* @param iObjectIDParam (int)- ID документа, относительногокоторого идет поиск ID сотрудников,которым нужно отправить сообщение. В теле уведомления (шаблоне уведомления)обращение этому параметру идет через objDocID,* @param sTextParam(string)необязательный – строка, к которой можно обращаться в теле шаблона уведомлениякак к Text.,* @param iSecondObjectIDParam (int) необязательный  - ID документа, который передается, как второй прикреплённый куведомлению документ. В теле уведомления (шаблоне уведомления) обращение этомупараметру идет через objDocSecID,* @param oObjectParam (TopElem)необязательный – TopElem карточки первого объекта,определяемого iObjectIDParam.,* @param oSecondObjectParam (TopElem) необязательный – TopElemкарточки первого объекта, определяемого iSecondObjectIDParam.,* @param teSourceParam (Doc)обязательный, если  oTypeParam пустой, или равен 0– структура,позволяющая создать собственное уведомление в run time. Из нее будут заполняться типыполучателей (recipients), тип отправителя (sender_selector) , тема сообщения (subject),тип текста в теле сообщения (body_type), тело сообщения (body) и адресотправителя (sender_email).
     * @returns – флаг успешного или не успешногосоздания уведомления (bool).
     * @example: tools.create_notification('66', docRequest.TopElem.person_id, '', docRequest.DocID, null, docRequest.TopElem);
     */
    create_notification() {
        return;
    }
    /**
     * Создает уведомление на основе данных из шаблона уведомленияи отправляет это уведомление с помощью функции tools.create_notification. Используетсядля отправки уведомлений из диалога в интерфейсе администратора и на портале.
     * @param oTypeParam (string) – код типа уведомления,которое будет отправляться.,* @param iObjectIDParam (int)- ID документа, относительногокоторого идет поиск ID сотрудников,которым нужно отправить сообщение. В теле уведомления (шаблоне уведомления)обращение этому параметру идет через objDocID,* @param sSubjectParam (string)необязательный – строка, в которой содержится тема сообщения.,* @param sBodyParam (string)необязательный – строка, в которой содержится тело сообщения.,* @param oObjectParam (TopElem)необязательный – TopElem карточки первого объекта,определяемого iObjectIDParam.,* @param teSourceParam (Xml document) необязательный, структура изкоторой будут заполняться типы получателей (recipients), тип отправителя (sender_selector), тип текста в теле сообщения (body_type), адрес отправителя (sender_email).,* @param iObjectSecondIDParam (int) необязательный  - ID документа, который передается, как второй прикреплённый куведомлению документ. В теле уведомления (шаблоне уведомления) обращение этомупараметру идет через objDocSecID
     * @returns – флаг успешного или не успешногосоздания уведомления (bool).
     * @example: tools.create_template_notification(0, _person_id, dlgDoc.TopElem.subject, dlgDoc.TopElem.body, null,dlgDoc.TopElem, iSecondID )
     */
    create_template_notification() {
        return;
    }
    /**
     * Отправляет создание с помощью функции tools.create_notification неотправленное уведомление.
     * @param iActiveNotificationIDParam (int) - ID неотправленногоуведомления, которое должно быть отправлено.
     * @returns – флаг успешной или не успешной отправкиуведомления (bool).
     * @example: tools.send_notification(catActiveNotificationElem.id );
     */
    send_notification() {
        return;
    }
    /**
     * Формирует форму сертификата из стандартного шаблона templates/certificate_template.html на основе завершенного курса.  Используется в карточке завершенного курса.
     * @param _learning_id (int) - ID завершенного курса, для которого формируется сертификат.
     * @returns –  сформированный Html сертификат (html).
     * @example: _text = tools.save_certificate(_id );
     */
    save_certificate() {
        return;
    }
    /**
     * Возвращает строку символов указанной длинны, сформированнойслучайным образом.
     * @param _digit_num (int)– количество символов в указанной строке. Длинна возвращаемой строки.,* @param _dict (string)необязательный – набор символов, из которого формируется строка. Если неуказан, то символы берутся из набора qwertyuiopasdfghjklzxcvbnm1234567890.
     * @returns –  сформированный Html сертификат (html).
     * @example: docPerson.TopElem.password =tools.random_string( Ps.password_digits_num );
     */
    random_string() {
        return;
    }
    /**
     * Загрузка данных по сотрудникам из Xmlструктуры. Используется для импорта сотрудников.
     * @param sParamsXml (Xml)– Xml документ с данными длязагрузки.
     * @returns –  ID документа события базы с отчетом о загрузке (int).
     * @example: local_settings.temp.import_excel_persont_action_report_id= OptInt( ServerEval( 'tools.import_excel_persons(' + CodeLiteral(fldTE.GetXml( { 'tabs': false } ) ) + ')' ), null );
     */
    import_excel_persons() {
        return;
    }
    /**
     * Используется для проверки заполнения схемы импорта передимпортом сотрудников в интерфейсе администратора.
     * @param Ps– TopElem Xml документа с настройками для загрузки.
     * @returns –  строка с ошибкой или пустая строкав случае успеха (string).
     * @example: sErr =tools.start_import_excel_persons( TopElem );
     */
    start_import_excel_persons() {
        return;
    }
    /**
     * Устаревшая функция. Больше не используется. Возвращает непосредственногоруководителей подразделения указанного сотрудника.
     * @param _person_id (int) –ID сотрудника для подразделения, которого производится поискруководителей.,* @param _person_doc (TopElem)необязательный – TopElem карточки сотрудника.
     * @returns –  массив с ID сотрудников, являющихся руководителями подразделенияуказанного сотрудника (array).
     * @example: .
     */
    get_sub_boss_by_person_id() {
        return;
    }
    /**
     * Возвращает непосредственных руководителей организацииуказанного сотрудника.
     * @param _person_id (int) –ID сотрудника для организации, которого производится поискруководителей.
     * @returns –  массив с ID сотрудников, являющихся непосредственными руководителямиорганизации указанного сотрудника (array).
     * @example: for (iBossIDElem in tools.get_main_boss_by_person_id( cnf_temp_iPersonID ) )
     */
    get_main_boss_by_person_id() {
        return;
    }
    /**
     * Добавляет новый язык в список используемых в системе языков.Загрузка происходит из XML файла с константами. Используетсяв администраторе в общих настройках, для установки новых языков или обновлениясуществующих.
     * @param sLngUrlParam (string)– пусть до XML файла с константами.,* @param bDoObtainParam (bool)необязательный – используется при вызове функции на сервере. Если true, то существующие значения констант языкаперезаписываются новыми из файла.
     * @returns –  количество обновленных констант (int).
     * @example: tools.add_lng( _url);
     */
    add_lng() {
        return;
    }
    /**
     * Возвращает текстовое значение константы для текущего языка (текущегоязыка, используемого в интерфейсе).
     * @param sNameParam (string)– ID константы в XML структуре текущего языка.
     * @returns –  строка со значением константы илистрока вида 'UNDEFINED - ' + sNameParam, если такой константы не найдено (string).
     * @example: tools.get_web_str('vfb_anonymous_author');
     */
    get_web_str() {
        return;
    }
    /**
     * Проверяет, является ли указанный сотрудник (первый параметрфункции) непосредственным руководителем, сотрудника, который указан в качествевторого параметра функции.
     * @param iUserIDParam (int)необязательный  – ID сотрудника,для которого нужно осуществить проверку. То есть проверяется, является ли он непосредственнымруководителем, сотрудника, который указан в качестве второго параметра функции.Если первый параметр не указан, то проверка происходит относительно текущегопользователя (curUserID), если он определен в окружении, в котором вызываетсяфункция.,* @param iPersonIDParam (int)необязательный  – ID сотрудникаруководитель, для которого проверяется. Если параметр не указан, то проверкапроисходит относительно поля curObject.person_id, если curObject определен вокружении, в котором вызывается функция.
     * @returns – флаг да, если первый сотрудник,является непосредственным руководителем второго сотрудника. Или нет, еслипроверка не удалась или первый сотрудник, не является непосредственнымруководителем второго сотрудника  (bool).
     * @example: bAllowCreate =tools.is_boss(); ! tools.is_boss(null, curUserID )
     */
    is_boss() {
        return;
    }
    /**
     * Проверяет, является ли указанный сотрудник (первый параметрфункции) руководителем указанного типа у сотрудника, который указан в качествевторого параметра функции.  При этом можно указать, нужно определитьнепосредственного или любого функционального руководителя.
     * @param iManagerIdParam (int)  – ID сотрудника,для которого нужно осуществить проверку. То есть проверяется, является ли оннепосредственным руководителем, указанного типа, сотрудника, который указан вкачестве второго параметра функции.,* @param iUserIdParam (int) – ID сотрудника руководитель, длякоторого проверяется.,* @param _catalog_names (string) необязательный. native – поиск только непосредственногоруководителя по должности. not_native руководитель любого типа группы,сотрудника, подразделения, организации.,* @param vBossType (variant)– true поиск тольконепосредственного руководителя. False поиск толькофункционального руководителя без признака непосредственный. Если передать ID нужного типа руководителя, тобудет проверятся руководитель указанного типа.
     * @returns – флаг да, если первый сотрудник,является руководителем второго сотрудника. Или нет, если проверка не удаласьили первый сотрудник, не является непосредственным руководителем второгосотрудника  (bool).
     * @example: .
     */
    is_user_boss() {
        return;
    }
    /**
     * Используется для работы в документообороте по процедуреоценки и по заявкам. Проверяет, является ли указанный сотрудник тем, от чьегоимени подана заявка или на кого создана форма оценки (где он оцениваемый).
     * @param iUserIDParam (int)необязательный  – ID сотрудника,для которого нужно осуществить проверку. Если параметр не указан, то проверкапроисходит относительно текущего пользователя (curUserID), если он определен вокружении, в котором вызывается функция.
     * @returns – флаг да или нет (bool).
     * @example: tools.is_self_cur_user()
     */
    is_self_cur_user() {
        return;
    }
    /**
     * Используется для работы в документообороте по заявкам и впроцедуре оценки. Проверяет, является ли текущий пользователь  руководителемсамого высокого уровня (подразделения первого уровня сверху или руководителеморганизации) по должности для сотрудника, подавшего заявку или для сотрудникана которого создан анкета или план оценки.  Проверка происходит относительнотекущего пользователя (curUserID), если он определен в окружении, в которомвызывается функция, и для поля текущего объекта curObject.person_id, если он определен вокружении.
     * @param - нет.
     * @returns – флаг да или нет (bool).
     * @example: tools.is_main_boss()
     */
    is_main_boss() {
        return;
    }
    /**
     * Используется для работы в документообороте по заявкам впроцедуре оценки. Проверяет, является ли текущий пользователь  непосредственнымруководителем для сотрудника, подавшего заявку или для сотрудника на которогосоздан анкета или план оценки.   Проверка происходит относительно текущегопользователя (curUserID), если он определен в окружении, в котором вызываетсяфункция, и для текущего объекта curObject.person_id, если он определен вокружении.
     * @param - нет.
     * @returns – флаг да или нет (bool).
     * @example: tools.is_real_boss()
     */
    is_real_boss() {
        return;
    }
    /**
     * Используется для работы в документообороте по заявкам впроцедуре оценки. Проверяет, является ли текущий пользователь  руководителемцентра затрат  для сотрудника, подавшего заявку или для сотрудника на которогосоздан анкета или план оценки.  Проверка происходит относительно текущегопользователя (curUserID), если он определен в окружении, в котором вызываетсяфункция, и для текущего объекта curObject.person_id, если он определен вокружении.
     * @param - нет.
     * @returns – флаг да или нет (bool).
     * @example: tools.is_cost_center_boss()
     */
    is_cost_center_boss() {
        return;
    }
    /**
     * Используется для работы в документообороте по заявкам впроцедуре оценки. Проверяет, является ли текущий пользователь  непосредственнымруководителем вышестоящего подразделения (текущее подразделение сотрудника +1) для сотрудника, подавшего заявку или для сотрудника на которого создан анкетаили план оценки.  Проверка происходит относительно текущего пользователя (curUserID),если он определен в окружении, в котором вызывается функция, и для текущегообъекта curObject.person_id, если он определен в окружении.
     * @param - нет.
     * @returns – флаг да или нет (bool).
     * @example: tools.is_next_boss()
     */
    is_next_boss() {
        return;
    }
    /**
     * Используется для работы в документообороте по заявкам впроцедуре оценки. Проверяет, является ли текущий пользователь  непосредственнымруководителем указанного подразделения.  Проверка происходит относительнотекущего пользователя (curUserID), если он определен в окружении, в которомвызывается функция.
     * @param _sub_id (int) – ID подразделения, длякоторого происходит проверка.
     * @returns – флаг да или нет (bool).
     * @example: _eval_str =_eval_str + 'tools.is_boss_by_subdivision_id(' +_condition.cur_parent_object_id + ')';
     */
    is_boss_by_subdivision_id() {
        return;
    }
    /**
     * Используется для работы в документообороте по заявкам впроцедуре оценки. Проверяет, занимает ли текущий пользователь указаннуюдолжность.  Проверка происходит относительно текущего пользователя (curUserID),если он определен в окружении, в котором вызывается функция.
     * @param _position_id (int) – ID должности для которойпроисходит проверка.
     * @returns – флаг да или нет (bool).
     * @example: _eval_str =_eval_str + 'tools.is_by_position_id(' + _condition.cur_position_id + ')';
     */
    is_by_position_id() {
        return;
    }
    /**
     * Используется для работы в документообороте по заявкам впроцедуре оценки. Проверяет, входит ли текущий пользователь в указаннуюгруппу.  Проверка происходит относительно текущего пользователя (curUserID),если он определен в окружении, в котором вызывается функция.
     * @param is_by_group_id (int) – ID должности для которойпроисходит проверка.
     * @returns – флаг да или нет (bool).
     * @example: _eval_str =_eval_str + 'tools.is_by_position_id(' + _condition.cur_position_id + ')';
     */
    is_by_group_id() {
        return;
    }
    /**
     * Используется для работы в документообороте по заявкам впроцедуре оценки. Проверяет, является ли текущий пользователь  функциональнымруководителем любого типа в карточке  сотрудника, подавшего заявку илисотрудника на которого создан анкета или план оценки.  Проверка происходит относительнотекущего пользователя (curUserID), если он определен в окружении, в которомвызывается функция, и для текущего объекта curObject.person_id, если он определен вокружении.
     * @param нет.
     * @returns – флаг да или нет (bool).
     * @example: tools.is_person_func_manager()
     */
    is_person_func_manager() {
        return;
    }
    /**
     * Используется для работы в документообороте по заявкам впроцедуре оценки. Проверяет, является ли текущий пользователь  функциональнымруководителем любого типа в карточке  организации сотрудника, подавшего заявкуили сотрудника на которого создан анкета или план оценки.  Проверка происходитотносительно текущего пользователя (curUserID), если он определен в окружении,в котором вызывается функция, и для текущего объекта curObject.person_id, если он определен вокружении.
     * @param - нет.
     * @returns – флаг да или нет (bool).
     * @example: tools.is_person_org_func_manager()
     */
    is_person_org_func_manager() {
        return;
    }
    /**
     * Используется для работы в документообороте по заявкам впроцедуре оценки. Проверяет, является ли текущий пользователь  функциональнымруководителем любого типа и любого уровня для сотрудника, подавшего заявку или длясотрудника на которого создан анкета или план оценки. Проверка происходитотносительно текущего пользователя (curUserID), если он определен в окружении,в котором вызывается функция, и для текущего объекта curObject.person_id, если он определен вокружении.
     * @param - нет.
     * @returns – флаг да или нет (bool).
     * @example: tools.is_func_manager()
     */
    is_func_manager() {
        return;
    }
    /**
     * Функция заполняет поля workflow_id, object_name,object_code, object_start_date в приёмнике данных на основе значений из объектаисточника данных. Источник данных это TopElem документа источника данных. Приемником может быть элементлюбого уровня в xml структуресодержащий  нужные поля.
     * @param _type (string)необязательный  – строка, содержащая название типа источника объекта.,* @param _source  (Xml element) – приемник данных.,* @param _object_id (int)– ID документа источникаданных.,* @param _object_doc (TopElem)необязательный – TopElem источника данных.
     * @returns –  флаг да или нет (bool).“Да” если при заполнении не произошло ошибок, “нет” если заполнение произошло сошибкой. Если в приемнике  данных не было полей для заполнения или в источникеданных не было необходимых данных, функция вернет да (true).
     * @example: . tools.object_filling('event', curProgram, docEvent.DocID, docEvent.TopElem ); tools.object_filling(docRequest.TopElem.type, docRequest.TopElem, Int( program_id) );
     */
    object_filling() {
        return;
    }
    /**
     * Функция заполняет поля в приёмнике данных на основе значенийиз объекта источника данных. Источник данных это TopElem документа источника данных. Приемником может быть элементлюбого уровня в xml структуресодержащий  нужные поля. В зависимости от типа источника заполняются разныеполя в приемнике.,Для источника subdivision заполняется поле subdivision_name.,Для источника event заполняются поляevent_name, event_start_date, event_result_type_id (еслив мероприятии задан default_event_result_type_id).,Для источника course заполняются поля course_name, course_code, duration, no_encoding_core_lesson.,Для источника assessment заполняютсяполя assessment_name, assessment_code, duration, attempts_num.,Для источника request_type заполняютсяполя request_type_id, type, workflow_id, is_group.,Для источника response_type заполняютсяполя response_type_id, type.,Для источника education_method заполняютсяполя duration_plan, duration_fact, duration_days_plan,duration_days_fact, max_person_num, name, default_response_type_id,mandatory_fill_response, cost, currency, cost_type, education_org_id,event_form, lectors (массив), prev_testing.assessments(массив), post_testing (массив),expense_items (массив).,Для источника education_org заполняетсяполе education_org_name.,Для источника collaborator заполняютсяполя person_fullname, collaborator_fullname, person_name,person_position_name, position_name, person_org_name, person_instance_id, person_current_state,person_code.,Для источника item заполняются поля title, question_text, type_id, question_points.,Для источника submission_type заполняютсяполя submission_type_name.,Для источника activity заполняются поля activity_code, activity_name.,Для источника verb заполняютсяполя verb_code, verb_name.,Для источника object заполняются поля object_type, object_name, object_code, object_start_date.,Для источника tag заполняютсяполя tag_name.
     * @param _type (string)  –строка, содержащая название типа источника объекта.,* @param _source  (Xml element) – приемник данных.,* @param _object_id (int)– ID документа источникаданных.,* @param _object_doc (TopElem)необязательный – TopElem источника данных.,* @param _custom_flag (bool) необязательный – если true, и type = event,то выводит сообщение в интерфейс администратора о количестве преподавателей вмероприятии.
     * @returns –  флаг да или нет (bool).“Да” если при заполнении не произошло ошибок, “нет” если заполнение произошло сошибкой. Если в приемнике  данных не было полей для заполнения или в источникеданных не было необходимых данных, функция вернет да (true).
     * @example: . tools.common_filling('request_type', doc.TopElem, _request_type_first_elem.PrimaryKey ); tools.common_filling('education_method', doc.TopElem, TopElem.Doc.DocID, TopElem );
     */
    common_filling() {
        return;
    }
    /**
     * Функция очищает поля в приёмнике данных на основе указанноготипа объекта источника данных. Приемником может быть элемент любого уровня в xml структуре содержащий  нужныеполя. В зависимости от типа источника очищаются разные поля в приемнике.,Для источника event очищаются поля event_name, event_start_date.,Для источника education_org очищаетсяполе education_org_name.,Для источника course очищаются поля course_name, course_code.,Для источника assessment очищаются поля assessment_name, assessment_code.,Для источника request_type очищаютсяполя request_type_id, type, workflow_id, is_group.,Для источника response_type заполняютсяполя response_type_id, type.,Для источника collaborator заполняютсяполя person_fullname, collaborator_fullname, person_name,person_position_name, position_name, person_org_name, person_instance_id,person_current_state, person_code.,Для источника object заполняются поля object_type, object_name, object_code, object_start_date.
     * @param _type (string)  –строка, содержащая название типа источника объекта.,* @param _source  (Xml element) – приемник данных.,* @param _ps  (Xml element) необязательный – елемен, с дочерним элементом sd, если указан, то элемент sd очишается.
     * @returns –  флаг да (bool).
     * @example: . tools.common_clear(_cur_catalog_name, TopElem, Ps ); tools.common_clear('collaborator', Child(0).Parent, person_id );
     */
    common_clear() {
        return;
    }
    /**
     * Функция завершает указанный активный электронный курс исоздает карточку завершенного электронного курса.
     * @param _learning_id (int)  – ID активного электронного курса,который необходимо завершить.,* @param _source  (TopElem)необязательный – TopElem активногоэлектронного курса, который необходимо завершить.,* @param _course_doc (TopElem)необязательный – TopElem электронного курса, которыйнеобходимо завершить.
     * @returns –  ID нового завершенного курса (int).
     * @example: . iLearningId =tools.active_learning_finish(iActiveLearnId,'',teCourse);
     */
    active_learning_finish() {
        return;
    }
    /**
     * Функция завершает указанный активный тест и создает карточкузавершенного теста.
     * @param _learning_id (int)  – ID активного теста, которыйнеобходимо завершить.,* @param _source  (TopElem)необязательный – TopElem активного тест, которыйнеобходимо завершить.,* @param _assessment_doc (TopElem) необязательный – TopElemтеста, который необходимо завершить.,* @param iPersonIDParam(int)необязательный  – ID сотрудника,для которого необходимо завершить тест.
     * @returns –  TopElem нового завершенного теста.
     * @example: . docTestLearning= tools.active_test_learning_finish(iActiveTestId,'',teAssessment); tools.active_test_learning_finish(_doc_id );
     */
    active_test_learning_finish() {
        return;
    }
    /**
     * Функция завершает указанную попытку для теста и создаеткарточку завершенного теста.
     * @param _learning_id (int)  – ID активного теста, которыйнеобходимо завершить.,* @param _learning_code (string)необязательный – код раздела теста, который нужно завершить.,* @param _assessment_doc (TopElem) необязательный – TopElemтеста, который необходимо завершить.,* @param _flag_create_learning  (bool) необязательный  – создавать или нет завершенный тест.,* @param docActiveLearning (Doc) необязательный – Doc документ активного тест, который необходимо завершить.
     * @returns –  флаг да или нет (bool).Показывает успешно завершена попытка или нет.
     * @example: .
     */
    active_test_learning_finish_attempt() {
        return;
    }
    /**
     * Устаревшая функция. Представляет результаты теста в XML формате.
     * @param _core  (string)  –результатыдля дешифровки.,* @param _qti_path (string)необязательный – путь до файла со структурой теста в формате qti.,* @param _qti_text (string)необязательный –  структура  теста в формате qti.,* @param _learning_doc (TopElem)необязательный  – TopElem карточки завершенного теста длядешифровки.
     * @returns –  Xml структура содержащая результаты в теге annals.
     * @example: .
     */
    core_decrypt() {
        return;
    }
    /**
     * Представляет результаты завершенного теста в XML формате.
     * @param sSourceParam  (string)  –результатыдля дешифровки.
     * @returns –  Xml структура содержащая результаты в теге annals.
     * @example: . sReport =tools.get_annals_from_core( Trim( StrSimpleDecrypt( oSourceParam.core_lesson ) ));
     */
    get_annals_from_core() {
        return;
    }
    /**
     * Возвращает XML документ, безотступов, но со стандартным XML заголовкомна основе, переданной в функцию XML структуры.То есть передано,<t>,<i>Text</i>,</t>,Вернется <?xml version=”1.0”encoding=”utf-8”?><t><i>Text</i></t>
     * @param fldAnnalsParam  (XML)  –параметрдля перобразования.
     * @returns –  Xmlдокумент.
     * @example: . TopElem.lesson_report= tools.get_annals_text_from_annals( TopElem.annals_variant.Object );
     */
    get_annals_text_from_annals() {
        return;
    }
    /**
     * Возвращает путь до файла со структурой теста/курса в форматеqti.
     * @param oSource (object)  – либоID карточки теста/курса, либо TopElem карточки теста/курса, либо TopElem карточки объекта в котороместь поле course_id или assessment_id для получения ID теста/курса.,* @param fldPartParam (string)необязательный – код модуля электронного курса, для которого нужно получить  _qti_path .
     * @returns –  путь до файла со структуройтеста/курса в формате qti (string).
     * @example: . path = tools.get_qti_path(courseDoc, _part );
     */
    get_qti_path() {
        return;
    }
    /**
     * Возвращает стандартный заголовок для XMLдокумент вида,<?xml version=”1.0”encoding=” utf-8”?>
     * @param нет.
     * @returns –  строка (string)вида <?xml version=”1.0”encoding=” utf-8”?>.
     * @example: . respStr =tools.xml_header() + resp.Body
     */
    xml_header() {
        return;
    }
    /**
     * Представляет результаты теста в XMLструктуре.
     * @param oSourceParam  (Xml element)  –элемент, в которомсодержится либо непустое поле lesson_report , либо непустое поле objects(массив с элементами), либо непустое поле core_lesson, для разбора.,* @param sQtiPathParam (string)необязательный – путь до файла со структурой теста в формате qti.,* @param sQtiTextParam (string)необязательный – структура  теста в формате qti.
     * @returns –  Xml структура содержащая результаты.
     * @example: . TopElem.annals_variant= tools.annals_decrypt( oSource, sQtiPath );
     */
    annals_decrypt() {
        return;
    }
    /**
     * Устаревшая функция. Представляет результаты теста в XML формате.
     * @param _core  (string)  –результатыдля дешифровки.,* @param _qti_path (string)необязательный – путь до файла со структурой теста в формате qti.,* @param _qti_text (string)необязательный  – структура  теста в формате qti.
     * @returns –  XMLдокумент, без отступов, но со стандартным XML заголовком на основе.
     * @example: . tools.report_decrypt(Ps )
     */
    report_decrypt() {
        return;
    }
    /**
     * Заполняет структуру annals  результатами теста в XML формате.
     * @param fldAnnalsObjectsTarget (Xml element)  – структура длязаполнения.,* @param sQtiPathParam (string)необязательный – путь до файла со структурой теста в формате qti.,* @param sQtiTextParam (string)необязательный – структура  теста в формате qti.
     * @returns –  нет.
     * @example: . tools.fill_annals_text(fldAnnals.au.history.objects, sQtiPathParam, sQtiTextParam );
     */
    fill_annals_text() {
        return;
    }
    /**
     * Заполняет структуру annals  результатами теста в XML формате.
     * @param _annals (Xml element) необязательный, еслипередана oAnnalsTarget– структура для заполнения.,* @param _qti_path (string)необязательный – путь до файла со структурой теста в формате qti.,* @param _qti_text (string)необязательный – структура  теста в формате qti.,* @param _learning_doc (TopElem)необязательный  – TopElem карточки теста.,* @param oAnnalsTarget (Xml element) необязательный, еслипередана _annals – структура для заполнения.
     * @returns –  заполненный XMLдокумент, без отступов.
     * @example: . TopElem.lesson_report= tools.get_annals_text_from_annals( TopElem.annals_variant.Object );
     */
    get_annals_text() {
        return;
    }
    /**
     * Закрывает заявку. При закрытии заявки вызывается код,обрабатывающий ее закрытие. Статус заявки не меняется в самой функции.
     * @param _request_id (int) – ID заявки для закрытия.
     * @returns - нет.
     * @example: .
     */
    close_request() {
        return;
    }
    /**
     * Вызов действия документооборота.
     * @param _source (Doc) – документ (Doc) объекта, относительно котороговызывается действие.,* @param _action_code (sting)– код действия документооборота.,* @param _workflow_id (int)– ID документооборота, действиекоторого выполняется.,* @param _workflow_doc (TopElem) необязательный –TopElem документооборота.,* @param _alterCurObjectID (int) необязательный. Если действие документооборота, этопечать печатной формы, то можно передать в этот параметр ID объекта, который будет передаваться в печатную форму как object_id.
     * @returns – структура со следующими полями 'result' – флаг да/нет (bool) успешное или неуспешное выполнение действия. 'workflow_success_action'– строка с XAML кодом,выполняющимся при успешном выполнении действия (обрабатывается в карточкезаявки на портале) 'workflow_action_message' - строка текстом сообщения при успешном выполнениидействия, (обрабатывается в карточке заявки на портале) 'workflow_create_break': флаг да/нет (bool). Прерывать или нетвыполнения действия (обрабатывается в карточке заявки на портале).
     * @example: . tools.workflow_action_process(docAssessmentPlan,curObject.fire_wf_action, curObject.workflow_id, curWorkflow); oWorkflowActionResult= tools.workflow_action_process( curObjectDoc, CONTEXT.action_id,curObject.workflow_id, curWorkflow ); Добавляет в системные lists новый список(списки) со значениям или обновляет старый. Входные параметры _url (sting)– путь до файла со Lists. _list_name (sting)необязательный –названия списка, значения которого будут обновлены на основеданных из файла. Возвращаемый результат – флаг да (bool)при любом (успешном или неуспешном) выполнение действия. Пример вызова . tools.obtain_lists(UrlAppendPath( 'x-local://custom/', temp_doc.lists_url ) );
     */
    workflow_action_processobtain_lists() {
        return;
    }
    /**
     * Устаревшая функция. Больше не используется. Функционалперенесен в объект мероприятие в функцию set_status. Меняет статус мероприятияна завершено.
     * @param _event_id (ID)  –ID мероприятия, которое нужнозавершить.,* @param _event_doc (Doc)необязательный –Doc мероприятия.
     * @returns –  Doc мероприятия.
     * @example: .
     */
    event_finish() {
        return;
    }
    /**
     * Устаревшая функция. Больше не используется. Функционалперенесен в объект мероприятие в функцию set_status. Меняет статус мероприятияна проводится.
     * @param _event_id (ID)  –ID мероприятия, которое нужнозавершить.,* @param _event_doc (Doc)необязательный –Doc мероприятия.,* @param oScreenParam (Screen)необязательный –экран, куда выводится сообщения (работает только при вызове изадминистратора WebTutor).
     * @returns –  Doc мероприятия.
     * @example: .
     */
    event_start() {
        return;
    }
    /**
     * Проверяет разрешение на доступ к указанному объекту дляуказанного пользователя. Проверка идет по уровню доступа, роли доступа, группамдоступа и условиям доступа, если в карточке объекта есть соответствующиенастройки.
     * @param _source_doc (TopElem) – TopElemобъекта, доступ к которому нужно проверить.,* @param _user_id (int) –ID сотрудника, для которогонужно проверить доступ.
     * @returns – флаг да/нет (bool),доступ разрешен или запрещен.
     * @example: . tools.check_access(curCourse,curUserID)
     */
    check_access() {
        return;
    }
    /**
     * Возвращает путь до xmd формы каталога или объекта каталога.
     * @param sCatalogNameParam (string) – название каталога (без s на конце).,* @param bIsCatalogParam (bool)  – флаг указывающий, нужно возвращать форму каталога (true), или форму объекта (false).
     * @returns – пусть до формы (string)начинающийся с «x-local».
     * @example: . sObjectFormUrl =tools.get_object_form_url( fldSourceObjectElem.Name, false );
     */
    get_object_form_url() {
        return;
    }
    /**
     * Создает новый объект в указанном каталоге.
     * @param sCatalogNameParam (string) – название каталога. Обычно указывается без s на конце.,* @param bIsCatalogParam (bool)  – флаг указывающий, что создается новая запись вкаталоге (true), или создается новый объект (false). Обычно передается false
     * @returns – Doc новогообъекта.
     * @example: . docObject =tools.new_doc_by_name( Ps.catalog_name, false );
     */
    new_doc_by_name() {
        return;
    }
    /**
     * Создает новый объект в указанном каталоге.
     * @param _pak_url (string)– пусть в файловой системе, куда нужно сохранить пакет.,* @param _report_id (int) – ID события базы, в котороебудет записываться отчет о процессе генерации.,* @param _param_source (XML element) – XML, который содержит поляprocess_custom_templates (bool) и process_access_roles (bool).process_custom_templates – в пакет добалуются выбранныенастраиваемые поля. process_access_roles - в пакет добалуются роли доступа.,* @param sPackIDParam(string) – строка с ID пакета для создания
     * @returns – количество добавленных в пакетобъектов (int).
     * @example: . counter = tools.create_package(_file_url, _report_id, Ps, _cur_id );
     */
    create_package() {
        return;
    }
    /**
     * Возвращает Doc документапо указанным условиям или null, если документ ненайден.
     * @param sObjectNameParam (string) – название каталога для поиска объекта (без s на конце).,* @param oKeyParam (variant) – если передается строка, то это название поля в каталоге, по которомупроисходит поиск значения, заданного oKeyValueParam. Если это массив свойств,то будет создано условие поиска. Где название свойства это название поля вкаталоге, по которому происходит поиск значения. А значение это значениеуказанного свойства.,* @param oKeyValueParam (string)– значение поля в каталоге, по которому происходит поиск.
     * @returns – Doc документа по указанным условиям или null,если документ не найден.
     * @example: . docObject =tools.get_doc_by_key( sObjectNameParam, oKeyParam, oKeyValueParam ); docUserData =tools.get_doc_by_key( 'user_data', 'code', String( oConditionsParam ) );
     */
    get_doc_by_key() {
        return;
    }
    /**
     * Возвращает Doc документапо указанным условиям, если документ не найден, то создает новый документ.
     * @param sObjectNameParam (string) – название каталога для поиска объекта (без s на конце).,* @param oKeyParam (variant) – если передается строка, то это название поля в каталоге, по которомупроисходит поиск значения, заданного oKeyValueParam. Если это массив свойств,то будет создано условие поиска. Где название свойства это название поля вкаталоге, по которому происходит поиск значения. А значение это значениеуказанного свойства.,* @param oKeyValueParam (string)– значение поля в каталоге, по которому происходит поиск.
     * @returns – Doc документа.
     * @example: . docItem =tools.obtain_doc_by_key( 'item', 'code', _item.ident.Value );docUserData = docExchangeServer= tools.obtain_doc_by_key( 'exchange_server', 'code', String( _cur_code ) );
     */
    obtain_doc_by_key() {
        return;
    }
    /**
     * Получает длительность в секундах из строки формата постандарту ISO8601 вида P3Y6M4DT12H30M17S (это отрезок времени в 3 года 6 месяцев 4 суток 12 часов 30 минути 17 секунд).
     * @param _duration (string)– длительность в формате ISO 8601 вида P3Y6M4DT12H30M17S
     * @returns – длительность в секундах (int).
     * @example: . _dur = tools.get_seconds_from_duration(qtiDoc.duration );
     */
    get_seconds_from_duration() {
        return;
    }
    /**
     * Заполняет карточку теста и создает вопросы к нему на основе qti описания теста
     * @param _assessment_id (int) необязательный, еслипередается _source – ID теста.,* @param _source (TopElem) – TopElem теста.,* @param _qti_text (string) – структура  теста вформате qti.
     * @returns – нет.
     * @example: . tools.assessment_filling_from_qti(docAssessment.DocID, docAssessment.TopElem, _event.test.qti_text );
     */
    assessment_filling_from_qti() {
        return;
    }
    /**
     * Отправляет письмо об изменении в блоке, форуме, сообщениифорума или документе портала, всем подписанным на изменения пользователям, иликонкретному пользователю.
     * @param _document_id  (int)необязательный, если передается _source – ID объекта,для рассылки изменений.,* @param _source (TopElem) – TopElem объекта.,* @param iPersonIDParam (int)– ID сотрудника, которому нужноотправить сообщение.
     * @returns – массив каталожных записей сподписками, по которым произошла рассылка.
     * @example: . tools.submit_subscriptions(TopElem.blog_id, _cur_blog );
     */
    submit_subscriptions() {
        return;
    }
    /**
     * Создает строку условий для использования в выражении where в XQueryзапросе на основе структуры с описанием условий.
     * @param _conditions (XML element) условия выборки. Структура вида.,* @param <conditionMULTIPLE="1">,* @param <fieldTYPE="string"/>,* @param <title TYPE="string"/>,* @param <value TYPE="string "/>,* @param <type TYPE="string" NOT-NULL="1"DEFAULT="string"/>,* @param <option_type TYPE="string"NOT-NULL="1" DEFAULT="eq" FOREIGN-ARRAY="common.all_option_types"/>,* @param <is_custom_field TYPE="bool"NULL-FALSE="1" DEFAULT="false"/>,* @param <and_or TYPE="string"NOT-NULL="1" DEFAULT="and"/>,* @param <is_multiple TYPE="bool"NULL-FALSE="1" DEFAULT="false"/>,* @param <value_multiple TYPE="string"MULTIPLE="1"/>,* @param <bracket TYPE="string"/>,* @param </condition>,* @param Сзаданными условиями.,* @param _cond (string) необязательный – строка,которая может быть использована как префикс к формируемой функцией строке.,* @param _elem_name (string)необязательный – название переменной в формируемой строке. По умолчанию elem. ( $elem)
     * @returns – строка условий для использования ввыражении where в XQuery запросе.
     * @example: . tools.create_filter_xquery(Ps.conditions );
     */
    create_filter_xquery() {
        return;
    }
    /**
     * Создает строку условий для использования в выражении типа eval в коде администратора WebTutor или в серверном коде на основе структуры с описаниемусловий.
     * @param _conditions(XML element)условия выборки. Структура вида.,* @param <conditionMULTIPLE="1">,* @param <fieldTYPE="string"/>,* @param <title TYPE="string"/>,* @param <value TYPE="string "/>,* @param <type TYPE="string" NOT-NULL="1"DEFAULT="string"/>,* @param <option_type TYPE="string"NOT-NULL="1" DEFAULT="eq" FOREIGN-ARRAY="common.all_option_types"/>,* @param <is_custom_field TYPE="bool"NULL-FALSE="1" DEFAULT="false"/>,* @param <and_or TYPE="string"NOT-NULL="1" DEFAULT="and"/>,* @param <is_multiple TYPE="bool"NULL-FALSE="1" DEFAULT="false"/>,* @param <value_multiple TYPE="string"MULTIPLE="1"/>,* @param <bracket TYPE="string"/>,* @param </condition>,* @param Сзаданными условиями.,* @param _first_cond (string)необязательный – строка, которая может быть использована как префикс кформируемой функцией строке.,* @param _elem_name (string)необязательный – название переменной в формируемой строке. По умолчанию «curObject.».
     * @returns – строка условий для использования ввыражении eval.
     * @example: . tools.create_filter_javascript(Ps.conditions, null, '' );
     */
    create_filter_javascript() {
        return;
    }
    /**
     * Обновляет значения текущих настраиваемых полей в системе наоснове списка, указанного в параметрах.
     * @param _url (string) необязательный, если передан _source.  Путь до файлас структурой списка (List) из которого будутзагружаться данные.,* @param _source (TopElem)необязательный – list дляобновления.
     * @returns – количество обновленных элементовсписка.
     * @example: . iCounter = tools.obtain_custom_templates(UrlAppendPath( 'x-local://custom/', temp_doc.custom_templates_url ) );
     */
    obtain_custom_templates() {
        return;
    }
    /**
     * Обновляет значения ролей в системе на основе списка,указанного в параметрах.
     * @param _url (string) необязательный, если передан _source.  Путь до файлас структурой списка (List) из которого будутзагружаться данные.,* @param _source (TopElem)необязательный – list дляобновления.
     * @returns – количество обновленных элементовсписка.
     * @example: . iCounter = tools.obtain_custom_templates(UrlAppendPath( 'x-local://custom/', temp_doc.custom_templates_url ) );
     */
    obtain_access_roles() {
        return;
    }
    /**
     * Импортирует курс в систему из указанного файла.
     * @param _file (string) путь до файла.
     * @returns – флаг (bool)да (true) в любом случае.
     * @example: .
     */
    import_course() {
        return;
    }
    /**
     * Устаревшая функция. Больше не используется. Применялась дляраспределенной системы для проставления необходимых для настройки обмена параметров.
     * @param Нет.
     * @returns – нет.
     * @example: .
     */
    process_skk() {
        return;
    }
    /**
     * Возвращает значение параметра, переданного в функцию, взашифрованном виде. Вид шифрования указывается в общих настройках (Форматхранения и проверки пароля): md5, sha1, sha1_base64 .
     * @param PASSWORD (string)– строка для преобразования.,* @param CHECK (bool)– флаг, показывающий, что получаемая в результате преобразования строка будетиспользоваться для проверки пароля (true). Это значит,что их строки будут удалены открывающаяся “(” и закрывающаяся “)” скобки для  md5,sha1, sha1_base64. В противном случае (false), будетвозвращена строка в () в указанном в настройках формате md5, sha1, sha1_base64или без скобок для формата Plain.
     * @returns – строка (string),преобразованная в соответствие с параметрами вызова.
     * @example: . Ps.password = tools.make_password(NewValue, true ); if (tools.make_password( curUser.password, true ) != tools.make_password(formDoc.user.password, false ) )
     */
    make_password() {
        return;
    }
    /**
     * Возвращает версию и дату модификации из файла history .Поиск файла history может происходить в разных местоположениях в зависимости отпараметров функции.
     * @param _type (string)необязательный  – строка, указывающая какой именно файл history нужно открытьдля получения версии и даты модификации. По умолчанию wtv.,* @param wtv - history из файла history.xml папка wtv.,* @param qti - history из файла history.xml папка qti.,* @param assessment - history из файла history_ass.xml папкаwtv.,* @param last - history из файла history.xml папка last.
     * @returns – строка (string)строка вида “версия (дата модификации)”.
     * @example: . lastVersion =tools.get_version( 'last' ); newVersion =tools.get_version();
     */
    get_version() {
        return;
    }
    /**
     * Функция возвращает набор заполненных настраиваемых полей дляданного каталога  и данного документа. Если указан только первый параметр,вернет список полей без значений.
     * @param _catalog (string)- строка с названием каталога без ‘s’ на конце.,* @param _top_id (int)необязательный – ID документа,для которого нужно вернуть набор полей.,* @param _source  (TopElem)необязательный – TopElem документа,для которого нужно вернуть набор полей.
     * @returns – XML с набором заполненных настраиваемых полей для данногокаталога  и данного документа.
     * @example: . fldCustomTemplate= tools.get_custom_template( 'collaborator', null, null ); fldCustomElems =tools.get_custom_template('request_type',filRequestType.id);
     */
    get_custom_template() {
        return;
    }
    /**
     * Функция меняет статус указанного сотрудника у поля «Временнозапрещен доступ на портал». Функция отправляет уведомления сотруднику об изменениидоступа.
     * @param _person_id (int)– ID сотрудника для установкизначения поля «Временно запрещен доступ на портал».,* @param _status (bool)– доступ запрещен (true), доступ разрешен (false).,* @param _source (Doc)необязательный –Doc документа,для которого поменять значение в поле.,* @param _check_admin (bool)необязательный – если значение параметра (true) менятьзначение можно только у сотрудников не являющихся администраторами.
     * @returns – флаг да/нет (bool)успех или неуспех смены статуса доступа на портал.
     * @example: . if (tools.set_web_ban( eval( '_env' + Ps.row_list_field + Ps.row_key_field ), false) )
     */
    set_web_ban() {
        return;
    }
    /**
     * Заполняет данные для отображения списка объектов в блоке вразделах администратора. Используется для отображения таких настраиваемыхотчетов, настраиваемых типов документов, типов заявок и типов отзывов в нужныхразделах администратора WebTutor через функцию tools.disp_block_filling.
     * @param _source (TopElem)– TopElem объекта, которыйнужно отобразить в блоке.,* @param _disp_block (Xml element)  –Xml структуравида.,* @param <disp_block>,* @param <access_block_type TYPE="string"/> Кодблока в который нужно добавить объект,* @param <obj_titleTYPE="string"/> Название объекта, под которым он будетотображаться,* @param <custom_flagTYPE="bool"/> Стандартный или настраиваемый объект (нужнопередавать true),* @param </disp_block>,* @param Если передать<disp_block> </disp_block>, то список объетовбудет удален их описания соответствующего раздела.,* @param _disp_object_blocks(Xml element)– существующие блоки для отображения,* @param _source_id (int) – объекта, который нужно отобразить в блоке.
     * @returns – нет.
     * @example: . tools.disp_block_filling_by_source(_source, _disp_block, disp_object_blocks, _source.Doc.DocID );
     */
    disp_block_filling_by_source() {
        return;
    }
    /**
     * Заполняет данные для отображения списка объектов в блоке вразделах администратора. Используется для отображения таких настраиваемыхотчетов, настраиваемых типов документов, типов заявок и типов отзывов в нужныхразделах администратора WebTutor.
     * @param _source (TopElem)– TopElem объекта, которыйнужно отобразить в блоке.,* @param _disp_block (Xml element)  –Xml структуравида.,* @param <disp_block>,* @param <access_block_type TYPE="string"/> Кодблока в который нужно добавить объект,* @param <obj_titleTYPE="string"/> Название объекта, под которым он будетотображаться,* @param <custom_flagTYPE="bool"/> Стандартный или настраиваемый объект (нужнопередавать true),* @param </disp_block>,* @param Если передать<disp_block> </disp_block>, то список объетовбудет удален их описания соответствующего раздела.
     * @returns – нет.
     * @example: . tools.disp_block_filling(TopElem, TopElem.disp_block );
     */
    disp_block_filling() {
        return;
    }
    /**
     * Конструирует строку для использования в запросе XQuery на основе указанных параметров.
     * @param _catalog_name (string)– строка с названием каталога без ‘s’ на конце, по которомубудет происходить поиск в запросе.,* @param _xquery_qual (string)необязательный – строка с текстом условий поиска, который используется вконструкции where. Они будут добавлены к условиямзаданными в других параметрах функции (_filter_xquery и _ft_filter),* @param _filter_xquery (string) необязательный  - строка с текстом условий поиска, который используется вконструкции where. Они будут добавлены к условиямзаданными в других параметрах функции (_xquery_qual  и _ft_filter),* @param _ft_filter (string) необязательный  - строка с текстом для полнотекстового поиска в документе,который используется в конструкции where. Они будутдобавлены к условиям заданными в других параметрах функции (_xquery_qual  и _filter_xquery).,* @param _order_str (string) необязательный  - строка названий полей разделенных (,) по которым будетпроисходить сортировка в запросе.,* @param _order_dir (string)необязательный  - строка, указывающая направление сортировки (по умолчанию +,то есть asсending). Дляуказания descending, значение параметра может быть '-' или 'descending' или 'desc'.,* @param _is_hier (bool) необязательный  по умолчанию false. Нужно ли создаватьиерархию в результате запроса. Если параметр будет true,то в строку запроса будет добавлен  $elem/Hier().,* @param _foreign_field (string)  необязательный, поумолчанию ‘id’. Если в запросе будет использоватьсяполнотекстовый поиск (параметр _ft_filter), то можно указать поле отличное от id, которое содержит id документа.,* @param oColumnsParam (Xml element) необязательный – колонки,например, из view_types.xml для возврата по результатам запроса.
     * @returns – строка (string) для использования в запросе XQuery на основе указанныхпараметров.
     * @example: . query =tools.create_xquery( 'event_collaborator', xqueryQualExpr , '', _ft_filter,_cur_view_type.columns.Child( List.GetCurSortColumnIndex() ).order,List.GetCurSortDir(), false, primaryKeyExpr ); query =tools.create_xquery( Ps.catalog_name, Ps.xquery_qual, sFilterXquery,Ps.filter.fulltext, ( Ps.use_common_columns ? _cur_column.order : '$elem/' +_cur_column.name ), List.GetCurSortDir(), Ps.is_hier, null, Ps );
     */
    create_xquery() {
        return;
    }
    /**
     * Осуществляет обработку заявки. Выполняет стандартнуюобработку заявки по типу прикреплённого объекта (если в типе заявки не снятпризнак «Использовать стандартную обработку для данного типа объекта»).Выполняет код обработки заявки из типа заявки. Меняет статус у заявки на «закрыта»и проставляет дату закрытия заявки. Если стандартная обработка включаетотправку уведомлений, то будут отправлены уведомления.
     * @param iRequestID (int)– ID заявки для обработки.,* @param docRequest (Doc)необязательный –Doc заявки дляобработки.
     * @returns – Doc обработанной и сохраненной заявки.
     * @example: . tools.request_processing(docRequest.DocID, docRequest );
     */
    request_processing() {
        return;
    }
    /**
     * Осуществляет отмену (отклонение) заявки. Выполняет действияпо отклонению заявки по типу прикреплённого объекта (если в типе заявки не снятпризнак «Использовать стандартную обработку для данного типа объекта»).Выполняет код отмены заявки из типа заявки. Меняет статус у заявки на «отмена»и проставляет дату закрытия заявки. Если стандартная обработка включаетотправку уведомлений, то будут отправлены уведомления.
     * @param iRequestID (int)– ID заявки для отмены.,* @param docRequest (Doc)необязательный –Doc заявки дляобработки.,* @param iPersonID (int)необязательный – ID сотрудника.Если будет совпадать с id подавшегозаявку, то руководителю будет отправлено уведомление, что подчиненный сотрудникотменил заявку.
     * @returns – Doc обработанной и сохраненной заявки.
     * @example: . tools.request_rejecting(_source.DocID, _source );
     */
    request_rejecting() {
        return;
    }
    /**
     * Добавляет участника в мероприятие.
     * @param iPersonIDParam (int)– ID сотрудника для добавления.,* @param iEventIDParam (int)– ID мероприятия для добавления сотрудника.,* @param tePersonParam (TopElem)необязательный –TopElem сотрудника для добавления.,* @param docEventParam (Doc)необязательный – Doc мероприятиядля добавления сотрудника.,* @param iEducationPlanIDParam (int) – ID планаобучения добавляемого сотрудника. Если указан, то ссылка на план сохранится врезультате мероприятия сотрудника.,* @param iRequestPersonIDParam (int) –  ID сотрудника,подавшего заявку на добавление  сотрудника в мероприятие. Если указан, тоссылка на сотрудника, подавшего заявку, сохранится в результате мероприятиясотрудника.,* @param iRequestIDParam (int) – ID заявкина включение сотрудника в состав участников мероприятия. Если указан, то ссылкана заявку сохранится в результате мероприятия сотрудника.
     * @returns – Doc мероприятия, к которое добавлялся сотрудник.
     * @example: . tools.add_person_to_event(_source.TopElem.person_id, _source.TopElem.object_id, null, docObject );
     */
    add_person_to_event() {
        return;
    }
    /**
     * Удаляет участника из мероприятия.
     * @param _person_id (int)– ID сотрудника для удаления.,* @param _event_id (int)– ID мероприятия для удаления сотрудника.,* @param _doc_event (Doc)необязательный – Doc мероприятиядля удаления сотрудника.,* @param _flag_save (bool)необязательный, по умолчанию  true. true – сохранять, false –несохранять карточку мероприятия после добавления сотрудника.
     * @returns – Doc мероприятия, к которое добавлялся сотрудник.
     * @example: . _doc =tools.del_person_from_event( _person.PrimaryKey, curObjectID, curObjectDoc,false );
     */
    del_person_from_event() {
        return;
    }
    /**
     * Пересохраняет объекты указанного каталога.
     * @param _catalog_name (string)– название каталога без ‘s’ на конце, объекты которогонужно пересохранить.,* @param _data_flag (bool)необязательный, по умолчанию  false. true – проставлять, false –не проставлять текущую дату в качестве даты модификацииобъекта.,* @param _id_flag (bool)необязательный, по умолчанию  false. true (значение присваивается только если _data_flag равен true)– проставлять, false –не проставлять текущий под сервера для не присвоенныхобъектов.
     * @returns – нет.
     * @example: . ServerEval('tools.catalog_resave(\''+ _screen.catalog_name + '\',' + _save_flag + ',' + _id_flag + ')');
     */
    catalog_resave() {
        return;
    }
    /**
     * Шифрует указанный курс для его использования в Personal WebTutor.
     * @param iCourseIDParam (int)– ID курса.
     * @returns – нет.
     * @example: . ServerEval('tools.encrypt_content(' + TopElem.Doc.DocID + ')' );
     */
    encrypt_content() {
        return;
    }
    /**
     * Преобразует материал библиотеки, к которому приложен файлтипа pdf в формат, доступныйдля чтения на портале WebTutor.
     * @param iMaterialId(int) – ID материалабиблиотеки.
     * @returns – Doc материала библиотеки.
     * @example: . ServerEval('tools.encrypt_content(' + TopElem.Doc.DocID + ')' );
     */
    convert_pdf_libratry_material() {
        return;
    }
    /**
     * Инициализирует библиотеку для работы с лицензиями и зашифрованнымис помощью этих лицензий объектами.
     * @param нет
     * @returns нет.
     * @example: . нет
     */
    init_encrypt_lib() {
        return;
    }
    /**
     * Свойство. Возвращает ссылку на объект библиотекиинициализированную функцией init_encrypt_lib.
     * @param нет
     * @returns ссылка.
     * @example: . tools.encrypt_lib.Object;
     */
    encrypt_lib() {
        return;
    }
    /**
     * Свойство. Возвращает объект библиотеки инициализированнуюфункцией init_encrypt_lib.
     * @param нет
     * @returns ссылка.
     * @example: . tools.encrypt_lib_obj.Encrypt_Init();
     */
    encrypt_lib_obj() {
        return;
    }
    /**
     * Создает файл с объектом, зашифрованным с использованиемуказанной лицензией.
     * @param iLicenseId (int)– ID лицензии для созданияфайла.,* @param sOutPath (string)необязательный  – строка пути до файла, по умолчанию это папка temp администратора или сервера WebTutor.
     * @returns  (string)строка пути до файла.
     * @example: . ServerEval('tools.create_license('+ TopElem.Doc.DocID + ', \'' + StrReplace(UrlToFilePath(sServerTempUrl), '\\','\\\\') + '\')');
     */
    create_license() {
        return;
    }
    /**
     * Восстанавливает значение для пустых констант в системе.
     * @param _lng_id (string)– ID языка, для которого нужновосстановить значения констант.,* @param _source (XML element) – элемент, в дочернихэлементах которого происходит поиск язык по _lng_id  для восстановлениязначений.
     * @returns  (int) количествовосстановленных элементов.
     * @example: . iResCount =tools.recovery_empty_lng_const( fldLngChild.PrimaryKey, fldLngChild );
     */
    recovery_empty_lng_const() {
        return;
    }
    /**
     * Запускает системный агент на выполнение.
     * @param _agent_id (int)– ID агента для запуска.,* @param _element_id (int)необязательный  – ID объекта,над которым запускается агента (например, в списке).,* @param _elems_id_str(string)необязательный  – ID объектовразделенных «;», над которым запускается агента (например, в списке).,* @param dDateParam(data) необязательный  – дата запуска агента, поумолчанию текущая дата.,* @param sTenancyNameParam(string) необязательный  – код экземпляра системы в multitenant системе, в котором нужнозапустить агент.
     * @returns – флаг да/нет (bool)успех или неуспех выполнения агента.
     * @example: . tools.start_agent(_agent_id, _element_id, _elems_id_str, dDate, sTenancyName );
     */
    start_agent() {
        return;
    }
    /**
     * Импортирует данные, полученные из Personal WebTutor. Если в данных указанпользователь, который есть в системе, или ID пользователя передан в параметрах функции, то данные пообучению привязываются к нему.
     * @param _xml (string)–файл с данными XML.,* @param _user_id (int)необязательный  – ID пользователядля привязки полученных данных.,* @param _report_id (int)необязательный  – ID объектасобытий базы, в которой добавится отчет о загрузке (если не указан, то будетсоздан новый отчет).,* @param _file_url (string)необязательный  – путь до файла с данными.
     * @returns – строка (string)с ERROR=1 если произошла ошибка, или строка вида ERROR=0\nPROCESS_NUM=Количествозагруженных\nFAILED_NUM=количество не загруженных результатов.
     * @example: . alert(tools.import_pwt_data_xml(LoadUrlData( _url ), null, null, _url ));
     */
    import_pwt_data_xml() {
        return;
    }
    /**
     * Используется в функции import_pwt_data_xml.Дешифрует XML с данные,полученные из Personal WebTutor.
     * @param _str (string)–строка для преобразования.
     * @returns – дешифрованная строка (string).
     * @example: . _xml = tools.decript_pwt_data_str( _xml);
     */
    decript_pwt_data_str() {
        return;
    }
    /**
     * Обновляет структуру разделов активных электронных курсов.
     * @param _learning_id (int) –– ID активного электронного курса структуру, которого нужнообновить.,* @param _course_doc (TopElem)– TopElem электронного курса,структура которого обновляется.,* @param _doc_learning (Doc)необязательный  – Doc активногоэлектронного курса структуру, которого нужно обновить.
     * @returns – флаг (bool)да (true) в любом случае.
     * @example: . tools.update_course_parts_structure(_learning.PrimaryKey, TopElem );
     */
    update_course_parts_structure() {
        return;
    }
    /**
     * Возвращает массив каталожных записей сотрудников, состоящийиз непосредственных подчиненных указанного сотрудника.
     * @param iUserId (int)–– ID сотрудника, для которогоидет поиск подчиенных.
     * @returns – массив каталожных записейсотрудников, состоящий из непосредственных подчиненных указанного сотрудника.
     * @example: .
     */
    get_direct_sub_person_ids() {
        return;
    }
    /**
     * Возвращает массив ID сотрудников указанного подразделения и дочернихподразделений.
     * @param _subdivision_id (int)  – ID подразделения,сотрудников которого нужно найти.,* @param sConditionsParam (string) необязательный  – дополнительное условие для поискасотрудников. Будет добавлено в условия поиска с использованием and в запросе.
     * @returns – массив ID сотрудников указанного подразделения и дочернихподразделений.
     * @example: . _ids_array =tools.get_sub_person_ids_by_subdivision_id( _subdivision_id, sConditionsParam); arrPersonID =tools.get_sub_person_ids_by_subdivision_id( curNodeID );
     */
    get_sub_person_ids_by_subdivision_id() {
        return;
    }
    /**
     * Возвращает массив каталожных записей сотрудников указанногоподразделения и дочерних подразделений.
     * @param _subdivision_id (int)  – ID подразделения,сотрудников которого нужно найти.,* @param sConditionsParam (string) необязательный  – дополнительное условие для поискасотрудников. Будет добавлено в условия поиска с использованием and в запросе.
     * @returns – массив каталожных записейсотрудников указанного подразделения и дочерних подразделений.
     * @example: . array =tools.get_sub_persons_by_subdivision_id( ListElem.id );
     */
    get_sub_persons_by_subdivision_id() {
        return;
    }
    /**
     * Возвращает массив ID подчинённых сотрудников (как непосредственных, так иподчинённых подчиненных) указанного сотрудника.
     * @param _manager_id (int) – ID сотрудника, для которогонужно найти подчиненных.,* @param _catalog_names (string)необязательный  native – поисктолько непосредственного руководителя по должности. not_native руководительлюбого типа группы, сотрудника, подразделения, организации. Можно передатьлюбой набор из следующих каталогов (collaborator, group, org,position, subdivision), разделенных запятой. Тогда поиск будет происходить только среди объектовуказанных каталогов.,* @param vBossType (variant)– true поиск тольконепосредственного руководителя. False поиск толькофункционального руководителя без признака непосредственный. Если передать ID нужного типа руководителя, тобудет осуществлен поиск подчинённых сотрудников только для руководителя указанноготипа.,* @param iLimitParam (int)необязательный – так как массив подчиненных может быть очень большим дляруководителя высокого уровня и процесс поиска может быть достаточно долгим, тов этом параметре можно указать максимальное количество подчиненных для поиска.Если будет найдено больше записей, чем указанно, то будет возвращено толькоуказанное количество, а процесс поиска будет остановлен.,* @param sSearchParam (string)необязательный. Если задан, то ФИО подчиненных сотрудников должны  содержатьуказанные в параметре символы.
     * @returns – массив ID подчинённых сотрудников.
     * @example: . personArray = tools.get_sub_person_ids_by_func_manager_id(curUserID ); curSubPersonIDsByManagerIDSearch= tools.get_sub_person_ids_by_func_manager_id( curUserID, null, null, null,search_fullname );
     */
    get_sub_person_ids_by_func_manager_id() {
        return;
    }
    /**
     * Возвращает массив каталожных записей подчинённых сотрудников(как непосредственных, так и подчинённых подчиненных) указанного сотрудника.
     * @param iManagerIDParam (int)  – ID сотрудника,для которого нужно найти подчиненных.,* @param sCatalogNamesParam (string) необязательный  native – поиск только непосредственного руководителя по должности. not_nativeруководитель любого типа группы, сотрудника, подразделения, организации. Можнопередать любой набор из следующих каталогов (collaborator, group, org,position,subdivision) , разделенных запятой. Тогда поиск будет происходить только средиобъектов указанных каталогов.,* @param vBossType (variant)– true поиск тольконепосредственного руководителя. False поиск толькофункционального руководителя без признака непосредственный. Если передать ID нужного типа руководителя, тобудет осуществлен поиск подчинённых сотрудников только для руководителяуказанного типа.
     * @returns – массив каталожных записей подчинённыхсотрудников.
     * @example: . _res =tools.get_sub_persons_by_func_manager_id(initiator_person_id,'not_native'); _res =tools.get_sub_persons_by_func_manager_id(initiator_person_id,'native'); _res = tools.get_sub_persons_by_func_manager_id(initiator_person_id);
     */
    get_sub_persons_by_func_manager_id() {
        return;
    }
    /**
     * Возвращает массив каталожных записей подчинённыхподразделений (как непосредственных, так и дочерних) указанного сотрудника.Сотрудник может быть руководителем любого типа.
     * @param _manager_id (int) – ID сотрудника, для которогонужно найти подразделения.
     * @returns – массив каталожных записей подчинённыхподразделений.
     * @example: . arrDepSubs=tools.get_all_subs_by_func_manager_id(iUserID)
     */
    get_all_subs_by_func_manager_id() {
        return;
    }
    /**
     * Назначает тест в рамках тестирования с ДУ для участниковуказанного мероприятия.
     * @param _event_id (int)–– ID мероприятия, участникамкоторого назначается тест.,* @param _doc_event (Doc)необязательный  – Doc мероприятия.
     * @returns – измененный и сохраненный Doc мероприятия.
     * @example: . ServerEval('tools.start_real_test(' + Ps.Doc.DocID + ')' );
     */
    start_real_test() {
        return;
    }
    /**
     * Заполняет информацию о прохождении теста (annals)в карточке незавершённого теста, назначенного в рамках тестирования с ДУ дляучастников указанного мероприятия. Тест завершается. Действия производятся совсеми участниками мероприятия, которым был назначен данный тест.
     * @param _text (Xml)– Xml  с данными о прохождении теста участниками.,* @param _assessment_id (int)–– ID теста.,* @param _assessment_doc (TopElem)необязательный  –TopElem теста.
     * @returns – количество (int)участников мероприятия, для которых была внесена информация по тесту.
     * @example: . ServerEval('tools.put_collaborator_annals(\'' + formDoc.Xml + '\',' +TopElem.assessment_id + ')' );
     */
    put_collaborator_annals() {
        return;
    }
    /**
     * Завершает тест, назначенный в рамках тестирования с ДУ дляучастников указанного мероприятия. Тест завершается. Действия производятся совсеми участниками мероприятия, которым был назначен данный тест.
     * @param _event_id (int) необязательный,  еслипередан _doc_event –– ID мероприятия.,* @param _doc_event (Doc) необязательный  –Doc мероприятия теста.,* @param _assessment_id (int) необязательный –– ID теста.,* @param _assessment_doc (TopElem) необязательный  –TopElem теста.
     * @returns – нет.
     * @example: . ServerEval('tools.finish_real_test(' + Ps.Doc.DocID + ')' );
     */
    finish_real_test() {
        return;
    }
    /**
     * Выполняет eval указного в параметрахфункции файла.
     * @param _url (string)–– путь до файла.,* @param _doc_id (int)необязательный  – если указан, то будет открыт объект по указанному id. В этом случае в коде файла, открытый объект будетдоступен в коде. docObject – Doc открытогообъекта, TopElem – TopElem открытого объекта, Ps – TopElem открытогообъекта.,* @param _rnd_id (string)необязательный ––  строка с названием файла. Если указана, то после выполнения eval файла, результат будет сохраненв папку trash/temp/  с названием указанным в переменной.
     * @returns –строка (string),полученная после eval файла.
     * @example: . ServerEval('tools.eval_code_page_url(\'x-local://templates/poll_results_report.html\',' +TopElem.Doc.DocID + ',' + _rnd_id + ')' );
     */
    eval_code_page_url() {
        return;
    }
    /**
     * Свойство. ID текущегопользователя WebTutor администратор.,Пример вызова,.
     * @param Свойство. ID текущегопользователя WebTutor администратор.,* @param Пример вызова,* @param .
     * @returns Свойство. ID текущегопользователя WebTutor администратор.
     * @example: . tools.cur_user_id
     */
    cur_user_id() {
        return;
    }
    /**
     * Свойство. TopElem текущегопользователя WebTutor администратор.,Пример вызова,.
     * @param Свойство. TopElem текущегопользователя WebTutor администратор.,* @param Пример вызова,* @param .
     * @returns Свойство. TopElem текущегопользователя WebTutor администратор.
     * @example: . returncur_user.Object
     */
    cur_user() {
        return;
    }
    /**
     * Свойство. Список каталожных записей из групп текущегопользователя WebTutor администратор.,Пример вызова,.
     * @param Свойство. Список каталожных записей из групп текущегопользователя WebTutor администратор.,* @param Пример вызова,* @param .
     * @returns Свойство. Список каталожных записей из групп текущегопользователя WebTutor администратор.
     * @example: . cur_user_groups.Object
     */
    cur_user_groups() {
        return;
    }
    /**
     * Возвращает TopElem текущегопользователя WebTutor администраториз свойства cur_user.
     * @param нет.
     * @returns – TopElem текущего пользователя.
     * @example: . curUser = tools.get_cur_user();
     */
    get_cur_user() {
        return;
    }
    /**
     * Обновляет  текущего пользователя WebTutor администратор в свойстве cur_user и ID в cur_user_id.
     * @param нет.
     * @returns – TopElem текущего пользователя или null еслизаполнение не удалось.
     * @example: . tools.update_cur_user();
     */
    update_cur_user() {
        return;
    }
    /**
     * Возвращает список каталожных записей из групп текущегопользователя WebTutor администраториз свойства cur_user_groups.
     * @param нет.
     * @returns – список каталожных записей из групп текущегопользователя.
     * @example: . for ( _group in tools.get_cur_user_groups())
     */
    get_cur_user_groups() {
        return;
    }
    /**
     * Обновляет  список каталожных записей из групп текущегопользователя WebTutor администраторв свойстве cur_user_groups.
     * @param нет.
     * @returns – список каталожных записей из групп текущегопользователя или null если заполнение не удалось.
     * @example: . tools.update_cur_user_groups();
     */
    update_cur_user_groups() {
        return;
    }
    /**
     * Обновляет указанный фильтр в администраторе WebTutor.
     * @param _source_conditions (Xml) –– структура,содержащая текущие условия поиска.,* @param _catalog_name (string)––  строка с названием каталога, для которого используется фильтр.,* @param _scheme_id (string)необязательный  – ID фильтрадля обновления.,* @param _set_flag (bool)необязательный. Если укащанный фильтр проставляется в качестве выбранного длякаталога в администраторе WebTutor.
     * @returns – нет.
     * @example: . tools.update_filter_conditions(Ps.conditions, _filter_catalog, Ps.scheme_id );
     */
    update_filter_conditions() {
        return;
    }
    /**
     * Проверяет доступ к объекту на основе настроек в «Отображениикаталогов» для текущего пользователя в WebTutor администратор.
     * @param teObjectParam (TopElem)–– TopElem объекта, к которомупроверяется доступ.
     * @returns – флаг (bool)да (true)  -доступ разрешен, нет (false)- доступ запрещен.
     * @example: . tools.admin_access_filling(TopElem );
     */
    admin_access_filling() {
        return;
    }
    /**
     * Копирует параметры доступа к объекту  из одного объекта вдругой.
     * @param _to_obj_id (int)необязательный,  если передан _to_obj_doc–– ID объекта, в который нужно скопировать параметры доступа.,* @param _to_obj_doc (TopElem)необязательный  – TopElem объекта, в который нужноскопировать параметры доступа.,* @param _from_obj_id (int)необязательный,  если передан _from_obj_doc –– ID объекта, из которого нужно скопировать параметры доступа.,* @param _from_obj_doc (TopElem)необязательный  – объекта, из которого нужно скопировать параметры доступа.
     * @returns нет.
     * @example: . tools.admin_access_copying('', docEventResult.TopElem,'', topElem);
     */
    admin_access_copying() {
        return;
    }
    /**
     * Используется в процессе выгрузке/загрузки данных в WebTutor при интеграции с другимисистемами. Заменяет в строке символы определенные символы в [].,[yyyy] меняется на 4 символа года издаты.,[yy] меняется на 2 последних символагода из даты.,[mm] и [m]меняется на месяц из даты.,[dd] и [d]меняется на день из даты.,[hh] и [h]меняется на часы из даты.,[mimi] и [mi]меняется на минуты из даты.,[ss] и [s]меняется на секунды из даты.,[AppDirectoryPath] меняется на функциюAppDirectoryPath().
     * @param _str (string)стока для преобразования.,* @param _date (date)необязательный  – дата, данные из которой берутся для замены символов в строке,по умолчанию текущая дата и время.
     * @returns – преобразованная строка (string).
     * @example: . var _path =tools.replace_temlate_tags( _source.db_path );
     */
    replace_temlate_tags() {
        return;
    }
    /**
     * Используется в администраторе в форме редактирования условийдокументооборота. Формирует на основе стандартных значений, доступных ввыпадающем списке условий документооборота, строку. Эта строка в дальнейшемвыполняется в eval для определения видимости/редактированияобъектов по документообороту.
     * @param _conditions (Xml element) – структура с условиямидокументооборота.,* @param <conditions>,* @param <conditionMULTIPLE="1">,* @param <type TYPE="string"/>,* @param <workflow_field_id TYPE="string"/>,* @param <workflow_field_value TYPE="string"/>,* @param <workflow_state_id TYPE="string"/>,* @param <cur_user_type TYPE="string"/>,* @param <and_or TYPE="string"NOT-NULL="1" DEFAULT="&amp;&amp;"/>,* @param <begin_bracket TYPE="string"/>,* @param <finish_bracket TYPE="string"/>,* @param <usl TYPE="string"/>,* @param <person_id TYPE="integer"FOREIGN-ARRAY="collaborators"/>,* @param <eval_str TYPE="string"/>,* @param <cur_access_role TYPE="string"FOREIGN-ARRAY="access_roles"/>,* @param <cur_parent_object_id TYPE="integer"FOREIGN-ARRAY="subdivisions"/>,* @param <org_id TYPE="integer"FOREIGN-ARRAY="orgs"/>,* @param <cur_position_id TYPE="integer"FOREIGN-ARRAY="positions"/>,* @param <cur_group_id TYPE="integer" FOREIGN-ARRAY="groups"/>,* @param </condition>,* @param </conditions>,* @param iWorkflowIDParam(int) необязательный,  если не используется условиес типом проверки определенного поля в документообороте (type=‘if_workflow_field_value ‘) или если передан параметр teWorkflowParam – ID документооборота.,* @param teWorkflowParam (TopElem) необязательный,  если не используется условие стипом проверки определенного поля в документообороте (type=‘if_workflow_field_value ‘) – TopElemдокументооборота.
     * @returns –строка (string),которая может использоваться в eval для определениявидимости/редактирования объектов по документообороту .
     * @example: . _action.condition_eval_str = tools.build_condition_eval_str(_action.conditions, TopElem.Doc.DocID, TopElem );
     */
    build_condition_eval_str() {
        return;
    }
    /**
     * Используется для обновления данных по редактированиюразделов на закладке «Редактирование разделов» в администраторе в разделепортала. Обновления происходят во всех дочерних элементов портала.
     * @param _obj_id (int) – ID измененного документа.,* @param _obj_doc (TopElem)необязательный – TopElem измененного документа.
     * @returns – количество изменённых дочернихэлементов (int).
     * @example: tools.update_document_persons(TopElem.Doc.DocID, TopElem )
     */
    update_document_persons() {
        return;
    }
    /**
     * Возвращает длительность в миллисекундах из xml тега period. Время в теге задано вформате P5Y2M10DT15H30M45S. Используется для разбора результатов курса
     * @param _period (string) – строка с датой вида P5Y2M10DT15H30M45S.
     * @returns – длительность в миллисекундах (int).
     * @example: tools.get_period_from_iso(_int.latency );
     */
    get_period_from_iso() {
        return;
    }
    /**
     * Возвращает ID самоговерхнего иерархии документа портала, на который разрешена подписка,относительно текущего документа. Используется для отправки сообщений обизменении документа портала.
     * @param oDocumentParam (variant)содержит либо ID документа длякоторого происходит поиск документов верхнего уровня, либо TopElem этого документа.
     * @returns – ID  (int) самого верхнего иерархиидокумента портала, на который разрешена подписка, относительно текущегодокумента или Null если такойдокумент не найден.
     * @example: . iDocumentID =tools.get_notification_document( TopElem );
     */
    get_notification_document() {
        return;
    }
    /**
     * Возвращает ID центразатрат указанного сотрудника. Если не найден, то возвращает ID центра затрат, указного в общих настройках.
     * @param _person_id (int)необязательный, если передан параметр _person_doc – ID сотрудника, для которого происходит поиск центра затрат.,* @param _person_doc (TopElem)необязательный – TopElem сотрудника,для которого происходит поиск центра затрат.
     * @returns – ID (int) центра затрат указанногосотрудника. Если не найден, то возвращает ID центра затрат, указного в общих настройках.
     * @example: fldPersonElem.cost_center_id= tools.get_cost_center_id_by_person_id( fldPersonElem.PrimaryKey );
     */
    get_cost_center_id_by_person_id() {
        return;
    }
    /**
     * Возвращает массив руководителей (руководителей по должности)центра затрат указанного сотрудника. Если не найдены, то возвращает пустоймассив.
     * @param _person_id (int) необязательный, если передан параметр _person_doc – ID сотрудника, для которого происходит поиск руководителей центразатрат.,* @param _person_doc (TopElem)необязательный – TopElem сотрудника, для которогопроисходит поиск руководителей центра затрат.
     * @returns – массив каталожных записейсотрудников, являющихся руководителями центра затрат указанного сотрудника
     * @example: fldPersonElem.cost_center_id= tools.get_cost_center_id_by_person_id( fldPersonElem.PrimaryKey );
     */
    get_cost_center_boss_by_person_id() {
        return;
    }
    /**
     * Возвращает массив руководителей (руководителей по должности)указанного подразделения. Если не найдены, то возвращает пустой массив.
     * @param _sub_id (int) – ID подразделения, длякоторого происходит поиск руководителей.
     * @returns – массив руководителей (руководителейпо должности) указанного подразделения.
     * @example: iBossID =ArrayOptFirstElem(tools.get_sub_boss_by_sub_id(fldOrphanSubElem.PrimaryKey));
     */
    get_sub_boss_by_sub_id() {
        return;
    }
    /**
     * Возвращает сороку со временем (часами и/или минутами и/илисекундами) из строки разделенную «:». Принимается строка вида 23:58:56. Еслистрока будет вида, например, 33:58:56, вернет null.Если нужно возвращать минуты и секунды, то вернет сроку вида 23:58:56.
     * @param _str (string) – строка для разбора.,* @param _minite_flag (bool)необязательный возвращает минуты или нет. По умолчанию false.,* @param _second_flag (bool) необязательный возвращает секунды или нет. По умолчанию false.
     * @returns – строка (string)со временем.
     * @example: _start_time =tools.get_time( intervalArray[0] );
     */
    get_time() {
        return;
    }
    /**
     * Включает или выключает журнал веб запросов.
     * @param _flag (bool) – включит журнал веб запросов (true), или выключить (false).
     * @returns – нет.
     * @example: sLogEval= 'tools.enable_log_web_request('+ global_settings.settings.disp_log_web_request + ');'
     */
    enable_log_web_request() {
        return;
    }
    /**
     * Прообразовывает содержание строки для сохранение в теге.Предназначено, преобразования тегов и ссылок на файлы в описании (тег desc).
     * @param _desc (string) – строка для преобразования.,* @param _temp_dir (string)необязательный – строка с путем до папки с файлами, указанными в теге.
     * @returns – преобразованная строка (string).
     * @example: TopElem.text_area= tools.desc_cleanup( TopElem.text_area );
     */
    desc_cleanup() {
        return;
    }
    /**
     * Возвращает название поле из тега TITLE xmd или xml формы для указанного языка. Еслив теге есть «const=», то производится поиск значения указанного после «=» средиконстант языка. Если в константах значение не найдено, то возвращается, то, чтоуказано после «const=». Если «const=» не указано, то возвращается значение тегаTITLE.
     * @param _field (XML element)  – объект, представляющийсобой XML поле, для которогонужно взять название.,* @param curLngWeb (XML element) необязательный – текущийязык, если не указан, берется язык пользовательского интерфейса в администраторе.При вызове на портале параметр обязателен.
     * @returns – название поле из тега TITLE xmd или xml формыдля указанного языка (string).
     * @example: tools.get_field_title(fldReqFieldElem, curLngWeb )
     */
    get_field_title() {
        return;
    }
    /**
     * Заполняет структуру полей для использования в формах выбораусловий относительно полей объекта или каталога. Применяется в диалогахпостроения фильтров, настраиваемых отчетах и т.д.
     * @param FIELD_NAMES (XML element)  – структура полей вида.,* @param <field_namesTEMP="1">,* @param <field_nameMULTIPLE="1" PRIMARY-KEY="name" TEMP="1">,* @param <INHERITTYPE="field_name_base" TEMP="1"/>,* @param <levelTYPE="integer" DEFAULT="0" TEMP="1"/>,* @param <field_namesTEMP="1">,* @param <field_nameMULTIPLE="1" PRIMARY-KEY="name" TEMP="1">,* @param <INHERITTYPE="field_name_base" TEMP="1"/>,* @param <levelTYPE="integer" DEFAULT="1" TEMP="1"/>,* @param <field_namesTEMP="1">,* @param <field_nameMULTIPLE="1" PRIMARY-KEY="name" TEMP="1">,* @param <INHERITTYPE=&qquot;field_name_base" TEMP="1"/>,* @param <levelTYPE="integer" DEFAULT="2" TEMP="1"/>,* @param </field_name>,* @param </field_names>,* @param </field_name>,* @param </field_names>,* @param </field_name>,* @param </field_names>,* @param Где field_name_base структура вида:,* @param <field_name_baseSAMPLE="1" TEMP="1">,* @param <nameTYPE="string" TEMP="1"/>,* @param <titleTYPE="string" TEMP="1"/>,* @param <typeTYPE="string" TEMP="1"/>,* @param <foreign_arrayTYPE="variant" TEMP="1"/>,* @param <foreign_catalogTYPE="string" TEMP="1"/>,* @param <value_intTYPE="integer" FOREIGN-ARRAY="foreign_array.Object"TEMP="1"/>,* @param <is_custom_fieldTYPE="bool" NOT-NULL="1" DEFAULT="false"TEMP="1"/>,* @param <is_multipleTYPE="bool" NOT-NULL="1" DEFAULT="false"TEMP="1"/>,* @param <is_arrayTYPE="bool" NOT-NULL="1" DEFAULT="false"TEMP="1"/>,* @param <value_multipleTYPE="string" MULTIPLE="1"FOREIGN-ARRAY="foreign_array.Object" TEMP="1"/>,* @param </field_name_base>,* @param FORM (XML element) форма (объект, каталог), изкоторой нужно заполнить данные.,* @param ISCATALOG (bool)необязательный, по умолчанию true. Флаг показывающийиспользовать поля каталога (true), или объекта (false).,* @param EVALPATH (XML элемент) необязательный. XML элементв структуре FIELD_NAMES до элемента, который нужно заполнять. Задается вслучае, если нужно заполнить один из дочерних элементов field_names, вложенных в элемент первого уровня field_names.,* @param PRETITLE (string)необязательный. Префикс поля в FORM, из которой заполняется структура FIELD_NAMES.Передается, если нужно, например, заполнить данными из дочернего элемента типа multiple из FORM, значения по ключу.
     * @returns – нет.
     * @example: tools.fill_field_names(_child.field_names, TopElem.catalog_name, false, _field_part.field,_field_part.title + '[' + _field_part.array_key + ']' ); tools.fill_field_names(TopElem.field_names,TopElem.object_name);
     */
    fill_field_names() {
        return;
    }
    /**
     * Возвращает результат выполнения eval,определяемый формулой и параметрами вызова функции. SRC 1,2 - дваполя-источника.            Если передать в качестве источника пустую строку: '', то результатом будет текущая дата и время.
     * @param SRC1 (date) необязательный,  по умолчанию текущая дата.,* @param SRC2 (date) необязательный,  по умолчанию текущая дата.,* @param EVALSTR (string)-  формула, в которой источники (SRC1, SRC2) указываются как #1 и #2соответственно.,* @param PARAM1 (string)необязательный  - параметр, в который можно записать промежуточное значение, апотом вызвать его в другом месте написав @1. В параметре можно использоватьисточники (SRC1, SRC2) как #1 и #2 соответственно.,* @param PARAM2 (string)необязательный  - параметр, в который можно записать промежуточное значение, апотом вызвать его в другом месте написав @2. В параметре можно использоватьисточники (SRC1, SRC2) как #1 и #2 соответственно.,* @param PARAM3 (string)необязательный  - параметр, в который можно записать промежуточное значение, апотом вызвать его в другом месте написав @3. В параметре можно использоватьисточники (SRC1, SRC2) как #1 и #2 соответственно.
     * @returns – результат выполнения EVALSTR.
     * @example:
     */
    DateFunc() {
        return;
    }
    /**
     * Сдвигает указанную дату наколичество секунд заданное параметрами функции. Можно передать дни, часы,минуты и секунды для сдвига даты. Дни, часы, минуты будут пересчитаны всекунды.
     * @param DATE_VAL (date) необязательный,  по умолчанию текущая дата.,* @param DAYS (int) необязательный,  по умолчанию 0.  Количество дней, на которое нужно сдвинуть текущуюдату.,* @param HOURS (int) необязательный,  по умолчанию 0.  Количество часов, на которое нужно сдвинутьтекущую дату.,* @param MINUTES (int) необязательный,  по умолчанию 0.  Количество минут, на которое нужно сдвинутьтекущую дату.,* @param SECONDS (int) необязательный,  по умолчанию 0.  Количество секунд, на которое нужно сдвинутьтекущую дату.
     * @returns – дата (date),полученная сдвигом указанной даты на необходимое количество дней, часов, минути секунд.
     * @example:
     */
    AdjustDate() {
        return;
    }
    /**
     * Используется в настраиваемыхотчетах для возврата названия тега, в котором хранится значение по типу данныхэтого значение. Значение затем будет показано пользователю  в ячейке отчета.
     * @param sDatatype (string) тип данных.
     * @returns – строка (string),названия тега, в котором хранится значение по типу данных этого значение.
     * @example: ArrayExtract(Ps.columns,'tools.get_report_storage_field(This.datatype.Value)')
     */
    get_report_storage_field() {
        return;
    }
    /**
     * Запускает построениенастраиваемого отчета.
     * @param REPORT_ID (int) необязательный, если переданdocReportParam. ID отчета дляпостроения.,* @param PS (Doc)необязательный – Doc карточкиотчета, если она открыта в интерфейсе администратора WebTutor.Данные (полсдение изменения) будут браться из нее.,* @param docReportParam (Doc)необязательный – Doc отчета.
     * @returns – Doc сохраненного отчета.
     * @example: tools.build_report_remote(null,null, docCustomReport); ServerEval('tools.build_report_remote('+ _cur_custom_report_id + ')');
     */
    build_report_remote() {
        return;
    }
    /**
     * Возвращает массив каталожных записей всех дочерних объектовуказанного объекта, включая его самого.
     * @param NODE_ID (int)- ID объекта, для которогопроисходит поиск дочерних объектов.,* @param NODE_CATALOG (string)– название каталога без ‘s’ на конце, в котором нужноискать.,* @param NODE_PARENT_FIELD (string) необязательны – название поле, в котором указывается ID родительского элемента. Поумолчанию parent_object_id.
     * @returns - массив каталожных записей всехдочерних объектов указанного объекта, включая его самого.
     * @example: _elems_full =tools.get_sub_hierarchy(curUser.position_id.ForeignElem.parent_object_id,'subdivision');
     */
    get_sub_hierarchy() {
        return;
    }
    /**
     * Возвращает сформированный на основе кода печатной формытекст печатной формы.
     * @param oFormParam (variant)– либо ID печатной формы, либопуть до файла печатной формы к папке templates.
     * @returns - текст печатной формы (string).
     * @example: _result =tools.process_print_form( _cur_print_form_card.PrimaryKey );
     */
    process_print_form() {
        return;
    }
    /**
     * Устаревшая функция. Вместо нее нужно использовать функцию tools.get_uni_user_boss. Возвращает каталожную записьнепосредственного руководителя указанного объекта (подразделение, должность,сотрудник) либо по должности, либо функционального с типом «непосредственный»из карточки объекта или вышестоящего подразделения сотрудника.
     * @param OBJECT (variant)– либо ID объекта либо TopElem объекта, для которого происходит поиск.
     * @returns - каталожная запись непосредственногоруководителя указанного объекта.
     * @example: COLLABORATOR_EXPERT_ID = tools.get_user_boss(COLLABORATOR_USER_ID);
     */
    get_user_boss() {
        return;
    }
    /**
     * Функция, которая заполняет структуру path_subs в карточкепреподавателя, для отображения пути штатного расписания на основе карточкисотрудника для внутренних преподавателей
     * @param _path_subs (XML element) – структура для заполнениявида:,* @param <path_subs>,* @param <path_subMULTIPLE="1" PRIMARY-KEY="id">,* @param <idTYPE="integer" FOREIGN-ARRAY="subs"/>,* @param <typeTYPE="string"/>,* @param <nameTYPE="string"/>,* @param <parent_idTYPE="integer" FOREIGN-ARRAY="subs"/>,* @param </path_sub>,* @param </path_subs>,* @param _person_id (int)необязательный, если передан_person_doc. ID сотрудника.,* @param _person_doc (TopElem)необязательный. TopElem сотрудника.
     * @returns – заполненная структура path_subs.
     * @example: tools.path_subs_filling(TopElem.path_subs, TopElem.person_id, null );
     */
    path_subs_filling() {
        return;
    }
    /**
     * Функция возвращает строку вида «часы : минуты : секунды .миллисекунды», полученную из параметра функции (миллисекунды). Миллисекундыпосле «.» в результирующей строке передаются, если их значение больше нуля.
     * @param _mseconds (int)  количество миллисекунд.
     * @returns – строку вида «часы  минуты :секунды . миллисекунды» (string).
     * @example: tools.str_time_from_mseconds(Ps.time );
     */
    str_time_from_mseconds() {
        return;
    }
    /**
     * Функция возвращает строку с полным штатным расписанием (бездолжности). Штатное расписание разделено указанным в параметрах функцииразделителем.
     * @param _personID (int)необязательный, если передан _personDoc. ID сотрудника.,* @param _personDoc (TopElem)необязательный. TopElem сотрудника.,* @param _depth (int)необязательный  - глубина штатного расписания, число, показывающее длинуцепочки штатного расписания. Если 0, то показывается полная цепочка штатногорасписания. По умолчанию 0.,* @param _top (int)необязательный  - параметр направления показа штатного расписания. Если 1, тоштатное расписание рассчитывается 'сверху', то есть от организации. Если 0, тоштатное расписание рассчитывается 'снизу', то есть от должности сотрудника. Поумолчанию 1.,* @param _separator (string)необязательный  - разделитель. Если указана пустая строка '', по умолчаниюиспользуется разделитель ' -> '.
     * @returns – строка (string)с полным штатным расписанием (без должности).
     * @example: trSubsPath=tools.person_list_staff_by_person_id(fldPerson.id,fldPerson,9 )
     */
    person_list_staff_by_person_id() {
        return;
    }
    /**
     * Функция возвращает строку вида login@domainтекст письма на основе данных записи об адресе встандарте X.400.
     * @param _x40_email (string)строка адреса в стандарте X.400.,* @param _end_mail (string)- текст письма который будет добавлен к login@domain.
     * @returns – строка (string)вида login@domainтекст письма.
     * @example:
     */
    convert_email_from_x40() {
        return;
    }
    /**
     * Функция добавляет сотрудника в список оцениваемых впроцедуре оценки. Планы и анкеты при этом не создаются.
     * @param _person_id (int)необязательный, если передан _person_doc. ID сотрудника.,* @param _assessment_appraise_id(int) необязательный, если передан _doc_assessment_appraise. ID процедурыоценки, в которую нужно добавить сотрудника.,* @param _person_doc (TopElem)необязательный. TopElem сотрудника.,* @param _doc_assessment_appraise(Doc) необязательный. Doc процедурыоценки, в которую нужно добавить сотрудника.
     * @returns – изменённый и сохраненный документ (Doc) процедуры оценки.
     * @example: tools.add_person_to_assessment_appraise(iPersonID, iObjectID, null, docObject )
     */
    add_person_to_assessment_appraise() {
        return;
    }
    /**
     * Функция возвращает массив уникальных строк, состоящий из ID тегов из карточки значенийклассификаторов знаний. То есть в результате работы функции получаем толькотеги, которые привязаны хотя бы к одному значению.
     * @param нет.
     * @returns – массив уникальных строк, состоящийиз ID тегов из карточкизначений классификаторов знаний.
     * @example: .
     */
    get_tag_cloud() {
        return;
    }
    /**
     * Проверяет, что переданная строка не пустая и не содержитрусские буквы или другие недопустимые в названии тегов XMLсимволы. Функция используется для проверки правильности названия полей,создаваемых пользователем в интерфейсе (настраиваемые поля, настраиваемые типыдокументов).
     * @param FIELD (string)строка с названием поля (то что содержится в поле name,а не title).,* @param IS_STRICT_BEGIN (bool)необязательный, по умолчанию false. Если true, то строка проверяется на наличие русских буквы илидругие недопустимых в названии тегов XML символов.
     * @returns – флаг (bool)да – строка прошла проверку, нет не прошла проверку.
     * @example: tools.check_field_name(NewValue, true )
     */
    check_field_name() {
        return;
    }
    /**
     * На основе указанного типа настраиваемого документа создаетобъект, содержащий в своих полях строковое описание XMD формы документа и XMD формы каталога, а так поле, по которому строится иерархияданного документа.
     * @param iDocTypeIDParam (int) необязательный, если передан teDocTypeParam. ID типа настраиваемого документа.,* @param teDocTypeParam (TopElem)необязательный. TopElem типанастраиваемого документа.
     * @returns – объект  (object), содержащий в поле object_form_str строковое описание XMD формы документа, в поле catalog_form_str описание XMD формы каталога, а так поле, покоторому строится иерархия данного документа, в поле hier_field.
     * @example: oXmds = tools.get_doc_type_xmds( DOC_ID, TopElem ); На основе указанного типа настраиваемого документа проверяетвозможность создания настраиваемого документа указанного типа и создает XMD формы документа и XMD формы каталога. При вызовефункции в интерфейсе администратора будут выводится всплывающее сообщения обошибках. Входные параметры DOC_TOPELEM (TopElem)необязательный. TopElem типанастраиваемого документа. DOC_ID (int)необязательный, если передан DOC_TOPELEM. ID типа настраиваемого документа. Возвращаемый результат – флаг (bool)true – настраиваемый тип заполнен правильно, и можносоздавать документ на его основе. False- настраиваемыйтип заполнен неправильно, и создавать документ на его основе нельзя. Пример вызова tools.generate_doc_type_xmds(TopElem,TopElem.Doc.DocID);
     */
    get_doc_type_xmdsgenerate_doc_type_xmds() {
        return;
    }
    /**
     * На основе указанного типа настраиваемого документарегистрирует в базе объект по XMD формедокумента и XMD форме каталога.После вызова функции объекты настраиваемого типа документа доступны в базе.
     * @param docDocTypePARAM (Doc) необязательный. Doc типа настраиваемого документа.,* @param iDocIDParam (int)необязательный, если передан docDocTypePARAM. ID типа настраиваемого документа.
     * @returns – объект (object)содержащий следующие поля success (успешная или неуспешная регистрация новогообъекта базы), object_form_url (url доXMD формы документа), catalog_form_url(url до XMD формы каталога), catalog_form_hash (Hash XMD формыкаталога), catalog (названия нового типа документов).
     * @example: oReturnValue =tools.register_doc_type(null, catDocTypeElem.id);
     */
    register_doc_type() {
        return;
    }
    /**
     * Создает сертификаты указанного типа для всех участниковуказанного мероприятия.
     * @param _even_id (int)необязательный, если передан _doc_event. ID мероприятия.,* @param _type_id (int) ID типа сертификата.,* @param _doc_event (Doc)необязательный. Doc мероприятия.
     * @returns – количество созданных сертификатов (int).
     * @example: counter_act =counter_act + Int(ServerEval( 'tools.create_certificate_to_event(' +TopElem.Doc.DocID + ',' + _value.key + ')' ));
     */
    create_certificate_to_event() {
        return;
    }
    /**
     * Создает сертификаты указанного типа для указанногосотрудника. Если указанно мероприятие, то сертификат привязывается к  указанномумероприятию.
     * @param _person_id (int)необязательный, если передан _person_doc. ID сотрудника.,* @param _type_id (int) необязательный, если передан_type_doc. ID типа сертификата.,* @param _even_id (int)необязательный, если передан _event_doc или если в сертификате не указываетсямероприятие. ID мероприятия.,* @param _person_doc (TopElem)необязательный. TopElem сотрудника.,* @param _type_doc (TopElem)необязательный. TopElem типасертификата.,* @param _event_doc (TopElem)необязательный. TopElem мероприятия.
     * @returns – документ созданного сертификата (Doc).
     * @example: tools.create_certificate_to_person(_person.PrimaryKey, _type_id, Doc.DocID, null, serttypeDoc, Child(0).Parent).TopElem;
     */
    create_certificate_to_person() {
        return;
    }
    /**
     * Возвращает ID самойверхней в иерархии родительской статьи форума.
     * @param iForumEntryParam (int) необязательный, если передан teForumEntryParam. ID статьи форума.,* @param _ teForumEntryParam (TopElem) необязательный. TopElem статьи форума.
     * @returns – ID самой верхней в иерархии родительской статьи форума (int).
     * @example:
     */
    get_main_forum_entry_by_forum_entry_id() {
        return;
    }
    /**
     * Создает объект присвоенной квалификации для указанногосотрудника.
     * @param _person_id (int)ID сотрудника.,* @param _even_id (int)необязательный, если в квалификации не указывается мероприятие. ID мероприятия.,* @param _qualification_id (int) ID квалификации, которая присваивается.,* @param _assignment_date (date) необязательный, дата присвоенияквалификации.,* @param _expiration_date (date) необязательный, дата истечения квалификации.,* @param _qualification_test_array необязательный – массив id тестов, на основе которыхприсваивается квалификация.,* @param _qualification_course_array необязательный– массив id курсов, на основекоторых присваивается квалификация.,* @param _send_mail (int)необязательный отправлять (1) или нет (0) уведомление о присвоенииквалификации. Отправляется только при изменении статуса (параметр _in_process).,* @param _in_process (int)необязательный проставлять статус в процессе (1) или присвоена (0) по умолчанию1.
     * @returns – документ созданной присвоеннойквалийикации (Doc).
     * @example: docQualificationAssignment= tools.assign_qualification_to_person(iPersonID, null, curObjectID,DateNewTime(Date(),00,00,00),null,[],[],0,1 );
     */
    assign_qualification_to_person() {
        return;
    }
    /**
     * Создает объект присвоенной квалификации для всех участниковуказанного мероприятия.
     * @param _even_id (int)необязательный, если передан _doc_event. ID мероприятия.,* @param _doc_event (Doc)необязательный. Doc мероприятия.,* @param _qualification_id(int) ID квалификации.,* @param _date (date)необязательный, дата присвоения квалификации.
     * @returns – количество созданных присвоенных квалификаций(int).
     * @example: _eval_str ='tools.assign_qualification_to_event(' + TopElem.Doc.DocID + ',null,' +_value.key + ',&quot;' + Date() + '&quot;)';
     */
    assign_qualification_to_event() {
        return;
    }
    /**
     * Создает xms формупользовательского интерфейса.
     * @param TEMPLATE (variant)ID или TopElem объекта пользовательский интерфейс.
     * @returns – флаг true –создание успешно завершено, false созданиенеуспешно (bool).
     * @example: tools.save_custom_ui_form(TopElem)
     */
    save_custom_ui_form() {
        return;
    }
    /**
     * Возвращает xms формудля указанного каталога, создаваемого из типа настраиваемого документа. Еслидля типа документа создан свой пользовательский интерфейс, то документоткроется с его использованием. В противном случае откроется с использованиемформы по умолчанию.
     * @param CATALOG_NAME (string)название каталога, создаваемого из типа настраиваемого документа.
     * @returns – SPXML-SCREEN.
     * @example: CreateDocScreen(docObject, tools.get_custom_document_form( TopElem.catalog_name ) );
     */
    get_custom_document_form() {
        return;
    }
    /**
     * Устаревшая функция. Больше не используется. Возвращает путьдо XMD формы для указанного каталогаили объекта, создаваемого из типа настраиваемого документа
     * @param sCatalogNameParam (string) название каталога с ‘s’ наконце, создаваемого из типа настраиваемого документа, если нужен путь до формыкаталога.  Или название объекта без ‘s’ на конце,создаваемого из типа настраиваемого документа, если нужен путь до формыобъекта.
     * @returns – путь до формы (string).
     * @example:
     */
    get_custom_document_data_form_url() {
        return;
    }
    /**
     * Функция возвращает строку с полным путем из родительскихэлементов карты знаний (значений) без классификатора. Путь разделен указанным впараметрах функции разделителем.
     * @param _knowledge_partID (int)  необязательный, если передан_knowledge_partDoc. ID значения, для которого нужно найти пусть.,* @param _knowledge_partDoc  (TopElem) необязательный. TopElem значения, для которого нужно найти пусть.,* @param _depth (int)необязательный  - глубина пути, число, показывающее длину цепочки в пути. Если0, то показывается полная цепочка пути. По умолчанию 0.,* @param _top (int)необязательный  - параметр направления показа пути. Если 1, то путь рассчитывается 'сверху', то есть от классификатора. Если 0, то путьрассчитывается 'снизу', то есть от текущего значения. По умолчанию 1.,* @param _separator (string)необязательный  - разделитель. Если указана пустая строка '', по умолчаниюиспользуется разделитель ' -> '.
     * @returns – строка (string)полным путем из родительских элементов карты знаний (значений) безклассификатора.
     * @example: _kp.full_path =tools.knowledge_part_path_by_knowledge_part_id(_value.key)
     */
    knowledge_part_path_by_knowledge_part_id() {
        return;
    }
    /**
     * Возвращает список каталожных записей из сотрудников,являющихся непосредственными руководителями указанного объекта (организации,подразделение, должности, сотрудника) либо по должности, либо функционального стипом «непосредственный» из карточки объекта или вышестоящего подразделения,организации (если они определены для данного типа объекта). Для сотрудника, также учитывается функциональный руководитель группы.
     * @param objectParam(variant)  либо ID объекта, либо Doc объекта, либо TopElemобъекта, для которого идет поиск руководителей.,* @param oParams (object)  необязательный. Объект, который может содержатьследующие поля,* @param object_id (int) - ID объекта, для которого идетпоиск руководителей.,* @param return_object_type(string) – строка, задающая тип возвращаемых данных,если collaborator, то возвращаются каталожные записи каталога collaboratorиначе каталога func_managers.,* @param return_object_value(string) – строка, задающая тип возвращаемых данных, если id, то возвращаются не каталожные записи, а id из каталога collaborator или  каталога func_managers взависимости от параметра return_object_type.
     * @returns – список каталожных записей изсотрудников, являющихся непосредственными руководителями указанного объекта.
     * @example: for ( iBossIDElem intools.get_uni_user_bosses( objDoc.person_id, { 'return_object_type':'collaborator', 'return_object_value': 'id' } ) )
     */
    get_uni_user_bosses() {
        return;
    }
    /**
     * Возвращает каталожную запись сотрудника, являющегосянепосредственными руководителями указанного объекта (организации,подразделение, должности, сотрудника) либо по должности, либо функционального стипом «непосредственный» из карточки объекта или вышестоящего подразделения,организации (если они определены для данного типа объекта). Для сотрудника, также учитывается функциональный руководитель группы. По сути возвращается первыйруководитель из массива, полученного из функции tools.get_uni_user_bosses.
     * @param objectParam(variant)  либо ID объекта, либо Doc объекта, либо TopElemобъекта, для которого идет поиск руководителей.
     * @returns – каталожную запись сотрудника,являющегося непосредственными руководителями указанного объекта.
     * @example: _expert_person =tools.get_uni_user_boss(USER_PERSON_ID);
     */
    get_uni_user_boss() {
        return;
    }
    /**
     * Вызов эскалации по документообороту.
     * @param _source (Doc) – документ (Doc) объекта, относительно котороговызывается действие.,* @param _escalation_code (sting) – код эскалации документооборота.,* @param _workflow_id (int)– ID документооборота.,* @param _workflow_doc (TopElem) необязательный –TopElem документооборота.,* @param _alterCurObjectID (int) необязательный. Если эскалация документооборота, этопечать печатной формы, то можно передать в этот параметр ID объекта, который будет передаваться в печатную форму как object_id.
     * @returns – флаг (bool)всегда true
     * @example: .
     */
    workflow_escalation_process() {
        return;
    }
    /**
     * Свойство (string), содержит url’ы всех каталогов, в которых есть значения карты значений,разделенных “;”.,Пример вызова,.
     * @param Свойство (string), содержит url’ы всех каталогов, в которых есть значения карты значений,разделенных “;”.,* @param Пример вызова,* @param .
     * @returns Свойство (string), содержит url’ы всех каталогов, в которых есть значения карты значений,разделенных “;”.
     * @example: . StrContains(tools.knowledge_form_list,UrlFileName(SrcDoc.FormUrl));
     */
    knowledge_form_list() {
        return;
    }
    /**
     * Возвращает список каталожных записей из профилейкомпетенции, указанного сотрудника. Данные собираются из кодов профилей,указных в должности сотрудника и из профиля компетенции, указанного в должностисотрудника. Если в должности сотрудника не найдены профили компетенции, тоберется профиль из типовой должности, привязанной к должности сотрудника (еслисвязь есть).
     * @param objectParam(variant)  либо ID сотрудника, либо Doc сотрудника, либо TopElemсотрудника.
     * @returns – список каталожных записей изпрофилей компетенции, указанного сотрудника.
     * @example: arrProfiles=tools.get_user_comp_profiles(TopElem.person_id)
     */
    get_user_comp_profiles() {
        return;
    }
    /**
     * Заполняет пакет данными из пакета источника. Возвращаетколичество обработанных объектов в пакете.
     * @param fldPackageTarget (TopElem)  TopElem  пакета, в которыйнужно копировать данные.,* @param fldSourceParam (TopElem) TopElem  пакета, из которого нужно копировать данные.
     * @returns – количество скопированных элементов (int).
     * @example: tools.package_log_filling(fldPackageChild, teUpdate );
     */
    package_log_filling() {
        return;
    }
    /**
     * Функция, которая формирует строку на основе переменныхэлемента шаблона, шаблона документа, удаленного действия, выгрузки и т.д. Этустроку затем используют в выражении типа eval вместе скодом элемента шаблона, шаблона документа, удаленного действия, выгрузки и т.д.Таким образом, инициализируются переменные нужного типа и им присваиваютсязначения, которые затем видны в коде элемента шаблона, шаблона документа,удаленного действия, выгрузки и т.д.
     * @param listWVarsPARAM (XML element) – структура описывающаяпеременные вида:,* @param <wvars>,* @param <wvarMULTIPLE="1" PRIMARY-KEY="name">,* @param <nameTYPE="string"/>,* @param <parent_wvar_nameTYPE="string" FOREIGN-ARRAY="BaseMultipleElem"/>,* @param <valueTYPE="string"/>,* @param <typeTYPE="string" NOT-NULL="1" DEFAULT="string"FOREIGN-ARRAY="common.template_field_types"/>,* @param <catalogTYPE="string" FOREIGN-ARRAY="common.exchange_object_types"/>,* @param <entries>,* @param <entryMULTIPLE="1" PRIMARY-KEY="id">,* @param <idTYPE="string"/>,* @param <nameTYPE="string"/>,* @param </entry>,* @param </entries>,* @param <descriptionTYPE="string" TITLE="1"/>,* @param <is_modifyTYPE="bool" NOT-NULL="1" DEFAULT="false"TEMP="1"/>,* @param <positionTYPE="integer" NOT-NULL="1" DEFAULT="0"/>,* @param </wvar>,* @param </wvars>,* @param bWarily (bool)необязательный по умолчанию false. Если передается true, то при вычислении первоначального значение переменной,код будет помещен в try{}catch{}.То есть если произойдет ошибка вычисления, то код не прервет свое выполнение, апеременной  будет присвоено значение по умолчанию соответствующего типа.
     * @returns – строка (string),полученная на основе переменных элемента шаблона, шаблона документа, удаленногодействия, выгрузки и т.д..
     * @example: var s_anti_str =tools.wvars_to_script(TopElem.wvars, false);
     */
    wvars_to_script() {
        return;
    }
    /**
     * Функция, которая формирует объект на основе переменныхэлемента шаблона, шаблона документа, удаленного действия, выгрузки и т.д.Объект будет иметь следующий вид. Свойство(property)это название переменной. Значение свойства это value переменной, как оно заполнено в структуре параметров (listWVarsPARAM).
     * @param listWVarsPARAM (XML element) – структура описывающаяпеременные вида:,* @param <wvars>,* @param <wvarMULTIPLE="1" PRIMARY-KEY="name">,* @param <nameTYPE="string"/>,* @param <parent_wvar_nameTYPE="string" FOREIGN-ARRAY="BaseMultipleElem"/>,* @param <valueTYPE="string"/>,* @param <typeTYPE="string" NOT-NULL="1" DEFAULT="string"FOREIGN-ARRAY="common.template_field_types"/>,* @param <catalogTYPE="string"FOREIGN-ARRAY="common.exchange_object_types"/>,* @param <entries>,* @param <entryMULTIPLE="1" PRIMARY-KEY="id">,* @param <idTYPE="string"/>,* @param <nameTYPE="string"/>,* @param </entry>,* @param </entries>,* @param <descriptionTYPE="string" TITLE="1"/>,* @param <is_modifyTYPE="bool" NOT-NULL="1" DEFAULT="false"TEMP="1"/>,* @param <positionTYPE="integer" NOT-NULL="1" DEFAULT="0"/>,* @param </wvar>,* @param </wvars>
     * @returns – объект (object),полученный  на основе переменных элемента шаблона, шаблона документа,удаленного действия, выгрузки и т.д..
     * @example: oCollectionParam= tools.wvars_to_object( TopElem.wvars );
     */
    wvars_to_object() {
        return;
    }
    /**
     * Копирует папку с файлами, включая все подпапки из указанногоисточника в указанный преемник. Если преемник не существует, то он создается поуказанному адресу.
     * @param sSourceDirPARAM (stirng) путь до папки источника.,* @param sDestDirPARAM (stirng)путь до папки преемника.
     * @returns – флаг (bool)true – копирование удалось, false – копирована не удалось.
     * @example: tools.copy_directory(sFileName,sTempDir)
     */
    copy_directory() {
        return;
    }
    /**
     * Отправляет уведомления участникам мероприятия (участникаммероприятия, руководителям участников, преподавателям, ответственным запроведения, ответственным за подготовку) в соответствии с настройкамимероприятия и типом отправки (всем участникам, новым участникам, темучастникам, кому не было отправлено).
     * @param _event_id (int) необязательны, если передан _doc_event – ID мероприятия.,* @param _doc_event (Doc)необязательный – Doc документкарточки мероприятия. send_type send_type  (stirng)необязательный, по умолчанию all. Задает способотправки уведомления для участников мероприятия (руководители участников, преподаватели,ответственные за проведения, ответственные за подготовку не учитываются в этомпараметре). Значения all - отправка всем участникам, new- отправка новым участникам, not_send  отправка тем участникам, кому не былоотправлено.
     * @returns – флаг (bool)true – в любом случае.
     * @example: tools.send_event_notifications(TopElem.Doc.DocID,TopElem.Doc,sending_type)
     */
    send_event_notifications() {
        return;
    }
    /**
     * Преобразует строку в объект. Например, строку в формате json в объект. Или строку, содержащуюXML, в объект.
     * @param sSomeObjectPARAM (stirng) строка в формате json илистрока, содержащая XML.
     * @returns – полученный объекта (object).
     * @example: oUrlResult =tools.read_object(call_method(  'getSaveFileUrl', oParam, 'json' )); oResult =tools.read_object(sResult);
     */
    read_object() {
        return;
    }
    /**
     * Преобразует массив в строку указанного формата (json, xml).
     * @param _aArrayPARAM (array)массив для преобразования.,* @param _sFormatPARAM (string)необязательный по умолчанию XML. Возможны два значения(json, xml). Задает форматвозвращаемой строки.,* @param _sNamePARAM (string)необязательный по умолчанию data. Если формируетсястрока в формате XML, то параметр указывает название корневого(root) тега. По умолчанию <data></data>.
     * @returns – строка (string)полученная из массива.
     * @example: oResulter.result= tools.array_to_text(RESULT, sDataTypePARAM); var sSerialized= '(' + tools.array_to_text(aCatalogsToRegPARAM, 'json') + ')';
     */
    array_to_text() {
        return;
    }
    /**
     * Преобразует массив или объект в строку указанного формата (json, xml).
     * @param _aDataPARAM (variant)массив array или объект (object) для преобразования.,* @param _sName (string)необязательный по умолчанию null. Если не null, то параметр указывает название тега (для XML) или свойства (json), в которыйбудут заключены данные, полученные из _aDataPARAM.,* @param _bObj (bool)флаг true – преобразуетсяобъект, false – преобразуетсямассив.,* @param _sFormatPARAM (string)необязательный по умолчанию XML. Возможны два значения(json, xml). Задает форматвозвращаемой строки.
     * @returns – строка (string)полученная из массива или объекта.
     * @example: returntools.merge_text_array(_aPairs, (_sFormatPARAM == 'json' ? null: _sNamePARAM),false, _sFormatPARAM); returntools.merge_text_array(_aSubPairs, null, (_iObjType == 1 || _iObjType == 2),_sFormatPARAM);
     */
    merge_text_array() {
        return;
    }
    /**
     * Преобразует объект в строку указанного формата (json, xml).
     * @param _vObjectPARAM (object)объект (object) для преобразования.,* @param _sFormatPARAM (string)по умолчанию XML. Возможны два значения (json, xml). Задает форматвозвращаемой строки.,* @param __iDepth (int)необязательный по умолчанию 0. Глубина дочерних свойств объекта, до которойможно спускаться. Должна быть не больше 5.,* @param _sName (string)необязательный. Параметр указывает название тега (для XML),в который будут заключены данные, полученные из _vObjectPARAM. По умолчанию <value></value>.
     * @returns – строка (string)полученная из объекта.
     * @example: docElem.TopElem.result= tools.object_to_text(RESULT,'json'); _vValue =tools.object_to_text(_vValue, _sFormatPARAM, iDepth + 1, _sName);
     */
    object_to_text() {
        return;
    }
    /**
     * Сохраняет версию объекта для объекта каталога, для которогопроставлен флаг сохранения версий в администраторе. При этом создается объект вкаталоге «Версии объекта».
     * @param oDocParam (Doc)объекта, версия которого сохраняется.
     * @returns – нет.
     * @example: tools.create_object_version(Doc );
     */
    create_object_version() {
        return;
    }
    /**
     * Возвращает массив из обязательных обучений сотрудника, вкоторые входит переданный объект. Обязательные обучения указываются втребованиях к следящим объектам сотрудника должность, типовая должность, группаподразделений, семейство должностей, группа.   Массив состоит из следующихполей.,source_object_id – ID Объекта, в котором указано необходимое обучение (должность,типовая должность, группа подразделений, семейство должностей, группа),source_object_type – тип объекта (каталог объекта), вкотором указано необходимое обучение (должность, типовая должность, группаподразделений, семейство должностей, группа).,source_object_name – название конкретного объекта(должность, типовая должность, группа подразделений, семейство должностей,группа).,object_id – id объектаобучения, в который входит переданный объект. Если переданный объект это курс,то это Id учебной программы.Если переданный объект это тест, то это Id теста. Если переданный объект это модульная программ, то этоId модульной программы. Еслипереданный объект это учебная программа, то это Id учебной программы.,object_type - тип объекта (каталог объекта) обучения, вкоторый входит переданный объект. Если переданный объект это курс, то этоучебная программа. Если переданный объект это тест, то это тест. Если переданныйобъект это модульная программ, то это модульная программы. Если переданныйобъект это учебная программа, то это учебная программа.,object_name – название конкретного объекта обучения, вкоторый входит переданный объект. Если переданный объект это курс, то этоназвание учебной программы. Если переданный объект это тест, то это названиетеста. Если переданный объект это модульная программа, то это названиемодульной программы. Если переданный объект это учебная программа, то этоназвание учебной программы.
     * @param iPersonIDParam (int) – ID сотрудника.,* @param iObjectIDParam (int) – ID объекта обучения.,* @param tePersonParam (TopElem)– TopElem сотрудника.,* @param teObjectParam (TopElem)– TopElem объекта обучения.
     * @returns – массив из обязательных обученийсотрудника, в которые входит переданный объект.
     * @example: arrRecommendation= tools.get_mandatory_learnings( curUserID, curObjectID, curUser, curObject );
     */
    get_mandatory_learnings() {
        return;
    }
    /**
     * Возвращает массив из каталожных записей функциональныхруководителей (func_managers).Отбираются те функциональные руководители, где сотрудник, переданный в качествепервого параметра, является руководителем сотрудника (сотрудников,подразделений, организаций, групп), переданных во втором параметре. Руководительможет быть любого типа для объектов должность, группа, подразделение,организация, сотрудник.
     * @param objectParam (variant) – либо ID объекта, либо Docобъекта, либо TopElem объекта, для которого идет поискруководителей относительно сотрудника (сотрудников), переданных во второмпараметре.,* @param oPersonParam(variant)  – либо ID сотрудникадля которого ищется руководителя, либо массив элементов (сотрудников,подразделений, организаций, групп).
     * @returns – Возвращает массив из каталожныхзаписей функциональных руководителей (func_managers).
     * @example: arrBossTypes = tools.get_relative_boss_types( curUserID, iSubdivId ); Возвращает массив из каталожных записей операций,определяемых типами руководителей из массива функциональных руководителей (func_managers), который передается вфункцию. Возвращает объединение операций доступных отдельному типуруководителя. Входные параметры oManagerParam (array) – массив из каталожных записей функциональных руководителей (func_managers). Возвращаемый результат –массив из каталожных записейопераций (operations). Пример вызова xarrOperations =tools.get_relative_operations_by_boss_types(xarrBossTypes);
     */
    get_relative_boss_typesget_relative_operations() {
        return;
    }
    /**
     * Проверяет, входит ли указанная операция в массив изопераций, определяемых типами руководителей из массива функциональныхруководителей (func_managers),который передается в функцию.
     * @param oManagerParam (array) – массив из каталожных записей функциональных руководителей (func_managers).,* @param oOperationParam (variant) – либо ID операции,либо код (string) действия (action),которое привязано к операции.
     * @returns – флаг (bool),true, если указанная операция входит в массив из операций,false, если не входит.
     * @example: bCheck =tools.check_relative_operation(tools.get_relative_boss_types( curUserID,catCollab.id ), 'block_access_person');
     */
    check_relative_operation() {
        return;
    }
    /**
     * Возвращает массив из каталожных записей типов функциональныхруководителей (boss_types),доступных указанному пользователю относительно указанного объекта. То естьвозвращает все типы руководителя, относительно указанного объекта
     * @param iUserIDParam (int) – ID сотрудника, для которогонужно определить список типов функциональных руководителей.,* @param iObjectIDParam (int)– ID объекта, относительнокоторого нужно определить список типов функциональных руководителей.
     * @returns – массив из каталожных записей типовфункциональных руководителей (boss_types),доступных указанному пользователю относительно указанного объекта.
     * @example: xarrBossTypes =tools.get_object_relative_boss_types(curUserID, curObjectID);
     */
    get_object_relative_boss_types() {
        return;
    }
    /**
     * Возвращает массив из каталожных записей операций,определяемых типами руководителей  (boss_types), который передается в функцию. Возвращает объединениеопераций доступных отдельному типу руководителя. При этом возвращаются толькооперации, привязанные к определённом (заданному параметрами функции) типуобъекта (каталога) или все операции, если тип не указан.
     * @param arrBossTypesParam (array)  – массив каталожных записей типов руководителей  (boss_types).,* @param sCatalogNameParam(string) – строка с названием типа объекта (каталогабез ‘s’ на конце). Если передана пустая строка, товернет все операция доступные указанным типам руководителей.
     * @returns – массив из каталожных записейопераций, доступных указанному пользователю относительно указанного объекта.
     * @example: arrOperations =tools.get_relative_operations_by_boss_types(xarrBossTypes);
     */
    get_relative_operations_by_boss_types() {
        return;
    }
    /**
     * Возвращает массив из каталожных записей операций, доступныхуказному пользователю относительно указанного объекта, указанного типа. То естьвозвращает объединение операций доступных для всех типов руководителей,которыми обладает текущий пользователь для текущего объекта.
     * @param iUserIDParam (int) – ID сотрудника, для которогонужно определить список операций.,* @param iObjectIDParam (int)– ID объекта, относительнокоторого нужно определить список операций.,* @param sCatalogNameParam(string) – строка с названием типа объекта (каталогабез ‘s’ на конце). Если передана пустая строка, то вернетвсе операция, заданные типами руководителей пользователя.
     * @returns – массив из каталожных записейопераций, доступных указному пользователю относительно указанного объекта,указанного типа.
     * @example: xarrOperations =tools.get_object_relative_operations( curUserID, curObjectID, curObject.Name );
     */
    get_object_relative_operations() {
        return;
    }
    /**
     * Проверяет, есть ли операция, привязанная к переданному впараметрах функции действию (action), в спискепереданных операций.
     * @param arrOperationsParam (array)  – массив каталожных записей операций  (operations).,* @param teCurUserParam (TopElem)– TopElem сотрудника. Если передан не пустой и не null, и роль доступа Администратор, то функция всегда будетвозвращать true.,* @param sActionParam(string) – код действия, к которому должна бытьпривязана операция.
     * @returns – флаг (bool)true, если передан сотрудник с ролью администратор, илиесли в массиве найдена операция с указанным кодом действия. Falseв противном случае.
     * @example: xarrOperations =tools.get_object_relative_operations( curUserID, curObjectID, curObject.Name );
     */
    check_operation_rights() {
        return;
    }
    /**
     * Добавляет свойства (properties)объекта источника к свойствам объекта получателя.
     * @param oObjectRecipient (object)  – объект получатель.,* @param oObjectSource (object) – объект источник.
     * @returns – объединенный объект (object) из свойств источника и получателя.
     * @example: tools.extend_object(_vRedirectQuery,_oUrlQuery);
     */
    extend_object() {
        return;
    }
    /**
        * 
        
        * @returns 
        * @example: Свойство. Содержит ссылку накаталожную запись типа руководителя  с кодом current_user.
    */
    current_user_boss_type() {
        return;
    }
    /**
     * Возвращает массив из каталожных записей операций, доступныхтипу руководителя «Текущий пользователь» (код current_user).
     * @param – нет .
     * @returns – массив из каталожных записейопераций, доступных типу руководителя «Текущий пользователь» (код current_user).
     * @example: xarrOperations =tools.get_current_user_operations();
     */
    get_current_user_operations() {
        return;
    }
    /**
     * Заполняет свойства объекта получателя из соответствующихсвойств объекта источника. Заполняются только те свойства, названия которыхуказаны в переданном в функцию массиве.
     * @param fldTarget (object) – объект получатель.,* @param fldSourceParam (object) – объект источник.,* @param arrFieldNamesParam (array) – массив строк с названиями полей для заполнения.
     * @returns – нет.
     * @example: tools.assign_elems(fldCustomWebTemplate_temp, teCustomWebTemplate0666,['use_session_cache','out_type','cwt_type','zones'] );
     */
    assign_elems() {
        return;
    }
    /**
     * Возвращает значение указанного поля, полученного как ForeignElem поля источника данных,или заданную строку с ошибкой, если ссылка ведет на несуществующий объект.
     * @param fldForeignFieldParam( XML field) – поле с типом ForeignElem из которого нужно получитьссылку на объект.,* @param sFieldParam (string) – название поля в объекте, которое нужно вернуть.,* @param sErrTextParam (string)– строка, которую нужно вернуть, если ссылка ведет на несуществующий объект.
     * @returns – строка (string) со значениемуказанного поля или заданная строка с ошибкой.
     * @example: org_name =tools.get_foreign_field( org_id, 'disp_name',global_settings.object_deleted_str );
     */
    get_foreign_field() {
        return;
    }
    /**
     * Возвращает каталожную запись сотрудника по логину, взависимости от типа авторизации или undefined, если ненайден.
     * @param Login (string)  –  логин сотрудника.,* @param AuthType (string)– тип авторизации (ntlm, basic)
     * @returns – каталожная запись сотрудника или undefined, если не найден.
     * @example: _user =tools.get_user_by_login( _login, curHost.portal_auth_type );
     */
    get_user_by_login() {
        return;
    }
    /**
     * Разрешает установки даты сохранения (не modification_date) для объектов каталога для последующего отслеживанияверсий объекта.
     * @param sCatalogNameParam (string)  –  название каталога без ‘s’ на конце.,* @param bValueParam(bool)  – trueразмещать установку даты, falseне разрешать.
     * @returns – нет.
     * @example: tools.set_form_last_seved_data(fldAdminAccessCatalogElem.PrimaryKey, true );
     */
    set_form_last_seved_data() {
        return;
    }
    /**
     * Возвращает строку с XML описанием каталогов, на которое наложено ограничение поколичеству записей. Строка вида: <?xmlversion="1.0" encoding="utf-8"?><catalogs><catalog><name>cl_course</name><max_records_num>3</max_records_num></catalog></catalogs>
     * @param – нет
     * @returns – строка (string)с XML описанием каталогов, накоторое наложено ограничение по количеству записей.
     * @example: tools.get_catalog_limits()
     */
    get_catalog_limits() {
        return;
    }
    /**
     * Возвращает массив из каталожных записей значений картызнаний из карточки сотрудника и профиля значений карты знаний из должностисотрудника.
     * @param person_id (int)  –  ID сотрудника.
     * @returns – массив из каталожных записейзначений карты знаний.
     * @example: tools.get_knowledge_parts_by_person_id(person_id)
     */
    get_knowledge_parts_by_person_id() {
        return;
    }
    /**
     * Возвращает массив из каталожных записей экспертов,определенных в значениях карты знаний текущего сотрудника.  Значения картызнаний получают из карточки сотрудника и профиля значений карты знаний издолжности сотрудника.
     * @param person_id (int)  –  ID сотрудника.
     * @returns – массив из каталожных записейэкспертов.
     * @example: нет.
     */
    get_experts_by_person_id() {
        return;
    }
    /**
     * Возвращает название объекта из поля, которое его содержит.Например, для курса (course) это значение поля name, а для теста (test) это поле title.
     * @param teObjectParam(TopElem)  –  TopElem объекта, название которого нужно показать.
     * @returns – строка (string)с названием.
     * @example: _source.object_name= tools.get_object_name_field_value( objectDoc );
     */
    get_object_name_field_value() {
        return;
    }
    /**
     * Копирует файл из адреса источника данных по адресуполучателя данных. Все папки в адресе должны существовать до началакопирования, как в источнике, так и в получателе.
     * @param sDestDirPARAM (string) – полный путь до файла получателя. Включая название файла.,* @param sSourceDirPARAM (string)  – полный путь до файла источника. Включая названиефайла.
     * @returns – нет.
     * @example: tools.copy_url( 'x-local://' + DefaultDb + '/history.xml', 'x-local://wtv/history.xml' );
     */
    copy_url() {
        return;
    }
    /**
     * Распаковывает архив из адреса источника данных по адресуполучателя данных. Все папки в адресе должны существовать до начала распаковки,как в источнике, так и в получателе.
     * @param sSourceDirPARAM (string)  – полный путь до файла источника. Включая названиефайла.,* @param sDestDirPARAM (string) – полный путь до файла получателя.
     * @returns – нет.
     * @example: tools.zip_extract(TopElem.package_url, _url_base );
     */
    zip_extract() {
        return;
    }
    /**
     * Создает архив по указанному адресу из файлов в папкеисточнике. Все папки в адресе должны существовать до начала распаковки, как висточнике, так и в получателе.
     * @param sArchivePathPARAM (string)  – полный путь до файла получателя. Включая названиефайла.,* @param sContentPathPARAM (string)  – полный путь до папки источника с файлами. Или путьдо файла, который нужно добавить (в этом случае нужно указать sContentDirPathPARAM).,* @param sContentDirPathPARAM (string) необязательный, если все файлы лежать в одной папке -полный путь до папки источника с файлами.
     * @returns – нет.
     * @example: tools.zip_create(UrlToFilePath(sPackageFolderUrl + '/' + _pak_name), UrlToFilePath(sTempUrl) );
     */
    zip_create() {
        return;
    }
    /**
     * Свойство.  Массив хранит hash форм каталогов. Используется чтобы оценить, изменилисьли формы объектов или нет.,<doc_types_catalog_hashes>,<doc_types_catalog_hashMULTIPLE="1" PRIMARY-KEY="object_name">,<object_nameTYPE="string"/>,<object_hashTYPE="string"/>,</doc_types_catalog_hash>
     * @param Свойство.  Массив хранит hash форм каталогов. Используется чтобы оценить, изменилисьли формы объектов или нет.,* @param <doc_types_catalog_hashes>,* @param <doc_types_catalog_hashMULTIPLE="1" PRIMARY-KEY="object_name">,* @param <object_nameTYPE="string"/>,* @param <object_hashTYPE="string"/>,* @param </doc_types_catalog_hash>
     * @returns Свойство.  Массив хранит hash форм каталогов. Используется чтобы оценить, изменилисьли формы объектов или нет. <doc_types_catalog_hashes> <doc_types_catalog_hashMULTIPLE="1" PRIMARY-KEY="object_name"> <object_nameTYPE="string"/> <object_hashTYPE="string"/> </doc_types_catalog_hash>
     * @example: Свойство.  Массив хранит hash форм каталогов. Используется чтобы оценить, изменилисьли формы объектов или нет. <doc_types_catalog_hashes> <doc_types_catalog_hashMULTIPLE="1" PRIMARY-KEY="object_name"> <object_nameTYPE="string"/> <object_hashTYPE="string"/> </doc_types_catalog_hash> </doc_types_catalog_hashes>
     */
    doc_types_catalog_hashes() {
        return;
    }
    /**
        * 
        
        * @returns 
        * @example: Свойство (bool).  Показываетпроизошла ли успешная запись hash форм каталогов (true) или нет (false).
    */
    doc_types_catalog_registered() {
        return;
    }
    /**
     * Сравнивает hash вструктуре doc_types_catalog_hashes с текущем hash’ем объектов и обновляет его в случае изменения.
     * @param aCatalogsToRegPARAM (string)  – название объекта.,* @param bServerCheck (bool) – флаг, true – запускать проверку на сервере, или false на локальной машине.
     * @returns – нет.
     * @example: tools.register_doc_types_catalog(regAllDocTypes(),false);
     */
    register_doc_types_catalog() {
        return;
    }
    /**
     * Возвращает название объекта из поля, которое его содержит.Например, для курса (course) это значение поля name, а для теста (test) это поле title. Отличие от функции get_object_name_field_value в том,что если поле содержит путь до элемента через “.”, то поле с названием будетнайдено по этому пути, а в get_object_name_field_value будет ошибка.
     * @param teObjectParam(TopElem)  –  TopElem объекта, название которого нужно показать.
     * @returns – строка (string)с названием.
     * @example: sDispName =tools.get_disp_name_value( teObject );
     */
    get_disp_name_value() {
        return;
    }
    /**
     * Возвращает объект с полями id и type, полученные из json строки без ведущих и замыкающих [].Если в переданной строке будет “id”:значение и “type”:значение, то вернет эти значения в возвращаемомобъекте. Причем значения id и type должны встречаться только один раз.
     * @param sSomeObjectPARAM(string)  –  строка.
     * @returns – объект с указными полями.
     * @example: selectObject =tools.read_selected_date(SelectObject);
     */
    read_selected_date() {
        return;
    }
    /**
     * Устаревшая функция. Вместо нее нужно использоватьtools_web.get_sum_sid. Получает уникальный идентификатор, определяющий текущуюсессию и объект, для которого этот идентификатор получен.
     * @param sIdParam(int)  –  ID объекта,для которого нужно получить уникальный идентификатор.
     * @returns – уникальный идентификатор (int).
     * @example:
     */
    get_sum_sid() {
        return;
    }
    /**
     * Устаревшая функция. Вместо нее нужно использовать tools_web.check_sum_sid. Сравнивает уникальный идентификатор, переданный в нее суникальным идентификатором, определяющий текущую сессию и объект, для которогоэтот идентификатор получен.
     * @param sIdParam(int)  –  ID объекта,для которого нужно осуществить проверку.,* @param sSumParam (int) –  уникальный идентификатор, с которым идет сравнение.
     * @returns – флаг (bool)true - уникальные идентификаторы совпадают false - уникальные идентификаторы несовпадают.
     * @example:
     */
    check_sum_sid() {
        return;
    }
    /**
     * Заменяет в строке пробел, «(» , «)», «+», «-», на пустуюсроку. А символы «,», «;» на пробел.
     * @param strPhoneParam(string)  –  строка для изменения.
     * @returns – преобразованная строка (string) или null, если произошлаошибка.
     * @example: str =tools.build_simple_phone( strPhoneParam );
     */
    build_simple_phone() {
        return;
    }
    /**
     * Преобразует строку вида «+7-903-508-20-45»или «+7(903)508-20-45» в строку «79035082045 5082045».  Нужно для обеспеченияпоиска по телефонным номерам.
     * @param strPhoneParam(string)  –  строка для изменения.
     * @returns – преобразованная строка (string) или null, если произошлаошибка.
     * @example: str =tools.build_simple_phone( strPhoneParam );
     */
    build_phone() {
        return;
    }
    /**
     * Назначает сотруднику материал библиотеки для изучения. Приэтом создается объект просмотра материала library_material_viewing. Еслиматериал уже назначен, возвращается idназначенного ранее объекта просмотра материла.
     * @param iPersonIDParam (int)– ID сотрудника для назначения.,* @param iMaterialIDParam(int) – ID материала библиотеки.,* @param tePersonParam (TopElem)необязательный –TopElem сотрудника.,* @param teMaterialParam(TopElem) необязательный – ID материала библиотеки.,* @param bSendNotification(bool) – true- отправляетсястандартное уведомление о назначении материала библиотеки, false – не отправляется.
     * @returns – Doc объект просмотра материала library_material_viewing.
     * @example: . fldResult =tools.recommend_library_material_to_person( eval( '_env' + Ps.row_list_field +Ps.row_key_field ), fldValue.key, null, null, true);
     */
    recommend_library_material_to_person() {
        return;
    }
    /**
     * Преобразует в дату первый параметр функции. Еслипреобразование не удалось, то возвращается второй параметр в таком виде, как онпередан в функцию, или undefined, если он не задан.
     * @param sDateStr (string)– строка для преобразования в дату.,* @param vDefault(variant) необязательный – значение по умолчанию, еслипреобразование перового параметра не удалось.
     * @returns – (variant)либо дата, либо второй параметр в таком виде, как он передан в функцию, или undefined, если он не задан.
     * @example: . vTemp =tools.opt_date(oEvent.GetProperty(oColumns.end),oEvent.GetProperty(oColumns.start));
     */
    opt_date() {
        return;
    }
    /**
     * Преобразует в строку числовой параметр функции. Еслипараметр отрицательный, то строка будет начинаться со знака «-».
     * @param iNumberParam (real)– число для преобразования в строку.
     * @returns – строка (string).
     * @example: . tools.str_negative_number(TopElem.weight )
     */
    str_negative_number() {
        return;
    }
    /**
     * Возвращает строку с размером файла в байтах. Или в другойразмерности в зависимости от размера файла и параметров функции.
     * @param iByteSizePARAM (int)– размер файла в байтах.,* @param bAddUnitPARAM (bool)– добавлять размерность (гигабайты, мегабайты и т.д.) и пересчитывать размерфайла в соответствующую размерность – true.
     * @returns – строка (string) с числом байт иразмерностью.
     * @example: . tools.beautify_file_size(catResourceElem.size.Value)
     */
    beautify_file_size() {
        return;
    }
    /**
     * Возвращает строку для использования в запросах для поиска поfull textиндексу. Строка параметр функция преобразуется в строку в зависимости отнастроек базы.
     * @param sValueParam (string)– строка для преобразования.
     * @returns – строка (string) для использования взапросах для поиска по full text индексу.
     * @example: . tools.get_ft_value(value )
     */
    get_ft_value() {
        return;
    }
    /**
     * Создает строку XML дляпомещения агента с указанным id в очередь навыполнение. Получается строка вида<queue_command><type>run_agent</type><agent_idTYPE="integer">0x4F71ACFB4EF22716</agent_id><element_id/><elems_id_str/><dDateParam>30.05.211516:44:07</dDateParam><tenancy_name>dbo</tenancy_name></queue_command>
     * @param iServerAgentIDParam(int) – ID агента.,* @param sElementIDParam (int) необязательный  – ID объекта, над которым запускаетсяагента (например, в списке).,* @param sElemsIDParam (string) необязательный  – ID объектов разделенных «;», надкоторым запускается агента (например, в списке).,* @param dDateParam(data) необязательный  – дата запуска агента, поумолчанию текущая дата.,* @param sTenancyNameParam(string) необязательный  – код экземпляра системы (tenant) в multitenant системе, в котором нужно запустить агент.
     * @returns – строка (string).
     * @example: . tools.get_agent_command_queue_xml(5724546796725872406, '', '', Date(), 'dbo' )
     */
    get_agent_command_queue_xml() {
        return;
    }
    /**
     * Формирует строку с уникальным идентификатором на основепараметров функции. Результирующая строка будет вида $$uid_первыйпараметр_второй параметр.
     * @param sUIDParam (string)– строка формирования идентификатора.,* @param sUrlParam (string)– строка формирования идентификатора.
     * @returns – строка (string)$$uid_первый параметр_второй параметр.
     * @example: . sUID =tools.get_uid_cached_doc( tools.uid, sUrlParam );
     */
    get_uid_cached_doc() {
        return;
    }
    /**
     * Для типов установки WebTutor, отличныхот XML базы, обновляет документв cache. Документ определяется по url к нему.
     * @param sUrlParam (string)– строка с путем до документа.
     * @returns – флаг (bool).True – обновление успешно произведено, иначе - false.
     * @example: . tools.check_and_refresh_cached_docs(url);
     */
    check_and_refresh_cached_docs() {
        return;
    }
    /**
     * Возвращает сроку с тегами XML, полученнуюиз строки, переданной в параметрах функции. Предполагается, что в функциюпередается файл со значениями параметров, потому в результирующей строке будутпредставлены название параметра и его значение
     * @param sFileText (string)– строка для разбора.
     * @returns – срока (string)с тегами XML.
     * @example: . returntools.open_str_win_ini( LoadUrlText( sUrlParam ) );
     */
    open_str_win_ini() {
        return;
    }
    /**
     * Возвращает сроку с тегами XML,полученную из файла путь до которого, передан в параметрах функции. Вызываетфункцию tools.open_str_win_iniдля разбора файла.
     * @param sUrlParam (string)– строка с путем до файла.
     * @returns – срока (string)с тегами XML.
     * @example: .
     */
    open_doc_win_ini() {
        return;
    }
    /**
     * Функция для записи в лог настраиваемых сообщений с болееподробной информацией и возможностью указания типа ошибки и отключенияотладочных сообщений, когда режим отладки отключен в общих настройках.
     * @param sTextParam (string)– строка с текстом для записи в лог.,* @param sMessageTypeParam (string) – строка с типом сообщения. Возможные значения:,* @param error – ошибка.Сообщения с таким типом всегда пишутся в основной лог системы (xhttp.log) с префиксом 'ERROR:'. Если в общих настройках включен лог отладки (debug.log), то и в него то же (debug.log).,* @param debug –отладочное сообщение. Сообщения с таким типом всегда пишутся в лог отладки (debug.log), если в общих настройках онвключен с префиксом 'DEBUG: '.,* @param по умолчаниютип сообщения info - Сообщения с таким типом всегдапишутся в основной лог системы (xhttp.log)с префиксом ‘INFO: ‘.  Если в общих настройках включен лог отладки (debug.log), то и в него то же (debug.log).,* @param bShowAdditionalInfoParam(bool) – флаг true – показыватьдополнительную информацию по сообщению. False - не показывать. Дополнительная информация включает в себя mode, по которому вызывается сообщение, curObjectID, curDocID,curUserID, если их можно получить.
     * @returns – нет.
     * @example: . tools.log("project_actions.bs:" + err, "error");
     */
    log() {
        return;
    }
    /**
     * Возвращает массив из каталожных записей подписок сотрудника.
     * @param iPersonIDParam (int)– ID  сотрудника.
     * @returns – массив из каталожных записейподписок сотрудника.
     * @example: . arrAllSubscriptions =tools.get_sibscriber_subscriptions( curUserID );
     */
    get_sibscriber_subscriptions() {
        return;
    }
    /**
     * Проверяет, существует ли файл по указанному пути.
     * @param sFilePathParam (string)– строка с путем до файла.
     * @returns – флаг (bool).True – файл существует, иначе - false.
     * @example: . if(tools.file_url_exists(sTempUrl ))
     */
    file_url_exists() {
        return;
    }
    /**
     * Используется для вариантов установки WebTutor c базой данных отличной от XML. Если в настройках моста связи с базой данных установленаасинхронная обработка катологов, то вызов этой функции позволяет дождатьсяокончания синхронизации текущего каталога и потом выполнять действия. Еенеобходимо вызвать, если произошло изменение объекта, затрагивающее изменениекаталожных полей, и сразу после изменения нужно выполнить запрос к каталогуобъекта. Без вызова функции запрос к каталогу может вернуть старое значениекаталожного поля измененного объекта, если синхронизация еще не закончена. Например,меняется поле логин сотрудника с 1 на 2. И сразу после сохранения идет запроспо поиску логина со значением 2. Если не вызывать функцию, то искомое значениеможет быть не найдено. Для XML базыфункция ничего не делает, так что ее вызов не мешает выполнению программы.,Проверяет, существует ли файл по указанному пути.
     * @param catalogName (string)– строка с названием каталога с ‘s’ на конце.
     * @returns – нет.
     * @example: . tools.sync_catalog(“pas”)
     */
    sync_catalog() {
        return;
    }
    /**
     * Обновляет список типов мероприятий в системе.
     * @param bUpdateServersParam (bool) необязательный по умолчанию false–  true обновлять данные насервере (если функция запускается не на сервере) или на локальной машине - false .,* @param oTarget (TomElem) необязательный по умолчанию common.TomElem документа, дочернийэлемен event_types, которого нужно обновить.
     * @returns – нет.
     * @example: . tools.update_commons_event_types(true );
     */
    update_commons_event_types() {
        return;
    }
    /**
     * Выполняет проверку цифровой подписи и оригинального текста вуказном объекте электронно-цифровой подписи. Проверяется, что текст и цифроваяподпись теста соответствуют друг другу. То есть что указанный текстдействительно подписан этой подписью. Проверка происходит с помощью криптопровайдера указанного в общих настройках.
     * @param iDocIDParam (int)– ID объекта электронно-цифровой подписи.
     * @returns –  объект (object)со следующими полями – id ID результатавыполнения проверки подписи и strMessage – текстовое сообщение о результатевыполнения. Id может бытьследующим 0- подпись действительна; 1- подпись не действительна; 2 - номерсертификата не соответствует номеру сертификата, указанному в карточкепользователя; 3 - текст подписанного документа пустой; 4 - электронно-цифроваяподпись пустая
     * @example: . strVerifRes=ServerEval('tools.DigitalVerifyDoc(&quot;'+Ps.Doc.DocID +'&quot;)');
     */
    DigitalVerifyDoc() {
        return;
    }
    /**
     * Выполняет проверку цифровой подписи и оригинального текстапереданных, как параметры функции. Проверяется, что текст и цифровая подписьтеста соответствуют друг другу. То есть что указанный текст действительноподписан этой подписью. Проверка происходит с помощью крипто провайдерауказанного в общих настройках.
     * @param iDocIDParam (int)– ID объекта электронно-цифровой подписи.
     * @returns –  объект (object)со следующими полями – id ID результатавыполнения проверки подписи и strMessage – текстовое сообщение о результатевыполнения. Id может быть следующим0- подпись действительна; 1- подпись не действительна; 2 - номер сертификата несоответствует номеру сертификата, указанному в карточке пользователя; 3 - текстподписанного документа пустой; 4 - электронно-цифровая подпись пустая.
     * @example: . verifRes=tools.DigitalVerify(teDigitalSignature.sign_open,teDigitalSignature.sign_encrypted)
     */
    DigitalVerify() {
        return;
    }
    /**
     * Устанавливает пакеты со стандартными объектами системы,которые входят в первоначальную поставку WebTutor. Приэтом проверяется дата последней установки и язык системы по умолчанию.
     * @param - нет.
     * @returns – нет.
     * @example: . tools.process_custom_packs();
     */
    process_custom_packs() {
        return;
    }
    /**
     * На основе настроек профиля редактирования контента вкарточке сотрудника проверять возможность загрузки файла указанного размера.Проверяется ограничение на размер загружаемого файла, на общий размер файлов,загруженных пользователем и на максимальное количество загружаемых файлов.Применяется при загрузке файла  в базу с портала.
     * @param iFileSizeParam (int)– размер файла в байтах.,* @param iPersonIDParam (int)– ID сотрудника.
     * @returns –  строка (string)“ok”- загрузка разрешена или строка с сообщением опричине отказа в загрузке.
     * @example: . sCheckResult =tools.check_resource_size(StrLen(oFileField), curUserID);
     */
    check_resource_size() {
        return;
    }
    /**
     * Включает сотрудника в кадровый резерв. При этом создаетсяобъект кадровый резерв и этап развития карьеры к нему. Если объект для данногосотрудника уже созданы, в них сносятся изменения.
     * @param iPersonIdParam (int)– ID сотрудника для включения врезерв.,* @param teRequestParam (TopElem)необязательный – TopElem заявки на включение в резерв.Если в заявке есть настраиваемые поля и в настраиваемых полях есть ссылка натип кадрового резерва, то этот тип будет приписан создаваемому объектукадрового резерва.,* @param iCareerReserveTypeIdParam (int) необязательный – ID типа кадрового резерва. Этот тип будет приписан создаваемомуобъекту кадрового резерва.,* @param iPositionIdParam(int) необязательный – ID должности. Эта должность будет проставлена в этапе развитиякарьеры, как цель развития. Если должность не указана, но в заявке на включениев резерв была проставлена должность, как объект заявки, то будет использоватьсяId должности из заявки.,* @param strStateParam (string)необязательный по умолчанию candidate – статус объектакадровой резерв, который присваивается по результату работы функции.,* @param iPositionCommonIdParam (int) необязательный – ID типовой должности (используется, если не указана должностьiPositionIdParam). Эта типовая должность будет проставлена в этапе развитиякарьеры, как цель развития. Если типовая должность не указана, но в заявке навключение в резерв была проставлена типовая должность, как объект заявки, тобудет использоваться Id типовойдолжности из заявки.,* @param sIncludeDateParam (date) необязательный – дата включения в резерв. По умолчаниютекущая дата.
     * @returns –  ID (int)  объекта кадровый резерв.
     * @example: . tools.include_person_to_personnel_reserve_position(_person.PrimaryKey,docRequest.TopElem);
     */
    include_person_to_personnel_reserve_position() {
        return;
    }
    /**
     * Возвращает объект, полученный из списка полей указногообъекта. Список полей передаётся как параметр функции.
     * @param fldSPXML (variant)– ID объекта, или его TopElem.,* @param sFieldList (string)строка из названий полей объекта, которые нужно получить, разделенные “;”.,* @param bNoValidation (bool)необязательный  по умолчанию true – проверять что всписке полей, преданных в sFieldList не встречаются ведущие или заключительныезнаки /.
     * @returns –  объект (object)со значениями выбранных полей. Название свойства – название поля в исходномобъекте, значение поля – значение поля в исходном объекте
     * @example: . return tools.extract_bfields_by_list(Child(0).Parent,'name;type_id;event_type_id;start_date;finish_date;collaborators/collaborator/collaborator_id;collaborators/collaborator/person_fullname',false); D:\WebTutor2\trunk\WebTutorAdmin\wtv\wtv_tools.xml
     */
    extract_bfields_by_list() {
        return;
    }
    /**
     * Возвращает Doc объект,переданного в параметрах функции. Если свойство Docопределено, возвращает его. Если нет, то открывает объект по Id и возвращает Doc.
     * @param teObjectParam(TopElem) – TopElem объекта.
     * @returns –  Docобъекта или null.
     * @example: . docObject =tools.get_opened_doc( Child(0).Parent );
     */
    get_opened_doc() {
        return;
    }
    /**
     * Преобразовывает html переданный в функцию в файл pdf и сохраняет его по указанному,пути.
     * @param sHtmlText (string)– строка с html для преобразования.,* @param sResourcesDirPath (string)  - путь допапки с ресурсами (изображения, стили и т.д.), которые используются в html.,* @param sOutFilePath(string) – пусть до файла,  в который будет сохраненполученный файл pdf.
     * @returns –  флаг (bool)true – генерация прошла успешно, false в противном случае.
     * @example: . tools.html_to_pdf(_str,'', UrlToFilePath(_filename));
     */
    html_to_pdf() {
        return;
    }
    /**
     * Устанавливает тип руководителя для участника проекта.
     * @param iProjectParticipantIDParam (int) необязательный, если передан docProjectParticipantParam –ID объекта участник проекта.,* @param docProjectParticipantParam (Doc) - Doc объектаучастник проекта.,* @param iBossTypeIDParam (int) - ID типа руководителя для присвоенияучастнику проекта.
     * @returns –  флаг (bool)true – функция выполнена успешно, false в противном случае.
     * @example: . tools.set_project_participant_type(iSelectedID, null, iElementID)
     */
    set_project_participant_type() {
        return;
    }
    /**
     * Создает объект участник проекта для указанного проекта иуказанного сотрудника.
     * @param iProjectParticipantIDParam (int) необязательный, если передан tePersonParam – ID объекта участник проекта.,* @param tePersonParam (TopElem)- TopElem объекта участникпроекта.
     * @returns –  Doc созданного объекта участник проекта.
     * @example: . tools.create_project_participant(_value.key,null,TopElem.Doc.DocID)
     */
    create_project_participant() {
        return;
    }
    /**
     * Создает запись в журнале profiling.log. Строка вида sIDParam + '\t' +GetCurTicks() + '\t' + Request.Session.GetOptProperty( 'sid', '' ) + '\t' +Request.Url + '\t' + sTypeParam
     * @param sIDParam (string)строка идентификатор события.,* @param Request(Request)- объект Request.,* @param sTypeParam (string)строка с текстом события.
     * @returns - нет.
     * @example: .
     */
    set_profile_log() {
        return;
    }
    /**
     * Очищает данные по статусу, сотруднику, дате поставки иоплаты по экземпляру товара.
     * @param oSourceGoodInstance (variant ) либо ID экземпляра товара, либо Doc экземпляра товара.,* @param docProjectParticipantParam (Doc) - Doc объектаучастник проекта.,* @param iBossTypeIDParam (int) - ID типа руководителя для присвоенияучастнику проекта.
     * @returns –  флаг (bool)true – функция выполнена успешно, false в противном случае.
     * @example: . if (tools.clear_good_instance_status( fldGoodInstanceElem.PrimaryKey ) )
     */
    clear_good_instance_status() {
        return;
    }
    /**
     * Получает заполонённую  Xml структуру с данными о выгруженном пакете. Xml структура может быть сохранена как есть, при генерациипакета, или использована для дальнейшего заполнения.
     * @param sIDParam (string ) необязательный IDпакета. Если не передано, заполняется случайной строкой
     * @returns –  XML со следующими полями. Id – IDпакета. create_date – дата создания это текущая дата. server_version – версия сервера.
     * @example: . docForm =tools.get_form_upload_data();
     */
    get_form_upload_data() {
        return;
    }
    /**
     * Добавляет поля в XML структуру (например, полученную функцией tools.get_form_upload_data)  из указанного объекта. Применяется при создании лицензиина материалы библиотеки или формировании пакетов.
     * @param fldFormTarget (XML)структура, в которую добавляют информацию.,* @param fldObjParam (XML)– либо XML структура из которой берется информация.,* @param oObjIDParam (int)необязательный, если передан fldObjParam – ID объекта.,* @param bInvariableParam (bool)
     * @returns нет
     * @example: . tools.set_field_to_form_upload_data(formDoc, access_roles );
     */
    set_field_to_form_upload_data() {
        return;
    }
    /**
     * Возвращает ID системыотправки уведомлений по умолчанию.
     * @param нет
     * @returns - int - ID системы отправки уведомлений поумолчанию.
     * @example: . docActiveNotificationParam.TopElem.notification_system_id= tools.get_default_notification_system_id();
     */
    get_default_notification_system_id() {
        return;
    }
    /**
     * Возвращает ID системыпроведения вебинаров по умолчанию.
     * @param нет
     * @returns - int - ID системы проведения вебинаров поумолчанию.
     * @example: . tools.get_default_webinar_system_id()
     */
    get_default_webinar_system_id() {
        return;
    }
    /**
     * Возвращает TopElem системыотправки уведомлений.
     * @param oParam (variant)– ID объекта системы отправкиуведомлений, или его TopElem. Если передан ID или TopElemобъекта отличного от notification_system, то в объекте будет произведен поиск ID системы отправки уведомлений вполе notification_system_id, и возращен TopElemобъекта, определяемый ID изэтого поля.
     * @returns - TopElem системы отправки уведомлений.
     * @example: . teNotificationSystem= tools.get_notification_system( oParam );
     */
    get_notification_system() {
        return;
    }
    /**
     * Выполняет указный метод системы отправки уведомлений.Значения для переменных системы отправки уведомлений, используемых в методе,можно передать в параметрах функции. Название переменной в передаваемомпараметре должно совпадать с названием переменной в списке переменных в объектесистемы отправки уведомлений.
     * @param oParam (variant)– ID объекта системы отправкиуведомлений, или его TopElem. Если передан ID или TopElemобъекта отличного от notification_system, то в объекте будет произведен поиск ID системы отправки уведомлений вполе notification_system_id и использован TopElemобъекта, определяемый ID изэтого поля.,* @param sMethodNameParam (string) – название вызываемого метода.,* @param oArrParam (string)– строка в формате json, задающая значения дляпеременных в списке переменных в объекте системы отправки уведомлений.
     * @returns - (variant)результат выполнения указанного метода, определяется типом указанного метода.
     * @example: . var oRes =tools.call_notification_system_method( docActiveNotification.TopElem,'SendNotification', oParam );
     */
    call_notification_system_method() {
        return;
    }
    /**
     * Заполняет в объекте получатель поле type_id кодом типамероприятия, переданного в параметрах функции. Если при этом в системе есть типмероприятия с указным кодом, то заполняется ссылка на этот тип в поле event_type_id.
     * @param ftTarget(TopElem) – TopElem для заполнения.,* @param sEventTypeParam(string) – строка с кодом типа мероприятия.
     * @returns - null, еслитип мероприятия с указным кодом не найден, или id (int) этого типа мероприятия
     * @example: . tools.set_event_type_id(doc.TopElem, _event_type );
     */
    set_event_type_id() {
        return;
    }
    /**
     * Создает объект элемент очереди скриптов.
     * @param sScriptParam(string) – код для выполнения.,* @param sCodeParam(string) – строка с кодом скрипта.,* @param bDeleteAutomaticallyParam(bool) – флаг, true- автоматическиудалять код из очереди, false- нет.,* @param iDelayParam (int)– задержка в секундах перед выполнением кода.
     * @returns - ID (int) созданного объекта.
     * @example: .
     */
    add_script_to_queue() {
        return;
    }
    /**
     * Ожидает выполнения элемента очереди скриптов.
     * @param iScriptIdParam (int) – ID скрипта.,* @param bDeleteScript(bool) – true удалятьобъект элемент очереди скриптов после выполнения или нет (false).
     * @returns - объект (object)со следующими полями result – содержит объект, который возвращается порезультатам выполнения скрипта (если такой есть), error описание ошибки,возникшей при выполнении (если ошибка обрабатывается скриптом). Если элементочереди скриптов не найден, вернет null.
     * @example: .
     */
    wait_script_queue() {
        return;
    }
    /**
     * Отрывает указную версию курса в интерфейсе администратора WebTutor.
     * @param iCourseIdParam (int) – ID курса.,* @param sBaseUrlParam(string) –  путь до папок с предыдущий версии курса вфайловой систем.
     * @returns - Doc указанного курса.
     * @example: .
     */
    open_course_version() {
        return;
    }
    /**
     * Заменяет в строке символы ProcessExecute,alert, eval, ShellExecute, Eval. Это позволяет использовать полученную врезультате выполнения функции строку в выражении eval итаким образом частично обезопасить выполнение кода от injection.
     * @param strEvalParam (string) –  строка дляпреобразования.
     * @returns - (string) строка без символов ProcessExecute,alert, eval, ShellExecute, Eval.
     * @example: . strEval=tools.evalReplace(strEval)
     */
    evalReplace() {
        return;
    }
    /**
     * Оптимизированная функция выполнения длинных запросов. Ее предпочтительнееиспользовать, кода нужно сделать, например запрос с иерархией. И всегдаиспользовать вместо CatalogHierSubsetиспользуя функцию IsHierChild.
     * @param sQueryParam (string) –  строка для выполнениязапроса.
     * @returns - результат выполнения запроса XQuery по оптимизированной строке sQueryParam.
     * @example: . docArray =tools.xquery( 'for $elem in documents where IsHierChild( $elem/id, ' + _main_doc.document_id+ ' ) order by $elem/Hier() return $elem/id' ); xarrSubdivisions = tools.xquery( 'for $elem in subdivisions whereIsHierChild( $elem/id, ' + iLastDepID + ' ) order by $elem/Hier() return$elem/id' );
     */
    xquery() {
        return;
    }
}

const tools = new Tools();