import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PropertyAnalyticsService {
    @Autowired
    private PropertyDataPipeline pipeline;

    @GetMapping("/property/analytics")
    public String getPropertyAnalytics() {
        // Retrieve analytics data from Elasticsearch
        String analyticsData = elasticsearchClient.search("property-analytics");
        return analyticsData;
    }
}
