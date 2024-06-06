import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PropertyPricePredictionService {
    @Autowired
    private PropertyPricePredictor predictor;

    @GetMapping("/predict/{propertyId}")
    public float predictPropertyPrice(@PathVariable Long propertyId) {
        Property property = propertyRepository.findById(propertyId).orElseThrow();
        return predictor.predictPropertyPrice(property);
    }
}
