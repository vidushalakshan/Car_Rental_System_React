package lk.ijse.spring.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "lk.ijse.spring.repo")
@PropertySource("classpath:application.properties")
public class JPAConfig {

    @Autowired
    Environment env;

    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource,JpaVendorAdapter jva){
        LocalContainerEntityManagerFactoryBean bean = new LocalContainerEntityManagerFactoryBean();
        bean.setJpaVendorAdapter(jva);
        bean.setDataSource(dataSource);
        bean.setPackagesToScan(env.getRequiredProperty("entity.package.name"));
        return bean;
    }
}
