import org.hyperledger.fabric.contract.ContractInterface;
import org.hyperledger.fabric.contract.annotation.Contract;
import org.hyperledger.fabric.contract.annotation.Transaction;

@Contract(name = "PropertyOwnershipContract")
public class PropertyOwnershipSmartContract implements ContractInterface {
    @Transaction
    public void transferPropertyOwnership(String propertyId, String newOwner) {
        // Update property ownership on blockchain
        blockchain.updatePropertyOwnership(propertyId, newOwner);
    }

    @Transaction
    public String getPropertyOwner(String propertyId) {
        // Retrieve property owner from blockchain
        return blockchain.getPropertyOwner(propertyId);
    }
}
