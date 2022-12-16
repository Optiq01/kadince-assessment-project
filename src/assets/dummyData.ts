import { ToDoItemInterface } from "@site-types";

export const TODO_DATA: ToDoItemInterface[] = [
    {
        id: '9dc6aeb8-1885-4378-8cec-76e0c34bf3bf',
        title: 'Clean Kitchen',
        description: 'I need to clean the kitchen once and for all.',
        tasks: [
            {
                id: '39f0815b-f463-4939-8968-e278b865c88d',
                task: 'Wipe Counters and Table',
                status: 'pending'
            },
            {
                id: 'f8641501-c12b-4f44-96b9-3ce0df08748d',
                task: 'Wash Dishes',
                status: 'pending'
            },
            {
                id: 'e2e4517a-33d3-434c-8b7a-5dccb412cc19',
                task: 'Clean Oven and Stove Top',
                status: 'pending'
            },
            {
                id: '3becea65-e763-4c33-b2cd-f6f6adb52a04',
                task: 'Mop Floor',
                status: 'pending'
            },
            {
                id: '9c8a04fb-a141-43d3-b220-2cb0d27174ea',
                task: 'Clean Microwave',
                status: 'pending'
            },
            {
                id: '9b253568-0783-4a6b-a48e-afe65ced2820',
                task: 'Take Out Trash',
                status: 'pending'
            }
        ],
        status: 'pending',
        taskStatus: {
            totalTasks: 6,
            completedTasks: 0,
            pendingTasks: 6
        }
    },
    {
        id: '372a70f3-3e26-4ce0-a390-0e9c36d88081',
        title: 'Fix Patio',
        description: 'Get the patio in order for summer.',
        tasks: [
            {
                id: 'a9127e46-7ba3-427f-bdff-55bab43c1b6f',
                task: 'Replace Rotted Planks',
                status: 'complete'
            },
            {
                id: 'c7bf950a-5cc4-49a9-ad48-45a682b1984d',
                task: 'Replace Rotted Posts',
                status: 'pending'
            },
            {
                id: 'fbc3c543-d646-44ad-9e63-fa4eb23d9834',
                task: 'Create Shim to Level Stairs',
                status: 'complete'
            },
            {
                id: 'd387a394-a69a-4e2d-91e2-dab76c60a213',
                task: 'Paint the Deck and Rails',
                status: 'pending'
            },
        ],
        status: 'pending',
        taskStatus: {
            totalTasks: 4,
            completedTasks: 2,
            pendingTasks: 2
        }
    },
    {
        id: '56b47c88-eb12-4f79-941d-4d5959050dc9',
        title: 'Prepare for Party',
        description: 'Buy and prep food for surprise birthday party.',
        tasks: [
            {
                id: '2d7b699b-2558-4089-b162-11296345d29c',
                task: 'Marinade Ribs and Chicken',
                status: 'complete'
            },
            {
                id: 'b2067889-5da5-4f49-9c71-4d5526176487',
                task: 'Buy Charcoal',
                status: 'complete'
            },
            {
                id: '74ae3a79-0711-494d-94c1-7fcf5e613a5c',
                task: 'Slice Cheese and Sausage',
                status: 'complete'
            },
            {
                id: '337f3c32-d4c1-4f6d-a11f-a1547268d86f',
                task: 'Make Charcutere Board',
                status: 'complete'
            },
            {
                id: '3fe1cc47-1bb7-458f-a4d4-169a000a98d3',
                task: 'Wash Bowls for Chips and Dip',
                status: 'complete'
            },
            {
                id: '4c38ef27-505d-4b7f-a7f9-46741505b09c',
                task: 'Pay Deposit for DJ',
                status: 'complete'
            },
            {
                id: '0c8fccfa-717d-4fb0-b28f-6e8123f5a6c1',
                task: 'Hang Lanterns',
                status: 'complete'
            },
            {
                id: 'ff1d9817-30f4-4246-8177-0dca6ab43ef1',
                task: 'Get Extra Chairs out of Garage and Wipe Them Down',
                status: 'complete'
            },
            {
                id: '229ffe62-f200-4769-9442-d917af610dac',
                task: 'Collect Wood for Firepit',
                status: 'complete'
            },
            {
                id: '7752b689-736c-4f8d-8fbb-cd3410169f5c',
                task: 'Buy Shot Glasses',
                status: 'complete'
            },
            {
                id: '59de5cc6-013d-4d31-ad56-d3a6866c9c00',
                task: 'Buy Napkins',
                status: 'complete'
            },
            {
                id: 'a59513bc-5ccb-4201-a3a4-ea053f5af88f',
                task: 'Clean Out Coolers',
                status: 'complete'
            }
        ],
        status: 'complete',
        taskStatus: {
            totalTasks: 12,
            completedTasks: 12,
            pendingTasks: 0
        }
    },
    {
        id: 'a6d0a765-8a75-4cb4-b83a-987250fb7039',
        title: 'Open Account',
        description: 'Start new bank account for business.',
        tasks: [
            {
                id: '11974ab3-8dc3-4418-ab39-8d82df7f40c6',
                task: 'Go To Bank and Open New Account',
                status: 'complete'
            }
        ],
        status: 'complete',
        taskStatus: {
            totalTasks: 1,
            completedTasks: 1,
            pendingTasks: 0
        }
    } 
]