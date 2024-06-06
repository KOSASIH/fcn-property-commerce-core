import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BehavioralAnalyticsService {
    @Autowired
    private BehavioralAnalyticsModel model;

    @GetMapping("/user/{userId}/behavioral-analytics")
    public String getUserBehavioralAnalytics(@PathVariable Long userId) {
        // Retrieve user behavioral data
        String behavioralData = model.analyzeUserBehavior(userId);
        return behavioralData;
    }
}
