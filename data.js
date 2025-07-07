const CODES = {
  "exp-9": `
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, mean_squared_error

iris = load_iris()
X, y = iris.data, iris.target

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

rf_regressor = RandomForestRegressor(n_estimators=100, random_state=42)
rf_regressor.fit(X_train, y_train)

y_pred_reg = rf_regressor.predict(X_test)
mse = mean_squared_error(y_test, y_pred_reg)

print(f"""Random Forest Regressor Mean Squared Error: {mse}""")
    `,
  "exp-10": `
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

iris = load_iris()
x, y = iris.data, iris.target

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=0)

gnb = GaussianNB()
y_pred = gnb.fit(x_train, y_train).predict(x_test)

print("""Accuracy: """, accuracy_score(y_test, y_pred))
print("""\nClassification Report:\n""", classification_report(y_test, y_pred))
print("""\nConfusion Matrix:\n""", confusion_matrix(y_test, y_pred))
    `,
};

export default CODES;
