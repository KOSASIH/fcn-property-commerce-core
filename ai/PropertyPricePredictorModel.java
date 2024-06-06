import org.tensorflow.Tensor;

public class PropertyPricePredictorModel {
    private Tensor<Float> outputTensor;

    public PropertyPricePredictorModel(Tensor<Float> outputTensor) {
        this.outputTensor = outputTensor;
    }

    public float predictPropertyPrice(Tensor<Float> output) {
        // Get predicted property price from output tensor
        float predictedPrice = output.getFloat(0);
        return predictedPrice;
    }
}
