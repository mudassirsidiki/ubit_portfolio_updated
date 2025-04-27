"use client"

import { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

interface SemesterGPAChartProps {
  data: {
    semester: string
    gpa: number
  }[]
}

export default function SemesterGPAChart({ data }: SemesterGPAChartProps) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "GPA",
        data: [],
        borderColor: "",
        backgroundColor: "",
        tension: 0.3,
      },
    ],
  })

  const [options, setOptions] = useState<ChartOptions<"line">>({
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
        text: "Semester-wise GPA",
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
        max: 4,
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

    // Create gradient for the area fill
    const createGradient = (ctx: CanvasRenderingContext2D, primaryColor: string) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400)
      gradient.addColorStop(0, `${primaryColor}80`) // 50% opacity
      gradient.addColorStop(1, `${primaryColor}00`) // 0% opacity
      return gradient
    }

    // Use blue for the line in both themes
    const primaryColor = isDarkMode ? "#3b82f6" : "#2563eb" // blue-500 or blue-600

    // Get canvas context for gradient
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    setChartData({
      labels: data.map((item) => item.semester),
      datasets: [
        {
          label: "GPA",
          data: data.map((item) => item.gpa),
          borderColor: primaryColor,
          backgroundColor: "transparent", // Remove gradient fill
          tension: 0.4,
          borderWidth: 2,
          pointBackgroundColor: primaryColor,
          pointBorderColor: isDarkMode ? "#1e293b" : "#ffffff",
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: false, // Disable fill
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
            title: (tooltipItems) => `Semester: ${tooltipItems[0].label}`,
            label: (context) => `GPA: ${context.parsed.y.toFixed(2)}`,
          },
        },
      },
      scales: {
        y: {
          min: 1, // Change from 0 to 1
          max: 4,
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
            callback: (value) => value.toFixed(1),
          },
          border: {
            display: false,
          },
        },
        x: {
          grid: {
            color: gridColor,
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
      elements: {
        line: {
          borderWidth: 2,
        },
        point: {
          hoverRadius: 6,
        },
      },
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
      <Line data={chartData} options={options} />
    </div>
  )
}
