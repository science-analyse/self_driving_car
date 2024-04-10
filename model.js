// Load required modules
const tf = require('@tensorflow/tfjs');
const mnist = require('mnist');

// Define the model architecture and compile it
const model = tf.sequential();
model.add(tf.layers.conv2d({
    inputShape: [28, 28, 1],
    filters: 32,
    kernelSize: 3,
    activation: 'relu'
}));
model.add(tf.layers.maxPooling2d({ poolSize: [2, 2] }));
model.add(tf.layers.flatten());
model.add(tf.layers.dense({ units: 128, activation: 'relu' }));
model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));
model.compile({
    optimizer: 'adam',
    loss: 'sparseCategoricalCrossentropy',
    metrics: ['accuracy']
});

// Load and preprocess the MNIST dataset
const set = mnist.set(8000, 2000);
if (!set || !set.training || !set.test) {
    console.error('Failed to load MNIST dataset');
    process.exit(1);
}
const trainingSet = set.training;
const testingSet = set.test;
const { images: trainingImages, labels: trainingLabels } = trainingSet;
const { images: testingImages, labels: testingLabels } = testingSet;
if (!trainingImages || !trainingLabels || !testingImages || !testingLabels) {
    console.error('Failed to extract data from MNIST dataset');
    process.exit(1);
}
const xTrain = tf.tensor4d(trainingImages, [trainingImages.length, 28, 28, 1]);
const yTrain = tf.tensor1d(trainingLabels);
const xTest = tf.tensor4d(testingImages, [testingImages.length, 28, 28, 1]);
const yTest = tf.tensor1d(testingLabels);

// Train the model
async function trainModel() {
    await model.fit(xTrain, yTrain, {
        batchSize: 32,
        epochs: 5,
        validationData: [xTest, yTest]
    });
}

console.log('Training set:', trainingSet);
console.log('Testing set:', testingSet);
console.log('Training images:', trainingImages.length);
console.log('Training labels:', trainingLabels.length);
console.log('Testing images:', testingImages.length);
console.log('Testing labels:', testingLabels.length);

trainModel().then(() => {
    console.log('Model trained successfully.');
    // Save the model
    model.save('file://./saved_model').then(() => {
        console.log('Model saved successfully.');
    });
}).catch(error => {
    console.error('Failed to train the model:', error);
});
