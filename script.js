// База заданий
const taskDatabase = [
    // Примеры заданий - вы можете добавлять сюда свои задания
    {
        id: 'task1',
        text: 'Необходимо последовательно досчитать до числа N таким образом, что каждый ученик назовёт уникальное число без повторений и не перебивая друг друга. N = количеству учеников (или на выбор преподавателя), в случае ошибки начинать счёт заново',
        inPerson: true,
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,
        requirements: null
    },
    {
        id: 'task2',
        text: 'Нужно по очереди называть термины на выбранную преподавателем тему. Повторяться нельзя, время на размышления у каждого — 5 секунд.',
        inPerson: true,
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,
        requirements: null
    },

    {
        id: 'task3',
        text: 'Все участники конференции должны поставить одну и ту же реакцию в течение 20 секунд. Если хотя бы в какой-то момент есть разные реакции, начинаем заново. Всего 3 попытки.',
        inPerson: false,
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,
        requirements: null
    },

    {
        id: 'task4',
        text: 'Преподаватель загадывает слово и пишет первую букву слова в чат. Через несколько секунд (на выбор преподавателя) пишет уже две буквы слова, и так далее. Необходимо написать загаднное слово раньше, чем оно соберётся целиком.',
        inPerson: false,
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,
        requirements: null
    },

    {
        id: 'task5',
        text: 'Преподаватель загадывает предмет и начинает его рисовать, по одной линии за раз. Через несколько секунд (на выбор преподавателя) добавляется следующая линия, и так далее. Необходимо написать загаднное слово раньше, чем оно нарисуется целиком.',
        inPerson: false,
        virtual: true,
        groups: ['j3j4a1p3p5', 'm1'],
        repeatable: true,
        requirements: null
    },

    {
        id: 'arithmetic-chain-task',
        text: 'Арифметическая цепочка: сначала введите количество игроков, затем по очереди каждый игрок выполняет одну операцию в арифметическом выражении.',
        inPerson: true,
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
                'left': { requiredItem: 'blue_key', rewardItem: null }  // в комнату 8 (3,2)
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
        this.completedOneTimeTasks = []; // список выполненных одноразовых заданий
        
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
    }

    distributeTasksToTransitions() {
        // Для каждой комнаты и каждого перехода в ней распределяем задания
        for (const roomKey in labyrinthConfig.rooms) {
            const room = labyrinthConfig.rooms[roomKey];
            if (room.tasks) {
                for (const direction in room.tasks) {
                    const taskInfo = room.tasks[direction];
                    
                    // Проверяем, нужно ли добавить задание для этого перехода
                    // В текущей реализации все переходы, где есть tasks, могут иметь задания
                    // Мы обновим taskInfo, чтобы он содержал ID задания из базы данных
                    // Вместо генерации случайных заданий при каждом вызове, мы будем
                    // распределять задания один раз при запуске игры
                    
                    // Получаем доступные задания, соответствующие текущим параметрам
                    const availableTasks = taskDatabase.filter(task => {
                        // Проверяем, соответствует ли задание типу отделения
                        const matchesFormat = (this.inPerson && task.inPerson) || (!this.inPerson && task.virtual);
                        
                        // Проверяем, соответствует ли задание группе
                        const matchesGroup = task.groups.includes(this.group);
                        
                        // Для одноразовых заданий проверяем, не используется ли оно уже
                        // (чтобы избежать дублирования одноразовых заданий)
                        const isNotUsed = task.repeatable || !this.usedOneTimeTasks || !this.usedOneTimeTasks.includes(task.id);
                        
                        return matchesFormat && matchesGroup && isNotUsed;
                    });
                    
                    // Если есть доступные задания, выбираем одно случайное
                    if (availableTasks.length > 0) {
                        const randomIndex = Math.floor(Math.random() * availableTasks.length);
                        const selectedTask = availableTasks[randomIndex];
                        
                        // Если задание одноразовое, отмечаем его как использованное
                        if (!selectedTask.repeatable) {
                            if (!this.usedOneTimeTasks) {
                                this.usedOneTimeTasks = [];
                            }
                            this.usedOneTimeTasks.push(selectedTask.id);
                            
                            // Также обновляем структуру taskInfo, чтобы она содержала ID задания
                            taskInfo.taskId = selectedTask.id;
                        } else {
                            // Для повторяющихся заданий также можем указать ID
                            taskInfo.taskId = selectedTask.id;
                        }
                    } else {
                        // Если нет подходящих заданий, можно оставить как есть или установить стандартное
                        taskInfo.taskId = null;
                    }
                }
            }
        }
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
        
        // Если переход требует выполнения задания
        if (taskInfo) {
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
            this.closeTaskModal();
            return;
        }
        
        const room = this.getCurrentRoom();
        const taskInfo = room.tasks[this.pendingDirection];
        
        // Если задание одноразовое, добавляем его ID в список выполненных заданий
        if (taskInfo && taskInfo.taskId) {
            const task = taskDatabase.find(t => t.id === taskInfo.taskId);
            if (task && !task.repeatable && !this.completedOneTimeTasks.includes(taskInfo.taskId)) {
                this.completedOneTimeTasks.push(taskInfo.taskId);
            }
        }
        
        // Добавляем предмет в инвентарь, если он предусмотрен
        if (taskInfo && taskInfo.rewardItem) {
            this.addItemToInventory(taskInfo.rewardItem);
        }
        
        // Совершаем перемещение
        this.moveToDirection(this.pendingDirection);
        
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
        this.operations = ['6*8', '+46', '+62', '-19', '+3', '/4', '+11', '*3', '-97', '+6', '-27', '*12', '-34', '/2', '+14', '-92', '/5', '+87', '-24', '*3'];
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
}

// Инициализация игры при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new LabyrinthGame();
});
