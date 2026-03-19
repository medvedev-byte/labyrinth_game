// Конфигурация лабиринта
const labyrinthConfig = {
    // Определяем 10 комнат с возможными направлениями движения
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
    rooms: {
        '1,2': { // Комната 1
            exits: ['down', 'right', 'up'],
            tasks: {
                'down': { requiredItem: 'yellow_key', rewardItem: null },  // в комнату 2 (1,1) нужен жёлтый ключ
                'right': { requiredItem: null, rewardItem: null },  // в комнату 4 (2,2)
                'up': { requiredItem: 'red_key', rewardItem: null }  // в комнату 5 (1,3) нужен красный ключ
            },
            name: 'Комната 1',
            image: 'Room1.png',
            key: null  // Нет ключа в этой комнате
        },
        '1,1': { // Комната 2
            exits: ['up', 'right', 'down'],
            tasks: {
                'up': { requiredItem: null, rewardItem: null },  // в комнату 1 (1,2)
                'right': { requiredItem: null, rewardItem: null },  // в комнату 3 (2,1)
                'down': { requiredItem: null, rewardItem: null }  // в комнату 6 (1,0)
            },
            name: 'Комната 2',
            image: 'Room2.png',
            key: null  // Нет ключа в этой комнате
        },
        '2,1': { // Комната 3
            exits: ['up', 'left'],
            tasks: {
                'up': { requiredItem: null, rewardItem: null },  // в комнату 4 (2,2)
                'left': { requiredItem: null, rewardItem: null }  // в комнату 2 (1,1)
            },
            name: 'Комната 3',
            image: 'Room3.png',
            key: 'blue_key'  // Синий ключ в этой комнате
        },
        '2,2': { // Комната 4
            exits: ['down', 'left', 'right'],
            tasks: {
                'down': { requiredItem: null, rewardItem: null },  // в комнату 3 (2,1)
                'left': { requiredItem: null, rewardItem: null },  // в комнату 1 (1,2)
                'right': { requiredItem: null, rewardItem: null }  // в комнату 8 (3,2)
            },
            name: 'Комната 4',
            image: 'Room4.png',
            key: null  // Нет ключа в этой комнате
        },
        '1,3': { // Комната 5
            exits: ['down'],
            tasks: {
                'down': { requiredItem: null, rewardItem: null }  // в комнату 1 (1,2)
            },
            name: 'Комната 5',
            image: 'Room5.png',
            key: null  // Нет ключа в этой комнате
        },
        '1,0': { // Комната 6
            exits: ['up', 'left'],
            tasks: {
                'up': { requiredItem: null, rewardItem: null },  // в комнату 2 (1,1)
                'left': { requiredItem: null, rewardItem: null }  // в комнату 7 (0,0)
            },
            name: 'Комната 6',
            image: 'Room6.png',
            key: null  // Нет ключа в этой комнате
        },
        '0,0': { // Комната 7
            exits: ['right'],
            tasks: {
                'right': { requiredItem: null, rewardItem: null }  // в комнату 6 (1,0)
            },
            name: 'Комната 7',
            image: 'Room7.png',
            key: 'red_key'  // Красный ключ в этой комнате
        },
        '3,2': { // Комната 8
            exits: ['left', 'up'],
            tasks: {
                'left': { requiredItem: null, rewardItem: null },  // из комнаты 4 (2,2)
                'up': { requiredItem: 'blue_key', rewardItem: null }  // в комнату 9 (3,3) нужен синий ключ
            },
            name: 'Комната 8',
            image: 'Room8.png',
            key: null  // Нет ключа в этой комнате
        },
        '3,3': { // Комната 9
            exits: ['down', 'up'],
            tasks: {
                'down': { requiredItem: null, rewardItem: null },  // в комнату 8 (3,2)
                'up': { requiredItem: null, rewardItem: null }  // в комнату 10 (3,4)
            },
            name: 'Комната 9',
            image: 'Room9.png',
            key: null  // Нет ключа в этой комнате
        },
        '3,4': { // Комната 10
            exits: ['down'],
            tasks: {
                'down': { requiredItem: null, rewardItem: null }  // в комнату 9 (3,3)
            },
            name: 'Комната 10',
            image: 'Room10.png',
            key: 'yellow_key'  // Жёлтый ключ в этой комнате
        }
    },
    
    // Победная комната - Комната 5 (1,3)
    winCondition: '1,3'
};

class LabyrinthGame {
    constructor() {
        // Начинаем в комнате 1 (1,2)
        this.currentPosition = { x: 1, y: 2 };
        this.inventory = [];
        this.maxInventorySize = 3;
        
        this.initializeElements();
        this.updateDisplay();
        this.setupEventListeners();
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
        if (!room.exits.includes(direction)) {
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
        let taskMessage = `Выполните задание в реальной жизни!`;
        
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
        
        // Сохраняем направление для использования в обработчике результата
        this.pendingDirection = direction;
    }
    
    handleTaskResult(success) {
        if (!success) {
            this.closeTaskModal();
            return;
        }
        
        const room = this.getCurrentRoom();
        const taskInfo = room.tasks[this.pendingDirection];
        
        // Добавляем предмет в инвентарь, если он предусмотрен
        if (taskInfo && taskInfo.rewardItem) {
            this.addItemToInventory(taskInfo.rewardItem);
        }
        
        // Совершаем перемещение
        this.moveToDirection(this.pendingDirection);
        
        this.closeTaskModal();
    }
    
    moveToDirection(direction) {
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
            });
        }
        
        this.updateInventoryDisplay();
    }
    
    closeTaskModal() {
        this.taskModal.style.display = 'none';
    }
}

// Инициализация игры при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new LabyrinthGame();
});