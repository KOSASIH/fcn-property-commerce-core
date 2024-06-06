import org.tensorflow.Graph;
import org.tensorflow.Output;
import org.tensorflow.Session;
import org.tensorflow.Tensor;

public class Chatbot {
    private Session session;
    private Graph graph;

    public Chatbot() {
        // Load TensorFlow model
        graph = new Graph();
        session = new Session(graph);
        // Load pre-trained model
        Tensor<Float> inputTensor = Tensor.create(new float[] {1, 2, 3, 4, 5});
        Output<Float> output = session.runner().feed("input", inputTensor).fetch("output").run().get(0).expect(Float.class);
        // Initialize chatbot
        chatbot = new ChatbotModel(output);
    }

   
