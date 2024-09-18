function loadPage(page) {
    const content = document.getElementById('content');
    switch (page) {
        case 'formulario-ti':
            content.innerHTML = `
            <div class="filter-box">
                <h1 id="titulo_h1">FORMULARIO DIRECCIÓN DE TI</h1>
                <h2 id="focus-group-header">Criterios de búsqueda</h2>
                <label>CONSECUTIVO: <input type="text"></label>
                <label>CATEGORÍA: <input type="text"></label>
                <button id="buscarBtn">Buscar</button>
                <br>
            </div>
            <div class="filter-box">
                <!-- Lista desplegable principal -->
                <label for="main-category">Seleccione una categoría:</label>
                <select id="main-category">
                    <option value="" disabled selected>Seleccione...</option>
                    <option value="satisfaccion_general">SATISFACCIÓN GENERAL</option>
                    <option value="infraestructura">INFRAESTRUCTURA</option>
                    <option value="aplicaciones_sistemas">APLICACIONES Y SISTEMAS DE INFORMACIÓN</option>
                    <option value="seguridad_ti">SEGURIDAD DE TI</option>
                    <option value="canales_atencion">CANALES DE ATENCIÓN</option>
                    <option value="consolidado_aplicaciones_sistemas">CONSOLIDADO APLICACIONES Y SISTEMAS DE INFORMACIÓN</option>
                </select>
            
                <!-- Sub Lista desplegable dinámica -->
                <div id="subcategory-container" style="display: none;">
                    <label for="sub-category">Seleccione una subcategoría:</label>
                    <select id="sub-category">
                        <option value="" disabled selected>Seleccione...</option>
                        <!-- Subcategorías se cargarán dinámicamente -->
                    </select>
                </div>
            </div>
            
            <!-- Tabla para mostrar las preguntas -->
            <div class="table-container">
                <table id="questions-table">
                    <thead>
                        <tr id="table-headers">
                            <th>TABLA DE FORMULARIOS DE TI</th>
                            <!-- Los encabezados cambiarán dinámicamente -->
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Las preguntas se cargarán dinámicamente aquí -->
                    </tbody>
                </table>
            </div>
            `;

            setTimeout(() => {
                const subcategories = {
                    'satisfaccion_general': {
                        'satisfaccion': [
                            '¿Cuál es tu nivel de satisfacción con el servicio de la Dirección de TI de EAF' +
                                    'IT?',
                            'Infraestructura TI',
                            'Aplicaciones y sistemas de información',
                            'Seguridad',
                            'Canales de atención y servicio'
                        ]
                    },
                    'infraestructura': {
                        'frecuencia_infra_red': [
                            'Red - Frecuencia de uso - Wifi en el campus', 'Red Frecuencia de uso - Red fija internet', 'Red - Frecuencia de uso – VPN'
                        ],
                        'satisfaccion_infra_red': [
                            'Red - Nivel de satisfacción - Wifi en el campus', 'Red - Nivel de satisfacción - Red fija internet', 'Red - Nivel de satisfacción – VPN'
                        ],
                        'herramientas_colaboracion_frecuencia': [
                            'Herramientas de colaboración - Frecuencia de uso – Teams',
                            'Herramientas de colaboración - Frecuencia de uso – SharePoint',
                            'Herramientas de colaboración - Frecuencia de uso - One Drive',
                            'Herramientas de colaboración - Frecuencia de uso – Planner',
                            'Herramientas de colaboración - Frecuencia de uso - Power BI',
                            'Herramientas de colaboración - Frecuencia de uso - Power Automate'
                        ],
                        'herramientas_colaboracion_satisfaccion': [
                            'Herramientas de colaboración - Nivel de satisfacción – Teams',
                            'Herramientas de colaboración - Nivel de satisfacción – SharePoint',
                            'Herramientas de colaboración - Nivel de satisfacción - One Drive',
                            'Herramientas de colaboración - Nivel de satisfacción – Planner',
                            'Herramientas de colaboración - Nivel de satisfacción - Power BI',
                            'Herramientas de colaboración - Nivel de satisfacción - Power Automate'
                        ],
                        'equipos_computo_frecuencia': [
                            'Equipos de Cómputo - Frecuencia de uso - Desempeño del equipo asignado', 'Equipos de Cómputo - Frecuencia de uso - Mantenimiento por parte de TI del equ' +
                                    'ipo asignado',
                            'Equipos de Cómputo - Frecuencia de uso - Préstamo de equipos',
                            'Equipos de Cómputo - Frecuencia de uso - Compra de Equipos',
                            'Equipos de Cómputo - Frecuencia de uso - Asignación y/o Entrega de Equipos'
                        ],
                        'equipos_computo_satisfaccion': [
                            'Equipos de Cómputo - Nivel de satisfacción - Desempeño del equipo asignado', 'Equipos de Cómputo - Nivel de satisfacción - Mantenimiento por parte de TI del' +
                                    ' equipo asignado',
                            'Equipos de Cómputo - Nivel de satisfacción - Préstamo de equipos',
                            'Equipos de Cómputo - Nivel de satisfacción - Compra de Equipos',
                            'Equipos de Cómputo - Nivel de satisfacción - Asignación y/o Entrega de Equipos'
                        ],
                        'comentarios_infraestructura': ['Comentarios Infraestructura']
                    },
                    'aplicaciones_sistemas': {
                        'software_proceso': [
                            'Software - ¿Ha utilizado el proceso? - Compra de software', 'Software - ¿Ha utilizado el proceso? - Renovación de software'
                        ],
                        'aplicaciones_sistemas_proceso': [
                            'Aplicaciones y sistemas de información - ¿Ha utilizado el proceso? - Asesoría ' +
                                    'y apoyo por parte de TI',
                            'Aplicaciones y sistemas de información - ¿Ha utilizado el proceso? - Acceso a ' +
                                    'sistemas de información',
                            'Aplicaciones y sistemas de información - ¿Ha utilizado el proceso? - Calidad d' +
                                    'el sistema de información',
                            'Aplicaciones y sistemas de información - ¿Ha utilizado el proceso? - Disponibi' +
                                    'lidad de los sistemas de información'
                        ],
                        'aplicaciones_sistemas_satisfaccion': [
                            'Aplicaciones y sistemas de información - Nivel de satisfacción - Asesoría y ap' +
                                    'oyo por parte de TI',
                            'Aplicaciones y sistemas de información - Nivel de satisfacción - Acceso a sist' +
                                    'emas de información',
                            'Aplicaciones y sistemas de información - Nivel de satisfacción - Calidad del s' +
                                    'istema de información',
                            'Aplicaciones y sistemas de información - Nivel de satisfacción - Disponibilida' +
                                    'd de los sistemas de información'
                        ]
                    },
                    'seguridad_ti': {
                        'seguridad': [
                            '¿Recibió usted la capacitación en ciberseguridad brindada por la Dirección de ' +
                                    'TI?',
                            '¿Siente que tiene los conocimientos y las herramientas necesarias para la prot' +
                                    'ección de la información institucional?',
                            'Pertinencia de los contenidos de la capacitación',
                            'Aplicabilidad de uso en su labor diaria',
                            'Solicitudes dirigidas al servicio de seguridad de TI'
                        ],
                        'multiples_factores': [
                            '¿Usted activó el múltiple factor de Autenticación (MFA) para su cuenta de corr' +
                                    'eo electrónico institucional?',
                            '¿Siente que al activar el múltiple factor de Autenticación (MFA) ha mejorado l' +
                                    'a seguridad en su cuenta de correo electrónico institucional?',
                            '¿Por qué motivos no ha activado el múltiple factor de Autenticación (MFA) para' +
                                    ' su cuenta de correo electrónico institucional?',
                            '¿Qué tan satisfecho se siente con la activación del múltiple factor de Autenti' +
                                    'cación (MFA)?',
                            'Comentarios.'
                        ]
                    },
                    'canales_atencion': {
                        'frecuencia_uso': [
                            'Bots Teams',
                            'Línea SAUL 9433',
                            'Chats de Teams – Soporte Usuarios SAUL',
                            'Correo – saul@eafit.edu.co.co',
                            'Portal del Usuario',
                            'Atención Presencial'
                        ],
                        'nivel_satisfaccion': [
                            'Bots Teams',
                            'Línea SAUL 9433',
                            'Chats de Teams – Soporte Usuarios SAUL',
                            'Correo – saul@eafit.edu.co.co',
                            'Portal del Usuario',
                            'Atención Presencial'
                        ],
                        'comentarios': ['Comentarios']
                    },
                    'consolidado_aplicaciones_sistemas': {
                        'asesoria_ti': [],
                        'calidad': [],
                        'disponibilidad': []
                    }
                };

                // Encabezados para "CONSOLIDADO APLICACIONES Y SISTEMAS DE INFORMACIÓN"
                const consolidatedHeaders = [
                    'CONICO',
                    'QUERYX',
                    'MOVEX',
                    'CONTRATA – CATEDRA',
                    'SOFSIN',
                    'CRONOS',
                    'SABE',
                    'EPIK',
                    'EXPRES',
                    'GESTION JURIDICA',
                    'EAFIT INTERACTIVA',
                    'SIGAVI',
                    'DOCUWARE',
                    'INVESTIGA',
                    'OTRA'
                ];

                // Manejar cambios en la lista desplegable principal
                document
                    .getElementById('main-category')
                    .addEventListener('change', function () {
                        const selectedCategory = this.value;
                        const subCategorySelect = document.getElementById('sub-category');
                        const subCategoryContainer = document.getElementById('subcategory-container');

                        // Limpiar subcategorías anteriores
                        subCategorySelect.innerHTML = '<option value="" disabled selected>Seleccione...</option>';
                        subCategoryContainer.style.display = 'none';

                        if (selectedCategory && subcategories[selectedCategory]) {
                            const subcats = Object.keys(subcategories[selectedCategory]);

                            subcats.forEach(subcat => {
                                const option = document.createElement('option');
                                option.value = subcat;
                                option.textContent = subcat
                                    .toUpperCase()
                                    .replace(/_/g, ' ');
                                subCategorySelect.appendChild(option);
                            });

                            subCategoryContainer.style.display = 'block';
                        }
                    });

                // Manejar cambios en la lista desplegable secundaria
                document
                    .getElementById('sub-category')
                    .addEventListener('change', function () {
                        const selectedCategory = document
                            .getElementById('main-category')
                            .value;
                        const selectedSubCategory = this.value;
                        const questionsTableBody = document
                            .getElementById('questions-table')
                            .querySelector('tbody');
                        const tableHeaders = document.getElementById('table-headers');

                        // Limpiar preguntas anteriores
                        questionsTableBody.innerHTML = '';
                        tableHeaders.innerHTML = '';

                        if (selectedCategory && selectedSubCategory && subcategories[selectedCategory]) {
                            let questions;

                            if (selectedCategory === 'consolidado_aplicaciones_sistemas') {
                                // Usar encabezados específicos para esta categoría
                                questions = consolidatedHeaders;
                            } else {
                                questions = subcategories[selectedCategory][selectedSubCategory];
                            }

                            // Generar encabezados de la tabla
                            const thSelect = document.createElement('th');
                            thSelect.textContent = 'SELECCIONAR'; // Encabezado para la columna de checkboxes
                            tableHeaders.appendChild(thSelect);

                            questions.forEach(question => {
                                const th = document.createElement('th');
                                th.textContent = question;
                                tableHeaders.appendChild(th);
                            });

                            // Generar filas de la tabla
                            const tr = document.createElement('tr');
                            // Columna de selección
                            const tdSelect = document.createElement('td');
                            tdSelect.innerHTML = '<input type="checkbox">';
                            tr.appendChild(tdSelect);

                            // Añadir datos aleatorios del 1 al 5
                            questions.forEach(question => {
                                const td = document.createElement('td');
                                if (question.toLowerCase().includes('comentarios')) {
                                    // Para preguntas de tipo "Comentarios"
                                    td.textContent = 'Ejemplo de comentario';
                                } else {
                                    // Para otros tipos de preguntas, generar un número aleatorio entre 1 y 5
                                    td.textContent = Math.floor(Math.random() * 5) + 1;
                                }
                                tr.appendChild(td);
                            });
                            questionsTableBody.appendChild(tr);
                        }
                    });
            }, 0);
            break;

        case 'formulario-proyecto':
            content.innerHTML = `
                <div class="filter-box">
                    <h1 id="titulo_h1"> FORMULARIO PROYECTO </h1>
                    <h2 id="focus-group-header"> Criterios de búsqueda </h2>
                    <label>Fecha Inicio: <input type="date" id="fechaEnvioFilter"></label>
                    <label>Fecha Fin: <input type="date" id="fechaEnvioFilter"></label>
                    <button id="buscarBtn">Buscar</button>
                    <button id="enviarBtn">Enviar</button>
                    <button id="enviarFBBtn">Enviar FeedBack</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Consecutivo</th>
                                <th>Hora de Inicio</th>
                                <th>Hora de Finalización</th>
                                <th>Correo Electrónico</th>
                                <th>Nombre</th>
                                <th>Fecha Modificación</th>
                                <th>Proyecto</th>
                                <th>Al cumplimiento de los tiempos planeados para la ejecución del proyecto</th>
                                <th>A la solución entregada a través del proyecto</th>
                                <th>A la comunicación de avances, riesgos, resultados generados durante la ejecución el proyecto</th>
                                <th>Al desempeño del líder del proyecto</th>
                                <th>Compártanos sus sugerencias y comentarios sobre la gestión del proyecto</th>
                                <th>Califique su grado de satisfacción en general frente al proyecto</th>
                                <th>Observaciones</th> <!-- Nueva columna para el botón Feedback -->
                                </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" name="rowSelect" value="1"></td>
                                <td>1</td>
                                <td>10/30/23 7:41:30</td>
                                <td>10/30/23 7:44:02</td>
                                <td>jbedoy11@eafit.edu.co</td>
                                <td>JAIME ALBERTO BEDOYA VELASQUEZ</td>
                                <td></td>
                                <td>[STI] COMPRAS MASIVAS 2023</td>
                                <td>Buena</td>
                                <td>Buena</td>
                                <td>Excelente</td>
                                <td>Excelente</td>
                                <td>Se puede mejorar la experiencia del usuario si al entregarle el equipo nuevo se le entregan los implementos necesarios de acuerdo con las características de los nuevos equipos, por ejemplo Guayas de seguridad y adaptadores para conectar la pantalla</td>
                                <td>5</td>
                                <td><button class="feedbackBtn">Feedback</button></td> <!-- Botón Feedback en cada fila -->
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="rowSelect" value="2"></td>
                                <td>2</td>
                                <td>10/30/23 7:47:11</td>
                                <td>10/30/23 7:48:36</td>
                                <td>jsanch64@eafit.edu.co</td>
                                <td>JOHAN ALBEIRO SANCHEZ VANEGAS</td>
                                <td></td>
                                <td>[SSW-PY] MODERNIZACIÓN SISTEMA DE GESTIÓN DEL PARQUEADERO</td>
                                <td>Mala</td>
                                <td>Mala</td>
                                <td>Excelente</td>
                                <td>Excelente</td>
                                <td>El proyecto no fue exitosamente finalizado por causas externas, la gestión interna fue excelente.</td>
                                <td>2</td>
                                <td><button class="feedbackBtn">Feedback</button></td> <!-- Botón Feedback en cada fila -->
                            </tr>
                        </tbody>
                    </table>
                </div>
        <!-- Ventana Emergente enviar -->
            <div id="modal" class="modal">
                <div class="modal-content">
                    <span class="close general-close">&times;</span> <!-- Cambiado a general-close -->
                    <h2>ENVÍO ÉXITOSO</h2>
                    <p>Buenas Tardes NOMBRE USUARIO.
                    Soy Tatiana Ortiz del Depto. de Servicios de Tecnología de EAFIT, estoy en el proceso de evaluación de Atención del servicio al Cliente. Y quería saber si usted me puede brindar 5 minutos. 
                    Quiero hablar con Usted sobre el resultado de la encuesta y calidad del servicio prestado, 
                    que se realizó el FECHA REGISTRO ENCUESTA caso Aranda TIPO CASO</p>
                   <!-- <button id="closeModalBtn">Cerrar</button> -->
                </div>
            </div>

            <!-- Ventana Emergente específica para Feedback -->
            <div id="feedbackFormModal" class="modal">
                <div class="modal-content">
                    <span class="close feedback-form-close">&times;</span> <!-- Cambiado a feedback-form-close -->
                    <h2>FeedBack Enviado Correctamente</h2>
                   <!-- <button id="closeFeedbackFormBtn">Cerrar</button> -->
                </div>
            </div>

            <!-- Ventana Emergente de Feedback (para botones en la tabla) -->
            <div id="feedbackModal" class="modal">
                <div class="modal-content">
                    <span class="close feedback-close">&times;</span> <!-- Cambiado a feedback-close -->
                    <h2>Ingrese Feedback</h2>
                    <label for="rating">Indique cantidad de contacto:</label>
                    <select id="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br><br>
                    <textarea id="feedbackInput" placeholder="Escriba su feedback aquí..."></textarea>
                    <br><br>
                    <button id="enviarFeedbackBtn">Guardar Feedback</button> <!-- Botón Enviar Feedback -->
                </div>
            </div>
            `;

            // JavaScript para manejar la ventana emergente de Feedback
            setTimeout(
                () => { // Asegurar que el contenido esté cargado antes de agregar eventos
                    // Selección de elementos del modal general
                    const modal = document.getElementById("modal"); // Modal general de Enviar
                    const closeBtnModal = document.querySelector(".close.general-close"); // Botón de cerrar del modal general
                    const enviarBtn = document.getElementById("enviarBtn"); // Botón Enviar

                    // Selección de elementos del modal de Feedback específico de Enviar Feedback
                    const feedbackFormModal = document.getElementById("feedbackFormModal");
                    const closeBtnFeedbackForm = document.querySelector(
                        ".close.feedback-form-close"
                    );
                    const enviarFBBtn = document.getElementById("enviarFBBtn"); // Botón Enviar Feedback

                    // Funciones para mostrar y ocultar los modales
                    function showModal(modalElement) {
                        modalElement.style.display = "block";
                    }

                    function closeModal(modalElement) {
                        modalElement.style.display = "none";
                    }

                    // Manejadores de eventos de clic para las ventanas emergentes
                    enviarBtn.onclick = function () {
                        showModal(modal);
                    };
                    closeBtnModal.onclick = function () {
                        closeModal(modal);
                    };

                    enviarFBBtn.onclick = function () {
                        showModal(feedbackFormModal);
                    };
                    closeBtnFeedbackForm.onclick = function () {
                        closeModal(feedbackFormModal);
                    };

                    // Cerrar las ventanas emergentes al hacer clic fuera de ellas
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            closeModal(modal);
                        } else if (event.target == feedbackFormModal) {
                            closeModal(feedbackFormModal);
                        }
                    };

                    // Selección de elementos de la ventana emergente de Feedback
                    const feedbackBtns = document.querySelectorAll(".feedbackBtn"); // Selecciona todos los botones Feedback en la tabla
                    const feedbackModal = document.getElementById("feedbackModal");
                    const closeBtnFeedback = document.querySelector(".close.feedback-close"); // Botón de cerrar específico del feedback

                    feedbackBtns.forEach(button => {
                        button.onclick = function () {
                            showModal(feedbackModal); // Mostrar el popup al hacer clic en el botón Feedback
                        };
                    });

                    closeBtnFeedback.onclick = function () {
                        closeModal(feedbackModal); // Cerrar el popup
                    };

                    window.onclick = function (event) {
                        if (event.target == feedbackModal) {
                            closeModal(feedbackModal); // Cerrar el popup si se hace clic fuera del mismo
                        }
                    };
                },
                0
            );
            break;

        case 'formulario-tickets':
            content.innerHTML = `
                <div class="filter-box">
                    <h1 id="titulo_h1"> FORMULARIO TICKETS </h1>
                    <h2 id="focus-group-header"> Criterios de búsqueda </h2>
                    <label>Consecutivo: <input type="text"></label>
                    <label>Número Caso: <input type="text"></label>
                    <button id="buscarBtn">Buscar</button>
                    <button id="enviarBtn">Enviar</button>
                    <button id="enviarFBBtn">Enviar FeedBack</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Consecutivo</th>
                                <th>Tipo Caso</th>
                                <th>Número Caso</th>
                                <th>Número Tarea</th>
                                <th>Nombre Completo</th>
                                <th>Grupo Resolutor CASO/TAREA</th>
                                <th>Especialista CASO/TAREA</th>
                                <th>Área de TI</th>
                                <th>Servicio</th>
                                <th>Fecha Registro CASO/TAREA</th>
                                <th>Fecha Calificación CASO/TAREA</th>
                                <th>Tiempo de respuesta de entrega de la solución a su solicitud</th>
                                <th>La Solución entregada a solicitud fue la adecuada</th>
                                <th>Comunicación que la Dirección de Informática  tuvo con usted durante la gestión y solución de su solicitud</th>
                                <th>Actitud de la(s) persona(s) que atendieron su solicitud</th>
                                <th>Grado de Satisfacción frente al servicio prestado a su solicitud</th>
                                <th>Facilidad de acceso al servicio solicitado</th>
                                <th>Sugerencias o Comentarios</th>
                                <th></th> <!-- Nueva columna para el botón Feedback -->
                                <th></th> <!-- Nueva columna para DETALLES -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" name="rowSelect" value="1"></td>
                                <td>001</td>
                                <td>Requerimiento</td>
                                <td>RF-543601-6-145407</td>
                                <td></td>
                                <td>Monica Adriana Franco Cuervo</td>
                                <td>GESTION BASE DE DATOS</td>
                                <td>Sindy Yesenia Ramirez Gutierrez</td>
                                <td>Soluciones de Infraestructura</td>
                                <td>Gestión de Acceso</td>
                                <td>21/02/2024</td>
                                <td>28/02/2024  4:45:30 p. m.</td>
                                <td>2</td>
                                <td>Si</td>
                                <td>5</td>
                                <td>5</td>
                                <td>5</td>
                                <td>1</td>
                                <td>Información en el botón DETALLES</td>
                                <td><button class="feedbackBtn">Feedback</button></td> <!-- Botón Feedback en cada fila -->
                                <td><button class="detailsBtn">DETALLES</button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="rowSelect" value="2"></td>
                                <td>002</td>
                                <td>Requerimiento</td>
                                <td>RF-564093-6-154264</td>
                                <td></td>
                                <td>Monica Adriana Franco Cuervo</td>
                                <td>GESTION BASE DE DATOS</td>
                                <td>Sindy Yesenia Ramirez Gutierrez</td>
                                <td>Soluciones de Infraestructura</td>
                                <td>Bases de Datos</td>
                                <td>5/06/2024</td>
                                <td>6/06/2024  3:15:19 p. m.</td>
                                <td>5</td>
                                <td>No</td>
                                <td>2</td>
                                <td>5</td>
                                <td>1</td>
                                <td>5</td>
                                <td>Información en el botón DETALLES</td>
                                <td><button class="feedbackBtn">Feedback</button></td> <!-- Botón Feedback en cada fila -->
                                <td><button class="detailsBtn">DETALLES</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               <!-- Ventana Emergente enviar -->
            <div id="modal" class="modal">
                <div class="modal-content">
                    <span class="close general-close">&times;</span> <!-- Cambiado a general-close -->
                    <h2>ENVÍO ÉXITOSO</h2>
                    <p>Buenas Tardes NOMBRE USUARIO.
                    Soy Tatiana Ortiz del Depto. de Servicios de Tecnología de EAFIT, estoy en el proceso de evaluación de Atención del servicio al Cliente. Y quería saber si usted me puede brindar 5 minutos. 
                    Quiero hablar con Usted sobre el resultado de la encuesta y calidad del servicio prestado, 
                    que se realizó el FECHA REGISTRO ENCUESTA caso Aranda TIPO CASO</p>
                  <!--  <button id="closeModalBtn">Cerrar</button> -->
                </div>
            </div>

            <!-- Ventana Emergente específica para Enviar Feedback -->
            <div id="feedbackFormModal" class="modal">
                <div class="modal-content">
                    <span class="close feedback-form-close">&times;</span> <!-- Cambiado a feedback-form-close -->
                    <h2>Enviar Feedback</h2>
                    <p>Contenido específico para enviar Feedback...</p>
                  <!--  <button id="closeFeedbackFormBtn">Cerrar</button> -->
                </div>
            </div>

            <!-- Ventana Emergente de Feedback (para botones en la tabla) -->
            <div id="feedbackModal" class="modal">
                <div class="modal-content">
                    <span class="close feedback-close">&times;</span> <!-- Cambiado a feedback-close -->
                    <h2>Ingrese Feedback</h2>
                    <label for="rating">Indique cantidad de contacto:</label>
                    <select id="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br><br>
                    <textarea id="feedbackInput" placeholder="Escriba su feedback aquí..."></textarea>
                    <br><br>
                    <button id="enviarFeedbackBtn">Guardar Feedback</button> <!-- Botón Enviar Feedback -->
                </div>
            </div>
             <!-- Ventana Emergente de DETALLES -->
                <div id="detailsModal" class="modal">
                    <div class="modal-content">
                        <span class="close details-close">&times;</span>
                        <h2>DETALLES</h2>
                        <p>La solicitud quedó incompleta, las recomendaciones fueron claras dentro del caso y dentro de cada script la instrucción es clara:
4.Insercion de cliente tipos, la salida de esta consulta debe ejecutarse en ventana de comando y se debe guardar y entregar la salida completa de los insert realizados

Y no se ejecutó correctamente y el caso fue cerrado
Como recomendación porfa leer la descripción del caso y los comentarios de cada scripts, porque como son datos que se deben tomar en linea no se puede enviar el script de la sentencia con los datos porque las solicitudes es probable que no se atiendan el mismo dia y cada dia los datos se mueven
Si no hay claridad sería bueno que se comunicaran con nosotros para aclarar</p>
                      <!--  <button id="closeDetailsModalBtn">Cerrar</button> -->
                    </div>
                </div>
				
            `;

            // JavaScript para manejar las ventanas emergentes
            setTimeout(() => {
                const modal = document.getElementById("modal");
                const closeBtnModal = document.querySelector(".close.general-close");
                const enviarBtn = document.getElementById("enviarBtn");

                const feedbackFormModal = document.getElementById("feedbackFormModal");
                const closeBtnFeedbackForm = document.querySelector(
                    ".close.feedback-form-close"
                );
                const enviarFBBtn = document.getElementById("enviarFBBtn");

                const feedbackModal = document.getElementById("feedbackModal");
                const closeBtnFeedback = document.querySelector(".close.feedback-close");

                const detailsModal = document.getElementById("detailsModal"); // Modal de detalles
                const closeBtnDetails = document.querySelector(".close.details-close"); // Botón de cerrar específico de detalles

                function showModal(modalElement) {
                    modalElement.style.display = "block";
                }

                function closeModal(modalElement) {
                    modalElement.style.display = "none";
                }

                enviarBtn.onclick = function () {
                    showModal(modal);
                };
                closeBtnModal.onclick = function () {
                    closeModal(modal);
                };

                enviarFBBtn.onclick = function () {
                    showModal(feedbackFormModal);
                };
                closeBtnFeedbackForm.onclick = function () {
                    closeModal(feedbackFormModal);
                };

                const feedbackBtns = document.querySelectorAll(".feedbackBtn");
                feedbackBtns.forEach(button => {
                    button.onclick = function () {
                        showModal(feedbackModal);
                    };
                });

                closeBtnFeedback.onclick = function () {
                    closeModal(feedbackModal);
                };

                const detailsBtns = document.querySelectorAll(".detailsBtn");
                detailsBtns.forEach(button => {
                    button.onclick = function () {
                        showModal(detailsModal); // Mostrar el popup de detalles
                    };
                });

                closeBtnDetails.onclick = function () {
                    closeModal(detailsModal); // Cerrar el popup de detalles
                };

                window.onclick = function (event) {
                    if (event.target === modal) {
                        closeModal(modal);
                    } else if (event.target === feedbackFormModal) {
                        closeModal(feedbackFormModal);
                    } else if (event.target === feedbackModal) {
                        closeModal(feedbackModal);
                    } else if (event.target === detailsModal) {
                        closeModal(detailsModal); // Cerrar el modal de detalles
                    }
                };
            }, 0);
            break;

        case 'formulario-llamadas':
            content.innerHTML = `
                <div class="filter-box">
                    <h1 id="titulo_h1"> FORMULARIO LLAMADAS LÍNEA SAUL </h1>
                    <h2 id="focus-group-header"> Criterios de búsqueda </h2>
                    <label>Mes: <input type="text"></label>
                    <button id="buscarBtn">Buscar</button>
                    <button id="enviarBtn">Enviar</button>
                    <button id="enviarFBBtn">Enviar FeedBack</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Consecutivo</th>
                                <th>Nombre Completo</th>
                                <th>Número Llamadas</th>
                                <th>Mes</th>
                                <th>Observación mesa de servicio</th>
                                <th>Observaciones</th> <!-- Nueva columna para el botón Feedback -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" name="rowSelect" value="1"></td>
                                <td>001</td>
                                <td>Ana Gómez</td>
                                <td>15</td>
                                <td>Julio</td>
                                <td>Atención rápida y efectiva en la mayoría de los casos.</td>
                                <td><button class="feedbackBtn">Feedback</button></td> <!-- Botón Feedback en cada fila -->
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="rowSelect" value="2"></td>
                                <td>002</td>
                                <td>Pedro Ruiz</td>
                                <td>8</td>
                                <td>Agosto</td>
                                <td>Algunos retrasos en la resolución, pero buen seguimiento.</td>
                                <td><button class="feedbackBtn">Feedback</button></td> <!-- Botón Feedback en cada fila -->
                        </tbody>
                    </table>
                </div>
               <!-- Ventana Emergente enviar -->
            <div id="modal" class="modal">
                <div class="modal-content">
                    <span class="close general-close">&times;</span> <!-- Cambiado a general-close -->
                    <h2>ENVÍO ÉXITOSO</h2>
                    <p>Buenas Tardes NOMBRE USUARIO.
                    Soy Tatiana Ortiz del Depto. de Servicios de Tecnología de EAFIT, estoy en el proceso de evaluación de Atención del servicio al Cliente. Y quería saber si usted me puede brindar 5 minutos. 
                    Quiero hablar con Usted sobre el resultado de la encuesta y calidad del servicio prestado, 
                    que se realizó el FECHA REGISTRO ENCUESTA caso Aranda TIPO CASO</p>
                   <!-- <button id="closeModalBtn">Cerrar</button> -->
                </div>
            </div>

            <!-- Ventana Emergente específica para Feedback -->
            <div id="feedbackFormModal" class="modal">
                <div class="modal-content">
                    <span class="close feedback-form-close">&times;</span> <!-- Cambiado a feedback-form-close -->
                    <h2>Enviar Feedback</h2>
                    <p>Contenido específico para enviar Feedback...</p>
                  <!--  <button id="closeFeedbackFormBtn">Cerrar</button> -->
                </div>
            </div>

            <!-- Ventana Emergente de Feedback (para botones en la tabla) -->
            <div id="feedbackModal" class="modal">
                <div class="modal-content">
                    <span class="close feedback-close">&times;</span> <!-- Cambiado a feedback-close -->
                    <h2>Ingrese Feedback</h2>
                    <label for="rating">Indique cantidad de contacto:</label>
                    <select id="rating">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br><br>
                    <textarea id="feedbackInput" placeholder="Escriba su feedback aquí..."></textarea>
                    <br><br>
                    <button id="enviarFeedbackBtn">Guardar Feedback</button> <!-- Botón Enviar Feedback -->
                </div>
            </div>
            `;

            // JavaScript para manejar la ventana emergente de Feedback
            setTimeout(
                () => { // Asegurar que el contenido esté cargado antes de agregar eventos
                    // Selección de elementos del modal general
                    const modal = document.getElementById("modal"); // Modal general de Enviar
                    const closeBtnModal = document.querySelector(".close.general-close"); // Botón de cerrar del modal general
                    const enviarBtn = document.getElementById("enviarBtn"); // Botón Enviar

                    // Selección de elementos del modal de Feedback específico de Enviar Feedback
                    const feedbackFormModal = document.getElementById("feedbackFormModal");
                    const closeBtnFeedbackForm = document.querySelector(
                        ".close.feedback-form-close"
                    );
                    const enviarFBBtn = document.getElementById("enviarFBBtn"); // Botón Enviar Feedback

                    // Funciones para mostrar y ocultar los modales
                    function showModal(modalElement) {
                        modalElement.style.display = "block";
                    }

                    function closeModal(modalElement) {
                        modalElement.style.display = "none";
                    }

                    // Manejadores de eventos de clic para las ventanas emergentes
                    enviarBtn.onclick = function () {
                        showModal(modal);
                    };
                    closeBtnModal.onclick = function () {
                        closeModal(modal);
                    };

                    enviarFBBtn.onclick = function () {
                        showModal(feedbackFormModal);
                    };
                    closeBtnFeedbackForm.onclick = function () {
                        closeModal(feedbackFormModal);
                    };

                    // Cerrar las ventanas emergentes al hacer clic fuera de ellas
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            closeModal(modal);
                        } else if (event.target == feedbackFormModal) {
                            closeModal(feedbackFormModal);
                        }
                    };

                    // Selección de elementos de la ventana emergente de Feedback
                    const feedbackBtns = document.querySelectorAll(".feedbackBtn"); // Selecciona todos los botones Feedback en la tabla
                    const feedbackModal = document.getElementById("feedbackModal");
                    const closeBtnFeedback = document.querySelector(".close.feedback-close"); // Botón de cerrar específico del feedback

                    feedbackBtns.forEach(button => {
                        button.onclick = function () {
                            showModal(feedbackModal); // Mostrar el popup al hacer clic en el botón Feedback
                        };
                    });

                    closeBtnFeedback.onclick = function () {
                        closeModal(feedbackModal); // Cerrar el popup
                    };

                    window.onclick = function (event) {
                        if (event.target == feedbackModal) {
                            closeModal(feedbackModal); // Cerrar el popup si se hace clic fuera del mismo
                        }
                    };
                },
                0
            );
            break;

        case 'formulario-focus':
            content.innerHTML = `
                <div class="filter-box">
                    <h1 id="titulo_h1"> FORMULARIO FOCUS GROUP</h1>
                    <h2 id="focus-group-header"> Criterios de búsqueda </h2>
                    <label>Consecutivo: <input type="text"></label>
                    <label>Fecha Registro: <input type="text"></label>
                    <button id="buscarBtn">Buscar</button>
                    <button id="enviarBtn">Enviar</button>
                    <button id="enviarFBBtn">Enviar FeedBack</button>
                </div>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Consecutivo</th>
                                <th>Nombre Focus Group</th>
                                <th>Nombre Integrante</th>
                                <th>Documento</th>
                                <th>Usuario</th>
                                <th>Área</th>
                                <th>Motivo</th>
                                <th>Fecha Registro</th>
                                <th>Observaciones</th> <!-- Nueva columna para el botón Feedback -->
                                <th></th> <!-- Nueva columna para DETALLES -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" name="rowSelect" value="1"></td>
                                <td>001</td>
                                <td>Grupo Innovación</td>
                                <td>Laura Martínez</td>
                                <td>12345678</td>
                                <td>laura.martinez</td>
                                <td>Desarrollo</td>
                                <td>Revisión de procesos</td>
                                <td>25-08-2024</td> 
                                <td><button class="feedbackBtn">Feedback</button></td> <!-- Botón Feedback en cada fila -->
                                <td><button class="detailsBtn">DETALLES</button></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="rowSelect" value="1"></td>
                                <td>002</td>
                                <td>Grupo Calidad</td>
                                <td>José Pérez</td>
                                <td>87654321</td>
                                <td>jose.perez</td>
                                <td>Calidad</td>
                                <td>Evaluación de resultados</td>
                                <td>25-08-2024</td>
                                <td><button class="feedbackBtn">Feedback</button></td> <!-- Botón Feedback en cada fila -->
                                <td><button class="detailsBtn">DETALLES</button></td>
                        </tbody>
                    </table>
                </div>
                <!-- Ventana Emergente enviar -->
                    <div id="modal" class="modal">
                        <div class="modal-content">
                            <span class="close general-close">&times;</span> <!-- Cambiado a general-close -->
                                <h2>ENVÍO ÉXITOSO</h2>
                                <p>Buenas Tardes NOMBRE USUARIO.
                                Soy Tatiana Ortiz del Depto. de Servicios de Tecnología de EAFIT, estoy en el proceso de evaluación de Atención del servicio al Cliente. Y quería saber si usted me puede brindar 5 minutos. 
                                Quiero hablar con Usted sobre el resultado de la encuesta y calidad del servicio prestado, 
                                que se realizó el FECHA REGISTRO ENCUESTA caso Aranda TIPO CASO</p>
                           <!-- <button id="closeModalBtn">Cerrar</button> -->
                        </div>
                    </div>

                    <!-- Ventana Emergente específica para Feedback -->
                    <div id="feedbackFormModal" class="modal">
                        <div class="modal-content">
                            <span class="close feedback-form-close">&times;</span> <!-- Cambiado a feedback-form-close -->
                            <h2>Enviar Feedback</h2>
                            <p>Contenido específico para enviar Feedback...</p>
                          <!--  <button id="closeFeedbackFormBtn">Cerrar</button> -->
                        </div>
                    </div>

                    <!-- Ventana Emergente de Feedback (para botones en la tabla) -->
                    <div id="feedbackModal" class="modal">
                        <div class="modal-content">
                            <span class="close feedback-close">&times;</span> <!-- Cambiado a feedback-close -->
                            <h2>Ingrese Feedback</h2>
                            <label for="rating">Indique cantidad de contacto:</label>
                            <select id="rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br><br>
                            <textarea id="feedbackInput" placeholder="Escriba su feedback aquí..."></textarea>
                            <br><br>
                            <button id="enviarFeedbackBtn">Guardar Feedback</button> <!-- Botón Enviar Feedback -->
                        </div>
                    </div>
                     <!-- Ventana Emergente de DETALLES -->
                        <div id="detailsModal" class="modal">
                            <div class="modal-content">
                                <span class="close details-close">&times;</span>
                                <h2>Detalles del Focus Group</h2>
                                    <p><strong>Nombre Focus Group:</strong> <span id="modalFormulario"></span></p>
                                    <p><strong>Nombre Integrantes:</strong> <span id="modalDescripcion"></span></p>
                                    <p><strong>Fecha de Cierre:</strong> <span id="modalFechaCierre"></span></p>
                                    <p><strong>Observaciones:</strong> <span id="modalObservaciones"></span></p>
                                    <textarea id="feedbackInput" placeholder="Escriba su feedback aquí..."></textarea>
                              <!--  <button id="closeDetailsModalBtn">Cerrar</button> -->
                            </div>
                        </div>
                    `;

            // JavaScript para manejar las ventanas emergentes
            setTimeout(() => {
                const modal = document.getElementById("modal");
                const closeBtnModal = document.querySelector(".close.general-close");
                const enviarBtn = document.getElementById("enviarBtn");

                const feedbackFormModal = document.getElementById("feedbackFormModal");
                const closeBtnFeedbackForm = document.querySelector(
                    ".close.feedback-form-close"
                );
                const enviarFBBtn = document.getElementById("enviarFBBtn");

                const feedbackModal = document.getElementById("feedbackModal");
                const closeBtnFeedback = document.querySelector(".close.feedback-close");

                const detailsModal = document.getElementById("detailsModal"); // Modal de detalles
                const closeBtnDetails = document.querySelector(".close.details-close"); // Botón de cerrar específico de detalles

                function showModal(modalElement) {
                    modalElement.style.display = "block";
                }

                function closeModal(modalElement) {
                    modalElement.style.display = "none";
                }

                enviarBtn.onclick = function () {
                    showModal(modal);
                };
                closeBtnModal.onclick = function () {
                    closeModal(modal);
                };

                enviarFBBtn.onclick = function () {
                    showModal(feedbackFormModal);
                };
                closeBtnFeedbackForm.onclick = function () {
                    closeModal(feedbackFormModal);
                };

                const feedbackBtns = document.querySelectorAll(".feedbackBtn");
                feedbackBtns.forEach(button => {
                    button.onclick = function () {
                        showModal(feedbackModal);
                    };
                });

                closeBtnFeedback.onclick = function () {
                    closeModal(feedbackModal);
                };

                const detailsBtns = document.querySelectorAll(".detailsBtn");
                detailsBtns.forEach(button => {
                    button.onclick = function () {
                        showModal(detailsModal); // Mostrar el popup de detalles
                    };
                });

                closeBtnDetails.onclick = function () {
                    closeModal(detailsModal); // Cerrar el popup de detalles
                };

                window.onclick = function (event) {
                    if (event.target === modal) {
                        closeModal(modal);
                    } else if (event.target === feedbackFormModal) {
                        closeModal(feedbackFormModal);
                    } else if (event.target === feedbackModal) {
                        closeModal(feedbackModal);
                    } else if (event.target === detailsModal) {
                        closeModal(detailsModal); // Cerrar el modal de detalles
                    }
                };
            }, 0);
            break;
            case 'feedback':
                content.innerHTML = `
                    <div class="filter-box">
                        <h1 id="titulo_h1">Confirmar Feedback</h1>
                        <h2 id="focus-group-header">Criterios de búsqueda</h2>
                        <label for="estadoFeedbackFilter">Estado Feedback:</label>
                        <select id="estadoFeedbackFilter">
                            <option value="">Todos</option>
                            <option value="PENDIENTE">PENDIENTE</option>
                            <option value="REVISADO">REVISADO</option>
                            <option value="CANCELADO SIN CONTACTO">CANCELADO SIN CONTACTO</option>
                            <option value="CANCELADO CON CONTACTO">CANCELADO CON CONTACTO</option>
                        </select>
                        <label for="fechaEnvioFilter">Fecha de Envío:</label>
                        <input type="date" id="fechaEnvioFilter">
                        <label for="responsableFeedbackFilter">Responsable Feedback:</label>
                        <input type="text" id="responsableFeedbackFilter">
                        <button id="buscarBtn">Buscar</button>
                        <button id="enviarRecordatoriosBtn">Enviar Recordatorios Automáticos</button>
                    </div>
            
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Consecutivo</th>
                                    <th>Nombre del Formulario</th>
                                    <th>Fecha de Envío Feedback</th>
                                    <th>Responsable Feedback</th>
                                    <th>Estado</th>
                                    <th>Detalles</th>
                                    <th>Cambiar Estado</th>
                                </tr>
                            </thead>
                            <tbody id="feedbackTableBody">
                                <!-- Las filas se agregarán dinámicamente aquí -->
                            </tbody>
                        </table>
                    </div>
            
                    <!-- Modal para Detalles del Feedback -->
                    <div id="detailsModal" class="modal" style="display: none;">
                        <div class="modal-content">
                            <span class="close details-close">&times;</span>
                            <h2>Detalles del Feedback</h2>
                            <p><strong>Consecutivo:</strong> <span id="modalConsecutivo"></span></p>
                            <p><strong>Nombre del Formulario:</strong> <span id="modalFormulario"></span></p>
                            <p><strong>Fecha de Envío Feedback:</strong> <span id="modalFechaEnvio"></span></p>
                            <p><strong>Responsable Feedback:</strong> <span id="modalResponsable"></span></p>
                            <p><strong>Estado:</strong> <span id="modalEstado"></span></p>
                        </div>
                    </div>
                `;
            
                setTimeout(() => {
                    const feedbackTableBody = document.getElementById("feedbackTableBody");
                    const detailsModal = document.getElementById("detailsModal");
                    const closeDetails = document.querySelector(".details-close");
            
                    // Ejemplo de datos
                    const exampleFeedbacks = [
                        {
                            consecutivo: 1,
                            formulario: 'Formulario 1',
                            fechaEnvio: '2024-09-01',
                            responsable: 'Juan Pérez',
                            estado: 'PENDIENTE'
                        }, {
                            consecutivo: 2,
                            formulario: 'Formulario 2',
                            fechaEnvio: '2024-09-02',
                            responsable: 'Ana Gómez',
                            estado: 'REVISADO'
                        }
                    ];
            
                    // Función para cargar los datos en la tabla
                    function loadTableData(data) {
                        feedbackTableBody.innerHTML = '';
                        data.forEach(item => {
                            const row = document.createElement('tr');
                            row.innerHTML = `
                                <td><input type="checkbox" name="rowSelect" value="${item.consecutivo}"></td>
                                <td>${item.consecutivo}</td>
                                <td>${item.formulario}</td>
                                <td>${item.fechaEnvio}</td>
                                <td>${item.responsable}</td>
                                <td>${item.estado}</td>
                                <td><button class="details-btn" data-details='${JSON.stringify(item)}'>Detalles</button></td>
                                <td>
                                    <select class="estadoFeedbackSelect">
                                        <option value="PENDIENTE">PENDIENTE</option>
                                        <option value="REVISADO">REVISADO</option>
                                        <option value="CANCELADO SIN CONTACTO">CANCELADO SIN CONTACTO</option>
                                        <option value="CANCELADO CON CONTACTO">CANCELADO CON CONTACTO</option>
                                    </select>
                                    <br><br>
                                    <button class="confirmarBtn">CONFIRMAR</button>
                                </td>
                            `;
                            feedbackTableBody.appendChild(row);
                        });
                    }
            
                    loadTableData(exampleFeedbacks);
            
                    // Mostrar detalles en modal
                    document.addEventListener('click', function (e) {
                        if (e.target && e.target.classList.contains('details-btn')) {
                            const data = JSON.parse(e.target.getAttribute('data-details'));
                            document.getElementById('modalConsecutivo').textContent = data.consecutivo;
                            document.getElementById('modalFormulario').textContent = data.formulario;
                            document.getElementById('modalFechaEnvio').textContent = data.fechaEnvio;
                            document.getElementById('modalResponsable').textContent = data.responsable;
                            document.getElementById('modalEstado').textContent = data.estado;
                            detailsModal.style.display = 'block';
                        }
                    });
            
                    // Cerrar modal de detalles
                    closeDetails.addEventListener('click', function () {
                        detailsModal.style.display = 'none';
                    });
            
                    // Función para confirmar el estado del Feedback
                    document.querySelectorAll('.confirmarBtn').forEach(button => {
                        button.addEventListener('click', function () {
                            const row = this.closest('tr');
                            const selectedEstado = row.querySelector('.estadoFeedbackSelect').value;
                            const consecutivo = row.cells[1].textContent;
            
                            // Mostrar ventana emergente
                            if (selectedEstado === "REVISADO") {
                                alert(`Feedback ${consecutivo} enviado a la pestaña Asignar responsable con estado ${selectedEstado}.`);
                            } else {
                                alert(`Feedback ${consecutivo} enviado a la pantalla CERRADOS con estado ${selectedEstado}.`);
                            }
                        });
                    });
            
                    // Función para enviar recordatorios automáticos
                    document.getElementById('enviarRecordatoriosBtn').addEventListener('click', function () {
                        alert("Recordatorios automáticos enviados a los analistas para Feedbacks pendientes.");
                    });
            
                }, 0);
                break;
        case 'citas-agendadas':
            content.innerHTML = `
                            <div class="filter-box">
                                <h1 id="titulo_h1"> CITAS AGENDADAS</h1>
                                <h2 id="focus-group-header"> Criterios de búsqueda </h2>
                                <label>Fecha Cita: <input type="date" id="fechaCitaFilter"></label>
                                <label>Estado Cita: 
                                    <select id="estadoCitaFilter">
                                        <option value="">Todos</option>
                                        <option value="PENDIENTE">PENDIENTE</option>
                                        <option value="COMPLETADA">COMPLETADA</option>
                                        <option value="REPROGRAMADA">REPROGRAMADA</option>
                                        <option value="CANCELADA">CANCELADA</option>
                                    </select>
                                </label>
                                <label>Responsable Cita: <input type="text" id="responsableCitaFilter"></label>
                                <button id="buscarBtn">Buscar</button>
                                <button id="enviarRecordatoriosCitasBtn">Enviar Recordatorios Automáticos</button>
                            </div>
                            <div class="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Consecutivo Cita</th>
                                            <th>Descripción Cita</th>
                                            <th>Tipo Solicitud</th>
                                            <th>Fecha de la cita</th>
                                            <th>Responsable</th>
                                            <th>Estado de la cita</th>
                                            <th>Usuario</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" name="rowSelect" value="1"></td>
                                            <td>001</td>
                                            <td>Grupo Innovación</td>
                                            <td>Fromulario Dirección de TI</td>
                                            <td>2024-09-01</td>
                                            <td>LAURA MARTINEZ</td>
                                            <td>PENDIENTE</td>
                                            <td>lmartinez</td>
                                            <td>
                                                <button class="detalleBtn">DETALLE</button>
                                                <button class="reprogramarBtn">REPROGRAMAR</button>
                                                <button class="cancelarBtn">CANCELAR</button>
                                            </td>
                                        </tr>
                                        <!-- Más filas pueden ser añadidas dinámicamente -->
                                    </tbody>
                                </table>
                            </div>
                             <!-- Ventana Emergente para Detalle de Cita -->
                                <div id="detalleModal" class="modal" style="display: none;">
                                    <div class="modal-content-citas">
                                        <span class="close detalle-close">&times;</span>
                                        <h2>Detalles del Plan</h2>
                                        <p><strong>Consecutivo Cita:</strong><span id="modalConsecutivo"> 001</span></p>
                                        <p><strong>Descripción Cita:</strong> <span id="modalFormulario"> Grupo Innovación</span></p>
                                        <p><strong>Tipo Solicitud:</strong> <span id="modalDescripcion"> Formulario Dirección de TI</span></p>
                                        <p><strong>Fecha de la cita:</strong> <span id="modalFechaCierre"> 2024-09-01</span></p>
                                        <p><strong>Responsable:</strong> <span id="modalResponsable"> LAURA MARTINEZ</span></p>
                                        <p><strong>Estado de la cita:</strong> <span id="modalResultado"> PENDIENTE</span></p>
                                        <p><strong>Usuario:</strong> <span id="modalObservaciones"> lmartinez</span></p>
                                        <button id="closeDetalleBtn">Cerrar</button>
                                    </div>
                                </div>

                            <!-- Ventana Emergente para Reprogramar Cita -->
                            <div id="reprogramarModal" class="modal">
                                <div class="modal-content-repro">
                                    <span class="close reprogramar-close">&times;</span>
                                    <h2>Reprogramar Cita</h2>
                                    <label>Fecha de la nueva cita: <input type="date" id="nuevaFechaCita"></label>
                                    <label>Lugar de la nueva cita: <input type="text" id="nuevoLugarCita"></label>
                                    <br><br>
                                    <button id="guardarReprogramarBtn">Guardar Cambios</button>
                                   <!-- <button id="closeReprogramarBtn">Cerrar</button> -->
                                </div>
                            </div>

                            <!-- Ventana Emergente para Cancelar Cita -->
                            <div id="cancelarModal" class="modal">
                                <div class="modal-content-cancelar">
                                    <span class="close cancelar-close">&times;</span>
                                    <h2>Cancelar Cita</h2>
                                    <p>¿Está seguro de que desea cancelar esta cita?</p>
                                    <button id="confirmarCancelarBtn">Sí, Cancelar</button>
                                  <!--  <button id="closeCancelarBtn">Cerrar</button> -->
                                </div>
                            </div>

                            <!-- Notificación de Alertas de Citas Pendientes 
                            <div id="alertasCitasPendientes" class="alertas">
                                <p>¡Atención! Tienes citas pendientes por confirmar o reprogramar.</p>
                            </div> -->

                            <!-- Botón de Recordatorios Automáticos
                            <div id="recordatoriosCitas" class="recordatorios">
                                <button id="enviarRecordatoriosCitasBtn">Enviar Recordatorios Automáticos</button>
                            </div> -->
                        `;

            setTimeout(() => {
                // Función para mostrar u ocultar ventanas emergentes
                function showModal(modalElement) {
                    modalElement.style.display = "block";
                }

                function closeModal(modalElement) {
                    modalElement.style.display = "none";
                }

                // Manejo del Modal de Detalles
                document
                    .querySelectorAll('.detalleBtn')
                    .forEach(button => {
                        button.onclick = function () {
                            showModal(document.getElementById("detalleModal"));
                        };
                    });

                document
                    .querySelector(".close.detalle-close")
                    .onclick = function () {
                        closeModal(document.getElementById("detalleModal"));
                    };

                // Manejo del Modal de Reprogramar
                document
                    .querySelectorAll('.reprogramarBtn')
                    .forEach(button => {
                        button.onclick = function () {
                            showModal(document.getElementById("reprogramarModal"));
                        };
                    });

                document
                    .querySelector(".close.reprogramar-close")
                    .onclick = function () {
                        closeModal(document.getElementById("reprogramarModal"));
                    };

                document
                    .getElementById("guardarReprogramarBtn")
                    .onclick = function () {
                        alert("La cita ha sido reprogramada.");
                        closeModal(document.getElementById("reprogramarModal"));
                    };

                // Manejo del Modal de Cancelar
                document
                    .querySelectorAll('.cancelarBtn')
                    .forEach(button => {
                        button.onclick = function () {
                            showModal(document.getElementById("cancelarModal"));
                        };
                    });

                document
                    .querySelector(".close.cancelar-close")
                    .onclick = function () {
                        closeModal(document.getElementById("cancelarModal"));
                    };

                document
                    .getElementById("confirmarCancelarBtn")
                    .onclick = function () {
                        alert("La cita ha sido cancelada.");
                        closeModal(document.getElementById("cancelarModal"));
                    };

                // Función para enviar recordatorios automáticos
                document
                    .getElementById('enviarRecordatoriosCitasBtn')
                    .addEventListener('click', function () {
                        alert(
                            "Recordatorios automáticos enviados a los usuarios sobre citas próximas."
                        );
                    });

                // Función para mostrar alertas de citas pendientes
                function mostrarAlertaPendientes() {
                    const alerta = document.getElementById('alertasCitasPendientes');
                    alerta.style.display = 'block'; // Muestra la alerta
                }

                // Llamar a la función para mostrar la alerta de citas pendientes
                mostrarAlertaPendientes();

                // Manejador para cerrar los modales al hacer clic fuera de ellos
                window.onclick = function (event) {
                    if (event.target.classList.contains('modal')) {
                        closeModal(event.target);
                    }
                };
            }, 0);
            break;
        case 'Responsables':
            content.innerHTML = `
                    <!-- Criterios de búsqueda -->
                    <div class="filter-box">
                        <h1 id="titulo_h1">ASIGNAR RESPONSABLES</h1>
                        <h2 id="focus-group-header">Criterios de búsqueda</h2>
                        <label>RESPONSABLE: <input type="text"></label>
                        <label>TIPO SOLICITUD:
                            <select id="tipoSolicitud">
                                <option value="Formulario Dirección de TI">Formulario Dirección de TI</option>
                                <option value="Formulario Proyecto">Formulario Proyecto</option>
                                <option value="Formulario Tickets">Formulario Tickets</option>
                                <option value="Formulario Llamadas Linea Saul">Formulario Llamadas Linea Saul</option>
                                <option value="Formulario Focus Group">Formulario Focus Group</option>
                            </select>
                        </label>
                         <label for="fechaRegistro">Fecha Asignado:</label>
                        <input type="date" id="fechaRegistro">
                        <button id="buscarBtn">Buscar</button>
                    </div>
            
                    <!-- Tabla de registros -->
                    <div class="table-container">
                        <table id="feedbackTable">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Consecutivo</th>
                                    <th>Tipo Solicitud</th>
                                    <th>Responsable</th>
                                    <th>Detalles</th>
                                    <th>Estado FeedBack</th>
                                    <th>Fecha Asignado</th>
                                    <th>Asignar Responsable</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Ejemplo de registro -->
                                <tr>
                                    <td><input type="checkbox" class="rowSelect" value="1"></td>
                                    <td>1</td>
                                    <td>Formulario Dirección de TI</td>
                                    <td></td>
                                    <td><button class="detallesBtn">Detalles</button></td>
                                    <td>Revisado</td>
                                    <td></td>
                                    <td><button class="asignarBtn">ASIGNAR RESPONSABLE</button></td>
                                </tr>
                                <!-- Agrega más registros según sea necesario -->
                            </tbody>
                        </table>
                    </div>
            
                    <!-- Ventana emergente para Asignar Responsable -->
                    <div id="assignModal" class="modal" style="display: none;">
                        <div class="modal-content">
                            <span class="close assign-close">&times;</span>
                            <h2>Asignar Responsable</h2>
                            <label for="liderPrincipal">Líder Principal:</label>
                            <div id="ccListContainer">
                            <select id="liderPrincipal" required>
                                <option value="">Seleccione un líder principal</option>
                                <option value="lider1">Líder 1</option>
                                <option value="lider2">Líder 2</option>
                                <!-- Agregar más opciones según sea necesario -->
                            </select>
                            </div>
                            <br><br>
                            <label for="ccList">Con Copia (CC):</label>
                            <div id="ccListContainer">
                                <select id="ccList">
                                    <option value="">Seleccione una persona</option>
                                    <option value="persona1">Persona 1</option>
                                    <option value="persona2">Persona 2</option>
                                    <!-- Agregar más opciones según sea necesario -->
                                </select>
                                <button type="button" id="addCcBtn">Añadir</button>
                            </div>
                            <div id="ccContainer"></div> <!-- Contenedor dinámico para agregar N cantidad de personas -->
                            <br>
                            <button id="confirmAssignBtn">Confirmar Asignación</button>
                        </div>
                    </div>
            
                    <!-- Ventana emergente para Detalles -->
                    <div id="detailsModal" class="modal" style="display: none;">
                        <div class="modal-content">
                            <span class="close details-close">&times;</span>
                            <h2>Detalles del FeedBack</h2>
                            <p>Detalles del registro de FeedBack aparecerán aquí.</p>
                        </div>
                    </div>
                `;

            // Funcionalidad para asignar responsable
            const assignBtns = document.querySelectorAll(".asignarBtn");
            const assignModal = document.getElementById("assignModal");
            const closeAssignBtn = document.querySelector(".close.assign-close");
            const confirmAssignBtn = document.getElementById("confirmAssignBtn");
            const liderPrincipalSelect = document.getElementById("liderPrincipal");
            const ccContainer = document.getElementById("ccContainer");
            const addCcBtn = document.getElementById("addCcBtn");
            const ccList = document.getElementById("ccList");
            const feedbackTable = document.getElementById("feedbackTable");

            // Manejar asignación de responsable
            assignBtns.forEach(btn => {
                btn.addEventListener("click", function () {
                    assignModal.style.display = "block";
                });
            });

            // Cerrar ventana emergente de asignación
            closeAssignBtn.addEventListener("click", function () {
                assignModal.style.display = "none";
            });

            // Confirmar asignación de responsable
            confirmAssignBtn.addEventListener("click", function () {
                const selectedLeader = liderPrincipalSelect.value;
                if (selectedLeader) {
                    // Asignar responsable a los registros seleccionados
                    const selectedRows = feedbackTable.querySelectorAll(".rowSelect:checked");
                    selectedRows.forEach(row => {
                        const rowParent = row.parentNode.parentNode;
                        rowParent
                            .cells[3]
                            .innerText = selectedLeader; // Asignar el líder seleccionado
                        rowParent
                            .cells[6]
                            .innerText = new Date().toLocaleDateString(); // Fecha de asignación
                        row.checked = false; // Desmarcar después de asignar
                    });
                    assignModal.style.display = "none";
                    alert("¡Asignación confirmada!");
                } else {
                    alert("Por favor, seleccione un líder principal.");
                }
            });

            // Añadir personas en CC
            addCcBtn.addEventListener("click", function () {
                const selectedPerson = ccList.value;
                if (selectedPerson) {
                    const newPerson = document.createElement("p");
                    newPerson.textContent = selectedPerson;
                    ccContainer.appendChild(newPerson);
                }
            });

            // Funcionalidad para mostrar detalles
            const detailsBtns = document.querySelectorAll(".detallesBtn");
            const detailsModal = document.getElementById("detailsModal");
            const closeDetailsBtn = document.querySelector(".close.details-close");

            detailsBtns.forEach(btn => {
                btn.addEventListener("click", function () {
                    detailsModal.style.display = "block";
                });
            });

            closeDetailsBtn.addEventListener("click", function () {
                detailsModal.style.display = "none";
            });

            break;
        case 'con-Responsable':
            content.innerHTML = `
                    <div class="filter-box">
                        <h1 id="titulo_h1">CONSULTAR RESPONSABLE</h1>
                        <h2 id="focus-group-header">Criterios de búsqueda</h2>
                        <label>TIPO SOLICITUD:
                            <select id="tipoSolicitud">
                                <option value="Formulario Dirección de TI">Formulario Dirección de TI</option>
                                <option value="Formulario Proyecto">Formulario Proyecto</option>
                                <option value="Formulario Tickets">Formulario Tickets</option>
                                <option value="Formulario Llamadas Linea Saul">Formulario Llamadas Linea Saul</option>
                                <option value="Formulario Focus Group">Formulario Focus Group</option>
                            </select>
                        <label for="responsable">Responsable:</label>
                        <input type="text" id="responsable">
                        <label for="fechaRegistro">Fecha Registro:</label>
                        <input type="date" id="fechaRegistro">
                        <button id="buscarBtn">Buscar</button>
                    </div>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Consecutivo</th>
                                    <th>Tipo Solicitud</th>
                                    <th>Responsable</th>
                                    <th>Detalles</th>
                                    <th>Estado Feedback</th>
                                    <th>Cambiar Estado</th>
                                </tr>
                            </thead>
                            <tbody id="formTableBody">
                                <!-- Las filas se agregarán dinámicamente aquí -->
                            </tbody>
                        </table>
                    </div>
                    <!-- Ventana emergente para Detalles del Feedback -->
                    <div id="detaillsModal" class="modal">
                        <div class="modal-content-responsables">
                            <span class="close details-close">&times;</span>
                            <h2>Detalles del Feedback</h2>
                            <p><strong>Consecutivo:</strong> <span id="modalConsecutivo"></span></p>
                            <p><strong>Fecha Registro Feedback:</strong> <span id="modalFechaRegistro"></span></p>
                            <p><strong>Detalles:</strong> <span id="modalDetalles"></span></p>
                        </div>
                    </div>
                    <!-- Ventana emergente para Cambiar Estado -->
                    <div id="changeStateModal" class="modal">
                        <div class="modal-content-estado">
                            <span class="close change-state-close">&times;</span>
                            <h2>Cambiar Estado del Feedback</h2>
                            <label for="newState">Nuevo Estado:</label>
                            <select id="newState" required>
                                <option value="pendiente">Pendiente</option>
                                <option value="revisado">Revisado</option>
                                <option value="canceladoSinContacto">Cancelado Sin Contacto</option>
                                <option value="canceladoConContacto">Cancelado Con Contacto</option>
                            </select>
                            <br><br>
                            <label for="motivoCambio">Motivo Cambio Estado:</label>
                            <textarea id="motivoCambio" rows="4"></textarea>
                            <br><br>
                            <button id="confirmChangeStateBtn">Confirmar Cambio</button>
                        </div>
                    </div>
                `;
            setTimeout(() => {
                // Seleccionar elementos del DOM
                const formTableBody = document.getElementById("formTableBody");
                const buscarBtn = document.getElementById("buscarBtn");
                const detaillsModal = document.getElementById("detaillsModal");
                const changeStateModal = document.getElementById("changeStateModal");
                const closeDetails = document.querySelector(".details-close");
                const closeChangeState = document.querySelector(".change-state-close");

                // Ejemplo de datos
                const exampleData = [
                    {
                        consecutivo: 1,
                        tipo: 'Formulario Dirección de TI',
                        responsable: 'Responsable 1',
                        detalles: 'Detalles del Feedback 1',
                        estado: 'Pendiente',
                        fecha: '2024-08-25'
                    }, {
                        consecutivo: 2,
                        tipo: 'Formulario Dirección de TI',
                        responsable: 'Responsable 2',
                        detalles: 'Detalles del Feedback 2',
                        estado: 'Revisado',
                        fecha: '2024-08-26'
                    }
                ];

                // Función para cargar los datos en la tabla
                function loadTableData(data) {
                    formTableBody.innerHTML = '';
                    data.forEach(item => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
            <td><input type="checkbox" name="rowSelect" value="${item
                            .consecutivo}"></td>
            <td>${item
                            .consecutivo}</td>
            <td>${item
                            .tipo}</td>
            <td>${item
                            .responsable}</td>
            <td><button class="details-btn" data-details='${JSON
                            .stringify(item)}'>Ver Detalles</button></td>
            <td>
                <select class="estado-select">
                    <option value="pendiente" ${item
                            .estado === 'Pendiente'
                                ? 'selected'
                                : ''}>Pendiente</option>
                    <option value="revisado" ${item.estado === 'Revisado'
                                    ? 'selected'
                                    : ''}>Revisado</option>
                    <option value="canceladoSinContacto" ${item.estado === 'Cancelado Sin Contacto'
                                        ? 'selected'
                                        : ''}>Cancelado Sin Contacto</option>
                    <option value="canceladoConContacto" ${item.estado === 'Cancelado Con Contacto'
                                            ? 'selected'
                                            : ''}>Cancelado Con Contacto</option>
                </select>
            </td>
            <td><button class="change-state-btn" data-consecutivo="${item.consecutivo}">Cambiar Estado</button></td>
        `;
                        formTableBody.appendChild(row);
                    });
                }

                loadTableData(exampleData);

                // Mostrar detalles en modal
                document.addEventListener('click', function (e) {
                    if (e.target && e.target.classList.contains('details-btn')) {
                        const data = JSON.parse(e.target.getAttribute('data-details'));
                        document
                            .getElementById('modalConsecutivo')
                            .textContent = data.consecutivo;
                        document
                            .getElementById('modalFechaRegistro')
                            .textContent = data.fecha;
                        document
                            .getElementById('modalDetalles')
                            .textContent = data.detalles;
                        detaillsModal.style.display = 'block';
                    }

                    if (e.target && e.target.classList.contains('change-state-btn')) {
                        const consecutivo = e
                            .target
                            .getAttribute('data-consecutivo');
                        // Aquí puedes almacenar el consecutivo para usarlo al confirmar el cambio de
                        // estado
                        changeStateModal.style.display = 'block';
                    }
                });

                // Cerrar modales
                closeDetails.addEventListener('click', function () {
                    detaillsModal.style.display = 'none';
                });

                closeChangeState.addEventListener('click', function () {
                    changeStateModal.style.display = 'none';
                });

                // Confirmar cambio de estado
                document
                    .getElementById('confirmChangeStateBtn')
                    .addEventListener('click', function () {
                        const newState = document
                            .getElementById('newState')
                            .value;
                        const motivoCambio = document
                            .getElementById('motivoCambio')
                            .value;
                        // Aquí puedes implementar la lógica para actualizar el estado del feedback en
                        // el backend
                        alert(`Estado cambiado a ${newState}. Motivo: ${motivoCambio}`);
                        changeStateModal.style.display = 'none';
                    });

                // Funcionalidad para el botón Buscar
                buscarBtn.addEventListener('click', function () {
                    const tipoFormulario = document
                        .getElementById('tipoFormulario')
                        .value;
                    const responsable = document
                        .getElementById('responsable')
                        .value;
                    const fechaRegistro = document
                        .getElementById('fechaRegistro')
                        .value;

                    // Aquí puedes implementar la lógica para filtrar los datos según los criterios
                    // de búsqueda
                    alert(
                        `Buscar por Tipo Formulario: ${tipoFormulario}, Responsable: ${responsable}, Fecha Registro: ${fechaRegistro}`
                    );
                });
            }, 0);
            break;
        case 'MisPlanes':
            content.innerHTML = `
                        <div class="filter-box">
                            <h1 id="titulo_h1">Mis Planes</h1>
                            <h2 id="focus-group-header">Criterios de búsqueda</h2>
                            <label for="estadoPlan">Estado Plan:</label>
                            <select id="estadoPlan">
                                <option value="">Seleccione un estado</option>
                                <option value="creado">Creado</option>
                                <option value="enProgreso">En Progreso</option>
                                <option value="cerrado">Cerrado</option>
                                <option value="rechazado">Rechazado</option>
                            </select>
                            <label for="responsablePlan">Responsable Plan:</label>
                            <input type="text" id="responsablePlan">
                            <label for="fechaEstado">Fecha Estado:</label>
                            <input type="date" id="fechaEstado">
                            <button id="buscarBtnM">Buscar</button>
                        </div>
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Consecutivo</th>
                                        <th>Descripción Plan</th>
                                        <th>Fecha Plan</th>
                                        <th>Responsable Plan</th>
                                        <th>Estado</th>
                                        <th>Detalles</th>
                                        <th>Asociar Plan</th>
                                    </tr>
                                </thead>
                                <tbody id="planTableBody">
                                    <!-- Las filas se agregarán dinámicamente aquí -->
                                </tbody>
                            </table>
                        </div>
                        <!-- Ventana emergente para Detalles del Plan -->
                        <div id="detailsModalM" class="modal" style="display: none;">
                            <div class="modal-content">
                                <span class="close details-close">&times;</span>
                                <h2>Detalles del Plan</h2>
                                <p><strong>Consecutivo:</strong> <span id="modalConsecutivo"></span></p>
                                <p><strong>Descripción Plan:</strong> <span id="modalDescripcionPlan"></span></p>
                                <p><strong>Fecha Plan:</strong> <span id="modalFechaPlan"></span></p>
                                <p><strong>Responsable Plan:</strong> <span id="modalResponsablePlan"></span></p>
                                <p><strong>Estado:</strong> <span id="modalEstado"></span></p>
                                <p><strong>Detalles del Feedback:</strong> <span id="modalDetallesFeedback"></span></p>
                                <label for="feedbackEstado">Estado Feedback:</label>
                                <select id="feedbackEstado" required>
                                    <option value="aprobado">Aprobado</option>
                                    <option value="cancelado">Cancelado</option>
                                </select>
                                <br><br>
                                <label for="motivoCancelacion">Motivo Cancelación:</label>
                                <br>
                                <textarea id="motivoCancelacion" rows="4"></textarea>
                                <br><br>
                                <button id="confirmFeedbackBtn">Confirmar</button>
                            </div>
                        </div>
                        <!-- Enlace para Generar Plan de Acción -->
                        <div id="generatePlanLink" style="display: none;">
                            <a href="generar_plan_accion.html">Generar Plan de Acción</a>
                        </div>
                    `;

            // Seleccionar elementos del DOM
            const planTableBody = document.getElementById("planTableBody");
            const buscarBtnM = document.getElementById("buscarBtnM");
            const detailsModalM = document.getElementById("detailsModalM");
            const closeDetailsM = document.querySelector(".details-close");
            const generatePlanLink = document.getElementById("generatePlanLink");

            // Ejemplo de datos
            const examplePlans = [
                {
                    consecutivo: 1,
                    descripcion: 'Plan 1',
                    fecha: '2024-08-25',
                    responsable: 'Líder 1',
                    estado: 'Creado',
                    detallesFeedback: 'Feedback 1'
                }, {
                    consecutivo: 2,
                    descripcion: 'Plan 2',
                    fecha: '2024-08-26',
                    responsable: 'Líder 2',
                    estado: 'En Progreso',
                    detallesFeedback: 'Feedback 2'
                }
            ];

            // Función para cargar los datos en la tabla
            function loadTableData(data) {
                planTableBody.innerHTML = ''; // Limpiar el contenido de la tabla antes de añadir nuevas filas

                data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
            <td><input type="checkbox" name="rowSelect" value="${item.consecutivo}"></td>
            <td>${item.consecutivo}</td>
            <td>${item.descripcion}</td>
            <td>${item.fecha}</td>
            <td>${item.responsable}</td>
            <td>${item.estado}</td>
            <td><button class="details-btn" data-details='${JSON.stringify(
                                        item
                                    )}'>Detalles</button></td>
            <td>Consecutivo Formulario</td>
        `;
                    planTableBody.appendChild(row);
                });
            }

            loadTableData(examplePlans);

            // Mostrar detalles en modal
            document.addEventListener('click', function (e) {
                if (e.target && e.target.classList.contains('details-btn')) {
                    const data = JSON.parse(e.target.getAttribute('data-details'));
                    document
                        .getElementById('modalConsecutivo')
                        .textContent = data.consecutivo;
                    document
                        .getElementById('modalDescripcionPlan')
                        .textContent = data.descripcion;
                    document
                        .getElementById('modalFechaPlan')
                        .textContent = data.fecha;
                    document
                        .getElementById('modalResponsablePlan')
                        .textContent = data.responsable;
                    document
                        .getElementById('modalEstado')
                        .textContent = data.estado;
                    document
                        .getElementById('modalDetallesFeedback')
                        .textContent = data.detallesFeedback;
                    detailsModalM.style.display = 'block';
                }
            });

            // Cerrar modal de detalles
            closeDetailsM.addEventListener('click', function () {
                detailsModalM.style.display = 'none';
            });

            // Confirmar Feedback
            document
                .getElementById('confirmFeedbackBtn')
                .addEventListener('click', function () {
                    const feedbackEstado = document
                        .getElementById('feedbackEstado')
                        .value;
                    const motivoCancelacion = document
                        .getElementById('motivoCancelacion')
                        .value;
                    // Aquí puedes implementar la lógica para aprobar o cancelar el feedback
                    alert(
                        `Estado del Feedback: ${feedbackEstado}. Motivo de Cancelación: ${motivoCancelacion}`
                    );
                    detailsModalM.style.display = 'none';
                });

            // Funcionalidad para el botón Buscar (se pueden añadir filtros reales en lugar
            // de datos de ejemplo)
            buscarBtnM.addEventListener('click', function () {
                const estadoPlan = document
                    .getElementById('estadoPlan')
                    .value;
                const responsablePlan = document
                    .getElementById('responsablePlan')
                    .value;
                const fechaEstado = document
                    .getElementById('fechaEstado')
                    .value;

                // Aquí puedes implementar la lógica para filtrar los datos según los criterios
                // de búsqueda
                alert(
                    `Buscar por Estado Plan: ${estadoPlan}, Responsable Plan: ${responsablePlan}, Fecha Estado: ${fechaEstado}`
                );
            });

            // Funcionalidad para mostrar el enlace a Generar Plan de Acción si se
            // selecciona un plan
            document.addEventListener('change', function (e) {
                if (e.target && e.target.name === 'rowSelect') {
                    const anySelected = Array
                        .from(
                            document.querySelectorAll('input[name="rowSelect"]:checked')
                        )
                        .length > 0;
                    generatePlanLink.style.display = anySelected
                        ? 'block'
                        : 'none';
                }
            });

            break;
        case 'revision-plan-accion':
            content.innerHTML = `
                     <div class="filter-box">
            <h1 id="titulo_h1">Revisión Plan de Acción</h1>
            <h2 id="focus-group-header">Criterios de búsqueda</h2>
            <label for="estadoPlan">Estado Plan:</label>
            <select id="estadoPlan">
                <option value="">Seleccione un estado</option>
                <option value="pendiente">Pendiente</option>
                <option value="enEjecucion">En Ejecución</option>
                <option value="cerrado">Cerrado</option>
            </select>
            <label for="responsablePlan">Responsable Plan:</label>
            <input type="text" id="responsablePlan">
            <label for="fechaEstado">Fecha Estado:</label>
            <input type="date" id="fechaEstado">
            <button id="buscarBtn">Buscar</button>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Consecutivo</th>
                        <th>Descripción del Plan</th>
                        <th>Fecha de Estado</th>
                        <th>Responsable Plan</th>
                        <th>Observaciones</th>
                        <th>Estado Plan</th>
                        <th>Consecutivo Formulario</th>
                        <th>Tipo Formulario</th>
                        <th>Fecha Estimada de Cierre</th>
                        <th>Detalles</th>
                        <th>Cancelar</th>
                    </tr>
                </thead>
                <tbody id="planTableBody">
                    <!-- Las filas se agregarán dinámicamente aquí -->
                </tbody>
            </table>
        </div>

        <!-- Ventana emergente para Detalles del Plan -->
        <div id="detailsModal" class="modal" style="display: none;">
            <div class="modal-content">
                <span class="close details-close">&times;</span>
                <h2>Detalles del Plan</h2>
                <p><strong>Consecutivo:</strong> <span id="modalConsecutivo"></span></p>
                <p><strong>Descripción del Plan:</strong> <span id="modalDescripcion"></span></p>
                <p><strong>Fecha de Estado:</strong> <span id="modalFechaEstado"></span></p>
                <p><strong>Responsable Plan:</strong> <span id="modalResponsable"></span></p>
                <p><strong>Observaciones:</strong> <span id="modalObservaciones"></span></p>
                <p><strong>Estado Plan:</strong> <span id="modalEstado"></span></p>
                <p><strong>Consecutivo Formulario:</strong> <span id="modalConsecutivoFormulario"></span></p>
                <p><strong>Tipo Formulario:</strong> <span id="modalTipoFormulario"></span></p>
                <p><strong>Fecha Estimada de Cierre:</strong> <span id="modalFechaEstimadaCierre"></span></p>
                <button id="aprobarBtn">Aprobar</button>
            </div>
        </div>

        <!-- Ventana emergente para Cancelar Planes -->
        <div id="cancelModal" class="modal" style="display: none;">
            <div class="modal-content">
                <span class="close cancel-close">&times;</span>
                <h2>Cancelar Planes</h2>
                <label for="cancelReason">Razón de Cancelación:</label>
                <textarea id="cancelReason" rows="4" required></textarea>
                <br><br>
                <button id="confirmCancelBtn">Confirmar Cancelación</button>
            </div>
        </div>
    `;
            setTimeout(() => {
                // Seleccionar elementos del DOM
                const planTableBody = document.getElementById("planTableBody");
                const buscarBtn = document.getElementById("buscarBtn");
                const detailsModal = document.getElementById("detailsModal");
                const cancelModal = document.getElementById("cancelModal");
                const closeDetails = document.querySelector(".details-close");
                const closeCancel = document.querySelector(".cancel-close");
                const aprobarBtn = document.getElementById("aprobarBtn");
                const confirmCancelBtn = document.getElementById("confirmCancelBtn");

                // Ejemplo de datos
                const examplePlans = [
                    {
                        consecutivo: 1,
                        descripcion: 'Plan de Acción 1',
                        fechaEstado: '2024-08-25',
                        responsable: 'Responsable 1',
                        observaciones: 'Observación 1',
                        estado: 'Pendiente',
                        consecutivoFormulario: 'F1',
                        tipoFormulario: 'Formulario',
                        fechaEstimadaCierre: '2024-09-30'
                    }, {
                        consecutivo: 2,
                        descripcion: 'Plan de Acción 2',
                        fechaEstado: '2024-08-26',
                        responsable: 'Responsable 2',
                        observaciones: 'Observación 2',
                        estado: 'En Ejecución',
                        consecutivoFormulario: 'F2',
                        tipoFormulario: 'Focus Group',
                        fechaEstimadaCierre: '2024-10-15'
                    }
                ];

                // Función para cargar los datos en la tabla
                function loadTableData(data) {
                    planTableBody.innerHTML = '';
                    data.forEach(item => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                <td><input type="checkbox" name="rowSelect" value="${item
                            .consecutivo}"></td>
                <td>${item
                            .consecutivo}</td>
                <td>${item
                            .descripcion}</td>
                <td>${item
                            .fechaEstado}</td>
                <td>${item
                            .responsable}</td>
                <td>${item
                            .observaciones}</td>
                <td>${item
                            .estado}</td>
                <td>${item
                            .consecutivoFormulario}</td>
                <td>${item
                            .tipoFormulario}</td>
                <td>${item
                            .fechaEstimadaCierre}</td>
                <td><button class="details-btn" data-details='${JSON
                            .stringify(item)}'>Detalles</button></td>
                <td><button class="cancel-btn" data-consecutivo="${item
                            .consecutivo}">Cancelar</button></td>
            `;
                        planTableBody.appendChild(row);
                    });
                }

                loadTableData(examplePlans);

                // Mostrar detalles en modal
                document.addEventListener('click', function (e) {
                    if (e.target && e.target.classList.contains('details-btn')) {
                        const data = JSON.parse(e.target.getAttribute('data-details'));
                        document
                            .getElementById('modalConsecutivo')
                            .textContent = data.consecutivo;
                        document
                            .getElementById('modalDescripcion')
                            .textContent = data.descripcion;
                        document
                            .getElementById('modalFechaEstado')
                            .textContent = data.fechaEstado;
                        document
                            .getElementById('modalResponsable')
                            .textContent = data.responsable;
                        document
                            .getElementById('modalObservaciones')
                            .textContent = data.observaciones;
                        document
                            .getElementById('modalEstado')
                            .textContent = data.estado;
                        document
                            .getElementById('modalConsecutivoFormulario')
                            .textContent = data.consecutivoFormulario;
                        document
                            .getElementById('modalTipoFormulario')
                            .textContent = data.tipoFormulario;
                        document
                            .getElementById('modalFechaEstimadaCierre')
                            .textContent = data.fechaEstimadaCierre;
                        detailsModal.style.display = 'block';
                    }

                    if (e.target && e.target.classList.contains('cancel-btn')) {
                        const consecutivo = e
                            .target
                            .getAttribute('data-consecutivo');
                        // Aquí puedes almacenar el consecutivo para usarlo al confirmar la cancelación
                        // del plan
                        cancelModal.style.display = 'block';
                    }
                });

                // Cerrar modales
                closeDetails.addEventListener('click', function () {
                    detailsModal.style.display = 'none';
                });

                closeCancel.addEventListener('click', function () {
                    cancelModal.style.display = 'none';
                });

                // Confirmar cambio de estado
                aprobarBtn.addEventListener('click', function () {
                    // Implementar lógica para aprobar el plan de acción
                    alert('Plan aprobado.');
                    detailsModal.style.display = 'none';
                });

                // Confirmar cancelación
                confirmCancelBtn.addEventListener('click', function () {
                    const cancelReason = document
                        .getElementById('cancelReason')
                        .value;
                    if (cancelReason) {
                        // Implementar lógica para cancelar el plan de acción
                        alert(`Plan cancelado. Razón: ${cancelReason}`);
                        cancelModal.style.display = 'none';
                    } else {
                        alert('Por favor, ingrese una razón para la cancelación.');
                    }
                });

                // Funcionalidad para el botón Buscar
                buscarBtn.addEventListener('click', function () {
                    const estadoPlan = document
                        .getElementById('estadoPlan')
                        .value;
                    const responsablePlan = document
                        .getElementById('responsablePlan')
                        .value;
                    const fechaEstado = document
                        .getElementById('fechaEstado')
                        .value;

                    // Implementar la lógica para filtrar los datos según los criterios de búsqueda
                    alert(
                        `Buscar por Estado Plan: ${estadoPlan}, Responsable Plan: ${responsablePlan}, Fecha Estado: ${fechaEstado}`
                    );
                });
            }, 0);
            break;
        case 'planes-en-ejecucion':
            content.innerHTML = `
                    <div class="filter-box">
                        <h1 id="titulo_h1">Planes en Ejecución</h1>
                        <h2 id="focus-group-header">Criterios de búsqueda</h2>
                        <label for="responsable">Responsable:</label>
                        <input type="text" id="responsable">
                        <label for="estadoPlan">Estado del Plan:</label>
                        <select id="estadoPlan">
                            <option value="">Seleccione un estado</option>
                            <option value="enEjecucion">En Ejecución</option>
                            <option value="cerrado">Cerrado</option>
                            <option value="cancelado">Cancelado</option>
                        </select>
                        <label for="fechaInicio">Fecha de Inicio:</label>
                        <input type="date" id="fechaInicio">
                        <button id="buscarBtn">Buscar</button>
                        <button id="exportarBtn">Exportar</button>
                    </div>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Consecutivo</th>
                                    <th>Descripción del Plan</th>
                                    <th>Fecha de Inicio</th>
                                    <th>Responsable</th>
                                    <th>Observaciones</th>
                                    <th>Estado Plan</th>
                                    <th>Fecha Estimada de Cierre</th>
                                    <th>Detalles del Plan</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="planTableBody">
                                <!-- Las filas se agregarán dinámicamente aquí -->
                            </tbody>
                        </table>
                    </div>
            
                    <!-- Ventana emergente para Detalles del Plan -->
                    <div id="detailsModal" class="modal" style="display: none;">
                        <div class="modal-content">
                            <span class="close details-close">&times;</span>
                            <h2>Detalles del Plan</h2>
                            <p><strong>Consecutivo:</strong> <span id="modalConsecutivo"></span></p>
                            <p><strong>Descripción del Plan:</strong> <span id="modalDescripcion"></span></p>
                            <p><strong>Fecha de Inicio:</strong> <span id="modalFechaInicio"></span></p>
                            <p><strong>Responsable:</strong> <span id="modalResponsable"></span></p>
                            <p><strong>Observaciones:</strong> <span id="modalObservaciones"></span></p>
                            <p><strong>Estado Plan:</strong> <span id="modalEstado"></span></p>
                            <p><strong>Fecha Estimada de Cierre:</strong> <span id="modalFechaEstimadaCierre"></span></p>
                            <p><strong>Formulario:</strong> <span id="modalFormulario"></span></p>
                        </div>
                    </div>
            
                    <!-- Ventana emergente para Cerrar Planes -->
                    <div id="closeModal" class="modal" style="display: none;">
                        <div class="modal-content">
                            <span class="close close-close">&times;</span>
                            <h2>Cerrar Plan</h2>
                            <label for="closeObservations">Observaciones:</label>
                            <textarea id="closeObservations" rows="4" required></textarea>
                            <br><br>
                            <button id="confirmCloseBtn">Confirmar Cierre</button>
                        </div>
                    </div>
                `;

            setTimeout(() => {
                // Seleccionar elementos del DOM
                const planTableBody = document.getElementById("planTableBody");
                const buscarBtn = document.getElementById("buscarBtn");
                const exportarBtn = document.getElementById("exportarBtn");
                const detailsModal = document.getElementById("detailsModal");
                const closeModal = document.getElementById("closeModal");
                const closeDetails = document.querySelector(".details-close");
                const closeClose = document.querySelector(".close-close");
                const cerrarBtn = document.getElementById("cerrarBtn");
                const confirmCloseBtn = document.getElementById("confirmCloseBtn");

                // Ejemplo de datos
                const examplePlans = [
                    {
                        consecutivo: 1,
                        descripcion: 'Plan de Acción 1',
                        fechaInicio: '2024-08-01',
                        responsable: 'Responsable 1',
                        observaciones: 'Observación 1',
                        estado: 'En Ejecución',
                        fechaEstimadaCierre: '2024-09-30',
                        formulario: 'Formulario 1'
                    }, {
                        consecutivo: 2,
                        descripcion: 'Plan de Acción 2',
                        fechaInicio: '2024-08-05',
                        responsable: 'Responsable 2',
                        observaciones: 'Observación 2',
                        estado: 'En Ejecución',
                        fechaEstimadaCierre: '2024-10-15',
                        formulario: 'Formulario 2'
                    }
                ];

                // Función para cargar los datos en la tabla
                function loadTableData(data) {
                    planTableBody.innerHTML = '';
                    data.forEach(item => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                                <td><input type="checkbox" class="rowSelect" name="planSelect" value="${item
                            .consecutivo}"></td>
                                <td>${item
                            .consecutivo}</td>
                                <td>${item
                            .descripcion}</td>
                                <td>${item
                            .fechaInicio}</td>
                                <td>${item
                            .responsable}</td>
                                <td>${item
                            .observaciones}</td>
                                <td>${item
                            .estado}</td>
                                <td>${item
                            .fechaEstimadaCierre}</td>
                                <td><button class="details-btn" data-details='${JSON
                            .stringify(item)}'>Detalles del Plan</button></td>
                                <td>
                                    <select class="estado-select">
                                        <option value="">Seleccione Estado</option>
                                        <option value="cerrado">Cerrado</option>
                                        <option value="cancelado">Cancelado</option>
                                    </select>
                                    <br>
                                    <button class="confirm-btn">Confirmar Cambio Estado</button>
                                </td>
                            `;
                        planTableBody.appendChild(row);
                    });
                }

                loadTableData(examplePlans);

                // Mostrar detalles en modal
                document.addEventListener('click', function (e) {
                    if (e.target && e.target.classList.contains('details-btn')) {
                        const data = JSON.parse(e.target.getAttribute('data-details'));
                        document
                            .getElementById('modalConsecutivo')
                            .textContent = data.consecutivo;
                        document
                            .getElementById('modalDescripcion')
                            .textContent = data.descripcion;
                        document
                            .getElementById('modalFechaInicio')
                            .textContent = data.fechaInicio;
                        document
                            .getElementById('modalResponsable')
                            .textContent = data.responsable;
                        document
                            .getElementById('modalObservaciones')
                            .textContent = data.observaciones;
                        document
                            .getElementById('modalEstado')
                            .textContent = data.estado;
                        document
                            .getElementById('modalFechaEstimadaCierre')
                            .textContent = data.fechaEstimadaCierre;
                        document
                            .getElementById('modalFormulario')
                            .textContent = data.formulario;
                        detailsModal.style.display = 'block';
                    }

                    if (e.target && e.target.classList.contains('close-btn')) {
                        const consecutivo = e
                            .target
                            .getAttribute('data-consecutivo');
                        // Aquí puedes almacenar el consecutivo para usarlo al confirmar el cierre del
                        // plan
                        closeModal.style.display = 'block';
                    }

                    if (e.target && e.target.classList.contains('confirm-btn')) {
                        const selectElement = e.target.previousElementSibling;
                        const selectedState = selectElement.value;
                        if (selectedState) {
                            alert(`Cambio de estado confirmado: ${selectedState}`);
                        } else {
                            alert('Por favor, seleccione un estado.');
                        }
                    }
                });

                // Cerrar modales
                closeDetails.addEventListener('click', function () {
                    detailsModal.style.display = 'none';
                });

                closeClose.addEventListener('click', function () {
                    closeModal.style.display = 'none';
                });

                // Confirmar cierre de plan
                confirmCloseBtn.addEventListener('click', function () {
                    const closeObservations = document
                        .getElementById('closeObservations')
                        .value;
                    if (closeObservations) {
                        // Implementar lógica para cerrar el plan de acción
                        alert(`Plan cerrado. Observaciones: ${closeObservations}`);
                        closeModal.style.display = 'none';
                    } else {
                        alert('Por favor, ingrese observaciones para cerrar el plan.');
                    }
                });

                // Funcionalidad para el botón Buscar
                buscarBtn.addEventListener('click', function () {
                    const responsable = document
                        .getElementById('responsable')
                        .value;
                    const estadoPlan = document
                        .getElementById('estadoPlan')
                        .value;
                    const fechaInicio = document
                        .getElementById('fechaInicio')
                        .value;

                    // Implementar la lógica para filtrar los datos según los criterios de búsqueda
                    alert(
                        `Buscar por Responsable: ${responsable}, Estado Plan: ${estadoPlan}, Fecha de Inicio: ${fechaInicio}`
                    );
                });

                // Funcionalidad para el botón Exportar
                exportarBtn.addEventListener('click', function () {
                    // Implementar la lógica para exportar los datos a PDF o EXCEL
                    alert('Exportar datos a PDF o EXCEL.');
                });
            }, 0);
            break;
        case 'cerrados':
            content.innerHTML = `
                        <div class="filter-box">
                            <h1 id="titulo_h1">Planes/Formularios Cerrados</h1>
                            <h2 id="focus-group-header">Criterios de búsqueda</h2>
                            <label for="responsable">Responsable:</label>
                            <input type="text" id="responsable">
                            <label for="tipoFormulario">Tipo Solicitud:</label>
                               <select id="tipoSolicitud">
                               <option value="Seleecionar">Seleccionar</option>
                                <option value="Formulario Dirección de TI">Formulario Dirección de TI</option>
                                <option value="Formulario Proyecto">Formulario Proyecto</option>
                                <option value="Formulario Tickets">Formulario Tickets</option>
                                <option value="Formulario Llamadas Linea Saul">Formulario Llamadas Linea Saul</option>
                                <option value="Formulario Focus Group">Formulario Focus Group</option>
                            </select>
                            <label for="fechaCierre">Fecha de Cierre:</label>
                            <input type="date" id="fechaCierre">
                            <button id="buscarBtn">Buscar</button>
                            <button id="exportarBtn">Exportar</button>
                        </div>
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Consecutivo</th>
                                        <th>Tipo Formulario</th>
                                        <th>Descripción del Plan</th>
                                        <th>Fecha de Cierre</th>
                                        <th>Responsable</th>
                                        <th>Resultado</th>
                                        <th>Observaciones</th>
                                        <th>Estado Plan</th>
                                        <th>Detalles del Plan</th>
                                    </tr>
                                </thead>
                                <tbody id="planTableBody">
                                    <!-- Las filas se agregarán dinámicamente aquí -->
                                </tbody>
                            </table>
                        </div>
                
                        <!-- Ventana emergente para Detalles del Plan -->
                        <div id="detailsModal" class="modal" style="display: none;">
                            <div class="modal-content">
                                <span class="close details-close">&times;</span>
                                <h2>Detalles del Plan</h2>
                                <p><strong>Consecutivo:</strong> <span id="modalConsecutivo"></span></p>
                                <p><strong>Formulario:</strong> <span id="modalFormulario"></span></p>
                                <p><strong>Descripción del Plan:</strong> <span id="modalDescripcion"></span></p>
                                <p><strong>Fecha de Cierre:</strong> <span id="modalFechaCierre"></span></p>
                                <p><strong>Responsable:</strong> <span id="modalResponsable"></span></p>
                                <p><strong>Resultado:</strong> <span id="modalResultado"></span></p>
                                <p><strong>Observaciones:</strong> <span id="modalObservaciones"></span></p>
                                <p><strong>Estado Plan:</strong> <span id="modalEstado"></span></p>
                            </div>
                        </div>
                    `;

            setTimeout(() => {
                // Seleccionar elementos del DOM
                const planTableBody = document.getElementById("planTableBody");
                const buscarBtn = document.getElementById("buscarBtn");
                const exportarBtn = document.getElementById("exportarBtn");
                const detailsModal = document.getElementById("detailsModal");
                const closeDetails = document.querySelector(".details-close");

                // Ejemplo de datos
                const examplePlans = [
                    {
                        consecutivo: 1,
                        formulario: 'Formulario Tickets',
                        descripcion: 'Mejoramiento de atención tareas cambio de contraseñas',
                        fechaCierre: '2024-08-01',
                        responsable: 'Andres Felipe Correa Ramirez',
                        resultado: 'Éxitoso',
                        observaciones: 'El plan de mejoramiento trajo una mejor atención a la solicitud de cambio de contraseñas generando respuesta positiva en los usuarios',
                        estado: 'Cerrado'
                    }, {
                        consecutivo: 2,
                        formulario: 'Formulario Tickets',
                        descripcion: 'Mejoramiento de atención tareas desbloqueo de usuarios',
                        fechaCierre: '2024-08-05',
                        responsable: 'Monica Tatiana Ortiz Caballero',
                        resultado: 'Éxitoso',
                        observaciones: 'Aunque el mejoramiento se aplico, los usuarios aún se quejan por las cuentas bloqueadas, sin embargo, no por la atención brinada',
                        estado: 'Cancelado'
                    }
                ];

                // Función para cargar los datos en la tabla
                function loadTableData(data) {
                    planTableBody.innerHTML = '';
                    data.forEach(item => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                                    <td><input type="checkbox" name="rowSelect" value="${item
                            .consecutivo}"></td>
                                    <td>${item
                            .consecutivo}</td>
                                    <td>${item
                            .formulario}</td>
                                    <td>${item
                            .descripcion}</td>
                                    <td>${item
                            .fechaCierre}</td>
                                    <td>${item
                            .responsable}</td>
                                    <td>${item
                            .resultado}</td>
                                    <td>${item
                            .observaciones}</td>
                                    <td>${item
                            .estado}</td>
                                    <td><button class="details-btn" data-details='${JSON
                            .stringify(item)}'>Detalles del Plan</button></td>
                                `;
                        planTableBody.appendChild(row);
                    });
                }

                loadTableData(examplePlans);

                // Mostrar detalles en modal
                document.addEventListener('click', function (e) {
                    if (e.target && e.target.classList.contains('details-btn')) {
                        const data = JSON.parse(e.target.getAttribute('data-details'));
                        document
                            .getElementById('modalConsecutivo')
                            .textContent = data.consecutivo;
                        document
                            .getElementById('modalFormulario')
                            .textContent = data.formulario;
                        document
                            .getElementById('modalDescripcion')
                            .textContent = data.descripcion;
                        document
                            .getElementById('modalFechaCierre')
                            .textContent = data.fechaCierre;
                        document
                            .getElementById('modalResponsable')
                            .textContent = data.responsable;
                        document
                            .getElementById('modalResultado')
                            .textContent = data.resultado;
                        document
                            .getElementById('modalObservaciones')
                            .textContent = data.observaciones;
                        document
                            .getElementById('modalEstado')
                            .textContent = data.estado;
                        detailsModal.style.display = 'block';
                    }
                });

                // Cerrar modal de detalles
                closeDetails.addEventListener('click', function () {
                    detailsModal.style.display = 'none';
                });

                // Funcionalidad para el botón Buscar
                buscarBtn.addEventListener('click', function () {
                    const responsable = document
                        .getElementById('responsable')
                        .value;
                    const fechaCierre = document
                        .getElementById('fechaCierre')
                        .value;

                    // Implementar la lógica para filtrar los datos según los criterios de búsqueda
                    alert(
                        `Buscar por Responsable: ${responsable}, Fecha de Cierre: ${fechaCierre}`
                    );
                });

                // Funcionalidad para el botón Exportar
                exportarBtn.addEventListener('click', function () {
                    // Implementar la lógica para exportar los datos a PDF o EXCEL
                    alert('Exportar datos a PDF o EXCEL.');
                });
            }, 0);
            break;
        case 'registrar-focus':
            content.innerHTML = `
                    <form class="register-form" id="registerForm">
                        <h2 id="focus-group-header">Registrar Focus Group</h2>
                        
                        <!-- Campos de Encabezado -->
                        <div class="header-fields">
                            <div class="form-group">
                                <label for="consecutivo">Consecutivo:</label>
                                <input type="text" id="consecutivo" required>
                            </div>
                            <div class="form-group">
                                <label for="nombreFocusGroup">Nombre Focus Group:</label>
                                <input type="text" id="nombreFocusGroup" required>
                            </div>
                        </div>

                        <!-- Contenedor para Participantes -->
                        <div class="participants-container" id="participantsContainer"></div>

                        <!-- Botón para Agregar Participante -->
                        <div class="form-group">
                            <button type="button" id="addParticipantBtn">+</button>
                        </div>

                        <!-- Campos adicionales -->
                        <div class="form-group">
                            <label for="motivo">Motivo:</label>
                            <textarea id="motivo" placeholder="Escribe aquí..."></textarea>
                        </div>

                        <!-- Botones de Acción -->
                        <div class="filter-box">
                            <button type="submit" id="saveBtn">Guardar</button>
                            <button type="button" id="clearBtn">Limpiar</button>
                        </div>
                    </form>
                `;

            // Código JavaScript para manejar el formulario
            const registerForm = document.getElementById("registerForm");
            const participantsContainer = document.getElementById("participantsContainer");
            const addParticipantBtn = document.getElementById("addParticipantBtn");
            const clearBtn = document.getElementById("clearBtn");

            // Manejar la adición de participantes
            addParticipantBtn.addEventListener("click", function () {
                addParticipantField();
            });

            // Manejar el envío del formulario (Guardar)
            registerForm.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

                if (validateForm()) {
                    alert("¡Registro Exitoso!"); // Mostrar mensaje de éxito
                    registerForm.reset(); // Limpiar el formulario
                    participantsContainer.innerHTML = ""; // Limpiar los participantes
                }
            });

            // Manejar la limpieza del formulario
            clearBtn.addEventListener("click", function () {
                registerForm.reset(); // Limpiar el formulario
                participantsContainer.innerHTML = ""; // Limpiar los participantes
                alert("Campos borrados.");
            });

            // Función para añadir un campo de participante
            function addParticipantField() {
                const participantDiv = document.createElement("div");
                participantDiv.className = "participant-field";

                participantDiv.innerHTML = `
                    <div class="header-fields">
                        <div class="form-group">
                            <label>Documento: <input type="text" required></label><br>
                            <label>Nombre Integrante: <input type="text" required></label><br>
                            <label>Usuario: <input type="text" required></label><br>
                            <label>Área: <input type="text" required></label><br>
                            <button type="button" class="remove-participant-btn">-</button>
                        </div>
                    </div>
                    `;

                participantsContainer.appendChild(participantDiv);

                // Manejar la eliminación del campo de participante
                participantDiv
                    .querySelector(".remove-participant-btn")
                    .addEventListener("click", function () {
                        participantDiv.remove();
                    });
            }

            // Función para validar el formulario
            function validateForm() {
                const requiredFields = registerForm.querySelectorAll(
                    "input[required], textarea[required]"
                );
                let isValid = true;

                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field
                            .classList
                            .add("error");
                    } else {
                        field
                            .classList
                            .remove("error");
                    }
                });

                if (!isValid) {
                    alert("Por favor complete todos los campos obligatorios.");
                }

                return isValid;
            }

            break;

        case 'registrar-llamadas':
            content.innerHTML = `
            <form class="register-form" id="registerForm2">
                <h2 id="focus-group-header">Registrar Llamadas Saul</h2>
                <!-- Campos de Encabezado -->
                <div class="header-fields">
                    <div class="form-group">
                        <label for="consecutivo">Consecutivo:</label>
                        <input type="text" id="consecutivo" required>
                    </div>
                    <div class="form-group">
                        <label for="nombreCompleto">Nombre Completo:</label>
                        <input type="text" id="nombreCompleto" required>
                    </div>
                    <div class="form-group">
                        <label for="numeroLlamadas">Número Llamadas:</label>
                        <input type="text" id="numeroLlamadas" required>
                    </div>
                    <div class="form-group">
                        <label for="mes">Mes:</label>
                        <input type="text" id="mes" required>
                    </div>
                    <div class="form-group">
                        <label for="observacionMesa">Observaciones:</label>
                        <input type="text" id="observacionMesa" required>
                    </div>
                </div>
                <!-- Botones de Acción -->
                    <div class="filter-box">
                        <button type="submit" id="saveBtn">Guardar</button>
                        <button type="button" id="clearBtn2">Limpiar</button>
                    </div>
                </form>
            `;
            // Código JavaScript para manejar el formulario
            const registerForm2 = document.getElementById("registerForm2");
            const clearBtn2 = document.getElementById("clearBtn2");

            // Manejar el envío del formulario (Guardar)
            registerForm2.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

                if (validateForm()) {
                    alert("¡Registro Exitoso!"); // Mostrar mensaje de éxito
                    registerForm2.reset(); // Limpiar el formulario
                }
            });

            // Manejar la limpieza del formulario
            clearBtn2.addEventListener("click", function () {
                registerForm2.reset(); // Limpiar el formulario
                alert("Campos borrados.");
            });
            // Función para validar el formulario
            function validateForm() {
                const requiredFields = registerForm2.querySelectorAll(
                    "input[required], textarea[required]"
                );
                let isValid = true;

                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field
                            .classList
                            .add("error");
                    } else {
                        field
                            .classList
                            .remove("error");
                    }
                });

                if (!isValid) {
                    alert("Por favor complete todos los campos obligatorios.");
                }

                return isValid;
            }
            break;
        case 'registrar-plan':
            content.innerHTML = `
            <form class="register-form" id="registerForm3">
                <h2 id="focus-group-header">Registro Plan de Acción</h2>
                <!-- Campos de Encabezado -->
                <div class="header-fields">
                    <div class="form-group">
                         <label for="consecutivoForm">Consecutivo Formulario</label>
                            <select id="consecutivoForm">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                    </div>
                    <div class="form-group">
                        <label for="consecutivo">Consecutivo Plan:</label>
                        <input type="text" id="consecutivo" required>
                    </div>
                    <div class="form-group">
                        <label for="descripcionPlan">Descripción Plan:</label>
                        <textarea id="closeObservations" rows="4" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="responsable">Responsable Plan:</label>
                        <input type="text" id="responsable" required>
                    </div>
                    <div class="form-group">
                        <label for="observaciones">Observaciones:</label>
                        <textarea id="closeObservations" rows="4" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="fechaEstimada">Fecha Estimada Cierre:</label>
                        <input type="date" id="fechaEstimada" required>
                    </div>
                </div>
                <!-- Botones de Acción -->
                    <div class="filter-box">
                        <button type="submit" id="saveBtn">Guardar</button>
                        <button type="button" id="clearBtn3">Limpiar</button>
                    </div>
                </form>
            `;
            // Código JavaScript para manejar el formulario
            const registerForm3 = document.getElementById("registerForm3");
            const clearBtn3 = document.getElementById("clearBtn3");

            // Manejar el envío del formulario (Guardar)
            registerForm3.addEventListener("submit", function (event) {
                event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

                if (validateForm()) {
                    alert("¡Registro Exitoso!"); // Mostrar mensaje de éxito
                    registerForm3.reset(); // Limpiar el formulario
                }
            });

            // Manejar la limpieza del formulario
            clearBtn3.addEventListener("click", function () {
                registerForm3.reset(); // Limpiar el formulario
                alert("Campos borrados.");
            });
            // Función para validar el formulario
            function validateForm() {
                const requiredFields = registerForm3.querySelectorAll(
                    "input[required], textarea[required]"
                );
                let isValid = true;

                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field
                            .classList
                            .add("error");
                    } else {
                        field
                            .classList
                            .remove("error");
                    }
                });

                if (!isValid) {
                    alert("Por favor complete todos los campos obligatorios.");
                }

                return isValid;
            }
            break;
            // Agrega más casos según sea necesario
        default:
            content.innerHTML = `<p>Opción no implementada.</p>`;
            break;
    }
}