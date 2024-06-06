import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

public class MultiFactorAuthentication implements AuthenticationProvider {
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        // Authenticate user using username and password
        UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) authentication;
        // Verify second factor (e.g., OTP, biometric)
        if (!verifySecondFactor(token.getUsername(), token.getPassword())) {
            throw new AuthenticationException("Invalid second factor");
        }
        return token;
    }

    private boolean verifySecondFactor(String username, String password) {
        // Implement second factor verification logic
        return true;
    }
}
