export const metadata = [
	{
		exerciseBlueprint: {
			baseConfig: {
				numSets: 3,
				numReps: 10,
				side: "LEFT",
				restDurationMs: 30000,
				setDurationMs: 300000,
			},
			exerciseId: "SIDELYING_HIP_ABDUCTION",
		},

		exerciseDetails: {
			instructions: {
				setup: ["Begin lying on your side with your legs straight."],
				movement: [
					"Slowly lift your top leg up towards the ceiling, then lower it back to the starting position and repeat.",
				],
				tips: [
					"Make sure to keep your knee straight and do not let your hips roll forward or backward during the exercise.",
				],
			},
			deviceSetupPosition:
				"Floor space or bench to set device at ankle height",
			exerciseEquipment: [],
		},
		friendlyExerciseName: "Sidelying Hip Abduction",
	},
	{
		exerciseBlueprint: {
			baseConfig: {
				numSets: 3,
				numReps: 10,
				side: "BOTH",
				restDurationMs: 30000,
				setDurationMs: 300000,
			},
			exerciseId:
				"SHOULDER_HORIZONTAL_ABDUCTION_WITH_RESISTANCE_ON_SWISS_BALL",
		},

		exerciseDetails: {
			instructions: {
				setup: [
					"Begin sitting on a swiss ball holding a resistance band in both hands.",
				],
				movement: [
					"Raise your arms straight in front of your body, palms facing downward.",
					"Pull your hands apart until your arms are straight to your sides.",
				],
				tips: [
					"Make sure maintain your balance on the ball and do not arch your back during the exercise. Think of squeezing your shoulder blades together as you pull your arms apart.",
					"Make sure to keep your arms straight throughout the exercise.",
					"If you do not have a swiss ball, you can perform this exercise standing with your back against a wall.",
				],
			},
			deviceSetupPosition:
				"Counter or table to set device at waist height",
			exerciseEquipment: ["Resistance Band", "Yoga Ball"],
		},
		friendlyExerciseName:
			"Shoulder Horizontal Abduction with Resistance on Swiss Ball",
	},
	{
		exerciseBlueprint: {
			baseConfig: {
				numSets: 3,
				numReps: 10,
				side: "LEFT",
				restDurationMs: 30000,
				setDurationMs: 300000,
				holdDurationMs: 10000,
			},
			exerciseId: "STANDING_ITB_STRETCH",
		},

		exerciseDetails: {
			instructions: {
				setup: [
					"Begin in a standing upright position with one leg crossed over the other.",
				],
				movement: [
					"Move the hip of your leg to be stretched out to the side and reach your arm overhead to the opposite side.",
				],
				tips: [
					"Make sure to avoid twisting or rotating your body during the exercise.",
					"Make sure to keep your back straight throughout the exercise.",
				],
			},
			deviceSetupPosition:
				"Counter or table to set device at waist height",
			exerciseEquipment: [],
		},
		friendlyExerciseName: "Standing ITB Stretch",
	},
];

