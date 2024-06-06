import org.tensorflow.Tensor;

public class PropertyClassifierModel {
    private Tensor<Float> outputTensor;

    public PropertyClassifierModel(Tensor<Float> outputTensor) {
        this.outputTensor = outputTensor;
    }

    public String classifyProperty(Tensor<Float> output) {
        // Get classified property type from output tensor
        float[] probabilities = output.getFloatArray();
        int maxIndex = getMaxIndex(probabilities);
        String propertyType = getPropertyTypeFromIndex(maxIndex);
        return propertyType;
    }

    private int getMaxIndex(float[] probabilities) {
        // Implement logic to get max index from probabilities array
        return 0;
    }

    private String getPropertyTypeFromIndex(int index) {
        // Implement logic to get property type from index
        return "Residential";
    }
}
