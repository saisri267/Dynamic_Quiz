import time
import os
import random

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# ===================== CONFIG =====================
BASE_URL = "http://localhost/QUIZ_APP"
SHOT_DIR = "screenshots"

os.makedirs(SHOT_DIR, exist_ok=True)

# ===================== DRIVER =====================
options = Options()
options.add_argument("--start-maximized")

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)
wait = WebDriverWait(driver, 10)

# ===================== HELPERS =====================
def snap(name):
    driver.save_screenshot(f"{SHOT_DIR}/{name}.png")

def random_option():
    radios = driver.find_elements(By.CSS_SELECTOR, "input[type='radio']")
    if radios:
        random.choice(radios).click()

# ===================== TC1: LOGIN PAGE =====================
driver.get(f"{BASE_URL}/login.php")
time.sleep(1)
snap("TC1_Login_Page")

# ---- SAFE LOGIN HANDLING ----
inputs = driver.find_elements(By.TAG_NAME, "input")
if inputs:
    inputs[0].send_keys("testuser")
    driver.find_element(By.TAG_NAME, "button").click()

# ===================== TC2: LANDING PAGE =====================
wait.until(EC.presence_of_element_located((By.CLASS_NAME, "landing-title")))
snap("TC2_Landing_Page")

# ===================== TC3: START QUIZ =====================
driver.find_element(By.CLASS_NAME, "btn-primary").click()
wait.until(EC.presence_of_element_located((By.ID, "question")))
snap("TC3_Quiz_Started")

# ===================== TC4: TIMER DISPLAY =====================
time.sleep(1)
snap("TC4_Timer_Displayed")

# ===================== TC5: NEXT WITHOUT OPTION =====================
driver.find_element(By.ID, "nextBtn").click()
time.sleep(0.5)
snap("TC5_Next_button_Warning")

# ===================== TC6: ANSWER Q1–Q9 RANDOM =====================
for _ in range(9):
    random_option()
    time.sleep(0.15)
    driver.find_element(By.ID, "nextBtn").click()
    time.sleep(0.15)

snap("TC6_All_Answered")

# ===================== TC7: SUBMIT ERROR (Q10 EMPTY) =====================
submit_btn = driver.find_element(By.ID, "submitBtn")
driver.execute_script("arguments[0].click();", submit_btn)
time.sleep(0.6)
snap("TC7_Submit_Error")

# ===================== FIX Q10 & SUBMIT =====================
random_option()
time.sleep(0.2)
driver.execute_script("arguments[0].click();", submit_btn)

# ===================== TC8: RESULT PAGE =====================
wait.until(EC.presence_of_element_located((By.CLASS_NAME, "results-page")))
snap("TC8_Result_Page")

# ===================== TC9: START NEW QUIZ =====================
driver.find_element(By.CLASS_NAME, "btn-primary").click()
time.sleep(1)
snap("TC9_Start_New_Quiz")

# ===================== CLEANUP =====================
driver.quit()
print("✅ ALL 9 TEST CASES EXECUTED SUCCESSFULLY")
