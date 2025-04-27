"use client"

import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface SubjectMarksChartProps {
  data: {
    subject: string
    marks: number
    totalMarks: number
  }[]
}

export default function SubjectMarksChart({ data }: SubjectMarksChartProps) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Marks",
        data: [],
        backgroundColor: "",
        borderColor: "",
        borderWidth: 1,
      },
    ],
  })

  const [options, setOptions] = useState<ChartOptions<"bar">>({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "",
        },
      },
      title: {
        display: true,
        text: "Subject-wise Marks",
        color: "",
      },
      tooltip: {
        backgroundColor: "",
        titleColor: "",
        bodyColor: "",
        borderColor: "",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: {
          color: "",
        },
        ticks: {
          color: "",
        },
      },
      x: {
        grid: {
          color: "",
        },
        ticks: {
          color: "",
        },
      },
    },
  })

  useEffect(() => {
    // Update chart colors based on theme
    const isDarkMode = document.documentElement.classList.contains("dark")

    const textColor = isDarkMode ? "#e5e5e5" : "#333333"
    const gridColor = isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
    const tooltipBgColor = isDarkMode ? "#1f2937" : "#ffffff"
    const tooltipBorderColor = isDarkMode ? "#374151" : "#e5e5e5"

    // Generate gradient colors for bars - all blue
    const createGradient = (ctx: CanvasRenderingContext2D) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400)
      if (isDarkMode) {
        gradient.addColorStop(0, "#3b82f6") // Blue 500
        gradient.addColorStop(1, "#2563eb") // Blue 600
      } else {
        gradient.addColorStop(0, "#2563eb") // Blue 600
        gradient.addColorStop(1, "#1d4ed8") // Blue 700
      }
      return gradient
    }

    // Get canvas context for gradient
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    // Use the same blue gradient for all bars
    const blueGradient = ctx ? createGradient(ctx) : isDarkMode ? "#3b82f6" : "#2563eb"

    setChartData({
      labels: data.map((item) => item.subject),
      datasets: [
        {
          label: "Marks",
          data: data.map((item) => (item.marks / item.totalMarks) * 100),
          backgroundColor: blueGradient,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 4,
          barThickness: 40, // Increased from 30 to 40
          maxBarThickness: 50, // Increased from 40 to 50
        },
      ],
    })

    setOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        tooltip: {
          backgroundColor: tooltipBgColor,
          titleColor: textColor,
          bodyColor: textColor,
          borderColor: tooltipBorderColor,
          borderWidth: 1,
          padding: 12,
          cornerRadius: 4,
          displayColors: false,
          callbacks: {
            title: (tooltipItems) => `${tooltipItems[0].label}`,
            label: (context) => {
              const index = context.dataIndex
              const item = data[index]
              return [
                `Marks: ${item.marks}/${item.totalMarks}`,
                `Percentage: ${((item.marks / item.totalMarks) * 100).toFixed(1)}%`,
              ]
            },
          },
        },
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          grid: {
            color: gridColor,
            drawBorder: false,
            drawTicks: false,
          },
          ticks: {
            color: textColor,
            font: {
              size: 11,
            },
            padding: 8,
            callback: (value) => value.toFixed(0) + "%",
          },
          border: {
            display: false,
          },
        },
        x: {
          grid: {
            color: "transparent",
            drawOnChartArea: false,
            drawBorder: false,
            drawTicks: false,
          },
          ticks: {
            color: textColor,
            font: {
              size: 11,
            },
            padding: 8,
            maxRotation: 45,
            minRotation: 45,
          },
          border: {
            display: false,
          },
        },
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
      barPercentage: 0.95, // Increased from 0.9 to 0.95
      categoryPercentage: 0.95, // Increased from 0.9 to 0.95
    })
  }, [data])

  // Listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          // Re-render chart when theme changes
          setChartData({ ...chartData })
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      observer.disconnect()
    }
  }, [chartData])

  return (
    <div className="h-[300px] w-full">
      <Bar data={chartData} options={options} />
    </div>
  )
}
