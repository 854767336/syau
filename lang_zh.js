/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-CN'] = {
		closeText: '�ر�',
		prevText: '&#x3c;����',
		nextText: '����&#x3e;',
		currentText: '����',
		monthNames: ['һ��','����','����','����','����','����',
		'����','����','����','ʮ��','ʮһ��','ʮ����'],
		monthNamesShort: ['һ','��','��','��','��','��',
		'��','��','��','ʮ','ʮһ','ʮ��'],
		dayNames: ['������','����һ','���ڶ�','������','������','������','������'],
		dayNamesShort: ['����','��һ','�ܶ�','����','����','����','����'],
		dayNamesMin: ['��','һ','��','��','��','��','��'],
		weekHeader: '��',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '��'};
	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});

?(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": {               // Add your regex rules here, you can take telephone as an example   
                    "regex": "none",
                    "alertText": "* ���������д.",
                    "alertTextCheckboxMultiple": "* ��ѡ��һ��ѡ��.",
                    "alertTextCheckboxe": "* ��ѡ��һ����ѡ��."
                },
                "length": {
                    "regex": "none",
                    "alertText": "* ���ȱ����� ",
                    "alertText2": " �� ",
                    "alertText3": " ֮��."
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* ���ѡ�� ", //�ٷ��ĵ�����������   
                    "alertText2": " ��."
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* ����ѡ�� ",
                    "alertText2": " ��."
                },
                "confirm": {
                    "regex": "none",
                    "alertText": "* �������벻һ��,����������."
                },
                "telephone": {
                    "regex": "/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/",
                    "alertText": "* ��������Ч�ĵ绰����,��:010-29292929."
                },
                "mobilephone": {
                    "regex": "/(^0?[1][358][0-9]{9}$)/",
                    "alertText": "* ��������Ч���ֻ�����."
                },
                "email": {
                    "regex": "/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/",
                    "alertText": "* ��������Ч���ʼ���ַ."
                },
                "date": {
                    "regex": "/^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/",
                    "alertText": "* ��������Ч������,��:2008-08-08."
                },
                "ipv4": {
                    "regex": "/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/",
                    "alertText": "* ��������Ч��IP."
                },
                "chinese": {
                    "regex": "/^[\u4e00-\u9fa5]+$/",
                    "alertText": "* ����������."
                },
                "url": {
                    "regex": "/^[a-zA-z]:\\/\\/[^s]$/", //��Щ��֤���Լ���ǿ   
                    "alertText": "* ��������Ч����ַ."
                },
                "zipcode": {
                    "regex": "/^[1-9]\d{5}$/",
                    "alertText": "* ��������Ч����������."
                },
                "qq": {
                    "regex": "/^[1-9]\d{4,9}$/",
                    "alertText": "* ��������Ч��QQ����."
                },
                "onlyNumber": {
                    "regex": "/^[0-9]+$/",
                    "alertText": "* ����������."
                },
                "onlyLetter": {
                    "regex": "/^[a-zA-Z]+$/",
                    "alertText": "* ������Ӣ����ĸ."
                },
                "noSpecialCaracters": {
                    "regex": "/^[0-9a-zA-Z]+$/",
                    "alertText": "* ������Ӣ����ĸ������."
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "formatError": {
                    "alertText": "�밴��ȷ��ʽ����"
                }
            };
            
        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);
(function() {

    $.fn.timeago.defaults.lang = {
        units: {
            second: "��",
            seconds: "��",
            minute: "����",
            minutes: "����",
            hour: "Сʱ",
            hours: "Сʱ",
            day: "��",
            days: "��",
            month: "��",
            months: "��",
            year: "��",
            years: "��"
        },
        prefixes: {
            lt: "����1",
            about: "Լ",
            over: "����",
            almost: "�ӽ�",
            ago: ""
        },
        suffix: "֮ǰ"
    };

}).call(this);
/**
 * �����԰�-zh
 */
(function (window, undefined) {

    var language = {};

    language.common = {
        ok: "ȷ��",
        confirm: "ȷ��",
        confirmAction: "��",
        cancel: "ȡ��",
        history: "��ʷ",
        review: "��ע",
        save: "����",
        print: "��ӡ",
        download: "����",
        help: "����",
        instruction: "���˵��",
        progress: '�������',
        tips: "��ʾ",
        dismiss: "��֪����",
        doAtOnce: "��������",
        notDoAtOnce: "�ݲ�����",
        fail: "ʧ��",
        networkError: "������������",
        load: "����",
        choose: "��ѡ��",
        deleteText: "ɾ��",
        close: "�ر�",
        yes: "��",
        no: "��",
        reload: "ˢ��",
        compare: "���ݱȽ�",
        printInvoice: "��ӡСƱ",
        wait: "���Ժ�",
        back: "����"
    };

    language.dialog = {
        button: {
            close: "�ر�",
            min: "��С��",
            restore: "��ԭ",
            openNew: "�´��ڴ�"
        }
    };

    language.status = {
        complete: "�����",
        terminate: "����ֹ",
        offline: "�ѹ���",
        doing: "������",
        admin: "��������"
    };

    language.load = {
        loadPage: "���ڼ���ҳ��",
        loadWorkflow: "��������",
        loadForm: "���ر�",
        workflowInfo: "���ڼ���������Ϣ",
        loading: "���ڼ�����",
        finish: "�������",
        fail: "������",
        paramError: "ҳ���������ȷ",
        unknownError: "δ֪�Ĵ���"
    };

    language.error = {
        error: "����",
        parameter: "ҳ���������ȷ",
        unknown: "δ֪�Ĵ���",
        lackOfPara: "ȱ�ٲ���",
        occur: "��������",
        showDetail: "�����ʾ�������ϸ��Ϣ",
        detail: "��ϸ��Ϣ��"
    };

    language.tip = {
        noMoreTip: "������ʾ",
        recoverTips: "�ָ���ʾ",
        recovered: "�ѻָ�������ʾ�����´δ�ҳ��ʱ����ʾ������ʾ��Ϣ"
    };

    language.login = {
        needReLogin: "�ܱ�Ǹ�����ı��ε�¼�Ự�Ѿ����ڡ�",
        reLogin: "���µ�¼",
        clickHere: "���",
        retry: "�����´��ڵ�¼����¼���ٵ�����ȷ����ť���³�����ǰ�Ĳ�����",
        entrust: "�ܱ�Ǹ�����ı��ε�¼�ѳ�ʱ����ˢ��ҳ�档"
    };

    language.todo = {
        doStep: "�����ڿ��Լ�������",
        doSteps: "�����ڿ��Լ�����������ѡ��",
        doing: "���ڰ���",
        user: "����û�",
        doJob: "����"
    };

    language.start = {
        viewInstance: "ֱ�Ӳ鿴"
    };

    language.save = {
        tip: "��������ǰ��д�����ݣ������\n���ٴδӴ����д򿪼����༭",
        saving: "����ݸ�",
        wait: "����Ϊ������ݸ壬���Ե�...",
        success: "�ݸ屣��ɹ�",
        scrollTip: "��ݸ�",
        adminModifyReason: "�������޸����ݵ�����",
        reasonRequired: "���������޸�����"
    };

    language.submit = {
        needParam: "ȱ�ٱ�Ҫ�Ĳ���",
        needAction: "�޿ɰ�����",
        prepare: "׼���ύ��,���Ժ�...",
        requestMsg: "�ύ��",
        submitting: "����Ϊ���ύ��,���Ժ�...",
        request: "׼���ύ��",
        scanBarcode: "��ɨ��������",
        inputBarcode: "������������",
        noAction: "�޿ɰ�����",
        inputRemark: "����д��ע��Ϣ",
        mustInputRemark: "��������д�˱�ע",
        mustInputRemark2: "�������뱸ע",
        clickComment: "�����������˵��������",
        linkComment: "��ע",
        orComment: "����ֱ��",
        makeRemark: "��ע",
        remarkInForm: "��������ݴ�",
        viewRemarks: "��鿴������ݴ�����ע",
        remarkDone: "������ע<div class='memo_count'><p>{0}</p></div>����",
        lastRemarkDiff: "��ע�⣬��{0}�ѱ�ϵͳ����(�������)",
        lastRemark: "�ϴ���д�ı�ע",
        nextSteps: "��ɱ����������̽�ת�����²���",
        executor: "������",
        choose: "-- ��ѡ�� --",
        allUser: "-- �����û� --",
        helper: {
            title: "������ָ���˲���İ����ˣ������ָ����\n������Ȩ�޵��û������ɰ���˲���",
            content: "������ָ���˲���İ����ˣ������ָ����������Ȩ�޵��û������ɰ���˲���",
            mustChoose: "������ָ���˲���İ�����",
            chooseBySystem: "ϵͳָ��",
            chooseOneBySystem: "ϵͳ���ָ��"
        },
        chooseStepExecutor: "��ѡ�����{0}������û�",
        success: "����ɹ�!",
        pleaseClick: "����",
        relative: "��Ӧ",
        continueTodo: "���������������������һ����������{0}",
        continueTodoList: "����Ȩ�������²��裬��ѡ�񲢵����һ������:",
        continueToDebug: "��������",
        openInNewWindow: "�����һ�������´����м���",
        canContinueTodo: "��Ҳ���Ե����һ������{0}",
        pleaseContinueTodo: "������һ������{0}",
        doStep: "����{0}",
        next: "��һ��",
        nextStep: "��һ��",
        parseDataError: "��Ǹ������������δ֪�쳣����ˢ�����Ի�����ϵͳ����Ա��ϵ��",
        jsonError: "JSON�����л�ʧ��",
        hasNotDo: {
            print: "�������δ��ӡ����",
            download: "�������δ���ع���",
            printOrDownload: "�������δ��ӡ�����ع���"
        },
        canDo: {
            print: "��������Դ�ӡ��",
            download: "������������ر����ݣ�",
            printOrDownload: "��������Դ�ӡ�����ر����ݣ�"
        },
        canClick: {
            print: "�ɵ�����桰��ӡ����ť����Ҳ���Խ����ڰ��´������ٴδ򿪴�ҳ���ظ���ӡ��",
            download: "�ɵ�����桰���ء���ť����Ҳ���Խ����ڰ��´������ٴδ򿪴�ҳ���ظ����ء�",
            printOrDownload: "����������Ӧ��ť����Ҳ���Խ����ڰ��´������ٴδ򿪴�ҳ���ظ���ӡ�����ء�"
        },
        closeAfterPrint: "���ӡ�����غ�ͨ��������Ĺرչ��ܹرձ�ҳ"
    };

    language.print = {
        printNow: "������ӡ",
        helper: "��������Դ�ӡ�������Ե������<span style='color:#4a4a4a'><i class='i-icon-print'></i></span>��ť����������������ӡ��",
        printAfterAction: "���ڰ�����ɺ��ٴ�ӡ",
        printAfterActionHelper: "��������Դ�ӡ�����ڰ�����ɺ��ٴ�ӡ",
        notSupport: "�����費֧�ִ�ӡ",
        support: "������ɴ�ӡ",
        fail: "���ش�ӡҳʧ��"
    };

    language.download = {
        downloadAfterAction: "������������أ����ڰ�����ɺ�������",
        pleaseDownloadAfterAction: "���ڰ�����ɺ�������",
        downloadPrintAfterAction: "��������Դ�ӡ���أ����ڰ�����ɺ��ٴ�ӡ������",
        support: "�����������",
        notSupport: "�����費֧������",
        choose: "��ѡ�����ط�ʽ",
        downloadDirectly: "����",
        start: "��ʼ����",
        confirmDownloadDirectly: "��ȷ��ֱ��������",
        downloadDirectlyTip: "ֱ�����ؿ��ܵ����������ݺͽ��治��������δ�Ե�ǰҵ�����κ��޸Ŀ�ѡ��ֱ�����ء�",
        saveBeforeDownload: "���沢����"
    };

    language.compare = {
        support: "������ɶԱ�����",
        notSupport: "�����費֧�����ݶԱ�",
        compare: "�Ƚ�",
        introduce: "��ѡ��Ƚ�����",
        requesting: "���ڻ�ȡ��ʷ����",
        requestHistory: "��ȡ��ʷ����",
        initData: "��ʼ����",
        compareType: {
            typeNew: "����",
            typeModify: "�б��",
            typeDelete: "�����",
            typeDeleteAll: "�˴�ɾ������������",
            typeDeleteRows: "�˴�ɾ����{0}������",
            typeNewRow: "����Ϊ��������",
            typeNewSection: "�˶�Ϊ��������",
            typeDetail: "��ϸ�����б��"
        },
        compareNow: "�����Ƚ�",
        compared: "�䶯֮������ʾ��ʾ��ǩ��",
        clickHereToRemove: "������",
        removeTips: "������ʾ",
        same: "δ�ҵ��κβ�֮ͬ��",
        previousValue: {
            previous: "ԭֵ:",
            empty: "ԭֵΪ��"
        },
        helperText: "ϵͳ��⵽����������������ڣ������Ե������<span style='color:#4a4a4a'><i class='i-icon-my-library-books'></i></span>��ť��������ʾ��֮ǰ���ݵĲ�֮ͬ�����������������Ƚϡ�"
    };

    language.admin = {
        exit: "�˳����ݹ���",
        manage: "���������",
        showRemark: "��ʾ���ݹ�����ʷ"
    };

    language.command = {
        helper: "�������ť�ύ",
        isDone: "�������Ѵ���,�������κβ���",
        noAction: "�������κβ���",
        admin: "�����ڹ�������",
        all: "���в���",
        cancel: "ȡ������"
    };

    language.kill = {
        message: "��ֹ��",
        blockMessage: "����Ϊ����ֹ,���Ժ�...",
        title: "��ֹ",
        confirmTitle: "ȷ����ֹ���η�����",
        success: "��ֹ�ɹ���",
        confirm: "��ֹ��ǰҵ����������",
        reason: "��������д��ֹ��ע������ֹԭ��",
        tip: "��ֹ�����̣�����������ǰҵ��",
        menuTip: "��ֹ������"
    };
    
    language.forward = {
        title: "ת��",
        forwardButton: "ת��",
        addForwardButton: "ͬʱת����",
        returnMessage: "��ת���˰�����֮�󷵻ر�����",
        chooseMessage: "��ѡ����Ҫת���Ĳ���"
    };

    language.withdraw = {
        message: "���ر�",
        blockMessage: "����Ϊ������,���Ժ�...",
        success: "���سɹ���",
        confirm: "ȷ��������һ���Ĳ�����\n���غ����������±༭��",
        title: "����",
        tip: "���ص���һ��,�����һ���İ������������ǳ��ص���������ڴ���ҳ�����ҵ�"
    };

    language.preview = {
        loadError: "������",
        starting: "����Ϊ������������,���Ժ�...",
        start: "����������",
        refused: "����ʱ�޷�����",
        startButtonText: "��ʼ����",
        department: "���ܲ��ţ�",
        contact: "��ϵ��ʽ��",
        rateCount: "{0}������",
        previous: "��һҳ",
        next: "��һҳ"
    };

    language.remarkHistory = {
        loading: "����Ϊ��������ʷ��Ϣ,���Ժ�...",
        request: "������ʷ��Ϣ",
        user: {
            you: "��",
            related: "����û�",
            system: "ϵͳ"
        },
        entrust: "ί��",
        debug: "����",
        action: {
            doing: "������д/����",
            youDoing: "������д/����",
            done: "��д/������",
            sub: "���ڰ���",
            doneSub: "������",
            admin: "���������ݹ���",
            kill: "��ֹ�˴˴η���",
            withdraw: "�����˳���",
            done2: "������",
            receiving: "���ڽ���"
        },
        showHide: "���չ��{0}��������ʷ",
        hideRemark: "(������)",
        createTime: "ָ��ʱ��",
        actionTime: "����ʱ��",
        snapshotTitle: "�鿴�û��ڱ��Ŀ���",
        showReview: "��ʾ{0}����ע",
        viewReviewLink: "�鿴{0}����ע",
        viewReviews: "�鿴��ע",
        viewCcLink: "��ʾ{0}��������",
        viewCcs: "��ʾ������",
        searchCc: "���ҳ�����",
        showAdmin: "��ʾ���ݹ�����ʷ",
        showAdminOrCc: "��ʾ���ݹ���ͳ�����ʷ",
        review: {
            next: "��һ��",
            previous: "��һ��",
            close: "����"
        },
        read: "���Ķ�",
        subHistory: {
            link: "��ʾ������",
            title: "������(��ˮ��:{0})"
        }
    };

    language.snapshot = {
        tip: "�����ڲ鿴{0}�����\"{1}\"���ڵı�����"
    };

    language.milestone = {
        doing: "�����ڰ���˲�",
        didAt: "�ò�������{0}",
        done: "�ò������",
        todo: "�ò��д�����"
    };

    language.debug = {
        tip: "�����ڵ���ģʽ�£�����������Դ���",
        helperText: "���򿪵���һ�����԰������ʵ�������Ĳ���������Ӱ����ʽ���������ݡ��ڵ��԰��У�����ͨ�����Ͻǵ�\"���԰�ť\"�鿴���������Ϣ���������Ӷ���ľ�����ʾ������ȷ�Ŀؼ����ֶ����á�"
    };

    language.entrust = {
        showWindow: "��ʾί�д���",
        tip: {
            entrust: "����ǰ������{0}����ݽ���ί�а���",
            startEntrust: "����ǰ������{0}����ݽ���ί�з���",
            debug: "����ǰ������{0}����ݽ��е��԰���",
            startDebug: "����ǰ������{0}����ݽ��е��Է���"
        },
        switchButton: "�л�",
        continueButton: "����",
        attention: "������ʷ�н���ʾ{0}�����˸�ҵ��������ʵ���{1}Ҳ�ᱻϵͳ��¼�������������",
        debugAttention: "������ʷ�н���ʾ{0}�����˸�ҵ�����ĵ�¼���{1}Ҳ�ᱻϵͳ��¼����������л����԰����ˡ�",
        startAttention: "������ʷ�н���ʾ{0}�����˸�ҵ��������ʵ���{1}Ҳ�ᱻϵͳ��¼�������������",
        abort: {
            entrust: "�˳�ί��",
            debug: "�˳�����"
        },
        close: "�ر�",
        support: "����֧��ί�а���",
        startSupport: "����֧��ί�з���",
        continueDo: "�������������ҵ��",
        startContinueDo: "�������������ҵ��",
        choose: "����ѡ��������ݰ���",
        startChoose: "����ѡ��������ݷ���",
        noUser: "û��ί������Ϣ����������������Լ�����ݰ���",
        specified: "ָ���˺�",
        chooseSpecifiedAccount: "������ָ���ʺ�",
        current: {
            debug: "��ǰ������",
            entrust: "��ǰί����",
            login: "��ǰ��¼��"
        },
        request: {
            entrust: {
                requesting: {
                    entrust: "��������ί�а���...",
                    debug: "����������԰���..."
                },
                request: {
                    entrust: "ί������",
                    debug: "��������"
                },
                fail: {
                    entrust: "ί�а�������ʧ��",
                    debug: "���԰�������ʧ��"
                }
            },
            abort: {
                requesting: {
                    entrust: "�����˳�ί��...",
                    debug: "�����˳�����..."
                },
                request: {
                    entrust: "�˳�ί��",
                    debug: "�˳�����"
                },
                fail: {
                    entrust: "�˳�ί������ʧ��",
                    debug: "�˳���������ʧ��"
                }
            }

        }
    };

    language.validation = {
        fail: "��֤ʧ��",
        ensure: "��ȷ����д������������ʽ��ȷ��",
        selfLoop: "�ֶ�{0}��parent���ô����Ի�������",
        detailError: "��ϸ��Ϣ�������޸�"
    };

    language.workflow = {
        workflowNo: "��ˮ��",
        department: "���ܲ���",
        contact: "��ϵ��ʽ",
        admin: "��������",
        printInvoice: "��ӡСƱ",
        backToTop: "�ص�����",
        entrust: "ί�а���",
        confirmEntrust: "��ȷ��Ҫ����ί��������",
        help: "��������",
        support: "��������",
        confirmFeedback: "��ȷ��Ҫ��������������"
    };

    language.control = {
        createError: "�ֶ�{0}�����ؼ�ʱ�������������������ͺ���Ⱦ�����Ƿ�ƥ�䣡"
    };

    language.anchor = {
        defaultText: "����",
        closeAfterAction: "������Ϻ�ر�",
        closeAfterActionDescription: "�����´����н�����ز���\n������Ϻ���رձ�����"
    };

    language.suggester = {
        moreItem: "�����������л�PageDown����ȡ����",
        moreUser: "���ҵ�{0}λ�û�,���������������С��Χ\n�����뺺��,ƴ��,�˺�,ѧ����,Ժϵ�ȶ�������ո�ָ�",
        emptyItem: "����ա�",
        emptyHint: "�����뺺�ֻ�ƴ��(֧��ƴ������ĸ)",
        emptyUser: "�����뺺��,ƴ��,�˺�,ѧ����,Ժϵ(��������ո�ָ�)",
        noData: "δ�ҵ���������������",
        inaccurateTotal: {
            hundredThousand: "����10��",
            tenThousand: "����1��",
            thousand: "����1ǧ"
        },
        noCode: "�ֶ�{0}�����ؼ�ʱ�������������Ƿ������˴����"
    };

    language.suggester2 = {
        moreUser: "���ҵ�{0}λ�û�,�������������(������ƴ����ѧ���š�Ժϵ��,�Կո�ָ�)",
        errorLoading: "�޷�������",
        tooLong: "��ɾ��{0}���ַ�",
        tooShort: "������������{0}���ַ�",
        loadMore: "�����������",
        maxSelect: "���ֻ��ѡ��{0}�����",
        noResult: "δ�ҵ����",
        emptyUser: "�����뺺��,ƴ��,�˺�,ѧ����,Ժϵ(��������ո�ָ�)",
        emptyHint: "�����뺺�ֻ�ƴ��(֧��ƴ������ĸ)",
        searching: "������...",
        inaccurateTotal: {
            hundredThousand: "����10��",
            tenThousand: "����1��",
            thousand: "����1ǧ"
        }
    };

    language.button = {
        defaultText: "��ť"
    };

    language.date = {
        validateMessage: "����ȷ��������",
        errorFormat: "{0}�ĸ�ʽ����ȷ������ȷ����"
    };

    language.time = {
        validateMessage: "����ȷ����ʱ��",
        done: "ȷ��"
    };

    language.edit = {
        validateIntegerMessage: "����ȷ��������",
        validateFloatMessage: "����ȷ������ֵ"
    };

    language.file = {
        uploading: "�����ϴ�{0},���Ժ�",
        uploadFail: "�ϴ��ļ�ʧ��,������ѡ���ļ��ϴ�",
        uploadSuccess: "�ϴ��ɹ�",
        suffix: "���ϴ���׺Ϊ{0}���ļ�",
        sizeLimit: "ѡ����ļ������ϴ��ļ���С����({0})",
        createAt: "������{0}",
        confirmDelete: "��ȷ��Ҫɾ�����ļ���?",
        oldIe: "����ʹ���ϰ汾ie������ǰ���ͼ���ϴ�",
        prepareSecureLink: "����Ϊ��������ȫ��������",
        secureLinkReady: "�Ѿ�Ϊ������һ���԰�ȫ���ӣ�",
        link: "���",
        download: "����",
        invalid: "({0}������Ч)",
        docEditRequestError: "����༭����ʧ�ܣ�����ϵ����Ա",
        menu: {
            download: "����",
            edit: "�༭",
            preview: "Ԥ��",
            remove: "ɾ��",
            open: "��"
        }
    };

    language.label = {
        timezone: "��ǰʱ��",
        xhtmlWarning: "��ǩ�ؼ�{0}��������Ϊxhtml�Ҿ��п�дȨ�ޣ����������ȫ����"
    };

    language.picture = {
        widthWarning: "��������ͼƬ�ؼ�({0})���Ϊ�ٷֱȿ�ȣ�������Ϊ�̶����ؿ��",
        upload: "����ϴ�ͼƬ",
        uploadFail: "�ϴ��ļ�ʧ��,������ѡ���ļ��ϴ�",
        uploadSuccess: "�ϴ��ɹ�",
        suffix: "���ϴ���׺Ϊ{0}���ļ�",
        sizeLimit: "ѡ���ͼƬ�����ϴ�ͼƬ��С����({0})",
        confirmDelete: "��ȷ��Ҫɾ����ͼƬ��?"
    };

    language.remark = {
        inputValue: "�������ı�����",
        maxLength: "��������{0}���ַ�"
    };

    language.review = {
        buttonTip: "�����Ե���˴������ע����ע����Ӱ����<br>��������ݣ������Ա������İ����˲鿴��",
        tip: "������ѡ���κα��ڸ��������������ע��Ϣ����ע����Ӱ������������ݣ������Ա������İ����˲鿴��",
        tipCount: "����ע<div class='memo_count'><p>{0}</p></div>��",
        cancel: "ȡ��",
        ok: "���",
        menu: {
            minimize: "����",
            maximize: "��ԭ",
            remove: "�Ƴ�"
        }
    };

    language.select = {
        choose: "-��ѡ��-"
    };

    language.checkList = {
        deprecated: "�벻Ҫ�����ʱ��ֵ"
    };

    language.text = {
        xhtmlWarning: "���ı��ؼ�{0}��������Ϊxhtml�Ҿ��п�дȨ�ޣ����������ȫ����",
        maxLength: "��������{0}���ַ�"
    };

    language.thing = {
        name: "����",
        pleaseInput: "��������Ʒ����",
        code: "���",
        notFound: "δ�ҵ���Ʒ�����Ϣ�����ֹ�����",
        scan: "ɨ��",
        clickToInput: "���������Ʒ����",
        print: "��ӡ��Ʒ",
        deleteConfirm: "��ȷ��Ҫɾ������Ʒ��?",
        check: {
            code: "������������",
            codeError: "�����Ŵ�������������",
            name: "����������"
        },
        printInvoice: "��ӡСƱ",
        nothingToPrint: "�޿ɴ�ӡ����Ʒ",
        choosePrint: "��ѡ����Ҫ��ӡ����Ʒ"
    };

    language.richtext = {
        image: {
            upload: "�ϴ�ͼƬ",
            uploadFail: "�ϴ�ͼƬʧ��,������ѡ���ļ��ϴ�",
            suffix: "���ϴ���׺Ϊ{0}��ͼƬ�ļ�",
            sizeLimit: "ѡ���ͼƬ������С����({0})"
        }
    };

    language.map = {
        selectCurrentPositionTitle: "������λ�ñ�ǩ����б���ѡ��",
        usePoint: "ʹ�ô�λ��",
        currentPosition: "��ǰѡ��λ�ã�{0}",
        navigation: "����",
        inputLabel: "������λ�ñ�ǩ",
        autoPosition: "�Զ���ȡ",
        noPosition: "��",
        deletePosition: "ɾ��",
        confirmDelete: "��ȷ��ɾ����ѡ���λ��\"{0}\"��",
        naviTip: "�����������ڳ���Ϊ�������Ѱ�װ�ĵ�ͼӦ��...",
        geolocation: {
            timeout: "��λ��ʱ�����������ѯ���Ƿ������ȡ����λ��ʱ��ʱѡ������",
            unknown: "��λ����δ֪λ��",
            unavailable: "�޷���ȡ��ǰλ��",
            denied: "�޶�λȨ�ޣ����������ѯ���Ƿ������ȡ����λ��ʱѡ����������Ѿ�ѡ���˽�ֹ��������վ��ȫ�����и�Ϊ����"
        }
    };

    language.priority = {
        current: "��ǰ���ȼ�Ϊ{0}",
        clickToChange: "��������ñ�ҵ�����ȼ�",
        level3: "��ͨ",
        level5: "��Ҫ",
        changeSuccessfully: "�޸����ȼ��ɹ�����ǰ���ȼ�Ϊ{0}",
        changeFailed: "�޸����ȼ�ʧ�ܣ�{0}"
    };

    language.popupMenu = {
        up: "����",
        down: "����",
        add: "����",
        deleteText: "ɾ��",
        noAction: "���κβ���",
        detail: "��ϸ",
        maxLimit: "�����������������������",
        minLimit: "�Ѵ���С������������ɾ��"
    };

    language.repeatAddLink = {
        addText: "����"
    };

    language.repeatControl = {
        settingError: "{0}���ô��������Ƿ�Ӧ�����ظ�������ظ���",
        fieldNotFound: "δ�ҵ��ֶ�{0}����Ϣ�������Ƿ���ȷ�ϴ���ͼ",
        detail: "��ϸ��Ϣ",
        shrink: "����",
        expand: "չ��",
        deleteRow: "����Ҫɾ���������ݣ��Ƿ������",
        deleteSection: "����Ҫɾ���ö����ݣ��Ƿ������"
    };

    language.candidates = {
        searching: "������...",
        error: "��ѯ���ݳ���",
        searchKeyword: "�������������˺�����",
        mailto: "�����ʼ���{0}",
        noResult: "δ�ҵ����"
    };

    language.dynamics = {
        error: {
            valueNotSet: "{0}�Ķ�̬{1}δ���ö�ֵ̬������"
        }
    };

    language.timezone = {
        "time": "ʱ��",
        "UTC-12:00": "�������ڱ������",
        "UTC-11:00": "Э������ʱ-11",
        "UTC-10:00": "������",
        "UTC-9:00": "����˹��",
        "UTC-8:00": "̫ƽ��",
        "UTC-7:00": "����ɣ��",
        "UTC-6:00": "ī�����",
        "UTC-5:00": "�����",
        "UTC-4:30": "������˹",
        "UTC-4:00": "���ζ�",
        "UTC-3:30": "Ŧ����",
        "UTC-3:00": "����ŵ˹����˹",
        "UTC-2:00": "Э������ʱ-02",
        "UTC-1:00": "��ý�Ⱥ��",
        "UTC": "�׶�",
        "UTC+1:00": "����",
        "UTC+2:00": "�ŵ�",
        "UTC+3:00": "Ī˹��",
        "UTC+3:30": "�º���",
        "UTC+4:00": "��������",
        "UTC+4:30": "������",
        "UTC+5:00": "��˹����",
        "UTC+5:30": "�µ���",
        "UTC+5:45": "�ӵ�����",
        "UTC+6:00": "�￨",
        "UTC+6:30": "����",
        "UTC+7:00": "����",
        "UTC+8:00": "����",
        "UTC+8:30": "ƽ��",
        "UTC+9:00": "����",
        "UTC+9:30": "��������",
        "UTC+10:00": "����˹��",
        "UTC+11:00": "������Ⱥ��",
        "UTC+12:00": "�¿���",
        "UTC+13:00": "��Ħ��Ⱥ��",
        "UTC+14:00": "ʥ����"
    };

    define("InfoPlus.Language", language);

})(window);

