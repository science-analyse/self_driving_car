# Self-Driving Car Simulation

This project is a simulation of self-driving cars navigating through a road environment. The cars utilize neural networks for decision-making and are equipped with sensors to perceive their surroundings. The simulation provides a platform for experimenting with different neural network architectures, sensor configurations, and car behaviors.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Customization](#customization)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

Self-driving cars have emerged as a significant area of research and development in recent years. This simulation aims to provide a sandbox environment for exploring various aspects of autonomous vehicle technology, including:

- Neural network-based decision-making
- Sensor data processing and interpretation
- Collision detection and avoidance strategies

The simulation allows users to observe and analyze the behavior of self-driving cars under different conditions, facilitating learning and experimentation in the field of autonomous systems.

## Features

- Simulation of multiple self-driving cars navigating through a road environment.
- Implementation of neural networks for decision-making by individual cars.
- Integration of sensors for detecting obstacles and boundaries on the road.
- Visualization of neural network architectures and sensor data for analysis.
- Customizable parameters for adjusting the behavior and performance of cars.

## Installation

To run the self-driving car simulation locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Ismat-Samadov/self_driving_car.git
   ```

2. Navigate to the project directory:

   ```bash
   cd self_driving_car
   ```

3. Open the `index.html` file in a web browser to launch the simulation.

## Usage

- Upon launching the simulation, you'll be presented with a visual representation of the road environment and the self-driving cars.
- Use the browser console to interact with the simulation:
  - Call the `save()` method to store a car's neural network in local storage.
  - Call the `discard()` method to remove the saved neural network from local storage.
- Experiment with different parameters such as the number of cars simulated in parallel (`N`) and the mutation amount to observe changes in behavior.

## Customization

The simulation is highly customizable, allowing users to tweak various parameters to suit their needs:

- Adjust the number of cars simulated in parallel (`N`) to observe the collective behavior of multiple cars.
- Modify the mutation amount to control the rate of mutation in neural networks.
- Customize the neural network architecture, sensor configurations, and car behaviors by modifying the corresponding JavaScript files.

## Contributing

Contributions to the project are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request. Your contributions will help enhance the simulation and make it more valuable for the community.