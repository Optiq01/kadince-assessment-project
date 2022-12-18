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
    },
    {
        id: '2ac80af2-1b49-4718-bb0f-4bb1573d8eb6',
        title: 'Organize Garage',
        description: 'Go through the garage and get rid of stuff we no longer need and organize what we keep.',
        tasks: [
            {
                id: '86be33d8-71ec-4c07-9978-3bee3e6400e5',
                task: 'Take Old Bikes to Goodwill',
                status: 'complete'
            },
            {
                id: '2471f247-5e27-4f04-a845-1b3011fdf4a9',
                task: 'Sort Through Scrap Wood',
                status: 'pending'
            },
            {
                id: '4e1233f8-b155-4787-9d0c-4413074d7354',
                task: 'Install New Shelves on Wall',
                status: 'pending'
            },
            {
                id: '804bdcb6-c479-4496-9a1f-f45ba60da8dc',
                task: 'Pressure Wash the Floor',
                status: 'pending'
            },
            {
                id: 'e357d59f-be68-43f6-a181-49197e101cb2',
                task: 'Take Cans to Recycling Center',
                status: 'pending'
            },
            {
                id: '848ac1d3-ea08-4305-9dcd-3fb1237f73f7',
                task: 'Organize Tools',
                status: 'pending'
            },
            {
                id: 'eccd649c-7971-40d5-a258-6dcb9213d19c',
                task: 'Buy Bin for Shovels and Rakes',
                status: 'complete'
            },
        ],
        status: 'pending',
        taskStatus: {
            totalTasks: 7,
            completedTasks: 2,
            pendingTasks: 5
        }
    },
    {
        id: '72f31a8a-311a-43ff-b370-bda3c61400dc',
        title: 'Start Seeds',
        description: 'Winter sow herb and veggie seeds so they can be ready by spring.',
        tasks: [
            {
                id: 'e804a18f-6d29-4d2d-9b40-231305dcbce6',
                task: 'Collect Enough Milk and Water Jugs',
                status: 'complete'
            },
            {
                id: 'ae80e265-2020-42b1-9e3d-3d9918f49090',
                task: 'Mix Soil',
                status: 'pending'
            },
            {
                id: 'f96c956b-e127-45d9-b2ca-7a20cb956e0d',
                task: 'Buy Packing Tape',
                status: 'pending'
            },
            {
                id: '3325ca05-aec9-4cee-850d-43dd3917482f',
                task: 'Dry and Grind Bananna Peels',
                status: 'pending'
            },
            {
                id: 'c16903cb-ef02-4aff-a434-268146b0b028',
                task: 'Clear Space Next To House for Jugs',
                status: 'pending'
            }
        ],
        status: 'pending',
        taskStatus: {
            totalTasks: 5,
            completedTasks: 1,
            pendingTasks: 4
        }
    },
    {
        id: 'fe960bff-55c3-4463-b1f7-d98c2e47971f',
        title: 'Make Coffee Table',
        description: 'Build new coffee table to go in mancave.',
        tasks: [
            {
                id: '59b05f67-11ac-4378-a66c-6d2aff02fe20',
                task: 'Run Top Boards Through Planer',
                status: 'complete'
            },
            {
                id: 'aaa9b886-0c5b-4457-975c-d7d6ad9b1d26',
                task: 'Glue Up Boards for the Legs',
                status: 'complete'
            },
            {
                id: 'c6ffd234-06a4-42b3-87b6-b50b60479349',
                task: 'Assemble Skirt',
                status: 'complete'
            },
            {
                id: '61333e07-cbb1-4f02-8a55-0eac09b62b6f',
                task: 'Order Epoxy Resin',
                status: 'pending'
            },
            {
                id: 'f02ef642-3cbf-4a8e-a766-d979a6bfb511',
                task: 'Assemble Drawers',
                status: 'complete'
            },
            {
                id: '18bbc417-e3b5-40bf-92fe-032871b4794c',
                task: 'Pick Out Boards for Bottom Shelf',
                status: 'complete'
            },
            {
                id: '18bbc417-e3b5-40bf-92fe-032871b4794c',
                task: 'Pick Out Decorative Hardware',
                status: 'pending'
            }
        ],
        status: 'pending',
        taskStatus: {
            totalTasks: 7,
            completedTasks: 5,
            pendingTasks: 2
        }
    },
    {
        id: '40d43bce-3e08-4341-a080-b2949cedf860',
        title: 'Mount TV',
        description: 'Mount new flatscreen on kitchen wall.',
        tasks: [
            {
                id: 'a85bf8a8-3c46-4486-ba04-e8e39e384084',
                task: 'Get New Stud Finder',
                status: 'complete'
            },
            {
                id: 'e60382b5-3fba-4191-94fa-5370c4086a03',
                task: 'Buy Wall Mount',
                status: 'complete'
            },
            {
                id: '117d3f74-c1af-4937-b100-ca7f52fdaf7c',
                task: 'Buy New Drill Bit',
                status: 'pending'
            }
        ],
        status: 'pending',
        taskStatus: {
            totalTasks: 3,
            completedTasks: 2,
            pendingTasks: 1
        }
    },
    {
        id: '5ea01b0a-3345-4ad7-86cb-7bc9fd739476',
        title: 'Clean Bathroom',
        description: 'Give bathroom a good cleaning.',
        tasks: [
            {
                id: '399cfa84-b9d9-4624-880e-361bd0ca343e',
                task: 'Clean Tub',
                status: 'complete'
            },
            {
                id: '1d486cba-a558-4017-9fa0-086bfbc50fa5',
                task: 'Clean Tiles in Shower',
                status: 'complete'
            },
            {
                id: '8aab5443-272c-4f29-b8ae-a126cc629654',
                task: 'Wipe Orange Spots off Ceiling',
                status: 'complete'
            },
            {
                id: '5aa2ced1-93c2-41ca-bac1-30d905094e19',
                task: 'Clean Toilet',
                status: 'complete'
            },
            {
                id: '1378b2c5-1f9b-4f78-b621-2fb3fdb7234f',
                task: 'Clean Mirror',
                status: 'complete'
            },
            {
                id: '4462d8da-7a5c-4a17-82bc-f803ecd558e7',
                task: 'Scrub Shower Doors with Lime Away',
                status: 'complete'
            },
            {
                id: 'e619e381-f0e2-4087-8f1d-89c0f72fe09c',
                task: 'Clean Sink',
                status: 'complete'
            },
            {
                id: '20430991-c71d-464e-a999-afe1731982a3',
                task: 'Wash Blinds on Window',
                status: 'complete'
            },
            {
                id: 'f40910d1-f26a-4027-97af-dd8c869e274e',
                task: 'Clean Windows Inside and Out',
                status: 'complete'
            },
            {
                id: '014fb85e-07fc-4c2c-863f-791d07181396',
                task: 'Mop Floor',
                status: 'complete'
            },
        ],
        status: 'complete',
        taskStatus: {
            totalTasks: 10,
            completedTasks: 10,
            pendingTasks: 0
        }
    },
    {
        id: 'be7be2e2-8521-4c24-ab69-540d0dc585bd',
        title: 'Set Up Studio',
        description: 'Get music room set up for making music.',
        tasks: [
            {
                id: '278ce2d3-ee35-43b2-8ba3-50e9ccb007f5',
                task: 'Install Sound Card into Computer',
                status: 'complete'
            },
            {
                id: 'e2277914-3079-425b-9657-ae6ef0e64350',
                task: 'Buy Cords for Studio Monitors',
                status: 'complete'
            },
            {
                id: 'd9e18569-d9dd-4633-b61f-801b5ec8a05b',
                task: 'Screw Difusers Into Wall',
                status: 'complete'
            },
            {
                id: '22287ba6-7906-426c-a88a-811190fb71b2',
                task: 'Anchor Hooks in Wall for Instruments',
                status: 'complete'
            },
            {
                id: '7b91989f-efcd-415c-9db5-8c5872dd6d8f',
                task: 'Place Bass Traps',
                status: 'complete'
            },
            {
                id: '9c593e14-a3a8-4ad3-83dc-0d2f393db5f0',
                task: 'Setup Dual Monitors',
                status: 'complete'
            },
            {
                id: '56280e30-86be-452f-806d-ca06e7071a2b',
                task: 'Install DAW and Plugins',
                status: 'complete'
            },
            {
                id: 'ec35eeac-d9ed-45fc-969d-0324678eb0e7',
                task: 'Buy Surge Protector',
                status: 'complete'
            },
        ],
        status: 'complete',
        taskStatus: {
            totalTasks: 8,
            completedTasks: 8,
            pendingTasks: 0
        }
    } 
]