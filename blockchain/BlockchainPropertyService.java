import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BlockchainPropertyService {
    @Autowired
    private PropertyOwnershipSmartContract contract;

    @GetMapping("/property/{propertyId}/owner")
    public String getPropertyOwner(@PathVariable String propertyId) {
        return contract.getPropertyOwner(propertyId);
    }

    @GetMapping("/property/{propertyId}/transfer/{newOwner}")
    public void transferPropertyOwnership(@PathVariable String propertyId, @PathVariable String newOwner) {
        contract.transferPropertyOwnership(propertyId, newOwner);
    }
}
