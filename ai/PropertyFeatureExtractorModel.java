import org.tensorflow.Tensor;

public class PropertyFeatureExtractorModel {
    private Tensor<Float> outputTensor;

    public PropertyFeatureExtractorModel(Tensor<Float> outputTensor) {
        this.outputTensor = outputTensor;
    }

    public PropertyFeatures extractFeatures(Tensor<Float> output) {
        // Get extracted features from output tensor
        float[] features = output.getFloatArray();
        PropertyFeatures propertyFeatures = new PropertyFeatures(features);
        return propertyFeatures;
    }
}
