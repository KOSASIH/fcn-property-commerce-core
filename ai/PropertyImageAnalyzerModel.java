import org.tensorflow.Tensor;

public class PropertyImageAnalyzerModel {
    private Tensor<Float> outputTensor;

    public PropertyImageAnalyzerModel(Tensor<Float> outputTensor) {
        this.outputTensor = outputTensor;
    }

    public ImageAnalysisResult analyzePropertyImage(Tensor<Float> output) {
        // Get image analysis result from output tensor
        float[] features = output.getFloatArray();
        ImageAnalysisResult result = new ImageAnalysisResult(features);
        return result;
    }
}
