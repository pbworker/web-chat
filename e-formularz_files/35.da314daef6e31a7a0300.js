(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{P9p4:function(e,t,o){"use strict";o.r(t),o.d(t,"KorespondencjaZSaduModule",(function(){return oe}));var n=o("2kYt"),a=o("Nug6"),i=o("MWQY"),c=o("ruxD"),s=o("8j5Y"),r=o("kuMc"),d=o("xVbo"),l=o("TLy2"),b=o("j2Dn"),p=o("s5pZ"),h=o("fYwT"),u=o("EM62"),m=o("oetf"),f=o("Ld6Z"),w=o("TUxC"),g=o("Jzyt");function j(e,t){1&e&&u.Ob(0,"ds-loader")}const y=function(){return{firstStep:559,secondStep:559}};function k(e,t){if(1&e){const e=u.Ub();u.Rb(0),u.Tb(1,"legend",14),u.Jc(2),u.dc(3,"transloco"),u.Sb(),u.Tb(4,"ds-panel",15),u.Tb(5,"ds-table",13),u.ac("tableAction",(function(t){return u.zc(e),u.cc(2).handleTableAction(t)}))("rowAction",(function(t){return u.zc(e),u.cc(2).handleRowAction(t)})),u.Sb(),u.Sb(),u.Qb()}if(2&e){const e=u.cc(2),t=u.xc(6);u.Ab(2),u.Kc(u.ec(3,7,"zalacznkiDoPisam")),u.Ab(2),u.jc("showHeader",!1),u.Ab(1),u.jc("sterownik",e.sterownikPlikow)("model",e.kolekcjaZalacznkow)("rozwijak",t)("responsivity",u.nc(9,y))("paginatorButtonsCount",3)}}function v(e,t){if(1&e){const e=u.Ub();u.Tb(0,"div",6),u.Tb(1,"div",7),u.Tb(2,"div",8),u.Tb(3,"div",9),u.Jc(4,"Rodzaj"),u.Sb(),u.Tb(5,"div",10),u.Jc(6),u.Sb(),u.Sb(),u.Tb(7,"div",8),u.Tb(8,"div",9),u.Jc(9,"Sygnatura"),u.Sb(),u.Tb(10,"div",10),u.Jc(11),u.Sb(),u.Sb(),u.Tb(12,"div",8),u.Tb(13,"div",9),u.Jc(14,"Numer KRS"),u.Sb(),u.Tb(15,"div",10),u.Jc(16),u.Sb(),u.Sb(),u.Sb(),u.Tb(17,"legend",11),u.Jc(18),u.dc(19,"transloco"),u.Sb(),u.Tb(20,"ds-panel",12),u.Tb(21,"ds-table",13),u.ac("tableAction",(function(t){return u.zc(e),u.cc().handleTableAction(t)}))("rowAction",(function(t){return u.zc(e),u.cc().handleRowAction(t)})),u.Sb(),u.Sb(),u.Hc(22,k,6,10,"ng-container",0),u.Sb()}if(2&e){const e=u.cc(),t=u.xc(6);u.Ab(6),u.Kc(null==e.model?null:e.model.rodzajPisma),u.Ab(5),u.Kc(null==e.model?null:e.model.sygnatura),u.Ab(5),u.Kc(null==e.model?null:e.model.nrKrs),u.Ab(2),u.Kc(u.ec(19,11,"pismoZSadu")),u.Ab(2),u.jc("showHeader",!1),u.Ab(1),u.jc("sterownik",e.sterownikPlikow)("model",e.kolekcjaPlikow)("rozwijak",t)("responsivity",u.nc(13,y))("paginatorButtonsCount",3),u.Ab(1),u.jc("ngIf",e.kolekcjaZalacznkow)}}const T=function(e){return{dataZlozenia:e}},S=function(){return{firstStep:508,secondStep:508}};function O(e,t){if(1&e){const e=u.Ub();u.Tb(0,"tr"),u.Tb(1,"td",16),u.Tb(2,"div"),u.Tb(3,"ds-panel"),u.Tb(4,"ds-panel-header",17),u.Jc(5),u.dc(6,"uppercase"),u.dc(7,"transloco"),u.Sb(),u.Tb(8,"ds-table",18),u.ac("tableAction",(function(t){return u.zc(e),u.cc().handleTableAction(t)}))("rowAction",(function(t){return u.zc(e),u.cc().handleRowAction(t)})),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Sb()}if(2&e){const e=t.$implicit,o=u.cc(),n=u.xc(8);u.Ab(1),u.Bb("colspan",4),u.Ab(4),u.Kc(u.ec(6,7,u.ec(7,9,"szczegolyPodpisow"))),u.Ab(3),u.jc("sterownik",o.sterownikPodpisow)("model",e.rowData.podpisy)("columnTemplates",u.oc(11,T,n))("responsivity",u.nc(13,S))("paginatorButtonsCount",3)}}function A(e,t){if(1&e&&(u.Tb(0,"div",19),u.Jc(1),u.dc(2,"transloco"),u.Sb(),u.Tb(3,"div",20),u.Jc(4),u.dc(5,"date"),u.Sb()),2&e){const e=t.$implicit,o=u.cc();u.Ab(1),u.Kc(u.ec(2,2,"dataZlozeniaPodpisu")),u.Ab(3),u.Kc(u.fc(5,4,e.dataZlozenia,o.formatDateZlozenia))}}const z=function(){return{width:"116px"}};let K=(()=>{class e{constructor(e,t,o,n){this.dialogRef=e,this.dialogConfig=t,this.ftService=o,this.eformService=n,this.handleTableAction=this.ftService.handleTableAction,this.handleRowAction=this.ftService.handleRowAction,this.kolekcjaPlikow=[],this.kolekcjaPodpisow=[],this.kolekcjaZalacznkow=[],this.loading=!0,this.formatDateZlozenia=p.a.FORMAT_DATE_HMS}ngOnInit(){this.data=this.dialogConfig.data,this.eformService.getCorrespondent(this.data.korespondencjaId).pipe(Object(c.a)(()=>{this.loading=!1,this.initSterowniki()})).subscribe(e=>{this.model=e,this.kolekcjaPlikow=[e],this.kolekcjaZalacznkow=e.listaZalacznikow})}initSterowniki(){this.sterownikPlikow={key:"crdId",columns:[{field:"nazwaPliku",header:"nazwaPliku",dataType:"string",sortable:!0},{field:"liczbaPodpisow",header:"podpisy",dataType:"string",width:"150ch",sortable:!0}],rowButtonActionWidth:"8ch",rowButtonAction:[{action:"download",severity:"link",tooltip:"pobierz",icon:"pi pi-download"}],placeholder:"-",rowExpansion:{dataKey:"crdId"}},this.sterownikPodpisow={key:"podpisal",columns:[{field:"podpisal",header:"osobaPodpisujaca",dataType:"string",sortable:!0},{field:"rodzaj",header:"rodzajPodpisu",dataType:"string",sortable:!0},{field:"dataZlozenia",header:"dataZlozeniaPodpisu",dataType:"string",sortable:!0}],placeholder:"-"}}onClose(){this.loading||this.dialogRef.close()}download(e){this.eformService.getCorrespondentDownload(this.data.korespondencjaId,e.crdId).subscribe(t=>{if(t){const o=window.URL.createObjectURL(t),n=document.createElement("a");n.href=o,n.download=e.nazwaPliku,n.click(),n.remove()}})}}return e.\u0275fac=function(t){return new(t||e)(u.Nb(b.d),u.Nb(b.b),u.Nb(m.a),u.Nb(f.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["app-podglad-korespondencji-dialog"]],decls:9,vars:9,consts:[[4,"ngIf"],["class","p-dialog-content","style","max-height: 800px",4,"ngIf"],[1,"p-footer","p-mt-3"],["severity","primary","type","submit",3,"disabled","label","onClick"],["kolekcjaPlikowPodpisy",""],["dataZlozenia",""],[1,"p-dialog-content",2,"max-height","800px"],[1,"key-value-group","p-mb-3"],[1,"key-value"],[1,"key"],[1,"value"],["id","pismoZSadu"],["aria-labelledby","pismoZSadu",1,"p-my-3",3,"showHeader"],[3,"sterownik","model","rozwijak","responsivity","paginatorButtonsCount","tableAction","rowAction"],["id","zalacznkiDoPisam"],["aria-labelledby","zalacznkiDoPisam",1,"p-mt-3",3,"showHeader"],[1,"td-details"],[2,"font-size","16px"],[3,"sterownik","model","columnTemplates","responsivity","paginatorButtonsCount","tableAction","rowAction"],[1,"ds-column-title"],[1,"ds-column-value"]],template:function(e,t){1&e&&(u.Hc(0,j,1,0,"ds-loader",0),u.Hc(1,v,23,14,"div",1),u.Tb(2,"div",2),u.Tb(3,"ds-button",3),u.ac("onClick",(function(){return t.onClose()})),u.dc(4,"transloco"),u.Sb(),u.Sb(),u.Hc(5,O,9,14,"ng-template",null,4,u.Ic),u.Hc(7,A,6,7,"ng-template",null,5,u.Ic)),2&e&&(u.jc("ngIf",t.loading),u.Ab(1),u.jc("ngIf",!t.loading),u.Ab(2),u.Ec(u.nc(8,z)),u.kc("label",u.ec(4,6,"zamknij")),u.jc("disabled",t.loading))},directives:[n.o,w.n,w.L,w.db,w.vb,w.Fb,w.eb],pipes:[g.e,n.y,n.e],styles:[".key-value-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.key-value-group[_ngcontent-%COMP%]   .key-value[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-bottom:1px solid #f0f0f0}.key-value-group[_ngcontent-%COMP%]   .key-value[_ngcontent-%COMP%]:first-child{border-top:1px solid #f0f0f0}.key-value-group[_ngcontent-%COMP%]   .key-value[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%], .key-value-group[_ngcontent-%COMP%]   .key-value[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{padding:8px 16px;font-size:13px;line-height:16px;letter-spacing:.1px}.key-value-group[_ngcontent-%COMP%]   .key-value[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%]{background:#f5f5f5;font-style:normal;font-weight:600;color:#0d0d0d;width:205px}.key-value-group[_ngcontent-%COMP%]   .key-value[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#333}ds-table[_ngcontent-%COMP%]    >div>p-table  >.p-datatable{padding:0}legend[_ngcontent-%COMP%]{font-weight:700}.td-details[_ngcontent-%COMP%]{background-color:#f5faff;border:1px solid #b5e5fc!important;border-radius:2px;padding:.5rem!important}"]}),e})();var C=o("5ADc"),P=o("nIj0"),D=o("slvA"),M=o("atEQ"),F=o("8WQN"),x=o("GZ7z");function L(e,t){if(1&e&&(u.Rb(0),u.Tb(1,"div",11),u.Ob(2,"ds-input",12),u.dc(3,"transloco"),u.Sb(),u.Tb(4,"div",11),u.Ob(5,"ds-input",13),u.dc(6,"transloco"),u.Sb(),u.Tb(7,"div",14),u.Ob(8,"ds-calendar",15),u.dc(9,"transloco"),u.Sb(),u.Tb(10,"div",14),u.Ob(11,"ds-calendar",16),u.dc(12,"transloco"),u.Sb(),u.Tb(13,"div"),u.Tb(14,"div",17),u.Ob(15,"ds-input",18),u.dc(16,"transloco"),u.Sb(),u.Tb(17,"div",14),u.Ob(18,"ds-calendar",19),u.dc(19,"transloco"),u.Sb(),u.Tb(20,"div",14),u.Ob(21,"ds-calendar",20),u.dc(22,"transloco"),u.Sb(),u.Sb(),u.Qb()),2&e){const e=u.cc().closed,t=u.cc();u.Ab(2),u.kc("label",u.ec(3,24,"wnioskiLista.rodzaj")),u.jc("showClear",!1),u.Ab(3),u.kc("label",u.ec(6,26,"wnioskiLista.numerKrs")),u.jc("showClear",!1),u.Ab(3),u.jc("dateFormat",t.dsDateFormat)("label",u.ec(9,28,"wnioskiLista.dataDoreczeniaOd"))("showOtherMonths",!1)("selectOtherMonths",!1),u.Ab(3),u.jc("dateFormat",t.dsDateFormat)("label",u.ec(12,30,"wnioskiLista.dataDoreczeniaDo"))("showOtherMonths",!1)("selectOtherMonths",!1),u.Ab(2),u.Cb(e?"p-col-12 p-grid responsive":"display-none"),u.Ab(2),u.kc("label",u.ec(16,32,"wnioskiLista.sygnatura")),u.jc("showClear",!1),u.Ab(3),u.jc("dateFormat",t.dsDateFormat)("label",u.ec(19,34,"wnioskiLista.dataUznaniaOd"))("showOtherMonths",!1)("selectOtherMonths",!1),u.Ab(3),u.jc("dateFormat",t.dsDateFormat)("label",u.ec(22,36,"wnioskiLista.dataUznaniaDo"))("showOtherMonths",!1)("selectOtherMonths",!1)}}function N(e,t){if(1&e&&(u.Rb(0),u.Tb(1,"div",11),u.Ob(2,"ds-input",12),u.dc(3,"transloco"),u.Sb(),u.Tb(4,"div",11),u.Ob(5,"ds-input",13),u.dc(6,"transloco"),u.Sb(),u.Tb(7,"div",14),u.Ob(8,"ds-calendar",21),u.dc(9,"transloco"),u.Sb(),u.Tb(10,"div",14),u.Ob(11,"ds-calendar",22),u.dc(12,"transloco"),u.Sb(),u.Tb(13,"div"),u.Tb(14,"div",11),u.Ob(15,"ds-input",18),u.dc(16,"transloco"),u.Sb(),u.Tb(17,"div",14),u.Ob(18,"ds-calendar",15),u.dc(19,"transloco"),u.Sb(),u.Tb(20,"div",14),u.Ob(21,"ds-calendar",16),u.dc(22,"transloco"),u.Sb(),u.Tb(23,"div",14),u.Ob(24,"ds-calendar",19),u.dc(25,"transloco"),u.Sb(),u.Tb(26,"div",14),u.Ob(27,"ds-calendar",20),u.dc(28,"transloco"),u.Sb(),u.Sb(),u.Qb()),2&e){const e=u.cc().closed,t=u.cc();u.Ab(2),u.kc("label",u.ec(3,32,"wnioskiLista.rodzaj")),u.jc("showClear",!1),u.Ab(3),u.kc("label",u.ec(6,34,"wnioskiLista.numerKrs")),u.jc("showClear",!1),u.Ab(3),u.jc("dateFormat",t.dsDateFormat)("label",u.ec(9,36,"wnioskiLista.dataPrzyjeciaKorespondencjiOd"))("showOtherMonths",!1)("selectOtherMonths",!1),u.Ab(3),u.jc("dateFormat",t.dsDateFormat)("label",u.ec(12,38,"wnioskiLista.dataPrzyjeciaKorespondencjiDo"))("showOtherMonths",!1)("selectOtherMonths",!1),u.Ab(2),u.Cb(e?"p-col-12 p-grid responsive":"display-none"),u.Ab(2),u.kc("label",u.ec(16,40,"wnioskiLista.sygnatura")),u.jc("showClear",!1),u.Ab(3),u.jc("dateFormat",t.dsDateFormat)("label",u.ec(19,42,"wnioskiLista.dataDoreczeniaOd"))("showOtherMonths",!1)("selectOtherMonths",!1),u.Ab(3),u.jc("dateFormat",t.dsDateFormat)("label",u.ec(22,44,"wnioskiLista.dataDoreczeniaDo"))("showOtherMonths",!1)("selectOtherMonths",!1),u.Ab(3),u.jc("dateFormat",t.dsDateFormat)("label",u.ec(25,46,"wnioskiLista.dataUznaniaOd"))("showOtherMonths",!1)("selectOtherMonths",!1),u.Ab(3),u.jc("dateFormat",t.dsDateFormat)("label",u.ec(28,48,"wnioskiLista.dataUznaniaDo"))("showOtherMonths",!1)("selectOtherMonths",!1)}}function R(e,t){if(1&e&&(u.Tb(0,"div",0),u.Hc(1,L,23,38,"ng-container",10),u.Hc(2,N,29,50,"ng-container",10),u.Sb()),2&e){const e=u.cc();u.Ab(1),u.jc("ngIf",e.typKorespondencji===e.typKorespondencjiEnum.NOWA),u.Ab(1),u.jc("ngIf",e.typKorespondencji===e.typKorespondencjiEnum.CALA)}}function _(e,t){if(1&e&&(u.Tb(0,"div",23),u.Jc(1),u.dc(2,"transloco"),u.Sb(),u.Tb(3,"div",24),u.Jc(4),u.dc(5,"date"),u.Sb()),2&e){const e=t.$implicit,o=u.cc();u.Ab(1),u.Kc(u.ec(2,2,"korespondencja.dataDoreczenia")),u.Ab(3),u.Kc(u.fc(5,4,e.dataOdbioruKorespondencji?e.dataOdbioruKorespondencji:e.dataPrzyjeciaKorespondencji,o.formatDateList))}}function I(e,t){if(1&e&&(u.Tb(0,"div",23),u.Jc(1),u.dc(2,"transloco"),u.Sb(),u.Tb(3,"div",24),u.Jc(4),u.dc(5,"date"),u.Sb()),2&e){const e=t.$implicit,o=u.cc();u.Ab(1),u.Kc(u.ec(2,2,"korespondencja.dataZamieszczenia")),u.Ab(3),u.Kc(u.fc(5,4,e.dataPrzyjeciaKorespondencji,o.formatDateList))}}function Z(e,t){if(1&e&&(u.Tb(0,"div",23),u.Jc(1),u.dc(2,"transloco"),u.Sb(),u.Tb(3,"div",24),u.Jc(4),u.dc(5,"date"),u.Sb()),2&e){const e=t.$implicit,o=u.cc();u.Ab(1),u.Kc(u.ec(2,2,"korespondencja.dataDoreczenia")),u.Ab(3),u.Kc(u.fc(5,4,e.dataOdbioruKorespondencji,o.formatDateList))}}function H(e,t){if(1&e&&(u.Tb(0,"div",23),u.Jc(1),u.dc(2,"transloco"),u.Sb(),u.Tb(3,"div",24),u.Jc(4),u.dc(5,"date"),u.Sb()),2&e){const e=t.$implicit,o=u.cc();u.Ab(1),u.Kc(u.ec(2,2,"korespondencja.dataUznania")),u.Ab(3),u.Kc(u.fc(5,4,e.dataAutoOdbioruKorespondencji,o.formatDate))}}const E=function(){return{firstStep:799,secondStep:799}},J=function(e,t,o){return{dataPrzyjeciaKorespondencji:e,dataOdbioruKorespondencji:t,dataAutoOdbioruKorespondencji:o}},U=function(e,t){return{dataPrzyjeciaKorespondencji:e,dataAutoOdbioruKorespondencji:t}};var W=function(e){return e[e.NOWA=1]="NOWA",e[e.CALA=2]="CALA",e}({});let B=(()=>{class e extends C.a{constructor(e,t,o,n,a,i,c){super(i,c),this.ftService=e,this.fb=t,this.dialogService=o,this.eformService=n,this.korespondencjaZSaduService=a,this.loading=!1,this.typKorespondencjiEnum=W,this.model=[],this.modelFiltered=[],this.handleTableAction=this.ftService.handleTableAction,this.handleRowAction=this.ftService.handleRowAction,this.dsDateFormat=p.a.DS_CALENDAR_FORMAT_DATE,this.formatDate=p.a.FORMAT_DATE,this.formatDateList=p.a.FORMAT_DATE_HMS}set collection(e){e&&e!==this.model&&(this.model=e,this.form&&this.applyFilters())}ngOnInit(){this.initSterowniki(),this.initForm(),this.czyWersjaRobocza=!1}initSterowniki(){const e=[{field:"rodzajPisma",header:"rodzaj",dataType:"string",sortable:!0},{field:"sygnatura",header:"sygnatura",dataType:"string",sortable:!0},{field:"nrKrs",header:"wnioskiLista.numerKRS",dataType:"string",sortable:!0}];this.typKorespondencji==W.NOWA?(e.push({field:"dataPrzyjeciaKorespondencji",header:"korespondencja.dataDoreczenia",dataType:"string",sortable:!0}),e.push({field:"dataAutoOdbioruKorespondencji",header:"korespondencja.dataUznania",dataType:"string",sortable:!0})):this.typKorespondencji==W.CALA&&(e.push({field:"dataPrzyjeciaKorespondencji",header:"korespondencja.dataZamieszczenia",dataType:"string"}),e.push({field:"dataOdbioruKorespondencji",header:"korespondencja.dataDoreczenia",dataType:"string"}),e.push({field:"dataAutoOdbioruKorespondencji",header:"korespondencja.dataUznania",dataType:"string"})),this.sterownik={key:"id",columns:e,placeholder:"-",paginator:{rowsPerPageOptions:[5,10,20],rows:5},rowButtonActionHeader:"Dzia\u0142ania"},this.sterownik.rowButtonActionWidth="16ch",this.sterownik.rowButtonAction=[{action:"preview",severity:"link",tooltip:"podejrzyj",icon:"pi pi-eye"}]}preview(e){!1===e.odczytano&&(this.eformService.confirmViewCorrespondent(e.id).subscribe(),this.setOdczytano(e),this.setOdczytanoTyp(e.id),this.typKorespondencji===W.NOWA&&this.korespondencjaZSaduService.zapiszNowaKorespondencje(this.model)),this.dialogService.open(K,{data:{korespondencjaId:e.id},header:"Dane korespondencji",width:"890px",baseZIndex:1e4})}setOdczytano(e){e.odczytano=!0,e.dsRowClassNames=""}setOdczytanoTyp(e){const t=this.typKorespondencji===W.NOWA?this.korespondencjaZSaduService.listaCalaKorespondencja:this.korespondencjaZSaduService.listaNowaKorespondencja,o=(t||[]).find(t=>t.id===e);o&&this.setOdczytano(o),this.typKorespondencji===W.CALA&&this.korespondencjaZSaduService.zapiszNowaKorespondencje(t)}applyFilters(){const{value:e}=this.form;this.modelFiltered=this.model.filter(t=>!(h.a.compareStrIgnoreCase(e.rodzajPisma,t.rodzajPisma)||h.a.compareStrIgnoreCase(e.sygnatura,t.sygnatura)||h.a.compareStrIgnoreCase(e.nrKrs,t.nrKrs)||h.a.compareDateFrom(e.dataDoreczeniaOd,t.dataPrzyjeciaKorespondencji)||h.a.compareDateTo(e.dataDoreczeniaDo,t.dataPrzyjeciaKorespondencji)||h.a.compareDateFrom(e.dataUznaniaOd,t.dataOdbioruKorespondencji)||h.a.compareDateTo(e.dataUznaniaDo,t.dataOdbioruKorespondencji)))}initForm(){this.form=this.fb.group({rodzajPisma:[],sygnatura:[],nrKrs:[],dataDoreczeniaOd:[],dataDoreczeniaDo:[],dataUznaniaOd:[],dataUznaniaDo:[],dataPrzyjeciaKorespondencjiOd:[],dataPrzyjeciaKorespondencjiDo:[]})}}return e.\u0275fac=function(t){return new(t||e)(u.Nb(m.a),u.Nb(P.c),u.Nb(b.a),u.Nb(f.a),u.Nb(D.a),u.Nb(M.a),u.Nb(F.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["app-lista-korespondencja"]],inputs:{typKorespondencji:"typKorespondencji",collection:"collection",loading:"loading"},features:[u.zb([b.a]),u.xb],decls:15,vars:19,consts:[[1,"p-grid","responsive"],[1,"p-col-12"],[3,"formGroup","loading","filter","filterReset"],[1,"p-col-12","responsive-col","responsive-col-table"],[3,"showHeader"],[3,"sterownik","model","loading","responsivity","paginatorButtonsCount","columnTemplates","tableAction","rowAction"],["dataPrzyjeciaKorespondencjiNew",""],["dataPrzyjeciaKorespondencji",""],["dataOdbioruKorespondencji",""],["dataAutoOdbioruKorespondencji",""],[4,"ngIf"],[1,"p-col-4"],["formControlName","rodzajPisma","isCustomValidatorRun","false",3,"label","showClear"],["formControlName","nrKrs","isCustomValidatorRun","false",3,"label","showClear"],[1,"p-col-2"],["formControlName","dataDoreczeniaOd","dataType","string","iconRight","pi-calendar",3,"dateFormat","label","showOtherMonths","selectOtherMonths"],["formControlName","dataDoreczeniaDo","dataType","string","iconRight","pi-calendar",3,"dateFormat","label","showOtherMonths","selectOtherMonths"],[1,"p-col-8"],["formControlName","sygnatura","isCustomValidatorRun","false",3,"label","showClear"],["formControlName","dataUznaniaOd","dataType","string","iconRight","pi-calendar",3,"dateFormat","label","showOtherMonths","selectOtherMonths"],["formControlName","dataUznaniaDo","dataType","string","iconRight","pi-calendar",3,"dateFormat","label","showOtherMonths","selectOtherMonths"],["formControlName","dataPrzyjeciaKorespondencjiOd","dataType","string","iconRight","pi-calendar",3,"dateFormat","label","showOtherMonths","selectOtherMonths"],["formControlName","dataPrzyjeciaKorespondencjiDo","dataType","string","iconRight","pi-calendar",3,"dateFormat","label","showOtherMonths","selectOtherMonths"],[1,"ds-column-title"],[1,"ds-column-value"]],template:function(e,t){if(1&e&&(u.Tb(0,"div",0),u.Tb(1,"div",1),u.Tb(2,"app-filtry",2),u.ac("filter",(function(){return t.applyFilters()}))("filterReset",(function(){return t.resetFilters()})),u.Hc(3,R,3,2,"ng-template"),u.Sb(),u.Sb(),u.Tb(4,"div",3),u.Tb(5,"ds-panel",4),u.Tb(6,"ds-table",5),u.ac("tableAction",(function(e){return t.handleTableAction(e)}))("rowAction",(function(e){return t.handleRowAction(e)})),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Hc(7,_,6,7,"ng-template",null,6,u.Ic),u.Hc(9,I,6,7,"ng-template",null,7,u.Ic),u.Hc(11,Z,6,7,"ng-template",null,8,u.Ic),u.Hc(13,H,6,7,"ng-template",null,9,u.Ic)),2&e){const e=u.xc(8),o=u.xc(10),n=u.xc(12),a=u.xc(14);u.Ab(1),u.Ec(t.showFilter?"display:block":"display:none"),u.Ab(1),u.jc("formGroup",t.form)("loading",t.loading),u.Ab(3),u.jc("showHeader",!1),u.Ab(1),u.jc("sterownik",t.sterownik)("model",t.modelFiltered)("loading",t.loading)("responsivity",u.nc(11,E))("paginatorButtonsCount",3)("columnTemplates",t.typKorespondencji===t.typKorespondencjiEnum.CALA?u.qc(12,J,o,n,a):u.pc(16,U,e,a))}},directives:[x.a,P.q,P.h,w.db,w.vb,w.Fb,n.o,w.y,P.p,P.f,w.p],pipes:[g.e,n.e],styles:["@media screen and (max-width:792px){.p-col-3[_ngcontent-%COMP%]{width:35%}.p-col-9[_ngcontent-%COMP%]{width:65%}ds-calendar[_ngcontent-%COMP%]{width:50%}}.responsive-col-table[_ngcontent-%COMP%]{flex:1}.responsive-col-filtry[_ngcontent-%COMP%]{min-width:278px}@media screen and (max-width:576px){.responsive[_ngcontent-%COMP%]{flex-direction:column-reverse}.responsive-col[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width:400px){ds-calendar[_ngcontent-%COMP%]  .p-datepicker{transform:scale(.8)}}@media screen and (max-width:611px) and (min-width:576px){ds-table[_ngcontent-%COMP%]  .ds-column-title{word-break:break-word}}"]}),e})();const $=["tv"];function Q(e,t){if(1&e){const e=u.Ub();u.Tb(0,"div",8),u.ac("click",(function(){u.zc(e);const o=t.$implicit;return u.cc(3).deleteFilter(o)})),u.Jc(1),u.dc(2,"transloco"),u.Ob(3,"i",9),u.Sb()}if(2&e){const e=t.$implicit;u.Ab(1),u.Lc(" ",u.ec(2,1,e.label)," ")}}function V(e,t){if(1&e&&(u.Rb(0),u.Hc(1,Q,4,3,"div",7),u.Qb()),2&e){const e=u.cc(2);u.Ab(1),u.jc("ngForOf",e.tags)}}function Y(e,t){if(1&e){const e=u.Ub();u.Tb(0,"div",4),u.Hc(1,V,2,1,"ng-container",5),u.Tb(2,"ds-button",6),u.ac("onClick",(function(){return u.zc(e),u.cc().showHideFilter()})),u.Sb(),u.Sb()}if(2&e){const e=u.cc();u.Ab(1),u.jc("ngIf",!e.showFilter),u.Ab(1),u.jc("label",e.showFilter?"Ukryj filtry":"Poka\u017c filtry")}}let q=(()=>{class e extends i.a{constructor(e,t,o){super(),this.eformService=e,this.korespondencjaZSaduService=t,this.refreshComponentService=o,this.tags=[],this.showFilter=!0,this.typKorespondencji=W,this.calaListaKorespondencji=[],this.nowaListaKorespondencji=[],this.loading=!0}ngOnInit(){this.initModel().subscribe(()=>this.initRefreshComponent())}initModel(){return this.loading=!0,this.eformService.getListCorrespondents({dataPrzyjeciaDo:this.korespondencjaZSaduService.dataNowejKorespondencji}).pipe(Object(c.a)(()=>this.loading=!1)).pipe(Object(s.a)(e=>{this.nowaListaKorespondencji=this.korespondencjaZSaduService.listaNowaKorespondencja.map(e=>this.highLightedRow(e)),this.korespondencjaZSaduService.listaCalaKorespondencja=e,this.calaListaKorespondencji=this.extractWithoutNew(e,this.korespondencjaZSaduService.listaNowaKorespondencja).map(e=>this.highLightedRow(e))}))}initRefreshComponent(){this.refreshComponentService.refresh$.pipe(Object(r.a)(this.destroy$)).pipe(Object(d.a)(e=>e===a.b.REFRESH_NEW_CORRESPONDENCE_COMPONENT)).pipe(Object(l.a)(()=>this.initModel())).subscribe()}highLightedRow(e){return e.dsRowClassNames=!0===e.odczytano?"":"ds-row-primary-text ds-row-primary-background",e}extractWithoutNew(e,t){return e}updateTags(e){this.tags=e}showHideFilter(){this.showFilter=!this.showFilter}changeTab(e){this.tags=[]}deleteFilter(e){this.deleteTag=e}}return e.\u0275fac=function(t){return new(t||e)(u.Nb(f.a),u.Nb(D.a),u.Nb(a.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["app-korespondencja-z-sadu"]],viewQuery:function(e,t){var o;1&e&&u.Dc($,!0),2&e&&u.wc(o=u.bc())&&(t.tabView=o.first)},inputs:{wylaczPanelFiltrow:"wylaczPanelFiltrow"},features:[u.xb],decls:16,vars:20,consts:[[3,"actionSection","actionSectionTemplate","onSelectedIndex"],["tv",""],[3,"loading","typKorespondencji","resetForm","collection","showFilterFunc","deleteTag","tagsEmit"],["actionSectionTempl",""],[1,"tag-container","p-d-flex","p-flex-row"],[4,"ngIf"],["severity","link",3,"label","onClick"],["class","tag",3,"click",4,"ngFor","ngForOf"],[1,"tag",3,"click"],[1,"pi","pi-times"]],template:function(e,t){if(1&e&&(u.Tb(0,"ds-tab-view",0,1),u.ac("onSelectedIndex",(function(e){return t.changeTab(e)})),u.Tb(2,"ds-tab-panel"),u.Tb(3,"ds-tab-label"),u.Jc(4),u.dc(5,"transloco"),u.Sb(),u.Tb(6,"ds-tab-body"),u.Tb(7,"app-lista-korespondencja",2),u.ac("tagsEmit",(function(e){return t.updateTags(e)})),u.Sb(),u.Sb(),u.Sb(),u.Tb(8,"ds-tab-panel"),u.Tb(9,"ds-tab-label"),u.Jc(10),u.dc(11,"transloco"),u.Sb(),u.Tb(12,"ds-tab-body"),u.Tb(13,"app-lista-korespondencja",2),u.ac("tagsEmit",(function(e){return t.updateTags(e)})),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Hc(14,Y,3,2,"ng-template",null,3,u.Ic)),2&e){const e=u.xc(1),o=u.xc(15);u.jc("actionSection",!0)("actionSectionTemplate",o),u.Ab(4),u.Kc(u.ec(5,16,"korespondencja.nowaKorespondencja")),u.Ab(3),u.jc("loading",t.loading)("typKorespondencji",t.typKorespondencji.NOWA)("resetForm",e.tabItems[0]==e.activeTab)("collection",t.nowaListaKorespondencji)("showFilterFunc",!t.showFilter&&e.tabItems[0]==e.activeTab)("deleteTag",t.deleteTag),u.Ab(3),u.Kc(u.ec(11,18,"korespondencja.calaKorespondencja")),u.Ab(3),u.jc("loading",t.loading)("typKorespondencji",t.typKorespondencji.CALA)("resetForm",e.tabItems[1]==e.activeTab)("collection",t.calaListaKorespondencji)("showFilterFunc",!t.showFilter&&e.tabItems[1]==e.activeTab)("deleteTag",t.deleteTag)}},directives:[w.tb,w.sb,w.rb,w.qb,B,n.o,w.n,n.n],pipes:[g.e],styles:[""]}),e})();var G=o("sEIs"),X=o("rvnD");let ee=(()=>{class e{}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(t){return new(t||e)},imports:[[n.c,b.c,P.u,g.d,w.wb,w.M,w.fb]]}),e})(),te=(()=>{class e{}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(t){return new(t||e)},imports:[[n.c,P.u,w.ub,w.wb,w.u,g.d,w.q,X.a,ee,w.fb]]}),e})(),oe=(()=>{class e{}return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(t){return new(t||e)},imports:[[G.i.forChild([{path:"",component:q}]),n.c,P.u,w.ib,w.ub,g.d,te,w.o]]}),e})()},fYwT:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o("s5pZ");class a{static compareStrIgnoreCase(e,t){return e&&!(null==t?void 0:t.toLowerCase().includes(e.toLowerCase()))}static compareDateFrom(e,t,o=n.a.FORMAT_DATE){return e&&!(n.a.formatDate(t,o)>=n.a.formatDate(e,o))}static compareDateTo(e,t,o=n.a.FORMAT_DATE){return e&&!(n.a.formatDate(t,o)<=n.a.formatDate(e,o))}}}}]);