# TEST PLAN 


## ATB Market


## Contents
1. [Purpose](#1-purpose)
2. [Test Items](#2-test-items)
  - 2.1. [Features to Be Tested](#21-features-to-be-tested)
  - 2.2. [Features Not to Be Tested](#22-features-not-to-be-tested)
3. [Test Strategy](#3-test-strategy)
  - 3.1. [Test Approach](#31-test-approach)
    - 3.1.1. [Test types](#311-test-types)
  - 3.2. [QC Activities Workflow](#32-qc-activities-workflow)
  - 3.3. [Test Planning](#33-test-planning)
  - 3.4. [Test Design](#34-test-design)
  - 3.5. [Test Execution](#35-test-execution)
  - 3.6. [Test Environment](#36-test-environment)
    - 3.6.1. [Configurations](#361-configurations)
    - 3.6.2. [Testing Tools](#362-testing-tools)
  - 3.7. [Test Cases](#37-test-cases)
4. [Risks](#4-risks)

---

## 1. Purpose

The purpose of this test plan is to ensure that the website functions correctly, is easy to use, and provides a secure and pleasant shopping experience for customers.

## 2. Test Items

The following essential system components are to be tested: 
- Application

### 2.1. Features to Be Tested

The main testing areas are listed below: 
- Application:
  - Search function
  - Some filtration tools
  - Adding to basket
  - Adding comments
  - Product details
  - Navigation bar
    
### 2.2. Features Not to Be Tested

The following features will not be tested: 
- Documentation products
- Authorization
- Ordering products

## 3. Test Strategy

Our strategy emphasizes validating essential functionalities such as search, product filtering, shopping cart management, and ordering processes to meet user expectations. Testing will cover functional, integration, and user acceptance levels, combining requirements-based testing with exploratory approaches. Defects will be prioritized based on their impact on user experience, with rigorous documentation and continuous improvement to ensure high-quality service delivery.

### 3.1. Test Approach

The suite of QC activities will include thorough quality checks, starting from planning and continuing through to final testing and closure. This ensures that every new feature and improvement is rigorously tested to uphold excellent functionality and user satisfaction.

Emphasis will be on thorough testing of critical functionalities like search, shopping cart management, ordering, and user accounts to ensure consistent quality and usability. Continuous quality checks will ensure that defects are identified early and addressed promptly to deliver a reliable and seamless online shopping experience.

#### 3.1.1. Test Types

The following types of testing will be performed within the project:
1. Functional Testing: Verify that each specific function (e.g., search, add to basket, order placement) performs as expected according to my requirements.
2. UI Testing: Validate that the user interface elements are user friendly (e.g., buttons, forms) and function correctly.

## 3.2. QC Activities Workflow

The QC process will include the following activities, integrating automation testing for selected features:
1. Planning and Preparation:
- Analyzing and clarifying the scope of tasks for each iteration, identifying features suitable for automation.
- Test planning to define testing objectives,scope,and resources needed.
2. Test Design and Implementation:
- Designing test cases and scenarios.
- Implementing test cases and preparing test data for execution.
- Designing automated test scripts for identified features such as search, add to basket and filtration.
- Implementing automated test cases using chosen automation tools and frameworks.
3. Manual and Automated Testing Execution:
- Executing manual tests for exploratorycasescenarios.
- Runningautomatedteststovalidaterepetitivetest
scenarios efficiently.
4. Reporting and Measurement:
- Reportingoncombinedtestresultsfrommanualand automated testing efforts.
- Collectingandanalyzingautomationtestmetrics.

## 3.3. Test Planning
## 3.4. Test Design
## 3.5. Test Execution
## 3.6. Test Environment

### 3.6.1. Configurations
Environment Requirements: The primary testing platform is macOS and Safari browser.
### 3.6.2. Testing Tools
Following tools will be used by QC team for quality control activities:
- Test Cases development and maintenance - Google Docs and Excel

## 3.7 Test Cases


| TEST CASE ID | SUMMARY | PRECONDITIONS |     STEPS     | EXPECTED RESULT | TEST SUITE | PRIORITY |
|:------------:|---------|---------------|---------------|-----------------|------------|----------|
| TC01 | Check if all fields in Navbar/Menu are present | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Visually inspect each menu item in the navbar.</li><li>Ensure dropdown menus and subcategories are visible.</li><li>Verify the search bar, basket, profile and favorite products buttons are present and appropriately placed.</li></ol> | <ol><li>The buttons in navbar: “Акції”, “Партнерам” - both with dropdown subcategories, “Картка АТБ”, “Товари власних брендів”, “Карʼєра”, “Сертифікат”, “Газета”, “Оплата та Доставка”, “Мапа магазинів”, phone number of market should be visible.</li><li>The search bar, basket, profile and favorite products buttons should be present and appropriately placed.</li></ol> | Page Loading | P0 |
| TC02 | Check if all blocks with products are present | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Visually inspect blocks with products on the homepage.</li></ol> | <ol><li>The carousel with advertising should be present.</li><li>Blocks: with categories of products, “Акція ʼЕкономіяʼ ”, ”Бакалія”, ”Побутова хімія та непродовольчі товари” should be present appropriately placed.</li></ol> | Page Loading | P0 |
| TC03 | Check the search bar with keyword | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Click the search bar.</li><li>Enter a product name - “вода” - in the search bar.</li></ol> | <ol><li>The search results page should display products matching the search criteria - “вода”.</li><li>All proposed products should contain the keyword - “вода”. The name can be in any register.</li><li>On the left of this window, there should be a list of subcategories that contain products “вода”, along with the number of products in each subcategory.</li><li>On the center should be the name of the subcategory.</li><li>On the top left corner this context menu should contain a close button.</li></ol> | Search field | P1 |
| TC04 | Check the search bar by brand | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Click the search bar.</li><li>Enter a product brand - “lovare” - in the search bar.</li></ol> | <ol><li>The search results page should display products matching the search criteria - “lovare”.</li><li>All proposed products should contain the keyword - “lovare”. The name can be in any register.</li><li>On the left of this window, there should be a list of subcategories that contain products “lovare”, along with the number of products in each subcategory.</li><li>On the center should be the name of the subcategory.</li><li>On the top left corner this context menu should contain a close button.</li></ol> | Search field | P1 |
| TC05 | Check the search bar with product after some change | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Click the search bar.</li><li>Enter a product - “пиво” - in the search bar.</li><li>Clean field and enter another product - “молоко”.</li></ol> | <ol><li>The search results page should display products matching the search criteria - “молоко”.</li><li>All proposed products should contain the keyword - “молоко”. The name can be in any register.</li><li>On the left of this window, there should be a list of subcategories that contain products “молоко”, along with the number of products in each subcategory.</li><li>On the center should be the name of the subcategory.</li><li>On the top left corner this context menu should contain a close button.</li></ol> | Search field | P2 |
| TC06 | Check the adding to basket functionality | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>In the search bar enter “цибуля” and click 'Enter'.</li><li>On the search page find “Цибуля ріпчаста рання” and click the basket button on the bottom right side.</li></ol> | <ol><li>The product “Цибуля ріпчаста рання” should be in the basket.</li><li>On the top right side of the navbar, a basket icon should appear with a red number '1'.</li><li>On the bottom right side of the product block for “Цибуля ріпчаста рання”, the basket icon should turn into a quantity selector with the number ‘1’.</li></ol> | Basket | P2 |
| TC07 | Check the change of price in the basket | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>In the search bar enter a “вода карпатська” and click 'Enter'.</li><li>On the search page find “Вода 2л Карпатська джерельна негазована” and click the basket button on the bottom right side.</li><li>Go to basket.</li><li>Change the quantity of the product to ‘2’.</li></ol> | <ol><li>The payment amount should increase twofold.</li></ol> | Basket | P2 |
| TC08 | Check the deletion in the basket | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>In the search bar enter a “вода карпатська” and click 'Enter'.</li><li>On the search page find “Вода 2л Карпатська джерельна негазована” and click the basket button on the bottom right side.</li><li>Go to basket.</li><li>Delete this product from the basket.</li></ol> | <ol><li>Basket should be empty.</li></ol> | Basket | P2 |
| TC09 | Check the price filtration on some category | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Scroll down to the block with product categories.</li><li>Click on the category 'Напої безалкогольні'.</li><li>On the left side, where there are filtration tools, set ‘100’ on ‘Ціна’ slider and click ‘OK’.</li></ol> | <ol><li>After filtration all products should cost between ‘1’ and ‘100’ c.u.</li></ol> | Filtration | P2 |
| TC10 | Check the product filtration on some category | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Scroll down to the block with product categories.</li><li>Click on the category ‘Овочі та фрукти’.</li><li>On the left side, where there are filtration tools, set ‘акція’ and ‘хіт’ on ‘Пропозиції’ block and ‘Туреччина’ on ‘Країна’ block.</li></ol> | <ol><li>After filtration products should have all of these filtration fields: ‘акція’, ‘хіт’ and ‘Туреччина’.</li></ol> | Filtration | P2 |
| TC11 | Reset all filters | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Scroll down to the block with product categories.</li><li>Click on the category ‘Овочі та фрукти’.</li><li>On the left side, where there are filtration tools, set ‘200’ on ‘Ціна’ slider and click ‘OK’.</li><li>Set ‘хіт’ on ‘Пропозиції’ block and ‘Україна’ on ‘Країна’ block.</li><li>Reset all filters.</li></ol> | <ol><li>All ticks in boxes and selection on sliders should be cleared.</li></ol> | Filtration | P2 |
| TC12 | Delete product from favorite page | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Scroll down to the block with product categories.</li><li>Click on the category ‘Овочі та фрукти’.</li><li>Filter products by dropdown on the right side “Дорогі”.</li></ol> | <ol><li>All products from this category should be filtered from most expensive to cheapest.</li></ol> | Filtration | P3 |
| TC13 | Add product to favorite page | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Scroll down to the block with product categories.</li><li>Click on the category ‘Овочі та фрукти’.</li><li>Find product - “Картопля”.</li><li>Add it to favorite page.</li></ol> | <ol><li>The product “Картопля” should be on the favorite page.</li><li>On the top right side of the navbar, a ‘favorite’ icon should appear with a red number '1'.</li><li>On the top right side of the product block for “Картопля”, the ‘favorite’ icon should turn into a red heart.</li></ol> | Favorite products | P3 |
| TC14 | Delete product from favorite page | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Scroll down to the block with product categories.</li><li>Click on the category ‘Овочі та фрукти’.</li><li>Find product - “Картопля”.</li><li>Add it to favorite page.</li><li>Delete product from favorite page.</li></ol> | <ol><li>Favorite page should be empty.</li></ol> | Favorite products | P3 |
| TC15 | Check content on the product page | Open link [ATB Market](https://www.atbmarket.com) | <ol><li>Navigate to the ATB Market homepage.</li><li>Scroll down to the block with product categories.</li><li>Click on the category ‘Морозиво’.</li><li>Find product - “Морозиво 100 г Три Ведмеді Крем-брюле ваф/стак п/ет”.</li><li>Go to the product details page.</li></ol> | <ol><li>Page should contain a photo of the product, price, product code, availability in city stores, button “Купити”, block ‘Feedback from our customers’, block with Recommended items.</li></ol> | Favorite products | P4 |


## 4. Risks

Risk: Insufficient human resources allocated for testing. Responsible: QC Lead
