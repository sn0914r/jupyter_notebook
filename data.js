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

print(f"Random Forest Regressor Mean Squared Error: {mse}")
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

print("Accuracy: ", accuracy_score(y_test, y_pred))
print("\\nClassification Report:\\n", classification_report(y_test, y_pred))
print("\\nConfusion Matrix:\\n", confusion_matrix(y_test, y_pred))
    `,
  "exp-11": `
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, confusion_matrix, ConfusionMatrixDisplay
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

x = [[1, 2],
     [2, 3],
     [3, 1],
     [4, 3],
     [5, 3],
     [6, 2],
    ]
y = [0, 0, 0, 1, 1, 1]

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

svm_classifier = SVC(kernel="linear")
svm_classifier.fit(x_train, y_train)
y_pred = svm_classifier.predict(x_test)

print("Accuracy: ", accuracy_score(y_test, y_pred))

cm = confusion_matrix(y_test, y_pred)
disp = ConfusionMatrixDisplay(confusion_matrix=cm)
disp.plot()
plt.show()
    `,
  "exp-12": `
graph = {
  '5': ['3', '7'],
  '3': ['2', '4'],
  '7': ['8'],
  '2': [],
  '4': ['8'],
  '8': []
}

visited = []
queue = []

def bfs(visited, graph, node):
    visited.append(node)
    queue.append(node)

    while queue:
        m = queue.pop(0)
        print(m, end=" ")
        for i in graph[m]:
            if i not in visited:
                visited.append(i)
                queue.append(i)

print("Breadth First Search: ")
bfs(visited, graph, '5')
    `,
  "exp-1": `#a
import pandas as pd
a = [1, 3, 5]
my_series = pd.Series(a, index=["x", "y", "z"])
print(my_series)

#b
grades = {
    "Semester1":3.25,
    "Semester2":3.28,
    "Semester3":3.75
}
my_series = pd.Series(grades)
print(my_series)

#c
data={
    "calories": [420, 380, 390],
    "duration": [50, 40, 45]
}
myvar = pd.DataFrame(data)
print(myvar)`,
  "exp-2": "not updated",
  "exp-3": "not updatedd",
  "exp-4": "not updatedd",
  "exp-5": "not updatedd",
  "exp-6": "not updatedd",
  "exp-7": "not updatedd",
  "exp-8": "not updatedd",
};

export default CODES;
