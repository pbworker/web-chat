(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{CH8O:function(t,e,i){"use strict";i.r(e),i.d(e,"WnioskiModule",(function(){return wt}));var o=i("2kYt"),a=i("nIj0"),n=i("EM62"),s=function(t){return t.W_TRAKCIE="W trakcie",t.NOWY="Nowy formularz",t.WYSLANY="Formularz przetworzony",t}({}),c=i("8j5Y"),l=i("BwBJ"),r=i("ruxD"),d=i("TUxC"),b=i("wgY5"),p=i("yHYN"),u=i("s5pZ"),h=i("5ADc"),w=i("Ld6Z"),m=i("d7xp"),f=i("tOfI"),g=i("oetf"),y=i("sEIs"),z=i("Jzyt"),k=i("ARIb"),S=i("IbOl"),T=i("du/a"),v=i("atEQ"),j=i("8WQN"),O=i("Pw6G"),C=i("Qrsi"),A=i("/ICw"),F=i("aMpM"),L=i("GZ7z");const P=["tabView"];function M(t,e){1&t&&n.Pb(0)}const R=function(){return[]},W=function(t,e,i,o,a,n){return{status:t,nazwaLubFirma:e,jestPodpis:i,jestOplacony:o,actions:a,sygnatura:n}},x=function(){return{firstStep:400,secondStep:994}};function D(t,e){if(1&t){const t=n.Ub();n.Tb(0,"ds-tab-panel"),n.Tb(1,"ds-tab-label"),n.Jc(2),n.dc(3,"transloco"),n.Sb(),n.Tb(4,"ds-tab-body"),n.Tb(5,"div",3),n.Tb(6,"div",4),n.Hc(7,M,1,0,"ng-container",5),n.Sb(),n.Tb(8,"div",6),n.Tb(9,"p-panel",7),n.Tb(10,"ds-table",8),n.ac("tableAction",(function(e){return n.zc(t),n.cc().handleTableAction(e)}))("rowAction",(function(e){return n.zc(t),n.cc().handleRowAction(e)})),n.Sb(),n.Tb(11,"ds-button",9),n.ac("onClick",(function(){return n.zc(t),n.cc().navigateToUrl("/search")})),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb()}if(2&t){const t=n.cc(),e=n.xc(44),i=n.xc(40),o=n.xc(21),a=n.xc(29),s=n.xc(23),c=n.xc(27),l=n.xc(35),r=n.xc(31);n.Ab(2),n.Kc(n.ec(3,13,"wnioski.robocze")),n.Ab(4),n.Ec(t.showFilter?"display:block":"display:none"),n.Ab(1),n.jc("ngTemplateOutlet",t.czyPismo?e:i),n.Ab(2),n.jc("showHeader",!1),n.Ab(1),n.jc("sterownik",t.roboczeSterownik)("model",t.roboczeFiltered||n.nc(15,R))("columnTemplates",n.tc(16,W,o,a,s,c,l,r))("loading",t.loading)("responsivity",n.nc(23,x))("paginatorButtonsCount",3),n.Ab(1),n.jc("ngClass","p-ml-3")("label",t.czyPismo?"Nowe pismo":"Nowy wniosek")}}function N(t,e){1&t&&n.Pb(0)}function I(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div",29),n.ac("click",(function(){n.zc(t);const i=e.$implicit;return n.cc(3).deleteFilter(i)})),n.Jc(1),n.dc(2,"transloco"),n.Ob(3,"i",30),n.Sb()}if(2&t){const t=e.$implicit;n.Ab(1),n.Lc(" ",n.ec(2,1,t.label)," ")}}function H(t,e){if(1&t&&(n.Rb(0),n.Hc(1,I,4,3,"div",28),n.Qb()),2&t){const t=n.cc(2);n.Ab(1),n.jc("ngForOf",t.tags)}}function V(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div",26),n.Hc(1,H,2,1,"ng-container",2),n.Tb(2,"ds-button",27),n.ac("onClick",(function(){return n.zc(t),n.cc().showHideFilter()})),n.Sb(),n.Sb()}if(2&t){const t=n.cc();n.Ab(1),n.jc("ngIf",!t.showFilter),n.Ab(1),n.jc("label",t.showFilter?"Ukryj filtry":"Poka\u017c filtry")}}function $(t,e){1&t&&(n.Tb(0,"div",31),n.Jc(1),n.dc(2,"transloco"),n.Sb(),n.Tb(3,"div",32),n.Tb(4,"ds-status",33),n.Jc(5),n.dc(6,"transloco"),n.Sb(),n.Sb()),2&t&&(n.Ab(1),n.Kc(n.ec(2,3,"wnioskiLista.status")),n.Ab(3),n.jc("severity","warning"),n.Ab(1),n.Lc(" ",n.ec(6,5,"wnioski.statusRoboczy")," "))}function U(t,e){1&t&&(n.Tb(0,"ds-status",33),n.Jc(1," Podpisano "),n.Sb()),2&t&&n.jc("severity","success")}function Z(t,e){1&t&&(n.Tb(0,"ds-status",33),n.Jc(1," Oczekuj\u0105cy "),n.Sb()),2&t&&n.jc("severity","warning")}function _(t,e){if(1&t&&(n.Tb(0,"div",31),n.Jc(1),n.dc(2,"transloco"),n.Sb(),n.Tb(3,"div",32),n.Hc(4,U,2,1,"ds-status",34),n.Hc(5,Z,2,1,"ds-status",34),n.Sb()),2&t){const t=e.$implicit;n.Ab(1),n.Kc(n.ec(2,3,"wnioskiLista.statusPodpisu")),n.Ab(3),n.jc("ngIf",t.jestPodpis&&!t.jestPodpisUdostepnienie),n.Ab(1),n.jc("ngIf",t.jestPodpisUdostepnienie)}}function K(t,e){if(1&t&&(n.Ob(0,"i",37),n.dc(1,"date")),2&t){const t=n.cc().$implicit;n.lc("dsTooltip","Ponowna wysy\u0142ka: ",n.fc(1,1,t.dataPonownegoWyslania,"yyyy-MM-dd HH:mm:ss"),"")}}function Y(t,e){if(1&t&&(n.Ob(0,"span",35),n.dc(1,"date"),n.Hc(2,K,2,4,"i",36)),2&t){const t=e.$implicit;n.jc("innerText",n.fc(1,2,t.dataWyslania,"yyyy-MM-dd")),n.Ab(2),n.jc("ngIf",t.dataPonownegoWyslania)}}function J(t,e){1&t&&(n.Tb(0,"ds-status",33),n.Jc(1," Op\u0142acono "),n.Sb()),2&t&&n.jc("severity","success")}function E(t,e){if(1&t&&(n.Tb(0,"div",31),n.Jc(1),n.dc(2,"transloco"),n.Sb(),n.Tb(3,"div",32),n.Hc(4,J,2,1,"ds-status",34),n.Sb()),2&t){const t=e.$implicit;n.Ab(1),n.Kc(n.ec(2,2,"wnioskiLista.statusOplaty")),n.Ab(3),n.jc("ngIf",t.jestOplacony)}}function B(t,e){if(1&t&&(n.Tb(0,"div",31),n.Jc(1),n.dc(2,"transloco"),n.Sb(),n.Tb(3,"div",32),n.Tb(4,"div",38),n.Jc(5),n.Sb(),n.Sb()),2&t){const t=e.$implicit;n.Ab(1),n.Kc(n.ec(2,3,"wnioskiLista.nazwaLubFirma")),n.Ab(3),n.kc("pTooltip",t.nazwaLubFirma),n.Ab(1),n.Lc(" ",t.nazwaLubFirma,"")}}function G(t,e){if(1&t&&(n.Tb(0,"span",39),n.Jc(1),n.Sb()),2&t){const t=e.$implicit;n.Ab(1),n.Kc((null==t?null:t.sygnatura)||"-")}}function Q(t,e){if(1&t&&(n.Tb(0,"span",39),n.Jc(1),n.Sb()),2&t){const t=e.$implicit;n.Ab(1),n.Kc((null==t?null:t.sygnaturaOpn)||"-")}}function q(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div",40),n.Tb(1,"ds-button",41),n.ac("onClick",(function(){n.zc(t);const i=e.$implicit;return n.cc().edit(i)})),n.Sb(),n.Tb(2,"ds-button",42),n.ac("onClick",(function(){n.zc(t);const i=e.$implicit;return n.cc().delete(i)})),n.Sb(),n.Tb(3,"ds-button",43),n.ac("onClick",(function(){n.zc(t);const i=e.$implicit;return n.cc().edit(i)})),n.Sb(),n.Tb(4,"ds-button",43),n.ac("onClick",(function(){n.zc(t);const i=e.$implicit;return n.cc().delete(i)})),n.Sb(),n.Sb()}2&t&&(n.Ab(1),n.jc("pTooltip","Edytuj"),n.Ab(1),n.jc("pTooltip","Usu\u0144"),n.Ab(1),n.jc("label","Edytuj"),n.Ab(1),n.jc("label","Usu\u0144"))}function X(t,e){if(1&t){const t=n.Ub();n.Tb(0,"ds-button",49),n.ac("onClick",(function(){n.zc(t);const e=n.cc().$implicit;return n.cc().previewBae(e)})),n.Sb()}2&t&&n.jc("pTooltip","Poka\u017c o\u015bwiadczenie BAE")}function tt(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div",40),n.Tb(1,"ds-button",44),n.ac("onClick",(function(){n.zc(t);const i=e.$implicit;return n.cc().preview(i)})),n.Sb(),n.Hc(2,X,1,1,"ds-button",45),n.Tb(3,"ds-button",46),n.ac("onClick",(function(){n.zc(t);const i=e.$implicit;return n.cc().download(i)})),n.Sb(),n.Tb(4,"ds-button",47),n.ac("onClick",(function(){n.zc(t);const i=e.$implicit;return n.cc().previewZalaczniki(i)})),n.Sb(),n.Tb(5,"ds-button",43),n.ac("onClick",(function(){n.zc(t);const i=e.$implicit;return n.cc().preview(i)})),n.Sb(),n.Tb(6,"ds-button",48),n.ac("onClick",(function(){n.zc(t);const i=e.$implicit;return n.cc().download(i)})),n.Sb(),n.Tb(7,"ds-button",48),n.ac("onClick",(function(){n.zc(t);const i=e.$implicit;return n.cc().previewZalaczniki(i)})),n.Sb(),n.Sb()}if(2&t){const t=e.$implicit,i=n.cc();n.Ab(1),n.jc("pTooltip","Poka\u017c wniosek"),n.Ab(1),n.jc("ngIf","Formularz przetworzony"===t.statusOswiadczenieBae),n.Ab(1),n.jc("disabled",!t.sygnatura&&!t.sygnaturaOpn)("pTooltip",i.czyPismo?"Pobierz tre\u015b\u0107 pisma":"Pobierz tre\u015b\u0107 wniosku"),n.Ab(1),n.jc("disabled",0==t.liczbaZalacznikow)("pTooltip","Poka\u017c za\u0142\u0105czniki"),n.Ab(1),n.jc("label","Poka\u017c wniosek"),n.Ab(1),n.jc("disabled",!t.sygnatura&&!t.sygnaturaOpn)("label",i.czyPismo?"Pobierz tre\u015b\u0107 pisma":"Pobierz tre\u015b\u0107 wniosku"),n.Ab(1),n.jc("disabled",0==t.liczbaZalacznikow)("label","Poka\u017c za\u0142\u0105czniki")}}function et(t,e){if(1&t){const t=n.Ub();n.Tb(0,"sirsim-overlay",50),n.ac("hide",(function(){return n.zc(t),n.cc().showZalaczniki=!1}))("alternate",(function(){return n.zc(t),n.cc().showZalaczniki=!1})),n.Tb(1,"div",51),n.Ob(2,"form-ekrs-rej-psa-attachments",52),n.Sb(),n.Sb()}if(2&t){const t=n.cc();n.jc("formGroup",t.form)("center",!1)("margin",!0)("paddingLeft",!0)("showOk",!1)("overflowAuto",!1),n.Ab(1),n.jc("formGroup",t.formZalaczniki),n.Ab(1),n.jc("readonly",!0)("formularzId",t.formularzId)}}function it(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div",3),n.Tb(1,"div",54),n.Tb(2,"ds-autocomplete",55),n.ac("completeMethod",(function(e){n.zc(t);const i=n.cc(2);return i.rodzajeSuggestions=i.filter(e,i.rodzajeLista)}))("onSelect",(function(e){return n.zc(t),n.cc(2).setFormValue(e)}))("ngModelChange",(function(e){return n.zc(t),n.cc(2).isEmpty(e)})),n.dc(3,"transloco"),n.dc(4,"transloco"),n.Sb(),n.Sb(),n.Tb(5,"div",56),n.Ob(6,"ds-input",57),n.dc(7,"transloco"),n.Sb(),n.Tb(8,"div",54),n.Ob(9,"ds-input",58),n.dc(10,"transloco"),n.Sb(),n.Tb(11,"div",56),n.Ob(12,"ds-calendar",59),n.dc(13,"transloco"),n.Sb(),n.Tb(14,"div",56),n.Ob(15,"ds-calendar",60),n.dc(16,"transloco"),n.Sb(),n.Sb(),n.Tb(17,"div"),n.Tb(18,"div",54),n.Ob(19,"ds-input",61),n.dc(20,"transloco"),n.Sb(),n.Tb(21,"div",54),n.Ob(22,"ds-input",62),n.dc(23,"transloco"),n.Sb(),n.Tb(24,"div",54),n.Ob(25,"ds-dropdown",63),n.dc(26,"transloco"),n.Sb(),n.Tb(27,"div",54),n.Ob(28,"ds-dropdown",64),n.dc(29,"transloco"),n.Sb(),n.Sb()}if(2&t){const t=e.closed,i=n.cc(2);n.Ab(2),n.jc("placeholder",n.ec(3,32,"wybierz"))("label",n.ec(4,34,"wnioskiLista.rodzajFormularza"))("dropdown",!0)("forceSelection",!1)("suggestions",i.rodzajeSuggestions)("capitalize",!0),n.Ab(4),n.kc("label",n.ec(7,36,"wnioskiLista.numerKRS")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(10,38,"wnioskiLista.nazwaLubFirma")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(13,40,"wnioskiLista.dateFrom")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(3),n.kc("label",n.ec(16,42,"wnioskiLista.dateTo")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(2),n.Cb(t?"p-grid":"display-none"),n.Ab(2),n.kc("label",n.ec(20,44,"wnioskiLista.nazwaWlasna")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(23,46,"wnioskiLista.id")),n.jc("showClear",!1),n.Ab(3),n.jc("optionLabel","label")("valueField","value")("options",i.jestPodpisStatus)("showClear",!1)("label",n.ec(26,48,"wnioskiLista.jestPodpis")),n.Ab(3),n.jc("optionLabel","label")("valueField","value")("options",i.jestOplaconyStatus)("showClear",!1)("label",n.ec(29,50,"wnioskiLista.jestOplacony"))}}function ot(t,e){if(1&t){const t=n.Ub();n.Tb(0,"app-filtry",53),n.ac("filter",(function(){return n.zc(t),n.cc().applyFilters()}))("filterReset",(function(){return n.zc(t),n.cc().resetFilters()})),n.Hc(1,it,30,52,"ng-template"),n.Sb()}if(2&t){const t=n.cc();n.jc("formGroup",t.formRobocze)("loading",t.loading)}}function at(t,e){if(1&t){const t=n.Ub();n.Tb(0,"div",3),n.Tb(1,"div",54),n.Tb(2,"ds-autocomplete",55),n.ac("completeMethod",(function(e){n.zc(t);const i=n.cc(2);return i.rodzajeSuggestions=i.filter(e,i.rodzajeLista)}))("onSelect",(function(e){return n.zc(t),n.cc(2).setFormValue(e)}))("ngModelChange",(function(e){return n.zc(t),n.cc(2).isEmpty(e)})),n.dc(3,"transloco"),n.dc(4,"transloco"),n.Sb(),n.Sb(),n.Tb(5,"div",56),n.Ob(6,"ds-input",57),n.dc(7,"transloco"),n.Sb(),n.Tb(8,"div",54),n.Ob(9,"ds-input",58),n.dc(10,"transloco"),n.Sb(),n.Tb(11,"div",56),n.Ob(12,"ds-calendar",65),n.dc(13,"transloco"),n.Sb(),n.Tb(14,"div",56),n.Ob(15,"ds-calendar",66),n.dc(16,"transloco"),n.Sb(),n.Sb(),n.Tb(17,"div"),n.Tb(18,"div",67),n.Ob(19,"ds-input",61),n.dc(20,"transloco"),n.Sb(),n.Tb(21,"div",67),n.Ob(22,"ds-input",62),n.dc(23,"transloco"),n.Sb(),n.Tb(24,"div",67),n.Ob(25,"ds-input",68),n.dc(26,"transloco"),n.Sb(),n.Tb(27,"div",67),n.Ob(28,"ds-input",69),n.dc(29,"transloco"),n.Sb(),n.Tb(30,"div",56),n.Ob(31,"ds-calendar",70),n.dc(32,"transloco"),n.Sb(),n.Tb(33,"div",56),n.Ob(34,"ds-calendar",71),n.dc(35,"transloco"),n.Sb(),n.Tb(36,"div",56),n.Ob(37,"ds-dropdown",63),n.dc(38,"transloco"),n.Sb(),n.Tb(39,"div",56),n.Ob(40,"ds-dropdown",64),n.dc(41,"transloco"),n.Sb(),n.Sb()}if(2&t){const t=e.closed,i=n.cc(2);n.Ab(2),n.jc("placeholder",n.ec(3,42,"wybierz"))("label",n.ec(4,44,"wnioskiLista.rodzajFormularza"))("dropdown",!0)("forceSelection",!1)("suggestions",i.rodzajeSuggestions)("capitalize",!0),n.Ab(4),n.kc("label",n.ec(7,46,"wnioskiLista.numerKRS")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(10,48,"wnioskiLista.nazwaLubFirma")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(13,50,"wnioskiLista.wyslaneDateFrom")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(3),n.kc("label",n.ec(16,52,"wnioskiLista.wyslaneDateTo")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(2),n.Cb(t?"p-grid":"display-none"),n.Ab(2),n.kc("label",n.ec(20,54,"wnioskiLista.nazwaWlasna")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(23,56,"wnioskiLista.id")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(26,58,"wnioskiLista.sygnatura")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(29,60,"wnioskiLista.nrWniosku")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(32,62,"wnioskiLista.wplyneloDateFrom")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(3),n.kc("label",n.ec(35,64,"wnioskiLista.wplyneloDateTo")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(3),n.jc("optionLabel","label")("valueField","value")("options",i.jestPodpisStatus)("showClear",!1)("label",n.ec(38,66,"wnioskiLista.jestPodpis")),n.Ab(3),n.jc("optionLabel","label")("valueField","value")("options",i.jestOplaconyStatus)("showClear",!1)("label",n.ec(41,68,"wnioskiLista.jestOplacony"))}}function nt(t,e){if(1&t){const t=n.Ub();n.Tb(0,"app-filtry",53),n.ac("filter",(function(){return n.zc(t),n.cc().applyFilters()}))("filterReset",(function(){return n.zc(t),n.cc().resetFilters()})),n.Hc(1,at,42,70,"ng-template"),n.Sb()}if(2&t){const t=n.cc();n.jc("formGroup",t.form)("loading",t.loading)}}function st(t,e){if(1&t&&(n.Tb(0,"div",3),n.Tb(1,"div",67),n.Ob(2,"ds-input",57),n.dc(3,"transloco"),n.Sb(),n.Tb(4,"div",67),n.Ob(5,"ds-input",58),n.dc(6,"transloco"),n.Sb(),n.Tb(7,"div",56),n.Ob(8,"ds-calendar",72),n.dc(9,"transloco"),n.Sb(),n.Tb(10,"div",56),n.Ob(11,"ds-calendar",73),n.dc(12,"transloco"),n.Sb(),n.Sb(),n.Tb(13,"div"),n.Tb(14,"div",54),n.Ob(15,"ds-input",61),n.dc(16,"transloco"),n.Sb(),n.Tb(17,"div",54),n.Ob(18,"ds-input",62),n.dc(19,"transloco"),n.Sb(),n.Tb(20,"div",56),n.Ob(21,"ds-input",68),n.dc(22,"transloco"),n.Sb(),n.Tb(23,"div",56),n.Ob(24,"ds-dropdown",63),n.dc(25,"transloco"),n.Sb(),n.Tb(26,"div",56),n.Ob(27,"ds-dropdown",64),n.dc(28,"transloco"),n.Sb(),n.Sb()),2&t){const t=e.closed,i=n.cc(2);n.Ab(2),n.kc("label",n.ec(3,28,"wnioskiLista.numerKRS")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(6,30,"wnioskiLista.nazwaLubFirma")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(9,32,"wnioskiLista.dataUtworzeniaOd")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(3),n.kc("label",n.ec(12,34,"wnioskiLista.dataUtworzeniaDo")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(2),n.Cb(t?"p-grid":"display-none"),n.Ab(2),n.kc("label",n.ec(16,36,"wnioskiLista.nazwaWlasna")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(19,38,"wnioskiLista.id")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(22,40,"wnioskiLista.sygnatura")),n.jc("showClear",!1),n.Ab(3),n.jc("optionLabel","label")("valueField","value")("options",i.jestPodpisStatus)("showClear",!1)("label",n.ec(25,42,"wnioskiLista.jestPodpis")),n.Ab(3),n.jc("optionLabel","label")("valueField","value")("options",i.jestOplaconyStatus)("showClear",!1)("label",n.ec(28,44,"wnioskiLista.jestOplacony"))}}function ct(t,e){if(1&t){const t=n.Ub();n.Tb(0,"app-filtry",53),n.ac("filter",(function(){return n.zc(t),n.cc().applyFilters()}))("filterReset",(function(){return n.zc(t),n.cc().resetFilters()})),n.Hc(1,st,29,46,"ng-template"),n.Sb()}if(2&t){const t=n.cc();n.jc("formGroup",t.formRobocze)("loading",t.loading)}}function lt(t,e){if(1&t&&(n.Tb(0,"div",3),n.Tb(1,"div",54),n.Ob(2,"ds-input",69),n.dc(3,"transloco"),n.Sb(),n.Tb(4,"div",56),n.Ob(5,"ds-input",57),n.dc(6,"transloco"),n.Sb(),n.Tb(7,"div",54),n.Ob(8,"ds-input",58),n.dc(9,"transloco"),n.Sb(),n.Tb(10,"div",56),n.Ob(11,"ds-calendar",65),n.dc(12,"transloco"),n.Sb(),n.Tb(13,"div",56),n.Ob(14,"ds-calendar",66),n.dc(15,"transloco"),n.Sb(),n.Sb(),n.Tb(16,"div"),n.Tb(17,"div",67),n.Ob(18,"ds-input",61),n.dc(19,"transloco"),n.Sb(),n.Tb(20,"div",67),n.Ob(21,"ds-input",62),n.dc(22,"transloco"),n.Sb(),n.Tb(23,"div",67),n.Ob(24,"ds-input",68),n.dc(25,"transloco"),n.Sb(),n.Tb(26,"div",67),n.Ob(27,"ds-calendar",74),n.dc(28,"transloco"),n.Sb(),n.Tb(29,"div",67),n.Ob(30,"ds-calendar",71),n.dc(31,"transloco"),n.Sb(),n.Tb(32,"div",56),n.Ob(33,"ds-dropdown",63),n.dc(34,"transloco"),n.Sb(),n.Tb(35,"div",56),n.Ob(36,"ds-dropdown",64),n.dc(37,"transloco"),n.Sb(),n.Sb()),2&t){const t=e.closed,i=n.cc(2);n.Ab(2),n.kc("label",n.ec(3,36,"wnioskiLista.sygnaturaOpn")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(6,38,"wnioskiLista.numerKRS")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(9,40,"wnioskiLista.nazwaLubFirma")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(12,42,"wnioskiLista.wyslaneDateFrom")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(3),n.kc("label",n.ec(15,44,"wnioskiLista.wyslaneDateTo")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(2),n.Cb(t?"p-grid":"display-none"),n.Ab(2),n.kc("label",n.ec(19,46,"wnioskiLista.nazwaWlasna")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(22,48,"wnioskiLista.id")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(25,50,"wnioskiLista.sygnatura")),n.jc("showClear",!1),n.Ab(3),n.kc("label",n.ec(28,52,"wnioskiLista.wplyneloDateFrom")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(3),n.kc("label",n.ec(31,54,"wnioskiLista.wplyneloDateTo")),n.jc("showOtherMonths",!1)("selectOtherMonths",!1),n.Ab(3),n.jc("optionLabel","label")("valueField","value")("options",i.jestPodpisStatus)("showClear",!1)("label",n.ec(34,56,"wnioskiLista.jestPodpis")),n.Ab(3),n.jc("optionLabel","label")("valueField","value")("options",i.jestOplaconyStatus)("showClear",!1)("label",n.ec(37,58,"wnioskiLista.jestOplacony"))}}function rt(t,e){if(1&t){const t=n.Ub();n.Tb(0,"app-filtry",53),n.ac("filter",(function(){return n.zc(t),n.cc().applyFilters()}))("filterReset",(function(){return n.zc(t),n.cc().resetFilters()})),n.Hc(1,lt,38,60,"ng-template"),n.Sb()}if(2&t){const t=n.cc();n.jc("formGroup",t.form)("loading",t.loading)}}const dt=function(t,e,i,o,a,n,s){return{jestPodpis:t,nazwaLubFirma:e,jestOplacony:i,actions:o,sygnatura:a,sygnaturaOpn:n,dataWyslania:s}};let bt=(()=>{class t extends h.a{constructor(t,e,i,o,n,s,c,l,r,d,b,u,h,w){var m;super(h,w),this.eformService=t,this.ekrsService=e,this.formBaeService=i,this.ftService=o,this.route=n,this.router=s,this.notificationService=c,this.translocoService=l,this.fb=r,this.fileService=d,this.zalacznikService=b,this.filtrService=u,this.handleTableAction=this.ftService.handleTableAction,this.handleRowAction=this.ftService.handleRowAction,this.showZalaczniki=!1,this.formZalaczniki=new a.g({}),this.naglowekZalaczniki="Lista za\u0142\u0105cznik\xf3w",this.rodzajWniosku=null===(m=this.route.snapshot.data)||void 0===m?void 0:m.rodzajWniosku,this.czyPismo=this.rodzajWniosku===p.a.pismo,this.tags=[],this.formZalaczniki.addControl("zalaczniki",this.fb.control([]))}ngOnInit(){this.initSterownikiRobocze(),this.initSterownikiWyslane(),this.initForms(),this.initForm(),this.initRodzaje(),this.pokazWersjeRobocze=1}setFormValue(t){const e=this.rodzaje.find(e=>e.nazwa===t);this.form.get("rodzajFormularza").setValue(e.skrotNazwy),this.formRobocze.get("rodzajFormularza").setValue(e.skrotNazwy),this.form.updateValueAndValidity(),this.formRobocze.updateValueAndValidity()}getForms(){return this.czyPismo?this.eformService.getFormPapers():this.eformService.getForms()}initForms(){this.loading=!0,this.getForms().pipe(Object(c.a)(t=>{const e=[],i=[];t.forEach(t=>{switch(t.dataZapisu=b(t.dataZapisu).format(u.a.FORMAT_DATE_YYYY_MM_DD),t.dataWplywu&&(t.dataWplywu=b(t.dataWplywu).format(u.a.FORMAT_DATE_YYYY_MM_DD)),t.dataWyslania&&(t.dataWyslania=b(t.dataWyslania).format(u.a.FORMAT_DATE_YYYY_MM_DD)),t.status){case s.W_TRAKCIE:e.push(t);break;case s.WYSLANY:i.push(t)}}),this.robocze=e,this.wyslane=i,this.applyFilters()})).pipe(Object(c.a)(()=>this.showSelectedTab()),Object(l.a)(100),Object(r.a)(()=>this.loading=!1)).subscribe()}initSterownikiRobocze(){this.roboczeSterownik={key:"id",columns:[{field:"nazwaWlasna",header:"nazwaWlasna",dataType:"string",sortable:!0},{field:"id",header:"id",dataType:"string",sortable:!0},this.czyPismo?{field:"sygnatura",header:"wnioskiLista.sygnatura",dataType:"string",sortable:!0}:{field:"rodzajFormularza",header:"wnioskiLista.rodzajFormularza",dataType:"string",sortable:!0},{field:"numerKRS",header:"wnioskiLista.numerKRS",dataType:"string",sortable:!0},{field:"nazwaLubFirma",header:"wnioskiLista.nazwaLubFirma",dataType:"string",sortable:!0},{field:"dataZapisu",header:"wnioskiLista.dataUtworzenia",dataType:"string",sortable:!0},{field:"jestPodpis",header:"wnioskiLista.statusPodpisu",dataType:"string",sortable:!0},{field:"jestOplacony",header:"wnioskiLista.statusOplaty",dataType:"string",sortable:!0},{field:"actions",header:"Dzia\u0142ania",dataType:"string",width:"96px",cssClass:"button-action-header"}],paginator:{rowsPerPageOptions:[5,10,20],rows:5}}}initSterownikiWyslane(){const t=[{field:"nazwaWlasna",header:"nazwaWlasna",dataType:"string",sortable:!0},{field:"id",header:"id",dataType:"string",sortable:!0},this.czyPismo?{field:"sygnatura",header:"wnioskiLista.sygnatura",dataType:"string",sortable:!0}:{field:"rodzajFormularza",header:"wnioskiLista.rodzajFormularza",dataType:"string",sortable:!0},{field:"numerKRS",header:"wnioskiLista.numerKRS",dataType:"string",sortable:!0},{field:"nazwaLubFirma",header:"wnioskiLista.nazwaLubFirma",dataType:"string",sortable:!0},{field:"dataWyslania",header:this.czyPismo?"wnioskiLista.dataWyslania":"wnioskiLista.dataWyslaniaWniosku",dataType:"string",sortable:!0},{field:"dataWplywu",header:this.czyPismo?"wnioskiLista.dataWplynelo":"wnioskiLista.dataWplyneloWniosek",dataType:"string",sortable:!0},{field:"jestPodpis",header:"wnioskiLista.statusPodpisu",dataType:"string",sortable:!0},{field:"jestOplacony",header:"wnioskiLista.statusOplaty",dataType:"string",sortable:!0}];this.czyPismo||(t.push({field:"sygnatura",header:"wnioskiLista.sygnatura",dataType:"string",sortable:!0}),t.push({field:"sygnaturaOpn",header:"wnioskiLista.nrWniosku",dataType:"string",sortable:!0})),this.czyPismo&&t.splice(2,0,{field:"sygnaturaOpn",header:"wnioskiLista.nrPisma",dataType:"string",sortable:!0}),t.push({field:"actions",header:"Dzia\u0142ania",dataType:"string",width:"155px",cssClass:"button-action-header"}),this.wyslaneSterownik={key:"id",columns:t,paginator:{rowsPerPageOptions:[5,10,20],rows:5}}}edit(t){const e=this.eformService.getRodzajWniosek(t.rodzajFormularza);this.router.navigate([`wniosek/${e}${t.podRodzajFormularza?t.podRodzajFormularza:""}/${t.id}`])}delete(t){this.openDialog=!0,this.dialogMessage=this.czyPismo?"formularz.usun.pismo":"formularz.usun.wniosek",t.jestOplacony||t.jestPodpis?t.jestOplacony&&t.jestPodpis?this.dialogMessage+=".wiadomoscPodpisanaIOplacona":t.jestOplacony?this.dialogMessage+=".wiadomoscOplacona":t.jestPodpis&&(this.dialogMessage+=".wiadomoscPodpisana"):this.dialogMessage+=".wiadomosc",this.selectedForm=t}preview(t){this.ekrsService.loading$.next(!0),this.eformService.view(t.id).pipe(Object(r.a)(()=>this.ekrsService.loading$.next(!1))).subscribe(t=>this.ekrsService.openNewTab(t))}previewBae(t){this.ekrsService.loading$.next(!0),this.formBaeService.view(t.id).pipe(Object(r.a)(()=>this.ekrsService.loading$.next(!1))).subscribe(t=>this.ekrsService.openNewTab(t))}download(t){this.ekrsService.loading$.next(!0),this.eformService.print(t.id).pipe(Object(r.a)(()=>this.ekrsService.loading$.next(!1))).subscribe(e=>{this.fileService.downloadToBrowser(e,`${t.rodzajFormularza}_${t.id}.pdf`,!1)})}confirmDialogDelete(t){t&&(this.ekrsService.loading$.next(!0),this.eformService.removeForm(this.selectedForm.id).pipe(Object(r.a)(()=>this.ekrsService.loading$.next(!1))).subscribe(()=>{this.robocze=this.robocze.filter(t=>t!==this.selectedForm),this.selectedForm=null,this.applyFilters(),this.notificationService.success(new d.Z({summary:this.translocoService.translate("sukces"),detail:this.translocoService.translate("formularz.usun.usuniety"),closable:!1,life:2e3}))},t=>{Object(n.W)()&&console.log(t),this.applyFilters(),this.notificationService.error(new d.Z({summary:this.translocoService.translate("blad"),detail:this.translocoService.translate("formularz.usun.nieUsuniety"),closable:!1,life:2e3}))})),this.openDialog=!1}initForm(){this.formRobocze=this.fb.group({nazwaWlasna:[""],id:[""],rodzajFormularza:[""],sygnatura:[""],numerKRS:[""],nazwaLubFirma:[""],dateFrom:[""],dateTo:[""],dataUtworzeniaOd:[""],dataUtworzeniaDo:[""],jestPodpis:[""],jestOplacony:[""]}),this.form=this.fb.group({nazwaWlasna:[""],id:[""],rodzajFormularza:[""],numerKRS:[""],nazwaLubFirma:[""],wyslaneDateFrom:[""],wyslaneDateTo:[""],wplyneloDateFrom:[""],wplyneloDateTo:[""],sygnatura:[""],sygnaturaOpn:[""],jestPodpis:[""],jestOplacony:[""]})}applyFilters(){this.roboczeFiltered=this.robocze.filter(t=>this.filterFormRobocze(t)),this.wyslaneFiltered=this.wyslane.filter(t=>this.filterForm(t))}filterFormComon(t,e){return!(this.filtrService.filtrCompareStrValue(e.nazwaWlasna,t.nazwaWlasna)||this.filtrService.filtrCompareStrValue(e.id,t.id)||this.filtrService.filtrCompareStrValue(e.rodzajFormularza,t.rodzajFormularza)||this.filtrService.filtrCompareStrValue(e.numerKRS,t.numerKRS)||this.filtrService.filtrCompareStrValue(e.nazwaLubFirma,t.nazwaLubFirma)||this.filtrService.filtrCompareStrValue(e.sygnatura,t.sygnatura)||this.filtrService.filtrCompareStrValue(e.sygnaturaOpn,t.sygnaturaOpn)||this.filtrService.filtrComparePodpisValue(e.jestPodpis,t)||this.filtrService.filtrCompareOplatyValue(e.jestOplacony,t))}filterFormRobocze(t){const{value:e}=this.formRobocze;return!!this.filterFormComon(t,e)&&!this.filtrService.filtrCompareDateValueFrom(e.dateFrom,t.dataZapisu)&&!this.filtrService.filtrCompareDateValueTo(e.dateTo,t.dataZapisu)}filterForm(t){const{value:e}=this.form;return!(!this.filterFormComon(t,e)||this.filtrService.filtrCompareDateValueFrom(e.wyslaneDateFrom,t.dataWyslania)||this.filtrService.filtrCompareDateValueTo(e.wyslaneDateTo,t.dataWyslania)||this.filtrService.filtrCompareDateValueFrom(e.wplyneloDateFrom,t.dataWplywu)||this.filtrService.filtrCompareDateValueTo(e.wplyneloDateTo,t.dataWplywu))}showSelectedTab(){var t;const e=null===(t=this.route.snapshot.paramMap.get("nazwaTab"))||void 0===t?void 0:t.toLocaleLowerCase();switch(this.tags=[],e){case"zlozone":case"wyslane":this.tabView.selectedIndex=1==this.pokazWersjeRobocze?1:0}}navigateToUrl(t){t&&this.router.navigate([t])}previewZalaczniki(t){this.formularzId=t.id,this.formZalaczniki.get("zalaczniki").setValue([]),this.getZalaczniki(this.formularzId).subscribe(()=>{this.showZalaczniki=!0})}getZalaczniki(t){return this.eformService.getAttachments(t).pipe(Object(c.a)(t=>this.zalacznikService.mapUstawZalacznikiFormularza(this.formZalaczniki.get("zalaczniki"),t)))}changeTab(t){this.czyWersjaRobocza=!t,this.form.reset(),this.formRobocze.reset(),this.tags=[]}}return t.\u0275fac=function(e){return new(e||t)(n.Nb(w.a),n.Nb(m.a),n.Nb(f.a),n.Nb(g.a),n.Nb(y.a),n.Nb(y.e),n.Nb(d.Eb),n.Nb(z.f),n.Nb(a.c),n.Nb(k.a),n.Nb(S.a),n.Nb(T.a),n.Nb(v.a),n.Nb(j.a))},t.\u0275cmp=n.Hb({type:t,selectors:[["app-wnioski"]],viewQuery:function(t,e){var i;1&t&&n.Dc(P,!0),2&t&&n.wc(i=n.bc())&&(e.tabView=i.first)},features:[n.xb],decls:47,vars:36,consts:[[3,"actionSection","actionSectionTemplate","onSelectedIndex"],["tabView",""],[4,"ngIf"],[1,"p-grid","responsive"],[1,"p-col-12"],[4,"ngTemplateOutlet"],[1,"p-col-12","responsive-col","responsive-col-table"],[3,"showHeader"],[3,"sterownik","model","columnTemplates","loading","responsivity","paginatorButtonsCount","tableAction","rowAction"],["icon","pi pi-file",3,"ngClass","label","onClick"],["icon","pi-info-circle","width","405px",3,"header","message","openDialog","closed","openDialogChange"],["actionSectionTempl",""],["statusTlp",""],["podpisTlp",""],["dataWyslaniaTlp",""],["oplataTlp",""],["nazwaTlp",""],["sygnaturaTlp",""],["sygnaturaOpnTlp",""],["actionsRoboczeTlp",""],["actionsWyslaneTlp",""],[3,"formGroup","center","margin","paddingLeft","showOk","overflowAuto","hide","alternate",4,"ngIf"],["filterTemplWnioskiRobocze",""],["filterTemplWnioskiWyslane",""],["filterTemplPismaRobocze",""],["filterTemplPismaWyslane",""],[1,"tag-container","p-d-flex","p-flex-row"],["severity","link",3,"label","onClick"],["class","tag",3,"click",4,"ngFor","ngForOf"],[1,"tag",3,"click"],[1,"pi","pi-times"],[1,"ds-column-title"],[1,"ds-column-value"],[3,"severity"],[3,"severity",4,"ngIf"],[3,"innerText"],["class","pi pi-info-circle icon p-ml-2","dsTooltip-theme","light",3,"dsTooltip",4,"ngIf"],["dsTooltip-theme","light",1,"pi","pi-info-circle","icon","p-ml-2",3,"dsTooltip"],["tooltipPosition","top",1,"text-truncate",3,"pTooltip"],[1,"p-align-center"],[1,"row-button-actions"],["severity","link","icon","pi pi-pencil","tooltipPosition","top",1,"ds-button-hidden",3,"pTooltip","onClick"],["severity","link","icon","pi pi-times","tooltipPosition","top",1,"ds-button-hidden",3,"pTooltip","onClick"],["severity","border",1,"ds-button-action",3,"label","onClick"],["severity","link","icon","pi pi-eye","tooltipPosition","top",1,"ds-button-hidden",3,"pTooltip","onClick"],["severity","link","class","ds-button-hidden","icon","pi pi-envelope","tooltipPosition","top",3,"pTooltip","onClick",4,"ngIf"],["severity","link","icon","pi pi-download","tooltipPosition","top",1,"ds-button-hidden",3,"disabled","pTooltip","onClick"],["severity","link","icon","pi pi-paperclip","tooltipPosition","top",1,"ds-button-hidden",3,"disabled","pTooltip","onClick"],["severity","border",1,"ds-button-action",3,"disabled","label","onClick"],["severity","link","icon","pi pi-envelope","tooltipPosition","top",1,"ds-button-hidden",3,"pTooltip","onClick"],[3,"formGroup","center","margin","paddingLeft","showOk","overflowAuto","hide","alternate"],[3,"formGroup"],[3,"readonly","formularzId"],[3,"formGroup","loading","filter","filterReset"],[1,"p-col-3"],["formControlName","rodzajTemp",3,"placeholder","label","dropdown","forceSelection","suggestions","capitalize","completeMethod","onSelect","ngModelChange"],[1,"p-col-2"],["formControlName","numerKRS","isCustomValidatorRun","false",3,"label","showClear"],["formControlName","nazwaLubFirma","isCustomValidatorRun","false",3,"label","showClear"],["formControlName","dateFrom","iconRight","pi-calendar",3,"label","showOtherMonths","selectOtherMonths"],["formControlName","dateTo","iconRight","pi-calendar",3,"label","showOtherMonths","selectOtherMonths"],["formControlName","nazwaWlasna","isCustomValidatorRun","false",3,"label","showClear"],["formControlName","id","isCustomValidatorRun","false",3,"label","showClear"],["formControlName","jestPodpis",3,"optionLabel","valueField","options","showClear","label"],["formControlName","jestOplacony",3,"optionLabel","valueField","options","showClear","label"],["formControlName","wyslaneDateFrom","iconRight","pi-calendar",3,"label","showOtherMonths","selectOtherMonths"],["formControlName","wyslaneDateTo","iconRight","pi-calendar",3,"label","showOtherMonths","selectOtherMonths"],[1,"p-col-4"],["formControlName","sygnatura","isCustomValidatorRun","false",3,"label","showClear"],["formControlName","sygnaturaOpn","isCustomValidatorRun","false",3,"label","showClear"],["formControlName","wplyneloDateFrom","iconRight","pi-calendar",1,"p-mr-2",3,"label","showOtherMonths","selectOtherMonths"],["formControlName","wplyneloDateTo","iconRight","pi-calendar",3,"label","showOtherMonths","selectOtherMonths"],["formControlName","dataUtworzeniaOd","iconRight","pi-calendar",3,"label","showOtherMonths","selectOtherMonths"],["formControlName","dataUtworzeniaDo","iconRight","pi-calendar",3,"label","showOtherMonths","selectOtherMonths"],["formControlName","wplyneloDateFrom","iconRight","pi-calendar",3,"label","showOtherMonths","selectOtherMonths"]],template:function(t,e){if(1&t&&(n.Tb(0,"ds-tab-view",0,1),n.ac("onSelectedIndex",(function(t){return e.changeTab(t)})),n.Hc(2,D,12,24,"ds-tab-panel",2),n.Tb(3,"ds-tab-panel"),n.Tb(4,"ds-tab-label"),n.Jc(5),n.dc(6,"transloco"),n.Sb(),n.Tb(7,"ds-tab-body"),n.Tb(8,"div",3),n.Tb(9,"div",4),n.Hc(10,N,1,0,"ng-container",5),n.Sb(),n.Tb(11,"div",6),n.Tb(12,"p-panel",7),n.Tb(13,"ds-table",8),n.ac("tableAction",(function(t){return e.handleTableAction(t)}))("rowAction",(function(t){return e.handleRowAction(t)})),n.Sb(),n.Tb(14,"ds-button",9),n.ac("onClick",(function(){return e.navigateToUrl("/search")})),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Sb(),n.Tb(15,"ds-confirm-dialog",10),n.ac("closed",(function(t){return e.confirmDialogDelete(t)}))("openDialogChange",(function(t){return e.openDialog=t})),n.dc(16,"transloco"),n.dc(17,"transloco"),n.Sb(),n.Hc(18,V,3,2,"ng-template",null,11,n.Ic),n.Hc(20,$,7,7,"ng-template",null,12,n.Ic),n.Hc(22,_,6,5,"ng-template",null,13,n.Ic),n.Hc(24,Y,3,5,"ng-template",null,14,n.Ic),n.Hc(26,E,5,4,"ng-template",null,15,n.Ic),n.Hc(28,B,6,5,"ng-template",null,16,n.Ic),n.Hc(30,G,2,1,"ng-template",null,17,n.Ic),n.Hc(32,Q,2,1,"ng-template",null,18,n.Ic),n.Hc(34,q,5,4,"ng-template",null,19,n.Ic),n.Hc(36,tt,8,11,"ng-template",null,20,n.Ic),n.Hc(38,et,3,9,"sirsim-overlay",21),n.Hc(39,ot,2,2,"ng-template",null,22,n.Ic),n.Hc(41,nt,2,2,"ng-template",null,23,n.Ic),n.Hc(43,ct,2,2,"ng-template",null,24,n.Ic),n.Hc(45,rt,2,2,"ng-template",null,25,n.Ic)),2&t){const t=n.xc(19),i=n.xc(23),o=n.xc(25),a=n.xc(27),s=n.xc(29),c=n.xc(31),l=n.xc(33),r=n.xc(37),d=n.xc(42),b=n.xc(46);n.jc("actionSection",!0)("actionSectionTemplate",t),n.Ab(2),n.jc("ngIf",1==e.pokazWersjeRobocze),n.Ab(3),n.Kc(n.ec(6,20,"wnioski.wyslane")),n.Ab(4),n.Ec(e.showFilter?"display:block":"display:none"),n.Ab(1),n.jc("ngTemplateOutlet",e.czyPismo?b:d),n.Ab(2),n.jc("showHeader",!1),n.Ab(1),n.jc("sterownik",e.wyslaneSterownik)("model",e.wyslaneFiltered||n.nc(26,R))("columnTemplates",n.uc(27,dt,i,s,a,r,c,l,o))("loading",e.loading)("responsivity",n.nc(35,x))("paginatorButtonsCount",3),n.Ab(1),n.jc("ngClass","p-ml-3")("label",e.czyPismo?"Nowe pismo":"Nowy wniosek"),n.Ab(1),n.jc("header",n.ec(16,22,"formularz.usun.tytul"))("message",n.ec(17,24,e.dialogMessage))("openDialog",e.openDialog),n.Ab(23),n.jc("ngIf",e.showZalaczniki)}},directives:[d.tb,o.o,d.sb,d.rb,d.qb,o.t,O.a,d.vb,d.Fb,d.n,o.m,d.t,o.n,d.ob,d.Ab,C.a,A.a,a.q,a.h,F.a,L.a,d.j,a.p,a.f,d.y,d.p,d.v],pipes:[z.e,o.e],styles:[".w-100[_ngcontent-%COMP%]{width:100%}  .utworz-btn .pi{font-size:16px}  .utworz-btn .p-button-label{font-weight:400}  .utworz-btn .p-button .p-button-icon-left{margin-right:0}.text-truncate[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media screen and (max-width:1056px){  app-filtry ds-dropdown p-dropdownitem .p-dropdown-item{min-width:100vw!important;white-space:normal!important;border-bottom:1px solid #d9d9d9!important}}@media screen and (max-width:792px){.p-col-3[_ngcontent-%COMP%]{width:35%}.p-col-9[_ngcontent-%COMP%]{width:65%}ds-calendar[_ngcontent-%COMP%]{width:50%}}.responsive-col-table[_ngcontent-%COMP%]{flex:1}.responsive-col-filtry[_ngcontent-%COMP%]{min-width:278px}@media screen and (max-width:576px){.responsive[_ngcontent-%COMP%]{flex-direction:column-reverse}.responsive-col[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width:400px){ds-calendar[_ngcontent-%COMP%]  .p-datepicker{transform:scale(.8)}}"]}),t})();var pt=i("rvnD"),ut=i("8APA"),ht=i("Mboa");let wt=(()=>{class t{}return t.\u0275mod=n.Lb({type:t}),t.\u0275inj=n.Kb({factory:function(e){return new(e||t)},imports:[[y.i.forChild([{path:"",component:bt}]),o.c,a.j,a.u,d.ub,d.wb,d.u,z.d,d.q,pt.a,d.pb,O.b,d.fb,ht.a,ut.a,d.Bb,d.k]]}),t})()}}]);