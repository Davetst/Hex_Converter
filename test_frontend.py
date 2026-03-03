# test_frontend.py
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


@pytest.fixture
def browser():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()


def test_hex_to_rgb_conversion(browser):
    # 1. Avataan paikallinen sivusto
    browser.get("http://localhost:3000")

    # 2. Etsitään syöttökenttä ja kirjoitetaan siihen värikoodi
    hex_input = browser.find_element(By.ID, "hexInput")
    hex_input.send_keys("00ff00")

    # 3. Etsitään Muunna-painike ja klikataan sitä
    convert_button = browser.find_element(By.XPATH, "//button[text()='Muunna']")
    convert_button.click()

    # 4. Odotetaan, että tuloskenttään ilmestyy tekstiä (joka sisältää 'R:0')
    WebDriverWait(browser, 5).until(
        EC.text_to_be_present_in_element((By.ID, "hexResult"), "R:0")
    )

    # 5. Varmistetaan, että tulos on täsmälleen oikein
    result_text = browser.find_element(By.ID, "hexResult").text
    assert "R:0 G:255 B:0" in result_text

    # 6. Otetaan vaadittu kuvakaappaus testin onnistumisesta
    browser.save_screenshot("frontend_test.png")
