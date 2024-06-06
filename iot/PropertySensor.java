import org.eclipse.paho.client.mqttv3.IMqttClient;
import org.eclipse.paho.client.mqttv3.MqttClient;
import org.eclipse.paho.client.mqttv3.MqttException;

public class PropertySensor {
    private IMqttClient mqttClient;

    public PropertySensor(String mqttBrokerUrl, String sensorId) {
        mqttClient = new MqttClient(mqttBrokerUrl, sensorId);
        mqttClient.connect();
    }

    public void sendSensorData(float temperature, float humidity) {
        // Send sensor data to MQTT broker
        mqttClient.publish("property/" + sensorId + "/data", temperature + "," + humidity);
    }
}
