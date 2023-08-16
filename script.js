$(function () {
    //Global Vars
    const globalState = {
        apps: [
            {
                nombre: "Calendario",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fcalendario.png?alt=media&token=ae918b56-05c3-40a1-be64-1abcdb291c6f",
                type: "widgetFull",
                dinamico: true
            },
            {
                nombre: "Clima",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fclima.png?alt=media&token=02edb357-5775-4bf1-91c0-8e3f4908ddea",
                type: "app",
                dinamico: false
            },
            {
                nombre: "FaceTime",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Ffacetime.png?alt=media&token=4c66d073-d44e-4671-878e-6a8dd1dc7956",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Calendario",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fcalendario.png?alt=media&token=ae918b56-05c3-40a1-be64-1abcdb291c6f",
                type: "app",
                dinamico: true
            },
            {
                nombre: "Reloj",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Freloj.png?alt=media&token=d0d76558-79c6-4d21-8fe7-1d13de3a6a3e",
                type: "app",
                dinamico: true
            },
            {
                nombre: "Fotos",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Ffotos.png?alt=media&token=86d712fd-aab1-48a3-a6d0-f2b5b7f9a2ab",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Mapas",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fmaps.png?alt=media&token=309018b2-981a-44fd-bf97-8da765fef711",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Cámara",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fcamara.png?alt=media&token=bd81cee7-b011-4773-a053-a7cd935e34c3",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Recordatorios",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Frecordatorios.png?alt=media&token=2dbccbc3-374b-4eed-aa00-68db99217b7d",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Facebook",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Ffacebook.png?alt=media&token=f383d17e-32a7-49ef-8ebb-c723d556baa2",
                type: "app",
                notificaciones: 5,
                dinamico: false
            },
            {
                nombre: "Notas",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fnotas.png?alt=media&token=7a25ae1c-9010-48e4-81e8-e04a904024e9",
                type: "app",
                dinamico: false
            },
            {
                nombre: "App Store",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fappstore.png?alt=media&token=fe121a13-738f-43cd-936b-45ee7fb90cec",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Salud",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fsalud.png?alt=media&token=fee7445d-600c-4146-a590-1adc1d40001b",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Mensajes",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fmensajes.png?alt=media&token=e389ae38-bbeb-4ca9-aa46-4be8a5b6ca90",
                notificaciones: 123,
                type: "app",
                dinamico: false
            },
            {
                nombre: "Configuración",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fconfiguracion.png?alt=media&token=dfe6b4dd-0b50-4a78-8ef1-22728ed9840c",
                type: "app",
                notificaciones: 3,
                dinamico: false
            },
            {
                nombre: "BBVA",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fbbva.png?alt=media&token=840b9fa7-c765-4147-9138-8234eabfeb9e",
                type: "app",
                dinamico: false
            },
            {
                nombre: "WhatsApp",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fwhatsapp.png?alt=media&token=b3416a44-56fc-4991-a10b-e4a34944bf3c",
                type: "app",
                notificaciones: 22,
                dinamico: false
            },
            {
                nombre: "Calculadora",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fcalculadora.png?alt=media&token=0ce89e65-2e11-408c-8467-39637f0f19f8",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Twitter",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Ftwitter.png?alt=media&token=4360a8ea-afce-4f20-9057-bb2d4d5a9e41",
                type: "app",
                notificaciones: 2,
                dinamico: false
            },
            {
                nombre: "Messenger",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fmessenger.png?alt=media&token=5de5ef16-9bbf-4d79-b9d2-2e416106b21c",
                notificaciones: 3,
                type: "app",
                dinamico: false
            },
            {
                nombre: "Brújula",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fbrujula.png?alt=media&token=b4e4b1bb-1048-427d-836e-7d8b599d71e0",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Spotify",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fspotify.png?alt=media&token=f538e504-a8d7-4707-a308-8d4bc2b6f7f6",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Pinterest",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fpinterest.png?alt=media&token=4ad25035-0875-4000-ba39-5541234494c1",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Google Home",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fhome.png?alt=media&token=b6f455b0-7333-4c4a-b866-56e900beb41e",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Liverpool",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fliverpool.png?alt=media&token=42dfbbba-2149-4fe0-b503-419513082039",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Musica",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fmusica.png?alt=media&token=4ee18c65-11d5-46bb-8c4f-3536e49e33b0",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Netflix",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fnetflix.png?alt=media&token=88ddda95-de2f-44e6-b8a1-d5016f801e1c",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Notas de voz",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fnotasvoz.png?alt=media&token=dddc5de3-e91f-41da-8670-26ccddf54471",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Wallet",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fwallet.png?alt=media&token=96369c3a-d6f4-434f-9049-7b934c35af60",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Podcasts",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fpodcast.png?alt=media&token=166e653d-d060-46e6-9274-3a4d368d7ec4",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Archivos",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Farchivos.png?alt=media&token=b4ce6b1b-9877-41ca-a0f3-b05526591495",
                type: "app",
                dinamico: false
            },
            {
                nombre: "Contactos",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fcontactos.png?alt=media&token=fe1b3525-ef43-4a68-91ec-82b3f7b6b979",
                type: "app",
                dinamico: false
            },
            {
                nombre: "YouTube",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Fyoutube.png?alt=media&token=180f2d4c-32bf-4d40-855c-c70148d727e9",
                notificaciones: 1,
                type: "app",
                dinamico: false
            },
            {
                nombre: "Buscar iPhone",
                icono:
                    "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/ios14%2Ffindphone.png?alt=media&token=9b0106d2-b151-49af-a3d9-dfbd64bc4421",
                type: "app",
                dinamico: false
            }
        ],
        wrapperApps: {
            appsGrupo: 24,
            grupoActivo: 1,
            medida: $(".wrapperApps").outerWidth(true),
            transform: 0
        },
        dateTime: {
            meses: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
            ],
            dias: [
                "Domingo",
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado"
            ]
        },
        bateriaBaja: false,
        draggScreen: false
    };
    //EXtended Functions
    $.fn.extend({
        touchMov: function (config) {
            config = jQuery.extend(
                {
                    mov: "x",
                    movIzq: function () { },
                    movDer: function () { },
                    movUp: function () { },
                    movDown: function () { },
                    updateMovX: function () { },
                    updateMovY: function () { },
                    finishMov: function () { }
                },
                config
            );
            let el = this;
            let initCoords = { x: 0, y: 0 };
            let movCoords = { x: 0, y: 0 };
            let downCoords = { x: 0, y: 0 };
            el.mousedown(function (e) {
                initCoords = { x: e.pageX, y: e.pageY };
                downCoords = { x: movCoords.x, y: movCoords.y };
                el.mousemove(function (e2) {
                    globalState.draggScreen = true;
                    movCoords = { x: e2.pageX, y: e2.pageY };
                    if (config.mov === "x") {
                        config.updateMovX(e2, movCoords.x - initCoords.x);
                    } else if (config.mov === "y") {
                        config.updateMovY(e2, movCoords.y - initCoords.y);
                    }
                });
                el.mouseup(function (ex) {
                    if (config.mov === "x") {
                        if (movCoords.x - downCoords.x != 0) {
                            movCoords.x - initCoords.x > 0
                                ? config.movDer(ex)
                                : config.movIzq(ex);
                        }
                    } else if (config.mov === "y") {
                        if (movCoords.y - downCoords.y != 0) {
                            movCoords.y - initCoords.y > 0
                                ? config.movDown(ex)
                                : config.movUp(ex);
                        }
                    }
                    globalState.draggScreen = false;
                    config.finishMov(ex);
                    el.off("mousemove");
                    el.off("mouseup");
                    el.off("mouseleave");
                });
                el.mouseleave(function (a) {
                    if (config.mov === "x") {
                        if (movCoords.x - downCoords.x != 0) {
                            movCoords.x - initCoords.x > 0
                                ? config.movDer(a)
                                : config.movIzq(a);
                        }
                    } else if (config.mov === "y") {
                        if (movCoords.y - downCoords.y != 0) {
                            movCoords.y - initCoords.y > 0
                                ? config.movDown(a)
                                : config.movUp(a);
                        }
                    }
                    globalState.draggScreen = false;
                    config.finishMov(a);
                    el.off("mousemove");
                    el.off("mouseup");
                    el.off("mouseleave");
                });
            });
            return this;
        },
        calendario: function (config) {
            config = jQuery.extend(
                {
                    fecha: new Date(),
                    diaCompleto: false
                },
                config
            );
            let mes = globalState.dateTime.meses[config.fecha.getMonth()];
            let diasMes = new Date(
                config.fecha.getFullYear(),
                config.fecha.getMonth() + 1,
                0
            ).getDate();
            let hoy = config.fecha.getDate();
            let primerDia = new Date(
                config.fecha.getFullYear(),
                config.fecha.getMonth(),
                0
            ).getDay();
            this.append(`
  <div class="mes">
  <p class="mesName">${mes}</p>
  <div class="calendarioTabla">
  <div class="tablaHeader"></div>
  <div class="tablaContent"></div>
  </div>
  </div>`);
            let header = this.find(".mes .tablaHeader");
            let content = this.find(".mes .tablaContent");
            globalState.dateTime.dias.map((dia) =>
                header.append(
                    `<div class="diaName">${config.diaCompleto ? dia : dia.charAt(0)
                    }</div>`
                )
            );
            for (var k = 0; k <= primerDia; k++) {
                content.prepend("<div></div>");
            }
            for (let index = 1; index <= diasMes; index++) {
                content.append(
                    `<div class="diaNum ${hoy == index ? "activo" : ""}">${index}</div>`
                );
            }
            return this;
        },
        fechaIcono: function (config) {
            config = jQuery.extend(
                {
                    fecha: new Date(),
                    diaCompleto: false
                },
                config
            );
            let hoy = config.fecha.getDate();
            let dia = globalState.dateTime.dias[config.fecha.getDay()];
            this.append(
                `<div class="fechaWrapper"><p class="diaNom">${config.diaCompleto ? dia : dia.substring(0, 3)
                }</p><p class="diaNum">${hoy}</p></div>`
            );
            return this;
        },
        reloj: function () {
            let tiempo = new Date();
            let numeros = "";
            for (let index = 1; index <= 12; index++) {
                numeros += `<div class="numero" data-num="${index}"></div>`;
            }
            let transformHora = `calc(${(360 / 12 - 360) * tiempo.getHours()}deg + ${(30 / 60) * tiempo.getMinutes()
                }deg)`;
            let transformMinutos = `calc(6deg * ${tiempo.getMinutes()} + ${(6 / 60) * tiempo.getSeconds()
                }deg)`;
            let transformSegundos = `calc(6deg * ${tiempo.getSeconds()})`;
            this.append(
                `<div class="relojWrapper">
  <div class="reloj">
  <div class="numeros">${numeros}</div>
  <div class="manecillas">
  <div class="manecilla hora" style="transform: rotate(${transformHora});"><div class="barra"></div></div>
  <div class="manecilla minutos" style="transform: rotate(${transformMinutos});"><div class="barra"></div></div>
  <div class="manecilla segundos" style="transform: rotate(${transformSegundos});"><div class="barra"></div></div>
  </div>
  </div>
  </div>`
            );
            return this;
        },
        hora: function (config) {
            config = jQuery.extend(
                {
                    realtime: true
                },
                config
            );
            var hoy = new Date();
            var hora = hoy.getHours();
            if (hora < 10) hora = "0" + hora;
            var minutos = hoy.getMinutes();
            if (minutos < 10) minutos = "0" + minutos;
            if (config.realtime) {
                setInterval(() => {
                    hoy = new Date();
                    hora = hoy.getHours();
                    if (hora < 10) hora = "0" + hora;
                    minutos = hoy.getMinutes();
                    if (minutos < 10) minutos = "0" + minutos;
                    this.empty();
                    this.text(`${hora}:${minutos}`);
                }, 1000);
            }
            this.text(`${hora}:${minutos}`);
            return this;
        },
        fecha: function (config) {
            config = jQuery.extend(
                {
                    fecha: new Date(),
                    diaCompleto: true
                },
                config
            );
            let hoy = config.fecha.getDate();
            let dia = globalState.dateTime.dias[config.fecha.getDay()];
            let mes = globalState.dateTime.meses[config.fecha.getMonth()];
            this.text(
                `${config.diaCompleto ? dia : dia.substring(0, 3)}, ${hoy} de ${mes}`
            );
            return this;
        }
    });

    //Functions
    function sanearString(string) {
        return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    function pintarApps(apps, container, containerDots) {
        container.empty();
        containerDots.empty();
        globalState.wrapperApps.grupos = Math.ceil(
            apps.length / globalState.wrapperApps.appsGrupo
        );
        let appCount = 1;
        let html = "";
        apps.map((app, idArr) => {
            if (appCount == 1) html += '<div class="grupo">';
            let clases = "app";
            if (app.type == "widgetFull") clases = clases + " widgetFull";
            if (app.dinamico && app.type == "app")
                clases = `${clases} ${sanearString(app.nombre).toLowerCase()}Dinamico`;
            html += `<div class="${clases}" data-app="${app.type + sanearString(app.nombre)
                }" data-id="${idArr}">
  ${app.notificaciones
                    ? `<div class="notificacion">${app.notificaciones}</div>`
                    : ""
                }
  <div class="icono" style="${!app.dinamico
                    ? `background-image:url(${app.icono});`
                    : "background-color:#fff;"
                }"></div>
  <p class="nombre">${app.nombre}</p>
  </div>`;
            if (appCount == globalState.wrapperApps.appsGrupo) {
                html += "</div>";
                appCount = 1;
                return false;
            }
            app.type == "widgetFull" ? (appCount = appCount + 8) : appCount++;
        });
        if (globalState.wrapperApps.grupos > 1) {
            for (let index = 0; index < globalState.wrapperApps.grupos; index++) {
                containerDots.append(
                    `<div class="dot ${index == 0 ? "activo" : ""}"></div>`
                );
            }
        }
        container.append(html);
    }
    function alertaiOS(config) {
        if ($("#iOSAlert").length || $(".mainScreen").hasClass("bloqueado"))
            return false;
        config = jQuery.extend(
            {
                wrapper: $(".iphone .bordeNegro"),
                acciones: [
                    {
                        texto: "Aceptar",
                        warning: true
                        // callback: function(){console.log('callback aceptar')}
                    },
                    {
                        texto: "Cancelar",
                        warning: false
                        // callback: function () { console.log('callback cancelar') }
                    }
                ],
                closable: false,
                closeOnActions: true,
                encabezado: "Encabezado de la modal",
                mensaje: "Mensaje de la modal...",
                ocultar: false
            },
            config
        );
        var acciones = "";
        if (config.acciones) {
            $.each(config.acciones, function (k, accion) {
                acciones += `<div class="accion ${accion.warning ? "warning" : ""}">${accion.texto
                    }</div>`;
            });
        }
        if (config.ocultar) {
            $(document).off("click", "#iOSAlert .accion");
            $("#iOSAlert").fadeOut(function () {
                $(this).remove();
            });
            return false;
        }
        config.wrapper.append(`
  <div id="iOSAlert">
  <div class="contenedor hidAnim">
  <p class="encabezado">${config.encabezado}</p>
  <p class="mensaje">${config.mensaje}</p>
  <div class="acciones">${acciones}</div>
  </div>
  </div>
  `);
        if (config.closable) $("#iOSAlert").prepend('<div class="closable"></div>');
        $("#iOSAlert")
            .fadeIn("fast", function () {
                $(this).children(".contenedor").removeClass("hidAnim");
            })
            .css("display", "flex");
        $(document).on("click", "#iOSAlert .accion", function (e) {
            let accion = config.acciones[$(e.currentTarget).index()];
            if (accion.callback && typeof accion.callback == "function") {
                accion.callback(e);
            }
            if (config.closeOnActions) {
                $(document).off("click", "#iOSAlert .accion");
                $("#iOSAlert").fadeOut("fast", function () {
                    $(this).remove();
                });
            }
        });
        if (config.hasOwnProperty("autoclose")) {
            setTimeout(function () {
                $(document).off("click", "#iOSAlert .accion");
                $("#iOSAlert").fadeOut("fast", function () {
                    $(this).remove();
                });
            }, config.autoclose);
        }
        $(document).on("click", "#iOSAlert .closable", function () {
            $(document).off("click", "#iOSAlert .accion");
            $("#iOSAlert").fadeOut("fast", function () {
                $(this).remove();
            });
        });
    }
    function camara() {
        if (!$(".camaraApp").length) {
            $(".mainScreen").append(`
  <div class="camaraApp hidden">
  <div class="topBar">
  <div class="camIco flash">
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <path d="M41 6L13 34h14.187L23 58l27.998-29.999H37L41 6z"></path>
  </svg>
  </div>
  <div class="camIco chevronUp">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M20 40l11.994-14L44 40"></path>
  </svg>
  </div>
  <div class="camIco circles">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M45 32a17 17 0 0 1-9.8 5.7M22 34.8a17 17 0 1 1 26.2-8.5"></path>
  <path d="M15.8 26.3a17 17 0 1 1-5.8 2.3"></path>
  <path d="M32 54a17 17 0 0 1-3.3-16m3.3-6a17 17 0 1 1 6 26.5"></path>
  </svg>
  </div>
  </div>
  <div class="camaraArea">
  <video src="https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/videos%2Fvideo1.mp4?alt=media&token=ec9e8e82-e2b9-456a-86a3-feb04eb4ac21" autoplay="true" loop="true"></video>
  </div>
  <div class="modosCamara">
  <div class="modo">Cámara lenta</div>
  <div class="modo">Video</div>
  <div class="modo activo">Foto</div>
  <div class="modo">Retrato</div>
  <div class="modo">Panorámica</div>
  </div>
  <div class="obturadorArea">
  <div class="imgPreview" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/selfie.jpg?alt=media&token=9b87b717-798c-4f37-88f7-b8442bf6655b);"></div>
  <div class="obturador"></div>
  <div class="toggleCam">
  <div class="camIco">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M54.741 28.14a23.002 23.002 0 0 1-39.088 19.124"></path>
  <path d="M9.065 33.62A23.008 23.008 0 0 1 31.917 8a22.934 22.934 0 0 1 16.262 6.732"></path>
  <path d="M2 24l7.065 9.619L18 26"></path>
  <path d="M62 38l-7.259-9.86L46 36"></path>
  </svg>
  </div>
  </div>
  </div>
  </div>`);
            $(".camaraApp").touchMov({
                mov: "y",
                movUp: function (e) {
                    $(e.currentTarget).addClass("hidden");
                    $(".statusBar").removeClass("onlyLed camActiv");
                }
            });
        }
        setTimeout(function () {
            $(".statusBar").addClass("onlyLed camActiv");
            $(".camaraApp").removeClass("hidden");
        }, 100);
    }
    function renderizarUI() {
        //Pintamos todas las apps en el contenedor principal
        pintarApps(globalState.apps, $(".wrapperApps"), $(".wrapperDots"));
        //Si existe el widget del calendario
        if ($('.wrapperApps .app[data-app="widgetFullCalendario"]').length) {
            //Preparamos el widget del calendario
            $('.wrapperApps .app[data-app="widgetFullCalendario"] .icono').append(
                '<div class="eventos"><p>Sin más eventos para hoy</p></div><div class="calendarioWrapper"></div>'
            );
            //Creamos el calendario del widget
            $(
                '.wrapperApps .app[data-app="widgetFullCalendario"] .icono .calendarioWrapper'
            ).calendario();
        }
        //Si existe el icono dinamico del calendario
        if ($(".wrapperApps .app.calendarioDinamico").length) {
            //Icono dinamico del calendario
            $(".wrapperApps .app.calendarioDinamico .icono").fechaIcono();
        }
        //Si existe el reloj analogico dinamico
        if ($(".wrapperApps .app.relojDinamico").length) {
            //Reloj analogico dinamico
            $(".wrapperApps .app.relojDinamico .icono").reloj();
        }
    }
    function encendido() {
        renderizarUI();
        setTimeout(() => {
            $(".interactionInfo").removeClass("hidden");
            $(".iphone").removeClass("initAnimation").addClass("powerOn");
            setTimeout(() => {
                $(".iphone").removeClass("powerOn").addClass("arrhe");
                $(".mainScreen").removeClass("bloqueado");
            }, 2000);
        }, 1000);
    }

    encendido();
    //Hora de la statusBar
    $(".statusBar .hora").hora();
    //Hora de la pantalla de bloqueo
    $(".lockScreen .hora").hora();
    //Fecha de la pantalla de bloqueo
    $(".lockScreen .fecha").fecha();
    //Eventos del dia en la pantalla de widgetsCenter
    $(".widgetCenter .block.eventos").fechaIcono({ diaCompleto: true });

    //Touch actions
    $(".lockScreen").touchMov({
        mov: "y",
        movUp: function (e) {
            $(e.currentTarget).siblings(".statusBar").addClass("mov");
            $(e.currentTarget).addClass("hidden");
            $(e.currentTarget).siblings(".appScreen.hidden").removeClass("hidden");
            setTimeout(() => {
                $(e.currentTarget).siblings(".statusBar").removeClass("mov");
                $(e.currentTarget)
                    .siblings(".statusBar")
                    .find(".operador")
                    .addClass("hidden");
                $(e.currentTarget)
                    .siblings(".statusBar")
                    .find(".hora")
                    .removeClass("hidden");
            }, 300);
            //Timeout para simular el agotamiento de la bateria
            if (!globalState.bateriaBaja) {
                setTimeout(() => {
                    alertaiOS({
                        encabezado: "La batería se está agotando",
                        mensaje: "Batería restante: 10%",
                        acciones: [
                            {
                                texto: "Ok"
                            }
                        ]
                    });
                    $(".mainScreen .statusBar .bateria")
                        .removeClass("mid")
                        .addClass("low");
                    globalState.bateriaBaja = true;
                }, 3000);
            }
        }
    });
    $(".wrapperApps").touchMov({
        updateMovX: function (e, mov) {
            $(e.currentTarget).css({
                transform: `translateX(${globalState.wrapperApps.transform + mov}px)`,
                transition: "none"
            });
        },
        movIzq: function (e) {
            if (
                globalState.wrapperApps.grupoActivo != globalState.wrapperApps.grupos
            ) {
                globalState.wrapperApps.grupoActivo++;
            }
            $(e.currentTarget).css({
                transform: `translateX(-${globalState.wrapperApps.medida *
                    (globalState.wrapperApps.grupoActivo - 1)
                    }px)`,
                transition: "ease all 0.2s"
            });
            $(".wrapperDots .dot").removeClass("activo");
            $(".wrapperDots .dot")
                .eq(globalState.wrapperApps.grupoActivo - 1)
                .addClass("activo");
        },
        movDer: function (e) {
            if (globalState.wrapperApps.grupoActivo != 1) {
                globalState.wrapperApps.grupoActivo--;
                $(e.currentTarget).css({
                    transform: `translateX(${globalState.wrapperApps.transform + globalState.wrapperApps.medida
                        }px)`,
                    transition: "ease all 0.2s"
                });
            } else {
                $(e.currentTarget).parents(".mainScreen").addClass("blur");
                $(e.currentTarget).parents(".appScreen").addClass("moveOut");
                $(e.currentTarget)
                    .parents(".appScreen")
                    .siblings(".widgetCenter")
                    .removeClass("hidden");
                $(e.currentTarget).css({
                    transform: `translateX(${globalState.wrapperApps.medida *
                        (globalState.wrapperApps.grupoActivo - 1)
                        }px)`,
                    transition: "ease all 0.2s"
                });
            }
            $(".wrapperDots .dot").removeClass("activo");
            $(".wrapperDots .dot")
                .eq(globalState.wrapperApps.grupoActivo - 1)
                .addClass("activo");
        },
        finishMov: function (e) {
            transform = e.currentTarget.style.transform;
            if (transform.length) {
                transform = transform.split("(");
                transform = transform[1].split("px");
                transform = parseInt(transform[0]);
            } else {
                transform = 0;
            }
            globalState.wrapperApps.transform = transform;
        }
    });
    $(".widgetCenter .contenido").touchMov({
        mov: "x",
        movIzq: function (e) {
            $(e.currentTarget).parents(".mainScreen").removeClass("blur");
            $(e.currentTarget).parent().addClass("hidden").removeAttr("style");
            $(e.currentTarget)
                .parent()
                .siblings(".appScreen.moveOut")
                .removeClass("moveOut");
        },
        updateMovX: function (e, mov) {
            if (Math.sign(mov) == 1) {
                $(e.currentTarget)
                    .parent()
                    .css({
                        transform: `translateX(${mov}px)`,
                        transition: "none"
                    });
            }
        },
        movDer: function (e) {
            $(e.currentTarget).parent().css({
                transform: "none",
                transition: "ease all .2s"
            });
            setTimeout(() => {
                $(e.currentTarget).parent().removeAttr("style");
            }, 200);
        }
    });
    $(".widgetScreen .wrapper").touchMov({
        mov: "y",
        movDown: function (e) {
            $(e.currentTarget).parents(".mainScreen").removeClass("widgetScreenOpen");
            $(e.currentTarget).parent().addClass("hidden");
            setTimeout(() => {
                $(e.currentTarget).removeAttr("style");
            }, 200);
        },
        updateMovY: function (e, mov) {
            if (Math.sign(mov) == 1) {
                $(e.currentTarget).css({
                    transform: `translateY(${mov}px)`,
                    transition: "none"
                });
            }
        }
    });
    $(".statusBar").touchMov({
        mov: "y",
        movDown: function (e) {
            $(e.currentTarget).parent().addClass("blur");
            $(e.currentTarget)
                .siblings(".controlCenter.hidden")
                .removeClass("hidden");
        }
    });
    $(".controlCenter").touchMov({
        mov: "y",
        movUp: function (e) {
            $(e.currentTarget).addClass("hidden");
            $(e.currentTarget).parent().removeClass("blur");
        }
    });

    //Menu flotante al presionar app por 1 segundo
    $(".mainScreen .appScreen").mousedown(function (e) {
        if ($(this).parent().hasClass("shakingApps")) return false;
        let timeout = setTimeout(() => {
            console.log("a");
            if (!globalState.draggScreen) {
                if ($(e.target).hasClass("app") || $(e.target).parents(".app").length) {
                    //Dio click en una app. Ok, le mostraremos el menu flotante
                    $(this).parent().addClass("filterBlur");
                    let app;
                    if ($(e.target).hasClass("app")) {
                        app = $(e.target);
                    } else {
                        app = $(e.target).parents(".app");
                    }
                    let appClon = app.clone();
                    appClon.attr("id", "fixedApp");
                    appClon.css({
                        top: app[0].getBoundingClientRect().top,
                        left: app[0].getBoundingClientRect().left,
                        width: app[0].getBoundingClientRect().width
                    });
                    $("body").append(appClon);
                    let rectsIphone = $(".iphone .bordeNegro")[0].getBoundingClientRect();
                    let rectsApp = appClon.children(".icono")[0].getBoundingClientRect();
                    let cssMenu = `left: ${rectsIphone.x + rectsIphone.width - rectsApp.x >= 190
                            ? rectsApp.x
                            : rectsApp.x + rectsApp.width - 190
                        }px;`;
                    if (rectsIphone.top + 65 * 2 >= rectsApp.top) {
                        cssMenu += `top : ${rectsApp.y + rectsApp.height
                            }px; transform: translateY(10px)`;
                    } else {
                        cssMenu += `top: ${rectsApp.y}px; transform: translateY(calc(-100% - 10px));`;
                    }
                    $("body").append(`
  <div class="fixedMenuFixedApp" style="${cssMenu}">
  <div class="menuOption eliminar">Eliminar app
  <div class="icono">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="30"></circle>
  <path d="M48 32H16"></path>
  </svg>
  </div>
  </div>
  <div class="menuOption shaking">Editar pantalla de inicio
  <div class="icono">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <path d="M14 59a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-9H14zM50 5a3 3 0 0 0-3-3H17a3 3 0 0 0-3 3v5h36zm0 45V10m-36 0v40"></path>
  <circle cx="32" cy="56" r="2"></circle>
  </svg>
  </div>
  </div>
  </div>
  `);
                } else {
                    //Dio click en cualquier parte del appScreen. Ok, es hora del shaking apps
                    $(this).parent().addClass("shakingApps");
                    $(".appScreen .app").append('<div class="removeApp"></div>');
                }
            }
        }, 1000);
        $(this).mouseup(function () {
            clearTimeout(timeout);
        });
        $(this).mouseleave(function () {
            clearTimeout(timeout);
        });
    });
    //Shaking apps desde el menu flotante de la app
    $("body").on("click", ".fixedMenuFixedApp .menuOption.shaking", function () {
        $(this).parent().remove();
        $("#fixedApp").remove();
        $(".mainScreen").removeClass("filterBlur").addClass("shakingApps");
        $(".appScreen .app").append('<div class="removeApp"></div>');
    });
    //Salir del eliminador de apps (shaking apps)
    $(".exitShake").click(function () {
        $(".mainScreen").removeClass("shakingApps");
        $(".appScreen .app .removeApp").remove();
    });
    //Mostrar la widgetScreen
    $(".widgetPlus").click(function () {
        $(".widgetScreen").removeClass("hidden");
        $(".appScreen .app .removeApp").remove();
        $(".mainScreen").removeClass("shakingApps").addClass("widgetScreenOpen");
    });
    //Eliminar app
    $("body").on("click", ".fixedMenuFixedApp .menuOption.eliminar", function () {
        let idApp = $("#fixedApp").data("id");
        if (idApp == undefined) {
            var idDeck = $("#fixedApp").data("indeck");
        }
        $(this).parent().remove();
        $("#fixedApp").remove();
        $(".mainScreen").removeClass("filterBlur");
        alertaiOS({
            encabezado: `¿Transferir ${idApp !== undefined ? globalState.apps[idApp].nombre : "app"
                } a la biblioteca de apps o eliminar la app?`,
            mensaje:
                "Transferir la app la quitará de tu pantalla de inicio conservando todos los datos",
            acciones: [
                {
                    texto: "Eliminar app",
                    warning: true,
                    callback: function () {
                        if (idApp !== undefined) {
                            globalState.apps.splice(idApp, 1);
                            renderizarUI();
                        } else if (idDeck) {
                            $('.deckApps .app[data-indeck="' + idDeck + '"]').remove();
                        }
                    }
                },
                {
                    texto: "Transferir a la biblioteca de apps",
                    callback: function () {
                        console.log("Biblioteca de apps pendiente");
                    }
                },
                {
                    texto: "Cancelar"
                }
            ]
        });
    });
    $(".appScreen").on("click", ".app .removeApp", function () {
        let idApp = $(this).parent(".app").data("id");
        if (idApp == "undefined") {
            var idDeck = $(this).parent(".app").data("indeck");
        }
        $(".appScreen .app .removeApp").remove();
        $(".mainScreen").removeClass("shakingApps");
        alertaiOS({
            encabezado: `¿Transferir ${idApp !== undefined ? globalState.apps[idApp].nombre : "app"
                } a la biblioteca de apps o eliminar la app?`,
            mensaje:
                "Transferir la app la quitará de tu pantalla de inicio conservando todos los datos",
            acciones: [
                {
                    texto: "Eliminar app",
                    warning: true,
                    callback: function () {
                        if (idApp !== undefined) {
                            globalState.apps.splice(idApp, 1);
                            renderizarUI();
                        } else if (idDeck) {
                            $('.deckApps .app[data-indeck="' + idDeck + '"]').remove();
                        }
                    }
                },
                {
                    texto: "Transferir a la biblioteca de apps",
                    callback: function () {
                        console.log("Biblioteca de apps pendiente");
                    }
                },
                {
                    texto: "Cancelar"
                }
            ]
        });
    });
    //Toggles de los iconos del controlCenter
    $(".controlCenter .actionIcon").click(function () {
        $(this).toggleClass("activo");
        if ($(this).hasClass("modoVuelo")) {
            $(this).siblings(".datosCelulares, .wifi").removeClass("activo");
        } else if ($(this).hasClass("datosCelulares") || $(this).hasClass("wifi")) {
            $(this).siblings(".modoVuelo").removeClass("activo");
        }
    });

    //UI de algunas apps
    $("body").on("click", '.app[data-app="appCamara"]', function () {
        camara();
    });
    $(".botonGirar").click(function () {
        $(this).toggleClass("activo");
        $(".iphone").toggleClass("showBackSide");
    });
    $(".botonBloquear").click(function () {
        if (!$(this).hasClass("activo")) {
            let sonido = new Audio(
                "https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/sonidos%2FiphoneLockScreen.mp3?alt=media&token=e2a00013-3c33-429b-866b-b2d6399b343f"
            );
            sonido.play();
        }
        $("#iOSAlert").remove();
        $(this).toggleClass("activo");
        $(".mainScreen").toggleClass("bloqueado");
    });
});
