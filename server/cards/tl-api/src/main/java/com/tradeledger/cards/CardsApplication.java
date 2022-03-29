package com.tradeledger.cards;

import com.tradeledger.cards.common.Applicant;
import com.tradeledger.cards.common.EligibleCards;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import javax.validation.Valid;

@SpringBootApplication
public class CardsApplication extends ServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(CardsApplication.class, args);
	}

	@RestController
	public static class CardsApplicationController {

		@Value("${third.party.service.endpoint}")
		private String SERVICE_ENDPOINT;

		private final WebClient.Builder builder;

		public CardsApplicationController(WebClient.Builder builder) {
			this.builder = builder;
		}

		@PostMapping("/apply")
		public EligibleCards handler(@Valid @RequestBody Applicant applicant) {

			return builder.build()
					.post()
					.uri(SERVICE_ENDPOINT)
					.bodyValue(applicant)
					.retrieve()
					.bodyToMono(EligibleCards.class)
					.block();
		}
	}

}
