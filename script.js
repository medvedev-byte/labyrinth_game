// База заданий
const taskDatabase = [
    // Примеры заданий - вы можете добавлять сюда свои задания
    {
        id: 'task1',
        text: 'Необходимо последовательно досчитать до числа N таким образом, что каждый ученик назовёт уникальное число без повторений и не перебивая друг друга. N = количеству учеников (или на выбор преподавателя), в случае ошибки начинать счёт заново',
        inPerson: true,
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,  // Может встречаться несколько раз
        requirements: null
    },
    {
        id: 'task2',
        text: 'Нужно по очереди называть термины на выбранную преподавателем тему. Повторяться нельзя, время на размышления у каждого — 5 секунд.',
        inPerson: true,
        virtual: true,
        groups: ['m1'],
        repeatable: true,  // Может встречаться несколько раз
        requirements: null
    },
    {
        id: 'task3',
        text: 'Нужно по очереди называть термины на выбранную преподавателем тему. Повторяться нельзя, время на размышления у каждого — 5 секунд.',
        inPerson: true,
        virtual: true,
        groups: ['j3j4a1p3p5'],
        repeatable: true,  // Может встречаться несколько раз
        requirements: null
    },

    {
        id: 'task4',
        text: 'Все участники конференции должны поставить одну и ту же реакцию в течение 20 секунд. Если хотя бы в какой-то момент есть разные реакции, начинаем заново. Всего 3 попытки.',
        inPerson: false,
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,  // Может встречаться несколько раз
        requirements: null
    },

    {
        id: 'task5',
        text: 'Преподаватель загадывает слово и пишет первую букву слова в чат. Через несколько секунд (на выбор преподавателя) пишет уже две буквы слова, и так далее. Необходимо написать загаданное слово раньше, чем оно соберётся целиком.',
        inPerson: false,
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,  
        requirements: null
    },

    {
        id: 'task6',
        text: 'Преподаватель загадывает предмет и начинает его рисовать, по одной линии за раз. Через несколько секунд (на выбор преподавателя) добавляется следующая линия, и так далее. Необходимо написать загаданное слово раньше, чем оно нарисуется целиком.',
        inPerson: false,
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,  
        requirements: null
    },

    {
        id: 'task7',
        text: 'Преподаватель загадывает слово и пишет первую букву слова на доске. Через несколько секунд (на выбор преподавателя) дописывает вторую букву, и так далее. Необходимо назвать загаданное слово раньше, чем оно соберётся целиком.',
        inPerson: true,
        virtual: false,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,  
        requirements: null
    },

    {
        id: 'task8',
        text: 'Вам необходимо выстроиться по признаку, который назовёт преподаватель. Например, по росту по возрастанию, или по цвету глаз. У вас будет 1 минута на то, чтобы это сделать',
        inPerson: true,
        virtual: false,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,  
        requirements: null
    },
    {
        id: 'task9',
        text: 'ВСЕ в аудитории должны ОДНОВРЕМЕННО подпрыгнуть и так же ОДНОВРЕМЕННО приземлиться. Количество попыток и ограничение по времени на усмотрение преподавателя.',
        inPerson: true,
        virtual: false,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,  
        requirements: null
    },

    {
        id: 'task10',
        text: 'Всем нужно принять одинаковую позу, любую на ваш выбор. Преподаватель отворачивается или закрывает глаза на 10 секунд, а после проверяет. Если кто-то двигается или его поза отличается от остальных — пробуем заново!',
        inPerson: true,
        virtual: false,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,  
        requirements: null
    },

    {
        id: 'task11',
        text: 'Преподаватель, сидя на своём месте, закрывает глаза и считает до 10. НЕ ИЗДАВАЯ ШУМА, всем необходимо спрятаться так, чтобы преподаватель не смог вас увидеть. Есть 3 попытки!',
        inPerson: true,
        virtual: false,
        groups: ['j3j4a1p3p5'],
        repeatable: true,  
        requirements: null
    },

    {
        id: 'arithmetic-chain-task',
        text: 'Арифметическая цепочка: сначала введите количество игроков, затем по очереди каждый игрок выполняет одну операцию в арифметическом выражении.',
        inPerson: true,
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: false,  
        requirements: null
    },
    {
        id: 'finish-drawing-task',
        text: 'Дорисуйте изображение, которое появится на экране.',
        inPerson: false,  
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],  
        repeatable: true,  
        requirements: null
    }
];

// Конфигурация лабиринта
const labyrinthConfig = {
    // Определяем 14 комнат с возможными направлениями движения
    // Новые координаты комнат:
    // Комната 1 (1,2)
    // Комната 2 (1,1)
    // Комната 3 (2,1)
    // Комната 4 (2, 2)
    // Комната 5 (1, 3)
    // Комната 6 (1, 0)
    // Комната 7 (0, 0)
    // Комната 8 (3, 2)
    // Комната 9 (3, 3)
    // Комната 10 (3, 4)
    // Комната 11 (2, 0)
    // Комната 12 (3, 0)
    // Комната 13 (4, 2)
    // Комната 14 (4, 1) - специальная комната-телепорт
    rooms: {
        '1,2': { // Комната 1
            exits: ['down', 'right', 'up'],
            tasks: {
                'down': { requiredItem: null, rewardItem: null },  // в комнату 2 (1,1) нужен жёлтый ключ
                'right': { requiredItem: null, rewardItem: null },  // в комнату 4 (2,2)
                'up': { requiredItem: null, rewardItem: null }  // в комнату 5 (1,3) нужен красный ключ
            },
            name: 'Комната 1',
            image: 'Room1.png',
            key: null  // Нет ключа в этой комнате
        },
        '1,1': { // Комната 2
            exits: ['up', 'right', 'down', 'left'],
            tasks: {
                'up': { requiredItem: null, rewardItem: null },  // в комнату 1 (1,2)
                'right': { requiredItem: null, rewardItem: null },  // в комнату 3 (2,1)
                'down': { requiredItem: 'yellow_key', rewardItem: null},
                'left': { requiredItem: 'red_key', rewardItem: null }  
            },
            name: 'Комната 2',
            image: 'Room2.png',
            key: null  // Нет ключа в этой комнате
        },
        '2,1': { // Комната 3
            exits: ['up', 'left', 'down'],
            tasks: {
                'up': { requiredItem: 'blue_key', rewardItem: null },  // в комнату 4 (2,2)
                'down': { requiredItem: null, rewardItem: null },
                'left': { requiredItem: null, rewardItem: null }  // в комнату 2 (1,1)
            },
            name: 'Комната 3',
            image: 'Room3.png',
            key: null  // Синий ключ в этой комнате
        },
        '2,2': { // Комната 4
            exits: ['down', 'left', 'right'],
            tasks: {
                'down': { requiredItem: 'blue_key', rewardItem: null },  // в комнату 3 (2,1)
                'left': { requiredItem: null, rewardItem: null },  // в комнату 1 (1,2)
                'right': { requiredItem: null, rewardItem: null }  // в комнату 8 (3,2)
            },
            name: 'Комната 4',
            image: 'Room4.png',
            key: null  // Нет ключа в этой комнате
        },
        '1,3': { // Комната 5
            exits: ['down', 'up'],
            tasks: {
                'down': { requiredItem: null, rewardItem: null },  // в комнату 1 (1,2)
                'up': { requiredItem: 'red_key', rewardItem: null }
            },
            name: 'Комната 5',
            image: 'Room5.png',
            key: null  // Нет ключа в этой комнате
        },
        '1,0': { // Комната 6
            exits: ['up', 'left', 'right'],
            tasks: {
                'up': { requiredItem: 'yellow_key', rewardItem: null },
                'right' : {requiredItem: 'yellow_key', rewardItem: null}, // в комнату 2 (1,1)
                'left': { requiredItem: null, rewardItem: null }  // в комнату 7 (0,0)
            },
            name: 'Комната 6',
            image: 'Room6.png',
            key: null  // Нет ключа в этой комнате
        },
        '0,0': { // Комната 7
            exits: ['right', 'up'],
            tasks: {
                'right': { requiredItem: null, rewardItem: null },  // в комнату 6 (1,0)
                'up': { requiredItem: null, rewardItem: null }
            },
            name: 'Комната 7',
            image: 'Room7.png',
            key: null  
        },
        '3,2': { // Комната 8
            exits: ['left', 'up', 'right'],
            tasks: {
                'left': { requiredItem: null, rewardItem: null },  // из комнаты 4 (2,2)
                'up': { requiredItem: null, rewardItem: null },  // в комнату 9 (3,3) нужен синий ключ
                'right': {requiredItem: 'blue_key', rewardItem: null}
            },
            name: 'Комната 8',
            image: 'Room8.png',
            key: null  // Нет ключа в этой комнате
        },
        '3,3': { // Комната 9
            exits: ['down', 'up'],
            tasks: {
                'down': { requiredItem: null, rewardItem: null },  // в комнату 8 (3,2)
                'up': { requiredItem: 'blue_key', rewardItem: null }  // в комнату 10 (3,4)
            },
            name: 'Комната 9',
            image: 'Room9.png',
            key: null  // Нет ключа в этой комнате
        },
        '3,4': { // Комната 10
            exits: ['down'],
            tasks: {
                'down': { requiredItem: 'blue_key', rewardItem: null }  // в комнату 9 (3,3)
            },
            name: 'Комната 10',
            image: 'Room10.png',
            key: 'yellow_key'  // Жёлтый ключ в этой комнате
        },
        '2,0': { // Комната 11
            exits: ['up', 'right', 'left'],
            tasks: {
                'up': { requiredItem: null, rewardItem: null },  // в комнату 3 (2,1)
                'right': { requiredItem: null, rewardItem: null },  // в комнату 12 (3,0)
                'left': { requiredItem: 'yellow_key', rewardItem: null }  // в комнату 6 (1,0)
            },
            name: 'Комната 11',
            image: 'Room11.png',
            key: null  // Нет ключа в этой комнате
        },
        '3,0': { // Комната 12
            exits: ['left'],
            tasks: {
                'left': { requiredItem: null, rewardItem: null }  // в комнату 11 (2,0)
            },
            name: 'Комната 12',
            image: 'Room12.png',
            key: 'blue_key'  // Синий ключ тут
        },
        '4,2': { // Комната 13
            exits: ['down', 'left'],
            tasks: {
                'down': { requiredItem: 'yellow_key', rewardItem: null },  // в комнату 14 (4,1)
                // 'left': { requiredItem: 'blue_key', rewardItem: null }  // в комнату 8 (3,2)
            },
            name: 'Комната 13',
            image: 'Room13.png',
            key: null  // Нет ключа в этой комнате
        },
        '4,1': { // Комната 14 - специальная комната-телепорт
            exits: ['up', 'down', 'left', 'right'],
            tasks: {
                'up': { requiredItem: null, rewardItem: null, target: '2,0' },  // в комнату 11 
                'down': { requiredItem: null, rewardItem: null, target: '2,2' },  // в комнату 4 
                'left': { requiredItem: null, rewardItem: null, target: '1,0' },  // в комнату 6 
                'right': { requiredItem: null, rewardItem: null, target: '1,2' }  // в комнату 1
            },
            name: 'Комната 14 - Телепорт',
            image: 'Room14.png',
            key: null  // Нет ключа в этой комнате
        },
        '1,4': { // Комната 15
            exits: ['down'],
            tasks: {
                'down': { requiredItem: null, rewardItem: null}
            },
            name: 'Комната 15 - Финиш',
            image: 'Room15.png',
            key: null  // Нет ключа в этой комнате
        },
        '0,1': { // Комната 16
            exits: ['down', 'right'],
            tasks: {
                'down': { requiredItem: null, rewardItem: null},
                'right': { requiredItem: 'red_key', rewardItem: null}
            },
            name: 'Комната 16',
            image: 'Room16.png',
            key: 'red_key'  
        }
    },

    // Победная комната - Комната 15 (1,4)
    winCondition: '1,4'
};

class LabyrinthGame {
    constructor() {
        // Инициализируем параметры игры
        this.inPerson = null; // true для очного, false для виртуального
        this.group = null; // 'j3j4a1p3p5' или 'm1'
        this.timerMinutes = 40; // по умолчанию 40 минут
        this.timerInterval = null;
        this.completedOneTimeTasks = []; // список выполненных одноразовых заданий
        this.availableDrawingImages = []; // список доступных изображений для рисования
        this.completedTransitions = {}; // объект для отслеживания выполненных переходов (ключ: "x,y-direction")
        this.oneTimeTransitionTasks = []; // список переходов с одноразовыми заданиями
        
        // Показываем окно выбора при загрузке
        this.showSelectionModal();
    }
    
    showSelectionModal() {
        const selectionModal = document.getElementById('selection-modal');
        selectionModal.style.display = 'block';
        
        // Обработчики для кнопок типа отделения
        document.getElementById('in-person-btn').addEventListener('click', () => {
            this.inPerson = true;
            this.markSelectedButton('in-person-btn', 'virtual-class-btn');
            this.checkAndEnableStart();
        });
        
        document.getElementById('virtual-class-btn').addEventListener('click', () => {
            this.inPerson = false;
            this.markSelectedButton('virtual-class-btn', 'in-person-btn');
            this.checkAndEnableStart();
        });
        
        // Обработчики для кнопок группы
        document.getElementById('group-j3j4a1p3p5-btn').addEventListener('click', () => {
            this.group = 'j3j4a1p3p5';
            this.markSelectedButton('group-j3j4a1p3p5-btn', 'group-m1-btn');
            this.checkAndEnableStart();
        });
        
        document.getElementById('group-m1-btn').addEventListener('click', () => {
            this.group = 'm1';
            this.markSelectedButton('group-m1-btn', 'group-j3j4a1p3p5-btn');
            this.checkAndEnableStart();
        });
        
        // Обработчик для изменения значения таймера
        const timerInput = document.getElementById('timer-minutes');
        timerInput.addEventListener('change', () => {
            this.timerMinutes = parseInt(timerInput.value);
            if (isNaN(this.timerMinutes) || this.timerMinutes < 1) {
                this.timerMinutes = 1;
                timerInput.value = 1;
            } else if (this.timerMinutes > 120) {
                this.timerMinutes = 120;
                timerInput.value = 120;
            }
        });
    }
    
    markSelectedButton(selectedId, deselectedId) {
        document.getElementById(selectedId).classList.add('selected');
        if (deselectedId) {
            document.getElementById(deselectedId).classList.remove('selected');
        }
    }
    
    checkAndEnableStart() {
        // Проверяем, выбраны ли оба параметра
        if (this.inPerson !== null && this.group !== null) {
            // Автоматически начинаем игру через небольшую задержку
            setTimeout(() => {
                this.startGame();
            }, 500);
        }
    }
    
    startGame() {
        // Закрываем модальное окно выбора
        const selectionModal = document.getElementById('selection-modal');
        selectionModal.style.display = 'none';
        
        // Показываем таймер
        const timerDisplay = document.getElementById('timer-display');
        timerDisplay.style.display = 'block';
        this.updateTimerDisplay();
        
        // Запускаем таймер
        this.startTimer();
        
        // Начинаем игру с выбранной конфигурацией
        this.currentPosition = { x: 1, y: 2 };
        this.inventory = [];
        this.maxInventorySize = 3;
        this.completedOneTimeTasks = []; // сбрасываем выполненные одноразовые задания при новой игре
        
        // Распределяем задания по переходам
        this.distributeTasksToTransitions();
        
        this.initializeElements();
        this.updateDisplay();
        this.setupEventListeners();
        this.initializeDrawingImages(); // Инициализируем список доступных изображений для рисования
    }

    distributeTasksToTransitions() {
        // Собираем все переходы, которые могут иметь задания
        const allTransitions = [];
        const transitionRefs = []; // Сохраняем ссылки на объекты taskInfo для последующего обновления
        
        for (const roomKey in labyrinthConfig.rooms) {
            const room = labyrinthConfig.rooms[roomKey];
            if (room.tasks) {
                for (const direction in room.tasks) {
                    const taskInfo = room.tasks[direction];
                    // Пропускаем переходы, требующие ключи (они уже имеют механику)
                    if (!taskInfo.requiredItem) {
                        allTransitions.push({ roomKey, direction, taskInfo });
                        transitionRefs.push({ roomKey, direction, taskInfo }); // Сохраняем ссылку
                    }
                }
            }
        }
        
        // Все переходы будут одноразовыми
        const oneTimeCount = allTransitions.length;
        
        // Перемешиваем переходы, чтобы случайным образом распределить задания
        this.shuffleArray(allTransitions);
        this.shuffleArray(transitionRefs);
        
        // Все переходы становятся одноразовыми
        const oneTimeTransitions = allTransitions;
        
        // Сохраняем список одноразовых переходов
        this.oneTimeTransitionTasks = oneTimeTransitions.map(t => `${t.roomKey}-${t.direction}`);
        
        // Получаем доступные задания для текущего формата и группы
        const availableTasks = taskDatabase.filter(task => {
            // Проверяем, соответствует ли задание типу отделения
            const matchesFormat = (this.inPerson && task.inPerson) || (!this.inPerson && task.virtual);
            
            // Проверяем, соответствует ли задание группе
            const matchesGroup = task.groups.includes(this.group);
            
            return matchesFormat && matchesGroup;
        });

        // Сбросим использованные одноразовые задания
        this.usedOneTimeTasks = [];

        // Сначала распределим уникальные задания (те, у которых repeatable: false)
        const uniqueTasks = availableTasks.filter(task => !task.repeatable);
        const repeatableTasks = availableTasks.filter(task => task.repeatable);
        
        // Индекс для отслеживания, какие уникальные задания уже были использованы
        let uniqueTaskIndex = 0;
        let repeatableTaskIndex = 0;
        
        // Проходим по всем переходам и распределяем задания
        for (let i = 0; i < transitionRefs.length; i++) {
            const { roomKey, direction, taskInfo } = transitionRefs[i];
            
            // Пропускаем переходы, требующие ключи (они уже имеют механику)
            if (taskInfo.requiredItem) {
                // Убедимся, что такие переходы не имеют назначенных заданий
                taskInfo.taskId = null;
                taskInfo.isOneTimeTransition = false;
                taskInfo.isUniqueTask = false;
                continue;
            }
            
            let selectedTask = null;
            
            // Если есть уникальные задания, которые еще не были использованы, используем их первыми
            if (uniqueTaskIndex < uniqueTasks.length) {
                selectedTask = uniqueTasks[uniqueTaskIndex];
                uniqueTaskIndex++;
            } else if (repeatableTasks.length > 0) {
                // Если уникальные задания закончились, используем повторяющиеся задания
                selectedTask = repeatableTasks[repeatableTaskIndex % repeatableTasks.length]; // Циклически используем повторяющиеся задания
                repeatableTaskIndex++;
            }
            
            if (selectedTask) {
                // Если задание одноразовое (уникальное), отмечаем его как использованное
                if (!selectedTask.repeatable) {
                    this.usedOneTimeTasks.push(selectedTask.id);
                    
                    // Также обновляем структуру taskInfo, чтобы она содержала ID задания
                    taskInfo.taskId = selectedTask.id;
                    taskInfo.isUniqueTask = true; // Помечаем как уникальное задание
                } else {
                    // Для повторяющихся заданий также указываем ID
                    taskInfo.taskId = selectedTask.id;
                    
                    // Проверяем, является ли этот переход одноразовым (все переходы без ключей теперь одноразовые)
                    const transitionKey = `${roomKey}-${direction}`;
                    if (this.oneTimeTransitionTasks.includes(transitionKey)) {
                        taskInfo.isOneTimeTransition = true; // Помечаем как одноразовый переход
                    }
                }
            } else {
                // Если нет подходящих заданий, можно оставить как есть или установить стандартное
                taskInfo.taskId = null;
            }
        }
    }
    
    // Вспомогательная функция для перемешивания массива (алгоритм Фишера-Йетса)
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    startTimer() {
        // Останавливаем предыдущий таймер, если он был
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        // Устанавливаем начальное время в миллисекундах (преобразуем минуты в миллисекунды)
        this.timeLeft = this.timerMinutes * 60 * 1000; // в миллисекундах
        
        // Запускаем таймер
        this.timerInterval = setInterval(() => {
            this.timeLeft -= 1000; // уменьшаем время на 1 секунду
            
            // Обновляем отображение таймера
            this.updateTimerDisplay();
            
            // Проверяем, истекло ли время
            if (this.timeLeft <= 0) {
                this.endGameByTimer(); // завершаем игру по таймеру
            }
        }, 1000); // обновляем каждую секунду
    }
    
    updateTimerDisplay() {
        // Преобразуем миллисекунды в минуты и секунды
        const totalSeconds = Math.ceil(this.timeLeft / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        
        // Форматируем время в виде MM:SS
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Обновляем отображение времени
        const timeLeftElement = document.getElementById('time-left');
        if (timeLeftElement) {
            timeLeftElement.textContent = formattedTime;
        }
    }
    
    endGameByTimer() {
        // Останавливаем таймер
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        
        // Показываем сообщение о том, что время истекло
        alert('К сожалению, вы не успели найти выход из лабиринта!');
    }
    
    initializeElements() {
        this.positionElement = document.getElementById('current-position');
        this.roomImageElement = document.getElementById('room-image');
        this.moveButtons = {
            'up': document.getElementById('move-up'),
            'down': document.getElementById('move-down'),
            'left': document.getElementById('move-left'),
            'right': document.getElementById('move-right')
        };
        this.taskModal = document.getElementById('task-modal');
        this.taskText = document.getElementById('task-text');
        this.taskSuccessBtn = document.getElementById('task-success');
        this.taskFailBtn = document.getElementById('task-fail');
        this.getRandomTopicBtn = document.getElementById('get-random-topic');
        this.randomTopicDisplay = document.getElementById('random-topic-display');
        
        // Элементы интерфейса арифметической цепочки
        this.arithmeticChainInterface = document.getElementById('arithmetic-chain-interface');
        this.playerCountInput = document.getElementById('player-count-input');
        this.arithmeticChainDisplay = document.getElementById('arithmetic-chain-display');
        this.operationDisplay = document.getElementById('operation-display');
        this.currentResult = document.getElementById('current-result');
        this.nextOperationBtn = document.getElementById('next-operation');
        this.checkAnswerBtn = document.getElementById('check-answer');
        this.playerCountField = document.getElementById('player-count');
        this.startArithmeticChainBtn = document.getElementById('start-arithmetic-chain');
        
        // Элементы инвентаря
        this.inventorySlots = [
            document.getElementById('slot-0'),
            document.getElementById('slot-1'),
            document.getElementById('slot-2')
        ];
        
        // Элементы для задачи рисования
        this.drawingTaskArea = document.getElementById('drawing-task-area');
        this.showDrawingPictureBtn = document.getElementById('show-drawing-picture');
        this.drawingFullscreenOverlay = document.getElementById('drawing-fullscreen-overlay');
        this.drawingFullscreenImage = document.getElementById('drawing-fullscreen-image');
        this.closeFullscreenBtn = document.getElementById('close-fullscreen');
    }
    
    setupEventListeners() {
        // Обработчики для кнопок перемещения
        Object.keys(this.moveButtons).forEach(direction => {
            this.moveButtons[direction].addEventListener('click', () => {
                this.attemptMove(direction);
            });
        });
        
        // Обработчики для модального окна
        this.taskSuccessBtn.addEventListener('click', () => {
            this.handleTaskResult(true);
        });
        
        this.taskFailBtn.addEventListener('click', () => {
            this.handleTaskResult(false);
        });
        
        // Обработчик для кнопки получения случайной темы
        this.getRandomTopicBtn.addEventListener('click', () => {
            this.showRandomTopic();
        });
        
        // Закрытие модального окна при клике вне его
        window.addEventListener('click', (event) => {
            if (event.target === this.taskModal) {
                this.closeTaskModal();
            }
        });
        
        // Обработчики для интерфейса арифметической цепочки
        this.startArithmeticChainBtn.addEventListener('click', () => {
            this.startArithmeticChain();
        });
        
        this.nextOperationBtn.addEventListener('click', () => {
            this.nextArithmeticOperation();
        });
        
        this.checkAnswerBtn.addEventListener('click', () => {
            this.checkArithmeticAnswer();
        });
        
        // Обработчики для задачи рисования
        this.showDrawingPictureBtn.addEventListener('click', () => {
            this.showRandomDrawingPicture();
        });
        
        this.closeFullscreenBtn.addEventListener('click', () => {
            this.closeFullscreenDrawing();
        });
    }
    
    initializeDrawingImages() {
        // Инициализируем список доступных изображений для рисования
        this.availableDrawingImages = [];
        for (let i = 1; i <= 7; i++) {
            this.availableDrawingImages.push(`finish_drawing${i}.jpg`);
        }
    }
    
    showRandomDrawingPicture() {
        // Проверяем, остались ли доступные изображения
        if (this.availableDrawingImages.length === 0) {
            // Если все изображения использованы, переинициализируем список
            this.initializeDrawingImages();
        }
        
        // Выбираем случайный индекс
        const randomIndex = Math.floor(Math.random() * this.availableDrawingImages.length);
        // Получаем изображение по индексу
        const randomImage = this.availableDrawingImages[randomIndex];
        // Удаляем выбранное изображение из списка доступных
        this.availableDrawingImages.splice(randomIndex, 1);
        
        // Отображаем изображение в полноэкранном режиме
        this.drawingFullscreenImage.src = randomImage;
        this.drawingFullscreenOverlay.style.display = 'flex';
    }
    
    closeFullscreenDrawing() {
        this.drawingFullscreenOverlay.style.display = 'none';
    }
    
    showRandomTopic() {
        // Проверяем, является ли текущее задание task2
        const room = this.getCurrentRoom();
        const taskInfo = room.tasks[this.pendingDirection];
        const currentTask = taskDatabase.find(t => t.id === taskInfo.taskId);
        
        if (currentTask && (currentTask.id === 'task2' || currentTask.id === 'task3')) {
            let topicsList = [];

            if (currentTask.id === 'task2') {
                topicsList = [
                'Математика',
                'Искусство',
                'Спорт',
                'География',
                'Животные',
                'Физика',
                'Культура',
                'Растения',
                'Программирование'
            ];
            }
            else if (currentTask.id === 'task3'){
                topicsList = [
                'Спорт',
                'Животные',
                'Транспорт',
                'Страны',
                'Одежда'
            ];
            }
            
            
            // Выбираем случайную тему из списка
            const randomIndex = Math.floor(Math.random() * topicsList.length);
            const randomTopic = topicsList[randomIndex];
            
            // Отображаем тему на месте кнопки
            this.getRandomTopicBtn.textContent = randomTopic;
            // Уменьшим размер шрифта, чтобы текст поместился
            this.getRandomTopicBtn.style.fontSize = '40px';
        }
    }
    
    resetRandomTopicButton() {
        // Восстанавливаем первоначальный текст кнопки
        this.getRandomTopicBtn.textContent = 'Получить случайную тему!';
        this.getRandomTopicBtn.style.fontSize = '40px';
    }
    
    getCurrentRoom() {
        const posKey = `${this.currentPosition.x},${this.currentPosition.y}`;
        return labyrinthConfig.rooms[posKey];
    }
    
    attemptMove(direction) {
        const room = this.getCurrentRoom();
        if (!room) {
            console.error(`Комната ${this.currentPosition.x},${this.currentPosition.y} не найдена`);
            return;
        }
        
        // Проверяем, существует ли выход в данном направлении
        // Для комнаты-телепорта (14) разрешаем все направления, даже если их нет в exits
        const isTeleportRoom = `${this.currentPosition.x},${this.currentPosition.y}` === '4,1';
        if (!isTeleportRoom && !room.exits.includes(direction)) {
            alert('В этом направлении нет выхода!');
            return;
        }
        
        // Проверяем, требуется ли предмет для этого перехода
        const taskInfo = room.tasks[direction];
        if (taskInfo && taskInfo.requiredItem && !this.inventory.includes(taskInfo.requiredItem)) {
            // Преобразуем название ключа в читаемый формат
            let readableItem = taskInfo.requiredItem;
            switch(taskInfo.requiredItem) {
                case 'red_key':
                    readableItem = 'красный ключ';
                    break;
                case 'blue_key':
                    readableItem = 'синий ключ';
                    break;
                case 'yellow_key':
                    readableItem = 'жёлтый ключ';
                    break;
            }
            alert(`Для этого перехода требуется предмет: ${readableItem}`);
            return;
        }
        
        // Проверяем, нужно ли выполнять задание при этом переходе
        // Задание не требуется, если:
        // 1. Это уникальное задание (isUniqueTask), которое уже было выполнено
        // 2. Это одноразовый переход (isOneTimeTransition), который уже был пройден
        const transitionKey = this.getBidirectionalTransitionKey(this.currentPosition.x, this.currentPosition.y, direction);
        const isCompletedTransition = this.completedTransitions[transitionKey] === true;
        
        if (taskInfo && taskInfo.taskId) {
            const task = taskDatabase.find(t => t.id === taskInfo.taskId);
            
            // Проверяем, является ли задание уникальным и уже выполненным
            const isUniqueTaskCompleted = taskInfo.isUniqueTask && this.completedOneTimeTasks.includes(taskInfo.taskId);
            
            // Проверяем, является ли переход одноразовым и уже пройденным
            const isOneTimeTransitionCompleted = taskInfo.isOneTimeTransition && isCompletedTransition;
            
            // Если задание уже выполнено (уникальное или одноразовый переход), пропускаем его
            if (isUniqueTaskCompleted || isOneTimeTransitionCompleted) {
                this.moveToDirection(direction);
                return;
            }
            
            // Иначе показываем модальное окно с заданием
            this.showTaskModal(direction);
        } else {
            // Прямой переход без задания
            this.moveToDirection(direction);
        }
    }
    
    showTaskModal(direction) {
        const room = this.getCurrentRoom();
        const taskInfo = room.tasks[direction];
        
        // Формируем текст задания с информацией о возможной награде
        let taskMessage = this.getTaskTextById(taskInfo.taskId);
        
        if (taskInfo && taskInfo.rewardItem) {
            let itemName = taskInfo.rewardItem;
            // Преобразуем названия предметов в более читаемый формат
            switch(taskInfo.rewardItem) {
                case 'red_key':
                    itemName = 'Красный ключ';
                    break;
                case 'blue_key':
                    itemName = 'Синий ключ';
                    break;
                case 'yellow_key':
                    itemName = 'Жёлтый ключ';
                    break;
            }
            taskMessage += `\nЗа выполнение вы получите: ${itemName}`;
        }
        
        this.taskText.textContent = taskMessage;
        this.taskModal.style.display = 'block';
        
        // Проверяем, является ли задание арифметической цепочкой
        if (taskInfo.taskId === 'arithmetic-chain-task') {
            this.showArithmeticChainInterface();
        } else {
            // Скрываем интерфейс арифметической цепочки для других заданий
            this.hideArithmeticChainInterface();
        }
        
        // Проверяем, является ли текущее задание task2, чтобы показать или скрыть кнопку получения случайной темы
        const currentTask = taskDatabase.find(t => t.id === taskInfo.taskId);
        if (currentTask && (currentTask.id === 'task2' || currentTask.id === 'task3')) {
            this.getRandomTopicBtn.style.display = 'inline-block';
        } else {
            this.getRandomTopicBtn.style.display = 'none';
            // Также скрываем отображение случайной темы, если это не task2
            this.randomTopicDisplay.style.display = 'none';
        }
        
        // Проверяем, является ли текущее задание задачей рисования
        if (currentTask && currentTask.id === 'finish-drawing-task') {
            this.drawingTaskArea.style.display = 'flex';
        } else {
            this.drawingTaskArea.style.display = 'none';
        }
        
        // Сохраняем направление для использования в обработчике результата
        this.pendingDirection = direction;
    }
    
    getTaskTextById(taskId) {
        // Если taskId не определен, возвращаем стандартное сообщение
        if (!taskId) {
            return "Выполните задание в реальной жизни!";
        }

        // Находим задание в базе по ID
        const task = taskDatabase.find(t => t.id === taskId);

        // Если задание не найдено, возвращаем стандартное сообщение
        if (!task) {
            return "Выполните задание в реальной жизни!";
        }

        // Проверяем, соответствует ли задание текущим параметрам (формату и группе)
        const matchesFormat = (this.inPerson && task.inPerson) || (!this.inPerson && task.virtual);
        const matchesGroup = task.groups.includes(this.group);

        // Если задание не соответствует параметрам, возвращаем стандартное сообщение
        if (!matchesFormat || !matchesGroup) {
            return "Выполните задание в реальной жизни!";
        }

        // Проверяем, является ли задание одноразовым и было ли уже выполнено
        if (!task.repeatable && this.completedOneTimeTasks.includes(taskId)) {
            // Если одноразовое задание уже выполнено, возвращаем сообщение
            return "Это задание уже выполнено ранее.";
        }

        // Если все проверки пройдены, возвращаем текст задания
        return task.text;
    }
    
    generateTaskText() {
        // Получаем доступные задания, соответствующие текущим параметрам
        const availableTasks = taskDatabase.filter(task => {
            // Проверяем, соответствует ли задание типу отделения
            const matchesFormat = (this.inPerson && task.inPerson) || (!this.inPerson && task.virtual);
            
            // Проверяем, соответствует ли задание группе
            const matchesGroup = task.groups.includes(this.group);
            
            // Проверяем, не является ли задание одноразовым, которое уже было выполнено
            const isNotCompleted = task.repeatable || !this.completedOneTimeTasks.includes(task.id);
            
            return matchesFormat && matchesGroup && isNotCompleted;
        });
        
        // Если есть доступные задания, выбираем случайное
        if (availableTasks.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableTasks.length);
            const selectedTask = availableTasks[randomIndex];
            
            // Если задание одноразовое, добавляем его в список выполненных
            if (!selectedTask.repeatable) {
                this.completedOneTimeTasks.push(selectedTask.id);
            }
            
            return selectedTask.text;
        } else {
            return "Выполните задание в реальной жизни!";
        }
    }
    
    handleTaskResult(success) {
        if (!success) {
            // Восстанавливаем кнопку случайной темы при закрытии модального окна
            this.resetRandomTopicButton();
            this.closeTaskModal();
            return;
        }
        
        const room = this.getCurrentRoom();
        const taskInfo = room.tasks[this.pendingDirection];
        
        // Если задание одноразовое (уникальное), добавляем его ID в список выполненных заданий
        if (taskInfo && taskInfo.taskId) {
            const task = taskDatabase.find(t => t.id === taskInfo.taskId);
            if (task && !task.repeatable && !this.completedOneTimeTasks.includes(taskInfo.taskId)) {
                this.completedOneTimeTasks.push(taskInfo.taskId);
            }
            
            // Если это одноразовый переход (1/3 всех переходов с повторяющимися заданиями),
            // помечаем этот переход как выполненный
            if (taskInfo.isOneTimeTransition) {
                const transitionKey = this.getBidirectionalTransitionKey(this.currentPosition.x, this.currentPosition.y, this.pendingDirection);
                this.completedTransitions[transitionKey] = true;
            }
        }
        
        // Добавляем предмет в инвентарь, если он предусмотрен
        if (taskInfo && taskInfo.rewardItem) {
            this.addItemToInventory(taskInfo.rewardItem);
        }
        
        // Совершаем перемещение
        this.moveToDirection(this.pendingDirection);
        
        // Восстанавливаем кнопку случайной темы после успешного выполнения задания
        this.resetRandomTopicButton();
        this.closeTaskModal();
    }
    
    moveToDirection(direction) {
        // Проверяем, находится ли игрок в комнате-телепорте (комната 14)
        const currentRoomKey = `${this.currentPosition.x},${this.currentPosition.y}`;
        const currentRoom = labyrinthConfig.rooms[currentRoomKey];
        const taskInfo = currentRoom?.tasks?.[direction];
        
        // Если в текущей комнате есть специальный переход (например, в комнате-телепорте)
        if (taskInfo && taskInfo.target) {
            // Разбираем координаты целевой комнаты
            const [targetX, targetY] = taskInfo.target.split(',').map(Number);
            this.currentPosition = { x: targetX, y: targetY };
        } else {
            // Обновляем позицию в зависимости от направления
            switch (direction) {
                case 'up':
                    this.currentPosition.y += 1;
                    break;
                case 'down':
                    this.currentPosition.y -= 1;
                    break;
                case 'left':
                    this.currentPosition.x -= 1;
                    break;
                case 'right':
                    this.currentPosition.x += 1;
                    break;
            }
        }
        
        // Проверяем условие победы
        if (`${this.currentPosition.x},${this.currentPosition.y}` === labyrinthConfig.winCondition) {
            setTimeout(() => {
                alert('Поздравляем! Вы выиграли!');
            }, 100);
        }
        
        this.updateDisplay();
    }
    
    addItemToInventory(itemName) {
        if (this.inventory.length >= this.maxInventorySize) {
            alert('Инвентарь полон!');
            return;
        }
        
        if (!this.inventory.includes(itemName)) {
            this.inventory.push(itemName);
            this.updateInventoryDisplay();
        }
    }
    
    updateInventoryDisplay() {
        // Очищаем все слоты
        this.inventorySlots.forEach(slot => {
            slot.innerHTML = '';
            slot.classList.remove('has-item');
        });
        
        // Заполняем слоты предметами
        this.inventory.forEach((item, index) => {
            const slot = this.inventorySlots[index];
            // Определяем изображение для предмета
            let itemImage = '';
            switch(item) {
                case 'red_key':
                    itemImage = 'Red_key.png';
                    break;
                case 'blue_key':
                    itemImage = 'Blue_key.png';
                    break;
                case 'yellow_key':
                    itemImage = 'Yellow_key.png';
                    break;
                default:
                    itemImage = ''; // для других предметов
            }
            
            if (itemImage) {
                slot.innerHTML = `<img src="${itemImage}" alt="${item}" class="item-image" title="${item}">`;
            } else {
                slot.innerHTML = `<div class="item">${item}</div>`;
            }
            slot.classList.add('has-item');
        });
    }
    
    updateDisplay() {
        // Обновляем индикатор позиции - показываем название комнаты
        const room = this.getCurrentRoom();
        if (room && room.name) {
            this.positionElement.textContent = room.name;
        } else {
            this.positionElement.textContent = `Комната ${this.currentPosition.x},${this.currentPosition.y}`;
        }
        
        // Проверяем, есть ли ключ в комнате и не взят ли он уже
        if (room && room.key && !this.inventory.includes(room.key)) {
            // Добавляем ключ в инвентарь
            this.addItemToInventory(room.key);
            
            // Показываем сообщение о нахождении ключа
            let keyName = room.key;
            switch(room.key) {
                case 'red_key':
                    keyName = 'красный';
                    break;
                case 'blue_key':
                    keyName = 'синий';
                    break;
                case 'yellow_key':
                    keyName = 'жёлтый';
                    break;
            }
            alert(`Вы нашли ${keyName} ключ!`);
        }
        
        // Обновляем изображение комнаты
        if (room && room.image) {
            this.roomImageElement.src = room.image;
            // Добавляем альтернативный текст для изображения
            this.roomImageElement.alt = room.name;
        } else {
            // Если изображение не определено, используем placeholder
            this.roomImageElement.src = 'placeholder_room.jpg';
            this.roomImageElement.alt = 'Комната';
        }
        
        // Обновляем состояние кнопок в зависимости от возможных выходов
        if (room) {
            Object.keys(this.moveButtons).forEach(direction => {
                const button = this.moveButtons[direction];
                
                // Для комнаты-телепорта (4,1) все направления должны быть доступны
                const isTeleportRoom = `${this.currentPosition.x},${this.currentPosition.y}` === '4,1';
                if (isTeleportRoom) {
                    button.disabled = false;
                    
                    // Проверяем, требуется ли предмет для этого направления
                    const taskInfo = room.tasks[direction];
                    if (taskInfo && taskInfo.requiredItem && !this.inventory.includes(taskInfo.requiredItem)) {
                        button.style.backgroundColor = '#FFA500'; // Оранжевый цвет для заблокированных проходов
                    } else {
                        button.style.backgroundColor = '#4CAF50'; // Зеленый цвет для доступных проходов
                    }
                } else {
                    // Для обычных комнат проверяем наличие выхода
                    if (room.exits.includes(direction)) {
                        button.disabled = false;
                        
                        // Проверяем, требуется ли предмет для этого направления
                        const taskInfo = room.tasks[direction];
                        if (taskInfo && taskInfo.requiredItem && !this.inventory.includes(taskInfo.requiredItem)) {
                            button.style.backgroundColor = '#FFA500'; // Оранжевый цвет для заблокированных проходов
                        } else {
                            button.style.backgroundColor = '#4CAF50'; // Зеленый цвет для доступных проходов
                        }
                    } else {
                        button.disabled = true;
                        button.style.backgroundColor = '#cccccc'; // Серый для недоступных
                    }
                }
            });
        }
        
        this.updateInventoryDisplay();
    }
    
    closeTaskModal() {
        this.taskModal.style.display = 'none';
    }
    
    showArithmeticChainInterface() {
        this.arithmeticChainInterface.style.display = 'block';
        this.playerCountInput.style.display = 'block';
        this.arithmeticChainDisplay.style.display = 'none';
    }
    
    hideArithmeticChainInterface() {
        this.arithmeticChainInterface.style.display = 'none';
    }
    
    startArithmeticChain() {
        const playerCount = parseInt(this.playerCountField.value);
        if (isNaN(playerCount) || playerCount <= 0) {
            alert('Пожалуйста, введите корректное количество игроков.');
            return;
        }
        
        this.currentPlayer = 1;
        this.totalPlayers = playerCount;
        if (this.group === 'm1') {
            this.operations = ['6*8', '+46', '+62', '-19', '+3', '/4', '+11', '*3', '-97', '+6', '-27', '*12', '-34', '/2', '+14', '-92', '/5', '+87', '-24', '*3', '-48', '-63', '+19', '/4', '+17', '/9', '*14', '+74', '-31', '-96'];
        }
        else {
            this.operations = ['2*8', '+4', '-17', '+30', '+7', '/10', '+11', '-8', '-3', '+6', '*8', '/4', '-6', '/2', '+14', '-2', '+9', '/7', '+29', '*3', '+2', '-6', '+10', '-5', '/2', '/5', '*3', '+23', '-31', '-18'];
        }
        
        this.currentIndex = 0;
        this.currentResultValue = 0;
        // Рассчитываем правильный результат заранее только до той операции, которая соответствует количеству игроков
        this.expectedResult = this.calculatePartialResult(playerCount);
        
        // Показываем первую операцию
        this.operationDisplay.textContent = `Игрок ${this.currentPlayer}: ${this.operations[0]}`;
        this.playerCountInput.style.display = 'none';
        this.arithmeticChainDisplay.style.display = 'block';
        this.nextOperationBtn.style.display = 'inline-block';
        this.checkAnswerBtn.style.display = 'none';
    }
    
    nextArithmeticOperation() {
        // Вычисляем результат текущей операции
        const operation = this.operations[this.currentIndex];
        this.currentResultValue = this.calculateResult(this.currentResultValue, operation);
        
        // Переходим к следующей операции и следующему игроку
        this.currentIndex++;
        this.currentPlayer++;
        
        // Проверяем, закончились ли операции или игроки
        if (this.currentIndex >= this.operations.length || this.currentPlayer > this.totalPlayers) {
            // Все операции выполнены или все игроки посчитали
            this.nextOperationBtn.style.display = 'none';
            this.checkAnswerBtn.style.display = 'inline-block';
        } else {
            // Показываем следующую операцию для следующего игрока
            this.operationDisplay.textContent = `Игрок ${this.currentPlayer}: ${this.operations[this.currentIndex]}`;
        }
    }
    
    calculateResult(currentValue, operation) {
        // Разбираем операцию на оператор и число
        const operator = operation.charAt(0);
        const operand = parseFloat(operation.substring(1));
        
        switch(operator) {
            case '+':
                return currentValue + operand;
            case '-':
                return currentValue - operand;
            case '*':
                return currentValue * operand;
            case '/':
                return currentValue / operand;
            default:
                let operand1 = operation.charAt(1);
                let number = parseFloat(operation.substring(2));
                switch(operand1) {
                    case '+':
                        return operator + number;
                    case '-':
                        return operator - number;
                    case '*':
                        return operator * number;
                    case '/':
                        return operator / number;
                }
                // return currentValue;
        }
    }
    
    calculatePartialResult(numOperations) {
        // Вычисляем результат только для первых numOperations операций
        let result = 0;
        // Начинаем с первой операции '6*8'
        result = this.calculateResult(0, this.operations[0]);
        
        // Применяем остальные операции до указанного количества
        for (let i = 1; i < numOperations && i < this.operations.length; i++) {
            result = this.calculateResult(result, this.operations[i]);
        }
        return result;
    }
    
    checkArithmeticAnswer() {
        // Проверяем, совпадает ли текущий результат с ожидаемым
        if (Math.abs(this.currentResultValue - this.expectedResult) < 0.0001) { // Используем небольшое значение для сравнения с плавающей точкой
            alert(`Правильно! Финальный результат: ${this.currentResultValue}`);
            this.handleTaskResult(true); // Отмечаем задание как выполненное
        } else {
            alert(`Неправильно! Ваш результат: ${this.currentResultValue}, правильный ответ: ${this.expectedResult}`);
            this.closeTaskModal(); // Закрываем модальное окно и считаем задание не выполненным
        }
    }
    
    getBidirectionalTransitionKey(fromX, fromY, direction) {
        // Вычисляем координаты целевой комнаты
        let toX = fromX;
        let toY = fromY;
        
        switch (direction) {
            case 'up':
                toY += 1;
                break;
            case 'down':
                toY -= 1;
                break;
            case 'left':
                toX -= 1;
                break;
            case 'right':
                toX += 1;
                break;
        }
        
        // Создаем ключ перехода в порядке возрастания координат, чтобы он был одинаковым
        // независимо от направления движения
        const fromCoord = `${fromX},${fromY}`;
        const toCoord = `${toX},${toY}`;
        
        // Сравниваем строки координат и упорядочиваем их для создания консистентного ключа
        if (fromCoord < toCoord) {
            return `${fromCoord}-${toCoord}`;
        } else {
            return `${toCoord}-${fromCoord}`;
        }
    }
}

// Инициализация игры при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new LabyrinthGame();
});
