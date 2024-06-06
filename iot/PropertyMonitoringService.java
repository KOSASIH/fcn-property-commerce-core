import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PropertyMonitoringService {
    @Autowired
    private PropertySensor sensor;

    @GetMapping("/property/{propertyId}/monitoring")
    public String getPropertyMonitoringData(@PathVariable Long propertyId) {
        // Retrieve sensor data from MQTT broker
        String sensorData = mqttClient.subscribe("property/" + propertyId + "/data");
        return sensorData;
    }
}
