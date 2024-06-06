import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PropertyCommerceCoreService {
    @GetMapping("/healthcheck")
    public String healthcheck() {
        return "Property Commerce Core Service is up and running!";
    }
}
